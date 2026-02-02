# language: pt

Funcionalidade: Carrinho
        Como um usuário cadastrado no site SauceDemo
        Quero gerenciar meus produtos no carrinho
        Para garantir que a seleção esteja correta
    
    Contexto: Estar logado
        Dado que estou logado

    Cenário: CT-006 e CT-007:  Adicionar um produto e verificar quantidade no ícone do carrinho
        Dado que estou na página de inventário de produtos
        Quando navego até o produto "Sauce Labs Onesie"
        E clico no botão "Add to cart"
        Então o botão deve mudar para "Remove"
        E a quantidade de itens no ícone do carrinho deve mostrar "1"

    Cenário: CT-008: Verificar se o produto está no carrinho
        Dado que adicionei o produto "Sauce Labs Onesie" ao carrinho
        Quando clico no ícone do carrinho
        Então sou redirecionado para a página do carrinho
        E vejo o produto "Sauce Labs Onesie" na lista de produtos adicionados

    Cenário: CT-009: Remover produto do carrinho
        Dado que estou na página do carrinho e tenho o produto "Sauce Labs Onesie" adicionado
        Quando clico em "Remove"
        Então o produto deve desaparecer do carrinho

    Cenário: CT-010: Verificar persistência após logout
        Dado que adicionei o produto "Sauce Labs Onesie" ao carrinho
        Quando faço logout e entro novamente no sistema
        Então ao acessar o carrinho, o produto "Sauce Labs Onesie" deve aparecer na lista

    Cenário: CT-011: Adicionar mais um produto
        Dado que adicionei o produto "Sauce Labs Onesie" ao carrinho
        Quando adiciono também o produto "Sauce Labs Fleece Jacket"
        Então a quantidade de itens no ícone do carrinho deve mudar para "2"
