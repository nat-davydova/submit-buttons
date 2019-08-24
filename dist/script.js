const DOM = {
  submitBtn: '.submit-button',
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

//find node parent function
const findParent = (elem, referenceElem) => {

  const className = referenceElem.slice(0, referenceElem.length);

  let ind = true;

  while (ind) {

    if (elem.classList.contains(className)) {
      break;
    } else {
      elem = elem.parentNode;
    }

  }

  return elem;

};

//onclick function for buttons - active state
document.querySelectorAll(DOM.submitBtn).forEach(elem => {

  elem.addEventListener('click', event => {

    let clickedElem = findParent(event.target, 'submit-button');

    const innerChildren = findChildren(clickedElem);

    //adding active class to the clicked elem
    if (!clickedElem.classList.contains('js-active')) {

      clickedElem.classList.add('js-active');

      innerChildren.forEach(elem => {
        elem.classList.add('js-active');
      });

    } else {

      //!!!just for pen toggling part!!!
      clickedElem.classList.remove('js-active');

      innerChildren.forEach(elem => {
        elem.classList.remove('js-active');
      });

    }

  });

});