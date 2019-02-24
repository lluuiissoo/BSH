import { AppPage } from './app.po';
import { browser, logging, by, element } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    let appTitle = 'Beatiful Sweet Home';
    expect(page.getTitleText()).toEqual('Welcome to ' + appTitle + '!');
  });

  // it('In Card Picker screen, when selecting 1st option, detail name should be Good Vibe', () => {
    
  //   page.navigateTo('card-picker');

  //   let appTitle = 'Card Picker';
  //   expect(page.getTitleText()).toEqual(appTitle);

  //   // var select = element(by.name('cards2'));
  //   // select.$('[value="1"]').click();

  //   //element(by.name('cards2')).$('[value="1"]').click();

  //   expect(page.getCardDetailName()).toContain('Good Vibe');
  // });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    }));
  });
});

describe('Card Picker screen', () => {
  let page: AppPage;

  beforeAll(() => {
    page = new AppPage();
    page.navigateTo('card-picker');
  });

  it('Title must be Card Picker', () => {
    
    let appTitle = 'Card Picker';
    expect(page.getTitleText()).toEqual(appTitle);

  });

  it('When selecting 2nd option, detail name should be Nicer Things', () => {
    
    //Select 2nd option from dropdown
    element(by.name('cards2')).$('[value="2"]').click();

    expect(page.getCardDetailName()).toEqual('Nicer Things');
  });

  it('When selecting 1st option, detail name should be Good Vibe', () => {
    
    //Select 1st option from dropdown
    element(by.name('cards2')).$('[value="1"]').click();

    expect(page.getCardDetailName()).toEqual('Good Vibe');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    }));
  });
});
