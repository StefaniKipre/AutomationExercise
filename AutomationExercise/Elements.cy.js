export class Elements {
    elements = {
        SignupLoginBtn: () => cy.get('a[href="/login"]'),
        Loginemail: () => cy.get('[name="email"][data-qa="login-email"]'),
        LoginPassword: () => cy.get('[data-qa="login-password"]'),
        LoginBtn: () => cy.get('[data-qa="login-button"]'),
        WomenCategory: () => cy.get('[href="#Women"]'),
        DressBtn: () => cy.get('[href="/category_products/1"]'),
        PoloSelect: () => cy.get('.nav-stacked li:nth-of-type(1)'),
        GreenPoloTop: () => cy.get('.productinfo.text-center'),
        GreenTopAddToCart: () => cy.get('body > section *.row *.col-sm-9.padding-right *:nth-child(4) *.single-products *.productinfo.text-center > a'),
        BluePoloTop: () => cy.get('.productinfo.text-center'),
        BlueTopAddToCart: () => cy.get('body > section *.row *.col-sm-9.padding-right *:nth-child(3) *.single-products *.productinfo.text-center > a'),
        ContinueShoppingBtn: () => cy.get('[class="btn btn-success close-modal btn-block"]'),
        ViewCartBtn: () => cy.get('[class="modal-content"] a'),
        CheckoutBtn: () => cy.get('[class="btn btn-default check_out"]'),
        PlaceOrderBrn: () => cy.get('a[href="/payment"]'),
        CardNameInput: () => cy.get('[name="name_on_card"]'),
        CardNumInput: () => cy.get('[data-qa="card-number"]'),
        CVC: () => cy.get('[class="form-control card-cvc"]'),
        Month:() => cy.get('[data-qa="expiry-month"]'),
        Year: () => cy.get('[name="expiry_year"]'),
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