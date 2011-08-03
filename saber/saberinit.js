function resizeSlides()
{
	$(slideSel).css('height', $(window).height());
}

function createButtons()
{
	var numSlides = $(buttonSel).length;
	$(buttonSel).click(
		function(e)
		{
			$.scrollTo(slideSel + '2', transitionDuration, { "easing": easingType });
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