/// <reference types="Cypress" />


describe("Test Directory page", () => {
    const username = "Admin";
    const password = "admin123"
    beforeEach(() => {
        cy.visit("http://opensource-demo.orangehrmlive.com/"); 
        cy.get('#txtUsername').type(username);
        cy.get('#txtPassword').type(password);
    }) 

    
    it("verify user can click on 'Directory'", () => {
        cy.get('#btnLogin').click()
        cy.get('#menu_directory_viewDirectory > b').click();
     });
    it("verify user can enter name in the name field", () => {
        cy.get('#btnLogin').click()
        cy.get('#menu_directory_viewDirectory > b').click();
        cy.get('#searchDirectory_emp_name_empName').type("rain")
    });
    it("verify user can select a job title", () => {
        cy.get('#btnLogin').click()
        cy.get('#menu_directory_viewDirectory > b').click();
        cy.get('#searchDirectory_job_title').select("Automation Tester")
    });
    it("verify user can choose a location", () => {
        cy.get('#btnLogin').click()
        cy.get('#menu_directory_viewDirectory > b').click();
        cy.get('#searchDirectory_location').select("Canada")
    });
    it("verify user can click the Search button", () => {
        cy.get('#btnLogin').click()
        cy.get('#menu_directory_viewDirectory > b').click();
        cy.get('#searchBtn').click();
    });
    it("verify user can click the Reset Button", () => {
        cy.get('#btnLogin').click()
        cy.get('#menu_directory_viewDirectory > b').click();
        cy.get('#resetBtn').click();
    });
    it("verify search brings out approiprate response", () => {
        cy.get('#btnLogin').click()
        cy.get('#menu_directory_viewDirectory > b').click();
        cy.get('#searchDirectory_emp_name_empName').type("Lisa")
        cy.get('#searchDirectory_job_title').select("Software Engineer")
        cy.get('#searchDirectory_location').select("Canadian Regional HQ")
        cy.get('#searchBtn').click();
        
    });
    
    it("verify user can hide options", () => {
        cy.get('#btnLogin').click()
        cy.get('#menu_directory_viewDirectory > b').click();
        cy.get('.toggle').click();
    });
    
        

   

})