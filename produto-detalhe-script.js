// JavaScript para a página de detalhe do produto
document.addEventListener('DOMContentLoaded', function() {
    // Sistema de parâmetros na URL para identificar o produto
    const urlParams = new URLSearchParams(window.location.search);
    const produtoId = urlParams.get('id');
    
    // Dados dos produtos (simulando um banco de dados)
    const produtos = {
        '1': {
            nome: 'Pão de Mel Especial',
            categoria: 'Pães de Mel',
            preco: 'preço',
            descricao: 'Nosso pão de mel especial é feito com uma receita exclusiva que passa de geração em geração. Cada unidade é cuidadosamente preparada com ingredientes selecionados e muito carinho. Perfeito para presentear ou para saborear em momentos especiais.',
            ingredientes: [
                'lmelsim',
                'podemelnao',
                'podemel',
            
            ],
            cor: '#f8e1e7'
        },
        '2': {
            nome: 'Pão de Mel',
            categoria: 'Pães de Mel',
            preco: 'preço',
            descricao: 'Pão de mel premium. o sabor suave do mel torna este produto uma experiência única.',
            ingredientes: [
                'pao',
                'de',
                'mel',
                'mel',
                'de',
                'pao'
            ],
            cor: '#f5e1e7'
        },
        '3': {
            nome: 'Cone de Chocolate',
            categoria: 'Cones Recheados',
            preco: 'preço',
            descricao: 'Cone crocante recheado com chocolate belga derretido. Perfeito para quem busca um doce sofisticado e indulgente. Cada cone é artesanalmente preparado.',
            ingredientes: [
                'CONE',
                'RECHEADO',
                'CONERECHEADO',
                'ingrediente',
            ],
            cor: '#f5f0e1'
        },
        '4': {
            nome: 'Cone de Doce de Leite',
            categoria: 'Cones Recheados',
            preco: 'preço',
            descricao: 'Delicioso cone recheado com doce de leite caseiro cremoso. Uma combinação clássica que agrada a todos os paladares. Feito com ingredientes frescos e de qualidade.',
            ingredientes: [
                'cone',
                'doce de leite',
                'oconedoceleite',
                'leite dodoce',
            
            ],
            cor: '#f0f5e1'
        },
        '5': {
            nome: 'Brigadeiro Gourmet',
            categoria: 'Doces Caseiros',
            preco: 'preço',
            descricao: 'Brigadeiro tradicional feito com chocolate nobre e leite condensado, enrolado manualmente e coberto com granulado especial. O sabor autêntico do brigadeiro brasileiro.',
            ingredientes: [
                'ingrediente',
                'ingrediente',
                'ingrediente',
                'ingrediente',
                'ingrediente',
            ],
            cor: '#e8f4e8'
        },
        '6': {
            nome: 'Beijinho Cremoso',
            categoria: 'Doces Caseiros',
            preco: 'preço',
            descricao: 'Beijinho cremoso feito com coco fresco ralado e leite condensado. Uma explosão de sabor tropical em cada mordida. Perfeito para festas e ocasiões especiais.',
            ingredientes: [
                'ingrediente',
                'ingrediente',
                'ingrediente',
                'ingrediente',
                'ingrediente',
            ],
            cor: '#e8e8f4'
        },
        '7': {
            nome: 'Pão de Mel',
            categoria: 'Pães de Mel',
            preco: 'preço',
            descricao: 'Pão de mel que traz aconchego e sabor inigualável. Ideal para acompanhar uma xícara de café ou chá em dias frios.',
            ingredientes: [
                'ingrediente',
                'ingrediente',
                'ingrediente',
                'ingrediente',
                'ingrediente',
            ],
            cor: '#f8f1e1'
        },
        '8': {
            nome: 'Cone de Morango',
            categoria: 'Cones Recheados',
            preco: 'preço',
            descricao: 'Cone recheado com creme de morango natural. A acidez dos morangos frescos combinada com a doçura do creme cria um equilíbrio perfeito de sabores.',
            ingredientes: [
                'ingrediente',
                'ingrediente',
                'ingrediente',
                'ingrediente',
                'ingrediente',
            ],
            cor: '#f1e8f8'
        }
    };
    
    // Se houver um ID na URL, carrega o produto correspondente
    if (produtoId && produtos[produtoId]) {
        carregarProduto(produtos[produtoId]);
    }
    
    // Função para carregar os dados do produto na página
    function carregarProduto(produto) {
        // Atualizar elementos da página
        document.getElementById('produto-nome').textContent = produto.nome;
        document.getElementById('produto-titulo').textContent = produto.nome;
        document.getElementById('produto-categoria').textContent = produto.categoria;
        document.getElementById('produto-preco').textContent = produto.preco;
        document.getElementById('produto-descricao-texto').textContent = produto.descricao;
        
        // Atualizar cor principal
        document.getElementById('imagem-principal').style.backgroundColor = produto.cor;
        document.querySelector('.mini-img.ativa').style.backgroundColor = produto.cor;
        
        // Atualizar ingredientes
        const ingredientesList = document.getElementById('produto-ingredientes');
        ingredientesList.innerHTML = '';
        produto.ingredientes.forEach(ingrediente => {
            const li = document.createElement('li');
            li.textContent = ingrediente;
            ingredientesList.appendChild(li);
        });
        
        // Atualizar link do WhatsApp
        const mensagem = `Olá! Gostaria de comprar o produto: ${produto.nome} - ${produto.preco}`;
        const whatsappLink = `https://wa.me/5511972589613?text=${encodeURIComponent(mensagem)}`;
        document.getElementById('btn-whatsapp').href = whatsappLink;
        
        // Atualizar título da página
        document.title = `${produto.nome} - L'Amour Confeitaria`;
    }
    
    // Sistema de miniaturas de imagens
    const miniImgs = document.querySelectorAll('.mini-img');
    const imagemPrincipal = document.getElementById('imagem-principal');
    
    miniImgs.forEach(mini => {
        mini.addEventListener('click', function() {
            // Remover classe ativa de todas as miniaturas
            miniImgs.forEach(img => img.classList.remove('ativa'));
            
            // Adicionar classe ativa na miniatura clicada
            this.classList.add('ativa');
            
            // Atualizar cor da imagem principal
            imagemPrincipal.style.backgroundColor = this.style.backgroundColor;
        });
    });
    
    // Controle de quantidade
    const btnMenos = document.querySelector('.qtd-btn.menos');
    const btnMais = document.querySelector('.qtd-btn.mais');
    const inputQuantidade = document.getElementById('quantidade');
    
    btnMenos.addEventListener('click', function() {
        let valor = parseInt(inputQuantidade.value);
        if (valor > 1) {
            inputQuantidade.value = valor - 1;
        }
    });
    
    btnMais.addEventListener('click', function() {
        let valor = parseInt(inputQuantidade.value);
        if (valor < parseInt(inputQuantidade.max)) {
            inputQuantidade.value = valor + 1;
        }
    });
    
    inputQuantidade.addEventListener('change', function() {
        let valor = parseInt(this.value);
        const max = parseInt(this.max);
        const min = parseInt(this.min);
        
        if (valor > max) this.value = max;
        if (valor < min) this.value = min;
    });
    
    // Botão de comprar
    const btnComprar = document.getElementById('btn-comprar');
    btnComprar.addEventListener('click', function() {
        const produtoNome = document.getElementById('produto-titulo').textContent;
        const quantidade = document.getElementById('quantidade').value;
        const preco = document.getElementById('produto-preco').textContent;
        
        // Simular adição ao carrinho
        const mensagem = `Produto "${produtoNome}" (${quantidade} unidade(s)) adicionado ao carrinho!`;
        alert(mensagem);
        
        // Em um site real, aqui você salvaria no localStorage ou enviaria para o backend
        localStorage.setItem('carrinho', JSON.stringify({
            produto: produtoNome,
            quantidade: quantidade,
            preco: preco
        }));
    });
    
    // Sistema de tabs
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            
            // Remover classe active de todas as tabs
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));
            
            // Adicionar classe active na tab clicada
            this.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
});