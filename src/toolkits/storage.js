export class Storage {
  static STATE_NAME = "tod";

  static loadState() {
    return JSON.parse(localStorage.getItem(Storage.STATE_NAME));
  }

  static saveState(state) {
    localStorage.setItem(Storage.STATE_NAME, JSON.stringify(state));
  }

  // Check without parsing, high performence;
  static isStateSaved() {
    try {
      return localStorage.getItem(Storage.STATE_NAME) ? true : false;
    } catch (err) {
      return null;
    }
  }
}
