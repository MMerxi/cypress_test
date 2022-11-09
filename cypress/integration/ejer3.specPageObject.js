/// <reference types="cypress" />

import {Main3Page} from '../page_objects/main3'
import {Login3Page} from '../page_objects/login3'
import {PasswordError3Page} from '../page_objects/passwordError3'


describe('TEST de LOGIN3', () => {
  const login3Page = new Login3Page()
  const main3Page = new Main3Page()
  const passwordError3Page = new PasswordError3Page()
  

  beforeEach(() => {
    main3Page.navigate()
    main3Page.clickLoginOption()
  
  })
})

//EJERCICIO3

it('A invalid user', () =>{  
  //cy.visit('https://the-internet.herokuapp.com/')
  //cy.get(':nth-child(21) > a').click()
  cy.get('#username').type("Any")
  cy.get('#password').type("SuperSecretPassword!")
  cy.get('.fa').click()
  cy.get('#flash').contains("Your user is invalid!")

})