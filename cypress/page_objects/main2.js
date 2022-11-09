export class Main2Page {

    navigate() {
      cy.visit("https://the-internet.herokuapp.com")
  }
  
    clickLoginOption() {
          cy.get(':nth-child(21) > a').click()
      }
  
  }