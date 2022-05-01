const { I } = inject();

module.exports = {
  storeLink: 'https://automationpractice.com/index.php',
  signInButton: {css: 'a.login'},
  signOutButton: {css: '.header_user_info>a'},

  openStore() {
    I.amOnPage(this.storeLink);
  },

  clickSignIn() {
    I.click(this.signInButton);
  },

  clickSignOut(){
    if(this.storeLink){
      I.click(this.signOutButton);
    } else {
      I.amOnPage(this.storeLink);
      I.click(this.signOutButton);
    }
    
  }
}
