"use strict";

// Header Scroll
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 120) {
        $("#header").addClass("darkHeader");
    } else {
        $("#header").removeClass("darkHeader");
    }
});

$('.owl-carousel').owlCarousel({
    loop: true,
    items: 1,
    nav: true,
    dots: true,
    slideSpeed: 300,
    paginationSpeed: 400,
    singleItem: true,
    autoPlay: true,
    autoplayTimeout: 500,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        }
    }
});



$('document').ready(function(){
	$('input[type="text"], input[type="email"], textarea').focus(function(){
		var background = $(this).attr('id');
		$('#' + background + '-form').addClass('formgroup-active');
		$('#' + background + '-form').removeClass('formgroup-error');
	});
	$('input[type="text"], input[type="email"], textarea').blur(function(){
		var background = $(this).attr('id');
		$('#' + background + '-form').removeClass('formgroup-active');
	});

function errorfield(field){
	$(field).addClass('formgroup-error');
	console.log(field);	
}

$("#waterform").submit(function() {
	var stopsubmit = false;

if($('#name').val() == "") {
	errorfield('#name-form');
	stopsubmit=true;
}
if($('#email').val() == "") {
	errorfield('#email-form');
	stopsubmit=true;
}
  if(stopsubmit) return false;
});
		
});



//Google map


google.maps.event.addDomListener(window, 'load', init);
        
function init() {
  var mapOptions = {
    zoom: 14,
    scrollwheel: false,
    center: new google.maps.LatLng(-8.707447, 115.187375), 
    styles:
/* paste snazzy maps js style here */    [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]
/* snazzy maps js style end here */    
  };
  
var mapElement = document.getElementById('map');
var map = new google.maps.Map(mapElement, mapOptions);
var marker = new google.maps.Marker({
  position: new google.maps.LatLng(-8.707447, 115.187375),
  map: map,
  icon: 'http://indasurf.com/images/pin.png'
  });
}



