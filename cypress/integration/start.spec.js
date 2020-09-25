//@flow
/// <reference types="cypress" />

// $FlowFixMe
context("Actions", () => {
    // $FlowFixMe
    beforeEach(() => {
        // $FlowFixMe
        cy.visit("http://localhost:4000");
    });
    // $FlowFixMe
    afterEach(() => {
        sessionStorage.clear();
        localStorage.clear();
    });

    // $FlowFixMe
    it("The start page has copy", () => {
        // $FlowFixMe
        cy.get("div[data-cy=copy]").should("exist");
        cy.get("div[data-cy=copy]").should("contain", "Don't be scared!");
    });
    // $FlowFixMe
    it("The start page has a Start", () => {
        // $FlowFixMe
        cy.get("a[data-cy=start]").should("exist");
    });

    // address link
    it("The start link works", () => {
        // $FlowFixMe
        cy.get("a[data-cy=start]").then(function ($a) {
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
