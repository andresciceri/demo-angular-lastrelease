import { DemoAngularFinalPage } from './app.po';

describe('demo-angular-final App', function() {
  let page: DemoAngularFinalPage;

  beforeEach(() => {
    page = new DemoAngularFinalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
