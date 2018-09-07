import LoginPage from '../page-objects/pages/login/login.po';
import {browser} from 'protractor';

describe('G mail suite', () => {

    it('Send and verify email', async () => {
        const user1 = browser.params.user1;
        const user2 = browser.params.user2;
        var mailSubject = 'Automation Test Subject';
        var mailBody = 'Automation Test Body to verify email send and receive functionality.';
        var fileName = 'Shubhojit_Bhattacharjee_8_years_Automation_Testing.docx';
        var filePath = 'D:/PER/Stuff/Resume/' + fileName;

        var loginPage = await LoginPage.goToPage();
        var inboxPage = await loginPage.loginToAccount(user1.username, user1.password);
        var newEmailPage = await inboxPage.openNewEmail();
        await newEmailPage.writeNewEmail(user2.username, mailSubject, mailBody, filePath);
        inboxPage = await newEmailPage.sendEmail();
        await inboxPage.confirmEmailSent();

        await browser.restartSync();

        await browser.sleep(15000);

        loginPage = await LoginPage.goToPage();
        inboxPage = await loginPage.loginToAccount(user2.username, user2.password);
        var receivedEmailPage = await inboxPage.openReceivedEmail(mailSubject, mailBody, fileName);
        await receivedEmailPage.readReceivedEmail();

        expect(receivedEmailPage.receivedEmailSubject.getText()).toEqual(mailSubject);
        expect(receivedEmailPage.receivedEmailBody.getText()).toEqual(mailBody);
        expect(receivedEmailPage.receivedEmailAttachment.getText())
            .toEqual(fileName);
    });
});