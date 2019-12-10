import $ from 'jquery';

class Modal {
  constructor() {
    this.openModalButton = $(".open-modal");
    this.modal = $(".modal");
    this.closeModalButton = $(".modal__close");
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

    // pushes any key
    // $(document) selects all the page
    $(document).keyup(this.keyPressHandler.bind(this));
  }
  // 'e' is any parameter
  keyPressHandler(e) {
    if (e.keyCode == 27) {
      this.closeModal();
    }

  }
  openModal() {
    this.modal.addClass("modal--is-visible");
    // prevents browser the default behaviour of scrolling up
    return false;
  }

  closeModal() {
    console.log('clicked!');
    this.modal.removeClass("modal--is-visible");
  }
}

export default Modal;