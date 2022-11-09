/// <reference types="cypress" />

describe('TEST de LOGIN', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.get(':nth-child(21) > a').click()
  
  })

  //EJERCICIO1

  it('A valid user can login', () =>{  
    //cy.visit('https://the-internet.herokuapp.com/') -se hace de una vez arriba-
    //cy.get(':nth-child(21) > a').click() -lo mismo que la url-
      cy.get('#username').type("tomsmith")
      cy.get('#password').type("SuperSecretPassword!")
      cy.get('.fa').click()
      cy.get('#flash').contains("You logged into a secure area!")
    
  }) 

  //EJERCICIO2

    it('A invalid password', () =>{  
      //cy.visit('https://the-internet.herokuapp.com/')
      //cy.get(':nth-child(21) > a').click()
      cy.get('#username').type("tomsmith")
      cy.get('#password').type("error!")
      cy.get('.fa').click()
      cy.get('#flash').contains("Your password is invalid!")
    
    })

    //EJERCICIO3

      it('A invalid user', () =>{  
        //cy.visit('https://the-internet.herokuapp.com/')
        //cy.get(':nth-child(21) > a').click()
        cy.get('#username').type("Any")
        cy.get('#password').type("SuperSecretoPassword!")
        cy.get('.fa').click()
        cy.get('#flash').contains("Your user is invalid!")
    
  })
  
  //EJERCICIO4 (VARIAS FORMAS DE HACERSE)

    it('campos usuario y contraseña vacíos', () =>{  
      //cy.visit('https://the-internet.herokuapp.com/')
      //cy.get(':nth-child(21) > a').click()
      cy.get('#username').should('have.value', '')
      cy.get('#password').should('have.value', '')
      cy.get('.fa').click()
      cy.get('#flash').contains("Your username is invalid")

  })
  //Este es el más correcto porque debemos asegurarnos 100% que los campos estén vacíos.
    it('campos usuario y contraseña vacíos', () =>{  
      //cy.visit('https://the-internet.herokuapp.com/')
      //cy.get(':nth-child(21) > a').click()
      cy.get('#username').clear()
      cy.get('#password').clear()
      cy.get('.fa').click()
      cy.get('#flash').contains("Your username is invalid")
  })

  })
  
  