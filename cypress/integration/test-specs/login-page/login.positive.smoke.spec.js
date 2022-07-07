import authPagesPOM from '../../../support/page-objects/authPagesPOM';
import homePagePOM from '../../../support/page-objects/homePagePOM';
authPagesPOM;
describe('Login Page - SMOKE TEST POSITIVE - Main Test Case', () => {
  const emailForLogin = authPagesPOM.testData.users.test1.email;
  const passwordForLogin = authPagesPOM.testData.users.test1.password;
  describe('PRECONDITIONS: Load Home Page', () => {
    it('Visit Home Page and check that the page was loaded', () => {
      homePagePOM.load();
    });

    it('Click Log In button', () => {
      homePagePOM.logInBtn().click();
    });
  });
  describe('Log In action', () => {
    it('Enter a valid email (that was registered before)', () => {
      cy.get(authPagesPOM.testData.AuthPages.emailInputField.fieldSelector)
        .type(emailForLogin)
        .should('have.value', emailForLogin);
    });
    it('Enter a valid password (that was registered before)', () => {
      cy.get(authPagesPOM.testData.AuthPages.passwordInputField.fieldSelector)
        .type(passwordForLogin)
        .should('have.value', passwordForLogin);
    });
    it('Click continue button', () => {
      cy.get(authPagesPOM.testData.AuthPages.submitBtn.selector).click();
    });
    it('Checking that user was logged in successfuly. User profile button should apear on Home Page only after Log In', () => {
      homePagePOM
        .homePageTitle()
        .should('be.visible')
        .should(
          'have.text',
          homePagePOM.testData.homePage.login.pageTitle.text
        );
    });
    it('Log Out', () => {
      authPagesPOM.logOut();
    });
  });
});
