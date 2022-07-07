import authPagesPOM from '../../../support/page-objects/authPagesPOM';
import homePagePOM from '../../../support/page-objects/homePagePOM';
authPagesPOM;
describe('Login Page - Main Page Elements and their base functionality Main Test Case', () => {
  const loginTitleText = authPagesPOM.testData.AuthPages.pageTitle.textLogin;
  const registerTitleText =
    authPagesPOM.testData.AuthPages.pageTitle.textRegister;
  const loginTextText = authPagesPOM.testData.AuthPages.pageText.loginText;
  const paragraphText = authPagesPOM.testData.AuthPages.paragraph.loginText;
  describe('PRECONDITIONS: Load Home Page', () => {
    it('Visit Home Page and check that the page was loaded', () => {
      homePagePOM.load();
    });
    it('Click Log In button', () => {
      homePagePOM.logInBtn().click();
    });
  });
  describe('Checking Page Title', () => {
    it('Page Title should exist and be visible', () => {
      authPagesPOM.authPagesTitle().should('be.visible');
    });
    it(`Page Title should have text "${loginTitleText}"`, () => {
      authPagesPOM.authPagesTitle().should('have.text', loginTitleText);
    });
  });
  describe('Checking Page Text', () => {
    it('Page Text should exist and be visible', () => {
      authPagesPOM.authPagesText().next().should('be.visible');
    });
    it(`Page Text should have text "${loginTextText}"`, () => {
      authPagesPOM.authPagesText().should('have.text', loginTextText);
    });
  });
  describe('Checking Paragraph', () => {
    it('Page Paragraph should exist and be visible', () => {
      authPagesPOM.authPagesText().next().should('be.visible');
    });
    it(`Page Text should have text "${paragraphText} ${authPagesPOM.testData.AuthPages.signUpLink.text}"`, () => {
      authPagesPOM
        .authPagesParagraph()
        .should(
          'have.text',
          paragraphText + ' ' + authPagesPOM.testData.AuthPages.signUpLink.text
        );
    });
  });
  describe('Checking Sign Up link', () => {
    it('Sign Up link should exist and be visible', () => {
      authPagesPOM.signUpLink().should('be.visible');
    });
    it(`Sign Up link should have text "${authPagesPOM.testData.AuthPages.signUpLink.text}"`, () => {
      authPagesPOM
        .signUpLink()
        .should('have.text', authPagesPOM.testData.AuthPages.signUpLink.text);
    });
    it(`Sign Up link should redirects user to the Register Page`, () => {
      authPagesPOM.signUpLink().click();
      authPagesPOM
        .authPagesTitle()
        .should('have.text', registerTitleText)
        .should('be.visible')
        .go('back');
    });
  });
  describe('Checking Input Fields', () => {
    it('Checking Email Input Field', () => {
      authPagesPOM.checkInputField(49, 'email');
    });
    it('Checking Password Input Field', () => {
      authPagesPOM.checkInputField(52);
    });
  });
  describe('Checking Submit Button', () => {
    it('Checking that Submit Button exists', () => {
      authPagesPOM.submitButton();
    });
    it(`Checking that Submit Button has text "${authPagesPOM.testData.AuthPages.submitBtn.loginText}"`, () => {
      authPagesPOM
        .submitButton()
        .should(
          'have.text',
          authPagesPOM.testData.AuthPages.submitBtn.loginText
        );
    });
    it('Checking that Submit Button is clickable', () => {
      authPagesPOM.submitButton().click();
    });
  });
});
