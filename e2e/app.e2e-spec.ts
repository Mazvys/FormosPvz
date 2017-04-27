import { RegformaPage } from './app.po';

describe('regforma App', function() {
  let page: RegformaPage;

  beforeEach(() => {
    page = new RegformaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
