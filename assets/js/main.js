

    const addressBtn = document.querySelector('.info_item.info-adress');
    const locationBox = document.querySelector('.info_adress-menu');
    const closeLocationBox = document.querySelector('.info_adress-menu .close_fullscr-search');


    addressBtn.onclick = () => {
        locationBox.style.transform = 'translateX(0)';
        locationBox.style.transition = 'transform 0.3s linear';
    }

    closeLocationBox.onclick = () => {
        locationBox.style.transform = 'translateX(100%)';
    }
