describe('Shopping Cart Test', () => {
  beforeEach(() => {
    // Visita la página principal de Demoblaze
    cy.visit('https://www.demoblaze.com/index.html');
  });

  it('should add products to the cart and verify they are in the cart', () => {
    // Agrega el primer producto al carrito
    cy.contains('Nokia lumia 1520').click(); // Cambia el nombre si es necesario
    cy.contains('Add to cart').click();
    cy.on('window:alert', (text) => {
      expect(text).to.contains('Product added');
    });

    // Regresa a la página principal
    cy.visit('https://www.demoblaze.com/index.html');

    // Agrega el segundo producto al carrito
    cy.contains('Samsung galaxy s6').click(); // Cambia el nombre si es necesario
    cy.contains('Add to cart').click();
    cy.on('window:alert', (text) => {
      expect(text).to.contains('Product added');
    });

    // Abre el carrito
    cy.contains('Cart').click();

    // Verifica que los productos estén en el carrito
    cy.contains('Nokia lumia 1520').should('be.visible');
    cy.contains('Samsung galaxy s6').should('be.visible');
  });
});
