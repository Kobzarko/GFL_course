const { I } = inject();

module.exports = {
  storeLink: 'https://automationpractice.com/index.php',
  signInButton: {css: 'a.login'},
  signOutButton: {css: 'a.logout'},

  openStore() {
    I.amOnPage(this.storeLink);
  },

  clickSignIn() {
    I.click(this.signInButton);
  },

  clickSignOut(){
    I.waitForElement(this.signOutButton, 10);
    I.click(this.signOutButton);
  }
  
}
