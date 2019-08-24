const DOM = {
  submitBtn: document.querySelectorAll('.submit-button'),
  submitPending: '.submit-button__pending',
  submitText: '.submit-button__text',
  submitLoaded: '.submit-button__loaded' };


//find exact children of the button
const findChildren = elem => {

  return [
  elem.querySelector(DOM.submitPending),
  elem.querySelector(DOM.submitText),
  elem.querySelector(DOM.submitLoaded)];


};

//onclick function for buttons - active state
DOM.submitBtn.forEach(elem => {

  elem.addEventListener('click', event => {

    let clickedElem;

    if (event.target.tagName === 'BUTTON' || event.target.tagName === 'A' || event.target.tagName === 'INPUT') {
      clickedElem = event.target;
    } else {
      clickedElem = event.target.parentNode;
    }

    const innerChildren = findChildren(clickedElem);

    //adding active class to the clicked elem
    if (!clickedElem.classList.contains('js-active')) {

      clickedElem.classList.add('js-active');

      innerChildren.forEach(elem => {
        elem.classList.add('js-active');
      });

    } else {

      //just for pen toggling part
      clickedElem.classList.remove('js-active');

      innerChildren.forEach(elem => {
        elem.classList.remove('js-active');
      });

    }

  });

});