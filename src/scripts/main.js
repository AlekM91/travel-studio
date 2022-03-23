import '../styles/styles.scss';

if(module.hot) {
    module.hot.accept();
}

// Hamburger menu
let hamburger = document.querySelector('.hamburger');
let body = document.querySelector('body');
let mainNav = document.querySelector('.main-nav');
hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active')
    mainNav.classList.toggle('main-nav-active');
    body.classList.toggle('js-no-scroll');
})


// Animate on scroll
let sectionAnimate = document.querySelectorAll('.js-section-animate');
let sectionObserver = new IntersectionObserver(function(entries, observer){
    let [entry] = entries;
    if(!entry.isIntersecting) return
    entry.target.classList.add('js-appear')
    observer.unobserve(entry.target);
 
}, {
    root: null,
    threshold: 0.2
})

sectionAnimate.forEach(section => {
    section.classList.add('js-fade')
    sectionObserver.observe(section)
});

// Nav background
let headerObserver = document.querySelector('.section-1');
let header = document.querySelector('header')
let navHeight = header.getBoundingClientRect().height;

let navObserver = new IntersectionObserver(function(entries){
    let [entry] = entries;
    if(!entry.isIntersecting) header.classList.add('js-header');
    else header.classList.remove('js-header')
}, {
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`
})

navObserver.observe(headerObserver);

// Smooth Scroll
let navigation = document.querySelectorAll('.js-nav');
navigation.forEach(nav => nav.addEventListener('click', function(e) {
    e.preventDefault();
    if(e.target.classList.contains('nav-link')) {
        let id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({behavior: 'smooth'});
    }
    mainNav.classList.remove('main-nav-active');
    hamburger.classList.remove('hamburger-active');
    body.classList.remove('js-no-scroll');
}));



