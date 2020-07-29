import WelcomeScreen from "./prezenter/welcome-screen";
import GameScreen from "./prezenter/game-screen";

const contentWrp = document.querySelector(`.main`);
const changeView = (html) => {
  contentWrp.innerHTML = ``;
  contentWrp.appendChild(html);
};

export default class Application {

  static showWelcome() {
    const welcome = new WelcomeScreen();
    changeView(welcome.element);
  }

  static showGame() {
    const gameScreen = new GameScreen();
    changeView(gameScreen.element);
    gameScreen.startTime();
  }

  /*static showStats(stats) {
      const statistics = new StatsScreen(stats);
      changeView(statistics.element);
    }*/
}
