function checkSign() {
  const name = document.getElementById("name").value;
  const sign = document.getElementById("sign").value.toLowerCase();
  const output = document.getElementById("output");

  const goodEggs = ["virgo", "taurus", "pisces", "leo", "aries"];

  if (!name || !sign) {
    output.innerText = "Please enter both your name and your sign!";
    return;
  }

  if (goodEggs.includes(sign)) {
    output.innerText = `Hello, ${name}! You are a good egg 💖`;
  } else {
    output.innerText = `Hello, ${name}! You are a bad egg 👿`;
  }
}