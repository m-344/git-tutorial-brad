import $ from 'jquery';

// hide the elements
class RevealOnScroll {
  constructor() {
    // select the els using jquery
    this.itemsToReveal = $(".feature-item");
    // run the method which is defined below
    this.hideInitially();
  }

  // as soon as the page loads the class will be added
  // using jquery method
  hideInitially() {
    this.itemsToReveal.addClass("reveal-item");
  }
}

export default RevealOnScroll;