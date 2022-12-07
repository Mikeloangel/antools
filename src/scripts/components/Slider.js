export default class Slider {
  #sliderElement;
  #btnNext;
  #btnPrevious;

  // paginator elements
  #paginatorElement;
  #paginatorElemntArray = [];
  #paginatorItemTemplate;

  // content elements
  #imgElement;
  #nameElement;
  #positionElement;
  #aboutElement;

  // card handling
  #currentCard = 0;
  #cards = [];

  constructor({ selector = 'testimonial' }) {
    this.#sliderElement = document.querySelector(`.${selector}`);

    this.#btnNext = this.#sliderElement.querySelector('.testimonial-next');
    this.#btnPrevious = this.#sliderElement.querySelector('.testimonial-back');

    this.#imgElement = this.#sliderElement.querySelector('.testimonial__portrait');
    this.#nameElement = this.#sliderElement.querySelector('.testimonial__name');
    this.#positionElement = this.#sliderElement.querySelector('.testimonial__position');
    this.#aboutElement = this.#sliderElement.querySelector('.testimonial__paragraph');

    this.#paginatorElement = this.#sliderElement.querySelector('.testimonial__page');
    this.#paginatorItemTemplate = this.#sliderElement.querySelector('#testimonial-paginator');

    this.#setEventListeners();
  }

  #setEventListeners() {
    this.#btnNext.addEventListener('click', this.nextSlide.bind(this));
    this.#btnPrevious.addEventListener('click', this.previousSlide.bind(this));
  }

  nextSlide(e) {
    e.preventDefault();

    if (this.#currentCard + 1 != this.#cards.length) {
      this.#currentCard++;
      this.renderSlider();
    }
  }

  previousSlide(e) {
    e.preventDefault();

    if (this.#currentCard > 0) {
      this.#currentCard--;
      this.renderSlider();
    }
  }

  /**
   *
   * @param {Array} cardsArray array of cards {link, name}
   * @param {Boolean} isAltering if true current cards will be replaced with first argument
   */
  loadCards(cardsArray, isAltering = false) {
    if (isAltering) {
      this.#cards = cardsArray;
    } else {
      this.#cards = this.#cards.concat(cardsArray);
    }

    this.#currentCard = 0;

    // adds pages marks
    cardsArray.forEach(() => {
      const element = this.#paginatorItemTemplate.content.cloneNode(true).querySelector('.testimonial__page-item');
      this.#paginatorElement.appendChild(element);
      this.#paginatorElemntArray.push(element);
    });

    this.renderSlider();
  }

  renderSlider() {
    const current = this.#cards[this.#currentCard];

    this.#imgElement.src = current.img;
    this.#imgElement.alt = current.name;

    this.#nameElement.textContent = current.name;
    this.#positionElement.textContent = current.position;
    this.#aboutElement.textContent = current.description;

    if (this.#currentCard === 0) {
      this.#btnPrevious.classList.remove('testimonial__chevron_active');
    } else {
      this.#btnPrevious.classList.add('testimonial__chevron_active');
    }

    if (this.#currentCard + 1 === this.#cards.length) {
      this.#btnNext.classList.remove('testimonial__chevron_active');
    } else {
      this.#btnNext.classList.add('testimonial__chevron_active');
    }

    // rerender page marks
    this.#paginatorElemntArray.forEach((item, index) => {
      if (index === this.#currentCard) {
        item.classList.add('testimonial__page-item_active');
      }else{
        item.classList.remove('testimonial__page-item_active');
      }
    });

  }
}
