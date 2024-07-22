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
    await page.type('.MuiBox-root #email', "bill.stock+test9@platformr.cloud\n")
  })
  
  await synthetics.executeStep('Click_password', async function() {
    await page.waitForSelector('.MuiBox-root #password')
    await page.click('.MuiBox-root #password')
  })
  
  await synthetics.executeStep('Enter_password', async function() {
    await page.type('.MuiBox-root #password', "Test1234!@\n")
  })
  
  
  await synthetics.executeStep('Click_dropIcon', async function() {
    await page.waitForSelector('.MuiBox-root > .MuiBox-root > .css-1glod0d > .MuiBox-root > .MuiSvgIcon-root')
    await page.click('.MuiBox-root > .MuiBox-root > .css-1glod0d > .MuiBox-root > .MuiSvgIcon-root')
  })
  
  await synthetics.executeStep('Click_profile', async function() {
    await page.waitForSelector('body > #avatar-menu > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(1)')
    await page.click('body > #avatar-menu > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(1)')
  })
  
  await synthetics.executeStep('Click_firstName', async function() {
    await page.waitForSelector('.MuiBox-root #givenName')
    await page.click('.MuiBox-root #givenName')
  })
  
  await synthetics.executeStep('Delete_firstName', async function() {
    const inputElement = await page.$('.MuiBox-root #givenName')
    await inputElement.click({ clickCount: 3})
    await page.keyboard.press( 'Backspace' )
  })
  
  await synthetics.executeStep('Click_lastName', async function() {
    await page.waitForSelector('.MuiBox-root #familyName')
    await page.click('.MuiBox-root #familyName')
  })
  
  await synthetics.executeStep('Delete_lastName', async function() {
    const inputElement = await page.$('.MuiBox-root #familyName')
    await inputElement.click({ clickCount: 3})
    await page.keyboard.press( 'Backspace' )
  })
  
  await synthetics.executeStep('Click_email', async function() {
    await page.waitForSelector('.MuiBox-root #email')
    await page.click('.MuiBox-root #email')
  })
  
  await synthetics.executeStep('Delete_email+enter', async function() {
    const inputElement = await page.$('.MuiBox-root #email')
    await inputElement.click({ clickCount: 3})
    await page.keyboard.press( 'Backspace' )
    await page.type('.MuiBox-root #email', "\n")
  })
  
  await synthetics.executeStep('Check_invalidResponse_email', async function() {
    await page.waitForFunction((selector, xpath) => document.querySelector(selector) && 
    document.evaluate(xpath, document.querySelector(selector), null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue !== null, {}, 
    '#email-helper-text', '//*[contains(text(), "Must be valid email.")]');
  })
  
  await synthetics.executeStep('Check_invalidResponse_firstName', async function() {
    await page.waitForFunction((selector, xpath) => document.querySelector(selector) && 
    document.evaluate(xpath, document.querySelector(selector), null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue !== null, {}, 
    '#givenName-helper-text', '//*[contains(text(), "Invalid entry.")]');
  })
  
  await synthetics.executeStep('Check_invalidResponse_lastName', async function() {
    await page.waitForFunction((selector, xpath) => document.querySelector(selector) && 
    document.evaluate(xpath, document.querySelector(selector), null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue !== null, {}, 
    '#familyName-helper-text', '//*[contains(text(), "Invalid entry.")]');
  })
  
  
  await synthetics.executeStep('Click_firstName', async function() {
    await page.waitForSelector('.MuiBox-root #givenName')
    await page.click('.MuiBox-root #givenName')
  })
  
  await synthetics.executeStep('Enter_firstName', async function() {
    await page.type('.MuiBox-root #givenName', "Bill")
  })
  
  await synthetics.executeStep('Click_lastName', async function() {
    await page.waitForSelector('.MuiBox-root #familyName')
    await page.click('.MuiBox-root #familyName')
  })
  
  await synthetics.executeStep('Enter_lastName', async function() {
    await page.type('.MuiBox-root #familyName', "Stock")
  })
  
  await synthetics.executeStep('Click_email', async function() {
    await page.waitForSelector('.MuiBox-root #email')
    await page.click('.MuiBox-root #email')
  })
  
  await synthetics.executeStep('Enter_emailInvalid', async function() {
    await page.type('.MuiBox-root #email', "bill.stock+test9platformr.cloud\n")
  })
  
  await synthetics.executeStep('Check_invalidResponse_email', async function() {
    await page.waitForFunction((selector, xpath) => document.querySelector(selector) && 
    document.evaluate(xpath, document.querySelector(selector), null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue !== null, {}, 
    '#email-helper-text', '//*[contains(text(), "Must be valid email.")]');
  })
  
  await synthetics.executeStep('Click_email', async function() {
    await page.waitForSelector('.MuiBox-root #email')
    await page.click('.MuiBox-root #email')
  })
  
  await synthetics.executeStep('Enter_emailInvalid2', async function() {
    const inputElement = await page.$('.MuiBox-root #email')
    await inputElement.click({ clickCount: 3 })
    await page.keyboard.press('Backspace')
    await page.type('.MuiBox-root #email', "bill.stock+test9@platformr\n")
  })
  
  await synthetics.executeStep('Check_invalidResponse_email2', async function() {
    await page.waitForFunction((selector, xpath) => document.querySelector(selector) && 
    document.evaluate(xpath, document.querySelector(selector), null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue !== null, {}, 
    '#email-helper-text', '//*[contains(text(), "Must be valid email.")]');
  })
  
  await synthetics.executeStep('Click_email', async function() {
    await page.waitForSelector('.MuiBox-root #email')
    await page.click('.MuiBox-root #email')
  })
  
  await synthetics.executeStep('Enter_emailValid', async function() {
    const inputElement = await page.$('.MuiBox-root #email')
    await inputElement.click({ clickCount: 3 })
    await page.keyboard.press('Backspace')
    await page.type('.MuiBox-root #email', "bill.stock+test9@platformr.cloud")
  })
  
  await synthetics.executeStep('Click_changePassword', async function() {
    await page.waitForSelector('.MuiBox-root > .MuiBox-root > .MuiContainer-root > .MuiBox-root > .MuiButtonBase-root:nth-child(8)')
    await page.click('.MuiBox-root > .MuiBox-root > .MuiContainer-root > .MuiBox-root > .MuiButtonBase-root:nth-child(8)')
  })
  
  await synthetics.executeStep('Click_newPassword', async function() {
    await page.waitForSelector('.MuiModal-root #newPassword')
    await page.click('.MuiModal-root #newPassword')
  })
  
  await synthetics.executeStep('Enter_saveTest', async function() {
    await page.type('.MuiModal-root #newPassword', "\n")
  })
  
  await synthetics.executeStep('Check_invalidResponse_newPassword', async function() {
    await page.waitForFunction((selector, xpath) => document.querySelector(selector) && 
    document.evaluate(xpath, document.querySelector(selector), null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue !== null, {}, 
    '#root', '//*[contains(text(), "New password must be different from the old password and match confirm password.")]');
  })
  
  await synthetics.executeStep('Click_body+Exit', async function() {
    await page.waitForSelector('body > .MuiModal-root > .MuiBackdrop-root')
    await page.click('body > .MuiModal-root > .MuiBackdrop-root')
  })
  
  await synthetics.executeStep('Click_title', async function() {
    await page.waitForSelector('.MuiBox-root #title')
    await page.click('.MuiBox-root #title')
  })
  
  await synthetics.executeStep('Delete_title', async function() {
    const inputElement = await page.$('.MuiBox-root #title')
    await inputElement.click({ clickCount: 3})
    await page.keyboard.press( 'Backspace' )
    
    
  })
  
  await synthetics.executeStep('Click_YrsAWSExp_dropdown', async function() {
    await page.waitForSelector('.MuiBox-root #YrsAWSExp')
    await page.click('.MuiBox-root #YrsAWSExp')
  })
  
  await synthetics.executeStep('Select_YrsAWSExp', async function() {
    await page.waitForSelector('body > #menu-YrsAWSExp > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(11)')
    await page.click('body > #menu-YrsAWSExp > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(11)')
    await page.keyboard.press('Tab')
  })
  
  await synthetics.executeStep('Click_YrsAWSExp_dropdown', async function() {
    await page.waitForSelector('.MuiBox-root #YrsAWSExp')
    await page.click('.MuiBox-root #YrsAWSExp')
  })
  
  await synthetics.executeStep('Select_YrsAWSExp', async function() {
    await page.waitForSelector('body > #menu-YrsAWSExp > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(11)')
    await page.click('body > #menu-YrsAWSExp > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(11)')
    await page.waitForSelector('body > #menu-YrsAWSExp > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(1)')
    await page.click('body > #menu-YrsAWSExp > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(1)')
    await page.keyboard.press('Escape')
  })
  
  await synthetics.executeStep('Click_AWSCerts_dropdown', async function() {
    await page.waitForSelector('.MuiBox-root #awsCerts')
    await page.click('.MuiBox-root #awsCerts')
  })
  
  await synthetics.executeStep('Select_AWSCerts', async function() {
    await page.waitForSelector('body > #menu-awsCerts > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(1)')
    await page.click('body > #menu-awsCerts > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(1)')
    await page.waitForSelector('body > #menu-awsCerts > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(4)')
    await page.click('body > #menu-awsCerts > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(4)')
    await page.waitForSelector('body > #menu-awsCerts > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(5)')
    await page.click('body > #menu-awsCerts > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(5)')
    await page.keyboard.press('Escape')
  })

  await synthetics.executeStep('Click_delete_AWSCerts', async function() {
    await page.waitForSelector('.MuiBox-root > .MuiBox-root:nth-child(1) > .MuiBox-root > svg > path')
    await page.click('.MuiBox-root > .MuiBox-root:nth-child(1) > .MuiBox-root > svg > path')
    
  })
  
  await synthetics.executeStep('Click_delete_AWSCerts2', async function() {
    await page.waitForSelector('.css-13rcduy > .MuiBox-root > .MuiBox-root > svg > path')
    await page.click('.css-13rcduy > .MuiBox-root > .MuiBox-root > svg > path')
  })
  
  await synthetics.executeStep('Click_title', async function() {
    await page.waitForSelector('.MuiBox-root #title')
    await page.click('.MuiBox-root #title')
  })
  
  await synthetics.executeStep('Click_save_test', async function() {
    await page.type('.MuiBox-root #title', "\n")
  })
  
  await synthetics.executeStep('Check_invalidResponse_certs', async function() {
    await page.waitForFunction((selector, xpath) => document.querySelector(selector) && 
    document.evaluate(xpath, document.querySelector(selector), null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue !== null, {}, 
    '#root', '//*[contains(text(), "If no certificate, select none.")]');
  })

  await synthetics.executeStep('Click_AWSCerts_dropdown', async function() {
    await page.waitForSelector('.MuiBox-root #awsCerts')
    await page.click('.MuiBox-root #awsCerts')
  })
  
  await synthetics.executeStep('Select_AWSCerts', async function() {
    await page.waitForSelector('body > #menu-awsCerts > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(1)')
    await page.click('body > #menu-awsCerts > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(1)')
    await page.keyboard.press('Escape')
    
  })
  
  await synthetics.executeStep('Click_title', async function() {
    await page.waitForSelector('.MuiBox-root #title')
    await page.click('.MuiBox-root #title')
  })
  
  await synthetics.executeStep('Click_save_test', async function() {
    await page.type('.MuiBox-root #title', "\n")
  })
  
  await synthetics.executeStep('Check_invalidResponse_title', async function() {
    await page.waitForFunction((selector, xpath) => document.querySelector(selector) && 
    document.evaluate(xpath, document.querySelector(selector), null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue !== null, {}, 
    '#title-helper-text', '//*[contains(text(), "Invalid entry.")]');
  })
  
  await synthetics.executeStep('Click_title', async function() {
    await page.waitForSelector('.MuiBox-root #title')
    await page.click('.MuiBox-root #title')
  })
  
  await synthetics.executeStep('Click_save', async function() {
    await page.type('.MuiBox-root #title', "CTO\n")
  })
  
  await synthetics.executeStep('Click_dropIcon', async function() {
    await page.waitForSelector('.MuiBox-root > .MuiBox-root > .css-1glod0d > .MuiBox-root > .MuiSvgIcon-root')
    await page.click('.MuiBox-root > .MuiBox-root > .css-1glod0d > .MuiBox-root > .MuiSvgIcon-root')
  })
  
  await synthetics.executeStep('Click_profile', async function() {
    await page.waitForSelector('body > #avatar-menu > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(1)')
    await page.click('body > #avatar-menu > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(1)')
  })
  
  await synthetics.executeStep('Click_cancel', async function() {
    await page.waitForSelector('.MuiBox-root > .MuiBox-root > .MuiContainer-root > .MuiBox-root > .MuiButtonBase-root:nth-child(14)')
    await page.click('.MuiBox-root > .MuiBox-root > .MuiContainer-root > .MuiBox-root > .MuiButtonBase-root:nth-child(14)')
  })
  
  await synthetics.executeStep('Click_dropIcon', async function() {
    await page.waitForSelector('.MuiBox-root > .MuiBox-root > .css-1glod0d > .MuiBox-root > .MuiSvgIcon-root')
    await page.click('.MuiBox-root > .MuiBox-root > .css-1glod0d > .MuiBox-root > .MuiSvgIcon-root')
  })
  
  await synthetics.executeStep('Click_logout', async function() {
    await page.waitForSelector('body > #avatar-menu > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(2)')
    await page.click('body > #avatar-menu > .MuiPaper-root > .MuiList-root > .MuiButtonBase-root:nth-child(2)')
  })
  
  await navigationPromise
  
  await synthetics.executeStep('Click_email', async function() {
    await page.waitForSelector('.MuiBox-root #email')
    await page.click('.MuiBox-root #email')
  })
  
  


  
};
exports.handler = async () => {
    return await recordedScript();
};
