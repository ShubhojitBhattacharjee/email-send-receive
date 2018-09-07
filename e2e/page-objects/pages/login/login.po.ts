import {By, element, browser, ExpectedConditions} from 'protractor';
import InboxPage from './inbox.po';

class LoginPage {

    get password() {
        return element(By.name('password'));
    }

    get username() {
        return element(By.id('identifierId'));
    }

    get userNameNextButton() {
        return element(By.id('identifierNext'));
    }

    get passwordNextButton() {
        return element(By.id('passwordNext'));
    }

    public async goToPage() {

        await browser.waitForAngularEnabled(false);
        await browser.get('/mail');
        return this;
    }

    public async loginToAccount(userName:string, passwd:string) {

        await this.username.sendKeys(userName);
        await this.userNameNextButton.click();
        await browser.wait(ExpectedConditions.visibilityOf(this.password));
        await this.password.sendKeys(passwd);
        await browser.wait(ExpectedConditions.elementToBeClickable(this.passwordNextButton));
        await browser.wait(ExpectedConditions.elementToBeClickable(this.passwordNextButton));
        await this.passwordNextButton.click();
        return new InboxPage();
    }
}

export default new LoginPage();