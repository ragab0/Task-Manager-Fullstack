import { nanoid } from "nanoid";

export class Modal {
  constructor(name, comp) {
    this.id = nanoid();
    this.name = name;
    this.Comp = comp;
    this.isOpen = true;
  }

  static isModalOpened(list, payload) {
    if (list.at(-1) === payload) {
      return true;
    }
  }
}
