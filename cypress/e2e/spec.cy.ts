describe('My First Test', () => {
  it('finds the content "type"', () => {
    cy.visit('/');

    cy.contains('About').click();
    cy.contains('Form').click();
  });
});
