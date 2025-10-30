document.addEventListener('DOMContentLoaded',()=>{
    const sr=ScrollReveal({
        distance:'60px',
        duration:2500,
        delay:400,
        reset:true
    })
    sr.reveal('.text',{delay:200,origin:'top'});
    sr.reveal('.form-container form',{delay:800,origin:'left'});
    sr.reveal('.heading',{delay:200,origin:'top'});
    sr.reveal('.service-container .box',{delay:600,origin:'top'});
    sr.reveal('.products-container .box',{delay:800,origin:'top'});
    sr.reveal('.about-container .about-text',{delay:800,origin:'top'});
    sr.reveal('.reviews-container',{delay:800,origin:'top'});
    sr.reveal('.newsletter .box',{delay:400,origin:'bottom'});
});