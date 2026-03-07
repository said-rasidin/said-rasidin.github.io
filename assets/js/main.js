/*
	Read Only by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var $window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$titleBar = null,
		$nav = $('#nav'),
		$wrapper = $('#wrapper'),
		$toggle = null,
		headerWasVisible = $body.hasClass('header-visible');

	function syncHeaderA11yState() {

		var isMobile = breakpoints.active('<=medium'),
			isVisible = $body.hasClass('header-visible');

		if ($toggle) {
			$toggle.attr('aria-expanded', isVisible ? 'true' : 'false');
			$toggle.attr('aria-label', isVisible ? 'Close navigation menu' : 'Open navigation menu');
		}

		if (isMobile && !isVisible) {
			$header.attr('aria-hidden', 'true').attr('inert', '');
		}
		else {
			$header.attr('aria-hidden', 'false').removeAttr('inert');
		}

		if (isMobile && isVisible && !headerWasVisible) {
			var $focusTarget = $nav.find('a.active').first();

			if ($focusTarget.length === 0)
				$focusTarget = $nav.find('a').first();

			if ($focusTarget.length > 0)
				$focusTarget.trigger('focus');
		}
		else if (isMobile && !isVisible && headerWasVisible && $toggle)
			$toggle.trigger('focus');

		headerWasVisible = isVisible;
	}

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '1025px',  '1280px' ],
			medium:   [ '737px',   '1024px' ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ null,      '480px'  ],
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Tweaks/fixes.

		// Polyfill: Object fit.
			if (!browser.canUse('object-fit')) {

				$('.image[data-position]').each(function() {

					var $this = $(this),
						$img = $this.children('img');

					// Apply img as background.
						$this
							.css('background-image', 'url("' + $img.attr('src') + '")')
							.css('background-position', $this.data('position'))
							.css('background-size', 'cover')
							.css('background-repeat', 'no-repeat');

					// Hide img.
						$img
							.css('opacity', '0');

				});

			}

	// Header Panel.

		// Nav.
			var $nav_a = $nav.find('a');

			$nav_a
				.addClass('scrolly')
				.on('click', function() {

					var $this = $(this);

					// External link? Bail.
						if ($this.attr('href').charAt(0) != '#')
							return;

					// Deactivate all links.
						$nav_a.removeClass('active');

					// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
						$this
							.addClass('active')
							.addClass('active-locked');

				})
				.each(function() {

					var	$this = $(this),
						id = $this.attr('href'),
						$section = $(id);

					// No section for this link? Bail.
						if ($section.length < 1)
							return;

					// Scrollex.
						$section.scrollex({
							mode: 'middle',
							top: '5vh',
							bottom: '5vh',
							initialize: function() {

								// Deactivate section.
									$section.addClass('inactive');

							},
							enter: function() {

								// Activate section.
									$section.removeClass('inactive');

								// No locked links? Deactivate all links and activate this section's one.
									if ($nav_a.filter('.active-locked').length == 0) {

										$nav_a.removeClass('active');
										$this.addClass('active');

									}

								// Otherwise, if this section's link is the one that's locked, unlock it.
									else if ($this.hasClass('active-locked'))
										$this.removeClass('active-locked');

							}
						});

				});

		// Title Bar.
			$titleBar = $(
				'<div id="titleBar">' +
					'<button type="button" class="toggle" aria-controls="header" aria-expanded="false" aria-label="Open navigation menu"></button>' +
					'<span class="title">' + $('#logo').html() + '</span>' +
				'</div>'
			)
				.appendTo($body);

			$toggle = $titleBar.find('.toggle');

			$toggle.on('click', function(event) {

				event.preventDefault();
				event.stopPropagation();

				$body.toggleClass('header-visible');
				syncHeaderA11yState();

			});

		// Panel.
			$header
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnEscape: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'right',
					target: $body,
					visibleClass: 'header-visible'
				});

		if (window.MutationObserver)
			(new MutationObserver(syncHeaderA11yState)).observe($body.get(0), {
				attributes: true,
				attributeFilter: ['class']
			});

		$window.on('resize', syncHeaderA11yState);
		syncHeaderA11yState();

	// Scrolly.
		$('.scrolly').scrolly({
			speed: 1000,
			offset: function() {

				if (breakpoints.active('<=medium'))
					return $titleBar.height();

				return 0;

			}
		});

})(jQuery);
