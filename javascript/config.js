$(document).bind("mobileinit", function() {
	// Código de inicio para jQM
	
	$.mobile.defaultPageTransition = "fade";
	$.mobile.defaultDialogTransition = "slide";
	$.mobile.loadingMessage = "Por favor espere...";
	$.mobile.pageLoadErrorMessage = "No se ha podido cargar la página";
});

//$(document).bind("mobileinit", function() {
//	$.mobile.showPageLoadingMsg();
//	setTimeout(function() {
		
//		$.mobile.changePage("#sesion", {
//			transition: 'slideup'
//		});
//	}, 2000);
//});