describe('Login Fail at Page', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();
    });

    it('Should be able to fill all fields incorrectly and display error mensages to the user on the page', () => {
        cy.get('[data-test="input-loginEmail"]').type('ana@com');
        cy.get('[data-test="input-loginPassword"]').type('senha');
        cy.get('[data-test="submit-button"]').click();

        cy.contains('Por favor, verifique o email digitado').should('be.visible');
        cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible');
    });
});