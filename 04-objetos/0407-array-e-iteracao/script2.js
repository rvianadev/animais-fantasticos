// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

const cursos = document.querySelectorAll(".curso");
const arrayCursos = Array.from(cursos);

const objetoCursos = arrayCursos.map((curso) => {
  const titulo = curso.querySelector("h1").innerText;
  const descricao = curso.querySelector("p").innerText;
  const aulas = curso.querySelector(".aulas").innerText;
  const horas = curso.querySelector(".horas").innerText;

  return {
    titulo,
    descricao,
    aulas,
    horas,
  };
});

console.log(objetoCursos);

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true

// Retorne o valor total das compras
const compras = [
  {
    item: "Banana",
    preco: "R$ 4,99",
  },
  {
    item: "Ovo",
    preco: "R$ 2,99",
  },
  {
    item: "Carne",
    preco: "R$ 25,49",
  },
  {
    item: "Refrigerante",
    preco: "R$ 5,35",
  },
  {
    item: "Queijo",
    preco: "R$ 10,60",
  },
  {
    item: "Arroz",
    preco: "R$ 5,50",
  },
];

const total = compras.reduce((acc, compra) => {
  let preco = +compra.preco.replace("R$", "").replace(",", ".").trim();

  return acc + preco;
}, 0);

console.log(total);
