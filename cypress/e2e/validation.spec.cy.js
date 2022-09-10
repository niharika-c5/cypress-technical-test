import HomePage from "../support/pageObjects/HomePage";
import AboutPage from "../support/pageObjects/AboutPage";
import ContactUsPage from "../support/pageObjects/ContactUsPage";

describe("i6 contact us form validation", () => {
  const homePage = new HomePage();

  const aboutPage = new AboutPage();

  const contactUsPage = new ContactUsPage();

  before("Navigate to url", () => {
    homePage.navigateToUrl();
    cy.fixture("testData").as("data");
  });

  it("validate error messages with blank fields", () => {
    cy.get("@data").then((data) => {
      cy.getPageTitle(data.homePageTitle);
      
      homePage.clickAbout();
      cy.getPageTitle(data.aboutPageTitle);
      aboutPage.clickAcceptBtn();
      aboutPage.clickContactUsBtn();

      cy.getPageTitle(data.contactPagetitle);

      cy.enterContactDetails(data.firstName, data.lastName, data.invalidEmail);

      contactUsPage.selectCareers();
      contactUsPage.clickEmailOptInChkBox();

      contactUsPage.clickSubmitNowBtn();

      contactUsPage.verifyCompanyNameError(data.comNameAndMsgError);

      contactUsPage.enterCompanyName(data.company);

      contactUsPage.clickSubmitNowBtn();

      contactUsPage.verifyEmailError(data.emailError);

      contactUsPage.clearEmailField();

      contactUsPage.enterValidEmail(data.validEmail);

      contactUsPage.clickSubmitNowBtn();

      contactUsPage.verifyMessageError(data.comNameAndMsgError);
    });
  });
});
