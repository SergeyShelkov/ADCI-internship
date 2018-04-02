$(document).ready(function(){
    /* Slider height */
    var headerHeight = $("header").height(),
        windowHeight = $(window).height();

    $(".item img").css('height', windowHeight - headerHeight + 'px');

    /* Slider */
    $('.owl-carousel').owlCarousel({
        nav: false,
        dots: true,
        items: 1
    });

    /* Box in slider */
    $(".show-box-btn").click(function(){
        $(".box-info").slideToggle(500);
		$(".show-box-btn").toggleClass("hide-box-btn");
    });
});

