import { browser, by, element } from 'protractor';

export class CardPickerPage {
  navigateTo() {
    return browser.get(browser.baseUrl + '/card-picker') as Promise<any>;
  }

  getCardDetailName() {
    return element(by.id('cardName')).getText() as Promise<string>;
  }

}
