class HomePage {
  //DEFAUL PAGE - before login
  testData = {
    homePage: {
      default: {
        pageTitle: {
          selector: 'h1',
          text: 'Shop thousands of products tried and styled by real people.',
        },
        pageText: {
          text: 'Shop products across fashion, beauty, home, fitness and more. Tried and styled by real people for real life.',
        },
        signUpBtn: {
          selector: 'a[href="/signup"]',
          text: 'Sign up',
        },
        logInBtn: {
          selector: 'a[href="/login"]',
          text: 'Log In',
        },
      },
      login: {
        pageTitle: {
          selector: 'h2',
          text: 'Discover',
        },
      },
    },
  };
  //SELECTORS
  homePageDefaultTitle = () =>
    cy.get(this.testData.homePage.default.pageTitle.selector);
  signUpBtn = () => cy.get(this.testData.homePage.default.signUpBtn.selector);
  logInBtn = () => cy.get(this.testData.homePage.default.logInBtn.selector);
  //METHODS
  //Load Home Page (and check that the Home page was loaded: checking Page Title and Page Text)
  load = () => {
    cy.visit('/').location('pathname').should('eq', '/');
    cy.get(this.testData.homePage.default.pageTitle.selector)
      .should('be.visible')
      .should('have.text', this.testData.homePage.default.pageTitle.text);
    cy.get(this.testData.homePage.default.pageTitle.selector)
      .next()
      .should('be.visible')
      .should('have.text', this.testData.homePage.default.pageText.text);
    cy.get(this.testData.homePage.default.signUpBtn.selector)
      .first()
      .should('be.visible')
      .should('have.text', this.testData.homePage.default.signUpBtn.text);
    cy.get(this.testData.homePage.default.signUpBtn.selector)
      .first()
      .should('be.visible')
      .should('have.text', this.testData.homePage.default.signUpBtn.text);
  };
  ///////////////////////////////////////////////////
  //AFTER LOGIN
  homePageTitle = () => cy.get(this.testData.homePage.login.pageTitle.selector);
  userMenuButton = () => {
    cy.get('button[aria-label="menu"]');
  };
}
export default new HomePage();
