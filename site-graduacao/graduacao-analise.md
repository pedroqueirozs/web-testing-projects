# Testes Site 02 - Graduação


Este repositório contém a documentação de testes (manuais e automatizados) e o reporte de bugs encontrados durante a análise da página [Graduação](https://qualidade.apprbs.com.br/site)

## Escopo do Projeto
O objetivo foi validar o fluxo principal de inscrição, a integridade dos links sociais e a conformidade visual (UI/UX) tanto em ambiente Desktop quanto Mobile.


## Estrutura de Testes

### 1. Testes Automatizados (Cypress)
Os seguintes itens foram automatizados para garantir a regressão das funcionalidades críticas:
* **Fluxo de Inscrição:** Verificação de mensagens de erro ao submeter dados válidos.
* **Validação de Campos:** Checagem de obrigatoriedade e tipos de dados.
* **Links de Redes Sociais:** Validação dos atributos `href` no footer.

### 2. Testes Manuais e Exploratórios
Itens que exigem análise visual foram validados manualmente:
* **Interface (UI):** Alinhamento de ícones e qualidade de image.
* **Conteúdo:** Padronização de textos e gramática.

---

## Relatório de Bugs e Melhorias

Abaixo estão detalhados os problemas identificados durante o ciclo de teste, classificados por severidade e tipo.

| ID | Título do Problema | Severidade | Tipo |
| :--- | :--- | :--- | :--- | 
| **01** | [Inconsistência entre validação do backend e campos do formulário](#item-01) | Alta | Bug |
| **02** | [Links de contato direcionando parcialmente para WhatsApp](#item-02) | Alta | Bug |
| **03** | [Problemas de padronização e alinhamento no header](#item-03) | Média | UI | 
| **04** | [Problemas de layout e validação na seção de formulário](#item-04) | Alta | UI/Bug |
| **05** | [Inconsistência na navegação dos links do menu principal](#item-05) | Média | UX |
| **06** | [Elementos clicáveis sem funcionalidade no banner principal](#item-06) | Média | Bug |
| **07** | [Problemas de layout na seção “Conheça nossos diferenciais”](#item-07) | Baixa | UI |
| **08** | [Ajustes de espaçamento na seção “Próximos eventos”](#item-08) | Baixa | UI |
| **09** | [Dimensionamento excessivo dos ícones de redes sociais](#item-09) | Baixa | UI |
| **10** | [Título sublinhado sem funcionalidade na seção de depoimentos](#item-10) | Baixa | UI |

## Detalhamento dos Itens

* **Item 01 - Inconsistência entre validação do backend e campos do formulário <a name="item-01"></a>**
  * **Tipo: Correção** 
  * **Classificação: Utilidade** 
  * **Prioridade: Alta** 
  * **Descrição: Ao submeter o formulário de inscrição, a aplicação retorna a mensagem de erro “É necessário informar a base legal”. Entretanto, ao analisar o payload da requisição enviada para a API, foi identificado que não existe nenhum campo relacionado à base legal ou consentimento LGPD sendo enviado, como por exemplo ``legalBase``, ``consent``, ou ``privacyAccepted``. Além disso, a interface do usuário não apresenta nenhum campo visível que permita informar ou aceitar essa base legal, impossibilitando o envio correto da informação exigida pelo backend.** 
 
* **Item 02 - Links de contato direcionando com insconsistencia para WhatsApp <a name="item-02"></a>**
  * **Tipo: Correção** 
  * **Classificação: Usabilidade** 
  * **Prioridade: Alta** 
  * **Descrição: Os links “Atendimento”, “WhatsApp” e o botão “Falar com Consultor” direcionam o usuário para o aplicativo WhatsApp. Entretanto, o redirecionamento não contém um número de telefone associado, impedindo que uma conversa seja iniciada automaticamente.** 

* **Item 03 - Problemas de padronização e alinhamento no header  <a name="item-03"></a>**
  * **Tipo: Correção** 
  * **Classificação: Usabilidade** 
  * **Prioridade: Média** 
  * **Descrição: Foram identificadas inconsistências visuais no header da página, relacionadas ao alinhamento e padronização dos elementos. Alguns itens apresentam apenas ícones, enquanto outros apresentam apenas texto ou uma combinação de ícone e texto. Essa inconsistência gera falta de padronização visual. Na versão mobile, os elementos do header apresentam desalinhamento, resultando em uma organização visual desestruturada.** 

* **Item 04 - Problemas de layout e validação na seção de formulário <a name="item-04"></a>**
  * **Tipo: Correção** 
  * **Classificação: Usabilidade / Utilidade** 
  * **Prioridade: Alta** 
  * **Descrição: Na seção de formulário “Não fique de fora”, foram identificados alguns comportamentos inconsistentes: O campo Nome, apesar de obrigatório, permite a inserção apenas de números. O campo Email realiza corretamente a validação de formato de e-mail. O campo Telefone não é obrigatório. Além disso, o botão “Concluir” encontra-se muito próximo dos campos do formulário, indicando necessidade de maior espaçamento. Também foi identificado um ícone de fundo parcialmente visível, aparentemente relacionado ao Gmail, que aparece cortado na interface. Na versão mobile, esse ícone não é exibido. O texto posicionado ao lado do formulário encontra-se alinhado à direita, gerando inconsistência visual na versão mobile.** 

* **Item 05 - Inconsistência na navegação dos links do menu principal <a name="item-05"></a>**
  * **Tipo: Correção** 
  * **Classificação: Usabilidade** 
  * **Prioridade: Média** 
  * **Descrição: Os links “Nossos Diferenciais”, “Eventos” e “Depoimentos” apresentam comportamento inconsistente. Ao clicar nesses links, o usuário é direcionado para uma outra página com informações institucionais, porém ao retornar para a página anterior, a navegação posiciona o usuário na seção correspondente dentro da própria página inicial. Esse comportamento pode gerar confusão na navegação, pois aparenta que os links deveriam apenas navegar para seções da mesma página.** 

* **Item 06 - Elementos clicáveis sem funcionalidade nos banners principais <a name="item-06"></a>**
  * **Tipo: Correção** 
  * **Classificação: Usabilidade** 
  * **Prioridade: Média** 
  * **Descrição: Na seção de banners principais da página, foram identificados elementos que aparentam ser clicáveis, como “Inscreva-se” e “Saiba mais”, porém esses elementos não executam nenhuma ação ao serem clicados.** 

* **Item 07 - Problemas de layout na seção “Conheça nossos diferenciais” <a name="item-07"></a>**
  * **Tipo: Correção** 
  * **Classificação: Desejabilidade** 
  * **Prioridade: Baixa** 
  * **Descrição: Na seção **“Conheça nossos diferenciais”**, foi identificado que os cards apresentam espaçamento interno reduzido entre o título, a linha separadora e o conteúdo textual. Também foi observado que a palavra **“melhor”** presente na descrição está sublinhada, sugerindo um link, porém não possui funcionalidade de navegação. Na versão **mobile**, foi identificado pouco espaçamento entre os cards, prejudicando a organização visual da seção.** 

* **Item 08 - Ajustes de espaçamento na seção “Próximos eventos” <a name="item-08"></a>**
  * **Tipo: Correção** 
  * **Classificação: Desejabilidade** 
  * **Prioridade: Baixa** 
  * **Descrição: Na seção “Próximos eventos”, foram identificados problemas de espaçamento entre os elementos da interface. O botão “Inscreva-se agora” está funcional, porém o ícone de seta presente no botão encontra-se excessivamente afastado do texto. O problema também é observado na versão mobile da página.** 

* **Item 09 - Dimensionamento excessivo dos ícones de redes sociais <a name="item-09"></a>**
  * **Tipo: Correção** 
  * **Classificação: Desejabilidade** 
  * **Prioridade: Baixa** 
  * **Descrição: Na seção de redes sociais localizada próxima ao rodapé da página, os ícones das plataformas apresentam tamanho excessivo em relação ao restante da interface. Embora os links estejam funcionando corretamente, o dimensionamento dos ícones causa desequilíbrio visual na página. Na versão mobile, devido ao tamanho dos ícones, cada elemento acaba sendo exibido em linhas separadas, tornando a seção visualmente extensa.** 

* **Item 10 - Título sublinhado sem funcionalidade na seção de depoimentos <a name="item-10"></a>**
  * **Tipo: Correção** 
  * **Classificação: Desejabilidade** 
  * **Prioridade: Baixa** 
  * **Descrição: O título **“O QUE NOSSOS ALUNOS DIZEM?”** encontra-se sublinhado, sugerindo que se trata de um elemento clicável. Entretanto, o título não possui nenhuma funcionalidade associada, podendo gerar expectativa incorreta de interação para o usuário.** 
---
