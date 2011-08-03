function resizeSlides()
{
	$('.slide').css('height', $(window).height());
}

function createButtons()
{
	$('.button').click(
		function(e)
		{
			$.scrollTo('.slide2', transitionDuration, { "easing": easingType });
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