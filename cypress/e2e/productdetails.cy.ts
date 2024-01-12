describe('template spec', () => {
  const id = '#3e7f36a6-8c58-4fbb-83a8-f930bba362e9'
    it('adds product according to quantity selected by clicking on symbols', () => {
      cy.visit('localhost:5173')
      cy.contains('Acceder au catalogue').click()
      cy.url().should('include', '/products')
      cy.get(id).within(() => cy.get('.svg-plus').click().click().click())
      cy.contains('Ajouter au panier').click()
      cy.contains('Panier').click()
      cy.contains('Quantite : 4')
    })
    it('adds product according to typed quantity', () => {
      const quantity = 7;
      cy.visit('localhost:5173')
      cy.contains('Acceder au catalogue').click()
      cy.url().should('include', '/products')
      cy.get(id).within(() => cy.get('input').click().type('{selectall}7'))
      cy.contains('Ajouter au panier').click()
      cy.contains('Panier').click()
      cy.contains(`Quantite : ${quantity}`)
    })
  })