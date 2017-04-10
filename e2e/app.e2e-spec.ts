import { BasicAngularPage } from './app.po';

describe('basic-angular App', () => {
  let page: BasicAngularPage;

  beforeEach(() => {
    page = new BasicAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
