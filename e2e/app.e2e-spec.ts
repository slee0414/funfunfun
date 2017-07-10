import { FunfunfunPage } from './app.po';

describe('funfunfun App', () => {
  let page: FunfunfunPage;

  beforeEach(() => {
    page = new FunfunfunPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
