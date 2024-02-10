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
