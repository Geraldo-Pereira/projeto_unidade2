//Realizar login
Cypress.Commands.add("login", (userName, password) => {
  //Clicar no ícone de usuário
  cy.get("a[class=button_css_login]").click();

  //Informar o nome de usuário e a senha
  cy.get("input[id=username]").type(userName);
  cy.get("input[id=password]").type(password);
  
  //Clicar em "Login"
  cy.get("input[name=logar]").click();
});

//Exibir a área do usuário
Cypress.Commands.add("show_userArea", (userName, password) => {
  //Realizar login
  cy.login(userName, password);

  //Abrir a área do usuário
  cy.get("a[class=button_css_logado]").click();
});

//Exibir as informações do mangá
Cypress.Commands.add("show_infoManga", (userName, password) => {
  //Realizar login
  cy.login(userName, password);

  //Clicar no mangá
  cy.get("a[title='Solo Leveling']").click();
});