$ (function () {

  function addDarkmodeWidget() {
    new Darkmode({
      bottom: '70px',
      mixColor: '#fff',
      label: '🌓',
    }).showWidget();
  }
  window.addEventListener('load', addDarkmodeWidget);

    $('.multiple-items').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 950,
        Delay: 200,
        arrows: false,
      });


    // *LATEST PRODUCTS SILDER INIT
    $('.productSlider').slick({
      slidesToShow: 4,
      dots: false,
      autoplay: true,
      autoplaySpeed: 2000,
      infinite: true,
      arrows: true,
      prevArrow: `.leftArrow`,
      nextArrow: `.rightArrow`,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 991,
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
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    })


    // *DEAL OF THE DAY SILDER INIT
    $('.timer').countdown('2024/02/10', function(event) {
      $(".timer .Days").html(event.strftime(' %D '));
      $(".timer .Hour").html(event.strftime(' %H '));
      $(".timer .min").html(event.strftime(' %M '));
      $(".timer .sec").html(event.strftime(' %S '));
    });
            


    $('.dealSlider').slick({
      infinite: true,
      arrows: false,
      autoplay: false,
      speed: 1000,
      slidesToShow: 2,
      slidesToScroll: 2,
      dots: true,
      dotsClass: 'mySliderDots',
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
          }
        }
      ]
    })

    // *SPACIAL OFFER INIT
    new VenoBox({
      selector: '.homeVbox',
  });

    // *LATEST NEWS STARTS HERE
    $('.newsSlider').slick({
      slidesToShow: 4,
      dots: true,
      dotsClass: `mySliderDots`,
      autoplay: true,
      autoplaySpeed: 2000,
      infinite: true,
      slidesToScroll: 2,
      arrows: false,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false
          }
        }
      ]
    })
    

    // *SECOND PAGE STARTS

    // *ABOUT LEADERSHIP INIT
    $('.aboutLeaderSlider').slick({
      slidesToShow: 4,
      dots: false,
      autoplay: true,
      autoplaySpeed: 2000,
      infinite: true,
      arrows: true,
      prevArrow: `.leftArrow`,
      nextArrow: `.rightArrow`,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 991,
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
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    })
})


const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
