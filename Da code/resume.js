var progress = document.getElementById("progressbar");
var totalheight = document.body.scrollHeight - window.innerHeight;


window.onscroll = function(){
    var progressheight = (window.pageYOffset / totalheight) * 100;
    progress.style.height = progressheight + "%";
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

let intro = document.querySelector('.intro_splash');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', ()=>{
    setTimeout(()=>{
        
        logoSpan.forEach((span, idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            }, (idx + 1) * 400)
        });

        setTimeout(()=>{
            logoSpan.forEach((span, idx)=>{
                setTimeout(()=>{
                    span.classList.remove('active')
                    span.classList.add('fade')
                }, (idx + 1) * 50)
            })
        }, 2000)

        setTimeout(()=>{
            intro.style.top = '-100vh'
        }, 2400)

    })
})
