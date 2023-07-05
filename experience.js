window.addEventListener('load', function () {
    this.document.querySelector('.preloader').classList.add('loader--hidden');
});

window.addEventListener('scroll', reveal);

function reveal() {
    let reveals = document.querySelectorAll('.reveal');
    document.querySelector('#section-1').classList.add('dis');
    for (let i = 2; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        }
    }
}