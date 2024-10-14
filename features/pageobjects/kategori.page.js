const { $ } = require('@wdio/globals');
const Page = require('./page');
const LoginPage = require('./login.page'); 

class KategoriPage extends Page {

    get btnTambah() {
        return $('.chakra-button.css-1piskbq'); 
    }

    get inputNama() {
        return $('#nama'); 
    }

    get inputDeskripsi() {
        return $('#deskripsi'); 
    }

    get btnSimpan() {
        return $('.chakra-button.css-l5lnz6'); 
    }

    async open() {
        await browser.url('https://kasirdemo.vercel.app/categories'); 
    }

    async tambahKategori(nama, deskripsi) {
        await this.btnTambah.click();
        await this.inputNama.setValue(nama); 
        await this.inputDeskripsi.setValue(deskripsi); 
        await this.btnSimpan.click();
        await browser.pause(2000); 
    }
}

module.exports = new KategoriPage();
