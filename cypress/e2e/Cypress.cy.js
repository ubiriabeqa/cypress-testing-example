///  <reference types="cypress" />
// Enter random string
Cypress.on('uncaught:exception',() => false);
it('should open web site',()=>{
    cy.visit('https://docs.cypress.io/guides/overview/why-cypress');
    cy.url().should('include','https://docs.cypress.io/guides/overview/why-cypress');
});


it('search',()=>{
    cy.visit('https://docs.cypress.io/guides/overview/why-cypress');
    cy.wait(3000);
    cy.get('.DocSearch').type('{ctrl}')
    cy.get('#docsearch-input').type('anry')
    cy.get('#docsearch-input').should('have.value','anry')
});


it('darck and light mode',()=>{
    cy.visit('https://docs.cypress.io/guides/overview/why-cypress');
    cy.get('.toggleButton_gllP').should('exist'); 
    cy.get('.toggleButton_gllP').should('have.attr', 'title', 'Switch between dark and light mode (currently light mode)');
    cy.get('.toggleButton_gllP').should('have.attr', 'aria-label', 'Switch between dark and light mode (currently light mode)');
    cy.get('.toggleButton_gllP').should('have.attr', 'aria-live', 'polite');
    cy.get('.lightToggleIcon_pyhR').should('exist');
    cy.get('.darkToggleIcon_wfgR').should('exist');
    cy.get('.toggleButton_gllP').click();
    cy.wait(2000);
    cy.get('.toggleButton_gllP').should('have.attr', 'title', 'Switch between dark and light mode (currently dark mode)');
    cy.get('.toggleButton_gllP').should('have.attr', 'aria-label', 'Switch between dark and light mode (currently dark mode)');
    cy.get('.toggleButton_gllP').should('have.attr', 'aria-live', 'polite');
    cy.get('.darkToggleIcon_wfgR').should('exist');
});


it('v13.0.0  info close',()=>{
    cy.visit('https://docs.cypress.io/guides/overview/why-cypress');
    cy.wait(2000);
    cy.get('.announcementBar_mb4j > .clean-btn').click();
    cy.get('.content_knG7 > strong').should('not.exist');
});

it('Error Messanges',()=>{
    cy.visit('https://docs.cypress.io/guides/overview/why-cypress');
    cy.get(':nth-child(10) > .menu__list-item-collapsible > .menu__link').click();
    cy.get(':nth-child(10) > .menu__list-item-collapsible > .menu__link').should('be.visible');
    ///cy.get('.osano-cm-dialog__close').click();
    cy.get('.menu__list-item > .menu__link[href="/guides/references/advanced-installation"]')
        .should('be.visible')
        .and('have.text', 'Advanced Installation');
    cy.get('.menu__list-item > .menu__link[href="/guides/references/assertions"]')    
        .should('be.visible')
        .and('have.text', 'Assertions');
    cy.scrollTo(0, 1000)
    cy.get('.menu__list-item > .menu__link[href="/guides/references/best-practices"]')
        .should('be.visible')
        .and('have.text', 'Best Practices');
    cy.get('.menu__list-item > .menu__link[href="/guides/references/bundled-libraries"]')
        .should('be.visible')
        .and('have.text', 'Bundled Libraries');

    cy.get('.menu__list-item > .menu__link[href="/guides/references/changelog"]').scrollIntoView()
        .should('be.visible')
        .and('have.text', 'Changelog');    
    cy.get('.menu__list-item > .menu__link[href="/guides/references/client-certificates"]').scrollIntoView()
        .should('be.visible')
        .and('have.text', 'Client Certificates');    
    cy.get('.menu__list-item > .menu__link[href="/guides/references/configuration"]').scrollIntoView()
        .should('be.visible')
        .and('have.text', 'Configuration');
    cy.get('.menu__list-item > .menu__link[href="/guides/references/legacy-configuration"]').scrollIntoView()
        .should('be.visible')
        .and('have.text', 'Configuration (Legacy)');
    cy.get('.menu__list-item > .menu__link[href="/guides/references/cypress-studio"]').scrollIntoView()
        .should('be.visible')
        .and('have.text', 'Cypress Studio');
    cy.get('.menu__list-item > .menu__link[href="/guides/references/error-messages"]').scrollIntoView()
        .should('be.visible')
        .and('have.text', 'Error Messages');
    cy.get('.menu__list-item > .menu__link[href="/guides/references/experiments"]').scrollIntoView()
        .should('be.visible')
        .and('have.text', 'Experiments');
    cy.get(':nth-child(10) > .menu__link').click();
    cy.url().should('eq', 'https://docs.cypress.io/guides/references/error-messages');
});

