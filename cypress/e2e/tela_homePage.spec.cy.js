/// <reference types="cypress"/>

var url = "https://muitomanga.com/";
var contador = 1;

describe("usuário", () => {
  it("deverá poder ir para o início do site", () => {
    try{
      //Acessar página principal do site
      cy.visit(url);

      //Abrir menu lateral
      cy.get("i[class='fa fa-bars']").click();
      
      //Clicar em "Início"
      cy.get("i[class='fa fa-home']").click();
    }catch(e){
      console.log("Erro: " + e);
    }
  });

  it("deverá poder visualizar a lista de mangás", () => {
    try{
      //Acessar página principal do site
      cy.visit(url);

      //Abrir menu lateral
      cy.get("i[class='fa fa-bars']").click();
      
      //Clicar em "Lista de mangás"
      cy.get("i[class='fa fa-book']").eq(0).click();
    }catch(e){
      console.log("Erro: " + e);
    }
  });

  it("deverá poder visualizar a área de usuário", () => {
    try{
      //Acessar página principal do site
      cy.visit(url);

      //Abrir área do usuário
      cy.show_userArea("Geraldo", "neto2100");
    }catch(e){
      console.log("Erro: " + e);
    }
  });

  it("deverá poder buscar um mangá", () => {
    try{
      //Acessar página principal do site
      cy.visit(url);

      //Clicar no ícone de lupa
      cy.get("i[class='fa fa-search']").eq(0).click();

      //Inserir nome de um mangá na barra de busca
      cy.get("input[id=myInputSearchmm]").type("one piece");

      //Clicar no segundo ícone de lupa
      cy.get("i[class='fa fa-search']").eq(1).click();
    }catch(e){
      console.log("Erro: " + e);
    }
  });

  it("deverá poder movimentar a lista dos mangás mais populares", () => {
    try{
      //Acessar página principal do site
      cy.visit(url);

      while(contador <= 4){
        //Clicar na seta de próximo
        cy.get("a[class='btn nextf']").click();
        
        //Esperar um segundo após cada clique, com exceção do último
        if(contador < 4){
          cy.wait(1000);
        }
  
        contador++;
      }
    }catch(e){
      console.log("Erro: " + e);
    }
  });

  it("deverá poder visualizar as informações de um mangá", () => {
    try{
      //Acessar página principal do site
      cy.visit(url);

      //Clicar em um mangá
      cy.get("a[title='One Piece']").eq(0).click();
    }catch(e){
      console.log("Erro: " + e);
    }
  });

  it("deverá poder ler um capítulo recém lançado", () => {
    try{
      //Acessar página principal do site
      cy.visit(url);

      //Clicar na primeira opção presente na lista de capítulos recém lançados
      cy.get("a[href^='/manga/']").eq(10).click();
    }catch(e){
      console.log("Erro: " + e);
    }
  });

  it("deverá poder ver mais capítulos recém lançados", () => {
    try{
      //Acessar página principal do site
      cy.visit(url);

      //Clicar em "Ver mais capítulos", presente no fim da lista
      cy.get("div[id=button_loadnews]").click();
    }catch(e){
      console.log("Erro: " + e);
    }
  });

  it("deverá poder ler um mangá recém adicionado", () => {
    try{
      //Acessar página principal do site
      cy.visit(url);

      //Clicar na primeira opção presente na lista de mangás recém adicionados
      cy.get("div[class=capaMangaLast]").eq(0).click();
    }catch(e){
      console.log("Erro: " + e);
    }
  });

  it("deverá poder visualizar todos os mangás recém adicionados", () => {
    try{
      //Acessar página principal do site
      cy.visit(url);

      //Clicar em "Ver todos", presente no início da lista
      cy.get("a[class=link_ver_todos]").click();
    }catch(e){
      console.log("Erro: " + e);
    }
  });
})