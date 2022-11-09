export class Login4Page {

    fillUser(text) {
        cy.get("#username").clear("")
    } 

    fillPass(text) {
        cy.get("#password").clear("")
    }


    clickButtonLogin() {
        cy.get(".fa").click()
    }

}