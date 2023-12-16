it('my first test', () => { 
    cy.visit(Cypress.env('yrc_base_url'))
    
    .wait(2500)
    //Accept cookies

    cy.get('#onetrust-accept-btn-handler').click()

    //Select make
    .wait(2500)
    cy.get('.makes > .toggle').click()
    cy.get('#mobile-makes-drawer > .options > :nth-child(2) > .no-style').click()
    cy.get('.filter-search-results-mobile-2 > header > .no-style').click()
    
    //select model
    .wait(2500)
    cy.get('.models > .toggle').click()
    cy.get('.scrollable > .options > :nth-child(2) > .no-style').click()
    cy.get('.filter-search-results-mobile-2 > header > .no-style').click()

    //select search button
    .wait(2500)
    cy.get('.search-button').click()

    //select more details
    .wait(2500)
    cy.get(':nth-child(3) > .card-link > .card-footer > .color-1').click()

    //assertion 
    .wait(2500)
    cy.get('.vehicle-title-1').should('contain', "Audi A1")


})

//test script always end in assertions = expected outcome

//selecting filters

//submitting forms 