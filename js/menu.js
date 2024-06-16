(function (){

    const openButton=document.querySelector('.nav__menu');
    const menu=document.querySelector('.nav__link');
    const closeMenu=document.querySelector('.nav__close');
    const close1=document.querySelector('.nav__links');
    const close2=document.querySelector('.nav__links2');
    const close3=document.querySelector('.nav__links3');
    const close4=document.querySelector('.nav__links4');

    openButton.addEventListener('click',()=>{
        menu.classList.add('nav__link--show');});

        closeMenu.addEventListener('click',()=>{
            menu.classList.remove('nav__link--show');
        });

        close1.addEventListener('click',()=>{
            menu.classList.remove('nav__link--show');
        });
        close2.addEventListener('click',()=>{
            menu.classList.remove('nav__link--show');
        });
        close3.addEventListener('click',()=>{
            menu.classList.remove('nav__link--show');
        });
        close4.addEventListener('click',()=>{
            menu.classList.remove('nav__link--show');
        });








})();