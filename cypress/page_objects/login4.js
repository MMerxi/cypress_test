export class Login4Page {

    usernameIsClear() {
        cy.get("#username").clear()
    } 

    passwordIsClear() {
        cy.get("#password").clear()
    }


    clickButtonLogin() {
        cy.get(".fa").click()
    }

}