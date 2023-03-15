$('.slide-content').slick({
    dots: false,
    arrows:false,
    infinite: true,
    speed:300,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
  });
  
  $('.counter').counterUp({
      delay: 10,
      time: 1000
  });