const { $, browser } = require('@wdio/globals')
const Page = require('./page');

class LoginPage extends Page {

    get inputEmail () {
        return $('#email');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('.chakra-button.css-1n8i4of');
    }

    async login (email, password) {
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();

        await browser.pause(2000);
    }

    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
