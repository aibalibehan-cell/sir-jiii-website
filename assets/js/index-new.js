gsap.registerPlugin(ScrollTrigger);
if (typeof SplitText !== 'undefined') gsap.registerPlugin(SplitText);
if (typeof DrawSVGPlugin !== 'undefined') gsap.registerPlugin(DrawSVGPlugin);
if (typeof CustomEase !== 'undefined') gsap.registerPlugin(CustomEase);

let scroll;

const body = document.body;
const select = (e) => document.querySelector(e);
const selectAll = (e) => document.querySelectorAll(e);
//const container = select('.site-main');

initPageTransitions();

// Safety guarantee: Ensure loading-screen never remains visible if an unexpected error occurs
setTimeout(function() {
  var loadingScreen = document.querySelector('.loading-screen');
  if (loadingScreen && loadingScreen.style.display !== 'none') {
    loadingScreen.style.setProperty('display', 'none', 'important');
  }
  document.documentElement.style.cursor = 'auto';
}, 3800);

// Animation - First Page Load
function initLoaderHome() { 

  var tl = gsap.timeline();

	tl.set(".loading-screen", { 
		top: "0",
	});	

  if ($(window).width() > 540) { 
    tl.set("main .once-in", {
      y: "50vh"
    });
  } else {
    tl.set("main .once-in", {
      y: "10vh"
    });
  }

  tl.set(".loading-words", { 
		opacity: 0,
    y: -50
	});

  tl.set(".loading-words .active", { 
		display: "none",
	});

  tl.set(".loading-words .home-active, .loading-words .home-active-last", { 
		display: "block",
    opacity: 0
	});

  tl.set(".loading-words .home-active-first", { 
		opacity: 1,
	});

  if ($(window).width() > 540) { 
    tl.set(".loading-screen .rounded-div-wrap.bottom", { 
      height: "10vh",
    });	
  } else {
    tl.set(".loading-screen .rounded-div-wrap.bottom", { 
      height: "5vh",
    });	
  }

  tl.set("html", { 
		cursor: "wait"
	});

  tl.call(function() {
    if (scroll && scroll.stop) scroll.stop();
  });

  tl.to(".loading-words", {
		duration: .8,
		opacity: 1,
    y: -50,
    ease: "Power4.easeOut",
    delay: .5
	});

  tl.to(".loading-words .home-active", {
		duration: .01,
		opacity: 1,
    stagger: .15,
    ease: "none",
    onStart: homeActive
  },"=-.4");

  function homeActive() {
    gsap.to(".loading-words .home-active", {
      duration: .01,
      opacity: 0,
      stagger: .15,
      ease: "none",
      delay: .15
    });
  }

  tl.to(".loading-words .home-active-last", {
		duration: .01,
		opacity: 1,
    delay: .15
  });
  
	tl.to(".loading-screen", {
		duration: .8,
		top: "-100%",
		ease: "Power4.easeInOut",
    delay: .2
  });

  tl.to(".loading-screen .rounded-div-wrap.bottom", {
		duration: 1,
		height: "0vh",
		ease: "Power4.easeInOut"
	},"=-.8");

  tl.to(".loading-words", {
		duration: .3,
		opacity: 0,
    ease: "linear"
	},"=-.8");

	tl.set(".loading-screen", { 
		top: "calc(-100%)" 
	});	

  tl.set(".loading-screen .rounded-div-wrap.bottom", { 
		height: "0vh"
	});	

  tl.to("main .once-in", {
		duration: 1.5,
    y: "0vh",
    stagger: .07,
		ease: "Expo.easeOut",
    clearProps: true
	},"=-.8");

  tl.set("html", { 
		cursor: "auto"
	},"=-1.2");

  tl.call(function() {
    if (scroll && scroll.start) scroll.start();
  });

  tl.set(".loading-screen", { 
    display: "none" 
  });
  
}

// Animation - First Page Load
function initLoader() { 

  var tl = gsap.timeline();

	tl.set(".loading-screen", { 
		top: "0",
	});	

  if ($(window).width() > 540) { 
    tl.set("main .once-in", {
      y: "50vh"
    });
  } else {
    tl.set("main .once-in", {
      y: "10vh"
    });
  }

  tl.set(".loading-words", { 
		opacity: 1,
    y: -50
	});

  if ($(window).width() > 540) { 
    tl.set(".loading-screen .rounded-div-wrap.bottom", { 
      height: "10vh",
    });	
  } else {
    tl.set(".loading-screen .rounded-div-wrap.bottom", { 
      height: "5vh",
    });	
  }

  tl.set("html", { 
		cursor: "wait"
	});
  
	tl.to(".loading-screen", {
		duration: .8,
		top: "-100%",
		ease: "Power4.easeInOut",
    delay: .5
  });

  tl.to(".loading-screen .rounded-div-wrap.bottom", {
		duration: 1,
		height: "0vh",
		ease: "Power4.easeInOut"
	},"=-.8");

  tl.to(".loading-words", {
		duration: .3,
		opacity: 0,
    ease: "linear",
	},"=-.8");

	tl.set(".loading-screen", { 
		top: "calc(-100%)" 
	});	

  tl.set(".loading-screen .rounded-div-wrap.bottom", { 
		height: "0vh"
	});	

  tl.to("main .once-in", {
		duration: 1,
    y: "0vh",
    stagger: .05,
		ease: "Expo.easeOut",
    clearProps: "true"
	},"=-.8");

  tl.set("html", { 
		cursor: "auto",
	},"=-.8");

  tl.set(".loading-screen", { 
    display: "none" 
  });

}


// Animation - Page transition In
function pageTransitionIn() {
	var tl = gsap.timeline();

  tl.call(function() {
    if (scroll && scroll.stop) scroll.stop();
  });

  tl.set(".loading-screen", { 
    display: "block",
		top: "100%" 
	});	

  tl.set(".loading-words", { 
		opacity: 0,
    y: 0
	});

  tl.set("html", { 
		cursor: "wait"
	});

  if ($(window).width() > 540) { 
    tl.set(".loading-screen .rounded-div-wrap.bottom", { 
      height: "10vh",
    });	
  } else {
    tl.set(".loading-screen .rounded-div-wrap.bottom", { 
      height: "5vh",
    });	
  }

	tl.to(".loading-screen", {
		duration: .5,
		top: "0%",
		ease: "Power4.easeIn"
	});

  if ($(window).width() > 540) { 
    tl.to(".loading-screen .rounded-div-wrap.top", {
      duration: .4,
      height: "10vh",
      ease: "Power4.easeIn"
    },"=-.5");
  } else {
    tl.to(".loading-screen .rounded-div-wrap.top", {
      duration: .4,
      height: "10vh",
      ease: "Power4.easeIn"
    },"=-.5");
  }

  tl.to(".loading-words", {
		duration: .8,
		opacity: 1,
    y: -50,
    ease: "Power4.easeOut",
    delay: .05
	});

  tl.set(".loading-screen .rounded-div-wrap.top", {
		height: "0vh"
	});

	tl.to(".loading-screen", {
		duration: .8,
		top: "-100%",
		ease: "Power3.easeInOut"
	},"=-.2");

  tl.to(".loading-words", {
		duration: .6,
		opacity: 0,
    ease: "linear"
	},"=-.8");

  tl.to(".loading-screen .rounded-div-wrap.bottom", {
		duration: .85,
		height: "0",
		ease: "Power3.easeInOut"
	},"=-.6");

  tl.set("html", { 
		cursor: "auto"
	},"=-0.6");

  if ($(window).width() > 540) { 
    tl.set(".loading-screen .rounded-div-wrap.bottom", {
      height: "10vh"
    });
  } else {
    tl.set(".loading-screen .rounded-div-wrap.bottom", {
      height: "5vh"
    });
  }

  tl.set(".loading-screen", { 
		top: "100%" 
	});	

  tl.set(".loading-words", {
		opacity: 0,
	});
  
}


