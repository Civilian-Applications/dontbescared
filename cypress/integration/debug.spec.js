//@flow
/// <reference types="cypress" />

// $FlowFixMe
context("Actions", () => {
    // $FlowFixMe
    beforeEach(() => {
        // $FlowFixMe
        cy.visit("http://localhost:4000/debug");
    });
    // $FlowFixMe
    afterEach(() => {
        sessionStorage.clear();
        localStorage.clear();
    });

    // $FlowFixMe
    it("The debug page has a nav with links", () => {
        // $FlowFixMe
        cy.get("nav[data-cy=nav] ul").children().should("have.length", 3);
        cy.get("a[data-cy=parliament]").should("exist");
        cy.get("a[data-cy=bay]").should("exist");
    });

    it("The debug page has custom input fields for lat, lng, elevation and scale", () => {
        // $FlowFixMe
        cy.get("input[data-cy=lat]").should("exist");
        cy.get("input[data-cy=lng]").should("exist");
        cy.get("input[data-cy=elevation]").should("exist");
        cy.get("input[data-cy=scale]").should("exist");
    });
    // address link
    it("The nav links work", () => {
        // $FlowFixMe
        cy.get("a[data-cy=parliament]").then(function ($a) {
            const href = $a.prop("href");
            cy.request(href)
                .its("body")
                .should(
                    "include",
                    '<div id="goodthing" data-goodthing><!-- GOODTHING --></div data-goodthing>',
                );
        });
        cy.get("a[data-cy=bay]").then(function ($a) {
            const href = $a.prop("href");
            cy.request(href)
                .its("body")
                .should(
                    "include",
                    '<div id="goodthing" data-goodthing><!-- GOODTHING --></div data-goodthing>',
                );
        });
    });
});
