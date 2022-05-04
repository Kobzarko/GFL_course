const { I } = inject();

module.exports = {
  firstNameInput: { css: '#customer_firstname' },
  lastNameInput: { css: '#customer_lastname' },
  stateSelect: { css: '#id_state' },
  postalCodeInput: { css: '#postcode' },
  passInput: {css: '#passwd'},

  fillNewUserForm(user) {
    this.waitForPageLoad();
    I.fillField(this.firstNameInput, user.firstName);
    I.fillField(this.lastNameInput, user.lastName);
    I.click(this.stateSelect);
    I.selectOption(this.stateSelect, user.state);
    I.fillField(this.postalCodeInput, user.postalCode);
    I.checkOption('#uniform-id_gender1');
    I.fillField(this.passInput, user.password);
    I.selectOption("#days", '5');
    I.selectOption('#months','7');
    I.selectOption('#years','2001');
    I.checkOption('#newsletter');
    I.fillField('#company', 'Ko-ko.company');
    I.fillField('#address1',"4834 Hazelwood Avenue");
    I.fillField('#city',"Happy city");
    I.fillField('#phone_mobile',"515-362-7633");
    I.fillField('#alias',"Alias address");
    I.click('#submitAccount');
  },

  waitForPageLoad() {
    I.waitForVisible(this.firstNameInput);
  },
}