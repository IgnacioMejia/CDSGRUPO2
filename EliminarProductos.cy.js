describe('Agregar y eliminar producto del carrito en Demoblaze', () => {
  it('Agregar un producto al carrito y eliminarlo', () => {
      // Visita la página principal
      cy.visit('https://www.demoblaze.com/')

      // Selecciona un producto, por ejemplo "Samsung galaxy s6"
      cy.contains('Samsung galaxy s6').click()

      // Espera a que se cargue la página del producto y agrega al carrito
      cy.get('.btn-success').click()

      // Acepta la alerta de confirmación
      cy.on('window:alert', (alertText) => {
          expect(alertText).to.equal('Product added')
      })
      cy.on('window:confirm', () => true)

      // Ir al carrito
      cy.get('#cartur').click()

      // Espera a que se cargue la página del carrito
      cy.wait(1000) // Se puede ajustar este valor según sea necesario

      // Elimina el producto del carrito
      cy.contains('Delete').click()

      // Verificar que el carrito está vacío
      cy.get('#tbodyid').should('not.contain', 'Samsung galaxy s6')
  })
})