// Animation - Page transition Out
function pageTransitionOut() {
	var tl = gsap.timeline();

  if ($(window).width() > 540) { 
    tl.set("main .once-in", {
      y: "50vh",
    });
  } else {
    tl.set("main .once-in", {
      y: "20vh"
    });
  }
  
  tl.call(function() {
    if (scroll && scroll.start) scroll.start();
  });

  tl.to("main .once-in", {
    duration: 1,
    y: "0vh",
    stagger: .05,
    ease: "Expo.easeOut",
    delay: .8,
    clearProps: "true"
  });

}

function initPageTransitions() {

  const isFileProtocol = window.location.protocol === 'file:';

  if (isFileProtocol || typeof barba === 'undefined') {
    const container = document.querySelector('[data-barba="container"]') || document.querySelector('main');
    initSmoothScroll(container);
    initScript();
    initCookieViews();
    const ns = container ? container.getAttribute('data-barba-namespace') : '';
    if (ns === 'home') {
      initLoaderHome();
    } else {
      initLoader();
    }

    $(document).on('click', 'a', function(e) {
      const href = $(this).attr('href');
      const target = $(this).attr('target');
      if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:') || target === '_blank') {
        return;
      }
      e.preventDefault();
      pageTransitionIn();
      setTimeout(function() {
        window.location.href = href;
      }, 500);
    });

    return;
  }

  // do something before the transition starts
  barba.hooks.before(() => {
    select('html').classList.add('is-transitioning');
  });

  // do something after the transition finishes
  barba.hooks.after(() => {
    select('html').classList.remove('is-transitioning');
    // reinit locomotive scroll
    if (scroll && scroll.init) scroll.init();
    if (scroll && scroll.stop) scroll.stop();
  });

  // scroll to the top of the page
  barba.hooks.enter(() => {
    if (scroll && scroll.destroy) scroll.destroy();
  });

  // scroll to the top of the page
  barba.hooks.afterEnter(() => {
    window.scrollTo(0, 0);
    initCookieViews();
  });

  if ($(window).width() > 540) { 
    barba.hooks.leave(() => {
      $(".btn-hamburger, .btn-menu").removeClass('active');
      $("main").removeClass('nav-active');
    }); 
  }

  try {
    barba.init({
      sync: true,
      debug: false,
      timeout: 7000,
      prevent: ({ el, event, href }) => {
        if (window.location.protocol === 'file:') return true;
        return false;
      },
      transitions: [{
        name: 'default',
        once(data) {
          initSmoothScroll(data.next.container);
          initScript();
          initCookieViews();
          initLoader();
        },
        async leave(data) {
          pageTransitionIn(data.current);
          await delay(495);
          data.current.container.remove();
        },
        async enter(data) {
          pageTransitionOut(data.next);
          initNextWord(data);
        },
        async beforeEnter(data) {
          ScrollTrigger.getAll().forEach(t => t.kill());
          if (scroll && scroll.destroy) scroll.destroy();
          initSmoothScroll(data.next.container);
          initScript(); 
        },
      }, 
      {
        name: 'to-home',
        from: {},
        to: {
          namespace: ['home']
        },
        once(data) {
          initSmoothScroll(data.next.container);
          initScript();
          initCookieViews();
          initLoaderHome();
        },
      }]
    });
  } catch (err) {
    console.warn('Barba init failed, falling back to standard navigation:', err);
    const container = document.querySelector('[data-barba="container"]') || document.querySelector('main');
    initSmoothScroll(container);
    initScript();
    initCookieViews();
    initLoaderHome();
  }
}

function initSmoothScroll(container) {
  if (!container) return;
  const scrollContainer = container.querySelector('[data-scroll-container]') || container;

  try {
    scroll = new LocomotiveScroll({
      el: scrollContainer,
      smooth: true,
      multiplier: 1.02,
      lerp: 0.085,
      touchMultiplier: 2.0,
      smartphone: {
        smooth: false
      },
      tablet: {
        smooth: false
      }
    });
    window.locoScroll = scroll;
  } catch (e) {
    console.warn('LocomotiveScroll init error:', e);
  }

  window.addEventListener('resize', () => {
    if (scroll && scroll.update) scroll.update();
  });

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => {
      if (scroll && scroll.update) scroll.update();
      ScrollTrigger.refresh();
    });
  }

  if (scroll && scroll.on) {
    scroll.on("scroll", () => ScrollTrigger.update());
  }
  window.addEventListener('scroll', () => {
    ScrollTrigger.update();
  });

  try {
    const scrollerTarget = container.querySelector('[data-scroll-container]') || scrollContainer;
    ScrollTrigger.scrollerProxy(scrollerTarget, {
      scrollTop(value) {
        if (arguments.length) {
          if (scroll && scroll.scrollTo) scroll.scrollTo(value, 0, 0);
        } else {
          return (scroll && scroll.scroll && scroll.scroll.instance && scroll.scroll.instance.scroll) ? scroll.scroll.instance.scroll.y : window.pageYOffset;
        }
      },
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      pinType: (scrollerTarget.style && scrollerTarget.style.transform) ? "transform" : "fixed"
    });

    ScrollTrigger.defaults({
      scroller: scrollerTarget,
    });
  } catch (e) {
    console.warn('ScrollTrigger scrollerProxy error:', e);
  }

  const scrollbar = selectAll('.c-scrollbar');
  if (scrollbar.length > 1) {
    scrollbar[0].remove();
  }

  ScrollTrigger.addEventListener('refresh', () => {
    if (scroll && scroll.update) scroll.update();
  });

  try {
    ScrollTrigger.refresh();
  } catch (e) {}
}

function initNextWord(data) {
  // update Text Loading https://github.com/barbajs/barba/issues/507
  let parser = new DOMParser();
  let dom = parser.parseFromString(data.next.html, 'text/html');
  let nextProjects = dom.querySelector('.loading-words');
  document.querySelector('.loading-words').innerHTML = nextProjects.innerHTML;
}

function delay(n) {
	n = n || 2000;
	return new Promise((done) => {
		setTimeout(() => {
			done();
		}, n);
	});
}


/**
 * Fire all scripts on page load
 */
function initScript() {
  select('body').classList.remove('is-loading');
  initWindowInnerheight();
  initCheckTouchDevice();
  initHamburgerNav();
  initMagneticButtons();
  initStickyCursorWithDelay();
  initVisualFilter();
  initScrolltriggerNav();
  initScrollLetters();
  initTricksWords();
  initContactForm();
  initTimeZone();
  initLazyLoad();
  initPlayVideoInview();
  initHeroMedia();
  initScrolltriggerAnimations();
  // Laptop mouse tilt disabled per user instruction
  initStoryTextScrollAnimation();
  initMWG11();
}

