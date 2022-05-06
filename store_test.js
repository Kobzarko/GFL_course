

Feature('Store');

Before(({ I, homePage }) => {
    homePage.openStore();
  });

xScenario('Sign In', async ({ I, homePage, authPage,createAccountPage,myAccountPage, userData }) => {
    homePage.clickSignIn();
    authPage.fillVisibleField(Date.now() + '@test.com', authPage.newUserEmailInput);
    await authPage.getUserEmail(userData);
    authPage.clickCreateAccount();
    createAccountPage.fillNewUserForm(userData);
    myAccountPage.verifyMyAccount();
});

After(({ I, homePage }) => {
    homePage.clickSignOut();
});

Scenario('Buy stores', async ({ I, homePage, authPage,userData, myAccountPage, productPage }) => {
    homePage.clickSignIn();
    authPage.loginUser(userData, authPage.SubmitLoginButton);
    myAccountPage.clickTshirt();
    pause();
    myAccountPage.clickImage();
    pause();
    // homePage.clickSignOut();   
});