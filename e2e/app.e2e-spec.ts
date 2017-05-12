import { VergelAppPage } from './app.po';

describe('vergel-app App', () => {
  let page: VergelAppPage;

  beforeEach(() => {
    page = new VergelAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
