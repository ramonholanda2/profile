const header = document.querySelector(".header-block");
const linkScroll = document.querySelectorAll('.header-block a[href^="#"] li');
const skills = document.querySelector('.btn1');
const front = document.getElementById('front');
const extras = document.getElementById('extras');


function positionHeader() {
    if(window.scrollY > 100) {
        header.style.background = '#3c6315'
        header.style.position = 'fixed';
        header.style.zIndex = '1';
        header.style.transition = '0.3s'
    } else {
        header.style.background = 'transparent'
    }
}


function scrollBtn(){
    setTimeout(() => {
        window.scroll(0, 650);
    }, 10);
}

linkScroll[0].addEventListener('click', scrollBtn);


function scrollBtnSkills(e){
    setTimeout(() => {
        window.scroll(0, 1250);
    }, 10);
}

linkScroll[1].addEventListener('click', scrollBtnSkills);

skills.addEventListener('click', e => {
    e.preventDefault();
    scroll2();
})

function animationSkills() {
    if(window.scrollY > 1000 && window.innerWidth > 1135) {
        front.style.display = 'flex';
        extras.style.display = 'flex';
        front.animate([
            { transform: 'translateX(-300px)' },
            { transform: 'rotate(180deg)' },
            { transform: 'rotate(120deg)' },
            { transform: 'rotate(60deg)' },
            { transform: 'rotate(0deg)' },
            { transform: 'translateX(-0px)' },
          ], {
            duration: 1500,
          });
          extras.animate([
            { transform: 'translateX(300px)' },
            { transform: 'rotate(180deg)' },
            { transform: 'rotate(120deg)' },
            { transform: 'rotate(60deg)' },
            { transform: 'rotate(0deg)' },
            { transform: 'translateX(-0px)' },
          ], {
            duration: 1500,
          });
          
        window.removeEventListener('scroll', animationSkills);
        }
}

window.addEventListener('scroll', positionHeader);
window.addEventListener('scroll', animationSkills);


