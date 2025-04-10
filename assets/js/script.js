/* -----------------------------------------------------------------------------



File:           JS Core
Version:        1.0
Last change:    00/00/00 
-------------------------------------------------------------------------------- */
;(function($) {

	"use strict";

	gsap.config({
		nullTargetWarn: false,
	});

// lenis-smooth-scroll
	const lenis = new Lenis({
		duration: .9, 
		easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
		direction: 'vertical', 
		smooth: true, 
		smoothTouch: false, 
	});

	function raf(time) {
		lenis.raf(time);
		requestAnimationFrame(raf);
	}
	requestAnimationFrame(raf);

	if($('.wow').length){
		var wow = new WOW({
			boxClass:     'wow',
			animateClass: 'animated',
			offset:       0,
			mobile:       true,
			live:         true
		});
		wow.init();
	};
	jQuery('.video_box').magnificPopup({
		disableOn: 200,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false,
	});
	function TXTheaderSticky() {
		var $window = $(window);
		var lastScrollTop = 0;
		var $header = $('.txa_sticky_header');
		var headerHeight = $header.outerHeight() + 30;

		$window.scroll(function () {
			var windowTop = $window.scrollTop();

			if (windowTop >= headerHeight) {
				$header.addClass('txa_sticky');
			} else {
				$header.removeClass('txa_sticky');
				$header.removeClass('txa_sticky_show');
			}

			if ($header.hasClass('txa_sticky')) {
				if (windowTop < lastScrollTop) {
					$header.addClass('txa_sticky_show');
				} else {
					$header.removeClass('txa_sticky_show');
				}
			}

			lastScrollTop = windowTop;
		});
	}
	TXTheaderSticky();
	$(window).on("scroll", function() {
		if ($(this).scrollTop() > 200) {
			$('.ed-scrollup').fadeIn();
		} else {
			$('.ed-scrollup').fadeOut();
		}
	});
	$('.ed-scrollup').on("click", function()  {
		$("html, body").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
	$('.cart_close_btn, .body-overlay').on('click', function () {
		$('.cart_sidebar').removeClass('active');
		$('.body-overlay').removeClass('active');
	});

	$('.header-cart-btn').on('click', function () {
		$('.cart_sidebar').addClass('active');
		$('.body-overlay').addClass('active');
	});
	$('.open_mobile_menu').on("click", function() {
		$('.mobile_menu_wrap').toggleClass("mobile_menu_on");
	});
	$('.open_mobile_menu').on('click', function () {
		$('body').toggleClass('mobile_menu_overlay_on');
	});
	jQuery(".mobile-main-navigation li.dropdown").append('<span class="dropdown-btn"><i class="fas fa-angle-down"></i></span>'),
	jQuery(".mobile-main-navigation li .dropdown-btn").on("click", function () {
		jQuery(this).hasClass("active")
		? (jQuery(this).closest("ul").find(".dropdown-btn.active").toggleClass("active"), jQuery(this).closest("ul").find(".dropdown-menu.active").toggleClass("active").slideToggle())
		: (jQuery(this).closest("ul").find(".dropdown-btn.active").toggleClass("active"),
			jQuery(this).closest("ul").find(".dropdown-menu.active").toggleClass("active").slideToggle(),
			jQuery(this).toggleClass("active"),
			jQuery(this).parent().find("> .dropdown-menu").toggleClass("active"),
			jQuery(this).parent().find("> .dropdown-menu").slideToggle());
	});
		// search-popup-start
	$('.search_btn_toggle').on('click', function() {
		$('.overlay, .search_box_active').addClass('active');
	});

	$('.overlay, .search_box_close').on('click', function() {
		$('.search_box_active').removeClass('active');
		$('.overlay').removeClass('active');
	});
	jQuery(document).ready(function (o) {
		0 < o(".navSidebar-button").length &&
		o(".navSidebar-button").on("click", function (e) {
			e.preventDefault(), e.stopPropagation(), o(".info-group").addClass("isActive");
		}),
		0 < o(".close-side-widget").length &&
		o(".close-side-widget").on("click", function (e) {
			e.preventDefault(), o(".info-group").removeClass("isActive");
		}),
		o(".xs-sidebar-widget").on("click", function (e) {
			e.stopPropagation();
		})
	});
	$('.zoom-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		closeOnContentClick: false,
		closeBtnInside: false,
		mainClass: 'mfp-with-zoom mfp-img-mobile',
		gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, 
			opener: function(element) {
				return element.find('img');
			}
		}
	});
	$('.marquee-left').marquee({
		gap: 0,
		speed: 60,
		delayBeforeStart: 0,
		direction: 'left',
		duplicated: true,
		pauseOnHover: true,
		startVisible:true,
	});
	$('.marquee-right').marquee({
		gap: 0,
		speed: 60,
		delayBeforeStart: 0,
		direction: 'right',
		duplicated: true,
		pauseOnHover: true,
		startVisible:true,
	});
	// Background Image
	$('[data-background]').each(function() {
		$(this).css('background-image', 'url('+ $(this).attr('data-background') + ')');
	});

	var ltn__active_item = $('.cg-team1-list li')
	ltn__active_item.mouseover(function() {
		ltn__active_item.removeClass('active');
		$(this).addClass('active');
	});
	var ltn__active_item_1 = $('.item-pin-wrap')
	ltn__active_item_1.mouseover(function() {
		ltn__active_item_1.removeClass('active');
		$(this).addClass('active');
	});
	// windows-loaded-before-functions
	document.addEventListener("DOMContentLoaded", function () {
		window.addEventListener('load', function(){
			let preloader = document.querySelector("#preloader");
			if (preloader) {
				preloader.classList.add("preloaded");
				setTimeout(function () {
					preloader.remove();
				}, 1000 ) ;

			}
			setTimeout(function() {
				if($(".cg-hero1-slider").length) {
					var swiper3 = new Swiper(".cg-hero1-slider-nav", {
						speed: 500,
						loop: true,
						watchSlidesProgress: true,
						slideToClickedSlide: true,
						direction: 'vertical',
						breakpoints: {
							0: {
								slidesPerView: 1,
								direction: 'horizontal',
							},
							576: {
								slidesPerView: 2,
								direction: 'horizontal',
							},
							767: {
								slidesPerView: 3,
								direction: 'horizontal',
							},
							768: {
								slidesPerView: 3,
								direction: 'horizontal',
							},
							992: {
								slidesPerView: 3,

							},
						},

					});
					var swiper2 = new Swiper(".cg-hero1-slider-for", {
						speed: 500,
						loop: true,
						effect: "fade",
						fadeEffect: {
							crossFade: true
						},
						// autoplay: {
						// 	delay: 6000,
						// },
						thumbs: {
							swiper: swiper3,
						},

					});
				}
			}, 700);
		})
	});
	if($(".cg-cta1-card-slide").length) {
		var swiper3 = new Swiper(".cg-cta1-card-slide", {
			speed: 1000,
			loop: true,
			spaceBetween: 20,
			navigation: {
				nextEl: ".cg-cta1-next",
				prevEl: ".cg-cta1-prev",
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				576: {
					slidesPerView: 2,
				},
				768: {
					slidesPerView: 3,
				},
				992: {
					slidesPerView: 3,
				},
				1200: {
					slidesPerView: 3,
				},
				1400: {
					slidesPerView: 3,
				},
				1600: {
					slidesPerView: 3,
				},
			},

		});
	}

	// Testimonial Slide 4
	if($(".cg-testi-slider").length) {
		const swiper = new Swiper(".cg-testi-slider" , {
			speed: 500,
			spaceBetween: 30,
			loop: true,
			autoplay:  {
				delay: 5000,
			},
			pagination: {
				el: ".cg-testi-pagi",
				clickable: true,
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				576: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 1,
				},
				992: {
					slidesPerView: 1,
				},
				1200: {
					slidesPerView: 3,
				},
				1400: {
					slidesPerView: 3,
				},
				1600: {
					slidesPerView: 3,
				},
				1800: {
					slidesPerView: 4,
				},
			},
		})
	}
})(jQuery);