var $ = jQuery;
jQuery(document).ready(function() {
	// Home Menu Logo
	$('#logo').html('<div class="logo-image-wrapper"><img class="logo-image" src="/wp-content/themes/IronSpirits2/js/georgia.png"/></div>')

	// Green Wrapper around text in images
	$('.home-slide-title').addClass('green-wrapper')
	$('.introduction-content').prepend('<div class="philosophy-green"></div>')
	$('.philosophy-green').html('OUR PHILOSOPHY <br/>Enjoy - the challenge of each opportunity <br/>Enhance - our skills as craftsmen <br/>Engage - our customers in the process <br/>Excel - in everyhing we create and deliver')
	// Social Media section (#twitter)
	// $('.section-description').html('')
	// $('.section-header').html('')
	var twitterHTML = ''
	twitterHTML += '<div><h3 class="section-title twitter-title">CONNECT WITH US</h3></div>'
	twitterHTML += "<div class='twitter-wrapper'>"
		twitterHTML += "<a target='_blank' href='https://www.addthis.com/tellfriend_v2.php?v=300&winname=addthis&pub=ra-5162fff83017c0e0&source=men-300&lng=en&s=email&url=https%3A%2F%2Fwww.ironspirits.com%2Fhome.html&title=Iron%20Spirits%20-%20Children%20Themed%20Environments%2C%20Architectural%20Signage%2C%20Business%20Signs&ate=AT-ra-5162fff83017c0e0/-/-/58b2fdac2f4cb6ab/2&uid=589d13ce469a9531&description=Iron%20Spirits%20Children%20Themed%20Environments%20%E2%80%A2%20Ministry%20%26%20Corporate%20Themed%20Space%20Design%2C%20Signage%2C%20Design%20Planning%2C%20Custom%20Props%2C%20Fixtures%20%26%20Sets%2C%20Illustration%20%26%20Design&ct=1&ui_email_to=&ui_email_from=&ui_email_note=&pre=https%3A%2F%2Fwww.ironspirits.com%2Fabout-us.html&tt=0&captcha_provider=recaptcha2&pro=0&ats=imp_url%3D1%26url%3Dhttps%253A%252F%252Fwww.ironspirits.com%252Fhome.html%26title%3DIron%2520Spirits%2520-%2520Children%2520Themed%2520Environments%252C%2520Architectural%2520Signage%252C%2520Business%2520Signs%26description%3DIron%2520Spirits%2520Children%2520Themed%2520Environments%2520%25E2%2580%25A2%2520Ministry%2520%2526%2520Corporate%2520Themed%2520Space%2520Design%252C%2520Signage%252C%2520Design%2520Planning%252C%2520Custom%2520Props%252C%2520Fixtures%2520%2526%2520Sets%252C%2520Illustration%2520%2526%2520Design%26smd%3Drsi%253D%2526gen%253D0%2526rsc%253D%2526dr%253Dhttps%25253A%25252F%25252Fwww.ironspirits.com%25252Fabout-us.html%2526sta%253DAT-ra-5162fff83017c0e0%25252F-%25252F-%25252F58b2fdac2f4cb6ab%25252F1%26hideEmailSharingConfirmation%3Dundefined%26service%3Demail%26media%3Dundefined%26passthrough%3Dundefined%26email_template%3Dundefined%26email_vars%3Dundefined&atc=pubid%3Dra-5162fff83017c0e0%26product%3Dundefined%26widgetId%3Dundefined%26ui_pane%3Demail&rb=false'>"
			twitterHTML += "<img class='each-logo1 aa' src='data:image/png;base64,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' alt=' ' />"
		twitterHTML += '</a>'
		twitterHTML += "<a target='_blank' href='https://www.facebook.com/IronSpirits/'>"
			twitterHTML += "<img class='each-logo1 bb' src='data:image/png;base64,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' alt=' ' />"
		twitterHTML += '</a>'
		twitterHTML += "<a target='_blank' href='https://twitter.com/IronSpirits_llc'>"
			twitterHTML += "<img class='each-logo1 cc' src='data:image/png;base64,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' alt=' ' />"
		twitterHTML += '</a>'
		twitterHTML += "<a target='_blank' href='https://www.pinterest.com/ironspirits2/''>"
			twitterHTML += "<img class='each-logo1 dd' src='data:image/png;base64,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' alt=' ' />"
		twitterHTML += '</a>'
		twitterHTML += "<a target='_blank' href='https://www.instagram.com/iron_spirits/'>"
			twitterHTML += "<img class='each-logo1 ee' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAEgxJREFUeJztnX9wVFWWx7/3pNMxAQKKYoOSGAkKUQjdnQBqaZQA62Z+gLoKTLkOv9aysEqr0IXaQVYHGYRZZS2ospSfWkIhCo6yMoxKUJjCxCSvmwQNTBKJRKFjJBmSVAJJd9+zf9BEQtI/8350J/35L33vu+fbuaffe/fec88V6H+InJycDClllhAig5kzAIwWQoxg5uHMfB0RpUgpk4jIDABSyk4i6pBStgshmgCcA/AzgDohxPfMfIqITpSVldUCYAO/m+oIowX0lcmTJ9/sdrvvAXA3EeUCmABgsBa2pJStRPQNgBJm/srr9R4tLy8/o4UtvYg5B8jMzEwaNmzYNK/X+yAR/SuAsUbqYeYqIcQBZj7Q0tLyZU1NTYeResIlJhzAbrcnSikfJKI5UsrfEFGq0Zr80MzM+wDsFkJ8piiK22hBwYhqB5g0adLYhISE/wDwewAjjNYTDlLKn4QQbzPzFqfTWWO0Hn9EpQPk5ORMZ+bnAfyL0VpUgJn5b8z8mtPpLDRazNVEkwMIq9X6EBH9N4Bso8VogZTSSUSrFEX5yGgtl4kKB7Db7QVSytVEZDVai06UMfMLDofjU6OFGOoAkyZNyhJC/C8RzTRSh1Ew8wEhxFJFUU4apcEQB7Db7SnM/DIzP0NEJiM0RAtSSjcRvZ6YmPhicXHxBb3t6+4Adrt9BjO/JYTI0Nt2NCOl/E4I8aTD4Tikp13dHGDq1KnJbrf7VQBL9LIZg7CUcmNra+syvSaUdHEAq9U6kYjeAzBeD3uxjpTyuMlkmldaWvqt1rZIawNWq/VxAMWId37IENEEKeXXVqt1jta2ErRq+NFHH01ISkp6nYjWCSEStbLTjzELIf7NYrEMqa+vPwiNViE1eQRkZWUNTkpK2k1EBVq0P9Bg5n1CiHmKorSr3bbqDpCbm2vxeDx/HUCTOnqhuN3ugoqKigY1G1XVAXJyckYzcyEMXqLtr0gp/yGlzFczBkE1B8jJybmVmQ8BSFerzTg9YeZak8mUX1JSUqtGe6o4gO+X/3fEO18XmLnW6/Xeq8adoM/DwNzcXIvvth/vfJ0QQmQQUeHEiRP7HCPRpzuA723/SPyFzzDKAOT1ZXQQ8R3AN87fHe98Q8lh5l3oQz9GPBHkm+R5PNLr46iDEOJ2i8UyuL6+/rNIro/IAaxW6+NEtC6Sa+OojxDibovFcrK+vj7stYOw3wGsVutEAMVElBzutXE0pY2IpoS7gBTWs2Pq1KnJRPRevPOjkkEej2dXZmZmUjgXheUAvvX8+KpelEJEE4YOHRrWoznkR4Ddbp8BIKIXjTi6wsw8PdTIopAcYOLEiYNMJtPxeBhXzFAzePDgCYcPH74YrGJIjwCTybQq3vkxRWZra+tLoVQMegfwhW6X6xm9azKZkJGRgWuvvRYmU2wHDXs8HjQ1NaG2thZer1c3u1JKt8lkurO0tLQqUL2g/11f3L4uvTB69GgsWLAA06dPR0pKih4mdaOtrQ0HDx7Etm3bcOaM9jvKiSjR4/GsB/DrQPUC3gHsdnsBgP1qCvPHrFmzsHz5cpjNZj3MGUZHRwdeeeUVfPLJJ3qZnKkoyuf+CgPNBAqLxbJbCDFSA1HdmD17NlauXImEBM1CFKMGk8mE+++/Hy6XC1VVAe/OqsDM41wu12Z/5X7vAFar9WEi2quNrF9IT0/Hrl27+v0v/2o6Ozvx2GOP4ccff9TclpTyt06n8/96K/M7CvDt0tWcxYsXD7jOBwCz2YyFCxfqYouIXvRb1tuHOTk506HDFm2z2Yxp06ZpbSZqmT59ul6jHLvdbr+/t4JeHYCZn9NUjo/MzEwkJYU1dd2vSElJwa233qqLLSnl87193sP9Jk2aNBbAg5orAjB8+HA9zKhOQ0MDGhoCR2cnJydjzJgxQdvS639ARAU2m22Mw+H47srPeziALyePLsTiW/++ffuwevVqSCmD1s3Ly8Nrr70WsI6OE12CmRcD+K8rP+z2CLDb7Ym4lJApjh/efvvtkDofAA4fPozvvvsueEX9mJ+Xl9fN47o5gJTyQcRYNi69uXgx6PpKNy5c0D3ng1+IyNLW1jaj22dXVdB8N2ocY2Hmbn3c5QCZmZlJUsrf6i8pjs7MysrK6pp46XKAYcOGTSOiIcZoiqMjw5KTk/Mu/9HlAF6vV5ehXxzjYeauvu5yAF/i5TgDACFEV18TcCnlOuJbugcS43Nzcy2AzwF8+fbjDCCY+R7gl0fA3QZqiSksFkvIdYkIN954o4ZqIkdKeQ/gmwr2nbQxIKiqqsKxY8dw+vRpNDc3g5mRmpqKtLQ0ZGdnY/z48RDCf6DUihUrsHr1apw9ezagneTkZCxcuBA33HCD2l9BFZh5MnDJAQQuHbPSb2lvb8eePXuwd+/eoPF4I0aMwOzZszF37lykpvY8l2LMmDHYvn27VlJ1g4juBADKycnJgEZn7EQDhw4dwsMPP4wNGzaEFIzZ0NCATZs24aGHHtIzbs8Ihlqt1nSSUmYZrUQLmBmvv/46li1bhnPnzoV9fXNzM1566SWsWrVK13BunRlP/XXDx9q1a7Fjx44+t7Nv3z6sWLEi5BXAWEIIkUG+c/X6Fbt27cLeverFsx48eBCbNm1Srb1oQQiRQQBGGy3EH8zhZ0etq6vDxo0bVdeybds2VFZWhn1dJN9BR9JJCBG16/8VFRUoKCjA8uXLsWPHDhw7dgwdHYGzqL/55pvo7OxUXYuUMqhjdXZ2oqKiAjt37sTy5ctRUFCAb7/VPOF3xEgpbzAx8/BA416jaWhoQGFhIQoLLx24NXPmTKxZs8Zv3YMHD2qmpbS0FNXV1Rg7tvdZ8/Xr12PPnj2a2deA64mZrzNaRTjYbDa/ZYWFhZq/rH3+ud9dVgG1RSNENJyIKKZ2YY4bN85vmdPp1Nx+IBuBtEUpKSSljKnA/Jtvvtlv2ffff6+5/dpa/yl6R40aFXAaOdqQUprp8hHqsQARYejQoX7Lm5ubNdfQ0tLit8xkMmHIkJgKqkrS/MgYNUlISAj4C9NjnwFR4H9ZrO1zJCml+mMmjXC73QFf8q67Tvv32WA2wg0bN5gOIqKYOu++tbXVb1koW7H6SmZmpt8yKSXa21U/1UUziKiDpJSxoxgIuKI3efJkze0HsnHmzJlYWzO4QEKIJqNVhENNTY3fsgceeADJydolMSUizJzp/5jjKNsGFhQpZSMBCH+t1EAURfFblpKSgkceeUQz2wUFBRgxwv/MeSBtUco5AvCz0SrCoaioKOBtdtGiRZpsuR40aBCefvrpgHWOHj2qul0tIaKfCUCd0ULCoampCUVFRX7LhwwZglWrVgUdroXLCy+8EDC+7/jx46iri6l/JQCcJiHE90arCJfdu3cHLJ8yZQpWrFih2qzcM888gxkzZgSs8/7776tiS0+YuZaY+ZTRQsLlq6++CrrMOmvWLKxdu7ZPCSfNZjNWrlyJJ554ImC906dP49NPP43YjlEwcy0R0QmjhUTCq6++GnTIlZ+fj507d+Kuu+4Ku32r1Yp3330Xs2bNUkVLNEJElVRWVlYrpfQ/uxKlHD9+POijALiUfnbjxo3YunUrCgoKMGjQIL91r7nmGuTn5+ONN97A5s2bQ5pY2r9/f8B3kijmvKIodSYATETfAAj/Z2IwGzZswIQJE3DnnXcGrZudnY3s7GxIKVFVVdVjY0h6ejpuu+22sHL2nDp1CmvXru3LVzAMKeU3wC9JokoQgw7gdruxdOlSbNmyBWlpaSFdQ0QYN25cn9fuGxoa8Oyzz0ZVCphwEEKUAL69gcz8lbFyIqepqQlLlizRdQhWX1+PJUuWwOVy6WZTbZj5KOBzAK/XG1szGFdRX1+PBQsWwOFwaG6rsrIS8+fP1yX4REvMZvMvDlBeXn6GmbVPXa0hzc3NeOqpp/DWW2/B7Xar3r6UEu+88w4WLlwY0U6jKKPy66+//gm4IkOIEOKAcXrUQUqJzZs3Y86cOThy5Ihq7RYXF2PevHnYuHEjPB6Pau0ahZSyq6+7XnmZ+YAQ4lljJKlLXV0dli5dirFjx2Lu3LnIz8/H4MHh7X9tb2/Hl19+iffeey+iDSFRTk8HaGlp+XLo0KHNAPwH3cUY1dXVePnll7Fu3TrY7XbYbDaMHz8eaWlpuP7667vCt9xuNxobG1FXV4eTJ09CURQoihJr0T2h8k8i6ro9djlATU1Nh81m2yeE+HdjdGlHZ2cnioqKekzYmEwmCCE0eWeIYj5SFKXrC1+9ZBZ8aq0f4fF4BlrnQ0rZbdWqmwMIIT6TUv6kryT/xGI28atJTEw0WkIXUkpXampqt71z3RxAURS3EOJtXVUFYOzYsbjpppuMlhExaWlpuh0IEQpEtP3w4cPdhjE9Jr6ZeYsQYhkiOFo+XIJl3khKSsIHH3yA6urqmBt+JSYmIjMzM+gdQMfvxUKIrVd/2MMBnE5njc1m+9uV2SS1oqkpeDyq2WzGHXfcobUUw2hsbNTL1P6ysrIesR/+zgwKfMyFSlRXVwfd79+faW9vx6lT+sTjCCFe7e3zXh3A6XQWSik132rb2dmJL774QmszUUthYaEujwBmLi0rKzvcW1mgcwNXaSfpF7Zs2TLghmLAJeffurXHI1kr/uivwO84y+VynRw1atSvAYzSRJKP8+fP4/z587j33nu1NBN1rFmzBqWlpXqYKnY4HMv9FQYcaI8cObJOCPG4+pq6c+LECTQ2NmLq1Kn9YuwfiM7OTqxZswYff/yxLvaY+fcul8tvUoOgQz2bzfZXPUYEwKVzhBctWoT8/Px+d6DkxYsXUVhYiC1btuCHH37QxSYz73M4HAGjWoM6gN1uHyelPE5Euh1wZzabkZmZieHDh8f8HcHj8aCxsRE1NTV6v+t0SinvcDqd/jdTIsTJHrvd/mcA/6mKrDi6wMx/cjgcLwSrF9L+qcTExBellLG19XUAw8xVLS0tL4dSNyQHKC4uviCEeBJAVKe9jAPgUpj/kzU1NSHNsIX8gHW5XLUWi+U6IcSUyLXF0Rop5XqHw7E51PphbaFtbW1dJqU8Hr6sOHrAzMc6Ojr+EM41YTlATU1Nh8lkmgegLSxlcTRHStkqhJhXWVkZVtKvsDfRl5aWfiuEWBzudXG0JSEhYYGiKCfDvi4SY2fPnv1m5MiRqUKImNtO1h9h5nWKokSUI78vQR9ks9n+IoSIHzhtLB8qivIogIj2p/clj4r0eDy/AxBzmZH6C1LKrxMTEx9HhJ0PqBD2NXHixBEJCQlHiOj2vrYVJywqAeQpitKnfWqqxP1lZ2fflJCQ8Pf+egBVtCGlPAXgXqfTGfj0yhBQJZVWeXn5GZPJlM/M/nOpx1EFX+dPU6PzAZUcAABKSkpqTSbTfVLKf6jVZpwenMClX/5ptRpUNZleSUnJj16v9z4AZWq2G+fSCx+A+9T65V9G9fMCKioqGtxu9/3MvE/ttgcwHyYlJT3Q1xe+3tBy8wdZrdY/E9FzGtro9zDzOofD8Qf0YagXCM13/1it1jlEtBWA//xscXrgS9033+l0fqilHc2PjHE6nbuJaEp8FTF0mPlYQkJCrtadD0S4FhAuZ8+e/fn222/ffvHixVQhxGTocOeJUVhKub6jo2NeeXl5gx4Gde8Im802jZk3EZH257vEEMxcRURP+tvBoxW6h9y6XK7aW265ZbPX6zUx8xQhRGyH/fadTmZeO2TIkN8VFRXpHndp6K04Nzf3No/Hs56IfmWkDqNg5o+Z+flgodtaEhXPYrvdPoOZ/ySEyDVai04UM/MKh8NxyGghUeEAl7Farb8hohcB2I3WogXMXArgjw6HY7/RWi4TVQ5wGZvN9gAzP0dEBYhSjWHAAPZLKf/H6XSql71SJaL6n2uz2cYw82IA84nIYrSecJBSuohouxBia2+ZOaKFqHaAy+Tl5Zna2tpmMPMcALMADDNakx/+CeAjKeX7qampB69OyBSNxIQDXElWVpY5OTk5j5kf9O1aHm+wpEpf7t0DRHTkyiSMsUDMOcDV5ObmWpj5HinlPcw8GcAEIkrVyFyzlPK4EKKEmY+azeajl7Nuxyox7wC9YbVa0wGMF0Jk+MLU0qWUNwC4noiGA0iRUpoBXE5C0OE7RPuClLIRwDki+hnAaWau9Z2uVakoSswdDBiM/wcsMrZOFC1D7AAAAABJRU5ErkJggg==' alt=' ' />"
		twitterHTML += '</a>'
	twitterHTML += '</div>'
    jQuery('#twitter').html(twitterHTML);




	// Client Section
	var clientHTML = ''
	clientHTML += '<div class="client-entire-wrapper">'
		clientHTML += '<h3 class="section-title">BRANDS WE WORKED WITH</h3>'
		clientHTML += "<div class='client-wrapper'>"
			clientHTML += "<div class='each-client'> <a target='_blank' href='http://mellowmushroom.com/'><img class='client-img' src='http://pauldkang.com/is/static/media/mellowMushroom.ec2f6942.jpg' /> </a></div>"
			clientHTML += "<div class='each-client'> <a href='http://www.michelinman.com/US/en/homepage.html' target='_blank'><img class='client-img' src='http://www.dewebsite.org/logo/michelin/michelin_logo.gif' /> </a></div>"
			clientHTML += "<div class='each-client'> <a href='http://northpoint.org/' target='_blank'><img class='client-img' src='http://pauldkang.com/is/static/media/church.16a4367e.jpg' /> </a></div>"
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

	///////////////////////
    //// Services Page ////
    ///////////////////////
    var serviceHTML = ''
    serviceHTML += '<div class="each-service-wrapper">'
    	serviceHTML += '<div class="background-image"></div>'
    	serviceHTML += '<div class="service-text">Service 1111</div>'
    serviceHTML += '</div>'

    $('#services-wrapper').html(serviceHTML)









})

