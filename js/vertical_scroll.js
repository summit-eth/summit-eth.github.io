
window.addEventListener('wheel', function(e) {
	if (e.deltaY > 0) {
		if(window.scrollX < document.body.scrollWidth) {
			setTimeout(function () {
				window.scrollTo(window.scrollX + 250, 0);
			}, 2);
		} else {
			setTimeout(function () {
				window.scrollTo( document.body.scrollWidth, 0);
			}, 2);
		}
	} else {
		if(window.scrollX > 0) {
			setTimeout(function () {
				window.scrollTo(window.scrollX - 250, 0);
			}, 2);
		} else {
			setTimeout(function () {
				window.scrollTo(0, 0);
			}, 2);
		}
	}
});