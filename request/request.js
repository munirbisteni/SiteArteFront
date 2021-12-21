function ShowOpcaoLivro(){
    var livro = document.querySelector('#opcaoLivro');
    livro.style.display = 'block';
    var tela = document.querySelector('#opcaoTela');
    tela.style.display = 'none'; 
}
function ShowOpcaoTela(){
    var tela = document.querySelector('#opcaoTela');
    tela.style.display = 'block'; 
    var livro = document.querySelector('#opcaoLivro');
    livro.style.display = 'none';
}
function ShowOpcaoNenhuma(){
    var tela = document.querySelector('#opcaoTela');
    tela.style.display = 'none'; 
    var livro = document.querySelector('#opcaoLivro');
    livro.style.display = 'none';
}