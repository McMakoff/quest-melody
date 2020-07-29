import HeaderView from "../view/header-view";
import ArtistView from "../view/artist-view";
import GenreView from "../view/genre-view";
import QuestModel from "../model/quest-model";
import GameOverTime from "../view/game-over-time";
import GameOverLive from "../view/game-over-live";
import gameData from "../data/game-data";

export default class GameScreen {
  constructor() {
    this.model = new QuestModel();
    this.header = new HeaderView(this.model.state);
    this.level = (gameData[this.model.level].type === `artist`) ?
      new ArtistView(gameData, this.model.level) : new GenreView(gameData, this.model.level);
    this.level.onAnswer = this.onAnswer.bind(this);
    this.gameOverTime = new GameOverTime();
    this.gameOverLive = new GameOverLive();
    this.root = document.createElement(`div`);
    this.root.className = `game`;
    this.root.appendChild(this.header.element);
    this.root.appendChild(this.level.element);
    this.startAnswerTime = null;
    this.endAnswerTime = null;
    this.timer = null;
  }

  get element() {
    return this.root;
  }

  get answerTime() {
    return this.startAnswerTime - this.endAnswerTime;
  }

  tick() {
    this.model.changeTime();
    if (this.model.time === 0) {
      clearInterval(this.timer);
      this.showGameOverResult(this.gameOverTime.element);
    } else {
      this.header.timeUpdate();
    }
  }

  startTime() {
    this.startAnswerTime = this.model.time;
    this.timer = setInterval(() => {
      this.tick();
    }, 1000);
  }

  stopTime() {
    this.endAnswerTime = this.model.time;
    clearInterval(this.timer);
  }

  changeLevel(lev) {
    const level = (gameData[this.model.level].type === `artist`) ? new ArtistView(gameData, lev) : new GenreView(gameData, lev);
    level.onAnswer = this.onAnswer.bind(this);
    this.root.replaceChild(level.element, this.level.element);
    this.level = level;
  }

  changeHeader() {
    const header = new HeaderView(this.model.state);
    this.root.replaceChild(header.element, this.header.element);
    this.header = header;
  }

  onAnswer(answer) {
    this.stopTime();
    if (answer) {
      if (this.answerTime <= 30) {
        this.model.changePoints(2);
      } else {
        this.model.changePoints(1);
      }
    } else {
      this.model.changePoints(-2);
      this.model.changeLive();
      this.changeHeader();
    }

    if (this.model.lives === 0) {
      this.showGameOverResult(this.gameOverLive.element);
    } else {
      this.model.changeLevel();
      this.changeLevel(this.model.level);
      this.startTime();
    }
  }

  showGameOverResult(view) {
    this.root.innerHTML = ``;
    this.root.appendChild(view);
  }
}
