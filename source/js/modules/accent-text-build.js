export default class AccentTextBuild {
  constructor(elementSelector, timer, classForActivate, property) {
    this._TIME_SPACE = 100;

    this._elementSelector = elementSelector;
    this._timer = timer;
    this._classForActivate = classForActivate;
    this._property = property;

    this._element = document.querySelector(this._elementSelector);
    this._timeOffset = 100;

    this.prepareText();
  }

  createElement(letter, index) {
    const span = document.createElement(`span`);
    span.textContent = letter;

    span.style.transition = `${this._property} ${this._timer}ms ease ${this._timeOffset}ms`;

    this._timeOffset = 200 * Math.cos(index);

    return span;
  }

  prepareText() {
    if (!this._element) {
      return;
    }
    const text = this._element.textContent
      .trim()
      .split(/\s+/)
      .filter((letter) => letter !== "");

    const content = text.reduce((fragmentParent, word) => {
      const wordElement = Array.from(word).reduce((fragment, letter, index) => {
        fragment.appendChild(this.createElement(letter, index));
        return fragment;
      }, document.createDocumentFragment());
      const wordContainer = document.createElement(`span`);
      wordContainer.classList.add(`text__word`);
      wordContainer.appendChild(wordElement);
      fragmentParent.appendChild(wordContainer);
      return fragmentParent;
    }, document.createDocumentFragment());

    this._element.innerHTML = ``;
    this._element.appendChild(content);
  }

  runAnimation() {
    if (!this._element) {
      return;
    }
    this._element.classList.add(this._classForActivate);
  }

  destroyAnimation() {
    this._element.classList.remove(this._classForActivate);
  }
}
