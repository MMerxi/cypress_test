/// <reference types="cypress" />

import {MainPage} from '../page_objects/main'
import {LoginPage} from '../page_objects/login'
import {WelcomePage} from '../page_objects/welcome'


describe('TEST de LOGIN', () => {
  const loginPage = new LoginPage()
  const mainPage = new MainPage()
  const welcomePage = new WelcomePage()

  beforeEach(() => {
    mainPage.navigate()
    mainPage.clickLoginOption()
  
  })


    

    //cy.visit('https://the-internet.herokuapp.com/') ya no es necesario
    //cy.get(':nth-child(21) > a').click() igual ya no es necesario
  //})

  //EJERCICIO1

  it('A valid user can login', () =>{ 
    loginPage.fillUser("tomsmith")
    loginPage.fillPass("SuperSecretPassword!")
    loginPage.clickButtonLogin()
    welcomePage.checkMessage("You logged into a secure area!")

    //cy.visit('https://the-internet.herokuapp.com/') -se hace de una vez arriba-
    //cy.get(':nth-child(21) > a').click() -lo mismo que la url-
      //cy.get('#username').type("tomsmith") -ya no es necesario
      //cy.get('#password').type("SuperSecretPassword!") -ya no es necesario
      //cy.get('.fa').click() -ya no es necesario
      //cy.get('#flash').contains("You logged into a secure area!") -ya no es necesario-
    
  })

  //EJERCICIO2

    it('A invalid password', () =>{ 
      loginPage.fillUser("tomsmith")
      loginPage.fillPass("error!")
      loginPage.clickButtonLogin()
      loginPage.checkMessage("Your password is invalid!")
  
  })
  
  
  
  //it('A invalid password', () =>{  
      //cy.visit('https://the-internet.herokuapp.com/')
      //cy.get(':nth-child(21) > a').click()
      //cy.get('#username').type("tomsmith")
      //cy.get('#password').type("error!")
      //cy.get('.fa').click()
      //cy.get('#flash').contains("Your password is invalid!")
    
  

  //EJERCICIO3

  it('A invalid user', () =>{ 
    loginPage.fillUser("Any")
    loginPage.fillPass("SuperSecretPassword!")
    loginPage.clickButtonLogin()
    loginPage.checkMessage("Your username is invalid!")  
  
  //it('A invalid user', () =>{  
      //cy.visit('https://the-internet.herokuapp.com/')
      //cy.get(':nth-child(21) > a').click()
      //cy.get('#username').type("Any")
      //cy.get('#password').type("SuperSecretoPassword!")
      //cy.get('.fa').click()
      //cy.get('#flash').contains("Your user is invalid!")
  
  })
  
  //EJERCICIO4 (DISTINTAS FORMAS DE HACERSE)
  
    
    it('A invalid user', () =>{ 
      loginPage.usernameIsClear()
      loginPage.passwordIsClear()
      loginPage.clickButtonLogin()
      loginPage.checkMessage("Your username is invalid!")
  
  //it('campos usuario y contrase??a vac??os', () =>{  
      //cy.visit('https://the-internet.herokuapp.com/')
      //cy.get(':nth-child(21) > a').click()
      //cy.get('#username').should('have.value', '')
      //cy.get('#password').should('have.value', '')
      //cy.get('.fa').click()
      //cy.get('#flash').contains("Your username is invalid")

  })

    //it('usuario y contrase??a vac??os', () =>{  
      //cy.visit('https://the-internet.herokuapp.com/')
      //cy.get(':nth-child(21) > a').click()
      //cy.get('#username').clear()
      //cy.get('#password').clear()
      //cy.get('.fa').click()
      //cy.get('#flash').contains("Your username is invalid")

})