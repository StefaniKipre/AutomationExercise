import { elements } from './Selectors.cy';

class Functions {

    SignupLogin(){
        elements.SignupLoginBtn().click()
    }
    Email(Mail){
        elements.Loginemail().type(Mail)
    }
    Password(Pass){
        elements.LoginPassword().type(Pass)
    }
    Login(){
        elements.LoginBtn().click()
    }
    Women(){
        elements.WomenCategory().click()
    }
    Dress(){
        elements.DressBtn().click()
    }
    GreenTop(){
        elements.GreenTopAddToCart().click()
    }
    BlueTop(){
        elements.BlueTopAddToCart().click()
    }
    Polo(){
        elements.PoloSelect().click()
    }
    ContinueShopping(){
        elements.ContinueShoppingBtn().click()
    }
    ViewCart(){
        elements.ViewCartBtn().click()
    }
    Checkout(){
        elements.CheckoutBtn().click()
    }
    PlaceOrder(){
        elements.PlaceOrderBrn().click()
    }
    CardInput(){
        elements.CardNameInput().type('Stefi kipre')
        elements.CardNumInput().type('1234567891234567')
        elements.CVC().type('582')
        elements.Month().type('12')
        elements.Year().type('2026')
    }
    Confirm(){
        elements.PayandConfirm().click()
    }
}
export const Shop = new Functions();