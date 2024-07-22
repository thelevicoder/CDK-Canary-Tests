var synthetics = require('Synthetics');
const log = require('SyntheticsLogger');

const recordedScript = async function () {
  let page = await synthetics.getPage();
  
  const navigationPromise = page.waitForNavigation()
  
  await synthetics.executeStep('Goto_Login', async function() {
    await page.goto("https://portal.dev.platformr.cloud/login", {waitUntil: 'domcontentloaded', timeout: 60000})
  })
  
  await page.setViewport({ width: 1470, height: 832 })
  
  await synthetics.executeStep('Click_forgotPassword', async function() {
    await page.waitForSelector('.MuiBox-root > .MuiBox-root > .MuiBox-root > .MuiBox-root:nth-child(1) > .MuiTypography-root')
    await page.click('.MuiBox-root > .MuiBox-root > .MuiBox-root > .MuiBox-root:nth-child(1) > .MuiTypography-root')
  })
  
  await navigationPromise
  
  await synthetics.executeStep('Enter-saveTest', async function() {
    await page.type('.MuiBox-root #email', "\n")
  })

  
  await synthetics.executeStep('Click_email', async function() {
    await page.waitForSelector('.MuiBox-root #email')
    await page.click('.MuiBox-root #email')
  })
  
  await synthetics.executeStep('Type_invalidEmail', async function() {
    await page.type('.MuiBox-root #email', "bill.stock+test9@\n")
  })
  
  await synthetics.executeStep('Check_invalidResponse_email', async function() {
    await page.waitForFunction((selector, xpath) => document.querySelector(selector) &&
    document.evaluate(xpath, document.querySelector(selector), null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue !== null, {},
    '#root', '//*[contains(text(), "Username/client id combination not found.")]');
  })
  
  await synthetics.executeStep('Click_email', async function() {
    await page.waitForSelector('.MuiBox-root #email')
    await page.click('.MuiBox-root #email')
  })
  
  await synthetics.executeStep('Type_validEmail', async function() {
    const inputElement = await page.$('.MuiBox-root #email')
    await inputElement.click({ clickCount: 3})
    await page.keyboard.press( 'Backspace' )
    await page.type('.MuiBox-root #email', "bill.stock+test9@platformr.cloud\n")
  })
  
  await synthetics.executeStep('Goto_Logout', async function() {
    await page.goto("https://portal.dev.platformr.cloud/logout", {waitUntil: 'domcontentloaded', timeout: 60000})
  })
  
  await synthetics.executeStep('Click_email_Final', async function() {
    await page.waitForSelector('.MuiBox-root #email')
    await page.click('.MuiBox-root #email')
  })
  
};
exports.handler = async () => {
    return await recordedScript();
};