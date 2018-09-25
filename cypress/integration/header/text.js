describe('header', function () {
  beforeEach(function () {
    cy.visit('/')
  })

  it('checks if the header exists', function () {
    cy.get('header')
  })

  it('checks if the footer exists', function () {
    cy.get('footer')
  })

  it('takes a screenshot', function () {
    cy.screenshot()
  })
})
