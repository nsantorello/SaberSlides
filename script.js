function resizeSlides()
{
	$('.slide').css('height', $(window).height());
}

$(document).ready(
	function()
	{
		// Resize slides initially, then hook into resize event.
		resizeSlides();
		$(window).resize(function(evt)
		{
			resizeSlides();
		});
	}
);