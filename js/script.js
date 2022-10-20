$(function(){
	var wh = window.innerHeight,
		$iphone = $('.iphone'),
		$innerS1 = $('.innerS1'),
		$innerS2 = $('.innerS2'),
		$innerS3 = $('.innerS3'),
		$innerS4 = $('.innerS4'),
		$innerS5 = $('.innerS5'),
		$screenHat = $('.screenHat'), //열려있는 맥북
		$screenA = $('.screenA'), // 위에서 본 맥북
		$screenB = $('.screenB'), // 반쯤 닫힌 맥북
		$screenC = $('.screenC'); // 돌린 맥북 
		$screenD = $('.screenD'); // 다른 products

	//init
	var controller = new ScrollMagic.Controller({
		globalSceneOptions: {triggerHook: 'onLeave'}
	});
	
	//common scene
	$('section').each(function(){
		new ScrollMagic.Scene({
			triggerElement: this,
			duration: '50%'
		})
		.setPin(this)
		.addTo(controller)
//		.addIndicators();
	});

	//Phone Motion Timeline
	var phoneTimeline = new TimelineMax();
	phoneTimeline
		.from($iphone, 1, {yPercent:30, xPercent:100, ease: Power4.easeInOut})
		.to($innerS1, 1, {opacity:0, yPercent: -10, scale: .98}, '0');
	
	var phoneScene = new ScrollMagic.Scene({
		triggerElement: ($('body')[0]),
		duration: '100%'
	})
	.setTween(phoneTimeline)
	.addTo(controller)
//	.addIndicators();

	//Letter A Motion Timeline
	var textTimelineA = new TimelineMax();
	textTimelineA
		.to($screenHat, 1, {yPercent:20, autoAlpha:0, ease: Power4.easeInOut})
		.fromTo($screenA, 1, {yPercent:20, autoAlpha:0, scale:0.5}, {yPercent:15, autoAlpha:1, scale:1, ease: Power4.easeInOut}, 0)
		.from($innerS2, 1, {autoAlpha: 0}, '-=0.3');
	
	var textSceneA = new ScrollMagic.Scene({
		offset: wh*0.6,
		triggerElement: $('body')[0],
		duration: '100%'
	})
	.setTween(textTimelineA)
	.addTo(controller)
//	.addIndicators();

	//Letter B Motion Timeline
	var textTimelineB = new TimelineMax();
	textTimelineB
	.to($screenA, 1, {yPercent:20, autoAlpha:0, ease: Power4.easeInOut})
	.fromTo($screenB, 1, {yPercent:20, autoAlpha:0, scale:.8}, {yPercent:10, autoAlpha:1, scale:1, ease: Power4.easeInOut}, 0)
	.from($innerS3, 1, {autoAlpha: 0}, '-=0.3');
	
	var textSceneB = new ScrollMagic.Scene({
		triggerElement: $('.innerS2 h2')[0],
		duration: '100%'
	})
	.setTween(textTimelineB)
	.addTo(controller)
//	.addIndicators();

	//letter c

	var textTimelineC = new TimelineMax();
	textTimelineC
	.to($screenB, 1, {yPercent:20, autoAlpha:0, ease: Power4.easeInOut})
	.fromTo($screenC, 1, {yPercent:20, autoAlpha:0, scale:.8}, {yPercent:10, autoAlpha:1, scale:1, ease: Power4.easeInOut}, 0)
	.from($innerS4, 1, {autoAlpha: 0}, '-=.7');
	
	var textSceneC = new ScrollMagic.Scene({
		triggerElement: $('.innerS3 h2')[0],
		duration: '100%'
	})
	.setTween(textTimelineC)
	.addTo(controller)
//	.addIndicators();

// letter D
var textTimelineD = new TimelineMax();
textTimelineD
.to($screenC, 1, {yPercent:20, autoAlpha:0, ease: Power4.easeInOut})
.fromTo($screenD, 1, {yPercent:20, autoAlpha:0, scale:.8}, {yPercent:0, autoAlpha:1, scale:1, ease: Power4.easeInOut}, 0)
.from($innerS5, 1, {autoAlpha: 0}, '-=.7');

var textSceneD = new ScrollMagic.Scene({
	triggerElement: $('.innerS4 h2')[0],
	duration: '100%'
})
.setTween(textTimelineD)
.addTo(controller)
//.addIndicators();
});

var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 5000); // Change image every 5 seconds
};