/**
* Window Inner Height Check
*/
function initWindowInnerheight() {
    
  // https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
  $(document).ready(function(){
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    $('.btn-hamburger').click(function(){
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  });

}

/**
* Check touch device
*/
function initCheckTouchDevice() {
    
  function isTouchScreendevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints;      
  };
  
  if(isTouchScreendevice()){
    $('main').addClass('touch');
    $('main').removeClass('no-touch');
  } else {
    $('main').removeClass('touch');
    $('main').addClass('no-touch');
  }
  $(window).resize(function() {
    if(isTouchScreendevice()){
       $('main').addClass('touch');
       $('main').removeClass('no-touch');
    } else {
       $('main').removeClass('touch');
       $('main').addClass('no-touch');
    }
  });

}

/**
* Hamburger Nav Open/Close - Event Delegated for 100% Reliable Cross-Device & Barba Navigation
*/
function initHamburgerNav() {
  $(document).off('click', '.btn-hamburger, .btn-menu').on('click', '.btn-hamburger, .btn-menu', function(e){
    e.preventDefault();
    if ($(".btn-hamburger, .btn-menu").hasClass('active')) {
        $(".btn-hamburger, .btn-menu").removeClass('active');
        $("main").removeClass('nav-active');
        $('body').removeClass('nav-active');
        if (scroll && scroll.start) scroll.start();
    } else {
        $(".btn-hamburger, .btn-menu").addClass('active');
        $("main").addClass('nav-active');
        $('body').addClass('nav-active');
        if (scroll && scroll.stop) scroll.stop();
    }
  });

  $(document).off('click', '.fixed-nav-back, .fixed-nav .nav-row a').on('click', '.fixed-nav-back, .fixed-nav .nav-row a', function(){
    $(".btn-hamburger, .btn-menu").removeClass('active');
    $("main").removeClass('nav-active');
    $('body').removeClass('nav-active');
    if (scroll && scroll.start) scroll.start();
  });

  $(document).keydown(function(e){
    if(e.keyCode == 27) {
      if ($('main').hasClass('nav-active') || $('body').hasClass('nav-active')) {
          $(".btn-hamburger, .btn-menu").removeClass('active');
          $("main").removeClass('nav-active');
          $('body').removeClass('nav-active');
          if (scroll && scroll.start) scroll.start();
      } 
    }
  });
}

/**
* Magnetic Buttons
*/
function initMagneticButtons() {
    
  // Magnetic Buttons
  // Found via: https://codepen.io/tdesero/pen/RmoxQg
  var magnets = document.querySelectorAll('.magnetic');
  var strength = 100;
  
  // START : If screen is bigger as 540 px do magnetic
  if(window.innerWidth > 540){
  // Mouse Reset
  magnets.forEach( (magnet) => {
    magnet.addEventListener('mousemove', moveMagnet );
    $(this.parentNode).removeClass('not-active');
    magnet.addEventListener('mouseleave', function(event) {
        gsap.to( event.currentTarget, 1.5, {
          x: 0, 
          y: 0, 
          ease: Elastic.easeOut
        });
        gsap.to( $(this).find(".btn-text"), 1.5, {
          x: 0, 
          y: 0, 
          ease: Elastic.easeOut
        });
    });
  });

  // Mouse move
  function moveMagnet(event) {
    var magnetButton = event.currentTarget;
    var bounding = magnetButton.getBoundingClientRect();
    var magnetsStrength = magnetButton.getAttribute("data-strength");
    var magnetsStrengthText = magnetButton.getAttribute("data-strength-text");
      
    gsap.to( magnetButton, 1.5, {
        x: ((( event.clientX - bounding.left)/magnetButton.offsetWidth) - 0.5) * magnetsStrength,
        y: ((( event.clientY - bounding.top)/magnetButton.offsetHeight) - 0.5) * magnetsStrength,
        rotate: "0.001deg",
        ease: Power4.easeOut
    });
    gsap.to( $(this).find(".btn-text"), 1.5, {
        x: ((( event.clientX - bounding.left)/magnetButton.offsetWidth) - 0.5) * magnetsStrengthText,
        y: ((( event.clientY - bounding.top)/magnetButton.offsetHeight) - 0.5) * magnetsStrengthText,
        rotate: "0.001deg",
        ease: Power4.easeOut
    });
  }

  }; // END : If screen is bigger as 540 px do magnetic

  // Mouse Enter
  $('.btn-click.magnetic').on('mouseenter', function() {
    if($(this).find(".btn-fill").length) {
    gsap.to($(this).find(".btn-fill"), .6, {
        startAt: {y: "76%"},
        y: "0%",
        ease: Power2.easeInOut
    });
    }
    if($(this).find(".btn-text-inner.change").length) {
    gsap.to($(this).find(".btn-text-inner.change"), .3, {
        startAt: {color: "#1C1D20"},
        color: "#FFFFFF",
        ease: Power3.easeIn,
    });
    }
    $(this.parentNode).removeClass('not-active');
  });

  // Mouse Leave
  $('.btn-click.magnetic').on('mouseleave', function() {
    if($(this).find(".btn-fill").length) {
    gsap.to($(this).find(".btn-fill"), .6, {
        y: "-76%",
        ease: Power2.easeInOut
    });
    }
    if($(this).find(".btn-text-inner.change").length) {
    gsap.to($(this).find(".btn-text-inner.change"), .3, {
        color: "#1C1D20",
        ease: Power3.easeOut,
        delay: .3
    });
    }
    $(this.parentNode).removeClass('not-active');
  });
}


/**
* Sticky Cursor with Delay
*/
function initStickyCursorWithDelay() {
    
  // Sticky Cursor with delay
  // https://greensock.com/forums/topic/21161-animated-mouse-cursor/
  var cursorImage = $(".mouse-pos-list-image")
  var cursorBtn = $(".mouse-pos-list-btn");
  var cursorSpan = $(".mouse-pos-list-span");

  var posXImage = 0
  var posYImage = 0
  var posXBtn = 0
  var posYBtn = 0
  var posXSpan = 0
  var posYSpan = 0
  var mouseX = 0
  var mouseY = 0

  if(document.querySelector(".mouse-pos-list-image, .mouse-pos-list-btn, .mouse-post-list-span")) {
  gsap.to({}, 0.0083333333, {
    repeat: -1,
    onRepeat: function() {

      var isImgActive = $(".mouse-pos-list-image").hasClass("active");
      if(document.querySelector(".mouse-pos-list-image")) {
        posXImage += (mouseX - posXImage) / 10;
        posYImage += (mouseY - posYImage) / 10;
        gsap.set(cursorImage, {
          css: {
          left: posXImage,
          top: posYImage
          }
        });
      }
      if(document.querySelector(".mouse-pos-list-btn")) {
        if (isImgActive) {
          posXBtn = posXImage;
          posYBtn = posYImage;
        } else {
          posXBtn += (mouseX - posXBtn) / 7;
          posYBtn += (mouseY - posYBtn) / 7;
        }
        gsap.set(cursorBtn, {
          css: {
          left: posXBtn,
          top: posYBtn
          }
        });
      }
      if(document.querySelector(".mouse-pos-list-span")) {
        if (isImgActive) {
          posXSpan = posXImage;
          posYSpan = posYImage;
        } else {
          posXSpan += (mouseX - posXSpan) / 6;
          posYSpan += (mouseY - posYSpan) / 6;
        }
        gsap.set(cursorSpan, {
          css: {
          left: posXSpan,
          top: posYSpan
          }
        });
      }
    }
  });
  }

  $(document).on("mousemove", function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  // Animated Section Assortiment Single Floating Image
  // Source: http://jsfiddle.net/639Jj/1/ 

  $('.mouse-pos-list-image-wrap a').on('mouseenter', function() {
    $('.mouse-pos-list-image, .mouse-pos-list-btn, .mouse-pos-list-span, .mouse-pos-list-span-big').addClass('active');
  });
  $('.mouse-pos-list-image-wrap a').on('mouseleave', function() {
    $('.mouse-pos-list-image, .mouse-pos-list-btn, .mouse-pos-list-span, .mouse-pos-list-span-big').removeClass('active');
  });
  $('.single-tile-wrap a, .mouse-pos-list-archive a, .next-case-btn').on('mouseenter', function() {
    $('.mouse-pos-list-btn, .mouse-pos-list-span').addClass('active-big');
  });
  $('.single-tile-wrap a, .mouse-pos-list-archive a, .next-case-btn').on('mouseleave', function() {
    $('.mouse-pos-list-btn, .mouse-pos-list-span').removeClass('active-big');
  });
  $('main').on('mousedown', function() {
    $(".mouse-pos-list-btn, .mouse-pos-list-span").addClass('pressed');
  });
  $('main').on('mouseup', function() {
    $(".mouse-pos-list-btn, .mouse-pos-list-span").removeClass('pressed');
  });

  $(document).on('mouseenter', '.mouse-pos-list-image-wrap li', function() {
    var projectId = $(this).attr('data-project');
    var $floatWrap = $(".mouse-pos-list-image .float-image-wrap");
    var $floatItems = $floatWrap.find("li");
    var totalCount = $floatItems.length;
    var targetIndex = -1;
    
    if (projectId) {
      targetIndex = $floatItems.index($floatItems.filter('[data-project="' + projectId + '"]'));
    } else {
      var $visibleRows = $(".mouse-pos-list-image-wrap li.visible");
      targetIndex = $visibleRows.index($(this));
    }

    if (targetIndex >= 0 && totalCount > 0 && $floatWrap.length) {
        gsap.to($floatWrap, {
          y: (targetIndex * 100) / (totalCount * -1) + "%",
          duration: .45,
          ease: Power2.easeInOut
        });
    }
    $(".mouse-pos-list-image.active .mouse-pos-list-image-bounce").addClass("active").delay(400).queue(function(next){
        $(this).removeClass("active");
        next();
    });
  });

  $('.archive-work-grid li').on('mouseenter', function() {
    $(".mouse-pos-list-btn").addClass("hover").delay(100).queue(function(next){
      $(this).removeClass("hover");
      next();
    });
  });

}

/**
* Visual Filter
*/
function initVisualFilter() {
    
  // Visual Filter
  $(document).ready(function(){

    $('.toggle-row .btn').click(function(){
      if ($(this).hasClass('active')) {
          } else {
      $('.work-tiles li, .work-items li').addClass('tile-fade-out');
      if (scroll && scroll.stop) scroll.stop();
      setTimeout(function() {
          $('.work-tiles li, .work-items li').removeClass('tile-fade-out');
          $('.work-tiles li, .work-items li').addClass('tile-fade-in');
          if (scroll && scroll.scrollTo) scroll.scrollTo( 'top', {'offset': 0, 'duration': 700, 'easing': [0.7, 0.00, 0.35, 1.00], 'disableLerp': true});
      }, 300);
      setTimeout(function() {
          $('.work-tiles li, .work-items li').removeClass('tile-fade-in');
          if (scroll && scroll.update) scroll.update();
          ScrollTrigger.refresh();
          if (scroll && scroll.start) scroll.start();
      }, 700);
      setTimeout(function() {
         if (scroll && scroll.update) scroll.update();
     }, 1000);
      }
    });
    $('.all-btn').click(function(){
      if ($(this).hasClass('active')) {
      } else {
          $('.toggle-row .btn-normal').removeClass('active');
          $('.toggle-row .btn-normal').addClass('not-active');
          $(this).addClass('active');
          $(this).removeClass('not-active');
          // Cookies.set("filter", "all", { expires: 1 });
          setTimeout(function() {
            $('.mouse-pos-list-image-wrap li, .work-tiles li').addClass('visible');
          }, 300);
      }
    });
    $('.corporate-btn, .design-btn').click(function(){
      if ($(this).hasClass('active')) {
      } else {
          $('.toggle-row .btn-normal').removeClass('active');
          $('.toggle-row .btn-normal').addClass('not-active');
          $(this).addClass('active');
          $(this).removeClass('not-active');
          setTimeout(function() {
            $('.mouse-pos-list-image-wrap li, .work-tiles li').removeClass('visible');
            $('.mouse-pos-list-image-wrap li.corporate, .work-tiles li.corporate, .mouse-pos-list-image-wrap li.design, .work-tiles li.design').addClass('visible');
          }, 300);
      }
    });
    $('.media-btn, .development-btn').click(function(){
      if ($(this).hasClass('active')) {
      } else {
          $('.toggle-row .btn-normal').removeClass('active');
          $('.toggle-row .btn-normal').addClass('not-active');
          $(this).addClass('active');
          $(this).removeClass('not-active');
          setTimeout(function() {
            $('.mouse-pos-list-image-wrap li, .work-tiles li').removeClass('visible');
            $('.mouse-pos-list-image-wrap li.media, .work-tiles li.media, .mouse-pos-list-image-wrap li.development, .work-tiles li.development').addClass('visible');
          }, 300);
      }
    });

    $('.grid-row .btn').click(function(){
      if ($(this).hasClass('active')) {
          } else {
      $('.grid-fade').addClass('grid-fade-out');
      if (scroll && scroll.stop) scroll.stop();
      if (scroll && scroll.scrollTo) scroll.scrollTo( 'top', {'offset': 0, 'duration': 700, 'easing': [0.7, 0.00, 0.35, 1.00], 'disableLerp': true});
      setTimeout(function() {
        $('.grid-fade').removeClass('grid-fade-out');
        $('.grid-fade').addClass('grid-fade-in');
      }, 300);
      setTimeout(function() {
        $('.grid-fade').removeClass('grid-fade-in');
        if (scroll && scroll.update) scroll.update();
        ScrollTrigger.refresh();
        if (scroll && scroll.start) scroll.start();
      }, 700);
      }
    });
    $('.grid-row .rows-btn').click(function(){
      if ($(this).hasClass('active')) {
      } else {
          $('.grid-row .btn-normal').removeClass('active');
          $('.grid-row .btn-normal').addClass('not-active');
          try { Cookies.set("view", "rows", { expires: 14 }); } catch(e){}
          $(this).addClass('active');
          $(this).removeClass('not-active');
          setTimeout(function() {
            $('.grid-columns-part').removeClass('visible');
            $('.grid-rows-part').addClass('visible');
          }, 300);
      }
    });
    $('.grid-row .columns-btn').click(function(){
      if ($(this).hasClass('active')) {
      } else {
          $('.grid-row .btn-normal').removeClass('active');
          $('.grid-row .btn-normal').addClass('not-active');
          try { Cookies.set("view", "columns", { expires: 14 }); } catch(e){}
          $(this).addClass('active');
          $(this).removeClass('not-active');
          setTimeout(function() {
            $('.grid-rows-part').removeClass('visible');
            $('.grid-columns-part').addClass('visible');
          }, 300);
      }
    });

  });

}


/**
* Cookie Views
*/
function initCookieViews() {
  // Set cookie for columns/rows view
  // https://www.youtube.com/watch?v=rfwiyBoVwdQ&ab_channel=TimothyRicks
  var viewMode = null;
  try { viewMode = Cookies.get("view"); } catch(e){}
  if (viewMode == "columns") {
    $('.grid-row .rows-btn').removeClass('active');
    $('.grid-row .columns-btn').addClass('active');
    $('#work .grid-rows-part').removeClass('visible');
    $('#work .grid-columns-part').addClass('visible');
    if (scroll && scroll.update) scroll.update();
    ScrollTrigger.refresh();
  }
}


/**
* Scrolltrigger Scroll Check
*/
function initScrolltriggerNav() {
    
  ScrollTrigger.create({
    start: 'top -30%',
    onUpdate: self => {
      $("main").addClass('scrolled');
    },
    onLeaveBack: () => {
      $("main").removeClass('scrolled');
    },
  });

}


/**
* Scrolltrigger Scroll Letters Home
*/
function initScrollLetters() {
  // Scrolling Letters Both Direction
  // https://codepen.io/GreenSock/pen/rNjvgjo
  // Fixed example with resizing
  // https://codepen.io/GreenSock/pen/QWqoKBv?editors=0010

  let direction = 1; // 1 = forward, -1 = backward scroll

  const roll1 = roll(".big-name .name-wrap", {duration: 18}),
        roll2 = roll(".rollingText02", {duration: 10}, true),
        scroll = ScrollTrigger.create({
          trigger: document.querySelector('[data-scroll-container]'),
          onUpdate(self) {
            if (self.direction !== direction) {
              direction *= -1;
              gsap.to([roll1, roll2], {timeScale: direction, overwrite: true});
            }
          }
        });

  // helper function that clones the targets, places them next to the original, then animates the xPercent in a loop to make it appear to roll across the screen in a seamless loop.
  function roll(targets, vars, reverse) {
    vars = vars || {};
    vars.ease || (vars.ease = "none");
    const tl = gsap.timeline({
            repeat: -1,
            onReverseComplete() { 
              this.totalTime(this.rawTime() + this.duration() * 10); // otherwise when the playhead gets back to the beginning, it'd stop. So push the playhead forward 10 iterations (it could be any number)
            }
          }), 
          elements = gsap.utils.toArray(targets),
          clones = elements.map(el => {
            let clone = el.cloneNode(true);
            el.parentNode.appendChild(clone);
            return clone;
          }),
          positionClones = () => elements.forEach((el, i) => gsap.set(clones[i], {position: "absolute", overwrite: false, top: el.offsetTop, left: el.offsetLeft + (reverse ? -el.offsetWidth : el.offsetWidth)}));
    positionClones();
    elements.forEach((el, i) => tl.to([el, clones[i]], {xPercent: reverse ? 100 : -100, ...vars}, 0));
    window.addEventListener("resize", () => {
      let time = tl.totalTime(); // record the current time
      tl.totalTime(0); // rewind and clear out the timeline
      positionClones(); // reposition
      tl.totalTime(time); // jump back to the proper time
    });
    return tl;
  }

}



/**
* Scrolltrigger Nav
*/
function initTricksWords() {
    
  // Copyright start
  // © Code by T.RICKS, https://www.tricksdesign.com/
  // You have the license to use this code in your projects but not redistribute it to others
  // Tutorial: https://www.youtube.com/watch?v=xiAqTu4l3-g&ab_channel=TimothyRicks

  // Find all text with .tricks class and break each letter into a span
  var spanWord = document.getElementsByClassName("span-lines");
  for (var i = 0; i < spanWord.length; i++) {

  var wordWrap = spanWord.item(i);
  wordWrap.innerHTML = wordWrap.innerHTML.replace(/(^|<\/?[^>]+>|\s+)([^\s<]+)/g, '$1<span class="span-line"><span class="span-line-inner">$2</span></span>');

  }

}

/**
* Contact Form
*/
function initContactForm() {
    
  $('.field').on('input', function() {
    $(this).parent().toggleClass('not-empty', this.value.trim().length > 0);
  });

  $(function () {
      $('.field').focusout(function () {
          var text_val = $(this).val();
          $(this).parent().toggleClass('not-empty', text_val !== "");
      }).focusout();
  });

  // Handle professional form submission via WhatsApp (clean, polite, no weird markdown symbols)
  $(document).off('submit', '.form').on('submit', '.form', function(e) {
    e.preventDefault();
    const name = ($('#form-name').val() || '').trim();
    const email = ($('#form-email').val() || '').trim();
    const company = ($('#form-company').val() || '').trim();
    const service = ($('#form-service').val() || '').trim();
    const message = ($('#form-message').val() || '').trim();

    if (!name) {
      alert('Please enter your name.');
      $('#form-name').focus();
      return;
    }

    // Clean professional business message without *, **, #, @ or weird markdown symbols
    let text = "Hello Nitish,\n\nI would like to discuss a project with PatnaHost.\n\n";
    text += "Name: " + name + "\n";
    if (email) text += "Email: " + email + "\n";
    if (company) text += "Organization: " + company + "\n";
    if (service) text += "Services Needed: " + service + "\n";
    if (message) text += "\nProject Details:\n" + message + "\n";
    text += "\nLooking forward to your response.\nBest regards.";

    const waUrl = "https://api.whatsapp.com/send?phone=917909069279&text=" + encodeURIComponent(text);
    window.location.href = waUrl;
  });

}

/**
* Footer Time Zone
*/
function initTimeZone() {
    
   if(document.querySelector("#timeSpan")) {
   // Time zone
   // https://stackoverflow.com/questions/39418405/making-a-live-clock-in-javascript/67149791#67149791
   // https://stackoverflow.com/questions/8207655/get-time-of-specific-timezone
   // https://stackoverflow.com/questions/63572780/how-to-update-intl-datetimeformat-with-new-date

   const timeSpan = document.querySelector("#timeSpan");

   const optionsTime = {
      timeZone: 'Asia/Kolkata',
      timeZoneName: 'short',
      // year: 'numeric',
      // month: 'numeric',
      // day: 'numeric',
      hour: '2-digit',
      hour12: 'true',
      minute: 'numeric',
      // second: 'numeric',
   };

   const formatter = new Intl.DateTimeFormat([], optionsTime);
   updateTime();
   setInterval(updateTime, 1000);

   function updateTime() {
         const dateTime = new Date();
         const formattedDateTime = formatter.format(dateTime);
         timeSpan.textContent = formattedDateTime;
   }
   }

}

/**
* Lazy Load
*/
function initLazyLoad() {
    // https://github.com/locomotivemtl/locomotive-scroll/issues/225
    // https://github.com/verlok/vanilla-lazyload
    var lazyLoadInstance = new LazyLoad({ 
      elements_selector: ".lazy",
      callback_loaded: function() {
        if (scroll && scroll.update) scroll.update();
      }
    });

}

/**
* Hero Media: Autoplay desktop video, pause on mobile
*/
function initHeroMedia() {
  const heroVideo = document.querySelector('.hero-video');
  if (!heroVideo) return;

  function handleHeroMedia() {
    if (window.innerWidth > 720) {
      heroVideo.muted = true;
      heroVideo.setAttribute('playsinline', '');
      let playPromise = heroVideo.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          // Autoplay was prevented
        });
      }
    } else {
      heroVideo.pause();
    }
  }

  handleHeroMedia();
  window.addEventListener('resize', handleHeroMedia);
}

