(function ($) {
  Drupal.behaviors.generalScripts = {
    attach: function (context, settings) { 
	$('.brochure-download a').text('Download course brochure and mail-in registration form');
    } // end of attach function
  };
    
})(jQuery);
	
