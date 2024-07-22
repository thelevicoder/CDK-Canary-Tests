var synthetics = require('Synthetics');
const log = require('SyntheticsLogger');

const recordedScript = async function () {
  let page = await synthetics.getPage();
  
  const navigationPromise = page.waitForNavigation()
  
  await synthetics.executeStep('Goto_login', async function() {
    await page.goto("https://portal.dev.platformr.cloud/login", {waitUntil: 'domcontentloaded', timeout: 60000})
  })
  
  await page.setViewport({ width: 1470, height: 832 })
  
  await synthetics.executeStep('Click_email', async function() {
    await page.waitForSelector('.MuiBox-root #email')
    await page.click('.MuiBox-root #email')
  })
  
  await synthetics.executeStep('Enter_email', async function() {
    await page.type('.MuiBox-root #email', "bill.stock+test9@platformr.cloud")
  })
  
  await synthetics.executeStep('Click_password', async function() {
    await page.waitForSelector('.MuiBox-root #password')
    await page.click('.MuiBox-root #password')
  })
  
  await synthetics.executeStep('Enter_password', async function() {
    await page.type('.MuiBox-root #password', "Test1234!@\n")
  })
  
  await synthetics.executeStep('Click_documentation', async function() {
    await page.waitForSelector('.MuiBox-root > .MuiList-root > .MuiButtonBase-root:nth-child(5) > .MuiListItemText-root > .MuiTypography-root')
    await page.click('.MuiBox-root > .MuiList-root > .MuiButtonBase-root:nth-child(5) > .MuiListItemText-root > .MuiTypography-root')
  })
  
  await synthetics.executeStep("Click_OU's", async function() {
    await page.waitForSelector('.MuiPaper-root #vertical-tab-1')
    await page.click('.MuiPaper-root #vertical-tab-1')
  })
  
  await synthetics.executeStep("Click_accounts", async function() {
    await page.waitForSelector('.MuiPaper-root #vertical-tab-2')
    await page.click('.MuiPaper-root #vertical-tab-2')
  })
  
  await synthetics.executeStep('Click_identityCenter', async function() {
    await page.waitForSelector('.MuiPaper-root #vertical-tab-3')
    await page.click('.MuiPaper-root #vertical-tab-3')
  })
  
  await synthetics.executeStep('Click_iconDrop', async function() {
    await page.waitForSelector('.MuiBox-root > .MuiBox-root > .css-1glod0d > .MuiBox-root > .MuiSvgIcon-root')
    await page.click('.MuiBox-root > .MuiBox-root > .css-1glod0d > .MuiBox-root > .MuiSvgIcon-root')
  })
  
  await synthetics.executeStep('Click_logout', async function() {
    await page.waitForSelector('body > #avatar-menu > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(2)')
    await page.click('body > #avatar-menu > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(2)')
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