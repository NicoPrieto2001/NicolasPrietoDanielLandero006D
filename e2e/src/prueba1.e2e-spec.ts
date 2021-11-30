import {browser, element, by } from 'protractor';
 
describe('test 1', ()=>{
    
    beforeEach(()=>{
        browser.get("/terciario");

    });
    
    it("El page 3 se muestra bien", ()=>{
        expect(element(by.css(".titulo ion-label")).getText()).toContain("Ingrese sus Datos");
    });  

});
