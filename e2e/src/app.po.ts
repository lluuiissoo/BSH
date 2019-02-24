import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(route?: string) {
    let url = browser.baseUrl;
    if (route) {
      url = url + '/' + route;
    }

    return browser.get(url) as Promise<any>;
    
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }

  getCardDetailName() {
    return element(by.css('app-card-picker .cardName')).getText() as Promise<string>;
  }
}
