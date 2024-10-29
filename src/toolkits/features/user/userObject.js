export class User {
  static createInitialUserFormData(
    name = "Legend",
    bio = "fron-end developer",
    email = ""
  ) {
    return {
      name,
      bio,
      email,
    };
  }

  static getInitialUserFormData() {
    const form = User.createInitialUserFormData();
    return form;
  }
}
