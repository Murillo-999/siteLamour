// Filtro de produtos por categoria
document.addEventListener('DOMContentLoaded', function() {
    const categoriaBtns = document.querySelectorAll('.categoria-btn');
    const produtoItems = document.querySelectorAll('.produto-item');
    
    categoriaBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove a classe active de todos os botões
            categoriaBtns.forEach(b => b.classList.remove('active'));
            // Adiciona a classe active ao botão clicado
            this.classList.add('active');
            
            const categoria = this.getAttribute('data-categoria');
            
            // Filtra os produtos
            produtoItems.forEach(item => {
                if (categoria === 'todos' || item.getAttribute('data-categoria') === categoria) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});