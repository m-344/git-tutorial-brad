import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

// hide or show the elements
class RevealOnScroll {
  constructor(els, offset) {
    // select the els using jquery = collection of the elements
    this.itemsToReveal = els;
    // first hide the elementes = run the method which is declared outside the constructor function
    this.offsetPercentage = offset;
    this.hideInitially();
    // show the elements when needed = call the method createWaypoints
    this.createWaypoints();
  }

  // as soon as the page loads, the class will be added
  // using jquery method
  hideInitially() {
    this.itemsToReveal.addClass("reveal-item");
  }

  createWaypoints() {
    // use jquery'each' = loop for every item in the collection itemsToReveal
    var that = this;
    this.itemsToReveal.each(function() {
      // the variable is needed to store the current item
      var currentItem = this;
      // create a new object that is an instance of the Waypoint class (avaiable from the modul waypoints)
      new Waypoint({
        // DOM element to watch for, when scrolling down the page
        // using $currentItem bcs otherwise 'this' would refere to something else
        element: currentItem,
        // what to do when the element is scrolled to
        handler: function() {
          $(currentItem).addClass("reveal-item--is-visible");
        },
        offset: that.offsetPercentage
      })
    });
  }
}

export default RevealOnScroll;