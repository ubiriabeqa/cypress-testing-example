///  <reference types="cypress" />
// Enter random string
function randomWithOffset() {
    let randomNumber = "";
    let possible = "0123456789";
    for (let i = 0; i < 9; i++) {
        randomNumber += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    let result = parseInt(randomNumber, 10) + 1000;

    // Log the generated number
    console.log("Generated number:", result);

    return result.toString();
}

// Call the function
const generatedNumber = randomWithOffset();


// Enter random string
function randomWord() {
    let word = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    for (let i = 0; i < 50; i++) {
        word += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return word;
}
Cypress.on('uncaught:exception',() => false);
it('should open web site',()=>{
    cy.visit('https://cypress.onbrane.com');
    cy.url().should('include','https://cypress.onbrane.com/auth');
    cy.get('.mat-mdc-form-field-infix').type('issuer1@gu5bp2ja.mailosaur.net');
    cy.get('[data-cy="CyEmail"]').should('have.value', 'issuer1@gu5bp2ja.mailosaur.net'); ///contain
    cy.get('[data-cy="CyNext"] > .mdc-button__label').click();
    cy.get('[data-cy="CyPassword"]').type('12321321312312');
    cy.get('[data-cy="CyPassword"]').should('have.value','12321321312312');
    cy.get('[data-cy="CyLogin"] > .mdc-button__label').click();
    cy.url().should('include','/home');
    cy.get('[routerlink="/programmes"]').click();
    cy.url().should('include','/programmes/short-term');
    cy.get('div.ng-tns-c305-14 > .mdc-button > .mdc-button__label > div').click();
    cy.get(':nth-child(1) > .step-content > .content-section > :nth-child(2)').click();
    cy.get('.ng-trigger > .step-content > .content-section > :nth-child(1)').click();
    cy.contains('SEK CP').click();
    cy.contains('Next').click();
    cy.get('#mat-input-2').type(generatedNumber);
    cy.get('#mat-input-3').type(generatedNumber);
    cy.get('#mat-select-value-1').click();
    cy.get('#mat-option-3').click();
    cy.get('.mat-mdc-select-placeholder').click();
    cy.get('#mat-option-8 > .mdc-list-item__primary-text').click();
    cy.get('.content-section > :nth-child(2) > .mat-mdc-form-field > .mat-mdc-text-field-wrapper > .mat-mdc-form-field-flex > .mat-mdc-form-field-infix').type(randomWord());
    cy.contains('Next').click();
    cy.get('#mat-input-13').type('avtandilgachechiladze@gmail.com');
    cy.get('#mat-input-13').type('{enter}');
    cy.get('#mat-input-14').type('avtandilgachechiladze@gmail.com');
    cy.get('#mat-input-14').type('{enter}');
    cy.contains('Submit').click();
    cy.get('.header-bottom > :nth-child(2) > :nth-child(1) > .ft-weight-semi-bold').should('have.text', generatedNumber);
});