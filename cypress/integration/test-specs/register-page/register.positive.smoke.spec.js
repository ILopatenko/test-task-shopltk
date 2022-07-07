import authPagesPOM from '../../../support/page-objects/authPagesPOM';
import homePagePOM from '../../../support/page-objects/homePagePOM';
authPagesPOM;
describe('Register Page - SMOKE TEST POSITIVE - Main Test Case', () => {
  const emailRegistration = authPagesPOM.generateEmail();
  const passwordForRegistration = authPagesPOM.generatePassword();
  describe('PRECONDITIONS: Load Home Page', () => {
    it('Visit Home Page and check that the page was loaded', () => {
      homePagePOM.load();
    });
    it('Click Sign Up button', () => {
      homePagePOM.signUpBtn().click();
    });
  });
  describe('Sign Up action', () => {
    it('Enter a valid email (that was registered before)', () => {
      cy.get(authPagesPOM.testData.AuthPages.emailInputField.fieldSelector)
        .type(emailRegistration)
        .should('have.value', emailRegistration);
    });
    it('Enter any valid password', () => {
      authPagesPOM
        .getInputById(20)
        .type(passwordForRegistration)
        .should('have.value', passwordForRegistration);
    });
    it('Click continue button', () => {
      cy.get(authPagesPOM.testData.AuthPages.submitBtn.selector).click();
    });
    it('Checking that user was registered successfuly. And redirected to the Home Page', () => {
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
