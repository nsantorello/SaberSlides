// Rather than toying around in the main saberinit.js, important settings are
// extracted here for your convenience.  :)

// How long slide transitions take.
var transitionDuration = 1000; // milliseconds

// The type of easing between slides.  To see possible values, 
// see dropdown menus at: http://gsgd.co.uk/sandbox/jquery/easing/
var easingType = "easeOutQuint";

// Set the selectors that you use for the slides and the buttons.
var slideSel = '.saber-slide'; // the selector to select each slide
var buttonSel = '.saber-button'; // the selector to select each button
var buttonToSel = buttonSel + 'To'; // the selector to specify what button to go to, suffixed with a slide #