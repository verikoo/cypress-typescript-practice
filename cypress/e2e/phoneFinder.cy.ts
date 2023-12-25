describe("test if phone finder cotains key specification", ()=>{
  beforeEach(() => {
    cy.visit('https://www.gsmarena.com/')    
  })

    it('test if phone finder cotains key specification', () => {
        // cy.visit('https://www.gsmarena.com/')
        cy.contains('Phone finder').click()
        cy.wait(500)
        cy.get(".phonefinder-title").contains("General")
        cy.log("Phone description contains General Section")
        cy.contains("Brand:")
        cy.contains("Year:")
        cy.contains("Availability:")
        cy.contains("Price:")
        cy.log("General contains Brand, Year, Availability, Price")
        cy.get(".phonefinder-title").contains("Platform")
        cy.contains("OS:")
        cy.contains("OS Version:")
        cy.contains("Chipset:")
        cy.contains("CPU Cores:")
      })
})