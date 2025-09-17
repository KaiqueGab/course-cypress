describe('Pagina de Login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();
    });
    
    it('Deve ser capaz de preencher todos os campos corretamente para logar um novo usuario', () => {
        cy.get('[data-test="input-loginEmail"]').type('ana@email.com');
        cy.get('[data-test="input-loginPassword"]').type('Senha123');
        cy.get('[data-test="submit-button"]').click();
    });

    afterEach(() => {
        cy.url().should('eq', 'https://adopet-frontend-cypress.vercel.app/home');
    });

});