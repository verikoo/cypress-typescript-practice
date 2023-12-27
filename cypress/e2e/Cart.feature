Feature: Cart

    Background:
        Given I visit the page

    #***************************************************************************************
    #CP-10
    #veriko lomadze
    #***************************************************************************************
    Scenario: Check Phone Finder page , if its contains key specification
        When Redirect to the Notebooks PLP
        Then Redirect to the Notebooks PDP
        Then Click the add to cart button
        Then The Message the product has been added to your Shopping card is shown
        Then Click on the cart URL within the message
        Then Check if the product has been added