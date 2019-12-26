jQuery( function($) {
    
    var $reviewSlider  = $('.review-slider');
    var $headerElem    = $('.js-header');
    var $navToggler    = $('.js-nav-toggler');
    var $nav           = $('.js-nav');
    var $navAnchorLink = $('.js-anchor-link[href*="#"]');
    
    var settings       = {
        fixedHeader:       'fixed-header',
        navigationBtnOpen: 'nav-toggler--open',
        navigationMobile:  'nav--mobile',
        headerNavOpened:   'header-nav--opened'
    };
    
    var hideMobileNavigation = function () {
        $navToggler.removeClass(settings.navigationBtnOpen);
        $nav.removeClass(settings.navigationMobile);  
    };

    var handleFixedHeader = function () {
        var scrollTop = $(window).scrollTop();
        if ( scrollTop > 111 ) { 
            $headerElem.addClass(settings.fixedHeader);
        } else {
            $headerElem.removeClass(settings.fixedHeader);
        }
    };

    var smoothAnchorLinkScrolling = function (e) {
        e.preventDefault()
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top - $headerElem.outerHeight(),
          },
          500, 'linear'
        );
        hideMobileNavigation();
    };

    $navAnchorLink.on('click', smoothAnchorLinkScrolling);

    $navToggler.on('click', function() {
        $navToggler.toggleClass(settings.navigationBtnOpen);
        $nav.toggleClass(settings.navigationMobile);
        $headerElem.toggleClass(settings.headerNavOpened);
    });

    $(window).scroll(handleFixedHeader);

    $( window ).resize(function() {
        var windowWidth = $(window).width();
        if (windowWidth > 768) {
            hideMobileNavigation();
        };
    });

    $reviewSlider.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
    });

});