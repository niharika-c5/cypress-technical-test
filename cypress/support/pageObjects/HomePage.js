class HomePage
{
    navigateToUrl()
    {
        cy.visit('/')
    }

    clickAbout()
    {
        cy.xpath('(//a[contains(text(),"About")])[3]').click();
    }
}

export default HomePage;