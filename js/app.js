$.jInvertScroll(['.div, .div1, .div2, .div3, .div4'], {
	width: 'auto',	// Page width (auto or int value)
	height: 'auto',	// Page height (the shorter, the faster the scroll)
	onScroll: function(percent) {
		// Callback function that will be called each time the user
		// scrolls up or down, useful for animating other parts
		// on the page depending on how far the user has scrolled down
		// values go from 0.0 to 1.0 (with 4 decimals precision)
	}
});

