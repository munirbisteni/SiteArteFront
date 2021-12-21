function ShowOpcaoLivro(){
    var livro = document.querySelector('#opcaoLivro');
    livro.style.display = 'flex';
    var tela = document.querySelector('#opcaoTela');
    tela.style.display = 'none'; 
}
function ShowOpcaoTela(){
    var tela = document.querySelector('#opcaoTela');
    tela.style.display = 'flex'; 
    var livro = document.querySelector('#opcaoLivro');
    livro.style.display = 'none';
}
function ShowOpcaoNenhuma(){
    var tela = document.querySelector('#opcaoTela');
    tela.style.display = 'none'; 
    var livro = document.querySelector('#opcaoLivro');
    livro.style.display = 'none';
}