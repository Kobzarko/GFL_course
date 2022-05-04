const { I } = inject();

module.exports = {

  newUserEmailInput: {css: '#email_create'},
  createAccountButton: {css: '#SubmitCreate'},
  emailInput: {css: 'input[name=email_create]'},
  currentUserEmailInput: {css: '#email'},
  currentUserPassInput: {css: '#passwd'},

  waitForPageLoad(field) {
    I.waitForVisible(field,5);
  },
  
  fillField(value,field) {
    this.waitForPageLoad(field);
    I.fillField(field, value);
  },

  clickCreateAccount() {
    I.click(this.createAccountButton);
  },

  async getUserEmail(user){
    let email = await I.grabValueFrom(this.emailInput);
    return user.email = email;
  },

}