/**
* Play Video Inview
*/
function initPlayVideoInview() {

  let allVideoDivs = gsap.utils.toArray('.playpauze');

  allVideoDivs.forEach((videoDiv, i) => {

    let videoElem = videoDiv.querySelector('video')

    ScrollTrigger.create({
      scroller: document.querySelector('[data-scroll-container]'),
      trigger: videoElem,
      start: '0% 120%',
      end: '100% -20%',
      onEnter: () => videoElem.play(),
      onEnterBack: () => videoElem.play(),
      onLeave: () => videoElem.pause(),
      onLeaveBack: () => videoElem.pause(),
    });

  });
}

/**
* Scrolltrigger Animations Desktop + Mobile
*/
function initScrolltriggerAnimations() {
    
  if(document.querySelector(".footer-wrap")) {
  // Scrolltrigger Animation : Footer + hamburger
  $(".footer-wrap").each(function (index) {
    let triggerElement = $(this);
    let targetElementHamburger = $(".btn-hamburger .btn-click");

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: "50% 100%",
        end: "100% 120%",
        scrub: 0
      }
    });
    tl.from(targetElementHamburger, {
      boxShadow: "0px 0px 0px 0px rgb(0, 0, 0)",
      ease: "none"
    });
  });
  }

  // Scrolltrigger Animation : Span Lines Intro Home
  if(document.querySelector(".span-lines.animate")) {
  $(".span-lines.animate").each(function (index) {
    let triggerElement = $(this);
    let targetElement = triggerElement.find(".span-line-inner");

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        toggleActions:'play none none reset', 
        start: "0% 100%",
        end: "100% 0%"
      }
    });
    if(targetElement && targetElement.length) {
      tl.from(targetElement, {
        y: "100%",
        stagger: .01,
        ease: "power3.out",
        duration: 1,
        delay: 0
      });
    }
  });
  }

  if(document.querySelector(".fade-in.animate")) {
  // Scrolltrigger Animation : Fade in
  $(".fade-in.animate").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(this);

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        toggleActions:'play none none reset',
        start: "0% 110%",
        end: "100% 0%",
      }
    });
    if(targetElement) {
      tl.from(targetElement, {
        y: "2em",
        opacity: 0,
        ease: "expo.out",
        duration: 1.75,
        delay: 0
      });
    }
  });
  }

  if(document.querySelector(".prestige-badge")) {
  // Scrolltrigger Animation : Prestige Badge
  $(".prestige-badge").each(function (index) {
    let triggerElement = $(this);
    let targetElement = $(".prestige-badge svg:nth-child(1)");
  
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: "0% 100%",
        end: "100% 0%",
        scrub: 0
      }
    });
    tl.to(targetElement, {
      rotate: -90,
      ease: "none"
    });
  });
  }

  // Disable GSAP on Mobile
  // Source: https://greensock.com/forums/topic/26325-disabling-scrolltrigger-on-mobile-with-mediamatch/
  
  // PatnaHost Kinetic Doodle Vector Engine
  $('[data-scroll-animation="draw"]').each(function () {
    let triggerElement = $(this);
    let targetElement = $(this).find('path');
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: "top 92%",
        end: "bottom 8%",
        toggleActions: "play reverse play reverse",
      }
    });
    if (typeof DrawSVGPlugin !== 'undefined') {
      tl.fromTo(targetElement, {
        drawSVG: '0% 0%',
      },{
        delay: 0.1,
        drawSVG: '0% 100%',
        duration: 0.85,
        clearProps: "all"
      });
    }
  });

  // PatnaHost Spring Physics Vector Sticker
  $('[data-scroll-animation="sticker"]').each(function () {
    let triggerElement = $(this);
    let targetElement = $(this);
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: "top 92%",
        end: "bottom 8%",
        toggleActions: "play reverse play reverse",
      }
    });
    tl.from(targetElement, {
      xPercent: () => gsap.utils.random(-20, 20),
      yPercent: () => gsap.utils.random(-20, 20),
      rotation: () => gsap.utils.random(-25, 25),
      scale: 0,
      duration: 0.85,
      ease: "elastic.out(1, 0.75)",
      clearProps: "all"
    });
  });

  // PatnaHost Integrated Doodle & Vector Micro-Interaction
  $('[data-scroll-animation="draw-sticker"]').each(function () {
    let triggerElement = $(this);
    let targetElement = $(this).find('[data-scroll-animation-target="draw"]').find('path');
    let targetElementSticker = $(this).find('[data-scroll-animation-target="sticker"]');
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerElement,
        start: "top 92%",
        end: "bottom 8%",
        toggleActions: "play none none none"
      }
    });
    tl.from(targetElementSticker, {
      delay: 0.1,
      xPercent: -25,
      yPercent: 25,
      rotate: -25,
      scale: 0,
      duration: 0.85,
      ease: "elastic.out(1, 0.75)",
      clearProps: "all"
    });
    if (typeof DrawSVGPlugin !== 'undefined') {
      tl.fromTo(targetElement, {
        drawSVG: '0% 0%',
      },{
        drawSVG: '0% 100%',
        duration: 0.85,
        clearProps: "all"
      }, "<");
    }
  });

  ScrollTrigger.matchMedia({
    
    // Desktop Only Scrolltrigger 
    "(min-width: 721px)": function() {
    
      if(document.querySelector(".home-header .arrow")) {
      // Scrolltrigger Animation : Header Arrow
      $(".home-header").each(function (index) {
        let triggerElement = $(this);
        let targetElement = $(".home-header .arrow");
      
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: triggerElement,
            start: "100% 100%",
            end: "100% 0%",
            scrub: 0
          }
        });
        tl.to(targetElement, {
          rotate: 90,
          ease: "none"
        }, 0);
      });
      }
      
      if(document.querySelector(".footer-footer-wrap")) {
      // Scrolltrigger Animation : Footer General Footer
      $(".footer-footer-wrap").each(function (index) {
        let triggerElement = $(this);
        let targetElementRound = $(".footer-rounded-div .rounded-div-wrap");
        let targetElementArrow = $("footer .arrow");
      
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: triggerElement,
            start: "0% 100%",
            end: "100% 100%",
            scrub: 0
          }
        });
        tl.to(targetElementRound, {
          height: 0,
          ease: "none"
        }, 0)
        .from(targetElementArrow, {
          rotate: 15,
          ease: "none"
        }, 0);
      });
      }

      if(document.querySelector(".footer-case-wrap")) {
        // Scrolltrigger Animation : Footer Case
        $(".footer-case-wrap").each(function (index) {
          let triggerElement = $(this);
          let targetElementRound = $(".footer-rounded-div .rounded-div-wrap");
        
          let tl = gsap.timeline({
            scrollTrigger: {
              trigger: triggerElement,
              start: "0% 100%",
              end: "100% 100%",
              scrub: 0
            }
          });
          tl.to(targetElementRound, {
            height: 0,
            ease: "none"
          }, 0);
        });
        }
      
      if(document.querySelector(".about-image .single-about-image")) {
      // Scrolltrigger Animation : About 
      $(".about-image .single-about-image").each(function (index) {
        let triggerElement = $(this);
        let targetElement = $(".about-image .arrow");
      
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: triggerElement,
            start: "15% 100%",
            end: "100% 0%",
            scrub: 0,
          }
        });
        tl.to(targetElement, {
          rotate: 60,
          ease: "none"
        }, 0);
      });
      }
      
      
      if(document.querySelector(".about-services")) {
      // Scrolltrigger Animation : About Services BG
      $(".about-services").each(function (index) {
        let triggerElement = $(this);
        let targetElement = $(".about-header, .line-globe, .about-image, .about-services");
      
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: triggerElement,
            start: "-25% 100%",
            end: "100% 100%",
            scrub: 0,
          }
        });
        tl.set(targetElement, {
          backgroundColor: "#FFFFFF",
        })
        tl.to(targetElement, {
          backgroundColor: "#E9EAEB",
          ease: "none",
        });
      });
      }
      
      if(document.querySelector(".digital-ball .globe")) {
      // Scrolltrigger Animation : Globe
      $("main").each(function (index) {
        let triggerElement = $(this);
        let targetElement = $(".digital-ball .globe");
      
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: triggerElement,
            start: "100% 100%",
            end: "100% 0%",
            scrub: 0,
          }
        });
        
        tl.to(targetElement, {
          ease: "none",
          rotate: 90
        });
      });
      }
    
    }, // End Desktop Only Scrolltrigger
  
    // Mobile Only Scrolltrigger
    "(max-width: 720px)": function() {
    
      if(document.querySelector(".footer-wrap")) {
        // Scrolltrigger Animation : Footer
        $(".footer-wrap").each(function (index) {
          let triggerElement = $(this);
          let targetElementRound = $(".footer-rounded-div .rounded-div-wrap");
        
          let tl = gsap.timeline({
            scrollTrigger: {
              trigger: triggerElement,
              start: "0% 100%",
              end: "100% 100%",
              scrub: 0
            }
          });
          tl.to(targetElementRound, {
            height: 0,
            ease: "none"
          }, 0);
        });
      }

      if(document.querySelector(".footer-case-wrap")) {
        // Scrolltrigger Animation : Footer Case (Dynamic Case Opening on Mobile)
        $(".footer-case-wrap").each(function () {
          let triggerElement = $(this);
          let targetTile = $(this).find(".tile-image-wrap .tile-image");
        
          if (targetTile.length) {
            gsap.fromTo(targetTile[0], {
              yPercent: 75
            }, {
              yPercent: 0,
              ease: "none",
              scrollTrigger: {
                trigger: triggerElement[0],
                scroller: window,
                start: "top 90%",
                end: "bottom 95%",
                scrub: true
              }
            });
          }
        });
      }

      if(document.querySelector(".about-image .single-about-image .overlay")) {
        // Mobile Parallax: About Image Nitish portrait (matches home hero smooth parallax, zero jitter)
        gsap.to(".about-image .single-about-image .overlay", {
          yPercent: 14,
          ease: "none",
          scrollTrigger: {
            trigger: ".about-image",
            scroller: window,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      }

      if(document.querySelector(".home-header .personal-image")) {
        // Mobile Parallax: Hero section Nitish portrait
        gsap.to(".home-header .personal-image", {
          yPercent: 16,
          ease: "none",
          scrollTrigger: {
            trigger: ".home-header",
            start: "top top",
            end: "bottom top",
            scrub: true
          }
        });
      }
    
    } // End Mobile Only Scrolltrigger
  
  }); // End GSAP Matchmedia

}

