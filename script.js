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
animacao

