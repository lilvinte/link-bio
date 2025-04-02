document.addEventListener("DOMContentLoaded", function () {
    let width = 0;
    let interval = setInterval(function () {
        if (width >= 100) {
            clearInterval(interval);
            document.getElementById('loading-screen').style.opacity = 0;
            setTimeout(function () {
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
    let userAgent = navigator.userAgent;
    
    // Detecta acessos via apps móveis
    if (userAgent.includes("FBAV")) {
        referrer = "Facebook App";
    } else if (userAgent.includes("Instagram")) {
        referrer = "Instagram App";
    } else if (userAgent.includes("WhatsApp")) {
        referrer = "WhatsApp App";
    }

    // Identifica o tipo de dispositivo
    let device = "Desconhecido";
    if (/Android/i.test(userAgent)) {
        device = "Android";
    } else if (/iPhone|iPad|iPod/i.test(userAgent)) {
        device = "iOS";
    } else if (/Windows|Mac OS|Linux/i.test(userAgent)) {
        device = "PC";
    }

    // Obtém a data e hora atual
    let now = new Date();
    let timestamp = now.toLocaleString();

    // Recupera dados já salvos ou inicia uma lista vazia
    let visits = JSON.parse(localStorage.getItem("user_visits")) || [];
    
    // Adiciona novo registro com dispositivo
    visits.push({ source: referrer, timestamp: timestamp, device: device });
    
    // Salva no localStorage
    localStorage.setItem("user_visits", JSON.stringify(visits));

    console.log("Visita registrada:", visits);
});
