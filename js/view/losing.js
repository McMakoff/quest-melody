import {renderScreen, getElementfromTemplate} from "../utils";
import welcomeTemplate from "./welcome-view";

const template = `<div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
<h2 class="result__title">Увы и ах!</h2>
<p class="result__total result__total--fail">Время вышло! Вы не успели отгадать все мелодии</p>
<button class="result__replay" type="button">Попробовать ещё раз</button>`;

const losingTemplate = getElementfromTemplate(template, `result template__content`);

const resultReplay = losingTemplate.querySelector(`.result__replay`);

resultReplay.addEventListener(`click`, () => {
  renderScreen(welcomeTemplate);
});

export default losingTemplate;
