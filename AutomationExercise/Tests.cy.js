import { Shop } from "./Elements.cy";
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

describe('Test the core functionalities of the website', () => {
    beforeEach(function() {
      cy.visit('https://www.automationexercise.com/')
   })
   it('Login with valid credentials', () => {

    Shop.SignupLogin()
    Shop.Email('stefi@mail.com')
    Shop.Password('stefi123')
    Shop.Login()
   })
   it('Search for a specific product', () => {
    
    Shop.Women()
    Shop.Dress()
    Shop.Polo()
    Shop.elements.GreenPoloTop().should('have.text', 'Fancy Green Top')
    Shop.elements.BluePoloTop().should('have.text', 'Blue Top')
    
   })
   it('Checkout Process', () => {
    
    Shop.SignupLogin()
    Shop.Email('stefi@mail.com')
    Shop.Password('stefi123')
    Shop.Login()
    Shop.Women()
    Shop.Dress()
    Shop.Polo()
    Shop.BlueTop()
    Shop.ContinueShopping()
    Shop.GreenTop()
    Shop.ViewCart()
    Shop.Checkout()
    Shop.PlaceOrder()
    Shop.CardInput()
    Shop.Confirm()
    Shop.elements.OrderSuccess().should('have.text', 'Congratulations! Your order has been confirmed!')
    

   })


})