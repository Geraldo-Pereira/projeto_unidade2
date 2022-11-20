/// <reference types="cypress"/>

var url = "https://muitomanga.com/";

describe("usuário", () => {
  it("deverá poder alterar o tema", () => {
    try{
      //Acessar a página principal do site
      cy.visit(url);
  
      //Abrir a área do usuário
      cy.show_userArea("Geraldo", "neto2100");

      //Clicar em "Mudar para tema Light"
      cy.get("button[id=mudaTema]").click();

      //Esperar cinco segundos
      cy.wait(5000);

      //Clicar em "Mudar para tema Dark"
      cy.get("button[id=mudaTema]").click();
    }catch(e){
      console.log("Erro: " + e);
    }
  });

  it("deverá poder visualizar as notificações", () => {
    try{
      //Acessar a página principal do site
      cy.visit(url);
  
      //Abrir a área do usuário
      cy.show_userArea("Geraldo", "neto2100");

      //Clicar em "Minhas Notificações"
      cy.get("i[class='fa fa-bell']").eq(2).click();
    }catch(e){
      console.log("Erro: " + e);
    }
  });
  
  it("deverá poder visualizar o histórico de capítulos", () => {
    try{
      //Acessar a página principal do site
      cy.visit(url);
  
      //Abrir a área do usuário
      cy.show_userArea("Geraldo", "neto2100");
  
      //Clicar em "Histórico de Capítulos"
      cy.get("i[class='fa fa-folder-open']").eq(1).click();
    }catch(e){
      console.log("Erro: " + e);
    }
  });

  it("deverá poder visualizar os mangás favoritados", () => {
    try{
      //Acessar a página principal do site
      cy.visit(url);
  
      //Abrir a área do usuário
      cy.show_userArea("Geraldo", "neto2100");
  
      //Clicar em "Favoritados"
      cy.get("i[class='fa fa-heart']").eq(1).click();
    }catch(e){
      console.log("Erro: " + e);
    }
  });

  it("deverá poder visualizar os mangás avaliados", () => {
    try{
      //Acessar a página principal do site
      cy.visit(url);
  
      //Abrir a área do usuário
      cy.show_userArea("Geraldo", "neto2100");
  
      //Clicar em "Avaliados"
      cy.get("i[class='fa fa-star']").eq(1).click();
    }catch(e){
      console.log("Erro: " + e);
    }
  });

  it("deverá poder visualizar os mangás os quais serão lidos", () => {
    try{
      //Acessar a página principal do site
      cy.visit(url);
  
      //Abrir a área do usuário
      cy.show_userArea("Geraldo", "neto2100");
  
      //Clicar em "Lerei"
      cy.get("i[class='fa fa-bookmark']").eq(1).click();
    }catch(e){
      console.log("Erro: " + e);
    }
  });

  it("deverá poder visualizar os mangás com a leitura não finalizada", () => {
    try{
      //Acessar a página principal do site
      cy.visit(url);
  
      //Abrir a área do usuário
      cy.show_userArea("Geraldo", "neto2100");
  
      //Clicar em "Lendo"
      cy.get("i[class='fa fa-eye']").eq(1).click();
    }catch(e){
      console.log("Erro: " + e);
    }
  });

  it("deverá poder visualizar os mangás lidos", () => {
    try{
      //Acessar a página principal do site
      cy.visit(url);
  
      //Abrir a área do usuário
      cy.show_userArea("Geraldo", "neto2100");
  
      //Clicar em "Lido"
      cy.get("i[class='fa fa-check']").eq(1).click();
    }catch(e){
      console.log("Erro: " + e);
    }
  });

  it("deverá poder visualizar os mangás dropados", () => {
    try{
      //Acessar a página principal do site
      cy.visit(url);
  
      //Abrir a área do usuário
      cy.show_userArea("Geraldo", "neto2100");
  
      //Clicar em "Dropados"
      cy.get("i[class='fa fa-trash']").eq(1).click();
    }catch(e){
      console.log("Erro: " + e);
    }
  });

  it("deverá poder visualizar os mangás assinados", () => {
    try{
      //Acessar a página principal do site
      cy.visit(url);
  
      //Abrir a área do usuário
      cy.show_userArea("Geraldo", "neto2100");
  
      //Clicar em "Assinados/Notificar"
      cy.get("i[class='fa fa-bell']").eq(3).click();
    }catch(e){
      console.log("Erro: " + e);
    }
  });
})