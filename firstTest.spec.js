describe('Name of the group', () => {
  before(() => {
    
  });

  it('', () => {
    cy.visit('https://react-redux.realworld.io/#/login?_k=ttudfq');
    cy.get('[placeholder="Email"]').type('test123@gmail.com');
    cy.get('[placeholder="Password"]').type('test123');
    cy.get('.btn').click();
    cy.get('.nav-link').should('contain', 'TestQA')
  });
});