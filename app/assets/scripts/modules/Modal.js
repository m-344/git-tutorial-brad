import $ from 'jquery';

class Modal {
  constructor() {
    this.openModalButton = $(".open-modal");
    this.modal = $(".modal");
    this.closeModalButton = $(".modal-close");
    this.events();
  }

  events() {
    // clicking the open modal button
    // when the element with the class 'open-modal' is clicked
    // the method openModal is run
    this.openModalButton.click(this.openModal.bind(this));

    // clicking the x close button
    // the .bind method sets the value of the 'this'-keyword
    this.closeModalButton.click(this.closeModal.bind(this));

    // pushes the escape key
  }

  openModal() {
    this.modal.addClass("modal--is-visible");
    // prevents browser the default behaviour of scrolling up
    return false;
  }

  closeModal() {
    this.modal.removeClass("modal--is-visible");
  }
}

export default Modal;