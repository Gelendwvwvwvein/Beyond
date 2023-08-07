(function () {
    const Navigation = document.querySelector('.Navigation');
    window.onscroll = () => {
        if (window.scrollY > 3) {
            Navigation.classList.add('Navigation_active');
        } else {
            Navigation.classList.remove('Navigation_active');
        }
    };
}());
