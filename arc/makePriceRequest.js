import { Selector } from 'testcafe';

fixture("Price request Fixture")
    .page("https://web-staging.architonic.net/en/product/vitra-lounge-chair-ottoman/1051695");


test("Price request Test", async (t) => {

    // selector for the price request button
    const priceRequestBtn = Selector('div#request-block').child('ul').child('li').nth(0);

    // selector for the branch options
    const priceRequestBranchSelect = Selector('select#request-branch_id');
    const cpriceRequestBranchOption = priceRequestBranchSelect.find('option');

    // selector for the message text area
    const priceRequestMsg = Selector('textarea#request-msg_price');

    // selector for the forward button
    const priceRequestForwardBtn = Selector('button.button').withAttribute('data-page', '0');

    // selector for the title
    const priceRequestTitleSelect = Selector('select#request-title');
    const priceRequestTitleOption = priceRequestTitleSelect.find('option');

    const priceRequestFirstNameInput = Selector('input#request-first_name');
    const priceRequestLastNameInput = Selector('input#request-last_name');
    const priceRequestCompanyInput = Selector('input#request-office');
    const priceRequestCityInput = Selector('input#request-formatted_address');

    const googleCitySelector = Selector('div.pac-container').child('div.pac-item').nth(0);

    const priceRequestEmailInput = Selector('input#request-email');
    const priceRequestLegalConsentCheckbox = Selector('input#request-legal_consent');

    // selector for the submit button
    const priceRequestSubmitBtn = Selector('button.request').withAttribute('data-page', '1');

    const randomNumber = Math.random();

    const requestMsgHeader = Selector('h3');

    await t
        .click(priceRequestBtn)
        .click(priceRequestBranchSelect)
        .click(cpriceRequestBranchOption.withText('Architecture'))
        .typeText(priceRequestMsg, 'This a TEST request, please ignore it')
        .click(priceRequestForwardBtn)
        .click(priceRequestTitleSelect)
        .click(priceRequestTitleOption.withText('Mr'))
        .typeText(priceRequestFirstNameInput, 'FirstName_' + randomNumber)
        .typeText(priceRequestLastNameInput, 'LastName_' + randomNumber)
        .typeText(priceRequestCompanyInput, 'Company_' + randomNumber)
        .typeText(priceRequestCityInput, 'Zurich, Switzerland')
        // after typing 'Zurich, Switzerland' we wait for google places response for one second
        .wait(1000)
        // select the first city/country provided by google places
        .click(googleCitySelector)
        .typeText(priceRequestEmailInput, 'hasan@architonic.com')
        .click(priceRequestLegalConsentCheckbox)
        .click(priceRequestSubmitBtn)
        .expect(requestMsgHeader.textContent).contains('Your request has been sent to Vitra');
});