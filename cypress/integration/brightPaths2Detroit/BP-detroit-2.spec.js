/// <reference types="Cypress" />

describe('Update Bright Paths 2, Detroit base information', () => 
{
    it('When check the checkbox, we should see matches', () => 
    {
        cy.visit('/')
        cy.wait(2000)
        cy.get('.css-1fs766r').click({force: true})

    })
})