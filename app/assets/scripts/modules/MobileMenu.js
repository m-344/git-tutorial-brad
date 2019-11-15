import $ from 'jquery';


class MobileMenu {
	constructor() {
		// selecting elements from the DOM
		this.menuIcon = $(".site-header__menu-icon");
		this.menuContent = $(".site-header__menu-content");
		// call the function
		this.events();
	}
	// event handling method: when menuIcon is cklicked we want to call the toggleTheMenu()
	events() {
		// use bind() to pass the object whithin the keyword 'this' to the toggleTheMenu()
	 // Otherwise the 'this' in that function will have the value of the clicked DOM element
		this.menuIcon.click(this.toggleTheMenu.bind(this));

	}
	// defining functionality
	toggleTheMenu() {
		this.menuContent.toggleClass("site-header__menu-content--is-visible");
	}
}

export default MobileMenu;