/**
 * 3D Interactive Device Tilt & Screen Parallax on Mouse Move
 */
function initDeviceInteractiveTilt() {
  $('.block-device').each(function() {
    const $section = $(this);
    const $device = $section.find('.device');
    const $screenSlider = $section.find('.screen-slider');
    const $slides = $section.find('.laptop-screen-slide');
    if (!$device.length) return;

    let targetRotX = 0;
    let targetRotY = 0;
    let targetX = 0;
    let targetY = 0;
    let targetScreenX = 0;
    let targetScreenY = 0;

    let currentRotX = 0;
    let currentRotY = 0;
    let currentX = 0;
    let currentY = 0;
    let currentScreenX = 0;
    let currentScreenY = 0;

    let isMouseInside = false;

    // Track mousemove across entire device section
    $section.on('mousemove', function(e) {
      isMouseInside = true;
      const rect = this.getBoundingClientRect();
      // Normalized offset (-1 to +1 from center)
      const normX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const normY = ((e.clientY - rect.top) / rect.height) * 2 - 1;

      // Premium subtle 3D tilt
      targetRotX = -normY * 12; // vertical tilt up/down
      targetRotY = normX * 16;  // horizontal tilt left/right
      targetX = normX * 24;     // subtle follow
      targetY = normY * 16;

      // Holographic depth shift for inside screen
      targetScreenX = -normX * 12;
      targetScreenY = -normY * 8;

      // Interactive slide crossfade if multiple slides exist
      if ($slides.length > 1) {
        $slides.css('animation', 'none'); // override CSS keyframes for manual cursor showcase
        const progressX = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
        const activeIdx = Math.min($slides.length - 1, Math.floor(progressX * $slides.length));
        $slides.each(function(idx) {
          if (idx === activeIdx) {
            gsap.to(this, { opacity: 1, duration: 0.35, overwrite: 'auto' });
          } else {
            gsap.to(this, { opacity: 0, duration: 0.35, overwrite: 'auto' });
          }
        });
      }
    });

    $section.on('mouseleave', function() {
      isMouseInside = false;
      targetRotX = 0;
      targetRotY = 0;
      targetX = 0;
      targetY = 0;
      targetScreenX = 0;
      targetScreenY = 0;

      gsap.to($device, {
        rotateX: 0,
        rotateY: 0,
        x: 0,
        y: 0,
        scale: 1,
        duration: 0.9,
        ease: 'power2.out',
        overwrite: 'auto'
      });

      if ($screenSlider.length) {
        gsap.to($screenSlider, {
          x: 0,
          y: 0,
          duration: 0.9,
          ease: 'power2.out',
          overwrite: 'auto'
        });
      }

      if ($slides.length > 1) {
        // Resume smooth display of initial slide
        $slides.each(function(idx) {
          gsap.to(this, { opacity: idx === 0 ? 1 : 0, duration: 0.5, overwrite: 'auto' });
        });
      }
    });

    function tiltLoop() {
      if (isMouseInside) {
        // 0.1 lerp for buttery organic movement
        currentRotX += (targetRotX - currentRotX) * 0.1;
        currentRotY += (targetRotY - currentRotY) * 0.1;
        currentX += (targetX - currentX) * 0.1;
        currentY += (targetY - currentY) * 0.1;
        currentScreenX += (targetScreenX - currentScreenX) * 0.1;
        currentScreenY += (targetScreenY - currentScreenY) * 0.1;

        gsap.set($device, {
          rotateX: currentRotX,
          rotateY: currentRotY,
          x: currentX,
          y: currentY,
          scale: 1.025,
          transformPerspective: 1200
        });

        if ($screenSlider.length) {
          gsap.set($screenSlider, {
            x: currentScreenX,
            y: currentScreenY
          });
        }
      }
      requestAnimationFrame(tiltLoop);
    }
    requestAnimationFrame(tiltLoop);
  });
}

