import authPagesPOM from '../../../support/page-objects/authPagesPOM';
import homePagePOM from '../../../support/page-objects/homePagePOM';
authPagesPOM;
describe('Login Page - SMOKE TEST NEGATIVE (attempt to Log In with random valid credentials (there is no any user in DB with these credentials)) - Main Test Case', () => {
  const emailForRegister = authPagesPOM.generateEmail();
  const passwordForRegister = authPagesPOM.generatePassword();
  describe('PRECONDITIONS: Load Home Page', () => {
    it('Visit Home Page and check that the page was loaded', () => {
      homePagePOM.load();
    });
    it('Click Log In button', () => {
      homePagePOM.logInBtn().click();
    });
  });
  describe('Log In action', () => {
    it('Enter a valid email', () => {
      cy.get(authPagesPOM.testData.AuthPages.emailInputField.fieldSelector)
        .type(emailForRegister)
        .should('have.value', emailForRegister);
    });
    it('Enter a valid password', () => {
      cy.get(authPagesPOM.testData.AuthPages.passwordInputField.fieldSelector)
        .type(passwordForRegister)
        .should('have.value', passwordForRegister);
    });
    it('Click continue button', () => {
      cy.get(authPagesPOM.testData.AuthPages.submitBtn.selector).click();
    });
    it('Checking the error message', () => {
      cy.get(authPagesPOM.testData.AuthPages.errorMessage.selector)
        .children('p')
        .should(
          'have.text',
          authPagesPOM.testData.AuthPages.errorMessage.logintext
        );
    });
  });
});
