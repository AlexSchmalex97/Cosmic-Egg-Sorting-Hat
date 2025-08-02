function checkSign() {
  const name = document.getElementById("name").value.trim();
  const sign = document.getElementById("sign").value.trim().toLowerCase();
  const output = document.getElementById("output");

  const goodEggs = ["virgo", "taurus", "pisces", "leo", "aries"];

  if (!name || !sign) {
    output.innerText = "Please enter both your name and your sign!";
    return;
  }

  // ✅ Special Kirsten rule (MUST return to stop other checks)
  if (name.toLowerCase() === "kirsten" && sign === "gemini") {
    output.innerText = `Hello, ${name}! You are a cosmic *special edition* good egg 🌟🥚💖`;
    return; // <-- stops the code here so it never reaches "bad egg"
  }

  // Normal rules
  if (goodEggs.includes(sign)) {
    output.innerText = `Hello, ${name}! You are a good egg 💖`;
  } else {
    output.innerText = `Hello, ${name}! You are a bad egg 👿`;
  }
}
