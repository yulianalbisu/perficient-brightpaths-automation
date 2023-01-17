describe('Suite 1', () => {

  it('When check the checkbox, we should see matches', () => {

    cy.visit('/')

    cy.contains('BrightPaths Program Cohort Directory')

    cy.get('#radio-14').click({ force: true })

    cy.get('button').contains('Apply').click()



  })

})