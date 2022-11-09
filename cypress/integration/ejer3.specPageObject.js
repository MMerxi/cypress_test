/// <reference types="cypress" />

import {Main3Page} from '../page_objects/main3'
import {Login3Page} from '../page_objects/login3'
import {UserError3Page} from '../page_objects/userError3'


describe('TEST de LOGIN3', () => {
  const login3Page = new Login3Page()
  const main3Page = new Main3Page()
  const userError3Page = new UserError3Page()
  

  beforeEach(() => {
    main3Page.navigate()
    main3Page.clickLoginOption()
  
  })


//EJERCICIO3

it('A invalid user', () =>{ 
  login3Page.fillUser("Any")
  login3Page.fillPass("SuperSecretPassword!")
  login3Page.clickButtonLogin()
  userError3Page.checkMessage("Your username is invalid!")

})
})