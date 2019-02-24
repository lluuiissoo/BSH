// import { CardPickerPage } from './card-picker.po';
// import { browser, logging, by, element } from 'protractor';

// describe('workspace-project Card Picker', () => {
//   let page: CardPickerPage;

//   beforeEach(() => {
//     page = new CardPickerPage();
//   });

//   it('When selecting 1st option, detail name should be Good Vibe', () => {
//     page.navigateTo();
//     var select = element(by.model('cards2'));
//     select.$('[value="1"]').click();
//     expect(page.getCardDetailName()).toContain('Good Vibe');
//   });

//   afterEach(async () => {
//     // Assert that there are no errors emitted from the browser
//     const logs = await browser.manage().logs().get(logging.Type.BROWSER);
//     expect(logs).not.toContain(jasmine.objectContaining({
//       level: logging.Level.SEVERE,
//     }));
//   });
// });
