describe('Hello World Test', () => {
    it('should display the correct title', () => {
        cy.visit('http://localhost:3000');
        cy.title().should('include', 'Expected Title');
    });
    
    it('should have a working button', () => {
        cy.get('button#exampleButton').click();
        cy.get('div#result').should('contain', 'Button Clicked');
    });
});