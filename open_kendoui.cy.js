describe('template spec', () => {
    it('passes', () => {
      cy.visit('https://www.telerik.com/support/demos')
  
      // accepting cookies
      .wait(2500)
  
  cy.get('#onetrust-accept-btn-handler').click()
  
  //select dropdown
  .wait(2500)
  cy.get('.TK-Products-Menu-Item-Button').click()
  
  
  //select kendo ui
  .wait(2500)
  cy.get('.TK-col-18 > .TK-row > :nth-child(1) > :nth-child(2) > [href="/kendo-ui"]').click()


  .wait(2500)
  cy.get('#ContentPlaceholder1_C1089_Col00 > .HoverBox')
.click()  

})
  })