(function($) {
	$( document ).ready( function() {
		/**
		 * show/hide neccessary blocks on settings page
		 */
		if ( ! $( 'input[name="zndskhc_emailing_fail_backup"]' ).is( ':checked' ) ) {
			$( 'input[name="zndskhc_email"]' ).hide();
		}
		$( 'input[name="zndskhc_emailing_fail_backup"]' ).click( function() {
			if ( false != $( this ).is(':checked') ) {
				$( 'input[name="zndskhc_email"]' ).show();
			} else {
				$( 'input[name="zndskhc_email"]' ).hide();
			}			
		});

		/**
		 * show loader on backup page
		 */
		$( '#zndskhc_synch_button' ).click( function() {
			$( '#zndskhc_loader' ).show();
		});
	});
})(jQuery);