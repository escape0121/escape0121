
function startGame() {
    document.body.classList.add('fade-out'); 
    setTimeout(function () {
        window.location.href = "1.html"; 
    }, 2300); 
}
Splitting();

// GSAP BABY!
gsap.from('.char', {
    rotateY: 180,
    opacity: 0,
    stagger: {
        amount: 1,
    }, 
    duration: 1,
    ease: 'power3.Out',
})
