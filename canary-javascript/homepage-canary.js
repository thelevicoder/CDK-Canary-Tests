var synthetics = require('Synthetics');
const log = require('SyntheticsLogger');

const recordedScript = async function () {
  let page = await synthetics.getPage();
  
  const navigationPromise = page.waitForNavigation()
  
  await synthetics.executeStep('Goto_Login', async function() {
    await page.goto("https://portal.dev.platformr.cloud/login", {waitUntil: 'domcontentloaded', timeout: 60000})
  })
  
  await page.setViewport({ width: 1470, height: 832 })
  
  await synthetics.executeStep('Click_email', async function() {
    await page.waitForSelector('.MuiBox-root #email')
    await page.click('.MuiBox-root #email')
  })
  
  await synthetics.executeStep('Type_email', async function() {
    await page.type('.MuiBox-root #email', "bill.stock+test9@platformr.cloud")
  })
  
  await synthetics.executeStep('Click_password', async function() {
    await page.waitForSelector('.MuiBox-root #password')
    await page.click('.MuiBox-root #password')
  })
  
  await synthetics.executeStep('Type_password', async function() {
    await page.type('.MuiBox-root #password', "Test1234!@\n")
  })
  
  await synthetics.executeStep('Click_myCompany', async function() {
    await page.waitForSelector('.MuiBox-root > .MuiList-root > .MuiButtonBase-root:nth-child(3) > .MuiListItemText-root > .MuiTypography-root')
    await page.click('.MuiBox-root > .MuiList-root > .MuiButtonBase-root:nth-child(3) > .MuiListItemText-root > .MuiTypography-root')
  })
  
  await synthetics.executeStep('Click_Subscriptions', async function() {
    await page.waitForSelector('.MuiBox-root > .MuiList-root > .MuiButtonBase-root:nth-child(2) > .MuiListItemText-root > .MuiTypography-root')
    await page.click('.MuiBox-root > .MuiList-root > .MuiButtonBase-root:nth-child(2) > .MuiListItemText-root > .MuiTypography-root')
  })
  
  await synthetics.executeStep('Click_Documentaion', async function() {
    await page.waitForSelector('.MuiBox-root > .MuiList-root > .MuiButtonBase-root:nth-child(5) > .MuiListItemText-root > .MuiTypography-root')
    await page.click('.MuiBox-root > .MuiList-root > .MuiButtonBase-root:nth-child(5) > .MuiListItemText-root > .MuiTypography-root')
  })
  
  await synthetics.executeStep('Click_Subscriptions2', async function() {
    await page.waitForSelector('.MuiBox-root > .MuiList-root > .MuiButtonBase-root:nth-child(2) > .MuiListItemText-root > .MuiTypography-root')
    await page.click('.MuiBox-root > .MuiList-root > .MuiButtonBase-root:nth-child(2) > .MuiListItemText-root > .MuiTypography-root')
  })
  
  await synthetics.executeStep('Click_profileIcon', async function() {
    await page.waitForSelector('.MuiBox-root > .MuiBox-root > .css-1glod0d > .MuiBox-root > .MuiSvgIcon-root')
    await page.click('.MuiBox-root > .MuiBox-root > .css-1glod0d > .MuiBox-root > .MuiSvgIcon-root')
  })
  
  await synthetics.executeStep('Click_profile', async function() {
    await page.waitForSelector('body > #avatar-menu > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(1)')
    await page.click('body > #avatar-menu > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(1)')
  })
  
  await synthetics.executeStep('Click_subscriptions', async function() {
    await page.waitForSelector('.MuiBox-root > .MuiList-root > .MuiButtonBase-root:nth-child(2) > .MuiListItemText-root > .MuiTypography-root')
    await page.click('.MuiBox-root > .MuiList-root > .MuiButtonBase-root:nth-child(2) > .MuiListItemText-root > .MuiTypography-root')
  })
  
  await synthetics.executeStep('Click_config', async function() {
    await page.waitForSelector('.MuiTable-root > .MuiTableBody-root > .MuiTableRow-root > .MuiTableCell-root:nth-child(3) > .MuiButtonBase-root')
    await page.click('.MuiTable-root > .MuiTableBody-root > .MuiTableRow-root > .MuiTableCell-root:nth-child(3) > .MuiButtonBase-root')
  })
  
  await synthetics.executeStep('Click_subscriptions', async function() {
    await page.waitForSelector('.MuiBox-root > .MuiList-root > .MuiButtonBase-root:nth-child(2) > .MuiListItemText-root > .MuiTypography-root')
    await page.click('.MuiBox-root > .MuiList-root > .MuiButtonBase-root:nth-child(2) > .MuiListItemText-root > .MuiTypography-root')
  })
  
  await synthetics.executeStep('Click_deployBanner', async function() {
    await page.waitForSelector('.MuiTableBody-root > .MuiTableRow-root > .MuiTableCell-root > .MuiButtonGroup-root > .MuiButtonBase-root:nth-child(1)')
    await page.click('.MuiTableBody-root > .MuiTableRow-root > .MuiTableCell-root > .MuiButtonGroup-root > .MuiButtonBase-root:nth-child(1)')
  })
  
  await synthetics.executeStep('Click_SSOBlock', async function() {
    await page.waitForSelector('#root > .MuiBox-root > .MuiBox-root > .MuiContainer-root > .css-4153qn')
    await page.click('#root > .MuiBox-root > .MuiBox-root > .MuiContainer-root > .css-4153qn')
  })
  
  await synthetics.executeStep('Click_exit_deployBanner', async function() {
    await page.waitForSelector('.MuiBox-root > .MuiList-root > .MuiButtonBase-root:nth-child(8) > .MuiListItemIcon-root > .MuiSvgIcon-root')
    await page.click('.MuiBox-root > .MuiList-root > .MuiButtonBase-root:nth-child(8) > .MuiListItemIcon-root > .MuiSvgIcon-root')
  })
  
  await synthetics.executeStep('Click_profileIcon', async function() {
    await page.waitForSelector('.MuiBox-root > .MuiBox-root > .css-1glod0d > .MuiBox-root > .MuiSvgIcon-root')
    await page.click('.MuiBox-root > .MuiBox-root > .css-1glod0d > .MuiBox-root > .MuiSvgIcon-root')
  })
  
  await synthetics.executeStep('Click_profile', async function() {
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