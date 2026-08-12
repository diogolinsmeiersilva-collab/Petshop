function enviarAgendamento() {
    // Captura os valores digitados/selecionados pelo usuário
    const nome = document.getElementById('nomePet').value;
    const servico = document.getElementById('servicoSelecionado').value;
    
    // Validação simples para garantir que os campos não estão vazios
    if (nome.trim() === '' || servico === '') {
        alert('Por favor, preencha o nome do seu pet e escolha um serviço!');
        return;
    }

    // Altere para o número do WhatsApp do seu PetShop (Apenas números com código do país e DDD)
    const numeroWhats = "5541999999999"; 

    // Cria o texto personalizado que será enviado para o WhatsApp
    const texto = `Olá! Gostaria de agendar o serviço de *${servico}* para o meu pet *${nome}*. Vocês têm horários disponíveis para esta semana?`;
    
    // Codifica o texto para o formato aceito em links de navegadores
    const textoCodificado = encodeURIComponent(texto);
    
    // Abre a conversa diretamente no aplicativo do WhatsApp
    window.open(`https://wa.me{numeroWhats}?text=${textoCodificado}`, '_blank');
}
