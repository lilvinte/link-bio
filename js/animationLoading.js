document.addEventListener("DOMContentLoaded", function() {
    let width = 0;
    let interval = setInterval(function() {
        if (width >= 100) {
            clearInterval(interval);
            document.getElementById('loading-screen').style.opacity = 0;
            setTimeout(function() {
                document.getElementById('loading-screen').style.display = 'none';
            }, 500);
        } else {
            width++;
            document.getElementById('loading-bar').style.width = width + '%';
            document.getElementById('loading-text').innerText = width + '%';
        }
    }, 10); 
});



document.addEventListener("DOMContentLoaded", () => {
    let referrer = document.referrer || "Acesso Direto";

    // Obtém a data e hora atual
    let now = new Date();
    let timestamp = now.toLocaleString(); // Exemplo: "02/04/2025, 14:30:00"

    // Recupera dados já salvos ou inicia uma lista vazia
    let visits = JSON.parse(localStorage.getItem("user_visits")) || [];

    // Adiciona novo registro
    visits.push({ source: referrer, timestamp: timestamp });

    // Salva no localStorage
    localStorage.setItem("user_visits", JSON.stringify(visits));
});

