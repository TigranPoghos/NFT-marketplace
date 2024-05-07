document.addEventListener("DOMContentLoaded", function(){
    const LightMode = document.querySelector('.LightMode')
    const DarkMode = document.querySelector('.DarkMode')
    const body = document.body;
    LightMode.addEventListener('click', function(){
        body.classList.add('active')
    })
    DarkMode.addEventListener('click', function(){
        body.classList.remove('active')
    })
})