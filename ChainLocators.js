var { add, multiply } = require('./utils.js');

describe('Chain Locators Demo', () => {
  it('Chain Locators', () => {
    browser.get('http://juliemr.github.io/protractor-demo');

    add(3, 5);

    // by.css: tagname[attribute='value']
    element(by.repeater('result in memory'))
      .element(by.css('td:nth-child(3)')) // 3rd 'td' tag
      .getText()
      .then(value => console.log(value));

    multiply(11, 2);
    add(5, 14);
    multiply(6, 12);

    // Print the number of items in the table
    element
      .all(by.repeater('result in memory'))
      .count()
      .then(value => console.log(value));

    // Print out each answer in the table
    element.all(by.repeater('result in memory')).each(item => {
      item
        .element(by.css('td:nth-child(3)')) // 3rd 'td' tag
        .getText()
        .then(text => console.log(text));
    });
  });
});
