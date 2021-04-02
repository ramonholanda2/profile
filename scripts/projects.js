const data = [
    {
        id: 1,
        nome: 'Rastreador de covid-19',
        sobre: 'É utilizado uma api para identificar todos os casos de covid-19 de forma global e local, sendo possível especificar o país gerando um gráfico utilizando o material ui do react junto com o react-chartjs-2, detalhando os efeitos do vírus, tais como mortes, infectados e recuperados',
        image1: '../pages/imgs/project1/covid1.png',
        link: '#'
    },
    {
        id: 2,
        nome: '',
        sobre: '',
        image1: '',
        link: '#'
    },
    {
        id: 3,
        nome: '',
        sobre: '',
        image1: '',
        link: '#'
    },
    {
        id: 4,
        nome: '',
        sobre: '',
        image1: '',
        link: '#'
    },
    {
        id: 5,
        nome: '',
        sobre: '',
        image1: '',
        link: '#'
    },
    {
        id: 6,
        nome: '',
        sobre: '',
        image1: '',
        link: '#'
    },
    
    
]

const gridProjects = document.querySelectorAll('.grid-projects div');
const projectDetails = document.getElementById('project-details');


for(let i=0; i<gridProjects.length; i++) {
    gridProjects[i].addEventListener('click', () => {
        mostrar(i)
    })
}

function mostrar(i) {
    data.map((project) => {
       if(project.id-1 === i) {
           projectDetails.innerHTML = 
           `<div class='project-details'>
                <button id="close-btn"><i class="fas fa-times"></i></button>
                <div class='project'>
                    <h1>${project.nome}</h1>
                    <div class='details'>
                        <div class='images'>
                            <img src='${project.image1}' />
                        </div>
                        <div class='detail'>
                            <h3>${project.sobre}</h3>
                            <a href='${project.link}'>Link para o repositorio</a>
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
    projectDetails.innerHTML = ''
}