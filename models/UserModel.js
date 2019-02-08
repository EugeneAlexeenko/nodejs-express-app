class UserModel {
  /**
   * Class constructor
   */
  constructor() {
    this.model = [
      { id: 1, name: 'Василий Иванович' },
      { id: 2, name: 'Петька' },
    ];
  }

  /**
   * Create a new user
   * @param {Object} user new User object
   * @returns {Object} user Created user
   */
  create(user) {
    this.model.push(user);
    return Promise.resolve(user);
  }

  /**
   * Return all users
   * @returns {Object[]} users
   */
  findAll() {
    const users = this.model;

    return Promise.resolve(users);
  }

  /**
   * Return specific user
   * @param {Number} id User's id
   */
  findOne(id) {
    const user = this.model.find(userObject => userObject.id === id);

    if (!user) {
      return Promise.reject(new Error('User not found'));
    }
    return Promise.resolve(user);
  }
}

export default new UserModel();
