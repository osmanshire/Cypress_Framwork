describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.telerik.com/support/demos')


    // accepting cookies
    .wait(2500)

cy.get('#onetrust-accept-btn-handler').click

//select dropdown
.wait(2500)

cy.get('.TK-Products-Menu-Item-Button').click
.wait(2500)

//select kendo ui


cy.get('.TK-col-18 > .TK-row > :nth-child(1) > :nth-child(2) > [href="/kendo-ui"]').click

  })
})