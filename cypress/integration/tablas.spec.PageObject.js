import { TablasPage } from "../page_objects/tablas";

describe('TEST de TABLAS' , () => {
    const tablasPage = new TablasPage()


beforeEach(() => {
    tablasPage.navigate()
    tablasPage.openShiftContent()
    tablasPage.selectMenu1()
})


it ('Shifting Content 5 elements', () =>{
    cy.get('li').children().should("have.length",5)

    })

})
  