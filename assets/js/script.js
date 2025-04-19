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
		duration: 1.3, 
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
		var headerHeight = $header.outerHeight() - 30;

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
			$('.cg-scrollup').fadeIn();
		} else {
			$('.cg-scrollup').fadeOut();
		}
	});
	$('.cg-scrollup').on("click", function()  {
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
	$('.item-pin-group').each(function () {
		var group = $(this);
		var items = group.find('.item-pin-wrap');

		items.mouseover(function () {
			items.removeClass('active');
			$(this).addClass('active');
		});
	});
	var ltn__active_item_1 = $('.cg-why-c-list')
	ltn__active_item_1.mouseover(function() {
		ltn__active_item_1.removeClass('active');
		$(this).addClass('active');
	});
	if($('.cg-split-1').length) {
		var txtSplit = $('.cg-split-1');
		if(txtSplit.length == 0) return; gsap.registerPlugin(SplitText); txtSplit.each(function(index, el) {
			el.split = new SplitText(el, { 
				type: "words",
				wordsClass: "split-word"
			});
		});
	}
	// counter-activation
	$('.counter').counterUp({
		delay: 10,
		time: 5000
	});
	$('#team2tab .nav-link').hover(function() {
		$(this).tab('show');
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
						autoplay: {
							delay: 6000,
						},
						thumbs: {
							swiper: swiper3,
						},

					});
				}
				const Cgh2 = gsap.timeline();
				Cgh2
				.from(".cg-hero2-img .item-img img", {  scale: 3, yPercent: 10, xPercent: -10, duration: 6, transformOrigin: "top",   ease: "power2.inOut" },"<=-3.5")
				.from(".cg-hero2-text .hero_slug", {  scale: 1, x: 300, opacity: 0, borderRadius: 0, duration: 1.5,  ease: "power2.inOut" },"<=4.5")
				.from(".cg-hero2-content .cg-h2-img", {  scale: 1, yPercent: -100, opacity: 0, borderRadius: 0, duration: 2.5,  ease: "power2.inOut" }, "<=.2")
				.from(".cg-hero2-text-wrap .cg-btn-1", {  scale: 1, yPercent: -100, opacity: 0, borderRadius: 0, duration: 1,  ease: "bounce.out" }, "<=.7")
				.from(".cg-hero2-content .cg-h2-img2", {  scale: 1, yPercent: -200, xPercent: 50, rotate: "-90deg", opacity: 0, borderRadius: 0, duration: 8,  ease: "elastic.out(1,0.3)" },"<=-1");
				if($(".cg-hero-txt2").length) {
					var AGTTitleAni = $(".cg-hero-txt2");
					if(AGTTitleAni.length == 0) return; gsap.registerPlugin(SplitText); AGTTitleAni.each(function(index, el) {

						el.split = new SplitText(el, { 
							type: "lines,words,chars",
							linesClass: "split-line"
						});

						gsap.set(el, { perspective: 400 });

						if( $(el).hasClass('hero_title') ){
							gsap.set(el.split.chars, {
								y: -100,
								opacity: 0,
							});
						}
						el.anim = gsap.to(el.split.chars, {
							scrollTrigger: {
								trigger: el,
								start: "top 90%",
								end: "top -100%",
								toggleActions: "play reverse play reverse",
								markers: false,
							},
							x: 0,
							y: 0,
							scaleX: 1,
							opacity: 1,
							duration: 1,
							stagger: .1,
							delay: .1,
							ease: "bounce.out",
						});

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

	// Project Slider		
	if($(".cg-project2-slider").length) {
		const swiper = new Swiper(".cg-project2-slider" , {
			speed: 500,
			loop: true,
			spaceBetween: 0,
			autoplay:  {
				delay: 5000,
			},
			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				576: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 2,
				},
				1024: {
					slidesPerView: 2,
				},
				1199: {
					slidesPerView: 3,
				},
				1400: {
					slidesPerView: 3,
				},
				1600: {
					slidesPerView: 4,
				},
				1800: {
					slidesPerView: 4,
				},
			},
		})
	}	
	// Testimonial Slider		
	if($(".cg-testi2-slider").length) {
		const swiper = new Swiper(".cg-testi2-slider" , {
			speed: 500,
			loop: true,
			spaceBetween: 0,
			effect: "fade",
			fadeEffect: {
				crossFade: true
			},
			slidesPerView: 1,
			navigation: {
				nextEl: ".cg-testi2-next",
				prevEl: ".cg-testi2-prev",
			},
		})
	}
	// Service Skider
	if($(".cg-service3-slider").length) {
		var swiper3 = new Swiper(".cg-service3-slider", {
			speed: 1000,
			loop: true,
			spaceBetween: 25,
			centeredSlides: true,
			// autoplay:  {
			// 	delay: 5000,
			// },
			navigation: {
				nextEl: ".cg-ser3-next",
				prevEl: ".cg-ser3-prev",
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
				1300: {
					slidesPerView: 3,
				},
				1600: {
					slidesPerView: 3,
				},
			},

		});
	}	
	if($('.cg-sub-tilte').length) {
		var agtsub = $(".cg-sub-tilte");

		if(agtsub.length == 0) return; gsap.registerPlugin(SplitText); agtsub.each(function(index, el) {
			
			el.split = new SplitText(el, { 
				type: "lines,words,chars",
				linesClass: "split-line"
			});
			
			if( $(el).hasClass('cg-sub-anim') ){
				gsap.set(el.split.chars, {
					opacity: 0,
					y: "-7",
				});
			}
			
			el.anim = gsap.to(el.split.chars, {
				scrollTrigger: {
					trigger: el,
					start: "top 90%",
					end: "top 60%",
					markers: false,
					scrub: 1,
				},

				x: "0",
				y: "0",
				opacity: 1,
				duration: .7,
				stagger: 0.2,
			});
			
		});
	}
	if($('.cg-sec-title').length) {
		var edtitle = $(".cg-sec-title");

		if(edtitle.length == 0) return; gsap.registerPlugin(SplitText); edtitle.each(function(index, el) {

			el.split = new SplitText(el, { 
				type: "lines",
				linesClass: "split-line"
			});

			if( $(el).hasClass('cg-has-anim') ){
				gsap.set(el.split.lines, {
					opacity: .3,
					y: "100",
				});
			};
			el.anim = gsap.to(el.split.lines, {
				scrollTrigger: {
					trigger: el,
					start: "top 90%",
					markers: false
				},

				x: "0",
				y: "0",
				opacity: 1,
				duration: .4,
				stagger: 0.2,
			});


		});
	}
	if($(".cg-sub-head").length) {
		var tzSplit = $(".cg-sub-head");
		if(tzSplit.length == 0) return; gsap.registerPlugin(SplitText); tzSplit.each(function(index, el) {

			el.split = new SplitText(el, { 
				type: "lines,words,chars",
				linesClass: "split-line",
			});

			let delayValue = $(el).attr("data-split-delay") || "0s";
			delayValue = parseFloat(delayValue) || 0; 

			if( $(el).hasClass('cg-sub-head') ){
				gsap.set(el.split.chars, {
					yPercent: 100 , 
				});
			}

			el.anim = gsap.to(el.split.chars, {
				scrollTrigger: {
					trigger: el,
					start: "top 86%",
					toggleActions: 'play none none reverse',
				},
				opacity: 1,
				yPercent: 0,
				xPercent: 0,
				duration: .8,
				ease: "back.out(2)",
				stagger: {
					amount: .7, 
					from: "random", 
				},
				delay: delayValue, 
			});

		});
	}
	// Animation
	gsap.utils.toArray(' .cg-top-bottom').forEach((el, index) => { 
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 3,
				start: "top 50%",
				end: "top -100%",
				toggleActions: "play reverse none reverse",
				markers: false,
			}
		})

		tlcta
		.set(el, {transformOrigin: 'top top'})
		.fromTo(el, { y: -400}, { y: 300, duration: 1})
	});
	gsap.utils.toArray(' .top_view').forEach((el, index) => { 
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 1.5,
				end: "top 100%",
				start: "top 100%",
				toggleActions: "play none none reverse",
				markers: false
			}
		})

		tlcta
		.set(el, {transformOrigin: 'center center'})
		.from(el, { opacity: 1, scale: 1, y: "100"}, {opacity: 1, y: 0, duration: 1, immediateRender: false})
	});
	gsap.utils.toArray(' .left_view').forEach((el, index) => { 
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 1.5,
				end: "top 50%",
				start: "top 100%",
				toggleActions: "play none none reverse",
				markers: false
			}
		})

		tlcta
		.set(el, {transformOrigin: 'center center'})
		.from(el, { opacity: 1, scale: .5, x: "-200"}, {opacity: 1, y: 0, duration: 1, immediateRender: false})
	});
	gsap.utils.toArray(' .circle_top').forEach((el, index) => { 
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 1.5,
				end: "top 50%",
				start: "top 100%",
				toggleActions: "play none none reverse",
				markers: false
			}
		})

		tlcta
		.set(el, {transformOrigin: 'center center'})
		.from(el, { opacity: 0, scale: 0, y: "100"}, {opacity: 1, y: 0, duration: 1, immediateRender: false})
	});
	gsap.utils.toArray(' .plane_land').forEach((el, index) => { 
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 1.5,
				end: "top 20%",
				start: "top 100%",
				toggleActions: "play none none reverse",
				markers: false
			}
		})

		tlcta
		.set(el, {transformOrigin: 'center center'})
		.from(el, { opacity: 0, scale: 0, rotate: "-90deg", x: "-300"}, {opacity: 1, y: 0, rotate: "0", duration: 1, immediateRender: false})
	});
	gsap.utils.toArray(' .plane_land_2').forEach((el, index) => { 
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 1.5,
				end: "top 20%",
				start: "top 100%",
				toggleActions: "play none none reverse",
				markers: false
			}
		})

		tlcta
		.set(el, {transformOrigin: 'center center'})
		.from(el, { opacity: 0, scale: 0, rotate: "90deg", x: "-300"}, {opacity: 1, y: 0, rotate: "0", duration: 1, immediateRender: false})
	});
	gsap.utils.toArray(' .plane_land_3').forEach((el, index) => { 
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 1.5,
				end: "top 20%",
				start: "top 100%",
				toggleActions: "play none none reverse",
				markers: false
			}
		})

		tlcta
		.set(el, {transformOrigin: 'center center'})
		.from(el, { opacity: 0, scale: 0, y:-150, rotate: "-120deg", x: "300"}, {opacity: 1, y: 0, rotate: "0", duration: 1, immediateRender: false})
	});
	gsap.utils.toArray(' .ship_land').forEach((el, index) => { 
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 1.5,
				end: "top -70%",
				start: "top 10%",
				toggleActions: "play none none reverse",
				markers: false
			}
		})

		tlcta
		.set(el, {transformOrigin: 'center center'})
		.from(el, { opacity: 0, scale: 1,  y: "-500"}, {opacity: 1, y: 0, rotate: "0", duration: 1, immediateRender: false})
	});
	gsap.utils.toArray(' .contain_land').forEach((el, index) => { 
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 1.5,
				end: "top -70%",
				start: "top 10%",
				toggleActions: "play none none reverse",
				markers: false
			}
		})

		tlcta
		.set(el, {transformOrigin: 'center center'})
		.from(el, { opacity: 0, scale: 1,  y: "-300"}, {opacity: 1, y: 0, rotate: "0", duration: 1, immediateRender: false})
	});
	gsap.utils.toArray(' .contain_land_2').forEach((el, index) => { 
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 1.5,
				end: "top -10%",
				start: "top 80%",
				toggleActions: "play none none reverse",
				markers: false
			}
		})

		tlcta
		.set(el, {transformOrigin: 'top top'})
		.from(el, { y: "-200"}, {opacity: 1, y: 0, duration: 1, immediateRender: false})
	});
	gsap.utils.toArray(' .cg-pro1-content').forEach((el, index) => { 
		let tlcta = gsap.timeline({
			scrollTrigger: {
				trigger: el,
				scrub: 1.5,
				end: "top -100%",
				start: "top 40%",
				toggleActions: "play none none reverse",
				markers: false
			}
		})

		tlcta
		.from(el, {  marginLeft: "0px",  marginRight: "0px"})
	});
	$('.bi-btn-hover').on('mouseenter', function (e) {
		var x = e.pageX - $(this).offset().left;
		var y = e.pageY - $(this).offset().top;

		$(this).find('b').css({
			top: y,
			left: x
		});
	});
	$('.bi-btn-hover').on('mouseout', function (e) {
		var x = e.pageX - $(this).offset().left;
		var y = e.pageY - $(this).offset().top;

		$(this).find('b').css({
			top: y,
			left: x
		});
	});
	const all_btns = gsap.utils.toArray(".bi-btn-area");
	if (all_btns.length > 0) {
		var all_btn = gsap.utils.toArray(".bi-btn-area");


		const all_btn_cirlce = gsap.utils.toArray(".bi-btn-item");
		all_btn.forEach((btn, i) => {

			$(btn).mouseleave(function (e) {
				gsap.to(all_btn_cirlce[i], 0.5, {
					x: 0,
					y: 0,
					ease: Power2.easeOut,
				});
			});
		});
		let arr2 = gsap.utils.toArray(".bi-btn-area");
	};
	//

	var CgSteps = gsap.timeline({
		scrollTrigger: {
			trigger: ".cg-step1-sec",
			start: "top 70%",
			toggleActions: "play reverse play reverse",
			markers: false,
		},
		defaults: {
			duration: 1,
		},
	})

	CgSteps
	.from(".col-lg-4:nth-of-type(1) .cg-step1-item", {
		xPercent: 100
	})
	.from(".col-lg-4:nth-of-type(3) .cg-step1-item", {
		xPercent: -100
	},"<")
	//
	gsap.utils.toArray(".img-parallax").forEach(function(container) {
		let image = container.querySelector("img");

		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: container,
				scrub: true,
				pin: false,
			},
		}); 
		tl.from(image, {
			yPercent: -30,
			ease: "none",
		}).to(image, {
			yPercent: 30,
			ease: "none",
		}); 
	});
	//
	var cgmappin = gsap.timeline({

		scrollTrigger: {
			animation: cgmappin,
			trigger: '.cg-map-pin-sec',
			start: "top 100%",
			end: "bottom 30%",
			scrub: 2,
			toggleActions: "play reverse play reverse",
			markers: false
		}
	});

	cgmappin.from( ".cg-m-item1" , { rotateZ: -200,  duration:1 }, ">" )
	cgmappin.from( ".cg-m-item3" , { rotateZ: 100,  duration:1 },"<" )
	cgmappin.from( ".cg-m-item2" , { rotateZ: -200,  duration:1 } )
