import { ClassWebsitePage } from './app.po';

describe('class-website App', function() {
  let page: ClassWebsitePage;

  beforeEach(() => {
    page = new ClassWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
