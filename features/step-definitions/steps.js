const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $, browser } = require('@wdio/globals')

const LoginPage = require('../pageobjects/login.page');

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I login with (.+) and (.+)$/, async (email, password) => {
    console.log(`Logging in with Email: ${email} and Password: ${password}`);
    await LoginPage.login(email, password);
});

Then(/^I should see the email input field$/, async () => {
    const emailField = await $('#email');
    await expect(emailField).toBeExisting();
});

Then(/^I should see the password input field$/, async () => {
    const passwordField = await $('#password'); 
    await expect(passwordField).toBeExisting();
});

Then(/^I should see the login button$/, async () => {
    const loginButton = await $('.chakra-button.css-1n8i4of');
    await expect(loginButton).toBeExisting();
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    const flashMessage = await $('.chakra-alert'); 
    await expect(flashMessage).toBeExisting();
    await expect(flashMessage).toHaveText(expect.stringContaining(message));
});

Then(/^I should be redirected to the dashboard$/, async () => {
    await browser.pause(3000);
    const currentUrl = await browser.getUrl();
    await expect(currentUrl).toEqual('https://kasirdemo.vercel.app/dashboard');
});
