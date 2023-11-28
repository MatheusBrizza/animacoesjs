const elemento = document.getElementById("animacao-girar")
const animacao = document.getElementById("animacao-girar").animate(
  [
    // keyframes
    { transform: "rotate(0deg)" },
    { transform: "rotate(360deg)" },
  ],
  {
    // timing options
    duration: 2000,
    iterations: Infinity,
  },
);

elemento.style.backgroundColor = "green";

const elemento2 = document.getElementById("animacao-piscar")
const animacao2 = document.getElementById("animacao-piscar").animate(
  { opacity: [0, 1] },
  {
    duration: 2000,
    iterations: Infinity,
    direction: "alternate"
  },
);

elemento2.style.backgroundColor = "darkblue"

const elemento3 = document.getElementById("animacao-pulsar")
const animacao3 = document.getElementById("animacao-pulsar").animate(
  [
    { transform: "scale(1)" },
    { transform: "scale(1.2)"},
    { transform: "scale(1)"}
  ],
  {
    duration: 2000,
    iterations: Infinity
  }
)

elemento3.style.backgroundColor = "darkred"