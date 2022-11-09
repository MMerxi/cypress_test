/// <reference types="cypress" />

import {Main4Page} from '../page_objects/main3'
import {Login4Page} from '../page_objects/login3'
import {PasswordError4Page} from '../page_objects/passwordError3'


describe('TEST de LOGIN4', () => {
  const login4Page = new Login4Page()
  const main4Page = new Main4Page()
  const passwordError4Page = new PasswordError4Page()
  

  beforeEach(() => {
    main4Page.navigate()
    main4Page.clickLoginOption()
  
  })
})

//EJERCICIO4

it('usuario y contraseña vacías', () =>{  
  //cy.visit('https://the-internet.herokuapp.com/')
  //cy.get(':nth-child(21) > a').click()
  cy.get('#username').clear("")
  cy.get('#password').clear("")
  cy.get('.fa').click()
  cy.get('#flash').contains("Your user is invalid!")

})