$(".banner-slider").slick({
    fade: true,
    autoplay: true,
    prevArrow: '<i class="fas fa-arrow-circle-left prev"></i>',
    nextArrow: '<i class="fas fa-arrow-circle-right next"></i>',
})

$(".service-slider").slick({
    vertical: true,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "0",
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical: false
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            vertical: false
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
})

$(".testi-slider").slick({
    vertical: true,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: "0",
    asNavFor: ".text-slider",
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            vertical: false
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            vertical: false
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            vertical: false
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
})

$(".text-slider").slick({
    slidesToShow: 1,
    asNavFor:".testi-slider",
    arrows: false
})

$(".sponsor-slider").slick({
    slidesToShow: 5,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
})

$('.counter').counterUp({
    delay: 10,
    time: 1000
});

$('.venobox').venobox();