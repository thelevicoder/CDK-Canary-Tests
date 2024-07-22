var synthetics = require('Synthetics');
const log = require('SyntheticsLogger');

const recordedScript = async function () {
  let page = await synthetics.getPage();
  
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
  
  await synthetics.executeStep('Click_Password', async function() {
    await page.waitForSelector('.MuiBox-root #password')
    await page.click('.MuiBox-root #password')
  })
  
  await synthetics.executeStep('Enter_password', async function() {
    await page.type('.MuiBox-root #password', "Test1234!@\n")
  })
  
  await synthetics.executeStep('Click_config', async function() {
    await page.waitForSelector('.MuiTable-root > .MuiTableBody-root > .MuiTableRow-root > .MuiTableCell-root:nth-child(3) > .MuiButtonBase-root')
    await page.click('.MuiTable-root > .MuiTableBody-root > .MuiTableRow-root > .MuiTableCell-root:nth-child(3) > .MuiButtonBase-root')
  })
  
  await synthetics.executeStep('Click_cancel', async function() {
    await page.waitForSelector('.MuiBox-root > .MuiContainer-root > .MuiBox-root > .MuiBox-root > .MuiButtonBase-root:nth-child(1)')
    await page.click('.MuiBox-root > .MuiContainer-root > .MuiBox-root > .MuiBox-root > .MuiButtonBase-root:nth-child(1)')
  })
  
  await synthetics.executeStep('Click_homepageBody', async function() {
    await page.waitForSelector('body > #root > .MuiBox-root > .MuiBox-root > .MuiContainer-root')
    await page.click('body > #root > .MuiBox-root > .MuiBox-root > .MuiContainer-root')
  })
  
  await synthetics.executeStep('Click_config', async function() {
    await page.waitForSelector('.MuiTable-root > .MuiTableBody-root > .MuiTableRow-root > .MuiTableCell-root:nth-child(3) > .MuiButtonBase-root')
    await page.click('.MuiTable-root > .MuiTableBody-root > .MuiTableRow-root > .MuiTableCell-root:nth-child(3) > .MuiButtonBase-root')
  })
  
  await synthetics.executeStep('Click_InfraOU', async function() {
    await page.waitForSelector('.MuiPaper-root:nth-child(3) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(2) > .MuiButtonBase-root > .PrivateSwitchBase-input')
    await page.click('.MuiPaper-root:nth-child(3) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(2) > .MuiButtonBase-root > .PrivateSwitchBase-input')
    await page.type('.MuiPaper-root:nth-child(3) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(2) > .MuiButtonBase-root > .PrivateSwitchBase-input', "on")
    await page.waitForSelector('.MuiPaper-root:nth-child(3) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(2) > .MuiButtonBase-root > .PrivateSwitchBase-input')
    await page.click('.MuiPaper-root:nth-child(3) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(2) > .MuiButtonBase-root > .PrivateSwitchBase-input')
    await page.type('.MuiPaper-root:nth-child(3) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(2) > .MuiButtonBase-root > .PrivateSwitchBase-input', "on")
  })
  
  await synthetics.executeStep('Click_InfraID', async function() {
    await page.waitForSelector('.MuiGrid-root #importedInfrastructureOuId')
    await page.click('.MuiGrid-root #importedInfrastructureOuId')
  })
  
  await synthetics.executeStep('Edit_InfraID', async function() {
    const inputElement = await page.$('.MuiBox-root #importedInfrastructureOuId')
    await inputElement.click({ clickCount: 3 })
    await page.keyboard.press('Backspace')
    await page.keyboard.press('Enter')
  })
  
  await synthetics.executeStep('Check_invalidResponse_InfraID_Deleted', async function() {
    await page.waitForFunction((selector, xpath) => document.querySelector(selector) &&
    document.evaluate(xpath, document.querySelector(selector), null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue !== null, {},
    '#importedInfrastructureOuId-helper-text', '//*[contains(text(), "Invalid OU ID")]');
  })
  
  await synthetics.executeStep('Click_InfraID', async function() {
    await page.waitForSelector('.MuiGrid-root #importedInfrastructureOuId')
    await page.click('.MuiGrid-root #importedInfrastructureOuId')
  })
  
  await synthetics.executeStep('Edit_InfraID', async function() {
    await page.type('.MuiGrid-root #importedInfrastructureOuId', "ou-k3ut-ogcr04u3q")
    const inputElement = await page.$('.MuiBox-root #importedInfrastructureOuId')
    await inputElement.click({ clickCount: 3 })
    await page.keyboard.press('Backspace')
    await page.type('.MuiGrid-root #importedInfrastructureOuId', "ou-k3ut-ogcr04u3")
  })
  
  await synthetics.executeStep('Click_SecurityOU', async function() {
    await page.waitForSelector('.MuiPaper-root:nth-child(3) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(6) > .MuiButtonBase-root > .PrivateSwitchBase-input')
    await page.click('.MuiPaper-root:nth-child(3) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(6) > .MuiButtonBase-root > .PrivateSwitchBase-input')
    await page.type('.MuiPaper-root:nth-child(3) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(6) > .MuiButtonBase-root > .PrivateSwitchBase-input', "on")
    await page.waitForSelector('.MuiPaper-root:nth-child(3) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(6) > .MuiButtonBase-root > .PrivateSwitchBase-input')
    await page.click('.MuiPaper-root:nth-child(3) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(6) > .MuiButtonBase-root > .PrivateSwitchBase-input')
    await page.type('.MuiPaper-root:nth-child(3) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(6) > .MuiButtonBase-root > .PrivateSwitchBase-input', "on")
  })
  
  await synthetics.executeStep('Click_SecurityID', async function() {
    await page.waitForSelector('.MuiGrid-root #importedSecurityOuId')
    await page.click('.MuiGrid-root #importedSecurityOuId')
  })
  
  await synthetics.executeStep('Edit_SecurityID', async function() {
    const inputElement = await page.$('.MuiBox-root #importedSecurityOuId')
    await inputElement.click({ clickCount: 3 })
    await page.keyboard.press('Backspace')
    await page.keyboard.press('Enter')
  })
  
  await synthetics.executeStep('Check_invalidResponse_SecurityID_deleted', async function() {
    await page.waitForFunction((selector, xpath) => document.querySelector(selector) &&
    document.evaluate(xpath, document.querySelector(selector), null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue !== null, {},
    '#importedSecurityOuId-helper-text', '//*[contains(text(), "Invalid OU ID")]');
  })
  
  await synthetics.executeStep('Click_SecurityID', async function() {
    await page.waitForSelector('.MuiGrid-root #importedSecurityOuId')
    await page.click('.MuiGrid-root #importedSecurityOuId')
  })
  
  await synthetics.executeStep('Edit_SecurityID', async function() {
    await page.type('.MuiGrid-root #importedSecurityOuId', "ou-k3ut-jw415a4hq")
    const inputElement = await page.$('.MuiBox-root #importedSecurityOuId')
    await inputElement.click({ clickCount: 3 })
    await page.keyboard.press('Backspace')
    await page.type('.MuiGrid-root #importedSecurityOuId', "ou-k3ut-jw415a4h")
  })
  
  await synthetics.executeStep('Click_WorkloadsOU', async function() {
    await page.type('.MuiPaper-root:nth-child(3) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(10) > .MuiButtonBase-root > .PrivateSwitchBase-input', "on")
    await page.waitForSelector('.MuiPaper-root:nth-child(3) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(10) > .MuiButtonBase-root > .PrivateSwitchBase-input')
    await page.click('.MuiPaper-root:nth-child(3) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(10) > .MuiButtonBase-root > .PrivateSwitchBase-input')
  })
  
  await synthetics.executeStep('Click_WorkloadsID', async function() {
    await page.waitForSelector('.MuiGrid-root #importedWorkloadsOuId')
    await page.click('.MuiGrid-root #importedWorkloadsOuId')
    await page.keyboard.press('Enter')
  })
  
  await synthetics.executeStep('Check_invalidResponse_workloadsID_deleted', async function() {
    await page.waitForFunction((selector, xpath) => document.querySelector(selector) &&
    document.evaluate(xpath, document.querySelector(selector), null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue !== null, {},
    '#importedWorkloadsOuId-helper-text', '//*[contains(text(), "Invalid OU ID")]');
  })
  
  await synthetics.executeStep('Click_WorkloadsID', async function() {
    await page.waitForSelector('.MuiGrid-root #importedWorkloadsOuId')
    await page.click('.MuiGrid-root #importedWorkloadsOuId')
  })
  
  await synthetics.executeStep('Edit_WorkloadsID', async function() {
    await page.type('.MuiGrid-root #importedWorkloadsOuId', "hello123")
    await page.keyboard.press('Enter')

  })
  
  await synthetics.executeStep('Check_invalidResponse_workloadsID_Wrong', async function() {
    await page.waitForFunction((selector, xpath) => document.querySelector(selector) &&
    document.evaluate(xpath, document.querySelector(selector), null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue !== null, {},
    '#importedWorkloadsOuId-helper-text', '//*[contains(text(), "Invalid OU ID")]');
  })
  
  await synthetics.executeStep('Click_WorkloadsID', async function() {
    await page.waitForSelector('.MuiGrid-root #importedWorkloadsOuId')
    await page.click('.MuiGrid-root #importedWorkloadsOuId')
  })
  
  await synthetics.executeStep('Edit_WorkloadsID', async function() {
    const inputElement = await page.$('.MuiBox-root #importedWorkloadsOuId')
    await inputElement.click({ clickCount: 3})
    await page.keyboard.press( 'Backspace' )
  })
  
  await synthetics.executeStep('Click_WorkloadsOU', async function() {
    await page.type('.MuiPaper-root:nth-child(3) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(10) > .MuiButtonBase-root > .PrivateSwitchBase-input', "on")
    await page.waitForSelector('.MuiPaper-root:nth-child(3) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(10) > .MuiButtonBase-root > .PrivateSwitchBase-input')
    await page.click('.MuiPaper-root:nth-child(3) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(10) > .MuiButtonBase-root > .PrivateSwitchBase-input')
  })
  
  await synthetics.executeStep('Click_ExceptionsOU', async function() {
    await page.type('.MuiPaper-root:nth-child(3) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(14) > .MuiButtonBase-root > .PrivateSwitchBase-input', "on")
    await page.waitForSelector('.MuiPaper-root:nth-child(3) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(14) > .MuiButtonBase-root > .PrivateSwitchBase-input')
    await page.click('.MuiPaper-root:nth-child(3) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(14) > .MuiButtonBase-root > .PrivateSwitchBase-input')
  })
  
  await synthetics.executeStep('Click_ExceptionsID', async function() {
    await page.waitForSelector('.MuiGrid-root #importedExceptionsOuId')
    await page.click('.MuiGrid-root #importedExceptionsOuId')
    await page.keyboard.press('Enter')
  })
  
  await synthetics.executeStep('Check_invalidResponse_ExceptionsIDPdeleted', async function() {
    await page.waitForFunction((selector, xpath) => document.querySelector(selector) &&
    document.evaluate(xpath, document.querySelector(selector), null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue !== null, {},
    '#importedExceptionsOuId-helper-text', '//*[contains(text(), "Invalid OU ID")]');
  })
  
  await synthetics.executeStep('Click_ExceptionsID', async function() {
    await page.waitForSelector('.MuiGrid-root #importedExceptionsOuId')
    await page.click('.MuiGrid-root #importedExceptionsOuId')
  })
  
  await synthetics.executeStep('Edit_ExceptionsID', async function() {
    await page.type('.MuiGrid-root #importedExceptionsOuId', "hello123")
    await page.keyboard.press('Enter')

  })
  
  await synthetics.executeStep('Check_invalidResponse_ExcepetionsID_Wrong', async function() {
    await page.waitForFunction((selector, xpath) => document.querySelector(selector) &&
    document.evaluate(xpath, document.querySelector(selector), null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue !== null, {},
    '#importedExceptionsOuId-helper-text', '//*[contains(text(), "Invalid OU ID")]');
  })
  
  await synthetics.executeStep('Click_ExceptionsID', async function() {
    await page.waitForSelector('.MuiGrid-root #importedExceptionsOuId')
    await page.click('.MuiGrid-root #importedExceptionsOuId')
  })
  
  await synthetics.executeStep('Edit_WorkloadsID', async function() {
    const inputElement = await page.$('.MuiBox-root #importedExceptionsOuId')
    await inputElement.click({ clickCount: 3})
    await page.keyboard.press( 'Backspace' )
  })
  
  await synthetics.executeStep('Click_ExceptionsOU', async function() {
    await page.type('.MuiPaper-root:nth-child(3) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(14) > .MuiButtonBase-root > .PrivateSwitchBase-input', "on")
    await page.waitForSelector('.MuiPaper-root:nth-child(3) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(14) > .MuiButtonBase-root > .PrivateSwitchBase-input')
    await page.click('.MuiPaper-root:nth-child(3) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(14) > .MuiButtonBase-root > .PrivateSwitchBase-input')
  })
  
  await synthetics.executeStep('Click_TransitionalOU', async function() {
    await page.type('.MuiPaper-root:nth-child(3) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(18) > .MuiButtonBase-root > .PrivateSwitchBase-input', "on")
    await page.waitForSelector('.MuiPaper-root:nth-child(3) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(18) > .MuiButtonBase-root > .PrivateSwitchBase-input')
    await page.click('.MuiPaper-root:nth-child(3) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(18) > .MuiButtonBase-root > .PrivateSwitchBase-input')
  })
  
  await synthetics.executeStep('Click_TransitionalID', async function() {
    await page.waitForSelector('.MuiGrid-root #importedTransitionalOuId')
    await page.click('.MuiGrid-root #importedTransitionalOuId')
    await page.keyboard.press('Enter')
  })
  
  await synthetics.executeStep('Check_invalidResponse_transitionalID_deleted', async function() {
    await page.waitForFunction((selector, xpath) => document.querySelector(selector) &&
    document.evaluate(xpath, document.querySelector(selector), null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue !== null, {},
    '#importedTransitionalOuId-helper-text', '//*[contains(text(), "Invalid OU ID")]');
  })
  
  await synthetics.executeStep('Click_TransitionalID', async function() {
    await page.waitForSelector('.MuiGrid-root #importedTransitionalOuId')
    await page.click('.MuiGrid-root #importedTransitionalOuId')
  })
  
  await synthetics.executeStep('Edit_TransitionalID', async function() {
    await page.type('.MuiGrid-root #importedTransitionalOuId', "hello123")
    await page.keyboard.press('Enter')

  })
  
  await synthetics.executeStep('Check_invalidResponse_transitionalID_Wrong', async function() {
    await page.waitForFunction((selector, xpath) => document.querySelector(selector) &&
    document.evaluate(xpath, document.querySelector(selector), null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue !== null, {},
    '#importedTransitionalOuId-helper-text', '//*[contains(text(), "Invalid OU ID")]');
  })
  
  await synthetics.executeStep('Click_TransitionalID', async function() {
    await page.waitForSelector('.MuiGrid-root #importedTransitionalOuId')
    await page.click('.MuiGrid-root #importedTransitionalOuId')
  })
  
  await synthetics.executeStep('Edit_TransitionalID', async function() {
    const inputElement = await page.$('.MuiBox-root #importedTransitionalOuId')
    await inputElement.click({ clickCount: 3})
    await page.keyboard.press( 'Backspace' )
  })
  
  await synthetics.executeStep('Click_TransitionalOU', async function() {
    await page.type('.MuiPaper-root:nth-child(3) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(18) > .MuiButtonBase-root > .PrivateSwitchBase-input', "on")
    await page.waitForSelector('.MuiPaper-root:nth-child(3) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(18) > .MuiButtonBase-root > .PrivateSwitchBase-input')
    await page.click('.MuiPaper-root:nth-child(3) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(18) > .MuiButtonBase-root > .PrivateSwitchBase-input')
  })
  
  await synthetics.executeStep('Click_SuspendedOU', async function() {
    await page.type('.MuiPaper-root:nth-child(3) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(22) > .MuiButtonBase-root > .PrivateSwitchBase-input', "on")
    await page.waitForSelector('.MuiPaper-root:nth-child(3) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(22) > .MuiButtonBase-root > .PrivateSwitchBase-input')
    await page.click('.MuiPaper-root:nth-child(3) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(22) > .MuiButtonBase-root > .PrivateSwitchBase-input')
  })
  
  await synthetics.executeStep('Click_SuspendedID', async function() {
    await page.waitForSelector('.MuiGrid-root #importedSuspendedOuId')
    await page.click('.MuiGrid-root #importedSuspendedOuId')
    await page.keyboard.press('Enter')
  })
  
  await synthetics.executeStep('Check_invalidResponse_suspendedID_deleted', async function() {
    await page.waitForFunction((selector, xpath) => document.querySelector(selector) &&
    document.evaluate(xpath, document.querySelector(selector), null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue !== null, {},
    '#importedSuspendedOuId-helper-text', '//*[contains(text(), "Invalid OU ID")]');
  })
  
  await synthetics.executeStep('Click_SuspendedID', async function() {
    await page.waitForSelector('.MuiGrid-root #importedSuspendedOuId')
    await page.click('.MuiGrid-root #importedSuspendedOuId')
  })
  
  await synthetics.executeStep('Edit_SuspendedID', async function() {
    await page.type('.MuiGrid-root #importedSuspendedOuId', "hello123")
    await page.keyboard.press('Enter')

  })
  
  await synthetics.executeStep('Check_invalidResponseSuspendedID_wrong', async function() {
    await page.waitForFunction((selector, xpath) => document.querySelector(selector) &&
    document.evaluate(xpath, document.querySelector(selector), null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue !== null, {},
    '#importedSuspendedOuId-helper-text', '//*[contains(text(), "Invalid OU ID")]');
  })
  
  await synthetics.executeStep('Click_SuspendedID', async function() {
    await page.waitForSelector('.MuiGrid-root #importedSuspendedOuId')
    await page.click('.MuiGrid-root #importedSuspendedOuId')
  })
  
  await synthetics.executeStep('Edit_SuspendedID', async function() {
    const inputElement = await page.$('.MuiBox-root #importedSuspendedOuId')
    await inputElement.click({ clickCount: 3})
    await page.keyboard.press( 'Backspace' )
  })
  
  await synthetics.executeStep('Click_SuspendedOU', async function() {
    await page.type('.MuiPaper-root:nth-child(3) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(22) > .MuiButtonBase-root > .PrivateSwitchBase-input', "on")
    await page.waitForSelector('.MuiPaper-root:nth-child(3) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(22) > .MuiButtonBase-root > .PrivateSwitchBase-input')
    await page.click('.MuiPaper-root:nth-child(3) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(22) > .MuiButtonBase-root > .PrivateSwitchBase-input')
  })
  
  //Creating or Importing Accounts
  await synthetics.executeStep('Click_log_archive_email', async function() {
    await page.waitForSelector('.MuiGrid-root #logArchiveAccountEmail')
    await page.click('.MuiGrid-root #logArchiveAccountEmail')
  })
  
  await synthetics.executeStep('Edit_log_archive_email', async function() {
    const inputElement = await page.$('.MuiBox-root #logArchiveAccountEmail')
    await inputElement.click({ clickCount: 3})
    await page.keyboard.press( 'Backspace' )
    await page.keyboard.press('Enter')
  })
  
  await synthetics.executeStep('Check_invalidResponse_logArchive_Email_deleted', async function() {
    await page.waitForFunction((selector, xpath) => document.querySelector(selector) &&
    document.evaluate(xpath, document.querySelector(selector), null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue !== null, {},
    '#logArchiveAccountEmail-helper-text', '//*[contains(text(), "Email must be unique and valid")]');
  })
  
  await synthetics.executeStep('Click_log_archive_email', async function() {
    await page.waitForSelector('.MuiGrid-root #logArchiveAccountEmail')
    await page.click('.MuiGrid-root #logArchiveAccountEmail')
  })
  
  await synthetics.executeStep('Edit_log_archive_email', async function() {
    const inputElement = await page.$('.MuiBox-root #logArchiveAccountEmail')
    await inputElement.click({ clickCount: 3})
    await page.keyboard.press( 'Backspace' )
    await page.type('.MuiGrid-root #logArchiveAccountEmail', "aws+logArchiveEmailgmail.com")
    await page.keyboard.press('Enter')
  })

  await synthetics.executeStep('Check_invalidResponse_logArchive_EmailInvalid', async function() {
    await page.waitForFunction((selector, xpath) => document.querySelector(selector) &&
    document.evaluate(xpath, document.querySelector(selector), null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue !== null, {},
    '#logArchiveAccountEmail-helper-text', '//*[contains(text(), "Email must be unique and valid")]');
  })
  
  await synthetics.executeStep('Click_log_archive_email', async function() {
    await page.waitForSelector('.MuiGrid-root #logArchiveAccountEmail')
    await page.click('.MuiGrid-root #logArchiveAccountEmail')
  })
  
  await synthetics.executeStep('Edit_log_archive_email', async function() {
    const inputElement = await page.$('.MuiBox-root #logArchiveAccountEmail')
    await inputElement.click({ clickCount: 3})
    await page.keyboard.press( 'Backspace' )
    await page.type('.MuiGrid-root #logArchiveAccountEmail', "aws+logArchiveEmail@gmail")
    await page.keyboard.press('Enter')
  })
  
  await synthetics.executeStep('Check_invalidResponse_logArchive_EmailInvalid2', async function() {
    await page.waitForFunction((selector, xpath) => document.querySelector(selector) &&
    document.evaluate(xpath, document.querySelector(selector), null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue !== null, {},
    '#logArchiveAccountEmail-helper-text', '//*[contains(text(), "Email must be unique and valid")]');
  })
  
  await synthetics.executeStep('Click_log_archive', async function() {
    await page.type('.MuiPaper-root:nth-child(4) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(2) > .MuiButtonBase-root > .PrivateSwitchBase-input', "on")
    await page.waitForSelector('.MuiPaper-root:nth-child(4) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(2) > .MuiButtonBase-root > .PrivateSwitchBase-input')
    await page.click('.MuiPaper-root:nth-child(4) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(2) > .MuiButtonBase-root > .PrivateSwitchBase-input')
  })
  
  await synthetics.executeStep('Click_log_archiveID', async function() {
    await page.waitForSelector('.MuiGrid-root #importedLogArchiveAccountId')
    await page.click('.MuiGrid-root #importedLogArchiveAccountId')
  })
  
  await synthetics.executeStep('Edit_log_archiveID', async function() {
    await page.keyboard.press( 'Enter' )
  })
  
  await synthetics.executeStep('Check_invalidResponse_logArchiveId_deleted', async function() {
    await page.waitForFunction((selector, xpath) => document.querySelector(selector) &&
    document.evaluate(xpath, document.querySelector(selector), null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue !== null, {},
    '#importedLogArchiveAccountId-helper-text', '//*[contains(text(), "Must be 12 numbers")]');
  })
  
  await synthetics.executeStep('Click_log_archiveID', async function() {
    await page.waitForSelector('.MuiGrid-root #importedLogArchiveAccountId')
    await page.click('.MuiGrid-root #importedLogArchiveAccountId')
  })
  
  await synthetics.executeStep('Edit_log_archiveID', async function() {
    await page.type('.MuiGrid-root #importedLogArchiveAccountId', "123456789")
    await page.keyboard.press('Enter')
  })
  
  await synthetics.executeStep('Check_invalidResponse_logArchiveId_wrong', async function() {
    await page.waitForFunction((selector, xpath) => document.querySelector(selector) &&
    document.evaluate(xpath, document.querySelector(selector), null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue !== null, {},
    '#importedLogArchiveAccountId-helper-text', '//*[contains(text(), "Must be 12 numbers")]');
  })
  
  await synthetics.executeStep('Click_log_archive', async function() {
    await page.type('.MuiPaper-root:nth-child(4) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(2) > .MuiButtonBase-root > .PrivateSwitchBase-input', "on")
    await page.waitForSelector('.MuiPaper-root:nth-child(4) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(2) > .MuiButtonBase-root > .PrivateSwitchBase-input')
    await page.click('.MuiPaper-root:nth-child(4) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(2) > .MuiButtonBase-root > .PrivateSwitchBase-input')
  })
  ///////////////////////////////////////////////////////
  await synthetics.executeStep('Click_networkEmail', async function() {
    await page.waitForSelector('.MuiGrid-root #networkAccountEmail')
    await page.click('.MuiGrid-root #networkAccountEmail')
  })
  
  await synthetics.executeStep('Edit_network_email', async function() {
    const inputElement = await page.$('.MuiBox-root #networkAccountEmail')
    await inputElement.click({ clickCount: 3})
    await page.keyboard.press( 'Backspace' )
    await page.keyboard.press('Enter')
  })
  
  await synthetics.executeStep('Check_invalidResponse_network_Email_deleted', async function() {
    await page.waitForFunction((selector, xpath) => document.querySelector(selector) &&
    document.evaluate(xpath, document.querySelector(selector), null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue !== null, {},
    '#networkAccountEmail-helper-text', '//*[contains(text(), "Email must be unique and valid")]');
  })
  
  await synthetics.executeStep('Click_network_email', async function() {
    await page.waitForSelector('.MuiGrid-root #networkAccountEmail')
    await page.click('.MuiGrid-root #networkAccountEmail')
  })
  
  await synthetics.executeStep('Edit_network_email', async function() {
    const inputElement = await page.$('.MuiBox-root #networkAccountEmail')
    await inputElement.click({ clickCount: 3})
    await page.keyboard.press( 'Backspace' )
    await page.type('.MuiGrid-root #networkAccountEmail', "aws+networkEmailgmail.com")
    await page.keyboard.press('Enter')
  })

  await synthetics.executeStep('Check_invalidResponse_network_EmailInvalid', async function() {
    await page.waitForFunction((selector, xpath) => document.querySelector(selector) &&
    document.evaluate(xpath, document.querySelector(selector), null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue !== null, {},
    '#networkAccountEmail-helper-text', '//*[contains(text(), "Email must be unique and valid")]');
  })
  
  await synthetics.executeStep('Click_network_email', async function() {
    await page.waitForSelector('.MuiGrid-root #networkAccountEmail')
    await page.click('.MuiGrid-root #networkAccountEmail')
  })
  
  await synthetics.executeStep('Edit_network_email', async function() {
    const inputElement = await page.$('.MuiBox-root #networkAccountEmail')
    await inputElement.click({ clickCount: 3})
    await page.keyboard.press( 'Backspace' )
    await page.type('.MuiGrid-root #networkAccountEmail', "aws+networkEmail@gmail")
    await page.keyboard.press('Enter')
  })
  
  await synthetics.executeStep('Check_invalidResponse_network_EmailInvalid2', async function() {
    await page.waitForFunction((selector, xpath) => document.querySelector(selector) &&
    document.evaluate(xpath, document.querySelector(selector), null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue !== null, {},
    '#networkAccountEmail-helper-text', '//*[contains(text(), "Email must be unique and valid")]');
  })
  
  await synthetics.executeStep('Click_network', async function() {
    await page.type('.MuiPaper-root:nth-child(4) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(6) > .MuiButtonBase-root > .PrivateSwitchBase-input', "on")
    await page.waitForSelector('.MuiPaper-root:nth-child(4) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(6) > .MuiButtonBase-root > .PrivateSwitchBase-input')
    await page.click('.MuiPaper-root:nth-child(4) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(6) > .MuiButtonBase-root > .PrivateSwitchBase-input')
  })
  
  await synthetics.executeStep('Click_networkID', async function() {
    await page.waitForSelector('.MuiGrid-root #importedNetworkAccountId')
    await page.click('.MuiGrid-root #importedNetworkAccountId')
  })
  
  await synthetics.executeStep('Edit_networkID', async function() {
    await page.keyboard.press( 'Enter' )
  })
  
  await synthetics.executeStep('Check_invalidResponse_networkID_deleted', async function() {
    await page.waitForFunction((selector, xpath) => document.querySelector(selector) &&
    document.evaluate(xpath, document.querySelector(selector), null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue !== null, {},
    '#importedNetworkAccountId-helper-text', '//*[contains(text(), "Must be 12 numbers")]');
  })
  
  await synthetics.executeStep('Click_networkID', async function() {
    await page.waitForSelector('.MuiGrid-root #importedNetworkAccountId')
    await page.click('.MuiGrid-root #importedNetworkAccountId')
  })
  
  await synthetics.executeStep('Edit_networkID', async function() {
    await page.type('.MuiGrid-root #importedNetworkAccountId', "123456789")
    await page.keyboard.press('Enter')
  })
  
  await synthetics.executeStep('Check_invalidResponse_networkID_Wrong', async function() {
    await page.waitForFunction((selector, xpath) => document.querySelector(selector) &&
    document.evaluate(xpath, document.querySelector(selector), null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue !== null, {},
    '#importedNetworkAccountId-helper-text', '//*[contains(text(), "Must be 12 numbers")]');
  })
  
  await synthetics.executeStep('Click_Network', async function() {
    await page.type('.MuiPaper-root:nth-child(4) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(6) > .MuiButtonBase-root > .PrivateSwitchBase-input', "on")
    await page.waitForSelector('.MuiPaper-root:nth-child(4) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(6) > .MuiButtonBase-root > .PrivateSwitchBase-input')
    await page.click('.MuiPaper-root:nth-child(4) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(6) > .MuiButtonBase-root > .PrivateSwitchBase-input')
  })
  ///////////////////////////
  await synthetics.executeStep('Click_identityEmail', async function() {
    await page.waitForSelector('.MuiGrid-root #identityAccountEmail')
    await page.click('.MuiGrid-root #identityAccountEmail')
  })
  
  await synthetics.executeStep('Edit_identity_email', async function() {
    const inputElement = await page.$('.MuiBox-root #identityAccountEmail')
    await inputElement.click({ clickCount: 3})
    await page.keyboard.press( 'Backspace' )
    await page.keyboard.press('Enter')
  })
  
  await synthetics.executeStep('Check_invalidResponse_identity_email_deleted', async function() {
    await page.waitForFunction((selector, xpath) => document.querySelector(selector) &&
    document.evaluate(xpath, document.querySelector(selector), null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue !== null, {},
    '#identityAccountEmail-helper-text', '//*[contains(text(), "Email must be unique and valid")]');
  })
  
  await synthetics.executeStep('Click_identity_email', async function() {
    await page.waitForSelector('.MuiGrid-root #identityAccountEmail')
    await page.click('.MuiGrid-root #identityAccountEmail')
  })
  
  await synthetics.executeStep('Edit_identity_email', async function() {
    const inputElement = await page.$('.MuiBox-root #identityAccountEmail')
    await inputElement.click({ clickCount: 3})
    await page.keyboard.press( 'Backspace' )
    await page.type('.MuiGrid-root #identityAccountEmail', "aws+identityEmailgmail.com")
    await page.keyboard.press('Enter')
  })

  await synthetics.executeStep('Check_invalidResponse_identityEmail_Invalid', async function() {
    await page.waitForFunction((selector, xpath) => document.querySelector(selector) &&
    document.evaluate(xpath, document.querySelector(selector), null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue !== null, {},
    '#identityAccountEmail-helper-text', '//*[contains(text(), "Email must be unique and valid")]');
  })
  
  await synthetics.executeStep('Click_identity_email', async function() {
    await page.waitForSelector('.MuiGrid-root #identityAccountEmail')
    await page.click('.MuiGrid-root #identityAccountEmail')
  })
  
  await synthetics.executeStep('Edit_identity_email', async function() {
    const inputElement = await page.$('.MuiBox-root #identityAccountEmail')
    await inputElement.click({ clickCount: 3})
    await page.keyboard.press( 'Backspace' )
    await page.type('.MuiGrid-root #identityAccountEmail', "aws+identityEmail@gmail")
    await page.keyboard.press('Enter')
  })
  
  await synthetics.executeStep('Check_invalidResponse_identityEmail_Invalid2', async function() {
    await page.waitForFunction((selector, xpath) => document.querySelector(selector) &&
    document.evaluate(xpath, document.querySelector(selector), null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue !== null, {},
    '#identityAccountEmail-helper-text', '//*[contains(text(), "Email must be unique and valid")]');
  })
  
  await synthetics.executeStep('Click_identity', async function() {
    await page.type('.MuiPaper-root:nth-child(4) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(10) > .MuiButtonBase-root > .PrivateSwitchBase-input', "on")
    await page.waitForSelector('.MuiPaper-root:nth-child(4) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(10) > .MuiButtonBase-root > .PrivateSwitchBase-input')
    await page.click('.MuiPaper-root:nth-child(4) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(10) > .MuiButtonBase-root > .PrivateSwitchBase-input')
  })
  
  await synthetics.executeStep('Click_identityID', async function() {
    await page.waitForSelector('.MuiGrid-root #importedIdentityAccountId')
    await page.click('.MuiGrid-root #importedIdentityAccountId')
  })
  
  await synthetics.executeStep('Edit_identityID', async function() {
    await page.keyboard.press( 'Enter' )
  })
  
  await synthetics.executeStep('Check_invalidResponse_identityID_deleted', async function() {
    await page.waitForFunction((selector, xpath) => document.querySelector(selector) &&
    document.evaluate(xpath, document.querySelector(selector), null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue !== null, {},
    '#importedIdentityAccountId-helper-text', '//*[contains(text(), "Must be 12 numbers")]');
  })
  
  await synthetics.executeStep('Click_identityID', async function() {
    await page.waitForSelector('.MuiGrid-root #importedIdentityAccountId')
    await page.click('.MuiGrid-root #importedIdentityAccountId')
  })
  
  await synthetics.executeStep('Edit_identityID', async function() {
    await page.type('.MuiGrid-root #importedIdentityAccountId', "123456789")
    await page.keyboard.press('Enter')
  })
  
  await synthetics.executeStep('Check_invalidResponse_identityID_Wrong', async function() {
    await page.waitForFunction((selector, xpath) => document.querySelector(selector) &&
    document.evaluate(xpath, document.querySelector(selector), null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue !== null, {},
    '#importedIdentityAccountId-helper-text', '//*[contains(text(), "Must be 12 numbers")]');
  })
  
  await synthetics.executeStep('Click_Identity', async function() {
    await page.type('.MuiPaper-root:nth-child(4) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(10) > .MuiButtonBase-root > .PrivateSwitchBase-input', "on")
    await page.waitForSelector('.MuiPaper-root:nth-child(4) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(10) > .MuiButtonBase-root > .PrivateSwitchBase-input')
    await page.click('.MuiPaper-root:nth-child(4) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(10) > .MuiButtonBase-root > .PrivateSwitchBase-input')
  })
  //////////////
  await synthetics.executeStep('Click_Shared_email', async function() {
    await page.waitForSelector('.MuiGrid-root #sharedResourcesAccountEmail')
    await page.click('.MuiGrid-root #sharedResourcesAccountEmail')
  })
  
  await synthetics.executeStep('Edit_Shared_email', async function() {
    const inputElement = await page.$('.MuiBox-root #sharedResourcesAccountEmail')
    await inputElement.click({ clickCount: 3})
    await page.keyboard.press( 'Backspace' )
    await page.keyboard.press('Enter')
  })
  
  await synthetics.executeStep('Check_invalidResponse_shared_Email_deleted', async function() {
    await page.waitForFunction((selector, xpath) => document.querySelector(selector) &&
    document.evaluate(xpath, document.querySelector(selector), null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue !== null, {},
    '#sharedResourcesAccountEmail-helper-text', '//*[contains(text(), "Email must be unique and valid")]');
  })
  
  await synthetics.executeStep('Click_Shared_email', async function() {
    await page.waitForSelector('.MuiGrid-root #sharedResourcesAccountEmail')
    await page.click('.MuiGrid-root #sharedResourcesAccountEmail')
  })
  
  await synthetics.executeStep('Edit_Shared_email', async function() {
    const inputElement = await page.$('.MuiBox-root #sharedResourcesAccountEmail')
    await inputElement.click({ clickCount: 3})
    await page.keyboard.press( 'Backspace' )
    await page.type('.MuiGrid-root #sharedResourcesAccountEmail', "aws+sharedResourcesEmailgmail.com")
    await page.keyboard.press('Enter')
  })

  await synthetics.executeStep('Check_invalidResponse_shared_emailInvalid', async function() {
    await page.waitForFunction((selector, xpath) => document.querySelector(selector) &&
    document.evaluate(xpath, document.querySelector(selector), null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue !== null, {},
    '#sharedResourcesAccountEmail-helper-text', '//*[contains(text(), "Email must be unique and valid")]');
  })
  
  await synthetics.executeStep('Click_Shared_email', async function() {
    await page.waitForSelector('.MuiGrid-root #sharedResourcesAccountEmail')
    await page.click('.MuiGrid-root #sharedResourcesAccountEmail')
  })
  
  await synthetics.executeStep('Edit_Shared_email', async function() {
    const inputElement = await page.$('.MuiBox-root #sharedResourcesAccountEmail')
    await inputElement.click({ clickCount: 3})
    await page.keyboard.press( 'Backspace' )
    await page.type('.MuiGrid-root #sharedResourcesAccountEmail', "aws+sharedResourcesEmail@gmail")
    await page.keyboard.press('Enter')
  })
  
  await synthetics.executeStep('Check_invalidResponse_shared_emailInvalid2', async function() {
    await page.waitForFunction((selector, xpath) => document.querySelector(selector) &&
    document.evaluate(xpath, document.querySelector(selector), null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue !== null, {},
    '#sharedResourcesAccountEmail-helper-text', '//*[contains(text(), "Email must be unique and valid")]');
  })
  
  await synthetics.executeStep('Click_Shared', async function() {
    await page.type('.MuiPaper-root:nth-child(4) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(14) > .MuiButtonBase-root > .PrivateSwitchBase-input', "on")
    await page.waitForSelector('.MuiPaper-root:nth-child(4) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(14) > .MuiButtonBase-root > .PrivateSwitchBase-input')
    await page.click('.MuiPaper-root:nth-child(4) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(14) > .MuiButtonBase-root > .PrivateSwitchBase-input')
  })
  
  await synthetics.executeStep('Click_SharedID', async function() {
    await page.waitForSelector('.MuiGrid-root #importedSharedResourcesAccountId')
    await page.click('.MuiGrid-root #importedSharedResourcesAccountId')
  })
  
  await synthetics.executeStep('Edit_SharedID', async function() {
    await page.keyboard.press( 'Enter' )
  })
  
  await synthetics.executeStep('Check_invalidResponse_sharedID_deleted', async function() {
    await page.waitForFunction((selector, xpath) => document.querySelector(selector) &&
    document.evaluate(xpath, document.querySelector(selector), null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue !== null, {},
    '#importedSharedResourcesAccountId-helper-text', '//*[contains(text(), "Must be 12 numbers")]');
  })
  
  await synthetics.executeStep('Click_SharedID', async function() {
    await page.waitForSelector('.MuiGrid-root #importedSharedResourcesAccountId')
    await page.click('.MuiGrid-root #importedSharedResourcesAccountId')
  })
  
  await synthetics.executeStep('Edit_SharedID', async function() {
    await page.type('.MuiGrid-root #importedSharedResourcesAccountId', "123456789")
    await page.keyboard.press('Enter')
  })
  
  await synthetics.executeStep('Check_invalidResponse_sharedID_wrong', async function() {
    await page.waitForFunction((selector, xpath) => document.querySelector(selector) &&
    document.evaluate(xpath, document.querySelector(selector), null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue !== null, {},
    '#importedSharedResourcesAccountId-helper-text', '//*[contains(text(), "Must be 12 numbers")]');
  })
  
  await synthetics.executeStep('Click_Shared', async function() {
    await page.type('.MuiPaper-root:nth-child(4) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(14) > .MuiButtonBase-root > .PrivateSwitchBase-input', "on")
    await page.waitForSelector('.MuiPaper-root:nth-child(4) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(14) > .MuiButtonBase-root > .PrivateSwitchBase-input')
    await page.click('.MuiPaper-root:nth-child(4) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(14) > .MuiButtonBase-root > .PrivateSwitchBase-input')
  })
  ////////////////////
  await synthetics.executeStep('Click_Audit_email', async function() {
    await page.waitForSelector('.MuiGrid-root #auditAccountEmail')
    await page.click('.MuiGrid-root #auditAccountEmail')
  })
  
  await synthetics.executeStep('Edit_Audit_email', async function() {
    const inputElement = await page.$('.MuiBox-root #auditAccountEmail')
    await inputElement.click({ clickCount: 3})
    await page.keyboard.press( 'Backspace' )
    await page.keyboard.press('Enter')
  })
  
  await synthetics.executeStep('Check_invalidResponse_audit_email_deleted', async function() {
    await page.waitForFunction((selector, xpath) => document.querySelector(selector) &&
    document.evaluate(xpath, document.querySelector(selector), null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue !== null, {},
    '#auditAccountEmail-helper-text', '//*[contains(text(), "Email must be unique and valid")]');
  })
  
  await synthetics.executeStep('Click_Audit_email', async function() {
    await page.waitForSelector('.MuiGrid-root #auditAccountEmail')
    await page.click('.MuiGrid-root #auditAccountEmail')
  })
  
  await synthetics.executeStep('Edit_Audit_email', async function() {
    const inputElement = await page.$('.MuiBox-root #auditAccountEmail')
    await inputElement.click({ clickCount: 3})
    await page.keyboard.press( 'Backspace' )
    await page.type('.MuiGrid-root #auditAccountEmail', "aws+auditEmailgmail.com")
    await page.keyboard.press('Enter')
  })

  await synthetics.executeStep('Check_invalidResponse_audit_emailInvalid', async function() {
    await page.waitForFunction((selector, xpath) => document.querySelector(selector) &&
    document.evaluate(xpath, document.querySelector(selector), null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue !== null, {},
    '#auditAccountEmail-helper-text', '//*[contains(text(), "Email must be unique and valid")]');
  })
  
  await synthetics.executeStep('Click_Audit_email', async function() {
    await page.waitForSelector('.MuiGrid-root #auditAccountEmail')
    await page.click('.MuiGrid-root #auditAccountEmail')
  })
  
  await synthetics.executeStep('Edit_Audit_email', async function() {
    const inputElement = await page.$('.MuiBox-root #auditAccountEmail')
    await inputElement.click({ clickCount: 3})
    await page.keyboard.press( 'Backspace' )
    await page.type('.MuiGrid-root #auditAccountEmail', "aws+auditEmail@gmail")
    await page.keyboard.press('Enter')
  })
  
  await synthetics.executeStep('Check_invalidResponse_audit_emailInvalid2', async function() {
    await page.waitForFunction((selector, xpath) => document.querySelector(selector) &&
    document.evaluate(xpath, document.querySelector(selector), null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue !== null, {},
    '#auditAccountEmail-helper-text', '//*[contains(text(), "Email must be unique and valid")]');
  })
  
  await synthetics.executeStep('Click_Audit', async function() {
    await page.type('.MuiPaper-root:nth-child(4) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(18) > .MuiButtonBase-root > .PrivateSwitchBase-input', "on")
    await page.waitForSelector('.MuiPaper-root:nth-child(4) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(18) > .MuiButtonBase-root > .PrivateSwitchBase-input')
    await page.click('.MuiPaper-root:nth-child(4) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(18) > .MuiButtonBase-root > .PrivateSwitchBase-input')
  })
  
  await synthetics.executeStep('Click_AuditID', async function() {
    await page.waitForSelector('.MuiGrid-root #importedAuditAccountId')
    await page.click('.MuiGrid-root #importedAuditAccountId')
  })
  
  await synthetics.executeStep('Edit_AuditID', async function() {
    await page.keyboard.press( 'Enter' )
  })
  
  await synthetics.executeStep('Check_invalidResponse_auditID_deleted', async function() {
    await page.waitForFunction((selector, xpath) => document.querySelector(selector) &&
    document.evaluate(xpath, document.querySelector(selector), null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue !== null, {},
    '#importedAuditAccountId-helper-text', '//*[contains(text(), "Must be 12 numbers")]');
  })
  
  await synthetics.executeStep('Click_AuditID', async function() {
    await page.waitForSelector('.MuiGrid-root #importedAuditAccountId')
    await page.click('.MuiGrid-root #importedAuditAccountId')
  })
  
  await synthetics.executeStep('Edit_AuditID', async function() {
    await page.type('.MuiGrid-root #importedAuditAccountId', "123456789")
    await page.keyboard.press('Enter')
  })
  
  await synthetics.executeStep('Check_invalidResponse_auditID_wrong', async function() {
    await page.waitForFunction((selector, xpath) => document.querySelector(selector) &&
    document.evaluate(xpath, document.querySelector(selector), null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue !== null, {},
    '#importedAuditAccountId-helper-text', '//*[contains(text(), "Must be 12 numbers")]');
  })
  
  await synthetics.executeStep('Click_Audit', async function() {
    await page.type('.MuiPaper-root:nth-child(4) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(18) > .MuiButtonBase-root > .PrivateSwitchBase-input', "on")
    await page.waitForSelector('.MuiPaper-root:nth-child(4) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(18) > .MuiButtonBase-root > .PrivateSwitchBase-input')
    await page.click('.MuiPaper-root:nth-child(4) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(18) > .MuiButtonBase-root > .PrivateSwitchBase-input')
  })
  ////////////////////////
  //Services
  await synthetics.executeStep('Click_deploy_AWS_config_on', async function() {
    await page.waitForSelector('.MuiPaper-root:nth-child(5) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(2) > .MuiButtonBase-root > .PrivateSwitchBase-input')
    await page.click('.MuiPaper-root:nth-child(5) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(2) > .MuiButtonBase-root > .PrivateSwitchBase-input')
     await page.type('.MuiPaper-root:nth-child(5) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(2) > .MuiButtonBase-root > .PrivateSwitchBase-input', "true")
  })
  
  await synthetics.executeStep('Click_deploy_AWS_config_off', async function() {
    await page.waitForSelector('.MuiPaper-root:nth-child(5) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(2) > .MuiButtonBase-root > .PrivateSwitchBase-input')
    await page.click('.MuiPaper-root:nth-child(5) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(2) > .MuiButtonBase-root > .PrivateSwitchBase-input')
    await page.type('.MuiPaper-root:nth-child(5) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(2) > .MuiButtonBase-root > .PrivateSwitchBase-input', "false")
  })
  
  await synthetics.executeStep('Click_deploy_AWS_cloud_trail_on', async function() {
    await page.waitForSelector('.MuiPaper-root:nth-child(5) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(6) > .MuiButtonBase-root > .PrivateSwitchBase-input')
    await page.click('.MuiPaper-root:nth-child(5) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(6) > .MuiButtonBase-root > .PrivateSwitchBase-input')
    await page.type('.MuiPaper-root:nth-child(5) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(6) > .MuiButtonBase-root > .PrivateSwitchBase-input', "true")
  })
  
  await synthetics.executeStep('Click_deploy_AWS_cloud_trail_off', async function() {
    await page.waitForSelector('.MuiPaper-root:nth-child(5) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(6) > .MuiButtonBase-root > .PrivateSwitchBase-input')
    await page.click('.MuiPaper-root:nth-child(5) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(6) > .MuiButtonBase-root > .PrivateSwitchBase-input')
    await page.type('.MuiPaper-root:nth-child(5) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(6) > .MuiButtonBase-root > .PrivateSwitchBase-input', "false")
  })
  
  await synthetics.executeStep('Click_deploy_region_deny_SCP_on', async function() {
    await page.waitForSelector('.MuiPaper-root:nth-child(5) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(10) > .MuiButtonBase-root > .PrivateSwitchBase-input')
    await page.click('.MuiPaper-root:nth-child(5) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(10) > .MuiButtonBase-root > .PrivateSwitchBase-input')
    await page.type('.MuiPaper-root:nth-child(5) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(10) > .MuiButtonBase-root > .PrivateSwitchBase-input', "true")
  })
  
  await synthetics.executeStep('Click_deploy_region_deny_SCP_off', async function() {
    await page.waitForSelector('.MuiPaper-root:nth-child(5) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(10) > .MuiButtonBase-root > .PrivateSwitchBase-input')
    await page.click('.MuiPaper-root:nth-child(5) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(10) > .MuiButtonBase-root > .PrivateSwitchBase-input')
    await page.type('.MuiPaper-root:nth-child(5) > .MuiBox-root > .MuiGrid-root > .MuiGrid-root:nth-child(10) > .MuiButtonBase-root > .PrivateSwitchBase-input', "false")
  })
  //Log Retention
  await synthetics.executeStep('Click_log_transition', async function() {
    await page.waitForSelector('.MuiGrid-root #logTransition')
    await page.click('.MuiGrid-root #logTransition')
  })
  
  await synthetics.executeStep('Edit_log_transitionDelete', async function() {
    const inputElement = await page.$('.MuiBox-root #logTransition')
    await inputElement.click({ clickCount: 3})
    await page.keyboard.press( 'Backspace' )
    await page.keyboard.press( 'Enter' )
  })
  
  await synthetics.executeStep('Check_invalidResponse_logTransition_deleted', async function() {
    await page.waitForFunction((selector, xpath) => document.querySelector(selector) &&
    document.evaluate(xpath, document.querySelector(selector), null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue !== null, {},
    '#logTransition-helper-text', '//*[contains(text(), "Invalid log transition")]');
  })
  
  await synthetics.executeStep('Click_log_transition', async function() {
    await page.waitForSelector('.MuiGrid-root #logTransition')
    await page.click('.MuiGrid-root #logTransition')
  })
  
  await synthetics.executeStep('Edit_log_transitionWrong', async function() {
    const inputElement = await page.$('.MuiBox-root #logTransition')
    await inputElement.click({ clickCount: 3})
    await page.keyboard.press( 'Backspace' )
    await page.type('.MuiGrid-root #logTransition', "58")
  })
  
  await synthetics.executeStep('Click_log_retention', async function() {
    await page.waitForSelector('.MuiGrid-root #logRetention')
    await page.click('.MuiGrid-root #logRetention')
  })
  
  await synthetics.executeStep('Edit_log_retentionDelete', async function() {
    const inputElement = await page.$('.MuiBox-root #logRetention')
    await inputElement.click({ clickCount: 3})
    await page.keyboard.press( 'Backspace' )
    await page.keyboard.press( 'Enter' )
  })
  
  await synthetics.executeStep('Check_invalidResponse_logRetention_deleted', async function() {
    await page.waitForFunction((selector, xpath) => document.querySelector(selector) &&
    document.evaluate(xpath, document.querySelector(selector), null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue !== null, {},
    '#logRetention-helper-text', '//*[contains(text(), "Invalid log retention")]');
  })
  
  await synthetics.executeStep('Click_log_retention', async function() {
    await page.waitForSelector('.MuiGrid-root #logRetention')
    await page.click('.MuiGrid-root #logRetention')
  })
  
  await synthetics.executeStep('Edit_log_retentionWrong', async function() {
    const inputElement = await page.$('.MuiBox-root #logRetention')
    await inputElement.click({ clickCount: 3})
    await page.keyboard.press( 'Backspace' )
    await page.type('.MuiGrid-root #logRetention', "562")
  })
  
  await synthetics.executeStep('Click_log_transition', async function() {
    await page.waitForSelector('.MuiGrid-root #logTransition')
    await page.click('.MuiGrid-root #logTransition')
  })
  
  await synthetics.executeStep('Edit_log_transitionLast', async function() {
    const inputElement = await page.$('.MuiBox-root #logTransition')
    await inputElement.click({ clickCount: 3})
    await page.keyboard.press( 'Backspace' )
    await page.type('.MuiGrid-root #logTransition', "20")
  })
  
  await synthetics.executeStep('Click_log_retention', async function() {
    await page.waitForSelector('.MuiGrid-root #logRetention')
    await page.click('.MuiGrid-root #logRetention')
  })
  
  await synthetics.executeStep('Edit_log_retentionLast', async function() {
    const inputElement = await page.$('.MuiBox-root #logRetention')
    await inputElement.click({ clickCount: 3})
    await page.keyboard.press( 'Backspace' )
    await page.type('.MuiGrid-root #logRetention', "365")
  })
  
  await synthetics.executeStep('Click_foundation_alert_email', async function() {
    await page.waitForSelector('.MuiGrid-root #foundationAlertsEmail')
    await page.click('.MuiGrid-root #foundationAlertsEmail')
  })
  
  await synthetics.executeStep('Click_foundation_alert_email', async function() {
    const inputElement = await page.$('.MuiBox-root #foundationAlertsEmail')
    await inputElement.click({ clickCount: 3})
    await page.keyboard.press( 'Backspace' )
    await page.type('.MuiGrid-root #foundationAlertsEmail', "natecodes365gmail.com")
    await page.keyboard.press('Enter')
    await inputElement.click({ clickCount: 3})
    await page.keyboard.press( 'Backspace' )
    await page.type('.MuiGrid-root #foundationAlertsEmail', "natecodes365@gmail")
    await page.keyboard.press('Enter')
    await inputElement.click({ clickCount: 3})
    await page.keyboard.press( 'Backspace' )
    await page.type('.MuiGrid-root #foundationAlertsEmail', "natecodes365@gmail.com")
  })
  
  await synthetics.executeStep('Click_ipRange', async function() {
    await page.waitForSelector('.MuiBox-root #ipRange')
    await page.click('.MuiBox-root #ipRange')
  })
  
  await synthetics.executeStep('Type_ipRange', async function() {
    const inputElement = await page.$('.MuiBox-root #ipRange')
    await inputElement.click({ clickCount: 3})
    await page.keyboard.press( 'Backspace' )
    await page.type('.MuiBox-root #ipRange', "02006")
    await page.keyboard.press('Enter')
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
  
  await synthetics.executeStep('Enter_save_from_email', async function() {
    await page.waitForSelector('.MuiGrid-root #foundationAlertsEmail')
    await page.click('.MuiGrid-root #foundationAlertsEmail')
    await page.type('.MuiGrid-root #foundationAlertsEmail', "\n")
  })
  
  await new Promise(resolve => setTimeout(resolve, 2000));
    
  await synthetics.executeStep('Click_deploy_home', async function() {
    await page.waitForSelector('.MuiTableBody-root > .MuiTableRow-root > .MuiTableCell-root > .MuiButtonGroup-root > .MuiButtonBase-root:nth-child(1)')
    await page.click('.MuiTableBody-root > .MuiTableRow-root > .MuiTableCell-root > .MuiButtonGroup-root > .MuiButtonBase-root:nth-child(1)')
  })
  
  await synthetics.executeStep('Click_credential_sso', async function() {
    await page.waitForSelector('.MuiBox-root #credentialBlockSSO')
    await page.click('.MuiBox-root #credentialBlockSSO')
  })
  
  await synthetics.executeStep('Enter_credential_sso', async function() {
    await page.type('.MuiBox-root #credentialBlockSSO', "Hello123")
  })
  
  await synthetics.executeStep('Click_region', async function() {
    await page.waitForSelector('.MuiBox-root #region')
    await page.click('.MuiBox-root #region')
  })
  
  await synthetics.executeStep('Click_enter_deploy', async function() {
    await page.keyboard.press('Enter')
  })
  
  await synthetics.executeStep('Leave_deploy_window', async function() {
    await page.keyboard.press('Escape')
  })
  
  await synthetics.executeStep('Click_view', async function() {
    await page.waitForSelector('.MuiTable-root > .MuiTableBody-root > .MuiTableRow-root > .MuiTableCell-root:nth-child(4) > .MuiButtonBase-root')
    await page.click('.MuiTable-root > .MuiTableBody-root > .MuiTableRow-root > .MuiTableCell-root:nth-child(4) > .MuiButtonBase-root')
  })
  
  await synthetics.executeStep('Click_home', async function() {
    await page.waitForSelector('.MuiBox-root > .MuiList-root > .MuiButtonBase-root:nth-child(2) > .MuiListItemText-root > .MuiTypography-root')
    await page.click('.MuiBox-root > .MuiList-root > .MuiButtonBase-root:nth-child(2) > .MuiListItemText-root > .MuiTypography-root')
  })
  
  await synthetics.executeStep('Click_drop_icon', async function() {
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
  
};
exports.handler = async () => {
    return await recordedScript();
};
 