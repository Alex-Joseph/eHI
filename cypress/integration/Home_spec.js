describe("Home Page", function() {
  it('.should() - assert that <title> is correct', function () {
    cy.visit('http://localhost:3000/')

    cy.title().should('include', 'eHI | Practitioner')
  })
})

describe("Card and icon are visible", function() {
  it('cy.get() - query DOM elements', function () {
    cy.visit('http://localhost:3000/')

    cy.get('.main-card').should('be.visible')

    cy.get('.fas').should('be.visible')
  })
})

describe("Checking for correct names", function() {
  it("Checking practitioner name and org name", function() {
    cy.visit("http://localhost:3000/")

    cy.contains("Dr. John Watson")
    cy.contains("University Health Network")

  })
})
