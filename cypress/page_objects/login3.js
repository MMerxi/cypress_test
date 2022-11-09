export class Login3Page {

    fillUser(text) {
        cy.get("#username").type("Any")
    } 

    fillPass(text) {
        cy.get("#password").type(text)
    }


    clickButtonLogin() {
        cy.get(".fa").click()
    }

}