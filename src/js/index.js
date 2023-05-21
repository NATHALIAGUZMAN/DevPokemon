// Objetivo 1: inserir o modo escuro:
//passo 1: pegar o elemento HTML correspondente ao botao de trocar tema
const botaoAlterarTema = document.getElementById("botao-alterar-tema");
//const pra gerar uma variavel q nao altera, padrao com maiuscula e sem acentos
//console.log(botaoAlterarTema) pra ver na pag de vizualização se aparece e funciona

// passo 2: dar um jeito de pegar no js o elemento HTML correspondente ao body
const body = document.querySelector("body");
//console.log(body)

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

//passo 3:dar um jeito de identificar o clique do usuário no botao troca tema
botaoAlterarTema.addEventListener("click", () => {

    //passo 6: verificar se o modo escuro esta ativo:
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

    if (modoEscuroEstaAtivo) {
        //passo 7: remover classe modo-escuro do body
        body.classList.remove("modo-escuro");
        //passo 8: voltar a imagem do sol
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png")
    } else {
        //console.log("clicou no botao") //pra ver se ta funcionando, clicar no botao e ver se aparece a frase no console(inspecionar)

        // passo 4: adicionar a classe modo-escuro no body
        body.classList.add("modo-escuro");

        //passo 5: trocar o sol pela lua - cria a consta imagembotaotrocatema. o ponto é devido haver uma classe pra imagem
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png")

    }

    //Objetivo 2. remover a classe, caso ja esteva em modo-escuro, e mudar a imagem de volta para o sol

})


