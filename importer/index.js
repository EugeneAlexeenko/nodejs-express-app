import fs from 'fs';
import path from 'path';
import { promisify } from 'util';
import csvjson from 'csvjson';
import db from '../models/db';
import config from '../config/config.json';
import logger from '../config/logger';

const readFile = promisify(fs.readFile);

// TODO: Now Importer little bit stupid and doesn't check if the file already
// been imported. Add this checking later. (Need some criteria)

/**
 * Importer class.
 *
 * Listen for the 'dirwatcher:changed' event and started import of the csv file
 */
class Importer {
  constructor(dirwatcher) {
    this.dirwatcher = dirwatcher;
    logger.info('Importer module constructor');

    dirwatcher.on('dirwatcher:changed', (file) => {
      logger.info(`Importer: Message from dirwatcher. New file detected: ${file}`);

      // get full path to the imported file
      const filePath = path.resolve(path.join(config.watchPath, file));

      this.import(filePath)
        .catch((error) => {
          logger.error(error.message);
        });
    });
  }

  /**
   * Performs import of .csv file (async implementation)
   * @param {String} file Path to the imported file
   * @returns {Promise(<Object>)} Promise with csv converted to object
   */
  import(file) {
    if (!this.constructor.isCsv(file)) {
      return Promise.reject(new Error(`Importer: Cannot import ${file}. Only '.csv' supported.`));
    }

    return readFile(file, { encoding: 'utf-8' })
      .then((data) => {
        const csvObject = csvjson.toObject(data);

        logger.info(`Importer: File ${file} has been successfully imported.`);
        logger.info(csvObject);

        return csvObject;
      })
      .then((dataArray) => {
        // TODO: extract mapper from importer to make importer format independent
        const mappedArray = dataArray.map(item => ({
          name: item.name,
          brand: item.brand,
          price: item.price,
          options: item.options,
        }));

        return db.Product.bulkCreate(mappedArray);
      });
  }

  /**
   * Check if a given file has .csv extension.
   * @param {String} file fileName to check
   * @returns {Boolean} true if file extension is .csv, false for other file extensions
   */
  static isCsv(file) {
    return (path.extname(file) === '.csv');
  }
}

export default Importer;