/**
 * Transformation Story Chapters - Up & Down Scroll Text Animation
 * Triggers smoothly both when scrolling down and scrolling back up
 */
function initStoryTextScrollAnimation() {
  const scrollerEl = document.querySelector('[data-scroll-container]');

  // Headline reveal on scroll up and down
  $('.section-story-title').each(function() {
    gsap.from($(this), {
      scrollTrigger: {
        trigger: this,
        scroller: scrollerEl,
        start: 'top 88%',
        end: 'bottom 10%',
        toggleActions: 'play reverse play reverse'
      },
      y: 40,
      opacity: 0,
      duration: 1.0,
      ease: 'power3.out'
    });
  });

  // Each chapter reveals on scroll up and down
  $('.story-chapter').each(function() {
    const $chapter = $(this);
    const $leftCol = $chapter.find('.story-col-left');
    const $rightCol = $chapter.find('.story-col-right');

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: this,
        scroller: scrollerEl,
        start: 'top 85%',
        end: 'bottom 15%',
        toggleActions: 'play reverse play reverse'
      }
    });

    tl.from($leftCol, {
      y: 35,
      opacity: 0,
      duration: 0.85,
      ease: 'power3.out'
    }, 0)
    .from($rightCol, {
      y: 45,
      opacity: 0,
      duration: 0.95,
      ease: 'power3.out'
    }, 0.1);
  });
}



