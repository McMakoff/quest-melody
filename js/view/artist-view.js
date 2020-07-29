import AbstractView from "./abstract-view";

export default class ArtistView extends AbstractView {
  constructor(data, level) {
    super(`section`, `game__screen`);
    this.data = data;
    this.level = level;
  }

  get template() {
    return (
      `<h2 class="game__title">Кто исполняет эту песню?</h2>
      <div class="game__track">
        <button class="track__button track__button--play" type="button"></button>
        <audio id="audio" src="${this.data[this.level].src}"></audio>
      </div>
      
      <form class="game__artist">
        ${this.data[this.level].answers.map((answer, index) => `<div class="artist">
              <input class="artist__input visually-hidden" type="radio" name="answer" value="${answer.title}" id="answer-${index + 1}">
              <label class="artist__name" for="answer-${index + 1}">
              <img class="artist__picture${answer.isCorrect ? ` __correct` : ``}" src="${answer.image}" alt="${answer.title}">
                ${answer.title}
              </label>
            </div>`)
          .join(``)}
      </form>`
    );
  }

  onAnswer(answer) {}

  bind() {
    const inputs = this.element.querySelectorAll(`.artist__input`);
    inputs.forEach((input) => {
      input.addEventListener(`change`, (e) => {
        const answerIndex = Array.from(inputs).indexOf(e.target);
        const answer = this.data[this.level].answers[answerIndex].isCorrect;
        this.onAnswer(answer);
      });
    });

    const audio = this.element.querySelector(`#audio`);
    const audioBtn = this.element.querySelector(`.track__button`);
    const audioBtnPlayedClass = `track__button--play`;
    const audioBtnPausedClass = `track__button--pause`;
    audio.play();
    audioBtn.classList.remove(audioBtnPlayedClass);
    audioBtn.classList.add(audioBtnPausedClass);
    audioBtn.addEventListener(`click`, () => {
      if (audio.paused) {
        audioBtn.classList.remove(audioBtnPlayedClass);
        audioBtn.classList.add(audioBtnPausedClass);
        audio.play();
      } else {
        audioBtn.classList.remove(audioBtnPausedClass);
        audioBtn.classList.add(audioBtnPlayedClass);
        audio.pause();
      }
    });
  }
}
