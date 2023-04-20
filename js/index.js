//Нужные узлы
const popupButton = document.querySelector('.popup-menu__button');
const popupWrapper = document.querySelector('.popup-menu');
const popupMenu = document.querySelector('.popup-menu__list');
//Клик по кнопке
popupButton.addEventListener('click', hendleMenu);
//Показывает и скрывает поп-ап
function hendleMenu() {
    popupMenu.classList.toggle('hide-popup');
}
//клик в любом месте экрана
document.addEventListener('click', hidePopup);
function hidePopup(el) {
    //Проверка, есть ли внутри того, по чему кликнули поп-ап меню или кнопка
    let targetInside = popupWrapper.contains(el.target);
    //Если нет, то прячем меню
    if (!targetInside) {
        popupMenu.classList.add('hide-popup');
    }
    else {
        return;
    }
}

