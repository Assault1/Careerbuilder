import { browser, by, element, ElementFinder, ExpectedConditions } from 'protractor';
const { Given, When, Then } = require("cucumber");
const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;

export class user_management {

  //****************** Select a Drop down *******************************************************/ 
  selectOption(selectElement: ElementFinder, optionValue: string, message?: string) {
    let options = selectElement.all(by.tagName('option'));
    options.each((element) => {
      element.getText().then((text) => {
        if (text == optionValue) {
          element.click();
        }
      });
    });
  }

  /****************** Select a radio button *******************************************************/
  selectRadio(selectElement: ElementFinder, inputValue: string, message?: string) {
    let options = selectElement.all(by.tagName('input'));
    options.each((element) => {
      element.getText().then((text) => {
        if (text == inputValue) {
          element.click();
        }
      });
    });
  }

  async login(email, password) {

    await this.emailid.sendKeys("Personified.Tester3@careerbuilder.com");
    await this.pass.sendKeys("c0lumbusrocks!");
    await this.submit.click();
    await browser.getTitle().then((title) => {
      expect(title).to.contain("Homepage");

  })

  }

  //***************** */ Page object of a webpage *******************************************************/ 

  emailid = element(by.id("cbsys_login_email"));
  pass = element(by.id("cbsys_login_password"));
  submit = element(by.id("btnsigninemp"));
  signin = element(by.id("signin-link"));
  activejobs = element(by.xpath("//cbd-active-jobs[@class='ng-star-inserted']//div[@class='cut-kpi-body']"));
  keepSignIn = element(by.id("checkbox1"));
  forgotPassword = element(by.id("employerForgotPasswordLink"));
  newAccount = element(by.id("registrationLink"));
  createNew = element(by.className("mat-fab mat-accent"));
  topMenu = element.all(by.className("drop-box-wrapper fixed-down-right open-on-hover"));
  postJob = element(by.partialLinkText("Post A Job"));
  home = element(by.xpath("//a[@class='ng-star-inserted cut-dropdown-active']"))


}



