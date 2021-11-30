import {browser, element, by } from 'protractor';
 
describe('test 2', ()=>{
    beforeEach(()=>{
        browser.get("/primario");

    });
    
    it("Se da la bienvenida a la aplicacion", ()=>{
        expect(element(by.css(".welcome ion-label")).getText()).toContain("Bienvenido a la pagina de Fast And Happy");
    });  
    
    
    

});