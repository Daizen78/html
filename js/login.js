$(function() {
	//ログインボタン活性
	$('input').on('blur change', function() {
		var bool = true;
		if( $('input[type="text"]').val() && $('input[type="password"]').val()) bool = false;
		$('input[type="submit"]').prop('disabled', bool);
	});

});
