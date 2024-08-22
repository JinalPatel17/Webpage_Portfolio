/** 
 * ===================================================================
 * main js
 *
 * ------------------------------------------------------------------- 
 */ 

(function($) {

	"use strict";

	/*---------------------------------------------------- */
	/* Preloader
	------------------------------------------------------ */ 
   $(window).load(function() {

      // will first fade out the loading animation 
    	$("#loader").fadeOut("slow", function(){

        // will fade out the whole DIV that covers the website.
        $("#preloader").delay(300).fadeOut("slow");

      });       

  	})


  	/*---------------------------------------------------- */
  	/* FitText Settings
  	------------------------------------------------------ */
  	setTimeout(function() {

   	$('#intro h1').fitText(1, { minFontSize: '42px', maxFontSize: '84px' });

  	}, 100);


	/*---------------------------------------------------- */
	/* FitVids
	------------------------------------------------------ */ 
  	$(".fluid-video-wrapper").fitVids();


	/*---------------------------------------------------- */
	/* Owl Carousel
	------------------------------------------------------ */ 
	$("#owl-slider").owlCarousel({
        navigation: false,
        pagination: true,
        itemsCustom : [
	        [0, 1],
	        [700, 2],
	        [960, 3]
	     ],
        navigationText: false
    });


	/*----------------------------------------------------- */
	/* Alert Boxes
  	------------------------------------------------------- */
	$('.alert-box').on('click', '.close', function() {
	  $(this).parent().fadeOut(500);
	});	


	/*----------------------------------------------------- */
	/* Stat Counter
  	------------------------------------------------------- */
   var statSection = $("#stats"),
       stats = $(".stat-count");

   statSection.waypoint({

   	handler: function(direction) {

      	if (direction === "down") {       		

			   stats.each(function () {
				   var $this = $(this);

				   $({ Counter: 0 }).animate({ Counter: $this.text() }, {
				   	duration: 4000,
				   	easing: 'swing',
				   	step: function (curValue) {
				      	$this.text(Math.ceil(curValue));
				    	}
				  	});
				});

       	} 

       	// trigger once only
       	this.destroy();      	

		},
			
		offset: "90%"
	
	});	


	/*---------------------------------------------------- */
	/*	Masonry
	------------------------------------------------------ */
	var containerProjects = $('#folio-wrapper');

	containerProjects.imagesLoaded( function() {

		containerProjects.masonry( {		  
		  	itemSelector: '.folio-item',
		  	resize: true 
		});

	});
	// video editing
	const bgVideo = document.getElementById('bg-video');
	bgVideo.setAttribute ('src', '../Webpage_Portfolio/vds/Goku_mp4_frmt.mp4');
	// const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
   
	// if (isMobile) {
	//    bgVideo.setAttribute('src', '../Webpage_Portfolio/vds/Goku_webm_frmt.webm');
	// } else {
	   
	// }
	var video = document.getElementById('bg-video');
	video.playbackRate = 1;

	/*----------------------------------------------------*/
	/*	Modal Popup
	------------------------------------------------------*/
   $('.item-wrap a').magnificPopup({

      type:'inline',
      fixedContentPos: false,
      removalDelay: 300,
      showCloseBtn: false,
      mainClass: 'mfp-fade'

   });

   $(document).on('click', '.popup-modal-dismiss', function (e) {
   	e.preventDefault();
   	$.magnificPopup.close();
   });

	
	/*-----------------------------------------------------*/
  	/* Navigation Menu
   ------------------------------------------------------ */  
   var toggleButton = $('.menu-toggle'),
       nav = $('.main-navigation');

   // toggle button
   toggleButton.on('click', function(e) {

		e.preventDefault();
		toggleButton.toggleClass('is-clicked');
		nav.slideToggle();

	});

   // nav items
  	nav.find('li a').on("click", function() {   

   	// update the toggle button 		
   	toggleButton.toggleClass('is-clicked'); 
   	// fadeout the navigation panel
   	nav.fadeOut();   		
   	     
  	});


   /*---------------------------------------------------- */
  	/* Highlight the current section in the navigation bar
  	------------------------------------------------------ */
	var sections = $("section"),
	navigation_links = $("#main-nav-wrap li a");	

	sections.waypoint( {

       handler: function(direction) {

		   var active_section;

			active_section = $('section#' + this.element.id);

			if (direction === "up") active_section = active_section.prev();

			var active_link = $('#main-nav-wrap a[href="#' + active_section.attr("id") + '"]');			

         navigation_links.parent().removeClass("current");
			active_link.parent().addClass("current");

		}, 

		offset: '25%'
	});


	/*---------------------------------------------------- */
  	/* Smooth Scrolling
  	------------------------------------------------------ */
  	$('.smoothscroll').on('click', function (e) {
	 	
	 	e.preventDefault();

   	var target = this.hash,
    	$target = $(target);

    	$('html, body').stop().animate({
       	'scrollTop': $target.offset().top
      }, 800, 'swing', function () {
      	window.location.hash = target;
      });

  	});  
  

   /*---------------------------------------------------- */
	/*  Placeholder Plugin Settings
	------------------------------------------------------ */ 
	$('input, textarea, select').placeholder()  


  	/*---------------------------------------------------- */
	/*	contact form For AJAX Coming soon
	------------------------------------------------------ */

	/* local validation */
	// $('#contactForm').validate({

		/* submit via ajax */
	// 	submitHandler: function(form) {

	// 		var sLoader = $('#submit-loader');

	// 		$.ajax({      	

	// 	      type: "POST",
	// 	    //   url: "inc/sendEmail.php",
	// 	      data: $(form).serialize(),
	// 	      beforeSend: function() { 

	// 	      	sLoader.fadeIn(); 

	// 	      },
	// 	      success: function(msg) {

	//             // Message was sent
	//             if (msg == 'OK') {
	//             	sLoader.fadeOut(); 
	//                $('#message-warning').hide();
	//                $('#contactForm').fadeOut();
	//                $('#message-success').fadeIn();   
	//             }
	//             // There was an error
	//             else {
	//             	sLoader.fadeOut(); 
	//                $('#message-warning').html(msg);
	// 	            $('#message-warning').fadeIn();
	//             }

	// 	      },
	// 	      error: function() {

	// 	      	sLoader.fadeOut(); 
	// 	      	$('#message-warning').html("Something went wrong. Please try again.");
	// 	         $('#message-warning').fadeIn();

	// 	      }

	//       });     		
  	// 	}

	// });
// this is part of google form 
document.getElementById("feedbackForm").addEventListener("submit", function(event) {
	event.preventDefault(); // Prevent the form from submitting traditionally
  
	// Collect form data
	const form = new FormData(event.target);
  
	// Submit data to Google Forms (replace FORM_ACTION_URL)
	fetch('https://docs.google.com/forms/d/e/1FAIpQLSfS4sMYPK6rZV82DfW-2wQafK6M-UgTUQ410HEgNVgZqn5PfQ/formResponse', {
	  method: 'POST',
	  body: form,
	})
	  .then(response => {
		// Handle the response as needed (e.g., show a thank you message)
		console.log('Feedback submitted successfully');
		// Add your custom success logic here
  
		// Clear the form fields
		event.target.reset();
  
		// Message was sent
		if (response.ok) {
		  $('#message-warning').hide();
		  $('#contactForm').fadeOut();
		  $('#message-success').fadeIn();
		  setTimeout(() => {
			$('#message-warning').fadeOut();
		}, 3000); 
		} else {
		  // There was an error
		  response.text().then(msg => {
			$('#message-warning').html(msg);
			$('#message-warning').fadeIn();
		  });
		  // Fade out the warning message after 3 seconds
		  setTimeout(() => {
			$('#message-warning').fadeOut();
		}, 3000);
		}
	  })
	  .catch(error => {
		console.error('Error submitting feedback:', error);
		// Add your custom error handling here
		$('#message-warning').html("Something went wrong. Please try again.");
		$('#message-warning').fadeIn();
	  });
	  // Fade out the warning message after 3 seconds
	  setTimeout(() => {
        $('#message-warning').fadeOut();
    }, 3000);
  });
// the following part is for form control
const labels = document.querySelectorAll(".form-control label");
	labels.forEach((label) => {
		label.innerHTML = label.innerText
		.split("")
		.map((letter,idx) =>
		`<span style="transition-delay:${idx * 50}ms">${letter}</span>` )
		.join("");
});
 	/*----------------------------------------------------- */
  	/* Back to top
   ------------------------------------------------------- */ 
	var pxShow = 300; // height on which the button will show
	var fadeInTime = 400; // how slow/fast you want the button to show
	var fadeOutTime = 400; // how slow/fast you want the button to hide
	var scrollSpeed = 300; // how slow/fast you want the button to scroll to top. can be a value, 'slow', 'normal' or 'fast'

   // Show or hide the sticky footer button
	jQuery(window).scroll(function() {

		if (!( $("#header-search").hasClass('is-visible'))) {

			if (jQuery(window).scrollTop() >= pxShow) {
				jQuery("#go-top").fadeIn(fadeInTime);
			} else {
				jQuery("#go-top").fadeOut(fadeOutTime);
			}

		}		

	});		

})(jQuery);