(function () {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const form = document.getElementById("leadForm");
  if (!form) return;

  // ⚠️ Remplace le numéro si besoin
  const smsNumber = "0756833656";
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = (document.getElementById("name")?.value || "").trim();
    const phone = (document.getElementById("phone")?.value || "").trim();
    const city = (document.getElementById("city")?.value || "").trim();
    const problem = (document.getElementById("problem")?.value || "").trim();

    const msg =
      `Bonjour, j'ai besoin d'un plombier.\n` +
      `Nom : ${name || "—"}\n` +
      `Département : 11 (Aude)\n` +
      `Ville : ${city || "—"}\n` +
      `Problème : ${problem || "—"}\n` +
      `Téléphone : ${phone || "—"}`;

    const encoded = encodeURIComponent(msg);

    const url = isIOS
      ? `sms:${smsNumber}?&body=${encoded}`
      : `sms:${smsNumber}?body=${encoded}`;

    const a = document.createElement("a");
    a.href = url;
    a.style.display = "none";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });
})();
