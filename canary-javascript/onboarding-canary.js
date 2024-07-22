var synthetics = require('Synthetics');
const log = require('SyntheticsLogger');

const recordedScript = async function () {
  let page = await synthetics.getPage();
  
  const navigationPromise = page.waitForNavigation()
  
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
  
  await synthetics.executeStep('Goto_onboarding', async function() {
    await page.goto("https://portal.dev.platformr.cloud/onboarding", {waitUntil: 'domcontentloaded', timeout: 60000})
  })
  
  await synthetics.executeStep('Click_1', async function() {
    await page.waitForSelector('.MuiBox-root > .MuiContainer-root > .MuiBox-root > .MuiBox-root > .MuiButtonBase-root')
    await page.click('.MuiBox-root > .MuiContainer-root > .MuiBox-root > .MuiBox-root > .MuiButtonBase-root')
  })
  
  await synthetics.executeStep('Click_title', async function() {
    await page.waitForSelector('.MuiBox-root #title')
    await page.click('.MuiBox-root #title')
  })
  
  await synthetics.executeStep('Delete_title', async function() {
    const inputElement = await page.$('.MuiBox-root #title')
    await inputElement.click({ clickCount: 3 })
    await page.keyboard.press('Backspace')
  })
  
  await synthetics.executeStep('Click_Exp_dropdown', async function() {
    await page.waitForSelector('.MuiBox-root #YrsAWSExp')
    await page.click('.MuiBox-root #YrsAWSExp')
  })
  
  await synthetics.executeStep('Select_ExpChild(3)', async function() {
    await page.waitForSelector('body > #menu-YrsAWSExp > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(3)')
    await page.click('body > #menu-YrsAWSExp > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(3)')
  })
  
  await synthetics.executeStep('Click_Exp_dropdown2', async function() {
    await page.waitForSelector('.MuiBox-root #YrsAWSExp')
    await page.click('.MuiBox-root #YrsAWSExp')
  })
  
  await synthetics.executeStep('Select_ExpChild(1)', async function() {
    await page.waitForSelector('body > #menu-YrsAWSExp > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(1)')
    await page.click('body > #menu-YrsAWSExp > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(1)')
  })
  
  await synthetics.executeStep('Click_AWSCerts_dropdown', async function() {
    await page.waitForSelector('.MuiBox-root #awsCerts')
    await page.click('.MuiBox-root #awsCerts')
  })
  
  await synthetics.executeStep('Select_CertsChild(2+3)', async function() {
    await page.waitForSelector('body > #menu-awsCerts > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(2)')
    await page.click('body > #menu-awsCerts > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(2)')
    await page.waitForSelector('body > #menu-awsCerts > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(2)')
    await page.click('body > #menu-awsCerts > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(2)')
    await page.waitForSelector('body > #menu-awsCerts > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(3)')
    await page.click('body > #menu-awsCerts > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(3)')
  })
  
  await synthetics.executeStep('Click_exitDropdown1', async function() {
    await page.keyboard.press('Escape')
  })
  
  await synthetics.executeStep('Click_removeCert', async function() {
    await page.waitForSelector('.MuiBox-root > .MuiBox-root:nth-child(1) > .MuiBox-root > svg > path')
    await page.click('.MuiBox-root > .MuiBox-root:nth-child(1) > .MuiBox-root > svg > path')
  })
  
  await synthetics.executeStep('Click_removeCert2', async function() {
    await page.waitForSelector('.MuiBox-root > .MuiBox-root > .MuiBox-root > .MuiBox-root > svg')
    await page.click('.MuiBox-root > .MuiBox-root > .MuiBox-root > .MuiBox-root > svg')
  })
  
  await synthetics.executeStep('Click_titleSubmit', async function() {
    await page.waitForSelector('.MuiBox-root #title')
    await page.click('.MuiBox-root #title')
    await page.keyboard.press('Enter')
  })
  
  await synthetics.executeStep('Check_invalidResponse_Title', async function() {
    await page.waitForFunction((selector, xpath) => document.querySelector(selector) && 
    document.evaluate(xpath, document.querySelector(selector), null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue !== null, {}, 
    '#title-helper-text', '//*[contains(text(), "Title is required")]');
  })
  
  await synthetics.executeStep('Check_invalidResponse_Certs', async function() {
    await page.waitForFunction((selector, xpath) => document.querySelector(selector) && 
    document.evaluate(xpath, document.querySelector(selector), null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue !== null, {}, 
    '#root', '//*[contains(text(), "If no certificate, select none.")]');
  })

  await synthetics.executeStep('Type_titleValid', async function() {
    await page.type('.MuiBox-root #title', "CTO")
  })
  
  await synthetics.executeStep('None AWS Certs', async function() {
    await page.waitForSelector('.MuiBox-root #awsCerts')
    await page.click('.MuiBox-root #awsCerts')
  })
  
  await synthetics.executeStep('None AWS Certs', async function() {
    await page.waitForSelector('body > #menu-awsCerts > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(1)')
    await page.click('body > #menu-awsCerts > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(1)')
    await page.keyboard.press('Escape')
  })
  
  await synthetics.executeStep('Click_titleSubmit', async function() {
    await page.waitForSelector('.MuiBox-root #title')
    await page.click('.MuiBox-root #title')
    await page.keyboard.press('Enter')
  })
  
  //////Code spliced from recorder
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
  
  
  
  await synthetics.executeStep('Click_address', async function() {
    await page.waitForSelector('.MuiBox-root #address')
    await page.click('.MuiBox-root #address')
  })
  
  await synthetics.executeStep('Delete_address', async function() {
    const inputElement = await page.$('.MuiBox-root #address')
    await inputElement.click({ clickCount: 3 })
    await page.keyboard.press('Backspace')
    await page.keyboard.press('Enter')
  })
  
  await synthetics.executeStep('Check_invalidResponse_address', async function() {
    await page.waitForFunction((selector, xpath) => document.querySelector(selector) && 
    document.evaluate(xpath, document.querySelector(selector), null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue !== null, {}, 
    '#address-helper-text', '//*[contains(text(), "Invalid entry.")]');
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
  
  await synthetics.executeStep('Click_phone#', async function() {
    await page.waitForSelector('.MuiBox-root #phone')
    await page.click('.MuiBox-root #phone')
  })
  
  await synthetics.executeStep('Delete_phone#', async function() {
    const inputElement = await page.$('.MuiBox-root #phone')
    await inputElement.click({ clickCount: 3 })
    await page.keyboard.press('Backspace')
    await page.keyboard.press('Enter')
  })
  
  await synthetics.executeStep('Check_invalidResponse_phone', async function() {
    await page.waitForFunction((selector, xpath) => document.querySelector(selector) && 
    document.evaluate(xpath, document.querySelector(selector), null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue !== null, {}, 
    '#phone-helper-text', '//*[contains(text(), "Invalid entry.")]');
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
    '#website-helper-text', '//*[contains(text(), "Invalid entry. Must include http://")]');
  })
  
  await synthetics.executeStep('Click_CompReqs', async function() {
    await page.waitForSelector('.MuiBox-root #complianceReqs')
    await page.click('.MuiBox-root #complianceReqs')
  })
  
  await synthetics.executeStep('Select_CompChild(1)', async function() {
    await page.waitForSelector('body > #menu-complianceReqs > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(1)')
    await page.click('body > #menu-complianceReqs > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(1)')
  })
  
  await synthetics.executeStep('Click_CompReqs2', async function() {
    await page.waitForSelector('.MuiBox-root #complianceReqs')
    await page.click('.MuiBox-root #complianceReqs')
  })
  
  await synthetics.executeStep('Select_CompChild(3)', async function() {
    await page.waitForSelector('body > #menu-complianceReqs > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(3)')
    await page.click('body > #menu-complianceReqs > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(3)')
  })
  
  ///////HAPPY PATH
  await synthetics.executeStep('Click_companyName', async function() {
    await page.waitForSelector('.MuiBox-root #companyName')
    await page.click('.MuiBox-root #companyName')
  })
  
  await synthetics.executeStep('Restate_companyName', async function() {
    await page.type('.MuiBox-root #companyName', "Platformr")
  })
  
  await synthetics.executeStep('Click_address', async function() {
    await page.waitForSelector('.MuiBox-root #address')
    await page.click('.MuiBox-root #address')
  })
  
  await synthetics.executeStep('Restate_address', async function() {
    await page.type('.MuiBox-root #address', "1234 Test Dr Test 97701")
  })
  
  await synthetics.executeStep('Click_email', async function() {
    await page.waitForSelector('.MuiBox-root #email')
    await page.click('.MuiBox-root #email')
  })
  
  await synthetics.executeStep('Restate_email', async function() {
    await page.type('.MuiBox-root #email', "platformrtestplatformr.cloud")
  })
  
  await synthetics.executeStep('Delete_email', async function() {
    const inputElement = await page.$('.MuiBox-root #email')
    await inputElement.click({ clickCount: 3 })
    await page.keyboard.press('Backspace')
    await page.keyboard.press('Enter')
  })
  
  await synthetics.executeStep('Restate_email', async function() {
    await page.type('.MuiBox-root #email', "platformrtest@platformr")
  })
  
  await synthetics.executeStep('Delete_email', async function() {
    const inputElement = await page.$('.MuiBox-root #email')
    await inputElement.click({ clickCount: 3 })
    await page.keyboard.press('Backspace')
    await page.keyboard.press('Enter')
  })
  
  await synthetics.executeStep('Restate_email', async function() {
    await page.type('.MuiBox-root #email', "platformrtest@platformr.cloud")
  })
  
  await synthetics.executeStep('Click_phone', async function() {
    await page.waitForSelector('.MuiBox-root #phone')
    await page.click('.MuiBox-root #phone')
  })
  
  await synthetics.executeStep('Restate_phone', async function() {
    await page.type('.MuiBox-root #phone', "5418791029")
  })
  
  await synthetics.executeStep('Click_website', async function() {
    await page.waitForSelector('.MuiBox-root #website')
    await page.click('.MuiBox-root #website')
  })
  
  ///////UNCOMMENT FOR PRODUCTION////////
  //
  // await synthetics.executeStep('Restate_website invalid', async function() {
  //   await page.type('.MuiBox-root #website', "http://platformrtest")
  //   await page.keyboard.press('Enter')
  // })
  
  await synthetics.executeStep('Delete_website', async function() {
    const inputElement = await page.$('.MuiBox-root #website')
    await inputElement.click({ clickCount: 3 })
    await page.keyboard.press('Backspace')
    await page.keyboard.press('Enter')
  })
  
  await synthetics.executeStep('Restate_websiteInvalid2', async function() {
    await page.type('.MuiBox-root #website', "platformrtest.com")
    await page.keyboard.press('Enter')
  })
  
  await synthetics.executeStep('Check_invalidResponse_website', async function() {
    await page.waitForFunction((selector, xpath) => document.querySelector(selector) && 
    document.evaluate(xpath, document.querySelector(selector), null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue !== null, {}, 
    '#website-helper-text', '//*[contains(text(), "Invalid entry. Must include http://")]');
  })
  
  await synthetics.executeStep('Delete_website', async function() {
    const inputElement = await page.$('.MuiBox-root #website')
    await inputElement.click({ clickCount: 3 })
    await page.keyboard.press('Backspace')
    await page.keyboard.press('Enter')
  })
  
  await synthetics.executeStep('Restate_websiteValid', async function() {
    await page.type('.MuiBox-root #website', "https://platformrtest.com")
    await page.keyboard.press('Enter')
  })
  
  
  
  //Region dropdown
  await synthetics.executeStep('Click_Region', async function() {
    await page.waitForSelector('.MuiBox-root #primaryRegion')
    await page.click('.MuiBox-root #primaryRegion')
  })
  
  await synthetics.executeStep('Select_RegionChild(1)', async function() {
    await page.waitForSelector('body > #menu-primaryRegion > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(1)')
    await page.click('body > #menu-primaryRegion > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(1)')
  })
  
  await synthetics.executeStep('Click_Region2', async function() {
    await page.waitForSelector('.MuiBox-root #primaryRegion')
    await page.click('.MuiBox-root #primaryRegion')
  })
  
  await synthetics.executeStep('Select_RegionChild(3)', async function() {
    await page.waitForSelector('body > #menu-primaryRegion > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(3)')
    await page.click('body > #menu-primaryRegion > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(3)')
  })
  
  //DRR dropdown
  await synthetics.executeStep('Click_DRRegion', async function() {
    await page.waitForSelector('.MuiBox-root #disasterRecoveryRegion')
    await page.click('.MuiBox-root #disasterRecoveryRegion')
  })
  
  await synthetics.executeStep('Select_DRRegionChild(1)', async function() {
    await page.waitForSelector('body > #menu-disasterRecoveryRegion > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(1)')
    await page.click('body > #menu-disasterRecoveryRegion > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(1)')
  })
  
  await synthetics.executeStep('Click_DRRegion2', async function() {
    await page.waitForSelector('.MuiBox-root #disasterRecoveryRegion')
    await page.click('.MuiBox-root #disasterRecoveryRegion')
  })
  
  await synthetics.executeStep('Select_DRRegionChild(3)', async function() {
    await page.waitForSelector('body > #menu-disasterRecoveryRegion > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(3)')
    await page.click('body > #menu-disasterRecoveryRegion > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(3)')
  })
  
  
  
  
  
  ///////spliced code from recorder
  //SAD PATH
  await synthetics.executeStep('Click_recoveryTimeObjective', async function() {
    await page.waitForSelector('.MuiBox-root #recoveryTimeObjective')
    await page.click('.MuiBox-root #recoveryTimeObjective')
  })
  
  await synthetics.executeStep('Delete_recoveryTimeObjective', async function() {
    const inputElement = await page.$('.MuiBox-root #recoveryTimeObjective')
    await inputElement.click({ clickCount: 3 })
    await page.keyboard.press('Backspace')
    await page.keyboard.press('Enter')
  })
  
  await synthetics.executeStep('Check_invalidResponse_recoveryTimeObjective', async function() {
    await page.waitForFunction((selector, xpath) => document.querySelector(selector) && 
    document.evaluate(xpath, document.querySelector(selector), null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue !== null, {}, 
    '#recoveryTimeObjective-helper-text', '//*[contains(text(), "Invalid entry.")]');
  })
  
  await synthetics.executeStep('Click_recoveryPointObjective', async function() {
    await page.waitForSelector('.MuiBox-root #recoveryPointObjective')
    await page.click('.MuiBox-root #recoveryPointObjective')
  })
  
  await synthetics.executeStep('Delete_recoveryPointObjective', async function() {
    const inputElement = await page.$('.MuiBox-root #recoveryPointObjective')
    await inputElement.click({ clickCount: 3 })
    await page.keyboard.press('Backspace')
    await page.keyboard.press('Enter')
  })
  
  await synthetics.executeStep('Check_invalidResponse_recoveryPointObjective', async function() {
    await page.waitForFunction((selector, xpath) => document.querySelector(selector) && 
    document.evaluate(xpath, document.querySelector(selector), null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue !== null, {}, 
    '#recoveryPointObjective-helper-text', '//*[contains(text(), "Invalid entry.")]');
  })
  
  await synthetics.executeStep('Click_ipRange', async function() {
    await page.waitForSelector('.MuiBox-root #ipRange')
    await page.click('.MuiBox-root #ipRange')
  })
  
  await synthetics.executeStep('Delete_ipRange', async function() {
    const inputElement = await page.$('.MuiBox-root #ipRange')
    await inputElement.click({ clickCount: 3 })
    await page.keyboard.press('Backspace')
    await page.keyboard.press('Enter')
  })
  
  await synthetics.executeStep('Check_invalidResponse_ipRange', async function() {
    await page.waitForFunction((selector, xpath) => document.querySelector(selector) && 
    document.evaluate(xpath, document.querySelector(selector), null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue !== null, {}, 
    '#ipRange-helper-text', '//*[contains(text(), "Invalid entry.")]');
  })
  
  //HAPPY PATH
  await synthetics.executeStep('Click_recoveryTimeObjective', async function() {
    await page.waitForSelector('.MuiBox-root #recoveryTimeObjective')
    await page.click('.MuiBox-root #recoveryTimeObjective')
  })
  
  await synthetics.executeStep('Type_recoveryTimeObjective', async function() {
    await page.type('.MuiBox-root #recoveryTimeObjective', "2")
  })
  
  
  
  await synthetics.executeStep('Click_recoveryPointObjective', async function() {
    await page.waitForSelector('.MuiBox-root #recoveryPointObjective')
    await page.click('.MuiBox-root #recoveryPointObjective')
  })
  
  await synthetics.executeStep('Type_recoveryPointObjective', async function() {
    await page.type('.MuiBox-root #recoveryPointObjective', "2")
  })
  
  await synthetics.executeStep('Click_ipRange', async function() {
    await page.waitForSelector('.MuiBox-root #ipRange')
    await page.click('.MuiBox-root #ipRange')
  })
  
  await synthetics.executeStep('Type_ipRange', async function() {
    await page.type('.MuiBox-root #ipRange', "02006")
    await page.keyboard.press('Enter')
  })
  
  await synthetics.executeStep('Check_invalidResponse_ipRange', async function() {
    await page.waitForFunction((selector, xpath) => document.querySelector(selector) && 
    document.evaluate(xpath, document.querySelector(selector), null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue !== null, {}, 
    '#ipRange-helper-text', '//*[contains(text(), "Invalid entry.")]');
  })
  
  await synthetics.executeStep('Delete_ipRange', async function() {
    const inputElement = await page.$('.MuiBox-root #ipRange')
    await inputElement.click({ clickCount: 3 })
    await page.keyboard.press('Backspace')
  })
  
  await synthetics.executeStep('Type_ipRange', async function() {
    await page.type('.MuiBox-root #ipRange', "10.0.0.0")
  })
  
  
  //network settings dropdowns
  await synthetics.executeStep('Click_cloud', async function() {
    await page.waitForSelector('.MuiBox-root #cloudCIDR')
    await page.click('.MuiBox-root #cloudCIDR')
  })
  
  await synthetics.executeStep('Select_cloudChild(6)', async function() {
    await page.waitForSelector('body > #menu-cloudCIDR > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(6)')
    await page.click('body > #menu-cloudCIDR > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(6)')
  })
  
  await synthetics.executeStep('Click_cloud2', async function() {
    await page.waitForSelector('.MuiBox-root #cloudCIDR')
    await page.click('.MuiBox-root #cloudCIDR')
  })
  
  await synthetics.executeStep('Select_cloudChild(7)', async function() {
    await page.waitForSelector('body > #menu-cloudCIDR > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(7)')
    await page.click('body > #menu-cloudCIDR > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(7)')
  })
  
  //vpc
  await synthetics.executeStep('Click_vpc', async function() {
    await page.waitForSelector('.MuiBox-root #vpcCIDR')
    await page.click('.MuiBox-root #vpcCIDR')
  })
  
  await synthetics.executeStep('Select_vpcChild(4)', async function() {
    await page.waitForSelector('body > #menu-vpcCIDR > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(4)')
    await page.click('body > #menu-vpcCIDR > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(4)')
  })
  
  await synthetics.executeStep('Click_vpc2', async function() {
    await page.waitForSelector('.MuiBox-root #vpcCIDR')
    await page.click('.MuiBox-root #vpcCIDR')
  })
  
  await synthetics.executeStep('Select_vpcChild(5)', async function() {
    await page.waitForSelector('body > #menu-vpcCIDR > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(5)')
    await page.click('body > #menu-vpcCIDR > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(5)')
  })
  
  //subnet
  await synthetics.executeStep('Click_subnet', async function() {
    await page.waitForSelector('.MuiBox-root #subnetCIDR')
    await page.click('.MuiBox-root #subnetCIDR')
  })
  
  await synthetics.executeStep('Select_subnetChild(3)', async function() {
    await page.waitForSelector('body > #menu-subnetCIDR > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(3)')
    await page.click('body > #menu-subnetCIDR > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(3)')
  })
  
  await synthetics.executeStep('Click_subnet2', async function() {
    await page.waitForSelector('.MuiBox-root #subnetCIDR')
    await page.click('.MuiBox-root #subnetCIDR')
  })
  
  await synthetics.executeStep('Select_subnetChild(2)', async function() {
    await page.waitForSelector('body > #menu-subnetCIDR > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(2)')
    await page.click('body > #menu-subnetCIDR > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(2)')
  })
  
  //Network Topology
  await synthetics.executeStep('Click_NetTop', async function() {
    await page.waitForSelector('.MuiBox-root #networkTopology')
    await page.click('.MuiBox-root #networkTopology')
  })
  
  await synthetics.executeStep('Select_NetTopChild(2)', async function() {
    await page.waitForSelector('body > #menu-networkTopology > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(2)')
    await page.click('body > #menu-networkTopology > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(2)')
  })
  
  await synthetics.executeStep('Click_NetTop2', async function() {
    await page.waitForSelector('.MuiBox-root #networkTopology')
    await page.click('.MuiBox-root #networkTopology')
  })
  
  await synthetics.executeStep('Select_NetTopChild(1)', async function() {
    await page.waitForSelector('body > #menu-networkTopology > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(1)')
    await page.click('body > #menu-networkTopology > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(1)')
  })
  
  //RTO Unit
  await synthetics.executeStep('Click_rtoUnit', async function() {
    await page.waitForSelector('.MuiBox-root #rtoTimeUnit')
    await page.click('.MuiBox-root #rtoTimeUnit')
  })
  
  await synthetics.executeStep('Select_rtoUnitChild(2)', async function() {
    await page.waitForSelector('body > #menu-rtoTimeUnit > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(2)')
    await page.click('body > #menu-rtoTimeUnit > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(2)')
  })
  
  await synthetics.executeStep('Click_rtoUnit2', async function() {
    await page.waitForSelector('.MuiBox-root #rtoTimeUnit')
    await page.click('.MuiBox-root #rtoTimeUnit')
  })
  
  await synthetics.executeStep('Select_rtoUnitChild(1)', async function() {
    await page.waitForSelector('body > #menu-rtoTimeUnit > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(1)')
    await page.click('body > #menu-rtoTimeUnit > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(1)')
  })
  
  //RPO Unit
  await synthetics.executeStep('Click_rpoUnit', async function() {
    await page.waitForSelector('.MuiBox-root #rpoTimeUnit')
    await page.click('.MuiBox-root #rpoTimeUnit')
  })
  
  await synthetics.executeStep('Select_rpoUnitChild(2)', async function() {
    await page.waitForSelector('body > #menu-rpoTimeUnit > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(2)')
    await page.click('body > #menu-rpoTimeUnit > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(2)')
  })
  
  await synthetics.executeStep('Click_rpoUnit2', async function() {
    await page.waitForSelector('.MuiBox-root #rpoTimeUnit')
    await page.click('.MuiBox-root #rpoTimeUnit')
  })
  
  await synthetics.executeStep('Select_rpoUnitChild(1)', async function() {
    await page.waitForSelector('body > #menu-rpoTimeUnit > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(1)')
    await page.click('body > #menu-rpoTimeUnit > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(1)')
  })
  
  await synthetics.executeStep('Click_ipRange+Submit', async function() {
    await page.waitForSelector('.MuiBox-root #ipRange')
    await page.click('.MuiBox-root #ipRange')
    await page.keyboard.press('Enter')
  })
  
  
  await synthetics.executeStep('Select_cred_blockSSO', async function() {
    await page.waitForSelector('.MuiBox-root #credentialBlockSSO')
    await page.click('.MuiBox-root #credentialBlockSSO')
    await page.type('.MuiBox-root #credentialBlockSSO', "invalid-response")
  })
  
  
  await synthetics.executeStep('Goto_Logout', async function() {
    await page.goto("https://portal.dev.platformr.cloud/logout", {waitUntil: 'domcontentloaded', timeout: 60000})
  })
  
  await synthetics.executeStep('Click_Final', async function() {
    await page.waitForSelector('.MuiBox-root #email')
    await page.click('.MuiBox-root #email')
  })
  
};
exports.handler = async () => {
    return await recordedScript();
};