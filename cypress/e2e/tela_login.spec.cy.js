/// <reference types="cypress"/>

var url = "https://muitomanga.com/";

describe("usuário", () => {
  it("deverá poder realizar login", () => {
    try{
      //Acessar a página principal do site
      cy.visit(url);
      
      //Realizar login
      cy.login("Geraldo", "neto2100");
    }catch(e){
      console.log("Erro: " + e);
    }
  });

  it("deverá poder recuperar a senha", () => {
    try{
      //Acessar página do login
      cy.visit(url + "login");

      //Clicar na opção de recuperar senha
      cy.get("a[class=btn_tag_a]").eq(1).click();

      //Informar o nome de usuário
      cy.get("input[id=usuario]").type("Geraldo");

      //Clicar em "Recuperar senha"
      cy.get("input[value='Recuperar senha']").click();
    }catch(e){
      console.log("Erro: " + e);
    }
  });

  it("deverá poder recuperar o nome de usuário", () => {
    try{
      //Acessar a página do login
      cy.visit(url + "login");

      //Clicar na opção de recuperar senha
      cy.get("a[class=btn_tag_a]").eq(1).click();

      //Informar um endereço de email
      cy.get("input[id=email]").type("geraldo2799@gmail.com");

      //Clicar em "Recuperar usuário"
      cy.get("input[value='Recuperar usuario']").click();
    }catch(e){
      console.log("Erro: " + e);
    }
  });
})