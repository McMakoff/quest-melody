import artistLevels from "../data/artist-levels";
import AbstractView from "./abstract-view";

export default class LevelView extends AbstractView {
  constructor(level) {
    super(`section`, `game__screen`);
    this.level = level;
  }

  get template() {
    return (
      `<h2 class="game__title">Кто исполняет эту песню?</h2>
      <div class="game__track">
        <button class="track__button track__button--play" type="button"></button>
        <audio id="audio" src="${artistLevels[this.level].answer.src}"></audio>
      </div>
      
      <form class="game__artist">
        ${artistLevels[this.level].artists.map((artist, index) => `<div class="artist">
              <input class="artist__input visually-hidden" type="radio" name="answer" value="${artist.artist}" id="answer-${index + 1}">
              <label class="artist__name" for="answer-${index + 1}">
                <img class="artist__picture" src="${artist.image}" alt="${artist.artist}">
                ${artist.artist}
              </label>
            </div>`)
          .join(``)}
      </form>`
    );
  }

  onAnswer() {}

  updateTemplate(level) {}

  bind() {
    const inputs = this.element.querySelectorAll(`.artist__input`);
    Array.from(inputs).forEach((input) => {
      input.addEventListener(`change`, this.onAnswer);
    });
    const audio = this.element.querySelector(`#audio`);
    const audioBtn = this.element.querySelector(`.track__button`);
    audioBtn.addEventListener(`click`, () => {
      if (audio.paused) {
        audioBtn.classList.remove(`track__button--play`);
        audioBtn.classList.add(`track__button--pause`);
        audio.play();
      } else {
        audioBtn.classList.remove(`track__button--pause`);
        audioBtn.classList.add(`track__button--play`);
        audio.pause();
      }
    });
  }
}
