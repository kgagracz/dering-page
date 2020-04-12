window.addEventListener('DOMContentLoaded', function() {
    // NAVBAR 
    const backgrounds = [document.querySelectorAll('.main-nav'), document.querySelectorAll('.description')];

    let navAnimeTl = anime.timeline()
    .add({
        easing: 'easeOutElastic',
        targets: '.main-nav__item',
        translateY: [-100, 0],
        delay: anime.stagger(100),
    })
    .add({
        targets: backgrounds,
        background: 'rgba(0, 0, 0, 0.07)',
        easing: 'linear',
    });
    let descriptionAnime = anime({
        targets: '.description',
        left: [-1000, 200],
        duration: '1200',
    })
})


