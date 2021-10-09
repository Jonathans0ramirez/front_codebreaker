describe('The Home page', () => {
    before(() => {
        cy.visit('/')
    })

    it('Gets, types, and asserts', () => {
        cy.get('#startButton').click()
        cy.get('#inputNumber').type('1234').should('have.value', '1234')
        cy.get('#guessNumberBtn').click()
        cy.get('#responseContainer').find('p').should('be.visible')
        cy.get('#responseContainer > p').should(($p) => {
            expect($p).to.have.length(2)
            expect($p.eq(1)).to.contain('1234')
          })
    })
})