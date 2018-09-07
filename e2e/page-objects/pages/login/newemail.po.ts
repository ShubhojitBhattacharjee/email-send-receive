import {By, element, browser, ExpectedConditions} from 'protractor';
import InboxPage from "./inbox.po";

export default class NewEmailPage {

    get mailTo() {
        return element(By.css('[name="to"]'));
    }

    get subject() {
        return element(By.css('[name="subjectbox"]'));
    }

    get mailBody() {
        return element(By.css('[class="Am Al editable LW-avf"]'));
    }

    get send() {
        return element(By.xpath('//*[@role="button" and text()="Send"]'));
    }


    public async writeNewEmail(toText:string, subjectText:string, mailBodyText:string, filePath:string) {

        await browser.wait(ExpectedConditions.visibilityOf(this.mailTo));
        await this.mailTo.clear();
        await this.mailTo.sendKeys(toText);
        await browser.wait(ExpectedConditions.visibilityOf(this.subject));
        await this.subject.clear();
        await this.subject.sendKeys(subjectText);
        await browser.wait(ExpectedConditions.visibilityOf(this.mailBody));
        await this.mailBody.clear();
        await this.mailBody.sendKeys(mailBodyText);
        await browser.element(By.css('input[type="file"]')).sendKeys(filePath);
        await browser.wait(ExpectedConditions.invisibilityOf(element(By.css('div[role="progressbar"]'))));

    }

    public async sendEmail() {

        await this.send.click();
        return new InboxPage();
    }
}