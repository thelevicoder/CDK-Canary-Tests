var synthetics = require('Synthetics');
const log = require('SyntheticsLogger');

const recordedScript = async function () {
  let page = await synthetics.getPage();
  
  await synthetics.executeStep('Goto_login', async function() {
    await page.goto("https://portal.dev.platformr.cloud/login", {waitUntil: 'domcontentloaded', timeout: 60000})
  })
  
  await page.setViewport({ width: 1920, height: 993 })
  
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
  
  await synthetics.executeStep('Click_MyCompany', async function() {
    await page.waitForSelector('.MuiBox-root > .MuiList-root > .MuiButtonBase-root:nth-child(3) > .MuiListItemText-root > .MuiTypography-root')
    await page.click('.MuiBox-root > .MuiList-root > .MuiButtonBase-root:nth-child(3) > .MuiListItemText-root > .MuiTypography-root')
  })
  
  await synthetics.executeStep('Click_companyName', async function() {
    await page.waitForSelector('.MuiBox-root #companyName')
    await page.click('.MuiBox-root #companyName')
  })
  
  await synthetics.executeStep('Delete_companyName', async function() {
    const inputElement = await page.$('.MuiBox-root #companyName')
    await inputElement.click({ clickCount: 3 })
    await page.keyboard.press('Backspace')
    await page.keyboard.press('Enter')
  })
  
  await synthetics.executeStep('Check_invalidResponse_companyName', async function() {
    await page.waitForFunction((selector, xpath) => document.querySelector(selector) &&
    document.evaluate(xpath, document.querySelector(selector), null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue !== null, {},
    '#companyName-helper-text', '//*[contains(text(), "Invalid entry.")]');
  })
  
  await synthetics.executeStep('Type_companyName', async function() {
    await page.type('.MuiBox-root #companyName', "Platformr")
  })
  
  await synthetics.executeStep('Click_website', async function() {
    await page.waitForSelector('.MuiBox-root #website')
    await page.click('.MuiBox-root #website')
  })
  
  await synthetics.executeStep('Delete_website', async function() {
    const inputElement = await page.$('.MuiBox-root #website')
    await inputElement.click({ clickCount: 3 })
    await page.keyboard.press('Backspace')
    await page.keyboard.press('Enter')
  })
  
  await synthetics.executeStep('Check_invalidResponse_website', async function() {
    await page.waitForFunction((selector, xpath) => document.querySelector(selector) &&
    document.evaluate(xpath, document.querySelector(selector), null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue !== null, {},
    '#website-helper-text', '//*[contains(text(), "Invalid entry.")]');
  })
  
  await synthetics.executeStep('Click_website', async function() {
    await page.waitForSelector('.MuiBox-root #website')
    await page.click('.MuiBox-root #website')
  })
  
  //UNCOMMENT FOR PRODUCTION//
  // await synthetics.executeStep('Type_websiteInvalid', async function() {
  //   await page.type('.MuiBox-root #website', "https://platformrtest\n")
  // })
  
  // await synthetics.executeStep('Check_invalidResponse_website2', async function() {
  //   await page.waitForFunction((selector, xpath) => document.querySelector(selector) &&
  //   document.evaluate(xpath, document.querySelector(selector), null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue !== null, {},
  //   '#website-helper-text', '//*[contains(text(), "Invalid entry.")]');
  // })
  
  await synthetics.executeStep('Click_website', async function() {
    await page.waitForSelector('.MuiBox-root #website')
    await page.click('.MuiBox-root #website')
  })
  
  await synthetics.executeStep('Delete_website', async function() {
    const inputElement = await page.$('.MuiBox-root #website')
    await inputElement.click({ clickCount: 3 })
    await page.keyboard.press('Backspace')
    await page.keyboard.press('Enter')
  })
  
  await synthetics.executeStep('Click_website', async function() {
    await page.waitForSelector('.MuiBox-root #website')
    await page.click('.MuiBox-root #website')
  })
  
  await synthetics.executeStep('Type_websiteInvalid2', async function() {
    await page.type('.MuiBox-root #website', "platformrtest.com\n")
  })
  
  await synthetics.executeStep('Check_invalidResponse_website3', async function() {
    await page.waitForFunction((selector, xpath) => document.querySelector(selector) &&
    document.evaluate(xpath, document.querySelector(selector), null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue !== null, {},
    '#website-helper-text', '//*[contains(text(), "Invalid entry.")]');
  })
  
  await synthetics.executeStep('Click_website', async function() {
    await page.waitForSelector('.MuiBox-root #website')
    await page.click('.MuiBox-root #email')
  })
  
  await synthetics.executeStep('Delete_website', async function() {
    const inputElement = await page.$('.MuiBox-root #website')
    await inputElement.click({ clickCount: 3 })
    await page.keyboard.press('Backspace')
    await page.keyboard.press('Enter')
  })
  
  await synthetics.executeStep('Click_website', async function() {
    await page.waitForSelector('.MuiBox-root #website')
    await page.click('.MuiBox-root #website')
  })
  
  await synthetics.executeStep('Type_websiteValid', async function() {
    await page.type('.MuiBox-root #website', "https://platformrtest.com")
  })
  
  await synthetics.executeStep('Click_email', async function() {
    await page.waitForSelector('.MuiBox-root #email')
    await page.click('.MuiBox-root #email')
  })
  
  await synthetics.executeStep('Delete_email', async function() {
    const inputElement = await page.$('.MuiBox-root #email')
    await inputElement.click({ clickCount: 3 })
    await page.keyboard.press('Backspace')
    await page.keyboard.press('Enter')
  })
  
  await synthetics.executeStep('Check_invalidResponse_email', async function() {
    await page.waitForFunction((selector, xpath) => document.querySelector(selector) &&
    document.evaluate(xpath, document.querySelector(selector), null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue !== null, {},
    '#email-helper-text', '//*[contains(text(), "Invalid entry.")]');
  })
  
  await synthetics.executeStep('Click_email', async function() {
    await page.waitForSelector('.MuiBox-root #email')
    await page.click('.MuiBox-root #email')
  })
  
  await synthetics.executeStep('Restate_emailInvalid', async function() {
    await page.type('.MuiBox-root #email', "platformrtestplatformr.cloud\n")
  })
  
  await synthetics.executeStep('Check_invalidResponse_email2', async function() {
    await page.waitForFunction((selector, xpath) => document.querySelector(selector) &&
    document.evaluate(xpath, document.querySelector(selector), null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue !== null, {},
    '#email-helper-text', '//*[contains(text(), "Invalid entry.")]');
  })
  
  await synthetics.executeStep('Click_email', async function() {
    await page.waitForSelector('.MuiBox-root #email')
    await page.click('.MuiBox-root #email')
  })
  
  await synthetics.executeStep('Delete_email', async function() {
    const inputElement = await page.$('.MuiBox-root #email')
    await inputElement.click({ clickCount: 3 })
    await page.keyboard.press('Backspace')
    await page.keyboard.press('Enter')
  })
  
  await synthetics.executeStep('Click_email', async function() {
    await page.waitForSelector('.MuiBox-root #email')
    await page.click('.MuiBox-root #email')
  })
  
  await synthetics.executeStep('Restate_emailInvalid2', async function() {
    await page.type('.MuiBox-root #email', "platformrtest@platformr\n")
  })
  
  await synthetics.executeStep('Check_invalidResponse_email3', async function() {
    await page.waitForFunction((selector, xpath) => document.querySelector(selector) &&
    document.evaluate(xpath, document.querySelector(selector), null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue !== null, {},
    '#email-helper-text', '//*[contains(text(), "Invalid entry.")]');
  })
  
  await synthetics.executeStep('Click_email', async function() {
    await page.waitForSelector('.MuiBox-root #email')
    await page.click('.MuiBox-root #email')
  })
  
  await synthetics.executeStep('Delete_email', async function() {
    const inputElement = await page.$('.MuiBox-root #email')
    await inputElement.click({ clickCount: 3 })
    await page.keyboard.press('Backspace')
    await page.keyboard.press('Enter')
  })
  
  await synthetics.executeStep('Click_email', async function() {
    await page.waitForSelector('.MuiBox-root #email')
    await page.click('.MuiBox-root #email')
  })
  
  await synthetics.executeStep('Restate_emailValid', async function() {
    await page.type('.MuiBox-root #email', "platformrtest@platformr.cloud")
  })
  
  
  await synthetics.executeStep('Click_Comp_dropdown', async function() {
    await page.waitForSelector('.MuiBox-root #complianceReqs')
    await page.click('.MuiBox-root #complianceReqs')
  })
  
  await synthetics.executeStep('Click_CompChild(2)', async function() {
    await page.waitForSelector('body > #menu-complianceReqs > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(2)')
    await page.click('body > #menu-complianceReqs > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(2)')
  })
  
  await synthetics.executeStep('Click_Comp_dropdown_2', async function() {
    await page.waitForSelector('.MuiBox-root #complianceReqs')
    await page.click('.MuiBox-root #complianceReqs')
  })
  
  await synthetics.executeStep('Click_CompChild(3)', async function() {
    await page.waitForSelector('body > #menu-complianceReqs > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(3)')
    await page.click('body > #menu-complianceReqs > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(3)')
  })
  
  
  await synthetics.executeStep('Click_DRRegion_dropdown', async function() {
    await page.waitForSelector('.MuiBox-root #disasterRecoveryRegion')
    await page.click('.MuiBox-root #disasterRecoveryRegion')
  })
  
  await synthetics.executeStep('Click_DRRChild(2)', async function() {
    await page.waitForSelector('body > #menu-disasterRecoveryRegion > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(2)')
    await page.click('body > #menu-disasterRecoveryRegion > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(2)')
  })
  
  await synthetics.executeStep('Click_DRRegion_dropdown_2', async function() {
    await page.waitForSelector('.MuiBox-root #disasterRecoveryRegion')
    await page.click('.MuiBox-root #disasterRecoveryRegion')
  })
  
  await synthetics.executeStep('Click_DRRChild(1)', async function() {
    await page.waitForSelector('body > #menu-disasterRecoveryRegion > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(1)')
    await page.click('body > #menu-disasterRecoveryRegion > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(1)')
  })
  
  
  await synthetics.executeStep('Click_NetTop_dropdown', async function() {
    await page.waitForSelector('.MuiBox-root #networkTopology')
    await page.click('.MuiBox-root #networkTopology')
  })
  
  await synthetics.executeStep('Click_NetChild(2)', async function() {
    await page.waitForSelector('body > #menu-networkTopology > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(2)')
    await page.click('body > #menu-networkTopology > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(2)')
  })
  
  await synthetics.executeStep('Click_NetTop_dropdown_2', async function() {
    await page.waitForSelector('.MuiBox-root #networkTopology')
    await page.click('.MuiBox-root #networkTopology')
  })
  
  await synthetics.executeStep('Click_NetChild(1)', async function() {
    await page.waitForSelector('body > #menu-networkTopology > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(1)')
    await page.click('body > #menu-networkTopology > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(1)')
  })
  
  await synthetics.executeStep('Goto_logout', async function() {
    await page.goto("https://portal.dev.platformr.cloud/logout", {waitUntil: 'domcontentloaded', timeout: 60000})
  })
  
  await synthetics.executeStep('Final_Submit', async function() {
    await page.waitForSelector('.MuiBox-root #email')
    await page.click('.MuiBox-root #email')
    await page.keyboard.press('Enter')
  })

  
};
exports.handler = async () => {
    return await recordedScript();
};