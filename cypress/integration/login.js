/// <reference types="Cypress" />


describe("Test Login page", () => {
    //let randomString = Math.random().toString(36).substring(2);
    const username = "Admin";
    const password = "admin123"
    const invalidPassword = "admin 123"
    const invalidUsername = "A dmin"
    beforeEach(() => {
        cy.visit("http://opensource-demo.orangehrmlive.com/"); 

    }) 

    
    it("verify login with valid username and valid password", () => {
        cy.get('#txtUsername').type(username);
        cy.get('#txtPassword').type(password);
        cy.get('#btnLogin').click()
     });
    it("verify user can not login with a valid username and an invalid password", () => {
        cy.get('#txtUsername').type(username);
        cy.get('#txtPassword').type("password");
        cy.get('#btnLogin').click()
        cy.get('#spanMessage').should("contain", "Invalid credentials")
    })
    it("verify user can not login with all fields blank", () => {
        cy.get('#btnLogin').click();
        cy.get('#spanMessage').should("contain", "Username cannot be empty");
    })
    it("verify user can not login with username field blank and an invalid password", () => {
        cy.get('#txtPassword').type("password");
        cy.get('#btnLogin').click();
        cy.get('#spanMessage').should("contain", "Username cannot be empty");
    })
    it("verify user can not login with username field blank and a valid password", () => {
        cy.get('#txtPassword').type(password);
        cy.get('#btnLogin').click();
        cy.get('#spanMessage').should("contain", "Username cannot be empty");
    })
    it("verify user can not login with invalid username and password field blank", () => {
        cy.get('#txtUsername').type(invalidUsername);
        cy.get('#btnLogin').click();
       cy.get('#spanMessage').should("contain", "Password cannot be empty");
    })
    it("verify user can not login with valid username and password field blank", () => {
        cy.get('#txtUsername').type(username);
        cy.get('#btnLogin').click();
       cy.get('#spanMessage').should("contain", "Password cannot be empty");
    })
    it("verify user can not login with valid username and an valid password with space inbetween", () => {
        cy.get('#txtUsername').type(username);
        cy.get('#txtPassword').type(invalidPassword);
        cy.get('#btnLogin').click();
        cy.get('#spanMessage').should("contain", "Invalid credentials")
    })
    it("verify user can not login with invalid username and valid password", () => {
        cy.get('#txtUsername').type(invalidUsername);
        cy.get('#txtPassword').type(password);
        cy.get('#btnLogin').click();
        cy.get('#spanMessage').should("contain", "Invalid credentials")
    })
    it("verify the 'forgot Password' works", () => {
        cy.get('#forgotPasswordLink > a').click();
        cy.url().should("contain", "requestPasswordResetCode");
    })
    it("Verify that the User can not Login with an invalid Username and invalid Password", () => {
        cy.get('#txtUsername').type(invalidUsername);
        cy.get('#txtPassword').type(invalidPassword);
        cy.get('#btnLogin').click();
        cy.get('#spanMessage').should("contain", "Invalid credentials")
    })
    it("Verify that the User can not Login with an invalid Username and valid Password", () => {
        cy.get('#txtUsername').type(invalidUsername);
        cy.get('#txtPassword').type(password);
        cy.get('#btnLogin').click();
        cy.get('#spanMessage').should("contain", "Invalid credentials")
    })
    it("Verify that clicking on the browser back button after successful login should not take the User to log out mode", () => {
        cy.get('#txtUsername').type(username);
        cy.get('#txtPassword').type(password);
        cy.get('#btnLogin').click();
        cy.go("back");
        cy.go("forward");
    })

})