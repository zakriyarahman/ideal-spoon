import { Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Then(
    /^the "([^"]*)" should contain the text "([^"]*)"$/,
    async function(elementKey: string, expectedElementText: string) {
        console.log(`the ${elementKey} should contain the text ${expectedElementText}`);

        const content = await global.page.textContent("[data-id='contacts']");

        expect(content).toBe(expectedElementText);
    }
)

