var synthetics = require('Synthetics');
const log = require('SyntheticsLogger');

const recordedScript = async function () {
  let page = await synthetics.getPage();
  
  await synthetics.executeStep('Goto_0', async function() {
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
  
  await synthetics.executeStep('Click_support', async function() {
    await page.waitForSelector('.MuiPaper-root > .MuiBox-root > .MuiList-root > .MuiButtonBase-root:nth-child(7) > .MuiListItemIcon-root')
    await page.click('.MuiPaper-root > .MuiBox-root > .MuiList-root > .MuiButtonBase-root:nth-child(7) > .MuiListItemIcon-root')
  })
  
  await synthetics.executeStep('Click_submit', async function() {
    await page.waitForSelector('.MuiDrawer-root > .MuiPaper-root > .MuiBox-root > .MuiList-root > .MuiButtonBase-root:nth-child(7)')
    await page.click('.MuiDrawer-root > .MuiPaper-root > .MuiBox-root > .MuiList-root > .MuiButtonBase-root:nth-child(7)')
  })

};
exports.handler = async () => {
    return await recordedScript();
};