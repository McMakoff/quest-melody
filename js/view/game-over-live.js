import AbstractView from "./abstract-view";
import Application from "../Application";

export default class GameOverLive extends AbstractView {
  constructor() {
    super(`section`, `result`);
  }

  get template() {
    return (
      `<div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
      <h2 class="result__title">Какая жалость!</h2>
      <p class="result__total result__total--fail">У вас закончились все попытки. Ничего, повезёт в следующий раз!</p>
      <button class="result__replay" type="button">Попробовать ещё раз</button>`
    );
  }

  bind() {
    const replayBtn = this.element.querySelector(`.result__replay`);
    replayBtn.addEventListener(`click`, Application.showGame);
  }
}
