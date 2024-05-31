import { Shop } from './Functions.cy';
import { elements } from './Selectors.cy'
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
    elements.GreenPoloTop().contains('p', 'Fancy Green Top')
    .should('be.visible');
    elements.BluePoloTop().contains('p', 'Blue Top')
    .should('be.visible');
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
    elements.OrderSuccess()
    .should('have.text', 'Congratulations! Your order has been confirmed!')
    

   })


})