# language: pt

Funcionalidade: Login
    Como um usuário cadastrado no site SauceDemo
    Quero inserir minhas credenciais 
    Para ter acesso ao site

    Contexto: Login
        Dado que estou na página de login

    Cenário: CT-001: Login com sucesso
        Quando insiro "standard_user" no campo Username
        E insiro "secret_sauce" no campo Password
        E clico no botão de login
        Então devo ser redirecionado para a página de inventário com todos os produtos

    Esquema do Cenário: Tentativa de login com dados inválidos ou ausentes
        Quando insiro o "<usuario>" no campo Username
        E insiro "<senha>" no campo Password
        E clico no botão de login
        Então devo ver uma mensagem de erro na tela

        Exemplos:
        | usuario       | senha        | descricao         | id     |
        | user          | secret_sauce | Username inválida | CT-002 |
        | standard_user | sauce        | Password inválida | CT-003 |
        |               | secret_sauce | Username ausente  | CT-004 |
        | standard_user |              | Password ausente  | CT-005 |