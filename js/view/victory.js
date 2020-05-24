import {renderScreen, getElementfromTemplate} from "../utils";
import welcomeTemplate from "./welcome-view";

const template = `<div class="result__logo"><img src="img/melody-logo.png" alt="Угадай мелодию" width="186" height="83"></div>
<h2 class="result__title">Вы настоящий меломан!</h2>
<p class="result__total">За 3 минуты и 25 секунд вы набрали 12 баллов (8 быстрых), совершив 3 ошибки</p>
<p class="result__text">Вы заняли 2 место из 10. Это лучше чем у 80% игроков</p>
<button class="result__replay" type="button">Сыграть ещё раз</button>`;

const victoryTemplate = getElementfromTemplate(template, `result template__content`);

const resultReplay = victoryTemplate.querySelector(`.result__replay`);

resultReplay.addEventListener(`click`, () => {
  renderScreen(welcomeTemplate);
});
export default victoryTemplate;
