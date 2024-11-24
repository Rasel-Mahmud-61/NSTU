;
(function() {

    'use strict';

    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };


    var contentWayPoint = function() {
        var i = 0;
        $('.animate-box').waypoint(function(direction) {

            if (direction === 'down' && !$(this.element).hasClass('animated-fast')) {

                i++;

                $(this.element).addClass('item-animate');
                setTimeout(function() {

                    $('body .animate-box.item-animate').each(function(k) {
                        var el = $(this);
                        setTimeout(function() {
                            var effect = el.data('animate-effect');
                            if (effect === 'fadeIn') {
                                el.addClass('fadeIn animated-fast');
                            } else if (effect === 'fadeInLeft') {
                                el.addClass('fadeInLeft animated-fast');
                            } else if (effect === 'fadeInRight') {
                                el.addClass('fadeInRight animated-fast');
                            } else {
                                el.addClass('fadeInUp animated-fast');
                            }

                            el.removeClass('item-animate');
                        }, k * 200, 'easeInOutExpo');
                    });

                }, 100);

            }

        }, {
            offset: '85%'
        });
    };


    var dropdown = function() {

        $('.has-dropdown').toggle(function() {

            var $this = $(this);
            $this
                .find('.dropdown')
                .css('display', 'block')
                .addClass('animated-fast fadeInUpMenu');

        }).mouseleave(function() {
            var $this = $(this);

            $this
                .find('.dropdown')
                .css('display', 'none')
                .removeClass('animated-fast fadeInUpMenu');
        });

    };


    var goToTop = function() {

        $('.js-gotop').on('click', function(event) {

            event.preventDefault();

            $('html, body').animate({
                scrollTop: $('html').offset().top
            }, 500, 'easeInOutExpo');

            return false;
        });

        $(window).scroll(function() {

            var $win = $(window);
            if ($win.scrollTop() > 200) {
                $('.js-top').addClass('active');
            } else {
                $('.js-top').removeClass('active');
            }

        });

    };


    // Loading page
    var loaderPage = function() {
        $(".colorlib-loader").fadeOut("slow");
    };

    var counter = function() {
        $('.js-counter').countTo({
            formatter: function(value, options) {
                return value.toFixed(options.decimals);
            },
        });
    };


    var counterWayPoint = function() {
        if ($('#colorlib-counter').length > 0) {
            $('#colorlib-counter').waypoint(function(direction) {

                if (direction === 'down' && !$(this.element).hasClass('animated')) {
                    setTimeout(counter, 400);
                    $(this.element).addClass('animated');
                }
            }, {
                offset: '90%'
            });
        }
    };

    var sliderMain = function() {

        $('#colorlib-hero .flexslider').flexslider({
            animation: "fade",
            //
            //			  easing: "swing",
            //			  direction: "vertical",

            slideshowSpeed: 5000,
            directionNav: true,
            //            controlNav: true,
            prevText: '',
            nextText: '',
            start: function() {
                setTimeout(function() {
                    $('.slider-text').removeClass('animated fadeInUp');
                    $('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
                }, 500);
            },
            before: function() {
                setTimeout(function() {
                    $('.slider-text').removeClass('animated fadeInUp');
                    $('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
                }, 500);
            }

        });

    };



    var parallax = function() {

        if (!isMobile.any()) {
            $(window).stellar({
                horizontalScrolling: false,
                hideDistantElements: false,
                responsive: true

            });
        }
    };

    // Slider
    var sliderDepartment = function() {
        var owl = $('.sliderDepartment');
        owl.owlCarousel({
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            autoplay: true,
            items: 1,
            autoHeight: false,
            loop: true,
            margin: 0,
            responsiveClass: true,
            nav: false,
            dots: true,
            autoplayHoverPause: true,
            mouseDrag: false,
            smartSpeed: 300,
            //         navText: [
            //    "<i class='icon-arrow-left3 owl-direction'></i>",
            //    "<i class='icon-arrow-right3 owl-direction'></i>"
            //  	]
        });

    };


    // News
    var owlCrouselFeatureSlide = function() {
        var owl = $('.news-carousel');
        owl.owlCarousel({
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            items: 4,
            loop: true,
            margin: 10,
            autoplay: true,
            autoplayTimeout: 1000,
            autoplayHoverPause: true,
            autoHeight: true,
            margin: 0,
            responsiveClass: true,
            nav: true,
            dots: false,
            smartSpeed: 500,
            mouseDrag: false,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                600: {
                    items: 3,
                    nav: true
                },
                1000: {
                    items: 4,
                    nav: true
                }
            },
            navText: [
                "<i class='icon-arrow-left3 owl-direction'></i>",
                "<i class='icon-arrow-right3 owl-direction'></i>"
            ],
        });

    };

    //------- Lightbox  js --------//  

    $('.img-gal').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $('.play-btn').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    //------- Header Scroll Class  js --------//  

    // $(window).scroll(function () {
    //     // console.log(scrollTop());
    //     if ($(this).scrollTop() > 100) {
    //         $('.top-menu').addClass('sticky');
    //     } else {
    //         $('.top-menu').removeClass('sticky');
    //     }



    //     if ($( window ).width() > 768) {
    //       $('.top-menu').removeClass('sticky');
    //       }

    //       if ($(window).width() <= 768) { 
    //         $('.top-menu').addClass('sticky');
    //       }
    // });

    //------- side menu --------//  

    $(".has-sub-side").on('click', function(event) {


        if ($(this).hasClass('open')) {

            $(this).removeClass('open');
        } else {
            $(this).addClass('open');
        };



        event.preventDefault();

    });



    //------- Notice Tabs --------//  
    $(".nav-tabs a").click(function() {
        $(this).tab('show');
    });

    $(function() {
        contentWayPoint();
        sliderMain();
        sliderDepartment();
        dropdown();
        goToTop();
        loaderPage();
        counter();
        counterWayPoint();
        parallax();
        owlCrouselFeatureSlide();
    });




    /**
     * jQuery Expanding Grid plugin.
     *
     * By Dan Boulet - https://danboulet.com
     */
    (function($, window, document) {

        // Enable strict mode
        "use strict";

        /**
         * Return the last element in the current row of a grid layout.
         */
        var getLastSiblingInRow = function(element) {
            var candidate = element,
                elementTop = element.offsetTop;

            // Loop through the element’s next siblings and look for the first one which
            // is positioned further down the page.
            while (candidate.nextElementSibling !== null) {
                if (candidate.nextElementSibling.offsetTop > elementTop) {
                    return candidate;
                }
                candidate = candidate.nextElementSibling;
            }
            return candidate;
        };

        /**
         * Calculate the distance that we need to scroll the page to bring a
         * section, defined as the area between the top and bottom, into view.
         */
        var calculatePageScrollDistance = function(top, bottom) {
            var windowScrollDistance = $(window).scrollTop(),
                windowHeight = $(window).height(),
                scrollDistanceToTop,
                scrollDistanceToBottom;

            // Scroll to the top of the section if the we are already scrolled past it.
            if (windowScrollDistance >= top) {
                return top - windowScrollDistance;
            }
            // Do nothing if there is enough space to show the section without having to scroll.
            else if ((windowScrollDistance + windowHeight) >= bottom) {
                return 0;
            } else {
                // Find the maximum distance we can scroll without passing the top of the section.
                scrollDistanceToTop = top - windowScrollDistance;
                // Find the distance we need to scroll to reveal the entire section.
                scrollDistanceToBottom = bottom - (windowScrollDistance + windowHeight);

                return Math.min(scrollDistanceToTop, scrollDistanceToBottom);
            }
        };

        /**
         * Create the expanding preview grid.
         */
        var expandingGrid = function(context, options) {
            var defaults = {
                animationDuration: 250,
                linksSelector: '.links a',
                expandingAreaSelector: '.expanding-container',
                closeButtonMarkup: '<a href="#" class="close-button">Close</a>',
                spacerMarkup: '<span class="spacer" aria-hidden="true"/>',
                elementActiveClass: 'active',
                elementExpandedClass: 'expanded',
                onExpandBefore: false,
                onExpandAfter: false
            };

            var settings = $.extend({}, defaults, options);

            var isExpanded = false;
            var activeLink = false;
            var activeExpandedArea = false;
            var activeExpandedAreaTop = false;
            var activeExpandedAreaHeight = false;
            var lastItemInActiveRow = false;
            var activeRowChanged = false;
            var checkExpandedAreaResize = false;
            var $links = $(settings.linksSelector, context);
            var $expandingAreas = $(settings.expandingAreaSelector, context);
            var $closeButton = $(settings.closeButtonMarkup);
            var $spacer = $(settings.spacerMarkup);
            var $secondarySpacer = $spacer.clone();

            /**
             * Scroll a section of the page into view, using animation.
             */
            var scrollSectionIntoView = function(top, bottom, duration, callback) {
                var animate;
                var scroll = 0;
                var distance = calculatePageScrollDistance(top, bottom);
                var windowScrollDistance = $(window).scrollTop();
                var timeLeft;

                // Set default duration.
                duration = (typeof duration === 'undefined') ? settings.animationDuration : duration;
                timeLeft = duration;

                var start = new Date().getTime();
                var last = start;
                var tick = function() {
                    timeLeft = Math.max(duration - (new Date() - start), 0);

                    var x = (timeLeft === 0 || distance === 0) ? 0 : ((new Date() - last) / timeLeft * distance);
                    var diff = (distance > 0 ? Math.min(x, distance) : Math.max(x, distance));
                    distance = distance - diff;
                    scroll += diff;
                    window.scrollTo(0, windowScrollDistance + scroll);

                    last = new Date().getTime();

                    if (last - start <= duration) {
                        animate = (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16);
                    } else {
                        if (typeof callback === 'function') {
                            callback();
                        }
                    }
                };

                tick();
            };

            // Process the links.
            $links.each(function() {
                var $this = $(this);
                var targetId = $this.attr('href').match(/#([^\?]+)/)[1];
                var target = document.getElementById(targetId);

                if (target) {
                    $this.click(function(event) {
                        var clickedLink = this;
                        var scrollTargetOffset;
                        var closeButtonAnimationDelay;

                        event.preventDefault();

                        // Is this link already expanded?
                        if (isExpanded && activeLink === clickedLink) {
                            // Close it.
                            $closeButton.click();
                        }
                        // Otherwise, expand it.
                        else {
                            $links.removeClass(settings.elementActiveClass).filter($this).addClass(settings.elementActiveClass).parent('li').each(function() {
                                var lastSibling = getLastSiblingInRow(this);
                                activeRowChanged = lastSibling !== lastItemInActiveRow;
                                if (activeRowChanged) {
                                    lastItemInActiveRow = lastSibling;
                                }
                                // If we are changing rows, replace spacer with secondary spacer.
                                if (isExpanded && activeRowChanged) {
                                    $secondarySpacer.height($spacer.height());
                                    $spacer.height(0).replaceWith($secondarySpacer);
                                }
                                $(lastItemInActiveRow).after($spacer);
                            });
                            if (isExpanded && activeRowChanged) {
                                $secondarySpacer.animate({
                                    height: 0
                                }, settings.animationDuration, function() {
                                    $(this).detach();
                                });
                                $closeButton.removeClass(settings.elementActiveClass).hide();
                            }
                            scrollTargetOffset = ($secondarySpacer.position().top < $spacer.position().top ? $secondarySpacer.height() : 0);
                            activeExpandedAreaTop = ($spacer.position().top - scrollTargetOffset);
                            $expandingAreas.removeClass(settings.elementExpandedClass).hide().filter(target).each(function() {
                                var $this = $(this);
                                var autoHeight = $this.height();
                                var autoOuterHeight = $this.outerHeight();
                                var initialHeight = (isExpanded && activeExpandedAreaHeight && (activeRowChanged === false)) ? activeExpandedAreaHeight : 0;

                                stopExpandedAreaMonitor();

                                $spacer.animate({
                                    height: autoHeight + 'px'
                                }, settings.animationDuration);

                                $this.css({
                                    height: initialHeight + 'px',
                                    position: 'absolute',
                                    left: 0,
                                    top: $spacer.position().top + 'px'
                                }).show(0, function() {
                                    // Callback.
                                    if (typeof settings.onExpandBefore === 'function') {
                                        settings.onExpandBefore.call(this);
                                    }
                                }).animate({
                                    height: autoHeight + 'px',
                                    top: activeExpandedAreaTop + 'px'
                                }, settings.animationDuration, function() {
                                    $this.css({
                                        height: 'auto'
                                    }).addClass(settings.elementExpandedClass);

                                    // Set a timer to monitor changes to expanded area’s height.
                                    activeExpandedAreaHeight = $this.height();
                                    checkExpandedAreaResize = setInterval(function() {
                                        var activeExpandedAreaNewHeight = $this.height();
                                        if (activeExpandedAreaNewHeight !== activeExpandedAreaHeight) {
                                            activeExpandedAreaHeight = activeExpandedAreaNewHeight;
                                            syncExpandedAreaWithSpacer();
                                        }
                                    }, 1000);

                                    // Callback.
                                    if (typeof settings.onExpandAfter === 'function') {
                                        settings.onExpandAfter.call(this);
                                    }
                                });

                                // Scroll the page to bring the active link and preview into view.
                                var scrollTargetTop = $(clickedLink).offset().top - scrollTargetOffset;
                                var scrollTargetBottom = $this.offset().top + autoOuterHeight + 20 - scrollTargetOffset;
                                scrollSectionIntoView(scrollTargetTop, scrollTargetBottom);
                            });

                            // Activate close button.
                            closeButtonAnimationDelay = (isExpanded && activeRowChanged && ($this.parent().index() > $(activeLink).parent().index())) ? settings.animationDuration : (settings.animationDuration / 4);
                            $closeButton.css({
                                position: 'absolute',
                                right: 0,
                                top: activeExpandedAreaTop + 'px'
                            }).delay(closeButtonAnimationDelay).fadeIn(settings.animationDuration, function() {
                                $(this).addClass(settings.elementActiveClass);
                            });

                            // Set global variables.
                            activeLink = this;
                            activeExpandedArea = target;
                            isExpanded = true;
                        }
                    });
                }
            });

            // Process the close button.
            $closeButton.appendTo(context).hide().click(function(event) {
                var $activeLink = $(activeLink);
                var activeLinkTopOffset = $activeLink.offset().top;
                var activeLinkBottomOffset = activeLinkTopOffset + $activeLink.outerHeight();

                event.preventDefault();

                // DOM manipulation and animations.
                $links.removeClass(settings.elementActiveClass);
                $expandingAreas.slideUp(settings.animationDuration).removeClass(settings.elementExpandedClass);
                $closeButton.removeClass('active').hide();
                $spacer.animate({
                    height: 0
                }, settings.animationDuration, function() {
                    $spacer.detach();
                });

                // Scroll the page to bring the active link into view.
                scrollSectionIntoView(activeLinkTopOffset, activeLinkBottomOffset);

                stopExpandedAreaMonitor();

                // Reset global variables.
                isExpanded = false;
                activeLink = false;
                activeExpandedArea = false;
            });

            /**
             * Stop monitoring size of expanded area.
             */
            var stopExpandedAreaMonitor = function() {
                if (checkExpandedAreaResize) {
                    clearInterval(checkExpandedAreaResize);
                }
            };

            /**
             * Match preview and spacer in height and position.
             */
            var syncExpandedAreaWithSpacer = function() {
                if (activeExpandedArea && isExpanded) {
                    $spacer.height($(activeExpandedArea).height());
                    activeExpandedAreaTop = $spacer.position().top;
                    $closeButton.add(activeExpandedArea).css({
                        top: activeExpandedAreaTop + 'px'
                    });
                }
            };

            /**
             * Place spacer in proper position within grid.
             */
            var positionSpacer = function() {
                var lastSibling;
                if (activeLink && lastItemInActiveRow && isExpanded) {
                    // Remove spacer.
                    $spacer.detach();
                    lastSibling = getLastSiblingInRow($(activeLink).parent()[0]);
                    // Reposition spacer, if necessary.
                    if (lastItemInActiveRow !== lastSibling) {
                        console.log(lastSibling);
                        lastItemInActiveRow = lastSibling;
                    }
                    // Restore spacer.
                    $(lastItemInActiveRow).after($spacer);
                }
            };

            // React to window resize.
            $(window).resize(function() {
                if (isExpanded) {
                    positionSpacer();
                    syncExpandedAreaWithSpacer();
                }
            });
        };

        // Create the jQuery plugin.
        $.fn.expandingGrid = function(options) {
            return this.each(function() {
                expandingGrid(this, options);
            });
        };

    })(jQuery, window, document);

    $(document).ready(function() {
        $('.expanding-grid').expandingGrid();
    });


}());