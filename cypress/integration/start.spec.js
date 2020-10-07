//@flow
/// <reference types="cypress" />

// $FlowFixMe
context("Start", () => {
    // $FlowFixMe
    beforeEach(() => {
        // $FlowFixMe
        cy.visit("http://localhost:4000/start");
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
        cy.get("div[data-cy=copy]").should(
            "contain",
            "Please allow us to use your location",
        );
    });
    // $FlowFixMe
    it("The start page has a location button", () => {
        // $FlowFixMe
        cy.get("a[data-cy=location]").should("exist");
    });

    it("The location,  camera and start links work", () => {
        // $FlowFixMe
        cy.get("a[data-cy=location]").click();
        cy.get("div[data-cy=copy]").should("exist");
        cy.get("div[data-cy=copy]").should(
            "contain",
            "Please allow us to display your camera input",
        );
        cy.get("a[data-cy=camera]").click();
        cy.get("div[data-cy=copy]").should("exist");
        cy.get("div[data-cy=copy]").should(
            "contain",
            "Please point your phone towards",
        );
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
