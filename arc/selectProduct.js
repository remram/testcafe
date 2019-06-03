import { Selector } from 'testcafe';

fixture("Lounge Chair & Ottoman by Vitra Fixture")
    .page("https://web-staging.architonic.net/en/");

test("Lounge Chair & Ottoman by Vitra Test", async (t) => {

    const searchInput = Selector('#search-input');
    const productLink = Selector('a.hidden-title-link').withAttribute('data-item-id', '1051695');
    const productHeader = Selector('h1');

    await t
        .typeText(searchInput, 'charles eams loung chair')
        .pressKey('enter')
        .click(productLink)
        .expect(productHeader.textContent).contains('Lounge Chair & Ottoman by Vitra');
});
