import WelcomeView from "../view/welcome-view";
import Application from "../Application";

export default class WelcomeScreen {
  constructor() {
    this.content = new WelcomeView();
    this.content.handleClick = () => {
      Application.showGame();
    };
  }

  get element() {
    return this.content.element;
  }
}
