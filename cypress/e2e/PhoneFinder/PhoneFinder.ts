import { Given, When, Then,  After } from "@badeball/cypress-cucumber-preprocessor"

Given('I visit the page', ()=>{
    cy.visit('https://www.gsmarena.com/')
})

When('I redirected to the phone finder page',()=>{
    cy.contains('Phone finder').click()
        cy.wait(500)
})

Then('I should be able to see General Section',()=>{
    cy.get(".phonefinder-title").contains("General")
    cy.log("Phone description contains General Section")
})

Then('Its contains Brand, Year, Availability, Price',()=>{
    cy.contains("Brand:")
        cy.contains("Year:")
        cy.contains("Availability:")
        cy.contains("Price:")
        cy.log("General contains Brand, Year, Availability, Price")
})

Then('I should able to see  Platform Section',()=>{
    cy.get(".phonefinder-title").contains("Platform")
})

Then ('Its contains OS version, chipset, CPU cores',()=>{
    cy.contains("OS:")
        cy.contains("OS Version:")
        cy.contains("Chipset:")
        cy.contains("CPU Cores:")
        cy.log("platform contains OS, OS Version, Chipset, CPU core")
})
