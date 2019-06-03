import { Selector } from 'testcafe';

fixture("Homepage Fixture")
    .page("https://web-staging.architonic.net/en/");

const searchInput = Selector('#search-input');
const resultValue = Selector('p.text-right');

test("Homepage Test", async (t) => {
    await t
        .typeText(searchInput, 'charles eams loung chair')
        .pressKey('enter')
        .expect(resultValue.textContent).contains('Results: 25');
});
