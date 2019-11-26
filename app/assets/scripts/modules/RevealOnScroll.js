import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

// hide the elements
class RevealOnScroll {
  constructor() {
    // select the els using jquery = collection of the elements
    this.itemsToReveal = $(".feature-item");
    // run the method which is declared outside the constructor function
    this.hideInitially();
    // call the method createWaypoints
    this.createWaypoints();
  }

  // as soon as the page loads the class will be added
  // using jquery method
  hideInitially() {
    this.itemsToReveal.addClass("reveal-item");
  }

  createWaypoints() {
    // use jquery'each' = loop for every item in the collection itemsToReveal
    this.itemsToReveal.each(function() {
      var currentItem = this;
      // create a new object that is an instance of the Waypoint class (avaiable from the modul waypoints)
      new Waypoint({
        // DOM element to watch for when scrolling down the page
        element: currentItem,
        // what to do when the element is scrolled to
        handler: function() {
          $(currentItem).addClass("reveal-item--is-visible");
        },
        offset: "85%"
      })
    });
  }
}

export default RevealOnScroll;