import {By, element, browser, ExpectedConditions} from 'protractor';

export default class ReceivedEmailPage {

    subject:string;
    body:string;
    file:string;

    constructor(mailSubject:string, mailBody:string, fileName:string) {

        this.subject = mailSubject;
        this.body = mailBody;
        this.file = fileName;
    }

    get receivedEmailSubject() {
        return element(By.xpath('//h2[(.)="' + this.subject + '"]'));
    }

    get receivedEmailBody() {
        return element(By.xpath('//div[@dir= "ltr" and (.)="' + this.body + '"]'));
    }

    get receivedEmailAttachment() {
        return element(By.xpath('//span[(.)="' + this.file + '" and @id]'));
    }

    public async readReceivedEmail() {

        await browser.wait(ExpectedConditions.visibilityOf(this.receivedEmailBody));
    }
}