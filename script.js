
function changecolor(event) {
    event.preventDefault();
    const activebutton = document.querySelectorAll('.bestdeals2__nav__element');
    activebutton.forEach((butn)=>(
        butn.classList.remove('active')
    ));
    event.target.classList.add('active');
}


function handleZoom(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const banner = entry.target;
            window.addEventListener('scroll', () => {
                const scrollY = window.scrollY;
                const scale = 1 + scrollY * 0.00010 
                banner.style.transform = `scale(${scale})`;
            });
        } else {
           
            entry.target.style.transform = 'scale(1)';
        }
    });
}


const observer = new IntersectionObserver(handleZoom, {
    threshold: 0.1 
});


const banner = document.querySelector('.banner1__mainimage');
observer.observe(banner);

///used chapgpt for this 