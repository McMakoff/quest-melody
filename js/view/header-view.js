import AbstractView from "./abstract-view";

export default class HeaderView extends AbstractView {
  constructor(state) {
    super(`header`, `game__header`);
    this.state = state;
  }

  get template() {
    return (
      `<a class="game__back" href="#">
        <span class="visually-hidden">Сыграть ещё раз</span>
        <img class="game__logo" src="/img/melody-logo-ginger.png" alt="Угадай мелодию">
      </a>
  
      <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
        <circle class="timer__line" cx="390" cy="390" r="370" style="filter: url(source#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>
      </svg>
    
      <div class="timer__value">
        <span class="timer__mins">${this.minute}</span>
        <span class="timer__dots">:</span>
        <span class="timer__secs">${this.second}</span>
      </div>
  
      <div class="game__mistakes">
        ${new Array(3 - this.state.lives)
        .fill(`<div class="wrong __empty"></div>`)
        .join(``)}
        ${new Array(this.state.lives)
        .fill(`<div class="wrong"></div>`)
        .join(``)}
      </div>`
    );
  }

  get minute() {
    return `0${Math.floor(this.state.time / 60)}`;
  }

  get second() {
    const secondRemaining = this.state.time % 60;
    return secondRemaining < 10 ? `0${secondRemaining}` : `${secondRemaining}`;
  }

  timeUpdate() {
    const second = this.element.querySelector(`.timer__secs`);
    const minute = this.element.querySelector(`.timer__mins`);
    minute.textContent = this.minute;
    second.textContent = this.second;
  }
}
