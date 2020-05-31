import HeaderView from "../view/header-view";
import LevelView from "../view/level-view";
import QuestModel from "../model/quest-model";

export default class GameScreen {
  constructor() {
    this.model = new QuestModel();
    this.header = new HeaderView(this.model.state);
    this.level = new LevelView(this.model.level);
    this.level.onAnswer = this.onAnswer.bind(this);
    this.root = document.createElement(`div`);
    this.root.className = `game game--artist`;
    this.root.appendChild(this.header.element);
    this.root.appendChild(this.level.element);
  }

  get element() {
    return this.root;
  }

  startGame() {
    setInterval(() => {
      this.model.changeTime();
      this.header.timeUpdate(this.model.time);
    }, 1000);
  }

  changeLevel(lev) {
    const level = new LevelView(lev);
    level.onAnswer = this.onAnswer.bind(this);
    this.root.replaceChild(level.element, this.level.element);
    this.level = level;
  }

  onAnswer() {
    this.model.changeLevel();
    this.changeLevel(this.model.level);
  }
}
