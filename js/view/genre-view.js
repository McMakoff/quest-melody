import AbstractView from "./abstract-view";

export default class GenreView extends AbstractView {
  constructor(data, level) {
    super(`section`, `game__screen`);
    this.data = data;
    this.level = level;
  }

  get template() {
    return (
      `<h2 class="game__title">Выберите все треки в жанре <b>${this.data[this.level].genre}</b></h2>
      <form class="game__tracks">
        ${this.data[this.level].answers.map((answer, index) => `<div class="track">
            <button class="track__button track__button--play" type="button"></button>
            <div class="track__status">
              <audio class="track__audio" src="${answer.src}"></audio>
            </div>
            <div class="game__answer">
              <input class="game__input visually-hidden" type="checkbox" name="answer" value="${answer.title}" id="answer-${index + 1}">
              <label class="game__check${answer.isCorrect ? ` __correct` : ``}" for="answer-${index + 1}">Отметить</label>
            </div>
          </div>`).join(``)}
        <button class="game__submit button" type="submit">Ответить</button>
      </form>`
    );
  }

  get stateAnswerArray() {
    return this.data[this.level].answers.map((answer) => answer.isCorrect);
  }

  onAnswer(answer) {}

  bind() {
    const btnSubmit = this.element.querySelector(`.game__submit`);
    const currentAnswerArray = new Array(this.stateAnswerArray.length).fill(false);
    const gameInputs = this.element.querySelectorAll(`.game__input`);
    btnSubmit.setAttribute(`disabled`, ``);
    gameInputs.forEach((input) => {
      input.addEventListener(`change`, () => {
        for (let j = 0; j < gameInputs.length; j++) {
          if (gameInputs[j].checked) {
            btnSubmit.removeAttribute(`disabled`);
            return;
          } else {
            btnSubmit.setAttribute(`disabled`, ``);
          }
        }
      });
    });

    btnSubmit.addEventListener(`click`, () => {
      gameInputs.forEach((input, index) => {
        if (input.checked) {
          currentAnswerArray.splice(index, 1, true);
        }
      });

      let answer = true;

      for (let i = 0; i < this.stateAnswerArray.length; i++) {
        if (this.stateAnswerArray[i] !== currentAnswerArray[i]) {
          answer = false;
          return;
        }
      }

      this.onAnswer(answer);
    });

    const audioBtns = this.element.querySelectorAll(`.track__button`);
    audioBtns.forEach((btn) => {
      btn.addEventListener(`click`, (e) => {
        const currentBtn = e.currentTarget;

        audioBtns.forEach((el) => {
          if (el !== currentBtn) {
            const audioEl = el.closest(`.track`).querySelector(`.track__audio`);
            audioEl.pause();
            el.classList.remove(`track__button--pause`);
            el.classList.add(`track__button--play`);
          } else {
            const currentAudio = currentBtn.closest(`.track`).querySelector(`.track__audio`);
            if (currentBtn.classList.contains(`track__button--pause`)) {
              currentAudio.pause();
              currentBtn.classList.remove(`track__button--pause`);
              currentBtn.classList.add(`track__button--play`);
            } else {
              currentAudio.play();
              currentBtn.classList.remove(`track__button--play`);
              currentBtn.classList.add(`track__button--pause`);
            }
          }
        });
      });
    });
  }
}
