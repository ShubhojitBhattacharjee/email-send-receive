import {By, element, browser, ExpectedConditions} from 'protractor';
import NewEmailPage from "./newemail.po";
import ReceivedEmailPage from "./receivedEmail.po";

export default class InboxPage {
    
    get messageSent() {
        return element(By.xpath('//span[@id="link_vsm"]'));
    };

    get compose() {
        return element(By.xpath('//div[@role="button" and (.)="Compose"]'));
    }

    get receivedEmailSubject() {
        return element(By.xpath('//span[@class="bog" and .="Automation Test Subject"]'));
    }

    public async openNewEmail() {

        await browser.wait(ExpectedConditions.visibilityOf(this.compose));
        await this.compose.click();
        return new NewEmailPage();
    }

    public async openReceivedEmail(mailSubject:string, mailBody:string, fileName:string) {

        await browser.wait(ExpectedConditions.visibilityOf(this.receivedEmailSubject));
        await this.receivedEmailSubject.click();
        return new ReceivedEmailPage(mailSubject, mailBody, fileName);
    }

    public async confirmEmailSent() {
        await browser.wait(ExpectedConditions.visibilityOf(this.messageSent));
    }
}