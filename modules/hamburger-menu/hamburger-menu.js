(function ($) {
	$.fn.hamburgerMenu = function (options) {
		var settings = $.extend(true, {
			menu: null,
			event: "click",
			iconOpenClass: "hmi-is-open",
			menuOpenClass: "menu-is-open",
			appendIcon: true,
			prependIcon: false,
			closeMenuOnOutsideClick: true
		}, options);
		var $button = $(this);
		var $menu = null;
		if (settings.menu) $menu = $(settings.menu);
		$button.each(function () {
			var $buttonItem = $(this);
			var containerClass = "hmi-inner-container";
			var innerClass = "hmi-inner";
			var $iconItems = $("." + containerClass, $buttonItem);
			if (!$iconItems.length) {
				var htmlContent = "<div class='" + containerClass + "'><div class='" + innerClass + "'></div></div>";
				if (settings.appendIcon) $buttonItem.append(htmlContent);
				if (settings.prependIcon) $buttonItem.prepend(htmlContent);
			}
		});
		$button.on(settings.event, function (e) {
			e.preventDefault();
			e.stopPropagation();
			var $buttonItem = $(this);
			if ($menu) {
				if ($buttonItem.hasClass(settings.iconOpenClass)) {
					$menu.removeClass(settings.menuOpenClass);
				} else {
					$menu.addClass(settings.menuOpenClass);
				}
			}
			$button.toggleClass(settings.iconOpenClass);
		});
		if (settings.closeMenuOnOutsideClick && $menu) {
			$(document).on(settings.event, function () {
				$button.removeClass(settings.iconOpenClass);
				$menu.removeClass(settings.menuOpenClass);
			});
			$menu.on(settings.event, function (e) {
				e.stopPropagation();
			});
		}
	};
})(jQuery);
