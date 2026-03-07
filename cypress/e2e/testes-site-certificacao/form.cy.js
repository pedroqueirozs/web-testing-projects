describe('Página de Certificação - Testes Automatizados', () => {
  beforeEach(() => {
    cy.visit('https://qualidade.apprbs.com.br/certificacao')
  })

  context('Teste do Formulário de Inscrição', () => {
  it('Não deve aceitar email inválido', () => {

   cy.get('input[name="pessoa.emailPrincipal"]', {timeout:10000})
    .type('emailinvalido')

    cy.get('button[name="rbBtnNext"]')
    .first()
    cy.contains('Preencha este campo').should('be.visible')
  

})

  it('Deve exibir erro de base legal ao enviar formulário', () => {

    cy.get('input[name="pessoa.nome"]', {timeout:10000})
      .should('be.visible')
      .type('Teste')
      
    cy.get('input[name="pessoa.telefonePrincipal"]', { timeout: 10000 })
    .should('be.visible')
    .and('not.be.disabled')
    .type('11961234567')

    cy.get('input[name="pessoa.emailPrincipal"]', {timeout:10000})
     .should('be.visible')
      .type('teste@gmail.com')

    cy.get('button[name="rbBtnNext"]')
    .should('be.visible')
    .first()
    .click()

    cy.contains('É necessário informar a base legal')
      .should('be.visible')

  })

  })

})