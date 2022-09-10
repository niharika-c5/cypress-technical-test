class ContactUsPage 
{
    selectCareers()
    {
        cy.get("#Enquiry-2").select("Careers");
    }

    clickEmailOptInChkBox()
    {
        cy.get("#Subscribe-to-Email").check();
    }

    clickSubmitNowBtn()
    {
        cy.get(".i6-button").click();
    }

    verifyCompanyNameError(comNameErr)
    {
        cy.get("#Company-2")
        .invoke("prop", "validationMessage")
        .should("equal", comNameErr);
    }

    enterCompanyName(cn)
    {
        cy.get("#Company-2").type(cn);
    }


    verifyEmailError(emErr)
    {
        cy.get("#Email")
        .invoke("prop", "validationMessage")
        .should(
          "equal",
          emErr
        );
    }

    clearEmailField()
    {
        cy.get("#Email").clear();
    }

    enterValidEmail(validEm)
    {
        cy.get("#Email").type(validEm);
    }

    verifyMessageError(msgErr)
    {
        cy.get("#Message-2")
        .invoke("prop", "validationMessage")
        .should("equal", msgErr);
    }
}


export default ContactUsPage;