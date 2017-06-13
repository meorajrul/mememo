import { MememoPage } from './app.po';

describe('mememo App', () => {
  let page: MememoPage;

  beforeEach(() => {
    page = new MememoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
