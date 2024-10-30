export class User {
  static createInitialUserFormData(
    name = "Legend",
    bio = "fron-end developer",
    email = "",
    photo = ""
  ) {
    return {
      name,
      bio,
      email,
      photo,
    };
  }

  static getInitialUserFormData() {
    const form = User.createInitialUserFormData();
    return form;
  }
}
