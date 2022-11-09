/// <reference types="cypress" />

import {Main2Page} from '../page_objects/main2'
import {Login2Page} from '../page_objects/login2'
import {PasswordError2Page} from '../page_objects/passwordError2'


describe('TEST de LOGIN', () => {
  const login2Page = new Login2Page()
  const main2Page = new Main2Page()
  const passwordError2Page = new PasswordError2Page()


  beforeEach(() => {
    main2Page.navigate()
    main2Page.clickLoginOption()
  
  })
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