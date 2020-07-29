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

  get points() {
    return this._state.points;
  }

  get lives() {
    return this._state.lives;
  }

  changeLevel() {
    this._state.level += 1;
  }

  changeTime() {
    this._state.time -= 1;
  }

  changePoints(point) {
    this._state.points.push(point);
  }

  changeLive() {
    this._state.lives -= 1;
  }

  restart() {
    this._state = {...initialState};
  }
}
