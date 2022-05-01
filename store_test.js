let user = {
    firstName: 'Test',
    lastName: 'Automation',
    state: 'Alabama',
    city: 'Birmingham',
    address: '801 Tom Martin Dr.',
    postalCode: '35211',
}

Feature('Store');

Before(({ I, homePage }) => {
    homePage.openStore();
  });

Scenario('Sign In', ({ I, homePage, authPage,createAccountPage,myAccountPage }) => {
    // homePage.openStore();
    homePage.clickSignIn();
    authPage.fillNewUserEmail(Date.now() + '@test.com');
    authPage.clickCreateAccount();
    createAccountPage.fillNewUserForm(user);
    myAccountPage.verifyMyAccount();
    pause();
});

After(({ I, homePage }) => {
    homePage.clickSignOut();
  });
