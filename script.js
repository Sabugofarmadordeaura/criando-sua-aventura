const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.passo.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        if (atual) {
            atual.classList.remove('ativo');
        }

        const proximoElemento = document.getElementById(proximoPasso);
        if (proximoElemento) {
            proximoElemento.classList.add('ativo');
        }
    });
});
