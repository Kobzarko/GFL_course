

Feature('Store');

Before(({ I, homePage }) => {
    homePage.openStore();
  });

Scenario('Sign In', async ({ I, homePage, authPage,createAccountPage,myAccountPage, userData }) => {
    homePage.clickSignIn();
    authPage.fillField(Date.now() + '@test.com', authPage.newUserEmailInput);
    await authPage.getUserEmail(userData);
    authPage.clickCreateAccount();
    createAccountPage.fillNewUserForm(userData);
    myAccountPage.verifyMyAccount();
});


After(({ I, homePage }) => {
    homePage.clickSignOut();
});

