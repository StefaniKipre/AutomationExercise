export class Elements {
    elements = {
        SignupLoginBtn: () => cy.get('#header *.col-sm-8 * > ul > li:nth-child(4) > a'),
        Loginemail: () => cy.get('#form *.col-sm-4.col-sm-offset-1 * form > input[type=email]:nth-child(2)'),
        LoginPassword: () => cy.get('#form *.col-sm-4.col-sm-offset-1 * form > input[type=password]:nth-child(3)'),
        LoginBtn: () => cy.get('#form *.col-sm-4.col-sm-offset-1 * form > button'),
        WomenCategory: () => cy.get('#accordian > div:nth-child(1) > div.panel-heading > h4 > a > span > i'),
        DressBtn: () => cy.get('#Women > div > ul > li:nth-child(1) > a'),
        PoloSelect: () => cy.get('body > section *.row *.col-sm-3 *.brands_products * > ul > li:nth-child(1) > a'),
        GreenPoloTop: () => cy.get('body > section *.row *.col-sm-9.padding-right *:nth-child(4) *.single-products > div.productinfo.text-center > p'),
        GreenTopAddToCart: () => cy.get('body > section *.row *.col-sm-9.padding-right *:nth-child(4) *.single-products *.productinfo.text-center > a'),
        BluePoloTop: () => cy.get('body > section *.row *.col-sm-9.padding-right *:nth-child(3) *.single-products *.productinfo.text-center > p'),
        BlueTopAddToCart: () => cy.get('body > section *.row *.col-sm-9.padding-right *:nth-child(3) *.single-products *.productinfo.text-center > a'),
        ContinueShoppingBtn: () => cy.get('#cartModal *.modal-footer > button'),
        ViewCartBtn: () => cy.get('#cartModal *.modal-body > p:nth-child(2) > a'),
        CheckoutBtn: () => cy.get('#do_action *.container * > a'),
        PlaceOrderBrn: () => cy.get('#cart_items *:nth-child(7) > a'),
        CardNameInput: () => cy.get('#payment-form *:nth-child(2) * > input'),
        CardNumInput: () => cy.get('#payment-form *:nth-child(3) * > input'),
        CVC: () => cy.get('#payment-form *:nth-child(4) *.col-sm-4.form-group.cvc > input'),
        Month:() => cy.get('#payment-form *:nth-child(4) *:nth-child(2) > input'),
        Year: () => cy.get('#payment-form *:nth-child(4) *:nth-child(3) > input'),
        PayandConfirm: () => cy.get('#submit'),
        OrderSuccess: () => cy.get('#form * p')

    }
    SignupLogin(){
        this.elements.SignupLoginBtn().click()
    }
    Email(Mail){
        this.elements.Loginemail().type(Mail)
    }
    Password(Pass){
        this.elements.LoginPassword().type(Pass)
    }
    Login(){
        this.elements.LoginBtn().click()
    }
    Women(){
        this.elements.WomenCategory().click()
    }
    Dress(){
        this.elements.DressBtn().click()
    }
    GreenTop(){
        this.elements.GreenTopAddToCart().click()
    }
    BlueTop(){
        this.elements.BlueTopAddToCart().click()
    }
    Polo(){
        this.elements.PoloSelect().click()
    }
    ContinueShopping(){
        this.elements.ContinueShoppingBtn().click()
    }
    ViewCart(){
        this.elements.ViewCartBtn().click()
    }
    Checkout(){
        this.elements.CheckoutBtn().click()
    }
    PlaceOrder(){
        this.elements.PlaceOrderBrn().click()
    }
    CardInput(){
        this.elements.CardNameInput().type('Stefi kipre')
        this.elements.CardNumInput().type('1234567891234567')
        this.elements.CVC().type('582')
        this.elements.Month().type('12')
        this.elements.Year().type('2026')
    }
    Confirm(){
        this.elements.PayandConfirm().click()
    }

}
export const Shop = new Elements();