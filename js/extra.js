var $ = jQuery;
jQuery(document).ready(function() {
	//////////////////////
    ////  Home  Page  ////
    //////////////////////	
	// Home Menu Logo
	$('body').prepend('<div class="logo-image-wrapper"><img class="logo-image" src="/wp-content/themes/IronSpirits2/images/ironspirits-logo.png"/></div>')

	// Green Wrapper around text in carousel images
	$('.home-slide-title').addClass('green-wrapper')
	$('.introduction-content').prepend('<div class="philosophy-green"></div>')
	$('.philosophy-green').html('<div class="phil-rotate-text"><h3>OUR PHILOSOPHY</h3> <div class="philosophy-text"><br/>Enjoy - the challenge of each opportunity <br/>Enhance - our skills as craftsmen <br/>Engage - our customers in the process <br/>Excel - in everyhing we create and deliver</div></div>')
	// Social Media section (#twitter)
	// $('.section-description').html('')
	// $('.section-header').html('')


	// Add icons on front page to each section
	$('.logo1').html('<img src="/wp-content/themes/IronSpirits2/images/themed.jpg"/>')
	$('.logo2').html('<img src="/wp-content/themes/IronSpirits2/images/signage.jpg"/>')
	$('.logo3').html('<img src="/wp-content/themes/IronSpirits2/images/props.jpg"/>')
	$('.logo4').html('<img src="/wp-content/themes/IronSpirits2/images/murals.jpg"/>')
	$('.logo5').html('<img src="/wp-content/themes/IronSpirits2/images/sculpture.jpg"/>')
	$('.logo6').html('<img src="/wp-content/themes/IronSpirits2/images/design.jpg"/>')


	// Social Media Section
	var twitterHTML = ''
	twitterHTML += '<div><h3 class="section-title twitter-title">CONNECT WITH US</h3></div>'
	twitterHTML += "<div class='twitter-wrapper'>"
		twitterHTML += "<a target='_blank' href='https://www.addthis.com/tellfriend_v2.php?v=300&winname=addthis&pub=ra-5162fff83017c0e0&source=men-300&lng=en&s=email&url=https%3A%2F%2Fwww.ironspirits.com%2Fhome.html&title=Iron%20Spirits%20-%20Children%20Themed%20Environments%2C%20Architectural%20Signage%2C%20Business%20Signs&ate=AT-ra-5162fff83017c0e0/-/-/58b2fdac2f4cb6ab/2&uid=589d13ce469a9531&description=Iron%20Spirits%20Children%20Themed%20Environments%20%E2%80%A2%20Ministry%20%26%20Corporate%20Themed%20Space%20Design%2C%20Signage%2C%20Design%20Planning%2C%20Custom%20Props%2C%20Fixtures%20%26%20Sets%2C%20Illustration%20%26%20Design&ct=1&ui_email_to=&ui_email_from=&ui_email_note=&pre=https%3A%2F%2Fwww.ironspirits.com%2Fabout-us.html&tt=0&captcha_provider=recaptcha2&pro=0&ats=imp_url%3D1%26url%3Dhttps%253A%252F%252Fwww.ironspirits.com%252Fhome.html%26title%3DIron%2520Spirits%2520-%2520Children%2520Themed%2520Environments%252C%2520Architectural%2520Signage%252C%2520Business%2520Signs%26description%3DIron%2520Spirits%2520Children%2520Themed%2520Environments%2520%25E2%2580%25A2%2520Ministry%2520%2526%2520Corporate%2520Themed%2520Space%2520Design%252C%2520Signage%252C%2520Design%2520Planning%252C%2520Custom%2520Props%252C%2520Fixtures%2520%2526%2520Sets%252C%2520Illustration%2520%2526%2520Design%26smd%3Drsi%253D%2526gen%253D0%2526rsc%253D%2526dr%253Dhttps%25253A%25252F%25252Fwww.ironspirits.com%25252Fabout-us.html%2526sta%253DAT-ra-5162fff83017c0e0%25252F-%25252F-%25252F58b2fdac2f4cb6ab%25252F1%26hideEmailSharingConfirmation%3Dundefined%26service%3Demail%26media%3Dundefined%26passthrough%3Dundefined%26email_template%3Dundefined%26email_vars%3Dundefined&atc=pubid%3Dra-5162fff83017c0e0%26product%3Dundefined%26widgetId%3Dundefined%26ui_pane%3Demail&rb=false'>"
			twitterHTML += "<img class='each-logo1 aa' src='/wp-content/themes/IronSpirits2/images/mail.png'/>"
		twitterHTML += '</a>'
		twitterHTML += "<a target='_blank' href='https://www.facebook.com/IronSpirits/'>"
			twitterHTML += "<img class='each-logo1 bb' src='/wp-content/themes/IronSpirits2/images/facebook.png'/>"
		twitterHTML += '</a>'
		twitterHTML += "<a target='_blank' href='https://twitter.com/IronSpirits_llc'>"
			twitterHTML += "<img class='each-logo1 cc' src='/wp-content/themes/IronSpirits2/images/twitter.png'/>"
		twitterHTML += '</a>'
		twitterHTML += "<a target='_blank' href='https://www.pinterest.com/ironspirits2/''>"
			twitterHTML += "<img class='each-logo1 dd' src='/wp-content/themes/IronSpirits2/images/pinterest.png'/>"
		twitterHTML += '</a>'
		twitterHTML += "<a target='_blank' href='https://www.instagram.com/iron_spirits/'>"
			twitterHTML += "<img class='each-logo1 ee' src='/wp-content/themes/IronSpirits2/images/instagram.png'/>"
		twitterHTML += '</a>'
	twitterHTML += '</div>'
    jQuery('#twitter').html(twitterHTML);


	// Client Section
	var clientHTML = ''
	clientHTML += '<div class="client-entire-wrapper">'
		clientHTML += '<h3 class="section-title">BRANDS WE WORKED WITH</h3>'
		clientHTML += "<div class='client-wrapper'>"
			clientHTML += "<div class='each-client'> <a target='_blank' href='http://mellowmushroom.com/'><img class='client-img' src='/wp-content/themes/IronSpirits2/images/mellowMushroom.jpg'/> </a></div>"
			clientHTML += "<div class='each-client'> <a href='http://www.michelinman.com/US/en/homepage.html' target='_blank'><img class='client-img' src='/wp-content/themes/IronSpirits2/images/michelin.jpg' /> </a></div>"
			clientHTML += "<div class='each-client'> <a href='http://northpoint.org/' target='_blank'><img class='client-img' src='/wp-content/themes/IronSpirits2/images/church.jpg'/> </a></div>"
		clientHTML += '</div>'
	clientHTML += '</div>'
    jQuery('#clients').html(clientHTML);


	// Contact Section
	jQuery('.contact_map').insertAfter(jQuery("#contact .container .section-content"))
	jQuery('#nf-form-1-cont').append(jQuery(".contact_map"))
	jQuery('#mtscontact_submit').insertAfter(jQuery("#mtscontact_message"))

	

	//////////////////////
    //// Contact Page ////
    //////////////////////
    var addyHTML = ''
    addyHTML += '<div class="addy-wrapper">'
    	addyHTML += '<div class="address">6020 Parkway North Drive, Bldg. C Suite 2000</div>'
    	addyHTML += '<div class="address">Cumming, Ga 30040 US</div>'
    	addyHTML += '<div class="phone">Telephone: 404.422.2719</div>'
    	addyHTML += '<div class="phone">Email:  ironspirits.info@gmail.com</div>'
    addyHTML += '</div>'
	$('.contact-right').prepend(addyHTML)
	var largerMap = '<a target="_blank" href="https://www.google.com/maps?v=2&f=q&ie=UTF8&t=m&iwloc&q=6020+Parkway+North+Drive,+Cumming,+GA,+United+States&z=13&source=embed">View Larger Map</a>'
	$('.contact-right').append(largerMap)



	///////////////////////
    //// Services Page ////
    ///////////////////////
    var serviceHTML = ''
    serviceHTML += '<div class="each-service-wrapper">'
    	serviceHTML += '<div class="background-image"><img src="/wp-content/themes/IronSpirits2/images/service-1-design.jpg"/></div>'
    	serviceHTML += '<div class="service-text-right">Service 1111<br/>Service 1111<br/>Service 1111<br/>Service 1111<br/></div>'
    serviceHTML += '</div>'
        serviceHTML += '<div class="each-service-wrapper">'
    	serviceHTML += '<div class="background-image"><img src="/wp-content/themes/IronSpirits2/images/service-2-signage.jpg"/></div>'
    	serviceHTML += '<div class="service-text-left">Service 1111<br/>Service 1111<br/>Service 1111<br/>Service 1111<br/></div>'
    serviceHTML += '</div>'
    serviceHTML += '<div class="each-service-wrapper">'
    	serviceHTML += '<div class="background-image"><img src="/wp-content/themes/IronSpirits2/images/service-3-mural.jpg"/></div>'
    	serviceHTML += '<div class="service-text-right">Service 1111<br/>Service 1111<br/>Service 1111<br/>Service 1111<br/></div>'
    serviceHTML += '</div>'
    serviceHTML += '<div class="each-service-wrapper">'
    	serviceHTML += '<div class="background-image"><img src="/wp-content/themes/IronSpirits2/images/service-4-theme.jpg"/></div>'
    	serviceHTML += '<div class="service-text-left">Service 1111<br/>Service 1111<br/>Service 1111<br/>Service 1111<br/></div>'
    serviceHTML += '</div>'
    serviceHTML += '<div class="each-service-wrapper">'
    	serviceHTML += '<div class="background-image"><img src="/wp-content/themes/IronSpirits2/images/service-5-props.jpg"/></div>'
    	serviceHTML += '<div class="service-text-right">Service 1111<br/>Service 1111<br/>Service 1111<br/>Service 1111<br/></div>'
    serviceHTML += '</div>'
    serviceHTML += '<div class="each-service-wrapper">'
    	serviceHTML += '<div class="background-image"><img src="/wp-content/themes/IronSpirits2/images/service-6-sculpture.jpg"/></div>'
    	serviceHTML += '<div class="service-text-left">Service 1111<br/>Service 1111<br/>Service 1111<br/>Service 1111<br/></div>'
    serviceHTML += '</div>'

    $('#services-wrapper').html(serviceHTML)


	
	///////////////////////
    ///// Process Page ////
    ///////////////////////
    var process1 = '<div class="process1-text"><h2 class="process-text-title">Client Collaboration</h2><div class="process-actual-text">After contacting us, we will meet with you at your site to discuss initial thoughts and needs.  In most cases, we will take photos and provide real-time sketches as well as initial 2D art during our time together.  This is a time where we listen to your vision, your values, your limitations, and your contingencies so that we can begin to create a solution from a depth of artistic offerings.  This process normally takes 1 – to – 2 days dependent on site size and involves our Creative Director.</div>'
    var process2 = '<div class="process2-text"><h2 class="process-text-title">Conceptual Desgin</h2><div class="process-actual-text">With the input garnered from the consultation, our creative team begins develop your vision by determining initial design elements, themes, and specialty nuances.  Rough concepts from sketches – to 2D – to 3D – renderings are presented dependent upon your design budget.  This is the time where you have the chance to see your vision on paper and determine what works and what does not work.  This process can take 2 days – to – 2 weeks dependent upon the level of design finish and involves our Creative Director and Creative Engineer.</div></div>'
    var process3 = '<div class="process3-text"><h2 class="process-text-title">Final Design</h2><div class="process-actual-text">Taking your changes, our designers build the final representation of your environment.  Color, measurements, materials, time constraints, and costs are all incorporated into a deliverable which will serve as a guiding document for production and fabrication.  This process can take 2-3 weeks and involves our Creative Director, Creative Engineer, and Operations Director.</div></div>'
    var process4 = '<div class="process4-text"><h2 class="process-text-title">Production and Fabrication</h2><div class="process-actual-text">Upon sign-off of final design and your production contract, all your project components move into the production and fabrication queue of engineering, carpentry, sculpture, welding and finish.  Installation preparation also begins as we plan the final step of bringing your project to your site.  This process can take 6 weeks – to – 6 months dependent upon project size and involves our Creative Engineer, Production Director, Production Crew, and Installation Director.</div></div>'
    var process5 = '<div class="process5-text"><h2 class="process-text-title">Installation</h2><div class="process-actual-text">We have been stewards of your project and have seen things begin to take shape up until this point in time; however, now you see the work come to completion.  Our hard working install team takes all the components of your project and brings your space to life.  Care is placed on comprehensive safety checks, high quality finish, real time spatial alignment, and incorporated client feedback.  This process can take 2 days – to – 2 weeks and involves our Creative Director, Production Director, Installation Director, and Install Crew.</div></div>'
    var process6 = '<div class="process6-text"><h2 class="process-text-title">Quality Assurance</h2><div class="process-actual-text">Our core values are craftsmanship, stewardship, and client collaboration.  This step in our process manifests those values by giving us the chance to receive feedback on improvements, perform safety checks and repairs, compare before and after expectations and, in most cases, plan next steps for future work.  This process is ongoing with a 1 day visit within 2 months of install date and involves our Creative Director and Operations Director.</div></div>'
    
    var processHTML = ''    
    processHTML += '<div class="process-wrapper">'
    	processHTML += '<div class="process-image-background">'
    		processHTML += '<img class="process-actual-image" src="/wp-content/themes/IronSpirits2/images/process_bg.png"/>'
    		processHTML += '<div class="process-text"><img class="fade-from-left" src="/wp-content/themes/IronSpirits2/images/anvil.png"/></div>'
    	processHTML += '</div>'
    	processHTML += '<div class="process-tab process-1"><img src="/wp-content/themes/IronSpirits2/images/process1.png"/></div>'
    	processHTML += '<div class="process-tab process-2"><img src="/wp-content/themes/IronSpirits2/images/process2.png"/></div>'
    	processHTML += '<div class="process-tab process-3"><img src="/wp-content/themes/IronSpirits2/images/process3.png"/></div>'
    	processHTML += '<div class="process-tab process-4"><img src="/wp-content/themes/IronSpirits2/images/process4.png"/></div>'
    	processHTML += '<div class="process-tab process-5"><img src="/wp-content/themes/IronSpirits2/images/process5.png"/></div>'
    	processHTML += '<div class="process-tab process-6"><img src="/wp-content/themes/IronSpirits2/images/process6.png"/></div>'
    processHTML += '</div>'
    $('body').on('click', '.process-1',function(){$('.process-text').hide().fadeIn(1400).html(process1); $('.process-tab').removeClass('active-process'); $(this).addClass('active-process'); $('.process-actual-image').rotate(-105)}) //105 //465
    $('body').on('click', '.process-2',function(){$('.process-text').hide().fadeIn(1400).html(process2); $('.process-tab').removeClass('active-process'); $(this).addClass('active-process'); $('.process-actual-image').rotate(-129)}) //127 //487
    $('body').on('click', '.process-3',function(){$('.process-text').hide().fadeIn(1400).html(process3); $('.process-tab').removeClass('active-process'); $(this).addClass('active-process'); $('.process-actual-image').rotate(-153)}) //153 //513
    $('body').on('click', '.process-4',function(){$('.process-text').hide().fadeIn(1400).html(process4); $('.process-tab').removeClass('active-process'); $(this).addClass('active-process'); $('.process-actual-image').rotate(-212)}) //212 //572
    $('body').on('click', '.process-5',function(){$('.process-text').hide().fadeIn(1400).html(process5); $('.process-tab').removeClass('active-process'); $(this).addClass('active-process'); $('.process-actual-image').rotate(-236)}) //236 //596
    $('body').on('click', '.process-6',function(){$('.process-text').hide().fadeIn(1400).html(process6); $('.process-tab').removeClass('active-process'); $(this).addClass('active-process'); $('.process-actual-image').rotate(-258)}) //258 //618
    $('#process-wrapper').html(processHTML)

   	/////////////////////////
    ///// Process Mobile ////
    ///////////////////////// 
    // var process1 = '<div class="process1-text"><h2 class="process-text-title">Client Collaboration</h2><div class="process-actual-text">After contacting us, we will meet with you at your site to discuss initial thoughts and needs.  In most cases, we will take photos and provide real-time sketches as well as initial 2D art during our time together.  This is a time where we listen to your vision, your values, your limitations, and your contingencies so that we can begin to create a solution from a depth of artistic offerings.  This process normally takes 1 – to – 2 days dependent on site size and involves our Creative Director.</div>'
    // var process2 = '<div class="process2-text"><h2 class="process-text-title">Conceptual Desgin</h2><div class="process-actual-text">With the input garnered from the consultation, our creative team begins develop your vision by determining initial design elements, themes, and specialty nuances.  Rough concepts from sketches – to 2D – to 3D – renderings are presented dependent upon your design budget.  This is the time where you have the chance to see your vision on paper and determine what works and what does not work.  This process can take 2 days – to – 2 weeks dependent upon the level of design finish and involves our Creative Director and Creative Engineer.</div></div>'
    // var process3 = '<div class="process3-text"><h2 class="process-text-title">Final Design</h2><div class="process-actual-text">Taking your changes, our designers build the final representation of your environment.  Color, measurements, materials, time constraints, and costs are all incorporated into a deliverable which will serve as a guiding document for production and fabrication.  This process can take 2-3 weeks and involves our Creative Director, Creative Engineer, and Operations Director.</div></div>'
    // var process4 = '<div class="process4-text"><h2 class="process-text-title">Production and Fabrication</h2><div class="process-actual-text">Upon sign-off of final design and your production contract, all your project components move into the production and fabrication queue of engineering, carpentry, sculpture, welding and finish.  Installation preparation also begins as we plan the final step of bringing your project to your site.  This process can take 6 weeks – to – 6 months dependent upon project size and involves our Creative Engineer, Production Director, Production Crew, and Installation Director.</div></div>'
    // var process5 = '<div class="process5-text"><h2 class="process-text-title">Installation</h2><div class="process-actual-text">We have been stewards of your project and have seen things begin to take shape up until this point in time; however, now you see the work come to completion.  Our hard working install team takes all the components of your project and brings your space to life.  Care is placed on comprehensive safety checks, high quality finish, real time spatial alignment, and incorporated client feedback.  This process can take 2 days – to – 2 weeks and involves our Creative Director, Production Director, Installation Director, and Install Crew.</div></div>'
    // var process6 = '<div class="process6-text"><h2 class="process-text-title">Quality Assurance</h2><div class="process-actual-text">Our core values are craftsmanship, stewardship, and client collaboration.  This step in our process manifests those values by giving us the chance to receive feedback on improvements, perform safety checks and repairs, compare before and after expectations and, in most cases, plan next steps for future work.  This process is ongoing with a 1 day visit within 2 months of install date and involves our Creative Director and Operations Director.</div></div>'
    
    // var processHTML = ''    
    // processHTML += '<div class="process-wrapper">'
    // 	processHTML += '<div class="process-image-background">'
    // 		processHTML += '<img class="process-actual-image" src="/wp-content/themes/IronSpirits2/images/process_bg.png"/>'
    // 		processHTML += '<div class="process-text"><img class="fade-from-left" src="/wp-content/themes/IronSpirits2/images/anvil.png"/></div>'
    // 	processHTML += '</div>'
    // 	processHTML += '<div class="process-tab process-1"><img src="/wp-content/themes/IronSpirits2/images/process1.png"/></div>'
    // 	processHTML += '<div class="process-tab process-2"><img src="/wp-content/themes/IronSpirits2/images/process2.png"/></div>'
    // 	processHTML += '<div class="process-tab process-3"><img src="/wp-content/themes/IronSpirits2/images/process3.png"/></div>'
    // 	processHTML += '<div class="process-tab process-4"><img src="/wp-content/themes/IronSpirits2/images/process4.png"/></div>'
    // 	processHTML += '<div class="process-tab process-5"><img src="/wp-content/themes/IronSpirits2/images/process5.png"/></div>'
    // 	processHTML += '<div class="process-tab process-6"><img src="/wp-content/themes/IronSpirits2/images/process6.png"/></div>'
    // processHTML += '</div>'
    // $('body').on('click', '.process-1',function(){$('.process-text').hide().fadeIn(1400).html(process1); $('.process-tab').removeClass('active-process'); $(this).addClass('active-process'); $('.process-actual-image').rotate(-105)}) //105 //465
    // $('body').on('click', '.process-2',function(){$('.process-text').hide().fadeIn(1400).html(process2); $('.process-tab').removeClass('active-process'); $(this).addClass('active-process'); $('.process-actual-image').rotate(-129)}) //127 //487
    // $('body').on('click', '.process-3',function(){$('.process-text').hide().fadeIn(1400).html(process3); $('.process-tab').removeClass('active-process'); $(this).addClass('active-process'); $('.process-actual-image').rotate(-153)}) //153 //513
    // $('body').on('click', '.process-4',function(){$('.process-text').hide().fadeIn(1400).html(process4); $('.process-tab').removeClass('active-process'); $(this).addClass('active-process'); $('.process-actual-image').rotate(-212)}) //212 //572
    // $('body').on('click', '.process-5',function(){$('.process-text').hide().fadeIn(1400).html(process5); $('.process-tab').removeClass('active-process'); $(this).addClass('active-process'); $('.process-actual-image').rotate(-236)}) //236 //596
    // $('body').on('click', '.process-6',function(){$('.process-text').hide().fadeIn(1400).html(process6); $('.process-tab').removeClass('active-process'); $(this).addClass('active-process'); $('.process-actual-image').rotate(-258)}) //258 //618
    // $('#process-wrapper').html(processHTML)



    // rotate background in process page
    var rotation = 0;

	jQuery.fn.rotate = function(degrees) {
	    $(this).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
	                 '-moz-transform' : 'rotate('+ degrees +'deg)',
	                 '-ms-transform' : 'rotate('+ degrees +'deg)',
	                 'transform' : 'rotate('+ degrees +'deg)',
	                 'transition' : 'transform 1s'
	             });
	    return $(this);
	};

})

