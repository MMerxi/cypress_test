export class UserpassVacios4Page {
    checkMessage (text) {
        cy.get("#flash").contains (text)
    }
} 