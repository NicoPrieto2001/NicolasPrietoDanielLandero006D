import {browser, element, by } from 'protractor';
 
describe('test 1', ()=>{
    //configuramos nuestro bloque
    beforeEach(()=>{
        browser.get("/terciario");

    });
    //creación de prueba 1
    it("El page 3 se muestra bien", ()=>{
        expect(element(by.css(".titulo ion-label")).getText()).toContain("Ingrese sus Datos");
    });  

});
