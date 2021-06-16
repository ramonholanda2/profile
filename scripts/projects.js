const data = [
  {
    id: 1,
    nome: "Rastreador de covid-19",
    sobre:
      "É utilizado uma api para identificar todos os casos de covid-19 de forma global, sendo possível especificar o país gerando um gráfico utilizando o material ui do react junto com o react-chartjs-2, detalhando os efeitos do vírus, tais como mortes, infectados e recuperados.",
    image: "/public/imgs/project1/covid1.png",
    link: "https://github.com/ramonsilva2/covid-19-react",
    deploy: "https://covid-19-ramon-silva.netlify.app/"
  },
  {
    id: 2,
    nome: "Jogo da Forca",
    sobre:
      'Este é um game baseado no famoso "Jogo da forca", seu objetivo é descobrir a palavra escondida com no máximo 5 erros, sendo alertado caso tente uma letra repetidas vezes, caso perca é mostrado a palavra escondida junto com um botão para jogar novamente.',
    image: "/public/imgs/project2/forca1.png",
    link: "https://github.com/ramonsilva2/hangman-game",
    deploy: "https://handman-game.vercel.app/"
  },
  {
    id: 3,
    nome: "Temporizador para o ano novo",
    sobre:
      "Esse é um projeto feito apenas com html, css, js. Basicamente é um contador reverso mostrando quantos dias, horas, minutos e segundos faltam para 2022.",
    image: "/public/imgs/project3/contdown.png",
    link: "https://github.com/ramonsilva2/contdown-newYear",
    deploy: "https://contdown-new-year.vercel.app/"
  },
  {
    id: 4,
    nome: "Ecommerce",
    sobre:
      "Neste projeto é utilizado o firebase para realizar a parte do banco de dados e autenticação, sendo um ecommerce onde o usuário tem a possibilidade de adicionar produtos ao carrinho, fazer pesquisas e obter detalhes adicionais sobre o produto!",
    image: "/public/imgs/project4/ecommerce.png",
    link: "https://github.com/ramonsilva2/ecommerce",
    deploy: "https://ecommerce-ramon-silva.vercel.app/"
  },
  {
    id: 5,
    nome: "Relógio Pomodoro & Task list",
    sobre:
      "Este projeto é um relogio pomodoro ou seja, um contador regressivo alternando entre 25 min para trabalho e 5 min para descanso, também é possível adicionar, excluir e alterar novas tarefas.",
    image: "/public/imgs/project5/pomodoro.png",
    link: "https://github.com/ramonsilva2/pomodoro",
    deploy: "https://pomodoro-and-tasklist.vercel.app/"
  },
  {
    id: 6,
    nome: "pokedex",
    sobre:
      "Neste projeto é utilizado a api do pokemon(pokeapi) para gerar dados gerais e individuais de cada pokemon do anime, além de ter a possibilidade de pesquisar a informações do pokemon pelo seu nome ou pelo id na pokedex.",
    image: "/public/imgs/project6/pokedex1.png",
    link: "https://github.com/ramonsilva2/pokemon-cards",
    deploy: "https://pokedex-cards.vercel.app/"
  },
];

const gridProjects = document.querySelector(".grid-projects");
const projectDetails = document.getElementById("project-details");

data.forEach((project) => {
  const projects = document.createElement("div");
  const imgs = document.createElement("img");
  imgs.src = project.image;

  gridProjects.appendChild(projects);
  projects.appendChild(imgs);

  projects.addEventListener('click', () => {
    mostrar(project)
  })
});

function mostrar(project) {
      projectDetails.innerHTML = `<div class='project-details'>
                <button id="close-btn"><i class="fas fa-times-circle"></i></button>
                <div class='project'>
                    <h1>${project.nome}</h1>
                    <div class='details'>
                        <div class='images'>
                            <img src='${project.image}' alt='${project.nome}' />
                        </div>
                        <div class='detail'>
                            <h3>${project.sobre}</h3>
                            <div>
                                <a target="blank" href='${project.link}'>Repositório</a>
                                <a target="blank" href='${project.deploy}'>Deploy</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
  const closeBtn = document.getElementById("close-btn");
  closeBtn.onclick = closeProject;
}

function closeProject() {
  const project = document.querySelector(".project");
  project.classList.add("closeProject");

  setTimeout(() => (projectDetails.innerHTML = null), 400);
}
