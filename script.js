function checkSign() {
  const name = document.getElementById("name").value.trim().toLowerCase();
  const sign = document.getElementById("sign").value.trim().toLowerCase();
  const output = document.getElementById("output");

  const goodEggs = ["virgo", "taurus", "pisces", "leo", "aries"];

  if (!name || !sign) {
    output.innerText = "Please enter both your name and your sign!";
    return;
  }

  // ✅ Special case for Sasha and Alex (Virgo)
    if (name === "alex" && sign === "virgo") {
    output.innerText = `Hello, ${capitalize(name)}! <br>✨ You are the *special edition* great egg-- thank you for your service 🌟🥚💖`;
    return;
  }

    if (name === "sasha" && sign === "virgo") {
    output.innerText = `Hello, ${capitalize(name)}! <br>✨ You are the OG *special edition* good egg-- thank you for your service 🌟🥚💖`;
    return;
  }

    // ✅ Special case for Kirsten (Gemini)
  if (name === "kirsten" && sign === "gemini") {
    output.innerText = `Hello, ${capitalize(name)}! <br>✨ You are a cosmic *special edition* good egg 🌟🥚💖`;
    return;
  }

  // ✅ Special case for Rosa or Rosana (Aquarius)
  if ((name === "rosa" || name === "rosana") && sign === "aquarius") {
    output.innerText = `Hello, ${capitalize(name)}! <br>🌊✨ You are an *honorary good egg* blessed by the cosmic waters 💎🥚💖`;
    return;
  }

  // ✅ Special case for Carlos or Carl (Aquarius)
  if ((name === "carlos" || name === "carl") && sign === "aquarius") {
    output.innerText = `Hello, ${capitalize(name)}! <br>🌠✨ You are a *legendary good egg*, shining brightly among the stars 🌌🥚💖`;
    return;
  }

  // ✅ Special case for Aaron (Scorpio)
if (name === "aaron" && sign === "scorpio") {
  output.innerHTML = `Hello, ${capitalize(name)}! <br>🌙 You’re the *best egg* — my <i>favorite</i> one 💕🥚`;
  return;
}

    // ✅ Special case for Chris (Gemini)
    if (name === "Chris" && sign === "gemini") {
    output.innerText = `Hello, ${capitalize(name)}! <br>✨ You are the *special edition* bad egg. Do better 🥚`;
    return;
  }

      // ✅ Special case for Samantha (Aries)
    if (name === "Samantha" && sign === "aries") {
    output.innerText = `Hello, ${capitalize(name)}! <br>✨ You are the *special edition* bad egg. Do better 🥚`;
    return;
  }

      // ✅ Special case for Kiara (Scorpio)
    if (name === "Kiara" && sign === "scorpio") {
    output.innerhtml = `Hello, ${capitalize(name)}! <br>✨ You are the *special edition* <i>worst</i> egg. Try being a better person 🥚`;
    return;
  }


  // ✅ Normal rules
  if (goodEggs.includes(sign)) {
    output.innerText = `Hello, ${capitalize(name)}! <br>You are a good egg 💖`;
  } else {
    output.innerText = `Hello, ${capitalize(name)}! <br>You are a bad egg 👿`;
  }
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
