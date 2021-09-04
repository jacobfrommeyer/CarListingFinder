//Asyncronis function to get the url of the search results
async function getURL() {
const webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

const driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

driver.get('http://www.google.com/ncr');

let input = driver.findElement(webdriver.By.name('q'));
input.sendKeys('dealerships near me', webdriver.Key.RETURN);

await driver.wait(until.titleIs('dealerships near me - Google Search'));
let url = driver.getCurrentUrl();
return url;
}


//Program starts here
getURL().then((url) => {
    console.log(url);
});