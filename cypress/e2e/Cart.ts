import { Given, When, Then,  After } from "@badeball/cypress-cucumber-preprocessor"

Given('I visit the page', ()=>{
    cy.visit('https://demo.nopcommerce.com/')
})

When('Redirect to the Notebooks PLP',()=>{
    cy.get('li').contains('Notebooks ').click({ force: true })
    cy.get('.page-title').should('have.text', 'Notebooks')
    
})

Then('Redirect to the Notebooks PDP',()=>{
    cy.get('.product-item').first().click()
})

Then('Click the add to cart button', ()=>{
    cy.get('#add-to-cart-button-4').click()
    cy.wait(4000)
    
})

Then('The Message the product has been added to your Shopping card is shown',()=>{
    cy.get('.bar-notification').should('have.text', 'The product has been added to your shopping cart')
})

Then('Click on the cart URL within the message',()=>{
    cy.get('.bar-notification').find('a').click()
})

Then('Check if the product has been added',()=>{
    cy.get('#shopping-cart-form').then(($form)=>{
        Cypress.dom.isVisible($form)
        cy.log("Cart form is shown")
    })

    cy.get('qty-input').should('not.be.empty')
})


