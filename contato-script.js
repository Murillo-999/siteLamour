// Validação do formulário de contato
document.addEventListener('DOMContentLoaded', function() {
    const formContato = document.getElementById('form-contato');
    
    if (formContato) {
        formContato.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validação simples
            const nome = document.getElementById('nome').value;
            const telefone = document.getElementById('telefone').value;
            const mensagem = document.getElementById('mensagem').value;
            
            if (nome && telefone && mensagem) {
                // Aqui normalmente enviaríamos os dados para um servidor
                // Por enquanto, apenas simulamos o envio
                
                // Criar link do WhatsApp
                const texto = `Olá, sou ${nome}. ${mensagem}`;
                const whatsappURL = `https://wa.me/5511972589613?text=${encodeURIComponent(texto)}`;
                
                // Abrir WhatsApp
                window.open(whatsappURL, '_blank');
                
                // Limpar formulário
                formContato.reset();
                
                // Mostrar mensagem de sucesso
                alert('Mensagem enviada com sucesso! Você será redirecionado para o WhatsApp.');
            } else {
                alert('Por favor, preencha todos os campos obrigatórios.');
            }
        });
    }
});