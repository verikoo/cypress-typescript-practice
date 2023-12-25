Feature: Phone Finder

        Given I visit the page

    #***************************************************************************************
    #CP-10
    #veriko lomadze
    #***************************************************************************************

    Scenario: Check Phone Finder page , if its contains key specification
        When I redirected to the phone finder page
        Then I should be able to see General Section
        And Its contains Brand, Year, Availability, Price
        Then I should able to see  Platform Section
        And Its contains OS version, chipset, CPU cores