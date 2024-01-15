document.addEventListener('DOMContentLoaded', function () {
    const targetDate = new Date('2024-02-10T00:00:00');
    
    function updateCountdown() {
        const currentDate = new Date();
        const difference = targetDate - currentDate;

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById('countdown').innerText = `${days} dias, ${hours} horas, ${minutes} minutos, ${seconds} segundos`;
    }

    // Atualizar o contador a cada segundo
    setInterval(updateCountdown, 1000);

    // Chamar a função para garantir que o contador seja exibido imediatamente
    updateCountdown();
});
