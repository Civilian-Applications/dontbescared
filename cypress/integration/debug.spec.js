//@flow
/// <reference types="cypress" />

// $FlowFixMe
context("Debug", () => {
    // $FlowFixMe
    beforeEach(() => {
        // $FlowFixMe
        cy.visit("http://localhost:4000/debug");
        const state = {
            fov: 76,
            lat: -33.521331,
            lng: 151.346974,
            elevation: 600,
            scale: 500,
        };

        sessionStorage.setItem("state", JSON.stringify(state));
        // localStorage.setItem("state", JSON.stringify(state));
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
        cy.get("input[data-cy=fov]").should("exist");
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
    // $FlowFixMe
    it("The input fields are populated with a click on the start button", () => {
        // NOTE: sessionStorage needs to be called in beforeEach()
        // or it doesn't stick

        // $FlowFixMe
        cy.get("input[data-cy=fov]").should("have.value", "76");
        cy.get("input[data-cy=lat]").should("have.value", "-33.521331");
        cy.get("input[data-cy=lng]").should("have.value", "151.346974");
        cy.get("input[data-cy=elevation]").should("have.value", "600");
        cy.get("input[data-cy=scale]").should("have.value", "500");
    });
});
