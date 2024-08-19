describe('Automatización del Sign Up en Demoblaze', () => {
  it('passes', () => {
    cy.visit('https://www.demoblaze.com/')

    cy.get('#signin2').click();

    cy.get('#signInModal').should('be.visible');

    cy.get('#sign-username').type('ChiefNacho');

    cy.get('#sign-password').type('Mejia417');

    cy.get("button[onclick='register()']").click();

    cy.on('window:alert', (str) => {
      expect(str).to.equal('Sign up successful.');
  })
})
});