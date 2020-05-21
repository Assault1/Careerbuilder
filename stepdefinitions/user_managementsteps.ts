import { browser, element, by, protractor } from "protractor";
import { user_management } from '../pages/user_management.po';
import { getMaxListeners } from "cluster";
const { Given, When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
let rnum = Math.floor(Math.random() * 1000);
let email = "email" + rnum + "@abc.com";
let name = "user" + rnum;

const page: user_management = new user_management();

Given("I am on the default landing page and select login link", { timeout: 3 * 5000 }, async () => {
    await page.signin.click();


})

When('I navigate to login page', { timeout: 4 * 5000 }, async () => {

    await page.emailid.sendKeys("Personified.Tester3@careerbuilder.com");
    await page.pass.sendKeys("c0lumbusrocks!");
    await page.submit.click();
    expect(page.keepSignIn).to.exist;
    expect(page.newAccount).to.exist;
    expect(page.forgotPassword).to.exist;

})


Then('I navigate to homepage', { timeout: 3 * 5000 }, async () => {

    await browser.getTitle().then((title) => {
        expect(title).to.contain("Homepage");

    })

});

Given("I am on the homepage", { timeout: 4 * 5000 }, async () => {

    await browser.sleep(3000)
    await page.home.getText().then(async (text) => {
        expect(text).to.contains("Home");


    })


    When("I navigate to Post a job page", { timeout: 4 * 5000 }, async () => {

        await browser.actions().mouseMove(page.topMenu.get(3)).perform();
        await page.postJob.click();
        await browser.getTitle().then((title) => {
            expect(title).to.contains("Sourcing Platform");

        })

    })
    
})








