import homePagePOM from '../../../support/page-objects/homePagePOM';

describe('Home Page Default (before Log In) - Main Page Elements and their base functionality Main Test Case', () => {
  describe('PRECONDITIONS: Load Home Page', () => {
    it('Visit Home Page and check that the page was loaded', () => {
      homePagePOM.load();
    });
  });
});
