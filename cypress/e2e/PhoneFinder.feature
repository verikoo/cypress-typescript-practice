Feature: Phone Finder

    Background:
        Given I visit the page

    #***************************************************************************************
    #CP-10
    #veriko lomadze
    #***************************************************************************************
    Scenario: Check Phone Finder page , if its contains key specification
        When I redirected to the phone finder page
        Then I should be able to see General Section
        Then Its contains Brand, Year, Availability, Price
        Then I should able to see  Platform Section
        Then Its contains OS version, chipset, CPU cores


    #***************************************************************************************
    #CP-11
    #veriko lomadze
    #***************************************************************************************
    Scenario: Verify PLP Display for Selected Brand in Phone Finder
        When I navigate to the Phone Finder page
        Then Choose 'Samsung' as the mobile brand
        Then I click on the 'Show Results' button
        Then Verify that a PLP is displayed
        Then Each item in the PLP contains the term 'Samsung'