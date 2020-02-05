describe('Protractor Element Demo', () => {
  it('Locators', () => {
    // browser.waitForAngularEnabled(false);
    // browser.get('http://google.com'); // Not an Angular site

    // browser.waitForAngularEnabled(true);
    browser.get('http://juliemr.github.io/protractor-demo');

    element(by.model('first')).sendKeys(3);
    element(by.model('second')).sendKeys(5);
    // .then(() => browser.sleep(1000));
    element(by.id('gobutton')).click();

    // by.css: tagname[attribute='value']
    const answerElementPromise = element(
      by.css('h2[class="ng-binding"]')
    ).getText();

    answerElementPromise.then(text => console.log(text));

    // 'expect' is part of the Jasmine framework. It can resolve promises before comparing results.
    // 'toBe' compares using '==='
    expect(answerElementPromise).toBe('8');

    // 'toEqual' can be used to compare variable & objects. It seems like it also compares using '===' when variables.
    expect(answerElementPromise).toEqual('8');
  });
});
