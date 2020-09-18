//@flow
/// <reference types="cypress" />

// $FlowFixMe
context("Actions", () => {
    // $FlowFixMe
    beforeEach(() => {
        // $FlowFixMe
        cy.visit("http://localhost:3000");
    });
    // $FlowFixMe
    afterEach(() => {
        sessionStorage.clear();
        localStorage.clear();
    });

    // https://on.cypress.io/interacting-with-elements

    // $FlowFixMe
    it("The start page has a nav with links", () => {
        // $FlowFixMe
        cy.get("nav[data-cy=nav] ul").children().should("have.length", 3);
        cy.get("a[data-cy=parliament]").should("exist");
        cy.get("a[data-cy=bay]").should("exist");
    });
    it("The start page has custom input fields for lat, lng, elevation and scale", () => {
        // $FlowFixMe
        cy.get("input[data-cy=lat]").should("exist");
        cy.get("input[data-cy=lng]").should("exist");
        cy.get("input[data-cy=elevation]").should("exist");
        cy.get("input[data-cy=scale]").should("exist");
    });
});
