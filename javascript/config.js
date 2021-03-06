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



//rate
jQuery(document).ready(function($) {
  $('.rating .star').hover(function() {
    $(this).addClass('to_rate');
    $(this).parent().find('.star:lt(' + $(this).index() + ')').addClass('to_rate');
    $(this).parent().find('.star:gt(' + $(this).index() + ')').addClass('no_to_rate');
  }).mouseout(function() {
    $(this).parent().find('.star').removeClass('to_rate');
    $(this).parent().find('.star:gt(' + $(this).index() + ')').removeClass('no_to_rate');
  }).click(function() {
    $(this).removeClass('to_rate').addClass('rated');
    $(this).parent().find('.star:lt(' + $(this).index() + ')').removeClass('to_rate').addClass('rated');
    $(this).parent().find('.star:gt(' + $(this).index() + ')').removeClass('no_to_rate').removeClass('rated');
    /*Save your rate*/
    /*TODO*/
  });
});

//correo electronico


$( document ).on( "pageinit", "#demo-page", function() {
// Swipe to remove list item
$( document ).on( "swipeleft swiperight", "#list li.ui-li", function( event ) {
var listitem = $( this ),
// These are the classnames used for the CSS transition
dir = event.type === "swipeleft" ? "left" : "right",
// Check if the browser supports the transform (3D) CSS transition
transition = $.support.cssTransform3d ? dir : false;
confirmAndDelete( listitem, transition );
});
// If it's not a touch device...
if ( ! $.mobile.support.touch ) {
// Remove the class that is used to hide the delete button on touch devices
$( "#list" ).removeClass( "touch" );
// Click delete split-button to remove list item
$( ".delete" ).on( "click", function() {
var listitem = $( this ).parent( "li.ui-li" );
confirmAndDelete( listitem );
});
}
function confirmAndDelete( listitem, transition ) {
// Highlight the list item that will be removed
listitem.addClass( "ui-btn-down-d" );
// Inject topic in confirmation popup after removing any previous injected topics
$( "#confirm .topic" ).remove();
listitem.find( ".topic" ).clone().insertAfter( "#question" );
// Show the confirmation popup
$( "#confirm" ).popup( "open" );
// Proceed when the user confirms
$( "#confirm #yes" ).on( "click", function() {
// Remove with a transition
if ( transition ) {
listitem
// Remove the highlight
.removeClass( "ui-btn-down-d" )
// Add the class for the transition direction
.addClass( transition )
// When the transition is done...
.on( "webkitTransitionEnd transitionend otransitionend", function() {
// ...the list item will be removed
listitem.remove();
// ...the list will be refreshed and the temporary class for border styling removed
$( "#list" ).listview( "refresh" ).find( ".ui-li.border" ).removeClass( "border" );
})
// During the transition the previous list item should get bottom border
.prev( "li.ui-li" ).addClass( "border" );
}
// If it's not a touch device or the CSS transition isn't supported just remove the list item and refresh the list
else {
listitem.remove();
$( "#list" ).listview( "refresh" );
}
});
// Remove active state and unbind when the cancel button is clicked
$( "#confirm #cancel" ).on( "click", function() {
listitem.removeClass( "ui-btn-down-d" );
$( "#confirm #yes" ).off();
});
}
});