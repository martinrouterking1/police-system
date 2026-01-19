//load
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.querySelector('input[type="text"]').value;
  const password = document.querySelector('input[type="password"]').value;

  if (username === "sosigames" && password === "12345") {

    // Schermata "server"
    document.body.innerHTML = `
      <div id="terminal" style="
        background-color:#0b1320;
        color:#4fa3ff;
        font-family: monospace;
        padding:40px;
        height:100vh;
      ">
      </div>
    `;

    const terminal = document.getElementById("terminal");

    const lines = [
      "[INFO] Connessione al nodo SIC-PROXY-07...",
      "[INFO] Stabilimento canale sicuro TLS...",
      "[INFO] Verifica credenziali operatore...",
      "[OK] Operatore riconosciuto: SOSI-GAMES",
      "[OK] Accesso autorizzato.",
      "[INFO] Caricamento fascicolo riservato...",
      "[INFO] Decrittazione dati in corso..."
    ];

    let index = 0;

    const interval = setInterval(() => {
      if (index < lines.length) {
        const p = document.createElement("p");
        p.textContent = lines[index];

        if (lines[index].includes("[OK]")) {
          p.style.color = "#7CFC00";
        }

        terminal.appendChild(p);
        index++;
      } else {
        clearInterval(interval);

        setTimeout(() => {
          window.location.href = "caso.html";
        }, 2000);
      }
    }, 800); // ⏱️ velocità delle scritte (ms)

  } else {
    // Credenziali errate
    let error = document.getElementById("error");

    if (!error) {
      error = document.createElement("p");
      error.id = "error";
      error.style.color = "#ff4f4f";
      error.style.fontSize = "12px";
      error.style.marginTop = "15px";
      error.style.textAlign = "center";
      error.textContent = "❌ Credenziali errate. Accesso negato.";

      document.getElementById("loginForm").appendChild(error);
    }
  }
});

