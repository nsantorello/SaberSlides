function resizeSlides()
{
	var h = $(window).height();
	$(slideSel).css('height', h < 640 ? 640 : h); // ensure each slide is at least 640px tall
}

function goToSlide(slideIndex)
{
	$.scrollTo(slideSel + slideIndex, transitionDuration, { "easing": easingType });
}

function createButtons()
{
	var numSlides = $(buttonSel).length;
	$(buttonSel).click(
		function(e)
		{
			// Regex to grab the suffixing integer
			var regex = new RegExp(buttonToSel.substring(1) + '\\d+', 'g'); // need to substring buttonToSel to remove the prefixing "."
			var input = e.currentTarget.className; // grab class string 
			if (regex.test(input)) 
			{
				var slideToScrollTo = input.match(regex)[0].match(/\d+/g);  // grab the first slide number to scroll to
				// Scroll to the slide number of the first match.
				goToSlide(slideToScrollTo);
			}
		}
	);
}

$(document).ready(
	function()
	{
		// Create buttons from the "button" class.
		createButtons();
		
		// Resize slides initially, then hook into resize event.
		resizeSlides();
		$(window).resize(function(evt)
		{
			resizeSlides();
		});
	}
);