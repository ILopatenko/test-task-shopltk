class AuthPages {
  //DEFAUL PAGE - before login
  testData = {
    AuthPages: {
      pageTitle: {
        selector: 'h1',
        textLogin: 'Log In',
        textRegister: 'Sign Up',
      },
      pageText: {
        loginText:
          'Enter your login information to see what’s new in fashion, home, beauty, and more from LTK Creators.',
        registerText:
          'Discover the new way to shop fashion, home, beauty, and more from trusted LTK Creators.',
      },
      paragraph: {
        selector: 'p',
        loginText: `Don't have an account?`,
        registerText: `Have an account?`,
      },
      signUpLink: {
        selector: 'a[data-msgid="Sign up"]',
        text: 'Sign up',
        endpoint: '/login',
      },
      logInLink: {
        selector: 'a[data-msgid="Log in"]',
        text: 'Log in',
        endpoint: '/login',
      },
      forgotPass: {
        selector: 'a[data-msgid="Forgot Password?"]',
        text: 'Forgot Password?',
      },
      emailInputField: {
        fieldSelector: 'input#input-14',
        labelSelector: 'label[for="input-14"]',
        labelText: 'Email',
      },
      passwordInputField: {
        fieldSelector: 'input#input-17',
        labelSelector: 'label[for="input-17"]',
        labelText: 'Password',
      },
      submitBtn: {
        selector: 'button[type="submit"]',
        loginText: 'continue',
        registerText: 'sign up to begin shopping',
      },
      errorMessage: {
        selector: 'div[role="status"]',
        logintext: `Oops! The current email or password you've entered is incorrect.`,
        registerText: `Oops! The email you've entered is already associated with an LTK account.`,
      },
    },
    dataSets: {
      inputFieldsMix: 'aAbBcC123!@#',
      enAlphabet: 'abcdefghijklmnopqrstuvwxyz',
      spSymbols: '~`!@#$%^&*()_-+={[}}|:;"<,>.?/',
    },
    users: {
      test1: {
        email: 'test_email_913@gmail.com',
        password: 'aA!}#{/[_!Aa',
      },
    },
  };
  //SELECTORS
  authPagesTitle = () => cy.get(this.testData.AuthPages.pageTitle.selector);
  authPagesText = () =>
    cy.get(this.testData.AuthPages.pageTitle.selector).next();
  authPagesParagraph = () =>
    cy.get(this.testData.AuthPages.paragraph.selector).first();
  signUpLink = () => cy.get(this.testData.AuthPages.signUpLink.selector);
  logInLink = () => cy.get(this.testData.AuthPages.logInLink.selector);
  submitButton = () => cy.get(this.testData.AuthPages.submitBtn.selector);
  getInputById = (id) => cy.get(`input#input-${id}`);
  logOut = () => {
    cy.get('button[aria-label="menu"]').click();
    cy.get('div[aria-label="Sign out"]').click();
  };

  //HELPERS
  getRandomBetween = (min = 0, max = 9) =>
    Math.floor(Math.random() * (max + 1 - min) + min);

  getRandomFromList = (list) => {
    const element = list[this.getRandomBetween(0, list.length - 1)];
    return element;
  };
  generateEmail = () =>
    `test_email_${Math.floor(Math.random() * 1000)}@gmail.com`;
  generatePassword = (length = 6) => {
    const set =
      this.testData.dataSets.spSymbols +
      this.testData.dataSets.enAlphabet +
      this.testData.dataSets.spSymbols.toUpperCase();
    let password = 'aA!';
    for (let i = 0; i < length; i++) {
      password += set[this.getRandomBetween(0, set.length)];
    }
    return password + '!Aa';
  };
  //METHODS
  checkInputField = (id, type) => {
    const testString = this.testData.dataSets.inputFieldsMix;
    const firstCheck = testString.split('').join('');
    const secondCheck = firstCheck.slice(2, 10);
    const finalTestString =
      type === 'email' ? this.generateEmail() : this.generatePassword();
    console.log(finalTestString);
    cy.get(`input#input-${id}`)
      .should('be.visible')
      .type(testString)
      .should('have.value', firstCheck)
      .type(
        `{moveToStart}{rightArrow}{del}{backspace}{moveToEnd}{leftArrow}{del}{backspace}`
      )
      .should('have.value', secondCheck)
      .type('{selectAll}{del}')
      .should('have.value', '')
      .type(finalTestString)
      .should('have.value', finalTestString);
  };
}
export default new AuthPages();
