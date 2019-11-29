import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class StickyHeader {
  constructor() {
    this.siteHeader = $(".site-header");
    this.headerTriggerElement = $(".large-hero__title");
    this.createHeaderWaypoint();
    this.pageSection = $(".page-section");
    this.createPageSectionWaypoints();
  }

  createHeaderWaypoint() {
    var that = this;
    new Waypoint({
      // element expects DOM element (not a jquery object)
      // that's why use '[0]' in order to access the first item in the array
      element: that.headerTriggerElement[0],
      handler: function(direction) {
        if (direction == "down") {
          that.siteHeader.addClass("site-header--dark");
        } else {
          that.siteHeader.removeClass("site-header--dark");
        }
      }
    });
  }

  createPageSectionWaypoints() {
    this.pageSections.each(function() {
      var currentPageSection = this;
      new Waypoint({
        element: currentPageSection,
        handler: function() {
          var matchingHeaderLink = currentPageSection.getAtribute("data-matching-link");
          $(matchingHeaderLink).addClass("is-current-link");
        }
      });
    });
  }
}

// export is needed in order to be abel touse it in another file
export default StickyHeader;