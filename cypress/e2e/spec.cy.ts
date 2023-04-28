/// <reference types="cypress" />
import 'cypress-file-upload';

describe('App test', () => {
  afterEach(() => {
    cy.window().trigger('unload');
  });

  it('Main Page', () => {
    cy.visit('/');

    cy.get('a[href="/"]').should('be.visible').contains('Main');
    cy.get('a[href="/about"]').should('be.visible').contains('About');
    cy.get('a[href="/form"]').should('be.visible').contains('Form');
    cy.get('input[type="text"]')
      .should('be.visible')
      .invoke('attr', 'placeholder')
      .should('contain', 'What are you looking for?');
  });

  it('Search Bar', () => {
    cy.visit('/');

    cy.get('input[type="text"]').type('river');
    cy.get('button[type="submit"]').click();

    cy.get('article').first().contains('Author');
  });

  it('Card Modal', () => {
    cy.visit('/');

    cy.get('article').first().click();

    cy.get('h3').contains('Main info');
    cy.get('div[class*=modalInfo]').within(() => {
      cy.get('p')
        .last()
        .contains(
          'You can click on the image to open it in full resolution in a new browser window'
        );
    });
  });

  it('About Page', () => {
    cy.visit('/');

    cy.get('a[href="/about"]').click();

    cy.url().should('include', '/about');

    cy.get('h2').contains('About Us');
  });

  it('Form Page', () => {
    cy.visit('/');

    cy.get('a[href="/form"]').click();

    cy.url().should('include', '/form');

    cy.get('input[name="name"]').type('Maksym');
    cy.get('input[name="surname"]').type('Kuzmych');
    cy.get('input[name="birthday"]').type('1997-01-01');
    cy.get('input[type="radio"][value="male"]').check();
    cy.get('select[name="country"]').select('Ukraine');
    cy.get('input[type="checkbox"][name="agreement"]').check();
    cy.get('input[type="checkbox"][value="English"]').check();
    cy.get('input[type="checkbox"][value="Ukrainian"]').check();
    cy.get('input[type="file"]').attachFile('avatar.png');

    cy.get('input[type="submit"]').click();

    cy.contains('User has been successfully added!');
  });
});
