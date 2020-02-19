$(function(){

    var mixer = mixitup('.products__inner-box');
    $('.product-slider__inner').slick({
        dots: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 4
    });

    $(".rate-star").rateYo({
        rating: 4,
        starWidth: "12px",
        readOnly: true,

      });
      


    
});