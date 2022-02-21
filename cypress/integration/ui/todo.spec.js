import { TodoMethods } from './TodoMethods';

const delay = 500;

describe('to-do app', () => {
  const {
    getTodoAddField,
    getAddBtn,
    getTodoItem,
    getTitle,
    getSearchField,
    getDeleteBtn,
    getActiveBtn,
  } = new TodoMethods();

  beforeEach(() => {
    cy.visit('/');
  });

  after(() => {
    getDeleteBtn().first().should('be.visible').click();
  });

  it('Todo add filed', () => {
    getTodoAddField().type('Todo this');
    getAddBtn().click();
    cy.wait(delay);
    cy.get('div[data-testid="todoItemTitle"]')
      .first()
      .should('have.text', 'Todo this');
  });

  it('Search field', () => {
    getSearchField().type('Todo this').should('have.value', 'Todo this');

    cy.wait(delay);
    getTodoItem();

    getSearchField().type('{enter}');
    getTitle().first().should('have.text', 'Todo this');
    getTitle().last().should('have.text', 'Todo this');
  });

  it('Active button filter', () => {
    getActiveBtn().should('be.visible');

    cy.wait(delay);
    getTodoItem();

    getActiveBtn().click();
    getTodoItem().first().should('have.attr', 'data-status', 'false');
    getTodoItem().last().should('have.attr', 'data-status', 'false');
  });

  it('Test TodoItem change status', () => {
    getTodoAddField().type('Todo status').should('be.value', 'Todo status');
    getAddBtn().click();

    cy.wait(delay);

    getTodoItem().first().should('have.attr', 'data-status', 'false').click();
    getTodoItem().should('have.attr', 'data-status', 'true');
  });

  it('Done button filter', () => {
    cy.get('button[data-testid="doneBtn"]').should('be.visible');

    cy.wait(delay);
    getTodoItem();

    cy.get('button[data-testid="doneBtn"]').click();
    getTodoItem().first().should('have.attr', 'data-status', 'true');
    getTodoItem().last().should('have.attr', 'data-status', 'true');
    cy.get('button[data-testid="doneBtn"]').click();
  });

  it('Test TodoItem change mark', () => {
    cy.wait(delay);

    getTodoItem().first().should('have.attr', 'data-mark', 'false');

    cy.get('button[data-testid="markBtn"]').first().click();

    getTodoItem().first().should('have.attr', 'data-mark', 'true');

    cy.get('button[data-testid="markBtn"]').first().click();
  });

  it('Test TodoItem delete button', () => {
    cy.wait(delay);

    getDeleteBtn().first().should('be.visible').click();

    cy.contains('Todo status').should('not.exist');
  });
});
