export class TablasPage {
    navigate() {
        cy.visit('https://the-internet.herokuapp.com/')
}

    openShiftContent() {
        cy.get(':nth-child(39) > a').click()
}

    selectMenu1() {
        cy.get('[href="/shifting_content/menu"]').click()
}

}

