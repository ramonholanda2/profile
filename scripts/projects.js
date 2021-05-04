const data = [
    {
        id: 1,
        nome: 'Rastreador de covid-19',
        sobre: 'É utilizado uma api para identificar todos os casos de covid-19 de forma global, sendo possível especificar o país gerando um gráfico utilizando o material ui do react junto com o react-chartjs-2, detalhando os efeitos do vírus, tais como mortes, infectados e recuperados.',
        image1: '/public/imgs/project1/covid1.png',
        link: 'https://github.com/ramonsilva2/covid-19-react',
        test: 'oi'
    },
    {
        id: 2,
        nome: 'Jogo da Forca',
        sobre: 'Este é um jogo baseado no famoso "Jogo da forca", seu objetivo é descobrir a palavra escondida com no máximo 5 erros, sendo alertado caso tente uma letra repetidas vezes, caso perca é mostrado a palavra escondida junto com um botão para jogar novamente.',
        image1: '/public/imgs/project2/forca1.png',
        link: 'https://github.com/ramonsilva2/hangman-game',
    },
    {
        id: 3,
        nome: 'Temporizador para o ano novo',
        sobre: 'Esse é um projeto feito apenas com html, css, js. Basicamente é um contador reverso mostrando quantos dias, horas, minutos e segundos faltam para 2022.',
        image1: '/public/imgs/project3/contdown.png',
        link: 'https://github.com/ramonsilva2/contdown-newYear'
    },
    {
        id: 4,
        nome: 'Perfil do Github',
        sobre: 'Neste projeto é utilidado a api do github, sendo possível pesquisar o perfil de qualquer usuário da plataforma, mostrando dados como foto, nome, seguidores, quantidade de repositórios com o nome e link dos ultimos 15 projetos',
        image1: '/public/imgs/project4/githubProfile.png',
        link: 'https://github.com/ramonsilva2/github-profiles',
    },
    {
        id: 5,
        nome: 'Login no localStorage',
        sobre: 'Este é um sistema de login feito no localStorage, é um projeto simples para treinar o react-router, usState e context api.',
        image1: '/public/imgs/project5/1login.png',
        link: 'https://github.com/ramonsilva2/Login-localStorage'
    },
    {
        id: 6,
        nome: 'pokedex',
        sobre: 'Neste projeto é utilizado a api do pokemon(pokeapi) para gerar dados gerais e individuais de cada pokemon do anime, além de ter a possibilidade de pesquisar a informações do pokemon pelo seu nome ou pelo id na pokedex.',
        image1: '/public/imgs/project6/pokedex1.png',
        link: 'https://github.com/ramonsilva2/pokemon-cards'
    },
    
    
]

const gridProjects = document.querySelector('.grid-projects');
const projectDetails = document.getElementById('project-details');


for(let i=0; i<data.length; i++){
    const projects = document.createElement('div');
    const imgs = document.createElement('img');
    imgs.src = data[i].image1

    gridProjects.appendChild(projects);
    projects.appendChild(imgs)

    projects.addEventListener('click', () => {
        mostrar(i);
    });
}

function mostrar(i) {
    data.map((project) => {
       if(project.id-1 === i) {
           projectDetails.innerHTML = 
           `<div class='project-details'>
                <button id="close-btn"><i class="fas fa-times-circle"></i></button>
                <div class='project'>
                    <h1>${project.nome}</h1>
                    <div class='details'>
                        <div class='images'>
                            <img src='${project.image1}' alt='${project.nome}' />
                        </div>
                        <div class='detail'>
                            <h3>${project.sobre}</h3>
                            <div>
                                <a target="blank" href='${project.link}'>Link do Repositório</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`
       }
    })
    const closeBtn = document.getElementById('close-btn');
    closeBtn.onclick = closeProject;
}

function closeProject() {
    const project = document.querySelector('.project');
    project.classList.add('closeProject')

    setTimeout(() => 
        projectDetails.innerHTML = null
    , 400)
}