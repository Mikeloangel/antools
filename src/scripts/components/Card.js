/**
 * Class to create a Card object to insert in DOM
 */
export default class Card {
  /**
   *
   * @param {Object} data object with form settings (name and link)
   * @param {String} templateSelector selector name
   */

  constructor({ name, tier, description, img, link, isLiked }, templateSelector) {
    this._name = name;
    this._tier = tier;
    this._description = description;
    this._img = img;
    this._link = link;
    this._isLiked = isLiked;

    this._templateSelector = templateSelector;
  }

  _setTemplate() {
    this._cardElement = document.querySelector(this._templateSelector).content.cloneNode(true).querySelector('.tool');

    this._imgElement = this._cardElement.querySelector('.tool__img');
    this._titleElement = this._cardElement.querySelector('.tool__title');
    this._tierElement = this._cardElement.querySelector('.tool__tier');
    this._descriptionElement = this._cardElement.querySelector('.tool__description');
    this._likeElement = this._cardElement.querySelector('.tool__like');
    this._linkElement = this._cardElement.querySelector('.tool__visit');

    this.renderLike();
  }

  _setEventListeners() {
    this._likeElement.addEventListener('click', this.toggleLike.bind(this));
  }

  toggleLike(){
    this._isLiked = !this._isLiked;
    this.renderLike();
  }

  removeCard() {
    this._cardElement.remove()
    this._cardElement = null;
  }

  renderLike() {
    if (this._isLiked) {
      this._likeElement.classList.add('tool__button_liked');
    } else {
      this._likeElement.classList.remove('tool__button_liked');
    }
  }

  createCard() {
    this._setTemplate();

    this._imgElement.src = this._img;
    this._imgElement.alt = this._name;

    this._titleElement.textContent = this._name;
    this._tierElement.textContent = this._tier;
    this._descriptionElement.textContent = this._description;
    this._linkElement.href = this._link;

    this._setEventListeners();

    return this._cardElement;
  }
}
