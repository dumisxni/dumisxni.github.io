const toogleBtn = document.querySelector('.toogle_btn');    
const toogleBtnIcon = document.querySelector('.toogle_btn i');
const dropdownMenu = document.querySelector('.dropdown_menu');

toogleBtn.onclick = function() {
    dropdownMenu.classList.toggle('open');
    const isOpen = dropdownMenu.classList.contains('open');

    toogleBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars';
};
