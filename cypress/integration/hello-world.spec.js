describe('Hello World Test', () => {
    it('should display the correct title', () => {
        cy.visit('http://localhost:3000'); // Cambia la URL según tu aplicación
        cy.title().should('include', 'Título Esperado'); // Cambia 'Título Esperado' según tu aplicación
    });
});