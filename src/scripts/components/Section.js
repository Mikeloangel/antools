/**
 * Section class uses to add element in DOM
 */
export default class Section {
  /**
   *
   * @param {Object} {} with initial elements and callback function to render
   * @param {String} sectionSelector
   */
  constructor({ items, renderer }, sectionSelector) {
    // somwhat virtual DOM to make decision do we need to render item based on keys
    this._renderedItemsKeys = [];
    // adds keys to new items
    this._items = this._generateKey(items);
    this._container = document.querySelector(`.${sectionSelector}`);
    this._renderer = renderer;
  }

  // generates Key to evaluate do we need to rerender item
  // kinda dumb virtual DOM =)
  _generateKey(items) {
    return items.map(item => {
      item._key = Math.floor(Math.random() * 10000000);
      return item;
    })
  }

  concatItems(items) {
    this._items = this._items.concat(this._generateKey(items));
  }

  render() {
    this._items.forEach(item => {
      if (!this._renderedItemsKeys.includes(item._key)) {
        this._renderer(item);
        this._renderedItemsKeys.push(item._key);
      }
    });
  }

  addItem(element) {
    this._container.prepend(element);
  }
}
