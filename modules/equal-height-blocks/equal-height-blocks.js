(function ($) {
	// Плагин не сможет верно работать, если для высоты блоков установлено CSS свойство transition-duration
	$.fn.equalHeightBlocks = function (options) {
		var settings = $.extend(true, {
			// Селектор для потомков, к которым будет применяться изменение высоты
			childSelector: "*",
			// Применять ли только к дочерним элементам 1-го уровня (иначе childSelector следует указать точнее)
			onlyClosestDescendants: true,
			// true  - установить высоту равной высоте наибольшего элемента в строке (строка считается по верхней границе блока);
			// false - установить высоту равной высоте наибольшего элемента среди всех, независимо от положения
			equalForLine: true,
			// Update heights on window resize
			reloadOnResize: true
		}, options);
		var $parent = $(this);
		var getItems = function () {
			if (settings.onlyClosestDescendants) {
				return $parent.children(settings.childSelector);
			}
			return $parent.find(settings.childSelector);
		};
		var setEqualHeight = function () {
			resetHeight();
			var $children = getItems();
			var itemsInfo = {};
			var heights = {};
			var maxHeights = {};
			var maxHeight = null;
			var getTopOffset = function ($item) {
				var position = $item.position();
				// If item is hidden
				if (!position) return null;
				return position.top;
			};
			var setMaxHeightToAll = function () {
				$children.each(function (index) {
					var $item = $(this);
					if (getTopOffset($item) === null) return;
					// Setting values for reset
					if (typeof $item.data("initialHeight") === "undefined") {
						var styleHeight = $item.prop("style").height;
						if (!styleHeight.length) {
							$item.data("initialHeight", "by content");
						} else {
							$item.data("initialHeight", styleHeight);
						}
					}
					var height = $item.outerHeight();
					heights[index] = height;
					if (!maxHeight || maxHeight < height) {
						maxHeight = height;
					}
				});
				$children.each(function (index) {
					var $item = $(this);
					if (getTopOffset($item) === null) return;
					var innerHeight = $item.height();
					var heightDelta = heights[index] - innerHeight;
					$item.height(maxHeight - heightDelta);
				});
			};
			setMaxHeightToAll();
			if (!settings.equalForLine) return;
			$children.each(function (index) {
				var $item = $(this);
				var topOffset = getTopOffset($item);
				if (topOffset === null) return;
				var height = heights[index];
				if (!maxHeights.hasOwnProperty(topOffset)) {
					maxHeights[topOffset] = height;
				} else {
					if (maxHeights[topOffset] < height) {
						maxHeights[topOffset] = height;
					}
				}
				var itemInfo = {
					item: $item,
					height: height
				};
				if (!itemsInfo.hasOwnProperty(topOffset)) {
					itemsInfo[topOffset] = [];
				}
				itemsInfo[topOffset].push(itemInfo);
			});
			$.each(itemsInfo, function (key, rowInfo) {
				$.each(rowInfo, function (index, itemInfo) {
					var $item = itemInfo.item;
					var innerHeight = $item.height();
					var heightDelta = $item.outerHeight() - innerHeight;
					var newHeight;
					if (settings.equalForLine) {
						newHeight = maxHeights[key];
					} else {
						newHeight = maxHeight;
					}
					$item.height(newHeight - heightDelta);
				});
			});
		};
		var resetHeight = function () {
			var $children = getItems();
			$children.each(function () {
				var $item = $(this);
				if ($item.data("initialHeight")) {
					var initialHeight = $item.data("initialHeight");
					if (initialHeight === "by content") {
						$item.css("height", "");
					} else {
						$item.css("height", initialHeight);
					}
				}
			});
		};
		setEqualHeight();
		if (settings.reloadOnResize) {
			$(window).on("resize", setEqualHeight);
		}
		$parent.on("updateChildBlocksHeight", setEqualHeight);
	};
})(jQuery);
