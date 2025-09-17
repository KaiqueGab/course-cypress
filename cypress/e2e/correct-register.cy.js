describe('Register Page', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();
  });

  it('Should fill all fields to register a new user', () => {
    // Generate a random email with UUID
    const uuid = Number(Math.ceil(Math.random() * 100000)).toString(16);
    const randomEmail = `johnDoe${uuid}@email.com`;

    cy.get('[data-test="input-name"]').type('John Doe13');
    cy.get('[data-test="input-email"]').type(randomEmail);
    cy.get('[data-test="input-password"]').type('John123456');
    cy.get('[data-test="input-confirm-password"]').type('John123456');

    cy.get('[data-test="submit-button"]').click();

    cy.url().should('be.equal', 'https://adopet-frontend-cypress.vercel.app/login');
  });
});

