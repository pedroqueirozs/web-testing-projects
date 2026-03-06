# Testes Site 01 - Certificação


Este repositório contém a documentação de testes (manuais e automatizados) e o reporte de bugs encontrados durante a análise da página [Certificação](https://qualidade.apprbs.com.br/certificacao)

## Escopo do Projeto
O objetivo foi validar o fluxo principal de inscrição, a integridade dos links sociais e a conformidade visual (UI/UX) tanto em ambiente Desktop quanto Mobile.

## Tecnologias Utilizadas
* **Testes Automatizados:** Cypress 13+
* **Linguagem:** JavaScript
* **Testes Manuais:** Inspeção visual e Firefox DevTools

## Estrutura de Testes

### 1. Testes Automatizados (Cypress)
Os seguintes itens foram automatizados para garantir a regressão das funcionalidades críticas:
* **Fluxo de Inscrição:** Verificação de mensagens de erro ao submeter dados válidos (Bug #01).
* **Validação de Campos:** Checagem de obrigatoriedade e tipos de dados (Bug #02).
* **Links de Redes Sociais:** Validação dos atributos `href` no footer (Bug #04).

### 2. Testes Manuais e Exploratórios
Itens que exigem análise visual foram validados manualmente:
* **Interface (UI):** Alinhamento de ícones e qualidade de imagem (Bugs #05, #07).
* **Conteúdo:** Padronização de textos e gramática (Bug #06).

---

## Relatório de Bugs e Melhorias

Abaixo estão detalhados os problemas identificados durante o ciclo de teste, classificados por severidade e tipo.

| ID | Título do Problema | Severidade | Tipo |
| :--- | :--- | :--- | :--- | 
| **01** | [Erro de "Base Legal" ao submeter formulário](#item-01) | Crítica | Bug |
| **02** | [Inconsistência de validação em Nome/Telefone](#item-02) | Alta | Bug |
| **03** | [Falha na requisição ao submeter formulário](#item-03) | Alta | Bug | 
| **04** | [Botão "Saiba mais" sem funcionalidade](#item-04) | Média | Bug |
| **05** | [Ícone do YouTube (no footer da pagina) redireciona incorretamente](#item-05) | Média | UI |
| **06** | [Ícones com baixa qualidade visual](#item-06) | Média | UI |
| **07** | [Inconsistencia na padronização de textos](#item-07) | Média | UI |
| **08** | [Inconsistências de alinhamento e padronização visual em ícones e imagens](#item-08) | Média | UI |

## Detalhamento dos Itens

* **Item 01 - Inconsistência entre validação do backend e campos do formulário <a name="item-01"></a>**
  * **Tipo: Correção** 
  * **Classificação: Utilidade** 
  * **Prioridade: Alta** 
  * **Descrição: Ao submeter o formulário de inscrição, a aplicação retorna a mensagem de erro “É necessário informar a base legal”. Entretanto, ao analisar o payload da requisição enviada para a API, foi identificado que não existe nenhum campo relacionado à base legal ou consentimento LGPD sendo enviado, como por exemplo legalBase, consent ou privacyAccepted. Além disso, a interface do usuário não apresenta nenhum campo visível que permita informar ou aceitar essa base legal, impossibilitando o envio correto da informação exigida pelo backend.** 
 
* **Item 02 - Inconsistência de validação entre campos obrigatórios no formulário <a name="item-02"></a>**
  * **Tipo: Correção** 
  * **Classificação: Utilidade** 
  * **Prioridade: Alta** 
  * **Descrição: O campo E-mail apresenta validação obrigatória, enquanto Nome e Telefone permitem submissão vazia, demonstrando inconsistência no padrão de validação. Campo nome permite preenchimento com números.** 

* **Item 03 - Falha na requisição ao submeter formulário <a name="item-03"></a>**
  * **Tipo: Correção** 
  * **Classificação: Utilidade** 
  * **Prioridade: Alta** 
  * **Descrição: Após a submissão do formulário quando o  botão "Avançar" é clicado, é realizada uma requisição HTTP do tipo PATCH para o endpoint de envio de dados.Entretanto, a requisição retorna status 403 (Forbidden), impedindo a conclusão do fluxo de inscrição Além disso, considerando que o formulário aparenta criar um novo registro de inscrição, o método HTTP esperado seria POST.** 

* **Item 04 - Botão "Saiba mais" não executa ação <a name="item-04"></a>**
  * **Tipo: Correção** 
  * **Classificação: Utilidade** 
  * **Prioridade: Alta** 
  * **Descrição: O botão “Saiba mais” não executa nenhuma ação ao ser clicado, não redirecionando nem expandindo conteúdo.** 

* **Item 05 - Ícone do YouTube (no footer da pagina) redireciona incorretamente <a name="item-05"></a>**
  * **Tipo: Correção** 
  * **Classificação: Utilidade** 
  * **Prioridade: Média** 
  * **Descrição:O ícone identificado como da platarforma YouTube redireciona o usuário para a plataforma TikTok.** 

* **Item 06 - Ícones de redes sociais (no footer da pagina) com baixa qualidade visual <a name="item-06"></a>**
  * **Tipo: Melhoria** 
  * **Classificação:Desejabilidade** 
  * **Prioridade: Baixa** 
  * **Descrição:Os ícones das redes sociais que redirecionam o usuário no footer da pagina apresentam aparência levemente embaçada.** 

* **Item 07 - Inconsistência na padronização de frases e formatação de textos <a name="item-07"></a>**
  * **Tipo: Correção** 
  * **Classificação: Desejabilidade** 
  * **Prioridade: Média** 
  * **Descrição: Foram identificadas inconsistências na padronização textual ao longo da página, incluindo: Palavras que compões titulos e/ou subtitulos iniciadas com letra maiúscula no meio de frases sem justificativa gramatical. Falta de formatação e/ou justificação de textos longos.** 

* **Item 08 - Inconsistências de alinhamento e padronização visual em ícones e imagens <a name="item-08"></a>**
  * **Tipo: Melhoria** 
  * **Classificação: Desejabilidade** 
  * **Prioridade: Média** 
  * **Descrição: Foi identificado  inconsistências visuais na padronização de elementos gráficos ao longo da página, incluindo: Imagens exibidas com proporções inadequadas, apresentando distorção ou falta de adaptação correta ao layout em diferentes resoluções; ícones de Check Circles (ícones circulares acima da sessão “Outros Cursos”) com tamanhos diferentes dentro da mesma sessão; desalinhamento entre ícones e textos associados (Dentro da sessão “Outros Cursos”); espaçamento irregular entre itens que pertencem ao mesmo grupo visual. Os problemas de espaçamentos entre elementos e imagens e elementos foram observados tanto na versão desktop quanto mobile.** 
---

## Como executar os testes automatizados

