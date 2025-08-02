function checkSign() {
  const name = document.getElementById("name").value.trim().toLowerCase();
  const sign = document.getElementById("sign").value.trim().toLowerCase();
  const output = document.getElementById("output");

  const goodEggs = ["virgo", "taurus", "pisces", "leo", "aries"];

  if (!name || !sign) {
    output.innerText = "Please enter both your name and your sign!";
    return;
  }

  // ✅ Special case for Kirsten
  if (name === "kirsten" && sign === "gemini") {
    output.innerText = `Hello, ${name.charAt(0).toUpperCase() + name.slice(1)}! ✨ You are a cosmic *special edition* good egg 🌟🥚💖`;
    return;
  }

  // Normal rules
  if (goodEggs.includes(sign)) {
    output.innerText = `Hello, ${name.charAt(0).toUpperCase() + name.slice(1)}! You are a good egg 💖`;
  } else {
    output.innerText = `Hello, ${name.charAt(0).toUpperCase() + name.slice(1)}! You are a bad egg 👿`;
  }
}
