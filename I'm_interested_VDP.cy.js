it("passes", () => {
    cy.visit(Cypress.env('yrc_base_url'))
    .wait(2500)
    //Accept cookies
    cy.get('#onetrust-accept-btn-handler').click()

    //select BMW as make
    .wait(2500)
    cy.get('.makes > .toggle').click()
    .wait(2500)
    //Select BWM
    cy.get('#mobile-makes-drawer > .options > :nth-child(3) > .no-style').click()

    //Select done
    cy.get('.filter-search-results-mobile-2 > header > .no-style').click()

   //Select All as Model
    cy.get('.models > .toggle').click()

    .wait(2500)
    //Select all as model option 
    cy.get('.scrollable > .options > :nth-child(1) > .no-style').click()
    .wait(2500)
    //Select Done
    cy.get('.filter-search-results-mobile-2 > header > .no-style').click()
    .wait(2500)
    //Selected Search 
    cy.get('.search-button button primary').click()

    .wait(2500)
    //Select first Vehicle card
    cy.get(':nth-child(1) > .card-link').click()

    .wait(4500)
//Select I'm interested button
    cy.get('.ctas > .primary').click()

    
    .wait(2500)
//Select First name field
cy.get('#first_name').type('Test')


   
//Select Second name field

//Select First name field

//Select First name field

//Select First name field
  });