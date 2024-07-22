var synthetics = require('Synthetics');
const log = require('SyntheticsLogger');

const recordedScript = async function () {
  let page = await synthetics.getPage();
  
  const navigationPromise = page.waitForNavigation()
  
  await synthetics.executeStep('Goto_login', async function() {
    await page.goto("https://portal.dev.platformr.cloud/login", {waitUntil: 'domcontentloaded', timeout: 60000})
  })
  
  await page.setViewport({ width: 1470, height: 832 })
  
  await synthetics.executeStep('Click_createAccount', async function() {
    await page.waitForSelector('.MuiBox-root > .MuiBox-root > .MuiBox-root > .MuiBox-root:nth-child(4) > .MuiTypography-root:nth-child(2)')
    await page.click('.MuiBox-root > .MuiBox-root > .MuiBox-root > .MuiBox-root:nth-child(4) > .MuiTypography-root:nth-child(2)')
  })
  
  await navigationPromise
  
  await synthetics.executeStep('Click_firstName', async function() {
    await page.waitForSelector('.MuiBox-root #firstName')
    await page.click('.MuiBox-root #firstName')
  })
  
  await synthetics.executeStep('enter_saveTest', async function() {
    await page.type('.MuiBox-root #firstName', "\n")
  })
  
  await synthetics.executeStep('Check_invalidResponse_firstName', async function() {
    await page.waitForFunction((selector, xpath) => document.querySelector(selector) &&
    document.evaluate(xpath, document.querySelector(selector), null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue !== null, {},
    '#firstName-helper-text', '//*[contains(text(), "First Name is required")]');
  })
  
  await synthetics.executeStep('Check_invalidResponse_lastName', async function() {
    await page.waitForFunction((selector, xpath) => document.querySelector(selector) &&
    document.evaluate(xpath, document.querySelector(selector), null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue !== null, {},
    '#lastName-helper-text', '//*[contains(text(), "Last Name is required")]');
  })
  
  await synthetics.executeStep('Check_invalidResponse_email', async function() {
    await page.waitForFunction((selector, xpath) => document.querySelector(selector) &&
    document.evaluate(xpath, document.querySelector(selector), null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue !== null, {},
    '#email-helper-text', '//*[contains(text(), "Email is required")]');
  })

  
  await synthetics.executeStep('Check_invalidResponse_password', async function() {
    await page.waitForFunction((selector, xpath) => document.querySelector(selector) &&
    document.evaluate(xpath, document.querySelector(selector), null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue !== null, {},
    '#root', '//*[contains(text(), "Password must contain 10 characters. Must have 1 number, 1 special character, 1 upper case letter, 1 lower case letter.")]');
  })
  
  await synthetics.executeStep('Check_invalidResponse_confirmPassword', async function() {
    await page.waitForFunction((selector, xpath) => document.querySelector(selector) &&
    document.evaluate(xpath, document.querySelector(selector), null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue !== null, {},
    '#root', '//*[contains(text(), "Password must match.")]');
  })
  
  await synthetics.executeStep('Check_invalidResponse_AWSAccountId', async function() {
    await page.waitForFunction((selector, xpath) => document.querySelector(selector) &&
    document.evaluate(xpath, document.querySelector(selector), null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue !== null, {},
    '#root', '//*[contains(text(), "Subscription AWS Account ID is required")]');
  })
  
  await synthetics.executeStep('Click_firstName', async function() {
    await page.waitForSelector('.MuiBox-root #firstName')
    await page.click('.MuiBox-root #firstName')
  })
  
  await synthetics.executeStep('Enter_firstName', async function() {
    await page.type('.MuiBox-root #firstName', "Bill")
  })
  
  
  await synthetics.executeStep('Click_lastName', async function() {
    await page.waitForSelector('.MuiBox-root #lastName')
    await page.click('.MuiBox-root #lastName')
  })
  
  await synthetics.executeStep('Enter_lastName', async function() {
    await page.type('.MuiBox-root #lastName', "Stock")
  })
  
  await synthetics.executeStep('Click_email', async function() {
    await page.waitForSelector('.MuiBox-root #email')
    await page.click('.MuiBox-root #email')
  })
  
  await synthetics.executeStep('Type_emailInvalid', async function() {
    await page.type('.MuiBox-root #email', "bill.stock+test9platformr.cloud\n")
  })
  
  await synthetics.executeStep('Check_invalidResponse_email', async function() {
    await page.waitForFunction((selector, xpath) => document.querySelector(selector) &&
    document.evaluate(xpath, document.querySelector(selector), null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue !== null, {},
    '#email-helper-text', '//*[contains(text(), "Email is required")]');
  })
  
  await synthetics.executeStep('Click_email', async function() {
    await page.waitForSelector('.MuiBox-root #email')
    await page.click('.MuiBox-root #email')
  })
  
  await synthetics.executeStep('Type_emailInvalid2', async function() {
    const inputElement = await page.$('.MuiBox-root #email')
    await inputElement.click({ clickCount: 3 })
    await page.keyboard.press('Backspace')
    await page.type('.MuiBox-root #email', "bill.stock+test9@platformr\n")
  })
  
  await synthetics.executeStep('Check_invalidResponse_email', async function() {
    await page.waitForFunction((selector, xpath) => document.querySelector(selector) &&
    document.evaluate(xpath, document.querySelector(selector), null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue !== null, {},
    '#email-helper-text', '//*[contains(text(), "Email is required")]');
  })
  
  await synthetics.executeStep('Click_email', async function() {
    await page.waitForSelector('.MuiBox-root #email')
    await page.click('.MuiBox-root #email')
  })
  
  await synthetics.executeStep('Type_emailValid', async function() {
    const inputElement = await page.$('.MuiBox-root #email')
    await inputElement.click({ clickCount: 3 })
    await page.keyboard.press('Backspace')
    await page.type('.MuiBox-root #email', "bill.stock+test9@platformr.cloud\n")
  })
  
  await synthetics.executeStep('Click_password', async function() {
    await page.waitForSelector('.MuiBox-root #password')
    await page.click('.MuiBox-root #password')
  })
  
  await synthetics.executeStep('Enter_password', async function() {
    await page.type('.MuiBox-root #password', "Test1234!@\n")
  })
  
  await synthetics.executeStep('Click_confirmPassword', async function() {
    await page.waitForSelector('.MuiBox-root #confirmPassword')
    await page.click('.MuiBox-root #confirmPassword')
  })
  
  await synthetics.executeStep('Enter_confirmPassword', async function() {
    await page.type('.MuiBox-root #confirmPassword', "Test1234!@\n")
  })
  
  
  await synthetics.executeStep('Click_signIn', async function() {
    await page.waitForSelector('.MuiBox-root > .MuiBox-root > .MuiBox-root > .MuiBox-root:nth-child(4) > .MuiTypography-root:nth-child(2)')
    await page.click('.MuiBox-root > .MuiBox-root > .MuiBox-root > .MuiBox-root:nth-child(4) > .MuiTypography-root:nth-child(2)')
  })
  
  await navigationPromise
  
  await synthetics.executeStep('Click_Final', async function() {
    await page.waitForSelector('.MuiBox-root #email')
    await page.click('.MuiBox-root #email')
  })
  
};
exports.handler = async () => {
    return await recordedScript();
};