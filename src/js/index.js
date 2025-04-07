// OBJETIVO 1 - Quando clicar no botão do personagem na lista, marcar o botão como selecionado
// PASSO 1 - Pegar os botões no JS pra poder verificar quando o usuario clicar em cima deles

const botoes = document.querySelectorAll('.botao');
const personagens = document.querySelectorAll('.personagem');

// PASSO 2 - Adicionar a classe "selecionado" no botão que o usuário clicou

botoes.forEach((botao, indice) => { 
    botao.addEventListener('click', () => {
        // PASSO 3 - Verificar se já existe um botão selecionado, se sim, devemos remover a seleção dele
        const botaoSelecionado = document.querySelector('.botao.selecionado');
        botaoSelecionado.classList.remove('selecionado');

        botao.classList.add('selecionado');

        const personagemSelecionado = document.querySelector('.personagem.selecionado');
        personagemSelecionado.classList.remove('selecionado');
        personagens[indice].classList.add('selecionado');
    });
});

// OBJETIVO 2 - Quando clicar no botão do personagem mostrar as informações do personagem
