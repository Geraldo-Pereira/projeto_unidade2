/// <reference types="cypress"/>

var url = "https://muitomanga.com/";

describe("usuário", () => {
  it("deverá poder marcar o mangá como favorito", () => {
    try{
      //Acessar página principal do site
      cy.visit(url);

      //Exbir as informações do mangá
      cy.show_infoManga("Geraldo", "neto2100");
      
      //Clicar no botão de favoritar
      cy.get("button[id=estou_favoritando]").click();

      //Abrir área do usuário
      cy.get("a[class=button_css_logado]").click();

      //Clicar em "Favoritados"
      cy.get("i[class='fa fa-heart']").eq(1).click();
    }catch(e){
      console.log("Erro: " + e);
    }
  });

  it("deverá poder marcar o mangá para receber notificações", () => {
    try{
      //Acessar página principal do site
      cy.visit(url);

      //Exbir as informações do mangá
      cy.show_infoManga("Geraldo", "neto2100");
      
      //Clicar no botão de assinar ou notificar
      cy.get("button[id=estou_notificar]").click();

      //Abrir área do usuário
      cy.get("a[class=button_css_logado]").click();

      //Clicar em "Assinados/Notificar"
      cy.get("i[class='fa fa-bell']").eq(3).click();
    }catch(e){
      console.log("Erro: " + e);
    }
  });

  it("deverá poder marcar o mangá para ler mais tarde", () => {
    try{
      //Acessar página principal do site
      cy.visit(url);

      //Exbir as informações do mangá
      cy.show_infoManga("Geraldo", "neto2100");
      
      //Clicar no botão de lerei
      cy.get("button[id=estou_lerei]").click();

      //Abrir área do usuário
      cy.get("a[class=button_css_logado]").click();

      //Clicar em "Lerei"
      cy.get("i[class='fa fa-bookmark']").eq(1).click();
    }catch(e){
      console.log("Erro: " + e);
    }
  });

  it("deverá poder marcar o mangá como leitura não finalizada", () => {
    try{
      //Acessar página principal do site
      cy.visit(url);

      //Exbir as informações do mangá
      cy.show_infoManga("Geraldo", "neto2100");
      
      //Clicar no botão de lendo
      cy.get("button[id=estou_lendo]").click();

      //Abrir área do usuário
      cy.get("a[class=button_css_logado]").click();

      //Clicar em "Lerei"
      cy.get("i[class='fa fa-eye']").eq(1).click();
    }catch(e){
      console.log("Erro: " + e);
    }
  });

  it("deverá poder dropar o mangá", () => {
    try{
      //Acessar página principal do site
      cy.visit(url);

      //Exbir as informações do mangá
      cy.show_infoManga("Geraldo", "neto2100");
      
      //Clicar no botão de dropar
      cy.get("button[id=estou_dropado]").click();

      //Abrir área do usuário
      cy.get("a[class=button_css_logado]").click();

      //Clicar em "Dropados"
      cy.get("i[class='fa fa-trash']").eq(1).click();
    }catch(e){
      console.log("Erro: " + e);
    }
  });

  it("deverá poder limpar as marcações do mangá", () => {
    try{
      //Acessar página principal do site
      cy.visit(url);

      //Exbir as informações do mangá
      cy.show_infoManga("Geraldo", "neto2100");
      
      //Clicar no botão de limpar marcações
      cy.get("button[id=estou_limpar]").click();
    }catch(e){
      console.log("Erro: " + e);
    }
  });

  it("deverá poder buscar por um capítulo do mangá", () => {
    try{
      //Acessar página principal do site
      cy.visit(url);

      //Exbir as informações do mangá
      cy.show_infoManga("Geraldo", "neto2100");
      
      //Digitar um número na barra de busca de capítulos
      cy.get("input[id=searchchapter]").type(162);
    }catch(e){
      console.log("Erro: " + e);
    }
  });
})