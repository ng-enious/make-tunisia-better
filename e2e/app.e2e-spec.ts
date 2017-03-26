import { ChangeCOPage } from './app.po';

describe('change-co App', () => {
  let page: ChangeCOPage;

  beforeEach(() => {
    page = new ChangeCOPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
