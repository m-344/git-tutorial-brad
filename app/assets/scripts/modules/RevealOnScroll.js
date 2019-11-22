import $ from 'jquery';

class RevealOnScroll {
  constructor() {
    this.itemsToReveal = $(".feature-item");
    this.hideInitially();
  }
  // a new method
  hideInitially() {
    this.itemsToReveal.addClass("reveal-item");
  }
}

export default RevealOnScroll;