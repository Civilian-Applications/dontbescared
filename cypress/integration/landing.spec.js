/// <reference types="cypress" />

context("Actions", () => {
  beforeEach(() => {
    cy.visit("http://localhost:4000");
  });
  afterEach(() => {
    sessionStorage.clear();
    localStorage.clear();
  });

  // https://on.cypress.io/interacting-with-elements

  it("The start page has settings", () => {
    cy.get("h1[data-cy=heading]").should("contain", "No build step");
    cy.get("h2[data-cy=subheading]").should("contain", "No script tags");
  });
});
