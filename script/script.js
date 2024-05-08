document.addEventListener("DOMContentLoaded", function(){

    //светлый и тёмный режимы
    const LightMode = document.querySelector('.LightMode');
    const DarkMode = document.querySelector('.DarkMode');
    const body = document.body;
    const isLightMode = localStorage.getItem('theme') === 'dark';
    if (!isLightMode) {
        body.classList.add('active');
    }
    LightMode.addEventListener('click', function() {
        localStorage.setItem('theme', 'light');
        body.classList.add('active');
    });
    DarkMode.addEventListener('click', function() {
        localStorage.setItem('theme', 'dark');
        body.classList.remove('active');
    });






    //удаление строк таблицы
    const DeleteButtons = document.querySelectorAll('.ActiveDelete');
    DeleteButtons?.forEach(function(button) {
        button.addEventListener('click', function() {
            const Activetable = button.closest('.ActiveTable');
            if (Activetable) {
                Activetable?.classList.add('active');
            }
        });
    });
})