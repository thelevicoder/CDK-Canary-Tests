var synthetics = require('Synthetics');
const log = require('SyntheticsLogger');

const recordedScript = async function () {
  let page = await synthetics.getPage();
  
  const navigationPromise = page.waitForNavigation()
  
  await synthetics.executeStep('Goto_0', async function() {
    await page.goto("https://portal.dev.platformr.cloud/login", {waitUntil: 'domcontentloaded', timeout: 60000})
  })
  
  await page.setViewport({ width: 1920, height: 993 })
  
  await synthetics.executeStep('Click_email', async function() {
    await page.waitForSelector('.MuiBox-root #email')
    await page.click('.MuiBox-root #email')
  })
  
  await synthetics.executeStep('Enter_saveTest', async function() {
    await page.type('.MuiBox-root #email', "\n")
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
    await page.type('.MuiBox-root #email', "bill.stock+test9@platformr.cloud")
  })
  
  await synthetics.executeStep('Click_password', async function() {
    await page.waitForSelector('.MuiBox-root #password')
    await page.click('.MuiBox-root #password')
  })
  
  await synthetics.executeStep('Enter_saveTest', async function() {
    await page.type('.MuiBox-root #password', "\n")
  })
  
  await synthetics.executeStep('Enter_password', async function() {
    await page.type('.MuiBox-root #password', "Test1234!@\n")
  })
  
  await synthetics.executeStep('Click_iconDrop', async function() {
    await page.waitForSelector('.MuiBox-root > .MuiBox-root > .css-1glod0d > .MuiBox-root > .MuiSvgIcon-root')
    await page.click('.MuiBox-root > .MuiBox-root > .css-1glod0d > .MuiBox-root > .MuiSvgIcon-root')
  })
  
  await synthetics.executeStep('Click_logout', async function() {
    await page.waitForSelector('body > #avatar-menu > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(2)')
    await page.click('body > #avatar-menu > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(2)')
  })
  
  await synthetics.executeStep('Click_email', async function() {
    await page.waitForSelector('.MuiBox-root #email')
    await page.click('.MuiBox-root #email')
  })
  
  await navigationPromise
  
};
exports.handler = async () => {
    return await recordedScript();
};