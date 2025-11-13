function checkSign() {
  const name = document.getElementById("name").value.trim().toLowerCase();
  const sign = document.getElementById("sign").value.trim().toLowerCase();
  const output = document.getElementById("output");

  const goodEggs = ["virgo", "taurus", "pisces", "leo", "aries"];

  if (!name || !sign) {
    // plain text message (no HTML needed)
    output.textContent = "Please enter both your name and your sign!";
    return;
  }

  // escape user text before inserting as HTML
  function escapeHTML(str) {
    return str
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  // capitalize and escape
  const safeName = capitalize(escapeHTML(name));

  // ✅ Special case for Sasha and Alex (Virgo)
  if (name === "alex" && sign === "virgo") {
    output.innerHTML = `Hello, ${safeName}! <br>✨ You are the <em>special edition</em> great egg — thank you for your service 🌟🥚💖`;
    return;
  }

  if (name === "sasha" && sign === "virgo") {
    output.innerHTML = `Hello, ${safeName}! <br>✨ You are the OG <em>special edition</em> good egg — thank you for your service 🌟🥚💖`;
    return;
  }

  // ✅ Special case for Kirsten (Gemini)
  if (name === "kirsten" && sign === "gemini") {
    output.innerHTML = `Hello, ${safeName}! <br>✨ You are a cosmic <em>special edition</em> good egg 🌟🥚💖`;
    return;
  }

  // ✅ Special case for Rosa or Rosana (Aquarius)
  if ((name === "rosa" || name === "rosana") && sign === "aquarius") {
    output.innerHTML = `Hello, ${safeName}! <br>🌊✨ You are an <em>honorary good egg</em> blessed by the cosmic waters 💎🥚💖`;
    return;
  }

  // ✅ Special case for Carlos or Carl (Aquarius)
  if ((name === "carlos" || name === "carl") && sign === "aquarius") {
    output.innerHTML = `Hello, ${safeName}! <br>🌠✨ You are a <em>legendary good egg</em>, shining brightly among the stars 🌌🥚💖`;
    return;
  }

  // ✅ Special case for Aaron (Scorpio)
  if (name === "aaron" && sign === "scorpio") {
    output.innerHTML = `Hello, ${safeName}! <br>🌙 You’re the <em>best egg</em> — my <i>favorite</i> one 💕🥚`;
    return;
  }

  // ✅ Special case for Chris (Gemini)
  if (name === "chris" && sign === "gemini") {
    output.innerHTML = `Hello, ${safeName}! <br>✨ You are the <em>special edition</em> bad egg. Do better 🥚`;
    return;
  }

  // ✅ Special case for Samantha (Aries)
  if (name === "samantha" && sign === "aries") {
    output.innerHTML = `Hello, ${safeName}! <br>✨ You are the <em>special edition</em> bad egg. Do better 🥚`;
    return;
  }

  // ✅ Special case for Kiara (Scorpio)
  if (name === "kiara" && sign === "scorpio") {
    output.innerHTML = `Hello, ${safeName}! <br>✨ You are the <em>special edition</em> <i>worst</i> egg. Try being a better person 🥚`;
    return;
  }

  // ✅ Normal rules (use innerHTML so the <br> renders; name is escaped)
  if (goodEggs.includes(sign)) {
    output.innerHTML = `Hello, ${safeName}! <br>You are a good egg 💖`;
  } else {
    output.innerHTML = `Hello, ${safeName}! <br>You are a bad egg 👿`;
  }
}

function capitalize(word) {
  if (!word) return "";
  return word.charAt(0).toUpperCase() + word.slice(1);
}
