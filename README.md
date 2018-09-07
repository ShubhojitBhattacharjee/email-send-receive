The provided repository contains an automated test for email sending functionality via Gmail as outlined below

    1. Login to gmail
    2. Compose and Send an email with an alert message for not having body
    3. No verification is done in the code for any action like Login page displayed, compose email box etc 


Your task is to implement below test case

    1. Login to account1 on Gmail
    2. Compose an email with unique subject, body and attachment
    3. Send it to account2
    4. Login to account2
    5. Open the email
    6. Verify the subject, body and attachment name

    Notes
        1. Account details should be configurable in params.
        2. Improve the existing code base to the best of your knowledge and expertise.
		3. Don't include packages and additional auto generated files like node_modules.
		4. The test should be passing

Instructions to Run

    1. Download NodeJs latest stable version from here https://nodejs.org/en/

    2. Download preferred javascript IDE from here -
        A - WebStorm - https://www.jetbrains.com/webstorm/
        B - Visual Studio Code - https://code.visualstudio.com/

    3. In the root, execute following commands
        1. To install all the packages - npm install
        2. To run the tests - npm run e2e
# email-send-receive
