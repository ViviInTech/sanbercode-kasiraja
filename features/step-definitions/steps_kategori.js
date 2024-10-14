const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals');

const KategoriPage = require('../pageobjects/kategori.page');
const LoginPage = require('../pageobjects/login.page');

Given(/^I am logged in$/, async () => {
    await LoginPage.open(); 
    await LoginPage.login('viviainis20@gmail.com', '12345678'); 
});

Given(/^I am on the kategori page$/, async () => {
    await KategoriPage.open();
});

When(/^I add a new kategori with name "(.*)" and description "(.*)"$/, async (nama, deskripsi) => {
    await KategoriPage.tambahKategori(nama, deskripsi); 
});

Then(/^I should see the kategori "(.*)" in the list$/, async (nama) => {
    const kategoriItem = await $(`//*[contains(text(), '${nama}')]`);
    await expect(kategoriItem).toBeExisting(); 
});
Given(/^I am logged in$/, async () => {
    await LoginPage.open(); 
    await LoginPage.login('viviainis20@gmail.com', '12345678'); 
});

Given(/^I am on the kategori page$/, async () => {
    await KategoriPage.open();
});

When(/^I click the button simpan$/, async () => {
    await KategoriPage.btnSimpan.click(); 
});

Then(/^I should see an error message$/, async () => {
    const errorMessage = await $('.chakra-alert.css-qwanz3'); 
    await expect(errorMessage).toBeExisting();
    await expect(errorMessage).toHaveTextContaining('"name" is not allowed to be empty');  
});
