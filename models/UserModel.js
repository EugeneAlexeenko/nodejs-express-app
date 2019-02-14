class UserModel {
  /**
   * Class constructor
   */
  constructor() {
    this.model = [
      {
        id: 1,
        email: 'vasilii@pochta.su',
        username: 'Василий Иванович',
        password: 'qwerty',
      },
      {
        id: 2,
        email: 'petyka@pochta.su',
        username: 'Петька',
        password: '12345',
      },
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
    const users = this.model.map(user => (
      {
        id: user.id,
        email: user.email,
        username: user.username,
      }
    ));

    return Promise.resolve(users);
  }

  /**
   * Return specific user by email
   * @param {Number} email User's email
   */
  findOne(email) {
    const user = this.model.find(userObject => (userObject.email === email));

    if (!user) {
      return Promise.reject(new Error('User not found'));
    }
    return Promise.resolve(user);
  }
}

export default new UserModel();
