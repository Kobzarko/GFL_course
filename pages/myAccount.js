const { I } = inject();

module.exports = {

  verifyMyAccount() {
    // I.see('MY ACCOUNT');
    I.seeTitleEquals('My account - My Store');
  },

}
