import Repository from '../models/';

export default class User {
  /**
   * adds star to a recipe for a user
   * @param userId
   * @param recipeId
   * @returns {*|T}
   */
  static async getUserById (userId) {
    return Repository.User
      .findOne({ _id: userId })
      .then((user) => user);
  }

  /**
   * remove star to a recipe for a user
   * @param userId
   * @param recipeId
   * @returns {*}
   */
  static async addNewUser (userObject) {
    const User = Repository.User;
    const user = new User(userObject);
    return user.save()
      .then(user => user.toObject());
  }

  /**
   * gets all users
   * @returns {*}
   */
  static async getUsers () {
    return Repository.User.find();
  }
}
