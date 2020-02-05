const ADD = 1;
const MULTIPLY = 4;

const ADD_TEXT = 'ADDITION';
const MULTIPLY_TEXT = 'MULTIPLICATION';

function add(a, b) {
  changeOperator(ADD);
  execute(a, b);
}

function multiply(a, b) {
  // changeOperator(MULTIPLY);
  changeOperatorUsingValue(MULTIPLY_TEXT);
  execute(a, b);
}

function changeOperator(operator) {
  element(by.model('operator'))
    .element(by.css(`option:nth-child(${operator})`))
    .click();
}

function changeOperatorUsingValue(operator) {
  element(by.model('operator'))
    .all(by.tagName('option'))
    .each(item =>
      item.getAttribute('value').then(text => {
        if (text === operator) {
          item.click();
        }
      })
    );
}

function execute(a, b) {
  element(by.model('first')).sendKeys(a);
  element(by.model('second')).sendKeys(b);

  element(by.id('gobutton')).click();
}

module.exports = { add, multiply };
