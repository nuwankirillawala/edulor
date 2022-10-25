//change navbar style

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle(
        'nav-window-scroll', window.scrollY > 0
    )
});

//show and hide faqs
const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click', ()=> {
        faq.classList.toggle('open');

        //change icon of faq
        const icon = faq.querySelector('.faq_icon i');
        if(icon.className === 'uil uil-plus'){
            icon.className = "uil uil-minus";
        }
        else{
            icon.className = "uil uil-plus";
        }
    })
})