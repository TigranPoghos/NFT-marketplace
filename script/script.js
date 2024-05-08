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


    const ButtonArtwork = document.querySelector('.ButtonArtwork');
    const ButtonBook = document.querySelector('.ButtonBook');
    const bids__cards = document.querySelectorAll('.bids__card');
    const ButtonAll = document.querySelector('.ButtonAll');

    ButtonArtwork?.addEventListener('click', function() {
        bids__cards?.forEach(function(bids__card) {
            if (bids__card?.classList.contains('artwork')) {
                bids__card?.classList.remove('active');
                ButtonArtwork?.classList.add('active')
                ButtonBook?.classList.remove('active')
                ButtonAll?.classList.remove('active')
            } else {
                bids__card?.classList.add('active');
            }
        });
    });

    ButtonBook?.addEventListener('click', function() {
        bids__cards?.forEach(function(bids__card) {
            if (bids__card?.classList.contains('book')) {
                bids__card?.classList.remove('active');
                ButtonBook?.classList.add('active')
                ButtonAll?.classList.remove('active')
                ButtonArtwork?.classList.remove('active')
            } else {
                bids__card?.classList.add('active');
            }
        });
    });

    ButtonAll?.addEventListener('click', function() {
        bids__cards?.forEach(function(bids__card) {
            bids__card?.classList.remove('active');
            ButtonAll?.classList.add('active')
            ButtonArtwork?.classList.remove('active')
            ButtonBook?.classList.remove('active')
        });
    });




    //follow/unfollow
    const ActivityButtons = document.querySelectorAll('.ActivityButton');
    ActivityButtons?.forEach(ActivityButton => {
        ActivityButton?.addEventListener('click', function() {
        const hasFollowClass = ActivityButton?.classList.contains('Follow');
            if (hasFollowClass) {
                ActivityButton?.classList.remove('Follow');
                ActivityButton?.classList.add('Unfollow');
                ActivityButton.innerHTML = 'Unfollow';
            } else {
                ActivityButton?.classList.remove('Unfollow');
                ActivityButton?.classList.add('Follow');
                ActivityButton.innerHTML = 'Follow';
            }
        });
    });






    //setting
    const SettingButtons = document.querySelectorAll('.SettingButton')
    SettingButtons?.forEach(SettingButton => {
        SettingButton?.addEventListener('click', function() {
            SettingButtons?.forEach(btn => btn?.classList.remove('active'));
            SettingButton?.classList.add('active')
        })
    })




})