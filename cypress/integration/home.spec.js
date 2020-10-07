//@flow
/// <reference types="cypress" />

// $FlowFixMe
context("Home", () => {
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
    it("The Home page has a heading", () => {
        // $FlowFixMe
        cy.get("h1[data-cy=heading]").should("exist");
        cy.get("h1[data-cy=heading]").should("contain", "Don’t Be Scared");
    });
    // $FlowFixMe
    it("The Home page has a video button", () => {
        // $FlowFixMe
        cy.get("a[data-cy=video]").should("exist");
        cy.get("a[data-cy=video]").should("contain", "Watch a video");
    });

    it("The video button that links to YouTube", () => {
        // $FlowFixMe
        cy.get("a[data-cy=video]")
            .should("have.attr", "href")
            .and("include", "https://www.instagram.com/p/CF86rNoA7Fp");
    });

    // $FlowFixMe
    it("The Home page has a book button", () => {
        // $FlowFixMe
        cy.get("a[data-cy=book]").should("exist");
        cy.get("a[data-cy=book]").should("contain", "Book a viewing");
    });

    it("The book link goes to /book", () => {
        // $FlowFixMe
        cy.get("a[data-cy=book]").click();
        cy.get("div[data-cy=copy]").should(
            "contain",
            "We would love to meet you",
        );
    });

    // $FlowFixMe
    it("The Home page has a start button", () => {
        // $FlowFixMe
        cy.get("a[data-cy=start]").should("exist");
        cy.get("a[data-cy=start]").should("contain", "See the artwork now");
    });

    it("The start link goes to /start#location", () => {
        // $FlowFixMe
        cy.get("a[data-cy=start]").click();
        cy.get("div[data-cy=copy]").should(
            "contain",
            "Please allow us to use your location",
        );
    });
});
