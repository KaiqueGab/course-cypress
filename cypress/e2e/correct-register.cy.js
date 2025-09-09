describe('Register on Adopet website', () => {
  it('Should fill all fields to register a new user', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();

    cy.get('[data-test="input-name"]').type('John Doe13');
    cy.get('[data-test="input-email"]') .type('johnDoe13@gmail.com');
    cy.get('[data-test="input-password"]').type('John123456');
    cy.get('[data-test="input-confirm-password"]').type('John123456');

    cy.get('[data-test="submit-button"]').click();
  })
})
