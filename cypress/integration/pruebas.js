describe('Camara Page Test', () => {
    it('should display the correct title', () => {
        cy.visit('/'); // Usa el baseUrl configurado en cypress.config.ts
        cy.title().should('include', 'Camara'); // Cambia 'Camara' según el título esperado de tu aplicación
    });

    it('should have a capture button', () => {
        cy.visit('/camara'); // Navega a la página de la cámara
        cy.get('ion-button').contains('Capturar Imagen').should('be.visible'); // Verifica que el botón de captura esté visible
    });

    it('should display captured image', () => {
        cy.visit('/camara'); // Navega a la página de la cámara
        cy.get('ion-button').contains('Capturar Imagen').click(); // Simula el clic en el botón de captura
        cy.get('.image-container img').should('be.visible'); // Verifica que la imagen capturada se muestre
    });
});