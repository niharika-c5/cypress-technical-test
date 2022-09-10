class AboutPage
{
    clickContactUsBtn()
    {
        cy.xpath('(//a[contains(text(),"Contact Us")])[1]').click();
    }

    clickAcceptBtn()
    {
        cy.get('.fs-cc-banner_button').click()
    }
}

export default AboutPage;