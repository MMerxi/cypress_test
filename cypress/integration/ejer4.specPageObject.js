/// <reference types="cypress" />

import {Main4Page} from '../page_objects/main4'
import {Login4Page} from '../page_objects/login4'
import {UserpassVacios4Page} from '../page_objects/userpassVacios4'


describe('TEST de LOGIN4', () => {
  const login4Page = new Login4Page()
  const main4Page = new Main4Page()
  const userpassVacios4Page = new UserpassVacios4Page()
   

  beforeEach(() => {
    main4Page.navigate()
    main4Page.clickLoginOption()
  
  })


//EJERCICIO 4

it('A invalid user', () =>{ 
  login4Page.usernameIsClear()
  login4Page.passwordIsClear()
  login4Page.clickButtonLogin()
  userpassVacios4Page.checkMessage("Your username is invalid!")

})
})