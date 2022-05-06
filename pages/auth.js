const { I } = inject();

module.exports = {

  newUserEmailInput: {css: '#email_create'},
  createAccountButton: {css: '#SubmitCreate'},
  emailInput: {css: 'input[name=email_create]'},
  currentUserEmailInput: {css: '#email'},
  currentUserPassInput: {css: '#passwd'},
  SubmitLoginButton: {css:'#SubmitLogin'},

  waitForPageLoad(field) {
    I.waitForVisible(field,5);
  },

  
  fillVisibleField(value,field) {
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

  waitFieldsVisible(){
    I.waitForVisible(this.currentUserEmailInput);
    I.waitForVisible(this.currentUserPassInput);
  },

  loginUser(user,button){
    this.waitFieldsVisible();
    I.fillField(this.currentUserEmailInput, user.email);
    I.fillField(this.currentUserPassInput, user.password);
    this.clickButton(button);
  },

  clickButton(button){
    I.waitForVisible(button);
    I.click(button);
  }

}
