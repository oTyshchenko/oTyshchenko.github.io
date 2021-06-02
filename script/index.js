const gamburger = document.getElementById('gamburger');
const myDropdown = document.getElementById('myDropdown');

const openMenu = () => {
    if (myDropdown.dataset.number === '0') {
        myDropdown.style.display ='block';
        myDropdown.dataset.number = 1;
        gamburger.src = '/img/cross.png';
    } else {
        myDropdown.style.display ='none';
        myDropdown.dataset.number = 0;
        gamburger.src = '/img/gamburger.png';
    }
}

gamburgerBox.addEventListener('click',  openMenu);




const brandSlider = () => {
$('.brand-box').slick({

    responsive: [

        {
            breakpoint: 2500,
            settings:'unslick'
    
        },
        {
            breakpoint: 1100,
            settings: {
                infinite: true,
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                variableWidth: true,
                swipeToSlide: true
            }
        },

        ]
    
    });
};
brandSlider();

const goodsSlider = () => {
    $('.new-goods-product-box').slick({
    
        responsive: [
    
            {
                breakpoint: 2500,
                settings:'unslick'
        
            },
            {
                breakpoint: 1200,
                settings: {
                    infinite: true,
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    variableWidth: true,
                    swipeToSlide: true
                }
            },
    
            ]
        
        });
};
goodsSlider();


const gg = () => {
    $('.product-box').slick({
    
        responsive: [
    
            {
                breakpoint: 2500,
                settings:'unslick'
        
            },
            {
                breakpoint: 800,
                settings: {
                    infinite: true,
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    variableWidth: true,
                    swipeToSlide: true
                }
            },
    
            ]
        
        });
            if (document.documentElement.clientWidth >= 801) {
                $('.product-box').slick("unslick");
    } 
};
gg();

const windowSizeCheck = () => {
    if (document.documentElement.clientWidth >= 769) {
        myDropdown.style.display ='none';
    } else {
        myDropdown.dataset.number = 0;
        gamburger.src = '/img/gamburger.png';
    }

    if (document.documentElement.clientWidth <= 1200) {
        brandSlider()
    } else {
        $('.brand-box').slick("unslick");
    }

    if (document.documentElement.clientWidth <= 1200) {
        goodsSlider()
    } else {
        $('.new-goods-product-box').slick("unslick");
    }

};

window.addEventListener('resize', windowSizeCheck);
window.addEventListener('resize', gg);
