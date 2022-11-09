export class PasswordError2Page {
    checkMessage (text) {
        cy.get("#flash").contains (text)
    }
} 