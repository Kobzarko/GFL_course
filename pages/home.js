const { I } = inject();

module.exports = {
  storeLink: 'https://automationpractice.com/index.php',
  signInButton: {css: 'a.login'},

  openStore() {
    I.amOnPage(this.storeLink);
  },

  clickSignIn() {
    I.click(this.signInButton);
  }
}
