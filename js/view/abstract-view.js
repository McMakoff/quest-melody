export default class AbstractView {
  constructor(wrapper, wrapperClasses) {
    if (new.target === AbstractView) {
      throw new Error(`This Abstract class`);
    }

    this.wrapper = wrapper;
    this.wrapperClasses = wrapperClasses;
  }

  get template() {
    throw new Error(`Template is required`);
  }

  get element() {
    if (this._element) {
      return this._element;
    }
    this._element = document.createElement(this.wrapper);
    this._element.className = this.wrapperClasses;
    this._element.innerHTML = this.template.trim();
    this.bind();
    return this._element;
  }

  bind() {
    /* handlers if required */
  }
}
