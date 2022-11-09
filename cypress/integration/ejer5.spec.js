/// <reference types="cypress" />

Describe('TEST de Tablas' , () => {
beforeEach(() => {
    cy.visit("https://the-internet.herokuapp.com/")
    cy.get(':nth-child(39) > a').click()
    cy.get('[href="/shifting_content/menu"]').click()
})  

//Damian
    it.only('Shifting Content 5 elements', () =>{
    //cy.visit("https://the-internet.herokuapp.com/")
    //cy.get(':nth-child(39) > a').click()
    //cy.get('[href="/shifting_content/menu"]').click()
    cy.get('li').children().should("have.length",5)

    })

    
//Miguel Millan
    it ('Test Shifting Content',() =>{
        //cy.visit('https://the-internet.herokuapp.com/')
        //cy.get(':nth-child(39) > a').click()
        //cy.get('[href="/shifting_content/menu"]').click()
        cy.get(':nth-child(1) > a') 
        cy.get('li').eq(0).should('contain','Home')
        cy.get('li').eq(1).should('contain','About')
        cy.get('li').eq(2).should('contain','Contact Us')
        cy.get('li').eq(3).should('contain','Portfolio')
        cy.get('li').eq(4).should('contain','Gallery')
    })



    it("Shifting content", () =>{ 
        //cy.visit("https://the-internet.herokuapp.com") 
        //cy.get(':nth-child(39) > a').click() 
        //cy.get('[href="/shifting_content/menu"]').click() 
    cy.get('ul').find('li').its('length').should('eq', 5) 
    })



    //Salvador Almonte de Vega
        it ('Shifting Content 5 elements', () =>{
            //cy.visit("https://the-internet.herokuapp.com/")
            //cy.get(':nth-child(39) > a').click()
            //cy.get('[href="/shifting_content/menu"]').click()
        cy.get('li').should("have.length",5)
        })
})