//

	if (window.matchMedia("(min-width: 1200px)").matches) { 
		var Hero_pin = document.querySelectorAll(".cg-deliver-sec")
		Hero_pin.forEach((item) => {
			gsap.to(item, {
				scrollTrigger: {
					trigger: item,
					markers: false,
					pin: true,
					pinSpacing: false,
					start: "top 0%",
					end: "bottom 0%",
				},
			});
		});
	}
	if(window.innerWidth> 991){
		let proSroll = gsap.timeline();
		let otherSections_2 = document.querySelectorAll('.cg_sticky_item')
		otherSections_2.forEach((section, index) => {
			gsap.set(otherSections_2, {
				scale: 1 
			});
			proSroll.to(section, {
				scale: index === otherSections_2.length - 1 ? 1 : .8,
				scrollTrigger: {
					trigger: section,
					pin: section,
					scrub: 1,
					start: 'top 5%',
					end: "bottom 70%",
					ease: "none",
					endTrigger: '.cg-pro1-content',
					pinSpacing: false,
					markers: false,
				},
			})
		});
	};
	if($(".bottom-text").length) {
		var aniTitle1 = $(".bottom-text");
		if(aniTitle1.length == 0) return; gsap.registerPlugin(SplitText); aniTitle1.each(function(index, el) {

			el.split = new SplitText(el, { 
				type: "lines,words,chars",
				linesClass: "split-line"
			});

			gsap.set(el, { perspective: 400 });

			if( $(el).hasClass('bottom-text') ){
				gsap.set(el.split.chars, {
					yPercent: 100,
					opacity: 0,

				});
			}
			if( $(el).hasClass('bottom-text_2') ){
				gsap.set(el.split.chars, {
					yPercent: 100,
					opacity: 0,

				});
			}
			if( $(el).hasClass('bottom-text_3') ){
				gsap.set(el.split.chars, {
					yPercent: -100,
					opacity: 0,

				});
			}
			el.anim = gsap.to(el.split.chars, {
				scrollTrigger: {
					trigger: el,
					start: "top 90%",
					toggleActions: "play reverse play reverse",
					markers: false,

				},

				yPercent: 0,
				xPercent: 0,
				opacity: 1,
				duration: 2,
				stagger: .1,
				ease: "bounce.out",
			});

		});
	}
	var mWrap = $(".cg-cta-m-wrap");
	mWrap.on("mouseover", function () {
		var mContent = $(this).find("#more_content");
		var mArea = $(this).find("#more_area");

		function parallaxIt(e, target, movement = 1) {
			var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			var boundingRect = mArea[0].getBoundingClientRect();
			var relX = e.pageX - boundingRect.left;
			var relY = e.pageY - boundingRect.top;

			gsap.to(mContent, {
				x: (relX - boundingRect.width / 2) * movement,
				y: (relY - boundingRect.height / 2 - scrollTop) * movement,
				ease: "power1",
				duration: 0.6
			});
		}

		function callParallax(e) {
			parallaxIt(e, mWrap);
		}

		mArea.mousemove(function (e) {
			callParallax(e);
		});
		mArea.mouseleave(function (e) {
			gsap.to(mContent, {
				scale: 1,
				x: 0,
				y: 0,
				ease: "power1",
				duration: 0.6
			});
		});
	});
})(jQuery);