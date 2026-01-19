document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.querySelector('input[type="text"]').value;
  const password = document.querySelector('input[type="password"]').value;

  if (username === "sosigames" && password === "12345") {
    // Accesso corretto
    document.body.innerHTML = `
      <div style="
        color:#4fa3ff;
        font-family: monospace;
        padding:40px;
        background-color:#0b1320;
        height:100vh;
      ">
        <p>[INFO] Connessione al database centrale...</p>
        <p>[INFO] Verifica credenziali operatore...</p>
        <p style="color:#7CFC00;">[OK] Accesso autorizzato.</p>
        <p style="margin-top:30px;">Caricamento fascicolo riservato...</p>
      </div>
    `;

    setTimeout(() => {
      window.location.href = "caso.html";
    }, 4000);

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
