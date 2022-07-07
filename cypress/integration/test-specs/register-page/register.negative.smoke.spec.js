import authPagesPOM from '../../../support/page-objects/authPagesPOM';
import homePagePOM from '../../../support/page-objects/homePagePOM';
authPagesPOM;
describe('Register Page - SMOKE TEST NEGATIVE (atempt to register a new user with email that was already registered at the shop) - Main Test Case', () => {
  const emailForLogin = authPagesPOM.testData.users.test1.email;
  const passwordForLogin = authPagesPOM.testData.users.test1.password;
  describe('PRECONDITIONS: Load Home Page', () => {
    it('Visit Home Page and check that the page was loaded', () => {
      homePagePOM.load();
    });
    it('Log Out', () => {});
    it('Click Sign Up button', () => {
      homePagePOM.signUpBtn().click();
    });
  });
  describe('Sign Up action', () => {
    it('Enter a valid email (that was registered before)', () => {
      cy.get(authPagesPOM.testData.AuthPages.emailInputField.fieldSelector)
        .type(emailForLogin)
        .should('have.value', emailForLogin);
    });
    it('Enter any valid password', () => {
      authPagesPOM
        .getInputById(20)
        .type(passwordForLogin)
        .should('have.value', passwordForLogin);
    });
    it('Click continue button', () => {
      cy.get(authPagesPOM.testData.AuthPages.submitBtn.selector).click();
    });
    it('Checking the error message', () => {
      cy.get(authPagesPOM.testData.AuthPages.errorMessage.selector)
        .children('p')
        .should(
          'have.text',
          authPagesPOM.testData.AuthPages.errorMessage.registerText
        );
    });
  });
});
