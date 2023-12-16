it("passes", () => {
    cy.visit(Cypress.env('yrc_base_url'))
   
    .wait(2500)
    //Accept cookies

    cy.get('#onetrust-accept-btn-handler').click()

    //select contact us form
    .wait(2500)
    cy.get('.mobile-toggle').click




  });
  