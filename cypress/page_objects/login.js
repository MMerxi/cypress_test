export class LoginPage {

    fillUser(text) {
        cy.get("#username").type(text)
    } 

    fillPass(text) {
        cy.get("#password").type(text)
    }

    usernameIsClear() {
        cy.get("#username").clear()
    } 

    passwordIsClear() {
        cy.get("#password").clear()
    }


    clickButtonLogin() {
        cy.get(".fa").click()
    }

    checkMessage (text) {
        cy.get("#flash").contains (text)
    }
} 