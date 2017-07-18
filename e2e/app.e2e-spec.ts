import { AscentBatchPage } from './app.po';

describe('ascent-batch App', () => {
  let page: AscentBatchPage;

  beforeEach(() => {
    page = new AscentBatchPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
