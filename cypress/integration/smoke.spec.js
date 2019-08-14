/// <reference types="Cypress" />

describe('Smoke test site', () => {
    it('Should load the TODO app', () => {
        cy.visit('/');

        // Ensure we have an input to add a new todo
      cy.get('[data-cy="new-todo-input"]').should('be.visible');

        // Ensure Add TODO button is present
        cy.get('[data-cy="todo-submit"]').should('be.visible');

      cy.get('[data-cy="todo-list"]').then(([todoList]) => {
          // No TODOs when the app initializes.
          expect(todoList.children.length).to.equal(0);
        })
    });
});
