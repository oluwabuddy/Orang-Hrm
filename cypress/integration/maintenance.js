/// <reference types="Cypress" />


describe("Test Maintenance page", () => {
    const username = "Admin";
    const password = "admin123"
    const invalidPassword = "admin 123"
    beforeEach(() => {
        cy.visit("http://opensource-demo.orangehrmlive.com/"); 
        cy.get('#txtUsername').type(username);
        cy.get('#txtPassword').type(password);
    }) 

    
    it("verify user can click on 'Maintenance'", () => {
        cy.get('#btnLogin').click()
        cy.get(':nth-child(10) > .firstLevelMenu').click();
       
     });
     it("verify user can click on 'Purge records'", () => {
        cy.get('#btnLogin').click();
        cy.get(':nth-child(10) > .firstLevelMenu').click();
        cy.get('#menu_maintenance_PurgeRecords').click({force:true});
       
     });
     it("verify user can select on 'Purge Employee records'", () => {
        cy.get('#btnLogin').click();
        cy.get(':nth-child(10) > .firstLevelMenu').click();
        cy.get('#menu_maintenance_PurgeRecords').click({force:true}) 
            cy.get('#menu_maintenance_purgeEmployee').each(($ele) => {
             if ($ele.text() == "Employee Records") {
                cy.wrap($ele).click({force: true})
    }  
        });
    })

     it("verify user can select on 'Purge Candidate Records'", () => {
        cy.get('#btnLogin').click();
        cy.get(':nth-child(10) > .firstLevelMenu').click();
        cy.get('#menu_maintenance_PurgeRecords').click({force:true}) 
            cy.get('#menu_maintenance_purgeCandidateData').each(($ele) => {
             if ($ele.text() == "Candidate Records") {
                cy.wrap($ele).click({force: true})
                }
            })
        });
    it("verify user can verify with valid password", () => {
        cy.get('#btnLogin').click();
        cy.get(':nth-child(10) > .firstLevelMenu').click();
        cy.get('#confirm_password').type(password);
        cy.get('.row > :nth-child(2) > input').click();
           
        });
    it("verify user can not verify with invalid password", () => {
        cy.get('#btnLogin').click();
        cy.get(':nth-child(10) > .firstLevelMenu').click();
        cy.get('#confirm_password').type(invalidPassword);
        cy.get('.row > :nth-child(2) > input').click();
        cy.get('.message').should("contain", 'Incorrect Password')
        
        });
    it.only("verify user cant verify password with blank password field", () => {
        cy.get('#btnLogin').click();
        cy.get(':nth-child(10) > .firstLevelMenu').click();
        cy.get('.row > :nth-child(2) > input').click();
        cy.get('span.validation-error').should("contain", 'Required')
                   
        });
    
    
   

})