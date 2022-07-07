import authPagesPOM from '../../../support/page-objects/authPagesPOM';
import homePagePOM from '../../../support/page-objects/homePagePOM';
authPagesPOM;
describe('Login Page - Main Page Elements and their base functionality Main Test Case', () => {
  const registerTitleText =
    authPagesPOM.testData.AuthPages.pageTitle.textRegister;
  const loginTitleText = authPagesPOM.testData.AuthPages.pageTitle.textLogin;
  const registerTextText =
    authPagesPOM.testData.AuthPages.pageText.registerText;
  const paragraphText = authPagesPOM.testData.AuthPages.paragraph.registerText;
  describe('PRECONDITIONS: Load Home Page', () => {
    it('Visit Home Page and check that the page was loaded', () => {
      homePagePOM.load();
    });
    it('Click Log In button', () => {
      homePagePOM.signUpBtn().click();
    });
  });
  describe('Checking Page Title', () => {
    it('Page Title should exist and be visible', () => {
      authPagesPOM.authPagesTitle().should('be.visible');
    });
    it(`Page Title should have text "${registerTitleText}"`, () => {
      authPagesPOM.authPagesTitle().should('have.text', registerTitleText);
    });
  });
  describe('Checking Page Text', () => {
    it('Page Text should exist and be visible', () => {
      authPagesPOM.authPagesText().next().should('be.visible');
    });
    it(`Page Text should have text "${registerTextText}"`, () => {
      authPagesPOM.authPagesText().should('have.text', registerTextText);
    });
  });
  describe('Checking Paragraph', () => {
    it('Page Paragraph should exist and be visible', () => {
      authPagesPOM.authPagesText().next().should('be.visible');
    });
    it(`Page Text should have text "${paragraphText} ${authPagesPOM.testData.AuthPages.logInLink.text}"`, () => {
      authPagesPOM
        .authPagesParagraph()
        .should(
          'have.text',
          paragraphText + ' ' + authPagesPOM.testData.AuthPages.logInLink.text
        );
    });
  });
  describe('Checking Log In link', () => {
    it('Log In link should exist and be visible', () => {
      authPagesPOM.logInLink().should('be.visible');
    });
    it(`Log In link should have text "${authPagesPOM.testData.AuthPages.logInLink.text}"`, () => {
      authPagesPOM
        .logInLink()
        .should('have.text', authPagesPOM.testData.AuthPages.logInLink.text);
    });
    it(`Log In link should redirects user to the Register Page`, () => {
      authPagesPOM.logInLink().click();
      authPagesPOM
        .authPagesTitle()
        .should('have.text', loginTitleText)
        .should('be.visible')
        .go('back');
    });
  });
  describe('Checking Input Fields', () => {
    it('Checking Email Input Field', () => {
      authPagesPOM.checkInputField(49, 'email');
    });
    it('Checking Password Input Field', () => {
      authPagesPOM.checkInputField(55);
    });
  });
  describe('Checking Submit Button', () => {
    it('Checking that Submit Button exists', () => {
      authPagesPOM.submitButton();
    });
    it(`Checking that Submit Button has text "${authPagesPOM.testData.AuthPages.submitBtn.registerText}"`, () => {
      authPagesPOM
        .submitButton()
        .should(
          'have.text',
          authPagesPOM.testData.AuthPages.submitBtn.registerText
        );
    });
    it('Checking that Submit Button is clickable', () => {
      authPagesPOM.submitButton().click();
    });
  });
});
