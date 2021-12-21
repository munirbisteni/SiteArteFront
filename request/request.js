function ShowOpcaoLivro(){
    var livro = document.querySelector('#opcao-livro');
    livro.style.display = 'block';
    var tela = document.querySelector('#opcao-tela');
    tela.style.display = 'none'; 
}
function ShowOpcaoTela(){
    var tela = document.querySelector('#opcao-tela');
    tela.style.display = 'flex'; 
    var livro = document.querySelector('#opcao-livro');
    livro.style.display = 'none';
}
function ShowOpcaoNenhuma(){
    var tela = document.querySelector('#opcao-tela');
    tela.style.display = 'none'; 
    var livro = document.querySelector('#opcao-livro');
    livro.style.display = 'none';
}