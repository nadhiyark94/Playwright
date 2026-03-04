import { expect, test  } from "@playwright/test";

test(`Test to assert the text box`,async ({page}) => {

    await page.goto(`https://leafground.com/input.xhtml`);

    const disabled = page.locator(`//input[@placeholder="Disabled"]`);

    await expect(disabled).toBeDisabled();

    const textBox = page.locator(`//input[@value="Chennai"]`);

    await expect.soft(textBox).toBeDisabled(); // failing

    await textBox.fill("India")

    await page.waitForTimeout(3000)


    
})




/* 📝 Assignment Requirements

Write a Playwright test that performs the following steps:

🔹 Part 1: Navigate to the page

Launch Playwright test.

Navigate to the page:
https://leafground.com/input.xhtml

🔹 Part 2: Validate a Disabled Textbox

Locate the textbox with placeholder "Disabled".

Assert that it is disabled using:
await expect(locator).toBeDisabled()

🔹 Part 3: Validate an Enabled Textbox

Locate another textbox (example: the one with placeholder "Type your name").

Assert that it is enabled using:
await expect(locator).toBeEditable()

Type your name into the textbox.

🔹 Part 4: Soft Assertion Practice

Pick a textbox that is not disabled.

Use:
await expect.soft(locator).toBeDisabled()

Observe the test result and understand how soft assertions behave.

🔹 Part 5: Fill Data

Choose a textbox (any enabled one).

Clear existing text using .fill()

Enter a new value (Ex: "Playwright Learning")
 */