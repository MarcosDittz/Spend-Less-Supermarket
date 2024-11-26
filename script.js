document.addEventListener('DOMContentLoaded', function() { 
    var imagem = document.querySelector('.img-click'); 
    var menu = document.querySelector('.menu-oculto'); 
    imagem.addEventListener('click', function() { 
        if (menu.classList.contains('mostrar')) { 
            menu.classList.remove('mostrar'); 
        } else { 
            menu.classList.add('mostrar'); 
        } 
    }); 
});