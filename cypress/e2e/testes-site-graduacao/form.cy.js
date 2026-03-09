describe('Página de Graduação - Testes Automatizados', () => {
  beforeEach(() => {
    cy.visit('https://qualidade.apprbs.com.br/site')
  })

  context('Teste do Formulário de Inscrição', () => {
    it('Deve exibir erro de base legal ao enviar formulário', () => {

      cy.get('input[name="pessoa.nome"]', { timeout: 10000 })
        .should('be.visible')
        .type('Teste')

      cy.get('input[name="pessoa.telefonePrincipal"]', { timeout: 10000 })
        .should('be.visible')
        .type('11961234567')

      cy.get('input[name="pessoa.emailPrincipal"]', { timeout: 10000 })
        .should('be.visible')
        .type('teste@gmail.com')

    
      cy.get('button').contains('Concluir').click()

      cy.contains('É necessário informar a base legal')
        .should('be.visible')
    })

    it('Campo Nome deve permitir apenas letras', () => {
      cy.get('input[name="pessoa.nome"]', { timeout: 10000 })
        .should('be.visible')
        .type('123456')

      cy.get('input[name="pessoa.nome"]').should('have.value', '123456')
    })

    it('Campo e-mail deve validar formato', () => {
      cy.get('input[name="pessoa.emailPrincipal"]', { timeout: 10000 })
        .should('be.visible')
        .type('emailinvalido')

      cy.get('button[name="rbBtnNext"]').should('be.disabled')
      cy.contains('Preencha este campo').should('be.visible')
    })

    it('Campo telefone não deve ser obrigatório', () => {
      cy.get('input[name="pessoa.nome"]', { timeout: 10000 })
        .should('be.visible')
        .type('Teste')

      cy.get('input[name="pessoa.emailPrincipal"]', { timeout: 10000 })
        .should('be.visible')
        .type('teste@gmail.com')

      cy.get('button').contains('Concluir').click()
      cy.contains('É necessário informar a base legal')
        .should('be.visible')
    })
  })

})