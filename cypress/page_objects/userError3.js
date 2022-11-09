export class UserError3Page {
    checkMessage (text) {
        cy.get("#flash").contains (text)
    }
} 