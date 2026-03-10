# Sites analisados para a vaga Analista de Qualidade Júnior

## Documentação das Istruções do teste: [Instruções Rubeus](https://rubeus.notion.site/23fb5fbfe7798130865acbaf2c54e1c2?pvs=105)

Neste repositório, realizei a análise de qualidade dos seguintes sites:

1.  **[Site de Certificação](./site-certificacao/certificacao-analise.md)**
2.  **[Site de Graduação](./site-graduacao/graduacao-analise.md)**

## Tecnologias Utilizadas
* **Testes Automatizados:** Cypress 15.11.0
* **Linguagem:** JavaScript
* **Versão Node:**  nvm use 18.18.2
* **Testes Manuais:** Inspeção visual e Firefox DevTools

## Como executar os testes automatizados

### Clone o repositório:

1. git clone https://github.com/pedroqueirozs/web-testing-projects.git

2. Instale as dependências:

    ```bash
    npm install
    ```
3. Abra o Cypress:
    ```bash
    npx cypress open
    ```

4. Execute o teste desejado na interface do Cypress.

5. Ou execute diretamente no terminal:
   ```bash
    npx cypress run
   ```

### Autor: Pedro Douglas Gonçalves Queiroz