/**
 * PatnaHost Kinetic Typography & Strewing Motion Engine
 */
function initMWG11() {
  const $containers = $('.horizontal-words');
  if (!$containers.length) return;

  function runMWG() {
    $containers.each(function () {
      const $container = $(this);
      const $h2 = $container.find('.horizontal-words__h2');

      if ($h2.length && typeof SplitText !== 'undefined' && !$h2.find('.letter').length) {
        try {
          SplitText.create($h2[0], {
            type: "chars",
            charsClass: "letter"
          });
        } catch (e) {
          console.warn('SplitText error:', e);
        }
      }

      const $content = $container.find('.horizontal-words__content');
      const $text = $container.find('.horizontal-words__relative');
      const $letters = $container.find('.letter');
      const $stickers = $container.find('.horizontal-words__sticker-svg, .horizontal-words__sticker-floating');
      const $arrow = $container.find('.horizontal-words__arrow-svg path, .horizontal-words__arrow-end-svg path');

      if (!$text.length) return;

      const scrollerEl = document.querySelector('[data-scroll-container]');
      const isMobile = window.innerWidth <= 767;
      const hasSmoothLoco = scroll && scroll.options && scroll.options.smooth && !isMobile;
      const scrollerTarget = hasSmoothLoco ? scrollerEl : window;

      // Kill previous ScrollTriggers for this container
      ScrollTrigger.getAll().forEach(st => {
        if (st.trigger === $container[0] || (st.pin && st.pin === $container[0])) {
          st.kill();
        }
      });

      // Ensure text and letters never wrap
      $text.css({ 'white-space': 'nowrap', 'width': 'max-content', 'display': 'inline-block' });
      $letters.css({ 'white-space': 'nowrap', 'display': 'inline-block', 'will-change': 'transform' });

      const winWidth = window.innerWidth;
      const textWidth = $text[0].scrollWidth || $text.outerWidth() || 2000;
      const marginLeft = parseFloat($text.css('margin-left')) || (winWidth * (isMobile ? 0.04 : 0.1));
      
      // Calculate exact shift to place the start of text completely outside the right edge of the screen (blank screen first!):
      const shiftX = Math.max(winWidth - marginLeft + 40, winWidth * 0.95);
      const startXPercent = Math.max((shiftX / textWidth) * 100, isMobile ? 38 : 58);
      const endXPercent = isMobile ? -85 : -95;

      const scrollTween = gsap.fromTo($text, {
        xPercent: startXPercent
      }, {
        xPercent: endXPercent,
        ease: 'none',
        scrollTrigger: {
          trigger: $container[0],
          scroller: scrollerTarget,
          start: "top top",
          end: "bottom bottom",
          scrub: isMobile ? 0.4 : 0.6,
          invalidateOnRefresh: true
        }
      });

      // Individual character bouncy physics: smooth glide that straightens quickly
      // Becomes 100% straight before reaching viewport center so it is always level and crisp!
      if ($letters.length) {
        $letters.each(function () {
          gsap.from(this, {
            yPercent: (Math.random() - 0.5) * (isMobile ? 80 : 140),
            rotation: (Math.random() - 0.5) * (isMobile ? 18 : 24),
            ease: "sine.out",
            scrollTrigger: {
              trigger: this,
              scroller: scrollerTarget,
              containerAnimation: scrollTween,
              start: 'left 105%',
              end: isMobile ? 'left 70%' : 'left 55%',
              scrub: 0.4
            }
          });
        });
      }

      // Floating Stickers: glide & scale into place before center
      if ($stickers.length) {
        $stickers.each(function () {
          gsap.from(this, {
            scale: 0.45,
            yPercent: (Math.random() - 0.5) * 120,
            rotation: (Math.random() - 0.5) * 20,
            ease: "sine.out",
            scrollTrigger: {
              trigger: this,
              scroller: scrollerTarget,
              containerAnimation: scrollTween,
              start: 'left 105%',
              end: isMobile ? 'left 70%' : 'left 55%',
              scrub: 0.4
            }
          });
        });
      }

      // Draw hand-drawn SVG arrows
      if ($arrow.length && typeof DrawSVGPlugin !== 'undefined') {
        $arrow.each(function () {
          gsap.from(this, {
            drawSVG: '0% 0%',
            duration: 1,
            scrollTrigger: {
              trigger: this,
              scroller: scrollerTarget,
              containerAnimation: scrollTween,
              start: 'left 95%',
              end: 'left 30%',
              scrub: 0.6
            }
          });
        });
      }
    });

    if (window.locoScroll && window.locoScroll.update) {
      window.locoScroll.update();
    }
    ScrollTrigger.refresh();
  }

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(runMWG);
  } else {
    setTimeout(runMWG, 300);
  }
}


