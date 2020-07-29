import AbstractView from "./abstract-view";

export default class SplashView extends AbstractView {
  constructor() {
    super(`div`, `splash__screen`);
  }

  get template() {
    return (
      `<svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
        <circle class="timer__line" cx="390" cy="390" r="370" style="filter: url(#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>
      </svg>`
    );
  }
}
