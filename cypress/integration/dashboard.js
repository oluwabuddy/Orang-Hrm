/// <reference types="Cypress" />


describe("Test Dashboard page", () => {
    const username = "Admin";
    const password = "admin123"
    beforeEach(() => {
        cy.visit("http://opensource-demo.orangehrmlive.com/"); 
        cy.get('#txtUsername').type(username);
        cy.get('#txtPassword').type(password);
    }) 

    
    it("verify user can click on 'Assign Leave'", () => {
        cy.get('#btnLogin').click()
        cy.get(':nth-child(1) > .quickLaunge > a > .quickLinkText').click();
        cy.url().should("contain", "assignLeave");
     });
     it("verify user can click on 'Leave List'", () => {
        cy.get('#btnLogin').click();
        cy.get(':nth-child(2) > .quickLaunge > a > .quickLinkText').click();
        cy.url().should("contain", "LeaveList");
     });
     it("verify user can click on 'Timesheets'", () => {
        cy.get('#btnLogin').click();
        cy.get(':nth-child(3) > .quickLaunge > a > .quickLinkText').click();
     });
     it("verify user can click on 'Apply Leave'", () => {
        cy.get('#btnLogin').click();
        cy.get(':nth-child(4) > .quickLaunge > a > .quickLinkText').click();
        cy.url().should("contain", "applyLeave");
     });
     it("verify user can click on 'My Leave'", () => {
        cy.get('#btnLogin').click();
        cy.get(':nth-child(5) > .quickLaunge > a > .quickLinkText').click();
        cy.url().should("contain", "MyLeave");
     });
     it("verify user can click on 'My Timesheet'", () => {
        cy.get('#btnLogin').click();
        cy.get(':nth-child(6) > .quickLaunge > a > .quickLinkText').click();
        cy.url().should("contain", "MyTimesheet");
     });
   

})