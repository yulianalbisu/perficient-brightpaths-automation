/// <reference types="Cypress" />

describe('Update Bright Paths 2, Detroit base information', () => 
{
    it('When check the checkbox, we should see matches', () => 
    {
        cy.visit('http://10.128.193.165:3000/')
        cy.contains('BrightPaths Program Cohort Directory')
        cy.wait(2000)

    })
})