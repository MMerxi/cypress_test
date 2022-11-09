export class Login2Page {

    fillUser(text) {
        cy.get("#username").type(text)
    } 

    fillPass(text) {
        cy.get("#password").type("error!")
    }


    clickButtonLogin() {
        cy.get(".fa").click()
    }

}