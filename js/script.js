$(document).ready(function($) {

	$('.eael-tooltip-content').click(function(event) {
		$('.elementor-widget-wrap[data-tag]').addClass('hidden');
		$('.elementor-widget-wrap[data-tag="' + $(this).attr('data-target') + '"]').removeClass('hidden');
	});

	// background_colors = ['#ebfff0', '#ebffff', '#ebf0ff', '#efebff', '#ffebf8', '#ffebee', '#fff2eb', '#fffbeb', '#faffeb', '#f5ffeb'];
	// color_id = -1;
	// setInterval(function() {
	// 	color_id = color_id + 1;
	// 	$('body').css('background-color', background_colors[color_id % background_colors.length]);
	// }, 5000);

	$('.elementor-form').submit(function(event) {
		event.preventDefault();

		$.ajax({
			url: './lawaldemur_files/mail.php',
			type: 'POST',
			dataType: 'json',
			data: {
				name: $('input[name="form_fields[name]"]').val(),
				email: $('input[name="form_fields[email]"]').val(),
				phone: $('input[name="form_fields[field_1]"]').val(),
				subject: $('input[name="form_fields[field_2]"]').val(),
				message: $('textarea[name="form_fields[message]"]').val()
			},
		})
		.done(function() {
			$('.elementor-button').css('background-color', '#23a455');
			setTimeout(() => $('.elementor-button').css('background-color', '#000'), 5000);
		})
		.fail(function() {
			$('.elementor-button').css('background-color', '#c36');
			setTimeout(() => $('.elementor-button').css('background-color', '#000'), 5000);
		});

	});

	function wpfront_scroll_top_init() {
        if (typeof wpfront_scroll_top == "function" && typeof jQuery !== "undefined") {
            wpfront_scroll_top({
                "scroll_offset":100,
                "button_width":0,
                "button_height":0,
                "button_opacity":0.8000000000000000444089209850062616169452667236328125,
                "button_fade_duration":200,
                "scroll_duration":900,
                "location":1,
                "marginX":20,
                "marginY":20,
                "hide_iframe":false,
                "auto_hide":"on",
                "auto_hide_after":2,
                "button_action":"top",
                "button_action_element_selector":"",
                "button_action_container_selector":"html, body",
                "button_action_element_offset":0
            });
        } else {
            setTimeout(wpfront_scroll_top_init, 100);
        }
    }
    wpfront_scroll_top_init();
});

