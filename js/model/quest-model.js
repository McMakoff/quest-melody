import initialState from "../data/initial-state";

export default class QuestModel {
  constructor() {
    this.restart();
  }

  get state() {
    return this._state;
  }

  get level() {
    return this._state.level;
  }

  get time() {
    return this._state.time;
  }

  changeLevel() {
    this._state.level += 1;
  }

  changeTime() {
    this._state.time -= 1;
  }

  restart() {
    this._state = Object.assign({}, initialState);
  }
}
