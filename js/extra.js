var $ = jQuery;
jQuery(document).ready(function() {
	//////////////////////
    ////  Home  Page  ////
    //////////////////////	
	// Home Menu Logo
	$('body').prepend('<div class="logo-image-wrapper"><img class="logo-image" src="/wp-content/themes/IronSpirits2/images/ironspirits-logo.png"/></div>')
	$('body').prepend('<div class="logo-image-wrapper-mobile"><img class="logo-image" src="/wp-content/themes/IronSpirits2/images/mobile-is-logo.png"/></div>')


	// Green Wrapper around text in carousel images
	$('.home-slide-title').addClass('green-wrapper')
	$('.introduction-content').prepend('<div class="philosophy-green"></div>')
	$('.philosophy-green').html('<div class="phil-rotate-text"><h3>OUR PHILOSOPHY</h3> <div class="philosophy-text"><br/>Enjoy the challenge of each opportunity <br/>Enhance our skills as craftsmen <br/>Engage our customers in the process <br/>Excel in everything we create and deliver</div></div>')
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
	twitterHTML += '<div><h3 class="section-title twitter-title">CONNECT WITH US!</h3></div>'
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
			clientHTML += "<div class='each-client'> <a href='http://jcbc.org/' target='_blank'><img class='client-img' src='/wp-content/themes/IronSpirits2/images/client-johns-creek.png'/> </a></div>"
			// clientHTML += "<div class='each-client'> <a href='http://www.chestnutridgechurch.com/' target='_blank'><img class='client-img' src='/wp-content/themes/IronSpirits2/images/client-chestnut-ridge.png'/> </a></div>"
			clientHTML += "<div class='each-client'> <a href='http://www.firstredeemer.org' target='_blank'><img class='client-img' src='/wp-content/themes/IronSpirits2/images/client-first-redeemer.jpg'/> </a></div>"
			clientHTML += "<div class='each-client'> <a href='http://www.ronixwake.com' target='_blank'><img class='client-img' src='/wp-content/themes/IronSpirits2/images/client-ronix.jpg'/> </a></div>"
			clientHTML += "<div class='each-client'> <a href='http://theorangeconference.com/' target='_blank'><img class='client-img' src='/wp-content/themes/IronSpirits2/images/client-orange.jpg'/> </a></div>"
			clientHTML += "<div class='each-client'> <a href='http://truenorthchurch.com/' target='_blank'><img class='client-img' src='/wp-content/themes/IronSpirits2/images/client-true-north.png'/> </a></div>"
			clientHTML += "<div class='each-client'> <a href='http://northstarchurch.org/' target='_blank'><img class='client-img' src='/wp-content/themes/IronSpirits2/images/client-north-star.jpg'/> </a></div>"
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
    var service1 = 'Our design services include everything from graphic design and interior imaging to master planning, site and schematic design, and visionary/phasing planning.',
    	service2 = 'Our offerings include: brand signs and logos; specialty fabrication, back-lit, and LED signage; way-finding, informational ADA compliant signage; and window-lettering and specialty materials signs.',
    	service3 = 'Beyond providing custom murals for your space, we also offer multi-media wall art, character-themed designs, accent walls, digital prints, mural re-freshers, and can work with local artists or supply a paint-by-number option.',
    	service4 = 'Themed environments include a combination of creative services, from comprehensive architectural and interior design renderings, to specialty signage, wall art and murals, sculptural elements, window tints and vinyl applications, specialty lighting, and digital media.',
    	service5 = 'Our props can range from stand-alone elements and hand-held objects to faux vehicles and vintage restorations. Our stage set offerings include box, prism, and unit sets—giving you the ability to create a spectacular production!',
    	service6 = 'With the newest machines in the industry and our certified craftsmen, we can provide 2D appliqués, sculptural lighting, larger-than-life 3D creatures and objects, hand-carved commissions and special material sculptures in metal, wood, fiberglass, high-density foam and more!'

    var serviceHTML = ''
    serviceHTML += '<div class="each-service-wrapper">'
    	serviceHTML += '<div class="background-image"><img src="/wp-content/themes/IronSpirits2/images/service-1-design.jpg"/></div>'
    	serviceHTML += '<div class="service-text-right">'
    		serviceHTML += '<div class="service-inside-wrapper">'
    			serviceHTML += '<img class="service-inside-icon" src="/wp-content/themes/IronSpirits2/images/design-white.png"/>'
    			serviceHTML += '<div><div class="service-inside-header">Design Consultation</div>'
				serviceHTML += service1
    			serviceHTML += '</div>'
    		serviceHTML += '</div>'
    	serviceHTML += '</div>'
    serviceHTML += '</div>'
    serviceHTML += '<div class="horiz-green-line"></div>'
    serviceHTML += '<div class="each-service-wrapper">'
    	serviceHTML += '<div class="background-image"><img src="/wp-content/themes/IronSpirits2/images/service-2-signage.jpg"/></div>'
    	serviceHTML += '<div class="service-text-left">'
    		serviceHTML += '<div class="service-inside-wrapper">'
    			serviceHTML += '<img class="service-inside-icon" src="/wp-content/themes/IronSpirits2/images/signage-white.png"/>'
    			serviceHTML += '<div><div class="service-inside-header">Architectural Signage</div>'
				serviceHTML += service2
    			serviceHTML += '</div>'
    		serviceHTML += '</div>'
    	serviceHTML += '</div>'
    serviceHTML += '</div>'
    serviceHTML += '<div class="each-service-wrapper">'
    	serviceHTML += '<div class="background-image"><img src="/wp-content/themes/IronSpirits2/images/service-3-mural.jpg"/></div>'
    	serviceHTML += '<div class="service-text-right">'
    		serviceHTML += '<div class="service-inside-wrapper">'
    			serviceHTML += '<img class="service-inside-icon" src="/wp-content/themes/IronSpirits2/images/mural-white.png"/>'
    			serviceHTML += '<div><div class="service-inside-header">Murals & Illustration</div>'
				serviceHTML += service3
    			serviceHTML += '</div>'
    		serviceHTML += '</div>'
    	serviceHTML += '</div>'
    serviceHTML += '</div>'
    serviceHTML += '<div class="each-service-wrapper">'
    	serviceHTML += '<div class="background-image"><img src="/wp-content/themes/IronSpirits2/images/service-4-theme.jpg"/></div>'
    	serviceHTML += '<div class="service-text-left">'
    		serviceHTML += '<div class="service-inside-wrapper">'
    			serviceHTML += '<img class="service-inside-icon" src="/wp-content/themes/IronSpirits2/images/theme-white.png"/>'
    			serviceHTML += '<div><div class="service-inside-header">Themed Environments</div>'
				serviceHTML += service4
    			serviceHTML += '</div>'
    		serviceHTML += '</div>'
    	serviceHTML += '</div>'
    serviceHTML += '</div>'
    serviceHTML += '<div class="each-service-wrapper">'
    	serviceHTML += '<div class="background-image"><img src="/wp-content/themes/IronSpirits2/images/service-5-props.jpg"/></div>'
    	serviceHTML += '<div class="service-text-right">'
    		serviceHTML += '<div class="service-inside-wrapper">'
    			serviceHTML += '<img class="service-inside-icon" src="/wp-content/themes/IronSpirits2/images/props-white.png"/>'
    			serviceHTML += '<div><div class="service-inside-header">Custom Props & Sets</div>'
				serviceHTML += service5
    			serviceHTML += '</div>'
    		serviceHTML += '</div>'
    	serviceHTML += '</div>'
    serviceHTML += '</div>'
    serviceHTML += '<div class="each-service-wrapper">'
    	serviceHTML += '<div class="background-image"><img src="/wp-content/themes/IronSpirits2/images/service-6-sculpture.jpg"/></div>'
    	serviceHTML += '<div class="service-text-left">'
    		serviceHTML += '<div class="service-inside-wrapper">'
    			serviceHTML += '<img class="service-inside-icon" src="/wp-content/themes/IronSpirits2/images/sculpture-white.png"/>'
    			serviceHTML += '<div><div class="service-inside-header">2D & 3D Sculpture</div>'
				serviceHTML += service6
    			serviceHTML += '</div>'
    		serviceHTML += '</div>'
    	serviceHTML += '</div>'
    serviceHTML += '</div>'

    $('#services-wrapper').html(serviceHTML)


	
	///////////////////////
    ///// Process Page ////
    ///////////////////////
    $('#post-255').prepend('<div class="process-background-image"><img src="/wp-content/themes/IronSpirits2/images/process-background.png"/></div>')
    var process1 = '<div class="process1-text"><h2 class="process-text-title">Client Consultation</h2><div class="process-actual-text">After you contact us, our Creative Director and other team members will meet you at your location to discuss initial thoughts and needs. During this first meeting, we want to hear about your vision, your values, your limitations, and your expectations, so that we can begin to create a solution for you! Oftentimes, we will also take reference photos of your building and, in many cases, provide initial conceptual art on-site. This process normally takes 1-2 days depending on the location. </div>'
    var process2 = '<div class="process2-text"><h2 class="process-text-title">Conceptual Desgin</h2><div class="process-actual-text">Then, our creative team begins developing your vision by working closely with you to solidify theming, preferred color schemes, specialty design elements, and so on. Rough 2D or 3D renderings are also presented depending upon your design budget. This is a time to see your vision come to life on paper and to determine what works best for you.  This process can take 2 days or 2 weeks based on the intensity of the design. </div></div>'
    var process3 = '<div class="process3-text"><h2 class="process-text-title">Final Design</h2><div class="process-actual-text">After receiving your feedback, our design team builds the final representation of your environment. Color, measurements, materials, time constraints, and costs and more are all incorporated into a deliverable that will serve as a guiding document for production and fabrication.  This process can take 2-3 weeks and involves our Creative Director, Creative Engineer, and Operations Director.</div></div>'
    var process4 = '<div class="process4-text"><h2 class="process-text-title">Production and Fabrication</h2><div class="process-actual-text">Once you approve the final design and sign the production contract, your project moves into the queue. All of the components will go through our engineering department and then into production and fabrication. Towards the end of this phase, we will begin preparing and packaging your project for installation. This process can take 6 weeks or 6 months depending on the project scope and primarily involves our Creative Engineer, Production Director, Production Crew, and Installation Director.</div></div>'
    var process5 = '<div class="process5-text"><h2 class="process-text-title">Installation</h2><div class="process-actual-text">This is where you see everything come to completion! Our diligent install team takes all the components of your project and brings your space to life. In addition to installation, they conduct comprehensive safety checks, produce high quality finish, real time spatial alignment, and incorporate client feedback. This process can take 2 days or 2 weeks and, in most cases, our Creative Director will join the Installation Director and his crew on-site. </div></div>'
    var process6 = '<div class="process6-text"><h2 class="process-text-title">Quality Assurance</h2><div class="process-actual-text">Our core values are Craftsmanship, Stewardship, Collaboration and Legacy. This step in our process manifests those values by giving us the chance to receive feedback on improvements, perform safety checks and repairs, compare before-and-after expectations and, in most cases, plan next steps for future work. This process is ongoing and usually involves a 1 day visit within 2 months of the install date.</div></div>'
    
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

   	///////////////////////
    /// Process Mobile ////
    /////////////////////// 
    var mprocess1 = '<div class="mprocess1-text"><h4 class="mprocess-text-title">Client Consultation</h2><div class="mprocess-actual-text">After you contact us, our Creative Director and other team members will meet you at your location to discuss initial thoughts and needs. During this first meeting, we want to hear about your vision, your values, your limitations, and your expectations, so that we can begin to create a solution for you! Oftentimes, we will also take reference photos of your building and, in many cases, provide initial conceptual art on-site. This process normally takes 1-2 days depending on the location. </div>'
    var mprocess2 = '<div class="mprocess2-text"><h4 class="mprocess-text-title">Conceptual Desgin</h2><div class="mprocess-actual-text">Then, our creative team begins developing your vision by working closely with you to solidify theming, preferred color schemes, specialty design elements, and so on. Rough 2D or 3D renderings are also presented depending upon your design budget. This is a time to see your vision come to life on paper and to determine what works best for you.  This process can take 2 days or 2 weeks based on the intensity of the design. </div></div>'
    var mprocess3 = '<div class="mprocess3-text"><h4 class="mprocess-text-title">Final Design</h2><div class="mprocess-actual-text">After receiving your feedback, our design team builds the final representation of your environment. Color, measurements, materials, time constraints, and costs and more are all incorporated into a deliverable that will serve as a guiding document for production and fabrication.  This process can take 2-3 weeks and involves our Creative Director, Creative Engineer, and Operations Director.</div></div>'
    var mprocess4 = '<div class="mprocess4-text"><h4 class="mprocess-text-title">Production and Fabrication</h2><div class="mprocess-actual-text">Once you approve the final design and sign the production contract, your project moves into the queue. All of the components will go through our engineering department and then into production and fabrication. Towards the end of this phase, we will begin preparing and packaging your project for installation. This process can take 6 weeks or 6 months depending on the project scope and primarily involves our Creative Engineer, Production Director, Production Crew, and Installation Director.</div></div>'
    var mprocess5 = '<div class="mprocess5-text"><h4 class="mprocess-text-title">Installation</h2><div class="mprocess-actual-text">This is where you see everything come to completion! Our diligent install team takes all the components of your project and brings your space to life. In addition to installation, they conduct comprehensive safety checks, produce high quality finish, real time spatial alignment, and incorporate client feedback. This process can take 2 days or 2 weeks and, in most cases, our Creative Director will join the Installation Director and his crew on-site.</div></div>'
    var mprocess6 = '<div class="mprocess6-text"><h4 class="mprocess-text-title">Quality Assurance</h2><div class="mprocess-actual-text">Our core values are Craftsmanship, Stewardship, Collaboration and Legacy. This step in our process manifests those values by giving us the chance to receive feedback on improvements, perform safety checks and repairs, compare before-and-after expectations and, in most cases, plan next steps for future work. This process is ongoing and usually involves a 1 day visit within 2 months of the install date.</div></div>'
    
    var mprocessHTML = ''    
    mprocessHTML += '<div class="process-wrapper-mobile">'
    	mprocessHTML += '<div class="mprocess-image-background">'
    		// mprocessHTML += '<img class="mprocess-actual-image" src="/wp-content/themes/IronSpirits2/images/process_bg.png"/>'
    		mprocessHTML += '<div class="mprocess-text">' + mprocess1 + '</div>'
    	mprocessHTML += '</div>'
    	mprocessHTML += '<div class="mprocess-tab mprocess-1 active-mprocess"><img src="/wp-content/themes/IronSpirits2/images/process1.png"/></div>'
    	mprocessHTML += '<div class="mprocess-tab mprocess-2"><img src="/wp-content/themes/IronSpirits2/images/process2.png"/></div>'
    	mprocessHTML += '<div class="mprocess-tab mprocess-3"><img src="/wp-content/themes/IronSpirits2/images/process3.png"/></div>'
    	mprocessHTML += '<div class="mprocess-tab mprocess-4"><img src="/wp-content/themes/IronSpirits2/images/process4.png"/></div>'
    	mprocessHTML += '<div class="mprocess-tab mprocess-5"><img src="/wp-content/themes/IronSpirits2/images/process5.png"/></div>'
    	mprocessHTML += '<div class="mprocess-tab mprocess-6"><img src="/wp-content/themes/IronSpirits2/images/process6.png"/></div>'
    mprocessHTML += '</div>'
    $('body').on('click', '.mprocess-1',function(){$('.mprocess-text').html(mprocess1); $('.mprocess-tab').removeClass('active-mprocess'); $(this).addClass('active-mprocess'); $('.mprocess-actual-image').rotate(-105)}) //105 //465
    $('body').on('click', '.mprocess-2',function(){$('.mprocess-text').html(mprocess2); $('.mprocess-tab').removeClass('active-mprocess'); $(this).addClass('active-mprocess'); $('.mprocess-actual-image').rotate(-129)}) //127 //487
    $('body').on('click', '.mprocess-3',function(){$('.mprocess-text').html(mprocess3); $('.mprocess-tab').removeClass('active-mprocess'); $(this).addClass('active-mprocess'); $('.mprocess-actual-image').rotate(-153)}) //153 //513
    $('body').on('click', '.mprocess-4',function(){$('.mprocess-text').html(mprocess4); $('.mprocess-tab').removeClass('active-mprocess'); $(this).addClass('active-mprocess'); $('.mprocess-actual-image').rotate(-212)}) //212 //572
    $('body').on('click', '.mprocess-5',function(){$('.mprocess-text').html(mprocess5); $('.mprocess-tab').removeClass('active-mprocess'); $(this).addClass('active-mprocess'); $('.mprocess-actual-image').rotate(-236)}) //236 //596
    $('body').on('click', '.mprocess-6',function(){$('.mprocess-text').html(mprocess6); $('.mprocess-tab').removeClass('active-mprocess'); $(this).addClass('active-mprocess'); $('.mprocess-actual-image').rotate(-258)}) //258 //618
    $('#process-wrapper').append(mprocessHTML)



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

