$(function () {
    $(".header__slider").slick({
        infinite: true,
        fade: true,
        prevArrow:
            '<img class="slider-arrows slider-arrows__left" src="images/arrow-left.svg" alt=""></img>',
        nextArrow:
            '<img class="slider-arrows slider-arrows__right" src="images/arrow-right.svg" alt=""></img>',
        asNavFor: ".slider__dots",
    });

    $(".slider__dots").slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        asNavFor: ".header__slider",
    });

    $(".surf__slider").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow:
            '<img class="slider-arrows slider-arrows__left" src="images/arrow-left.svg" alt=""></img>',
        nextArrow:
            '<img class="slider-arrows slider-arrows__right" src="images/arrow-right.svg" alt=""></img>',
        asNavFor: ".slider-map",
    });

    $(".slider-map").slick({
        slidesToShow: 8,
        asNavFor: ".surf__slider",
        arrows: false,
        focusOnSelect: true,
    });
});
