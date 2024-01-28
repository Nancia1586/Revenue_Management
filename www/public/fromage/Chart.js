   return "rgba(" + r + "%, " + g + "%, " + b + "%, " + (alpha || rgba[3] || 1) + ")";
		}
				curve1 = [];
	"green": [0, 128, 0],
		ctx.beginPath();
			}
	 * @param {boolean} [info.cacheable] - Will be set to `false` if option is not cacheable.
		if (!labelSizes) {
	},
			return args;
	"darkcyan": [0, 139, 139],
		point._model = {
		var paddingRight = parseFloat(helpers$1.getStyle(canvas, 'padding-right'));
		helpers$1.callback(this.options.beforeBuildTicks, [this]);
				line: 0
		unit = UNITS[i];
				head = base - minBarLength;
		var padding = optionTicks.autoSkipPadding || 0;
	}
	plugins: {
		if (x < 0) {
		for (i = 0, ilen = ticks.length; i < ilen; ++i) {
		labels = me._convertTicksToLabels(samplingEnabled ? sample(ticks, sampleSize) : ticks);
	],
				startAngle: startAngle,
		}

		return -((t = t - 1) * t * t * t - 1);
			} else {
		var fraction = range / Math.pow(10, exponent);
			labels = me._convertTicksToLabels(me._ticksToDraw);
		return {
		// Reset minSize

	"maroon": [128, 0, 0],
	for (i = 0, ilen = boxes.length; i < ilen; ++i) {
			s = p / (2 * Math.PI) * Math.asin(1 / a);


	var resizer = expando.resizer = createResizer(throttled(function() {
	 * Draws all datasets unless a plugin returns `false` to the `beforeDatasetsDraw`

		cmyk: [0, 0, 0, 0],

		});
	/**
	polarArea: controller_polarArea,
		}
	var spaces = this.spaces;

				var offsetRight = me.right - me.getPixelForTick(me.getTicks().length - 1);
	return id;
		if (helpers$1.isObject(value)) {
		var tl = getTickMarkLength(gridLines);
	var neg = stack.neg;
	},
	var count = points.length;
		}
		me.ticksAsNumbers = me.ticks.slice();
core_defaults._set('pie', helpers$1.clone(core_defaults.doughnut));

convert.lch.lab = function (lch) {
		// the axis area. For now, we say that the minimum tick spacing in pixels must be 40
		}
		var exp = Math.floor(log10(value));
		var me = this;
core_controller.plugins = core_plugins;
						title = item.label;
		return moment(time).format(format);
var valueOrDefault$a = helpers$1.valueOrDefault;
				imeta = metasets[i];
var controller_pie = controller_doughnut;
			this.animations.splice(index, 1);
		single: function(chart, e) {

	return '000000'.substring(string.length) + string;
		}).join('');

      alpha = (rgba[3] !== undefined ? rgba[3] : 1);
			title: function(tooltipItems, data) {
				// to do maybe simplify this function a bit so we can do this more recursively?
		} else {
		var me = this;
	"seashell": [255, 245, 238],
	},

	var options = scale.options;
		},
		ctx.fillStyle = fontColor; // render in correct colour
	"mintcream": [245, 255, 250],
			}
	},
 */
 * @namespace
	var edge = vm.borderSkipped;

		}
			if (opts === false) {

	var c = hcg[1] / 100;
	 * @returns {boolean}
			meta: meta,
/* MIT license */
						sumNeg += stackedRightValue || 0;
			me.min = Math.min(me.min, helpers$1.min(values));
var valueOrDefault$e = helpers$1.valueOrDefault;
		return (t = t - 1) * t * t + 1;
		}


		gridLines: {
Chart.Controller = Chart;


		// If it is in fact an object, dive in one more level
	 * @private
	"darkturquoise": [0, 206, 209],
					label += tooltipItem.yLabel;
		}
			var contains90 = (startAngle <= HALF_PI$1 && endAngle >= HALF_PI$1) || endAngle >= DOUBLE_PI$1 + HALF_PI$1;
	}
			datasetLabel: dataset.label,
		var meta = chart.getDatasetMeta(index);
			y: existingModel.caretY
			var position = getRelativePosition(e, chart);
		zeroLineBorderDash: [],
	}
		var chart = me.chart;
/**
      return rgbaString(rgba, alpha);
 * Recursively merge the given config objects as the root options by handling
		var options = me._resolveDataElementOptions(point, index);
		var rects = me.getMeta().data;

}
		if (typeof item._index !== 'undefined') {
					return opts.itemSort(a, b, data);
		var halfWidth = width / 2;

		}
		return this;
		maxTicks = Math.max(2, maxTicks);

	if (index !== -1) {
	// at each index we check if the text overlaps.
//       do not use box values types (i.e. Number(), String(), etc.)
	},

	if (c < 1.0) {
	for (i = 0; i < arc.fullCircles; ++i) {
		return me._adapter._create(time);

	_id: 'moment', // DEBUG ONLY
	hsv: ['hue', 'saturation', 'value'],
		return longest;
	// The gist of the problem is here: https://gist.github.com/nnnick/696cc9c55f4b0beb8fe9
		var s = 1.70158;
			Math.floor(largestPossibleRadius - (radiusReductionTop + radiusReductionBottom) / 2));
		var scalingFactor = me.drawingArea / (me.max - me.min);
			}
		var niceFraction;
	scale.setReductions(scale.drawingArea, furthestLimits, furthestAngles);
var PI = Math.PI;
	 * @protected
		value = values[i];
		for (i = 0; i < count; ++i) {

	},
// DEPRECATIONS
	};
function drawRadiusLine(scale, gridLineOpts, radius, index) {
			// Body
	return {



	}
var getRtlHelper$1 = helpers$1.rtl.getRtlAdapter;
};
			return '';

				model.controlPointNextX = controlPoints.next.x;
/**
	}
		if (maxLabelWidth + 6 > tickWidth) {
			addResizeListener(canvas, listener, chart);
 * Currently supported unit string values.

		me._majorUnit = !tickOpts.major.enabled || me._unit === 'year' ? undefined

	"mediumaquamarine": [102, 205, 170],
		var arcs = meta.data;
		xAlign = 'right';
	var s;
	 */
		var hoveredItem;
		radius: 'pointRadius',
	 * @param {object|Array} loopable - The object or array to be iterated.
	var g = args[1];
		if (a < 1) {

		return values.rgb.concat([values.alpha]);
			idx = labels.indexOf(value);

 *
defaults._set('global', {


				var boxWidth = getBoxWidth(labelOpts, fontSize);
		// {r: 10, g: 10, b: 10}
	dataElementType: elements.Rectangle,
	/**
		var length = footer.length;
	var item, index, len;
			keys = Object.keys(loopable);
		var vm = this._view;
			var val = scale._parseValue(dataset.data[i]);
		if (target.x !== undefined && target.y !== undefined) {

			if (isHorizontal) {
		ctx.textBaseline = 'middle';
	linkScales: helpers$1.noop,
			return 0.5 * t * t * t;
					// Inner square
		_bodyFontFamily: valueOrDefault$8(tooltipOpts.bodyFontFamily, globalDefaults.defaultFontFamily),

		} else if (position === 'left') {
 * @prop {string} position - The position of the item in the chart layout. Possible values are
		// Support old implementations (that modified `this.ticks` directly in buildTicks)
			if (type === 'string') {
			// If the user provided a filter function, use it to modify the tooltip items
		var Surrogate = function() {
		+ (6 * Math.round(g / 255 * 5))
});
		// If the user specified a precision, round to that number of decimal places
		var fillLineOfText = function(line) {
		if (me.active.length && hoverOptions.mode) {
		var metaData = meta.data;

	 * Returns all registered plugin instances.
	"antiquewhite": [250, 235, 215],
		me.ticks = helpers$1.callback(me.options.afterBuildTicks, [me, me.ticks]) || me.ticks;
		// Calculate space needed by label in axis direction.
	if (scale.getPointPositionForValue) {
		textAlign: function(align) {
function doFill(ctx, points, mapper, view, color, loop) {
		model.borderColor = valueOrDefault$5(options.hoverBorderColor, getHoverColor(options.borderColor));
		if (vals) {
			ctx.lineDashOffset = valueOrDefault$e(legendItem.lineDashOffset, lineDefault.borderDashOffset);
	formats: function() {
		ctx.fillStyle = vm.bodyFontColor;
		canvas.width = canvas.width;
function hexString(rgba, a) {
		circular: false
				}
		var angleRadians = scale.getIndexAngle(i);
		// The default behavior of lines is to break at null values, according

		significand = Math.floor(tickVal / Math.pow(10, exp));
		hsv: [0, 0, 0],
		me._ticks = ticks;
			xOffset = Math.cos(rad) * radius;
 * @deprecated since version 2.7.0
		me.width = minSize.width = isHorizontal ? me.maxWidth : textSize;

			: Math.pow(10, me._startValue + (decimal - me._valueOffset) * me._valueRange);
	},
		if (vals.r !== undefined || vals.red !== undefined) {
			chart: me.chart,
		// use scale.getTicks() instead.
		};
		this.tooltip.initialize();
core_controller.platform = platform;
			return 'AAA';
			var right = x + width - r;
/**
			top: 4,
		var paddingTop = helpers$1._calculatePadding(container, 'padding-top', clientHeight);
	 * @param {number} duration - The animation duration in ms.

			max = Math.max(max, timestamps[timestamps.length - 1]);
		me.initialize();
		var maxTicksLimit = tickOpts.maxTicksLimit;
	}
					for (i = 0, ilen = data.length; i < ilen; i++) {
/**
		me._bufferedRequest = null;
			var endAngle = startAngle + circumference;
	 * Updates the chart layout unless a plugin returns `false` to the `beforeLayout`
			return;
/**
		var me = this;
		helpers$1.each(items, function(item) {
		} else {
	 */
				}
	initialize: function(config) {

	var xAlign = alignment.xAlign;

		}
	drawBody: function(pt, vm, ctx) {

			if (el && el.hasValue()) {
		'backgroundColor',

		var proxies = expando.proxies || (expando.proxies = {});
		}],

		for (i = 0; i < space.length; i++) {
		if (!config || typeof config !== 'object') {
		var majorFormat = formats[majorUnit];
}
	return ['__proto__', 'prototype', 'constructor'].indexOf(key) === -1;
		values.spanGaps = valueOrDefault$6(config.spanGaps, options.spanGaps);
	},
		callbacks: {
	},
			// Undefined strings and arrays should not be measured
	scale.ctx.font = plFont.string;
		var i = 0;

		var innerRadius = reset && animationOpts.animateScale ? 0 : me.innerRadius;
		}
		size: 60000,
	if (value === null) {
	/**
	}
		// store width used instead of chartArea.w in fitBoxes

 */
   }

			me.bottom = me.height;

		return {x1: x1, x2: x2, x3: x3, y1: y1, y2: y2, y3: y3};
	do {
	 * or the data if the index is specified
		ctx.lineTo(x + radius, y + height);
		me.afterSetDimensions();
				borderDashOffset = gridLines.zeroLineBorderDashOffset || 0.0;
	helpers$1.previousItem = function(collection, index, loop) {
var element_point = core_element.extend({
};
		me.beforeCalculateTickRotation();
		return resolve$3([
					if (c1.valid) {
	 * @private
		} else if (type === 'click') {

		for (i = 0, ilen = datasets.length; i < ilen; i++) {
	"lightsalmon": [255, 160, 122],
		deprecated$1('time scale', time.min, 'time.min', 'ticks.min');
	 * @private
	l = (116 * y) - 16;
		}

		model.backgroundColor = valueOrDefault$5(options.hoverBackgroundColor, getHoverColor(options.backgroundColor));
	},
			end = last;
		}
				var paddingLeft, paddingRight;
		rf = function(x) {
				height: style.height,
			tx1 = me.right - tl;
		if (rawValue) {
	if (c < 1) {
				ctx.moveTo(xLeft, yMiddle);
			ctx.lineTo(x - yOffset, y + xOffset);
	 * @private
		me.beforeUpdate();
		if ((!ticks || !ticks.length) && me.ticks) {
		var stackIndex = me.getStackIndex(datasetIndex, me.getMeta().stack);
   hexString: hexString,
}
	for (i = 0; i < ticks.length; i++) {
	var start, size;
		if (loop && loopOffset === undefined && d0) {
			}
		var rgb = this.values.rgb;
}
	 * @param {object} [options] - Merging options:

		: b * 12.92;
		var ctx = me.ctx;
		lineWidth: 1,
		helpers$1.each(scalesOptions.xAxes, function(xAxisOptions, index) {
			helpers$1.each(bodyItem.after, fillLineOfText);

convert.rgb.hex = function (args) {
	l = (min + max) / 2;
		_titleFontFamily: valueOrDefault$8(tooltipOpts.titleFontFamily, globalDefaults.defaultFontFamily),

			return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * (2 * Math.PI) / p));
			return;
// @see adapted from https://www.anujgakhar.com/2014/03/01/binary-search-in-javascript/
		// make maxWidth and maxHeight private
			x = me.right - (isMirrored ? 0 : tl) - tickPadding;
	update: function(reset) {
		} else {

		callback: core_ticks.formatters.logarithmic
		angleLines: {
		} else if (h > 1) {
	var pos = helpers$1.getRelativePosition(event, chart);
				// Let's consider that all data have the same format.
			if (isNaN(boxWidth) || boxWidth <= 0) {
		if (!hash[item]) {
		return p;
			minSize.height += totalHeight;
			circular: true
		max = parse(me, getMax(options)) || max;

		var data = dataset.data || (dataset.data = []);
// Default passive to true as expected by Chrome for 'touchstart' and 'touchend' events.
		return this;
				model: point._model,
 */
var conversions_4 = conversions.hwb;
 * @todo remove at version 3
		reverse: false,
	/**
		};
// hide .channels and .labels properties
function handleMaxPadding(chartArea) {

				options.onClick.call(me, e.native, me.active);

 * Provided for backward compatibility, use EventTarget.removeEventListener instead.

			labelRotation = Math.max(minRotation, Math.min(maxRotation, labelRotation));

			minSize.width = me.maxWidth;
			}
		var dataset = me.getDataset();
		for (i = len1 - 1; i > 0; --i) {
		}
	resetElements: function() {
	resyncElements: function() {
	"red": [255, 0, 0],
	},
		// Update Lifecycle - Probably don't want to ever extend or overwrite this function ;)
	 */
		var width = canvas && canvas.width;

		y: y
	isHorizontal: function() {
		}

		if (ctx.setLineDash) {
		} else if (!target.hasOwnProperty(key)) {
				me.min--;

					custom[key],
		xAxes: [{
		// currently be part of layers. Instead, we draw
		}
	sl = s * vmin;
helpers$1.math = math;

	alpha: function (val) {

		var opts = me.options;
	}
				me._active.reverse();
		var me = this;
	return helpers$1.where(array, function(v) {
	var adapter = scale._adapter;
	var olf, orf; // functions to determine if left/right alignment causes tooltip to go outside chart
	y = y2 > 0.008856 ? y2 : (y - 16 / 116) / 7.787;
	},
		 * @param {IInteractionOptions} options - options to use
			model.body = me.getBody(tooltipItems, data);
 * Provided for backward compatibility, instead we should create a new Chart
	numSteps: 60, // default number of steps
	} else if (xAlign === 'center') {
		case 'px':
		numSpaces = Math.round(numSpaces);
		}
		var minorFormat = formats[me._unit];
			me.longestLabelWidth = labelSizes.widest.width;
	getElementsAtEventForMode: function(e, mode, options) {
	var expando = node[EXPANDO_KEY] || {};
			me.right = me.width;
 * Important: this method can return ticks outside the min and max range, it's the
				// Dimensions changed and there were non full width boxes before this
			if (meta.type && meta.type !== type) {
			prop = props[i];
			source.fill = resolveTarget(sources, i, propagate);
		 * Returns items at the same index. If the options.intersect parameter is true, we only return items if we intersect something
				return currentItem;
		var valueCategory, labels, idx;
	var h = hwb[0] / 360;
		};
	// Args are: (tooltipItem, data)
			// Set ILayoutItem parameters for backwards compatibility

convert.rgb.keyword = function (rgb) {
	},
      }
			if (container && container.clientWidth < w && chart.canvas) {
		value: valueScale ? '' + valueScale.getLabelForIndex(index, datasetIndex) : '',

		enumerable: false,
		}
			return fill;
	return createEvent(type, chart, pos.x, pos.y, event);
		xAxes: [{
				});
		return this;
				data = chart.data.datasets[i].data;
	}
});

}
		// isNaN(object) returns true, so make sure NaN is checking for a number; Discard Infinite values

			var targetNode = root.host ? root : document.head;
		borderDash: [],

	var g = rgb[1] / 255;
		return vm.base - vm.y;
		var i, ilen, listItem, listItemSpan;
	},
	_getSortedDatasetMetas: function(filterVisible) {
			}
	l = (116 * y) - 16;
			height: renderHeight,
              + hexDouble(rgba[2])
		var me = this;
		// noop

		// In order to correctly handle data addition/deletion animation (an thus simulate
	// Body lines may include some extra width due to the color box
		}
	drawDataset: function(meta, easingValue) {
	 * Returns descriptors of enabled plugins for the given chart.
	if (lf(model.x)) {
			var lastLineWidth = valueAtIndexOrDefault(gridLines.lineWidth, items.ticksLength - 1, 1);
	getPixelForValue: function(value, index, datasetIndex) {
};
		}
			start: start,
	var tickBackdropHeight = getTickBackdropHeight(opts);
		var opts = me.options;

		return valueOrDefault$c(tickOpts.fontSize, core_defaults.global.defaultFontSize) + tickOpts.backdropPaddingY * 2;
	var x = xyz[0];
			var labelTextColors = [];
	"green": [0, 128, 0],
 * Provided for backward compatibility, not available anymore
		return this.chart;
			plugin = descriptor.plugin;
 * @private

	var x = chartArea.x;
	 * IMPORTANT: `target` is not cloned and will be updated with `source` properties.
					widestLabelSize.width + tickPadding + lineSpace;
							index: i
	easeInQuart: function(t) {
	var lineWidth = valueAtIndexOrDefault$1(gridLineOpts.lineWidth, index - 1);


	convert[fromModel] = {};
	// is removed then added back immediately (same animation frame?). Accessing the
			backgroundColor: model.backgroundColor,
	},

		return total;
		var ticks = this.ticks;
	},
		} else if (g === v) {
	 * @param index
	 * Fits boxes of the given chart into the given size by having each box measure itself
 * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener
		if ((t /= 0.5) < 1) {
		item.weight = item.weight || 0;
});
		ctx.rotate(rotation);
}
			top: chartArea.top,

	_dataElementOptions: {
			left: chartArea.left,
	 * Returns if the given value contains an effective constraint.
			dataset: me.getDataset(),
	 * @function
			dataIndex: index,
			ctx.font = helpers$1.fontString(titleFontSize, vm._titleFontStyle, vm._titleFontFamily);
	};


			value = inputs[i];
		var me = this;

	 * Applies the contents of two or more objects together into the first object.
 */
		'backgroundColor',
		 * @function Chart.Interaction.modes.intersect
		var fillText = function(x, y, legendItem, textWidth) {
			});
	 * @private
 * @param generationOptions the options used to generate the ticks
	}
			beforeTitle: helpers$1.noop,
	var f = h - Math.floor(h);
	_getValueScaleId: function() {
	getValueForPixel: function(pixel) {
			}
		case 4: r = n; g = wh; b = v; break;
});

}

		}
			values[space][i] = vals[space.charAt(i)];

				return;
			ctx.textAlign = rtlHelper.textAlign(vm._footerAlign);
		var me = this;

	_getIndexScale: function() {
	},
		return this._getSortedDatasetMetas(true);
		// we still support no return (`this.ticks` internally set by calling this method).
			rad += TWO_THIRDS_PI;
		var data = me.getDataset().data || [];

		 * @param {Chart} chart - the chart we are returning items from
		me.max = Number.NEGATIVE_INFINITY;
		} else {
		helpers$1.each(scalesOptions.yAxes, function(yAxisOptions, index) {
	},

	 */
		}
});
		}
		me.legendHitBoxes = [];
});
				me.paddingRight = Math.max((paddingRight - offsetRight) * me.width / (me.width - offsetRight), 0) + 3;
	// handle greyscale
		chart.innerRadius = Math.max(opts.cutoutPercentage ? (chart.outerRadius / 100) * (opts.cutoutPercentage) : 1, 0);

	 * @private
		}
		var me = this;
	onAnimationProgress: null, // user specified callback to fire on each step of the animation
				var centerX = rtlHelper.xPlus(x, boxWidth / 2);
		return null;
 */
core_controller.Tooltip = core_tooltip;
				head = base + minBarLength;
			return;
			totalWidth += currentColWidth;
	_dataElementOptions: [

	},
		var meta = this.getMeta();
					dataLabel = dataLabel.slice();
				x3 = x1;
	isNullOrUndef: function(value) {
			}
 */
	},
	}
		 * @param {Chart} chart - the chart we are returning items from
			});
			radius: model.radius
	 * @since 2.7.0
			pointBefore = i > 0 ? pointsWithTangents[i - 1] : null;
};
		bottom: y.start,

			// that intersect the position, return nothing
		stacks[key] = {

	/**

			labels.push(parse(me, dataLabels[i]));
				values[key] = resolve([
	var y = xyz[1];
function placeBoxes(boxes, chartArea, params) {
	"greenyellow": [173, 255, 47],
	_dataElementOptions: [
				currentClosestDistance = distance;
	var n;
	var minor = timeOpts.unit || determineUnitForAutoTicks(timeOpts.minUnit, min, max, capacity);
		} else {
		if (outer.w === inner.w && outer.h === inner.h) {
		if (animationOptions && duration) {
	 */
		var DEFAULT_MAX = 10;
	 * Utility for getting the pixel location of a percentage of scale
}
		for (i = 0, ilen = keys.length; i < ilen; ++i) {


		stacked === undefined && meta.stack === undefined ? meta.index : '',
			ctx.save();
		var scale = me.chart.scale;
		callbacks: {
			}
						// invalid, hidden and negative values are ignored
		var i, layers;
   }


				y: me.top + labelOpts.padding,
		var ctx = me.ctx;
 * @prop Chart.Animation#animationObject
	if (space === 'alpha') {
		ctx.lineWidth = vm.borderWidth;
		'hoverBorderWidth',
		layout.height = layout.horizontal && params.hBoxMaxHeight;
			offset = (scale.getPixelForTick(1) - lineValue) / 2;

		me.updateLayout();
	}
		'borderWidth',
			pos[i] += value.max;
		canvas.width = me.width = newWidth;

	registerScaleType: function(type, scaleConstructor, scaleDefaults) {


	},
	// The total circumference of the chart.
				x: centerX,


	"blueviolet": [138, 43, 226],
		var meta = this.getDatasetMeta(datasetIndex);
	}
			return {
      return percentaString(rgba, alpha);
}
	desaturate: function (ratio) {

			box.bottom = y + box.height;
				label: helpers$1.valueAtIndexOrDefault(dataset.label, index, chart.data.labels[index])
			pure[0] = v; pure[1] = 0; pure[2] = 1; break;
	var colorString = match[0];
 * @todo remove at version 3
	position: 'left',
					ctx.fillRect(rtlHelper.leftForLtr(rtlHelper.xPlus(rtlColorX, 1), bodyFontSize - 2), pt.y + 1, bodyFontSize - 2, bodyFontSize - 2);
		titleFontColor: tooltipOpts.titleFontColor,
		// Utility
	 */
	isHorizontal: function() {

			label: me.chart.data.labels[index]
		// Fit
 * @namespace Chart.helpers.clear
			// Draw the line at the edge of the axis
		this.setValues('alpha', val);
		}
					fn.call(thisArg, loopable[i], i);
	},
				merge(keys[k], target, source, options);
			return;
	getLabelForIndex: function(index, datasetIndex) {

 * @prop Chart.Animation#chartInstance

	return ticks;
				x2 = ptX + cornerRadius + (caretSize);
			continue;

 * Helper to get the location a tooltip needs to be placed at given the initial position (via the vm) and the size and alignment

		}
			break;

		var ticks = [];
var core_scaleService = {
 * @prop {number} bottom - Bottom edge of the item. Set by layout system and cannot be used in update
		return {
		// https://github.com/chartjs/Chart.js/issues/3887
		if (!context || !canvas) {
 * by setting the type in the config (`new Chart(id, {type: '{chart-type}'}`).
		var values = core_datasetController.prototype._resolveDataElementOptions.apply(me, arguments);
	},

	"aliceblue": [240, 248, 255],
	if (model.y < size.height) {
		});
	_drawLabels: function() {

		}
			// If no explicit render height and style height, let's apply the aspect ratio,
function updateMinMax(scale, meta, data) {
		}
		 * @prop Chart#chart
			offset: offsets[idx] || 0
		if (this._options.enabled && hasTooltipContent) {
	//
				var slopeDeltaX = (pointAfter.model.x - pointCurrent.model.x);
			longest = textWidth;
	return (ilen === 0 || !majorUnit) ? ticks : setMajorTicks(scale, ticks, map, majorUnit);

		for (i = 0; i < pointsLen; ++i) {
		var vm = this._view;
			if (isHorizontal) {

		var y = reset ? yScale.getBasePixel() : yScale.getPixelForValue(data, index, dsIndex);
		return index <= 0 ? collection[0] : collection[index - 1];
				continue;

	var target = [];
			size = minBarLength;
		size: 604800000,
	var datasetIndex = element._datasetIndex;
		cur = graph[cur].parent;
		var maxTicks = me.getTickLimit();
		line: {
				} else {
					me.max = me.min + 1;
		}
			pt.y += bodyFontSize + bodySpacing;
			me._lastActive = me._active;
		b: scale.height - scale.paddingTop
		if (fn && typeof fn.call === 'function') {
		me.min = helpers$1.isFinite(me.min) && !isNaN(me.min) ? me.min : DEFAULT_MIN;
	height += titleLineCount * titleFontSize; // Title Lines
	"darkviolet": [148, 0, 211],
 * @param {string} distribution - If 'linear', timestamps will be spread linearly along the min
		var width, color, i, ilen, item;
	},
	var proxy = expando.renderProxy;
	return canvas;

		var ctx = me.ctx;
		var opts = chart.options;
				return [];
		if (!a0 || !a1 || a0.length !== a1.length) {

		 * @param {Event} e - the event we are find things at
		lineHeight = tickFont.lineHeight;
		if (reverse) {
		chart.boxes.push(item);
		font.string = toFontString(font);
			gc.splice(0, gcLen);
	//

	plugins: {}
		value = +me.getRightValue(value);


						if (isNaN(value.min) || isNaN(value.max) || meta.data[i].hidden || value.min < 0 || value.max < 0) {
	} else {
			labels: labels
		var options = chart.options || {};
		me._labelItems = null;
	ticks.push(lastTick);
		var legendOpts = chart.options.legend;
var _defaults = defaultConfig;
		return vm ? ((Math.pow(mouseX - vm.x, 2) + Math.pow(mouseY - vm.y, 2)) < Math.pow(vm.hitRadius + vm.radius, 2)) : false;
				p.push(plugin);
	}
			return effects.easeInBounce(t * 2) * 0.5;
 */
		backgroundColor: 'pointBackgroundColor',
var conversions_9 = conversions.hex;
		return {

	onDataSplice: function(start, count) {
	},
		// NOTE(SB): using node-clone creates a dependency to Buffer when using browserify,
		if (helpers$1.isNullOrUndef(startIndex)) {
	var furthestLimits = {

	hslaArray: function () {

		if (me.options.offset) {
			return !!display;
			window.webkitRequestAnimationFrame ||
	"gainsboro": [220, 220, 220],


	beforeDataLimits: function() {
		h = 2 + (b - r) / delta;
	delete array._chartjs;
		me.outerRadius = chart.outerRadius - (chart.radiusLength * me.index);
		}
		var offset, width;
			view[key] = target;
		'borderWidth',
	var type = EVENT_TYPES[event.type] || event.type;
		canvas.height = me.height = newHeight;
	update: function(changed) {
	},
			// Args are: (tooltipItems, data)
	if (fill === true) {
		return this;
	};
					// Undefined strings and arrays should not be measured
		meta = me.getMeta();

		if (!p) {
}
 * @deprecated since version 2.1.5


				if (isPointInArea(model, area)) {
		switch (style) {
		me.margins = margins;

	var c;
			ctx.textAlign = rtlHelper.textAlign(vm._titleAlign);
		};
	"darkmagenta": [139, 0, 139],
		y2 = vm.y + half;
}
		values.categoryPercentage = valueOrDefault$3(indexOpts.categoryPercentage, values.categoryPercentage);
		 * the "instance" still need to be defined since it might be called from plugins.
		}];
			// almost a circle. 0.516 (instead of 0.5) produces results with visually
		this.setValues('hwb', hwb);
		borderColor: tooltipOpts.borderColor,
			return 7.5625 * t * t;
			if (pointAfter && !pointAfter.model.skip) {
	var s = hsv[1] / 100;
	}

	return [
convert.rgb.ansi256 = function (args) {
	// color.red(100)
	}
		return Math.sin(t * (Math.PI / 2));
		var model = arc._model;
		setWidth: function(w) { // eslint-disable-line no-unused-vars
		'backgroundColor',
	var l = g * (1.0 - c) + 0.5 * c;
 * @namespace Chart
	"lightsteelblue": [176, 196, 222],
				model.controlPointNextY = controlPoints.next.y;
	ctx.textBaseline = 'middle';
	_getLabelSizes: function() {
			borderWidth: model.borderWidth,
	},


			});
	 * @private

				queue.unshift(adjacent);
		if (!opts.display) {
		for (i = 0, ilen = elements.length; i < ilen; ++i) {
			datasets: datasets,
					var logTick = helpers$1.log10(Math.abs(tickValue));
	legendCallback: function(chart) {


		var text = opts.text;
			};
			}
		var count = 0;

	"darkblue": [0, 0, 139],
	var i, ilen, item;
		// Calculate Range
	],
		}

		ctx.strokeStyle = vm.borderColor;
			return x <= (size.width / 2);
		 * Ticks generation input values:

				w1 * color1.red() + w2 * color2.red(),
		// Ticks - `this.ticks` is now DEPRECATED!
  return hsla && hsla.slice(0, 3);
				}
	} else if (yAlign === 'bottom') {
		config = initConfig(config);
	var size, ratio;
		s = delta / (2 - max - min);
		weight: 2000         // by default greater than legend (1000) to be above
		if (e.type === 'mouseup' || e.type === 'click') {
		if (significand === 10) {
		arc.$previousStyle = {
	/**
 * for example because of `display: none` on a parent node.
		}
			delete chart.titleBlock;

	draw: function() {
		}
var DOUBLE_PI$1 = PI$1 * 2;
	},
		'borderCapStyle',
			title: function() {

	 * @since 2.1.5
	/**


	 * @private
	"springgreen": [0, 255, 127],

			chart: chart,
		if (!opts.display) {
		}
			string: ''
			if (!currentVM.skip) {
	// After finding the largest index and angle we calculate how much we need to remove
		var ctx = me.ctx;
					// Border

		}
			fitBoxes(verticalBoxes, chartArea, params);
	getScaleForId: function(scaleID) {
	"teal": [0, 128, 128],
			return;
		'borderDashOffset',
	}
	},
					datasetOpts[elementOptions[key]],
	afterCalculateTickRotation: function() {
				y: centerY,
plugins.title = title;
		expand.scrollTop = maxSize;
	handleEvent: function(e) {
	getRtlAdapter: getAdapter,
			ctx.moveTo(currentVM.x, currentVM.y);
 * @param {function} handler - the callback to execute for each visible item

		var i;
			});
	 */
	var i, cx, cy, r;
		model.borderWidth = valueOrDefault$7(options.hoverBorderWidth, options.borderWidth);
	 * @private
			}
		me.min = labels[minIndex];
		});

		model.borderColor = valueOrDefault$4(options.hoverBorderColor, getHoverColor(options.borderColor));
	// -- Math methods
	var table = [];
			var id = plugin.id;
	"orangered": [255, 69, 0],
		}


		}
/**
		var opts = me.options;
		helpers$1.canvas.clipArea(chart.ctx, chart.chartArea);
		var getHoverColor = helpers$1.getHoverColor;
		var v1 = reverse ? a : b;
	update: function(config) {
};
		listeners.splice(index, 1);
Color.prototype.spaces = {
			backgroundColor: model.backgroundColor,
		var lum = [];
			}
	return table;
      return;

		me.beforeBuildLabels();

	// These methods are ordered by lifecycle. Utilities then follow.
	var g;
		me._valueOffset = offset;
			for (i = 0; i < ilen; ++i) {
	addAnimation: function(chart, animation, duration, lazy) {
		leftAndTop: left.concat(top),
	chart.legend = legend;
				hasCNode ? parseMaxStyle(constrainedNode, domNode, percentageProperty) : infinity,
		 */
			a = 1;
		var labelOpts = opts.labels;
	 * Returns the effective number of stacks based on groups and bar visibility.
		mode: 'label'
		if (core_plugins.notify(me, 'beforeEvent', [e]) === false) {

	},
});

	"cornflowerblue": [100, 149, 237],
				pointCurrent.mK = pointBefore.deltaK;
			};
function setLayoutDims(layouts, params) {
		// See : https://en.wikipedia.org/wiki/Monotone_cubic_interpolation
		steps: 60
		meta.controller.draw(easingValue);
			startAngle: vm.startAngle,
			// user specified min value
		 * @since v2.4.0
	 * @param {Chart} chart - the chart to use
	releaseContext: function() {},
		}
		 * @function Chart.Interaction.modes.dataset
				var scaleClass = core_scaleService.getScaleConstructor(scaleType);


		return stacks;
		pt.x = getAlignedX(vm, bodyAlignForCalculation);
		delete ctx.prevTextDirection;
		 * @deprecated since version 2.4.0
};
		type: 'radialLinear'
					var value = +me.getRightValue(rawValue);
		var me = this;
	// If very close to our rounded value, use it.
	"salmon": [250, 128, 114],
			case 'start':
		return moment(time).add(amount, unit).valueOf();
	},
};
				x3 = x1;
		if (typeof method === 'function') {
		// Ensure ticks contains ticks in new tick format
	easeInBack: function(t) {
			}
		me.setCenterPoint(radiusReductionLeft, radiusReductionRight, radiusReductionTop, radiusReductionBottom);
		// If no style has been set on the canvas, the render size is used as display size,
			enumerable: false,
		 * @return {string} string representation of the tickValue parameter
					ctx.setLineDash(item.borderDash);
	height += combinedBodyLength ? (combinedBodyLength - 1) * model.bodySpacing : 0; // Body Line Spacing
	 */
convert.gray.hex = function (gray) {
		};
		var i = 0;
	"ivory": [255, 255, 240],

			var type = dataset.type || me.config.type;
 * @todo remove at version 3
		var tickOpts = opts.ticks;
			for (i = me.chart.data.labels.length - 1; i >= 0; i--) {
	 * @private
	return function (args) {
			legend.handleEvent(e);
		time = moment(time);

	},
	 */
	for (i = 0; i < space.length; i++) {
	v = 1 - bl;
		} else if (vals = colorString.getHsla(obj)) {

	}
		if (opts.stacked || hasStacks) {

				x1: x1,
	},
	configure: function(chart, item, options) {
		me.paddingTop = getTickBackdropHeight(me.options) / 2;
	// Get index of the dataset in relation to the visible datasets. This allows determining the inner and outer radius correctly
	var c = cmyk[0] / 100;
	c = (1 - r - k) / (1 - k) || 0;
	 * the plugin, which one will be re-exposed in the chart.js file.
		'barPercentage',
		};
		var start = value.start === undefined ? 0 : value.max >= 0 && value.min >= 0 ? value.min : value.max;
			// Build the Text Lines
 * Generate a set of logarithmic ticks
					return this.getRightValue(rawValue.x);
 */
		// https://github.com/chartjs/Chart.js/issues/4152
		var i, ilen;
});
	},

		 * @method IPlugin#afterScaleUpdate

					columnHeights.push(currentColHeight);
		// Set the unconstrained dimension before label rotation
		var listeners = me._listeners;

				w1 * color1.blue() + w2 * color2.blue()
   if (!string) {
		ctx.restore();
	rgbString: function () {
		return target;
			position: 'bottom',
}
	var b;
		} else {
      return [h, w, b, a];
		return null;
		var ticks = me._ticksToDraw;
		var opacity = Math.abs(vm.opacity < 1e-3) ? 0 : vm.opacity;
	if (options.offset && ticks.length) {
	 * Returns the formatted date in the specified `format` for a given `timestamp`.
					width = helpers$1.measureText(ctx, cache.data, cache.gc, width, nestedLabel);
		if (typeof styleValue === 'string') {
	"steelblue": [70, 130, 180],
	overrideTextDirection: overrideTextDirection,

		this.tickValues = this.ticks.slice();


		var lineHeight = fontOpts.lineHeight;
		for (; i < ilen; ++i) {
              );
	try {
			me._reversePixels = !me._reversePixels;
	"cadetblue": [95, 158, 160],
			borderSkipped: 'bottom',

 * @since 2.1.0
 * @private
		alpha = vals;
		}
	};
 * EventTarget.removeEventListener compatibility: Chrome, Opera 7, Safari, FF1.5+, IE9+
			me.margins.bottom = Math.max(me.paddingBottom, me.margins.bottom);

 * IMPORTANT: this class is exposed publicly as Chart.Legend, backward compatibility required!

						values[i] += value.max;
function computeCircularBoundary(source) {

		return [
			if (type === '[object HTMLImageElement]' || type === '[object HTMLCanvasElement]') {
		me._table = buildLookupTable(me._timestamps.data, min, max, distribution);

	updateElement: function(arc, index, reset) {
			ctx.arc(x - yOffset, y + xOffset, cornerRadius, rad + HALF_PI, rad + PI);
var extend = helpers$1.extend;
			height: heights[idx] || 0,
		// Set the unconstrained dimension before label rotation
		return point.x > area.left - epsilon && point.x < area.right + epsilon &&
		var axisHalfWidth = axisWidth / 2;
};
				dtype: 'radialLinear',
	width += 2 * model.xPadding;
/**
	 */

	numSpaces = (niceMax - niceMin) / spacing;
		me.paddingRight = 0;

	 * @returns {boolean} true if the method succeeded, else false
			for (i = 0; i < length; ++i) {
					});
	maintainAspectRatio: true,
	},
		var options = arc._options || {};
	if (isVertical(vm)) {
		 * nearest mode returns the element closest to the point
				max = hoverWidth > max ? hoverWidth : max;
	beforeDatasetsDraw: function(chart) {
		this._plugins.concat(config.plugins || []).forEach(function(plugin) {
		}


		var options = Object.defineProperty({}, 'passive', {
	 * @since 2.7.0

			return NaN;
			me.getDatasetMeta(i).controller.buildOrUpdateElements();
		'hoverRadius',
var Element = function(configuration) {
	} else if (scale.getBasePixel) {

		chart.offsetY = offsetY * chart.outerRadius;
	var width = 0;
			return x <= midX;
				continue;
			return;
		return this.chart.scales[scaleID];
		return this.chart.scale.id;
		// Model

      return;
	 * @param {number} index - The index in `value` to lookup for value.
			}
		//
		var paddingBottom = parseFloat(helpers$1.getStyle(canvas, 'padding-bottom'));
			target.x,

		return 30;
		var rangeFromCentre = (vm.outerRadius - vm.innerRadius) / 2 + vm.innerRadius;
}

			}
}
				ctx.lineTo(midpoint, flip ? previous.y : target.y);
	advance: function() {
					min = Math.min(value, min);
			minSize.width += totalWidth;

		return;
			parseVisibleItems(chart, function(element) {
		titleMarginBottom: tooltipOpts.titleMarginBottom,

	"tan": [210, 180, 140],
	"orchid": [218, 112, 214],

	items.push(max);
	updateDatasets: function() {
	hue: function (val) {
			y = vm.y;
		'borderCapStyle',

		this.setValues('rgb', rgb);
function keyword(rgb) {
		var me = this;
			scale.fullWidth = scale.options.fullWidth;
	start = curr - (curr - Math.min(prev, next)) / 2 * percent;
	whiteness: function (val) {


		var me = this;
		me.height = minSize.height;
			var tickFonts = parseTickFontOptions(tickOpts);
			niceFraction = 2;
			height: 0
				var args = Array.prototype.slice.call(arguments);

	 */
		for (i = 0; i < ticksLength; ++i) {
		ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
 * @interface IInteractionOptions
	"peru": [205, 133, 63],
	var h = hsv[0] / 60;

		};
	draw: function() {
	"darkred": [139, 0, 0],
 */
		rectangle._model = {
 * @private
			if (hoveredItem && opts.onClick) {
			return function(point, i) {
	"lightseagreen": [32, 178, 170],
	var length = ticks.length;
		// eslint-disable-next-line no-self-assign
				continue;
		hoverBorderColor: 'pointHoverBorderColor',
	helpers$1.findPreviousWhere = function(arrayToSearch, filterCallback, startIndex) {
	// Args are: (tooltipItem, data)
	 * @private
				return tickValue.toExponential();
		if (val) {
		var meta = me.getDatasetMeta(index);

			end: pos + (size / 2)
			currentVM = points[index]._view;

			if (xAlign === 'left') {
	return colorName[keyword];
	if (stacks[key] === undefined) {
		}
						me.min = Math.min(value.min, me.min);
		/**
/**
		me.zeroLineIndex = me.ticks.indexOf(0);
	var bounds = !vm || (skipX && skipY) ? false : getBarBounds(vm);
		samplingEnabled = sampleSize < ticks.length;
		var me = this;

		} else {
	var span = view.spanGaps;
convert.rgb.hwb = function (rgb) {
			meta.dataset.transition(easingValue);
		return {
				});
		var container = helpers$1._getParentNode(domNode);
	return computeLinearBoundary(source);
		}
	g = g > 0.0031308
convert.rgb.hsv = function (rgb) {

		var fb = t * s12;
	var heights = [];
	luminosity: function () {
		ctx.save();
	 * @param {number} x - The x axis of the coordinate for the rectangle starting point.

		var boxPadding = box.getPadding();
		// Drawing direction and text direction
			return [v, t, p];
	shrink.appendChild(createDiv());
			return 231;
	// The rotation of the chart, where the first data arc begins.
	var curve1 = [];
				if (element.inRange(position.x, position.y)) {
		var parentNode = helpers$1._getParentNode(domNode);
	dataset: function(source) {

		me._config = helpers$1.merge(Object.create(null), [
		var vm = this._view;
	for (i = 0; i < ilen; ++i) {
helpers.callCallback = helpers.callback;
		style.appendChild(document.createTextNode(css));
		});
		if (legendOpts) {
	var userPadding = params.padding;
		return false;
};
				// x and y to be center of figure (instead of top left)
		ctx.fill('evenodd');


		var padding = helpers$1.options.toPadding(layoutOptions.padding);
		if (!listeners) {

	var y = cmyk[2] / 100;
			Array.prototype.push.apply(base, toPush);
			base.push(toPush);
			}
	}
		}
	b = c * Math.sin(hr);
			type: 'category',
			var contains270 = (startAngle <= -HALF_PI$1 && endAngle >= -HALF_PI$1) || endAngle >= PI$1 + HALF_PI$1;
				// effectively making chart smaller and the scrollbar hidden again.
			index: meta.index,
};

			titleY = top + offset;
		}

	};
			x: x / count,
		var vm = this._view;
	},
		cache.descriptors = descriptors;
		var style;
		}
	 *   This space comes from two sources:
	inXRange: xRange,
			offset = (end - start) / Math.max(ticks.length - 1, 1) / 2;

				circumference: circumference,
			meta.$filler = source;
	}
	 */
				helpers$1.canvas.clipArea(ctx, chart.chartArea);
   hwbString: hwbString,
		}
	 * @returns {boolean} false if any of the plugins return false, else returns true.
	}
	 * @param {Array} inputs - An array of values, falling back to the last value.
						helpers$1.merge(target[key][i], scale);
				};
	},
	});
		ticks.push({
	"goldenrod": [218, 165, 32],


				if (imeta.stack === stack) {
			if (options.onClick) {
	data.datasets = data.datasets || [];
		return decimal === 0 && me.min === 0


		var center = range.start + (range.chunk * stackIndex) + (range.chunk / 2);
		var v = this._parseValue(rawValue);
	return vm && vm.width !== undefined;

	}
	elements: {
				scale.ctx = me.ctx;
		// if a value is added to the model after pivot() has been called, the view
		}
					left: 0,

		return ringIndex;
		if (index < 0 || index > ticks.length - 1) {
		factor = Math.pow(10, precision);
			method = plugin[hook];
function clipArc(ctx, arc) {

			return 0;
			}
		if (!lazy) {
 * 'left', 'top', 'right', 'bottom', and 'chartArea'
			}

	 * hook, in which case, plugins will not be called on `afterDatasetsUpdate`.
				me.minNotZero = me.min;
		var type = Object.prototype.toString.call(value);
	"rosybrown": [188, 143, 143],
}
		if (meta.dataset) {

	 * Set radius reductions and determine new radius and center point
	clearer: function (ratio) {

			}
			elements[i].draw();
		var hwb = this.values.hwb;

				continue;
			arc.endAngle = arc.startAngle + vm.circumference % TAU;
			if (rightValue < 0) {
			var distance = comparativeDistance(rgb, value);
			ctx.restore();
		var opts = me._options;
		return me.getPixelForDecimal((offsets.start + pos) * offsets.factor);
			? computeFlexCategoryTraits(index, ruler, options)
		_footerFontStyle: valueOrDefault$8(tooltipOpts.footerFontStyle, globalDefaults.defaultFontStyle),
		var options = me.options;
		c = 2.0 * s * (1.0 - l);

		'hoverBackgroundColor',
			// fillStyle : fill of coloured box
		var prefix = enabled ? 'set' : 'remove';
	"ghostwhite": [248, 248, 255],
	 * @returns {boolean}
			: vm.x + vm.xPadding;
		return this.setSpace('rgb', arguments);
			start = +this.getRightValue(value[0]);
		}
	var value = toTimestamp(scale, scale.getRightValue(input));
			canvas.width = displayWidth;
		var deltaX = useX ? Math.abs(pt1.x - pt2.x) : 0;
function getCombinedMax(maxPadding, chartArea, a, b) {
	getCenterPoint: function() {
			pure[0] = 1; pure[1] = v; pure[2] = 0; break;
	/**
	this.setValues(space, svalues);

	elements: {},
var Chart = function(item, config) {
			borderColor: model.borderColor,
			removeResizeListener(canvas);
	/**

function rgbString(rgba, alpha) {
		var pos = this.options.position;
	if (adapter.diff(max, min, minor) > 100000 * stepSize) {
		return this.constructors.hasOwnProperty(type) ? this.constructors[type] : undefined;
	helpers$1.getRelativePosition = function(evt, chart) {
	"wheat": [245, 222, 179],
	for (var i = UNITS.indexOf(unit) + 1, ilen = UNITS.length; i < ilen; ++i) {
	for (i = 0; i < arc.fullCircles; ++i) {
 * @namespace Chart.Ticks
	},

			config.lineTension = config.tension;
			return 0.5 * t * t;
				me.max = tickOpts.suggestedMax;
 * @prop {number} weight - The weight used to sort the item. Higher weights are further away from the chart area
	},
		borderDash: [],

			right: r,

	},

				return this.getRightValue(rawValue.y);
	if (val === undefined) {
			maxWidth = bottom - top;
		};
		var options = arc._options;
		return Math.max(spacing, 1);
		if (!gridLines.display) {
			return;
			radius: 3,
			values[key] = resolve([

		common: true,
			return index >= collection.length - 1 ? collection[0] : collection[index + 1];
			layout.height || chartArea.h,
	}
					break;
			generateLabels: function(chart) {
		xAlign: opts.xAlign ? opts.xAlign : xAlign,
		return filtered;

				y1 = alignPixel(chart, me.top, firstLineWidth) - firstLineWidth / 2;
	 */
/**
		var ticksOpts = me.options.ticks;
		return Math.sqrt(Math.pow(pt2.x - pt1.x, 2) + Math.pow(pt2.y - pt1.y, 2));
	setDimensions: function() {
		var pos = interpolate$1(me._table, 'time', time, 'pos');

						}
	 * @private
		// Absorb the master measurements
			max = timestamps[timestamps.length - 1];
var conversions_2 = conversions.hsl;


		var options = point._options;
			if (pointCurrent.model.skip || pointAfter.model.skip) {
		return {


					curve0.push(p0);
				render: function(chart, animationObject) {
			stepSize: helpers$1.valueOrDefault(tickOpts.fixedStepSize, tickOpts.stepSize)
		var me = this;

				pointCurrent.mK = 0;
		return new Color(obj);
	"palegreen": [152, 251, 152],
		var offset = me.options.offset;
 * `element` has a size relative to its parent and this last one is not yet displayed,
}
	helpers$1._calculatePadding = function(container, padding, parentDimension) {

		return this;
				textAlign: textAlign
		cy = curve1[0].cy;
var _defaults$4 = defaultConfig$4;
	newHeight = params.outerHeight - getCombinedMax(maxPadding, chartArea, 'top', 'bottom');
			}
 * Namespace to hold static tick generation functions
		}
		var callbacks = me._options.callbacks;
		// [10, 10, 10]
		// Reset padding
function determineUnitForAutoTicks(minUnit, min, max, capacity) {
				textOffset = (1 - lineCount) * lineHeight / 2;
		}
		var tooltipSize = {
		arc.endAngle = endAngle;
	ctx.arc(x, y, arc.outerRadius, startAngle - angleMargin, endAngle + angleMargin);
	for (time = first; time < max; time = +adapter.add(time, stepSize, minor)) {
	/**
	"lightyellow": [255, 255, 224],
		minUnit: 'millisecond',
			helpers$1.each(tooltipItems, function(tooltipItem) {
		}
	});
	return helpers$1.extend(helpers$1.options._parseFont({
var resolve$2 = helpers$1.options.resolve;
	 */
		return this.rgb();
			z: gz,
}

		var hitboxes = me.legendHitBoxes = [];
				(options.scales.yAxes || []).map(function(yAxisOptions) {
		if (intersect && !element.inRange(position.x, position.y)) {
   }
	helpers$1.toDegrees = function(radians) {
		last: valueAt(length - 1),
	highest = heights.indexOf(highestLabelSize);
			len = loopable.length;
	sl /= (lmin <= 1) ? lmin : 2 - lmin;
		deprecated('bar chart', scaleOpts.maxBarThickness, 'scales.[x/y]Axes.maxBarThickness', 'dataset.maxBarThickness');
convert.hwb.hcg = function (hwb) {
/**
	this.valid = false;
		return ChartElement;
		// Don't bother fitting the ticks if we are not showing the labels
		var endAngle = opts.rotation; // non reset case handled later
	 * @since 2.7.0
		mode: 'single'
		type: type,
			return;
 * @return {Bounds} bounds of the bar
	},
		/**
	quarter: '[Q]Q - YYYY',
			}
		var ctx = me.ctx;
		var defaultColor = globalDefaults.defaultColor;
	 * @type {Chart.core.element}
	/**
				ty1 = ty2 = y1 = y2 = alignedLineValue;
			type: 'linear',

		return me.isHorizontal()


   }
				listenArrayEvents(data, me);
	_autoSkip: function(ticks) {
core_defaults._set('global', {
	// https://github.com/chartjs/Chart.js/issues/2538
function buildLookupTable(timestamps, min, max, distribution) {
		ctx.fillStyle = vm.backgroundColor;
		model.height = tooltipSize.height;
			// We want to ensure we do not copy prototypes over
	core_layouts.configure(chart, legend, legendOpts);
		}
	var visited = [index];
	}
	tickFormatFunction: function(time, index, ticks, format) {
		xAxes: [{
/**


 * if the computed style is not expressed in pixels. That can happen in some cases where
		axis: 'y'

	return function() {
	_getValueScaleId: function() {
	return {
});
			timestamps = timestamps.data;
	},
   if (alpha < 1 || (rgba[3] && rgba[3] < 1)) {
			return;
		return size * value;
	var spacing = helpers$1.niceNum((rmax - rmin) / maxNumSpaces / unit) * unit;
		'cubicInterpolationMode',
			if (opts.itemSort) {

		});
      return vals[3];
		value = +scale._adapter.startOf(value, options.round);
	update: function(reset) {
	}
					+ cosRotation * (highestLabelSize.height - (isRotated ? highestLabelSize.offset : 0))
convert.hsv.ansi16 = function (args) {
				ctx.translate(x, y);
		} else if (b === v) {
		} else {
					} else {
	"cadetblue": [95, 158, 160],
			y: e.y
	 */
	}
});

			};
		}
	for (major = first; major <= last; major = +adapter.add(major, 1, majorUnit)) {
		}
				x2 = x1 + caretSize;
	drawTitle: function(pt, vm, ctx) {

	isValid: function () {
	 * @protected


	/**
		var hoverOptions = options.hover;
				}
		var me = this;

	handleTickRangeOptions: function() {
				borderAlign: options.borderAlign,
			ctx.rotate(item.rotation);
	 */
			for (k = 0, klen = keys.length; k < klen; ++k) {
};

		this.setValues('hsl', hsl);

	// scale label
		return type && new type({


	/**
	* @private
	if (!expando.containsStyles) {
		if (INTERVALS[unit].common && scale._adapter.diff(max, min, unit) >= numTicks - 1) {
	 * @param {object} area - The rectangle
		'x-axis': function(chart, e) {

helpers$1.easing = easing;
		me._drawTooltip(easingValue);



			ctx.textBaseline = 'middle';
			maxTicks = me._computeTickLimit();
		} else {
			nearestItems = [element];
		var centreAngle = vm.startAngle + ((vm.endAngle - vm.startAngle) / 2);
		return typeof meta.hidden === 'boolean' ? !meta.hidden : !this.data.datasets[datasetIndex].hidden;
	"violet": [238, 130, 238],
		var me = this;
		// Contains hit boxes for each dataset (in dataset order)


			backgroundColor: model.backgroundColor,
	getLabelWidth: function(label) {
		}
   else if (match = string.match(per)) {

		var h = labelSizes ? labelSizes.highest.height + padding : 0;
		var right = me.right;
		var vpixels = me.calculateBarValuePixels(me.index, index, options);
	},
 		 */
});
	"grey": [128, 128, 128],
	 * @private
	// Private helper function to convert max-width/max-height values that may be percentages into a number
	easeInCirc: function(t) {

		case 1: r = n; g = v; b = wh; break;
});
		ctx.restore();
	var c = 1;

		? ((1.055 * Math.pow(r, 1.0 / 2.4)) - 0.055)
		| Math.round(r / 255));
	},
	 * @param {Array|undefined|null} args - The arguments with which `fn` should be called.
var core_interaction = {
			var ci = this.chart;
	 * @private
	l *= 2;
		'hitRadius',
	"steelblue": [70, 130, 180],
      return [h, s, l, a];
	var next = majorIndices[0];
					ctx.fillStyle = vm.legendColorBackground;
				ctx.arc(left, top, r, -PI, PI);
		var me = this;
			borderValue = alignBorderValue(me.bottom);
				options = arc._options;
}
	 * @param {object} margins - the space between the edge of the other scales and edge of the chart
};
			if (!isNaN(dataset.data[index]) && !element.hidden) {

				ctx.fillText(footer[i], rtlHelper.x(pt.x), pt.y + footerFontSize / 2);
				if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta) &&
			ctx.lineWidth = lineWidth;

		for (var i = 0; i < datasetIndex; ++i) {
function parseBorderWidth(vm, maxW, maxH) {
		common: true,
	};
	this.valid = true;
			}
		yAlign: opts.yAlign ? opts.yAlign : yAlign
				ty1: ty1,
		}
//       values that give correct `typeof` results).
	 * Provided for backward compatibility, not available anymore
	 * @private

	return rgb;

 * @deprecated since version 2.8
function updateConfig(chart) {
 * The "used" size is the final value of a dimension property after all calculations have

});

		 * If the options.intersect mode is false, we find the nearest item and return the items at the same index as that item
			}
	// along with labels.
	var mult = (~~(args > 50) + 1) * 0.5;
 * Provided for backward compatibility, not available anymore.
	"tomato": [255, 99, 71],
					value: me.ticks[i],
   if (alpha === undefined) {
});
		var me = this;
		// any updates and so make sure that we handle number of datapoints changing.
		if (core_plugins.notify(me, 'beforeUpdate') === false) {
		}],
	var c = v - w;
	},
	buildOrUpdateScales: function() {
	"darkviolet": [148, 0, 211],
	 * @private

			y2 = ptY + (height / 2);
		}
			return time.isoWeekday(weekday).valueOf();

				dposition: 'chartArea'

		var p = 0;
					// use lineSpace for consistency with horizontal axis
		/**
	_resolveDatasetElementOptions: function() {
 * If true, only consider items that intersect the point
			type = style.toString();

			color = view.backgroundColor || core_defaults.global.defaultColor;
	tooltipPosition: function() {
			return getIntersectItems(chart, position);
		} else if (titleBlock) {



		ctx.translate(me.xCenter, me.yCenter);
			me.updateElement(points[i], i, reset);
			previous = lastDrawnIndex === -1 ? helpers$1.previousItem(points, index) : points[lastDrawnIndex];

	"darkgreen": [0, 100, 0],
			xOffset = Math.cos(rad) * radius;
			y: vm.y + Math.sin(halfAngle) * halfRadius
			meta.dataset.draw();
		delete array[key];
			if (meta.controller) {
		return fn(args);

	var v = 1 - b;
				x1 = ptX + width;

		// Stroke Line Options
				if (element.inRange(position.x, position.y)) {
			ctx.arc(x, y, radius, 0, DOUBLE_PI);
				? Math.pow(10, Math.floor(log10(me.min)) + 1)
		if (titleOpts) {
		}
		length = majorEnd - majorStart;



					-offset - tickFont.size / 2 - tickOpts.backdropPaddingY,
		return list.outerHTML;
	}
}
	/**
	 * Returns the location of the tick at the given index
		if (prev === undefined || next === undefined || Math.round((next + prev) / 2) !== curr) {

	"dodgerblue": [30, 144, 255],
			// strokeStyle: stroke of coloured box
			source = sources[i];


	if (value !== null) {
		if (vm) {
	 * @param {string} maxStyle - the style that defines the maximum for the direction we are using ('max-width' / 'max-height')
	return [hsl[0], c * 100, f * 100];
				longest = helpers$1.measureText(ctx, data, gc, longest, thing);
	};
				// Strikethrough the text if hidden
		return result;
	/**
}
		}
			} else {
				listener(createEvent('resize', chart));
						var values = valuesPerStack[key];
			return fill;
	var values = this.values;
		}
for (var model in convert) {
	_type: 'arc',

		size = min * options.categoryPercentage;
			b = +value.bottom || 0;
function parseVisibleItems(chart, handler) {
	},
			meta = metasets[i];

			meta.controller.destroy();

			borderColor: options.borderColor,
			} else if (fraction < 7) {
		if (orf(model.x)) {
	for (var j = 1; j < numSpaces; ++j) {
		}
 * @namespace Chart.helpers.easingEffects
	 * @param {function} fn - The function to call.
		if (me.isHorizontal()) {

		t: skip.top || (t < 0) ? 0 : t > maxH ? maxH : t,

					currentColHeight = 0;
	"rebeccapurple": [102, 51, 153],


		x += radiusAndPadding;
var Line = element_line;


		} else {
	easeInOutQuint: function(t) {
		};
}
	var radiusAndPadding = cornerRadius + caretPadding;
		if (!p) {
var valueOrDefault$6 = helpers$1.valueOrDefault;


		if (!textWidth) {
		bodyFontSize: valueOrDefault$8(tooltipOpts.bodyFontSize, globalDefaults.defaultFontSize),
		}


			minSize.height = me.maxHeight; // fill all the height
		var adapter = me._adapter = new core_adapters._date(options.adapters.date);
		}
			me.start = me.max;
			} else if (helpers$1.isFinite(origin) && helpers$1.isFinite(target)) {
		}
	extend: Object.assign || function(target) {
			tick._index = i;
			this.addElementAndReset(start + i);
		var tx1, ty1, tx2, ty2, x1, y1, x2, y2, lineWidth, lineColor, borderDash, borderDashOffset;
			} else {
		return 'origin';
		steps: 4
		core_controller[klass] = function(ctx, cfg) {
			// If entering, leaving, or changing elements, animate the change via pivot


			ctx.arc(arc.x, arc.y, arc.outerRadius, arc.startAngle, arc.endAngle);
		target = model.scaleTop === undefined ? scale.top : model.scaleTop;
	 */
		}

	cmykArray: function () {
	}
	/**
	ctx.font = helpers$1.fontString(titleFontSize, model._titleFontStyle, model._titleFontFamily);
	 * @function
function yRange(mouseY) {
	}
};
	set: function(value) {
	arrayEquals: function(a0, a1) {

			me.unbindEvents();
		if (!elements.length) {
	"cyan": [0, 255, 255],
		if (yAlign === 'center' && xAlign === 'right') {
	 * it's preferable to use a regular for() loop and save extra function calls.
		var value, type;
	afterFit: function() {
		// https://github.com/chartjs/Chart.js/issues/2807
	/**
	// The percentage of the chart that we cut out of the middle.
	 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/line-height
	 * @private
	},
		intersect: true,
	removeBox: function(chart, layoutItem) {
	},
			return;
			var rtlHelper = getRtlHelper(vm.rtl, vm.x, vm.width);
	} else if (angle > 270 || angle < 90) {

	var x = arc.x;
	/**
		var lineDefault = globalDefaults.elements.line;
 * Computes the "optimal" sample size to maintain bars equally sized while preventing overlap.

	 * @function
			_chart: me,
			};
			}
});
					me.draw.apply(me, arguments);
		var generationOptions = {
			},
	 */
		ticks.push(tickVal);

		var top = me.top;
	var pure = [0, 0, 0];
	 * @function
			pos: box.position,
			} else {
	},
			document.defaultView.getComputedStyle(el, null).getPropertyValue(property);


			});
          l = scale(parseFloat(match[3]), 0, 100),
		}
	setHoverStyle: function(element) {
			}
		if (isArray(value)) {
	getPixelForTick: function(index) {
		handler();
           + ", " + alpha + ")";

		}
	},
			}
	});
	 * @param value
         return [0, 0, 0, 0];

	var widths = [];
		if (!view.hasOwnProperty(key)) {
		} else {
	getCenterPoint: function() {
	newWidth = params.outerWidth - getCombinedMax(maxPadding, chartArea, 'left', 'right');
		var datasetStartAngle = opts.startAngle;
			timestamps = timestamps.labels;
   var match = string.match(hwb);
		return this.chart.data.datasets[this.index];
				return Math.max(max, value);
					return me.legendItems[i];
			me.max = tickOpts.max;

	var y = xyz[1];
		xLabel: xScale ? xScale.getLabelForIndex(index, datasetIndex) : '',
		var me = this;
			xOffset = Math.cos(rad) * radius;
		return this.options.fullWidth;
			} else {
core_controller.platform.initialize();
	var x = xyz[0] / 100;
	handleEvent: function(e) {
		var metasets = scale._getMatchingVisibleMetas(me._type);
function abstract() {
			return '[' + v.start + ', ' + v.end + ']';

var valueOrDefault$c = helpers$1.valueOrDefault;
				createNewLegendAndAttach(chart, legendOpts);
		if (!target.tension) {
		vertical: left.concat(right),
	},
		var me = this;
	getPixelForValue: function(value) {

	easeInBounce: function(t) {
	_getIndexScaleId: function() {
	/**
	var r = rgb[0] / 255;
		var meta, scaleOpts;
		var width = size.width;
}
		rectangle._index = index;
		// Reset hit boxes
	"darksalmon": [233, 150, 122],


	},
   }
	var v = hsv[2] / 100;
// there's inconsistency around which options are under 'global'
	destroy: function() {
	 * This property holds whether this platform is enabled for the current environment.
			borderWidth: options.borderWidth,
				continue;
}
			ctx.lineWidth = valueOrDefault$2(vm.borderWidth, globalDefaults.elements.point.borderWidth);
				// use e.native for backwards compatibility
		var hasCContainer = isConstrainedValue(constrainedContainer);
		if (args === undefined || args === null) {
	}
		var pixelRatio = chart.currentDevicePixelRatio = forceRatio || (typeof window !== 'undefined' && window.devicePixelRatio) || 1;
		var dataset = me.getDataset();
	// black and white. normal palette only has 4 greyscale shades.


			r = +value.right || 0;
			max = Math.max(start, end);
		var options = chart.options.elements[me.datasetElementType.prototype._type] || {};
			padding: vm.radius + vm.borderWidth
	 */

			y = me.bottom - tl - tickPadding;
          a = scale(isNaN(alpha) ? 1 : alpha, 0, 1);
				if (tickValue !== Math.floor(tickValue)) {
				return '(' + item.xLabel + ', ' + item.yLabel + ')';



		var index = element._index;
			generateLabels: function(chart) {
		this._model = getBaseModel(this._options);
	tooltips: {
		// Before init plugin notification
		'fill'
		}
			}
		me._length = endPixel - startPixel;

		var listener = function() {
	fit: function() {

	 * @function
		point._xScale = xScale;
		if (isArray(ticks) && ticks.length) {
              + hexDouble(rgba[1])
				- tickOpts.padding - getScaleLabelHeight(options.scaleLabel);
				currentClosestKeyword = keyword;

		} else {
		var chart = me.chart;

	hover: {
		var me = this;
		min = parse(me, getMin(options)) || min;
		}
	/**
	},
var conversions_7 = conversions.lab;
			if (pointCurrent.model.skip) {
		// and deprecate barPercentage since this value is ignored when thickness is absolute.
function filterByPosition(array, position) {
		this.defaults[type] = helpers$1.clone(scaleDefaults);
	},
			// (i.e. options.aspectRatio). If not specified, use canvas aspect ratio of 2.
		return values;
	helpers$1.getMaximumHeight = function(domNode) {
		return -0.5 * ((t -= 2) * t * t * t - 2);
	return options.drawTicks ? options.tickMarkLength : 0;

	}
	 *     - padding - space that's required to show the labels at the edges of the scale
		];

				y1 = y2 + caretSize;
	var grayscale;
	var max = tickOpts.max === undefined ? halfBorderWidth : 0;
	}
		if ((t /= 0.5) < 1) {
		&& (skipY || y >= bounds.top && y <= bounds.bottom);
var noop$2 = helpers$1.noop;

	},
		ctx.lineWidth = 0.5;
		var s = 1.70158;
		+ (font.weight ? font.weight + ' ' : '')
}());
		var height = boundingRect.bottom - boundingRect.top - paddingTop - paddingBottom;

		if (!arcs) {
			}
					var easingFunction = helpers$1.easing.effects[animationObject.easing];
}
 * @todo remove at version 3
	 * @private
	},
		return [];
		}
		return this.setChannel('rgb', 2, val);
				}
					break;
 */
				var meta = chart.getDatasetMeta(tooltipItem.datasetIndex);
		if (olf(model.x)) {
	/**
		y -= size.height + paddingAndSize;
	if ((i & 0x01) !== 0) {

		return this;
		});

}
	};

	value = Math.round(value / 50);
			padding: padding,
		// Allow modification of ticks in callback.
		ctx.rect(inner.x, inner.y, inner.w, inner.h);

		}
		}
				key = elementOptions[i];
		// Default to end of the array
	 */
		for (; i < ilen; ++i) {
		if (index !== undefined && datasetIndex !== undefined) {
		}
			while (angle < startAngle) {
		var timeOpts = me.options.time;
	easeInElastic: function(t) {
	inRange: function(mouseX, mouseY) {

			p = 0.3;

		}
			time = me._timestamps.datasets[datasetIndex][index];
		filler: {
		var points = meta.data;
		yAxes: [{

			x: x,
			var lastLabelSize = labelSizes.last;
			}
	 */
		var custom = element && element.custom;
			skip: custom.skip || isNaN(x) || isNaN(y),
				lazy: config.lazy
	var svalues = this.values[space];

		var config = me._config;
	 * @param {Chart} chart - the chart
				}
			me.draw();
				y3 = y2 - caretSize;
		f = (v - c) / (1 - c);
	var original = ctx.prevTextDirection;
				},
	},
core_controller.Chart = core_controller;
		me.id = helpers$1.uid();
		ctx.save();
		if (t < (2 / 2.75)) {
	if (!(this instanceof Color)) {
			radius: options.radius,
		deprecated('bar chart', scaleOpts.barThickness, 'scales.[x/y]Axes.barThickness', 'dataset.barThickness');
			changed = tooltip._start

			// Find the outmost visible dataset
	}
			width: l + r
	/**
			} else if (remain === 1 || remain === 2 || remain === 5 || index === 0 || index === ticks.length - 1) {

});
		function(x) {
	ctx.arc(arc.x, arc.y, arc.innerRadius, arc.startAngle + TAU, arc.startAngle, true);
	},
 * @namespace Chart.LinearScaleBase

		var scale = me._getIndexScale();
		if (!dataset._meta) {
			fitWithPointLabels(me);

	_datasetElementOptions: [
 * percentage options are 1), based on the previous and following categories. This mode
function comparativeDistance(x, y) {
			if (mapper && color && points.length) {
		var tickFont;
			var chart = this.chart;
		}

		if (helpers$1.isNullOrUndef(easingValue)) {
	 * @private

		}).pop();
		}
	/**

				filtered.push(item);
	 * Handle an event
					c1 = chartjsColor(target);
		return result;
			/* global CanvasGradient */
			});

	 * Returns `value` if defined, else returns `defaultValue`.
			return 7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375;
		var hsl = this.values.hsl;
			configurable: true,
	 */
		 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned

			}
	 * hook, in which case, plugins will not be called on `afterDatasetDraw`.


/**
	}
 * @interface ILayoutItem

		}
	}


		if (max !== undefined) {
	var b = rgb[2] / 255;
	return function(a, b) {
var chartjsColor = Color;
			core_layouts.removeBox(chart, titleBlock);

			return size * 1.2;
};
		me.beforeDataLimits();
			title: function() {
				if (labels[i]) {

	var b = rgb[2] / 255;
		return this.setChannel('hwb', 2, val);
		return Math.ceil(me.height / tickFont.lineHeight);

/**
	// cap values of the space prior converting all values

	 * Basic javascript inheritance based on the model created in Backbone.js
		spacing = length / Math.floor(length / spacing);
		ctx.lineTo(x + width - radius, y);
	},
	// Args are: (tooltipItem, data)

	}
	}
		spacing = calculateSpacing(majorIndices, ticks, axisLength, ticksLimit);
	"gainsboro": [220, 220, 220],
			var node = graph[adjacent];
		var isHorizontal = me.isHorizontal();
			textAlign = !rotation ? 'center' : 'right';
		spacing = helpers$1.niceNum(numSpaces * spacing / maxNumSpaces / unit) * unit;
		colorString = colorString.split('').map(function (char) {
	if (colorName.hasOwnProperty(key)) {
		factor = interval.steps ? interval.steps : MAX_INTEGER;
	 * Registers the given plugin(s) if not already registered.
 * @see https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
	},
		var isPowerOf10 = x === Math.pow(10, powerOf10);
		return this._startValue + this.getDecimalForPixel(pixel) * this._valueRange;
	 * @param {number} min - the timestamp to substract
		return t * t * ((s + 1) * t - s);
	});
		model.caretY = tooltipPosition.y;

		me.calculateTickRotation();
			x: x,
		result.push(arr[Math.floor(i)]);
 * responsibility of the calling code to clamp values if needed.

	},
		onClick: function(e, legendItem) {
			var scaleType = valueOrDefault$9(scaleOptions.type, item.dtype);
		var circumference = opts.circumference;
	});
Color.prototype.getValues = function (space) {
};
		for (var i = 1; i < valueCount; i++) {
	fit: function() {
}

	var val = Math.round(gray[0] / 100 * 255) & 0xFF;
		}

		}
					}
			}
	}
			// See controller.isDatasetVisible comment
		return {x: x, y: y};
		// We pass through arrays to be rendered as multiline labels, we convert Others to strings here.
			}
function hslaString(hsla, alpha) {
	}
		return {
			return null;
	update: function(reset) {
	getAll: function() {

			}
	 * Remove all registered plugins.
var scale_radialLinear = scale_linearbase.extend({
		var initial = canvas[EXPANDO_KEY].initial;
function addResizeListener(node, listener, chart) {
		l: skip.left || (l < 0) ? 0 : l > maxW ? maxW : l

		return me.getPixelForDecimal(decimal);


				y2 = y1 + caretSize;
	ensureScalesHaveIDs: function() {
			if (displayWidth !== undefined) {
}
			borderValue = alignBorderValue(me.top);
var conversions_1 = conversions.rgb;
		var offsetX = 0;
	var w = 1 - v;
					data = datasets[datasetIndex].data;
	// Returns the maximum number of ticks based on the scale dimension
	ctx.stroke();

		me.doughnutMode = false;
function computeOffsets(table, ticks, min, max, options) {
	}
	}


		return 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
	easeInQuint: function(t) {
	ticks: {

		+ ((Math.round(b / 255) << 2)
			} else if (top < bottom) {
				currentColHeight += fontSize + vPadding;
			var tp = nearestElement.tooltipPosition();
			delete tick.label;
			el.currentStyle[property] :
plugins.legend = legend;
		}
 * @param {boolean} intersect - if true, only consider items that intersect the position

		if (!isNullOrUndef$2(max) && helpers$1.almostWhole(max / spacing, spacing / 1000)) {
      a = 1;
		} else {
	},
	var models = Object.keys(conversions);
 * @private
		return -0.5 * ((--t) * (t - 2) - 1);

				label: helpers$1.valueAtIndexOrDefault(labels, index, labels[index])
		var rotation = vm.rotation;
			}

		return {
			? determineUnitForAutoTicks(timeOpts.minUnit, me.min, me.max, capacity)
			}
	},
	"darkkhaki": [189, 183, 107],
			helpers$1.canvas.clear(me);
	"lightskyblue": [135, 206, 250],
	if (len < 2) {
	cmyk: {channels: 4, labels: 'cmyk'},
			// backwards compatibility
		// _configure is called twice, once here, once from core.controller.updateLayout.

			backgroundColor: model.backgroundColor,
		}
		meta.total = me.calculateTotal();
				ctx.stroke();
	// DEPRECATIONS
	 * Builds a map of scale ID to scale object for future lookup.
	},
	var inner = vm.borderAlign === 'inner';
			box.bottom = chartArea.top + chartArea.h;

				}, this);
		};
		return rawValue;
 	 */
		var meta, i, el, source;
		}
	 * Returns the number of registered plugins?
	var l;
	} else {

});
			args = Array.prototype.slice.call(arguments);
		}
function computeBoundary(source) {
	}
			},
			// TODO(SB): I think we should be able to remove this custom case (options.scale)
			if (me.min > 0) {
		var time = interpolate$1(me._table, 'pos', pos, 'time');

				draw: function() {
		return values.hwb;
			}

			arc.fullCircles--;
helpers_core.log10 = exports$2.log10;
		var yScale = me._yScale;
				listItemSpan = listItem.appendChild(document.createElement('span'));
		var caretPosition = this.getCaretPosition(tooltipPoint, size, vm);
	// invalid fill values
		// meta.hidden is a per chart dataset hidden flag override with 3 states: if true or false,
			helpers$1.each(me.legendItems, function(legendItem, i) {
	 * @see {@link https://www.nathanaeljones.com/blog/2013/reading-max-width-cross-browser}
				++i;
		minRotation: 0,
	// Gets the angle from vertical upright to the point about a centre.
	 * @param {Unit} unit - the unit as string
		var me = this;

	bar: controller_bar,
		var d01 = Math.sqrt(Math.pow(current.x - previous.x, 2) + Math.pow(current.y - previous.y, 2));
	var ilen = UNITS.length;
// Base class for all dataset controllers (line, bar, etc)
var canvas = helpers_canvas;
		return changed;
	 * @param {number} pixel - A pixel value.
	conversions that are not possible simply are not included.
 * @since 2.4.0
	var ansi = 30
	};
		// String - The colour of the label backdrop
			if (idx !== -1) {
		for (var j = 0; j < datasetIndex; ++j) {
			this.setValues('hwb', vals);
 * Figures out what unit results in an appropriate number of auto-generated ticks

	var graph = {};
/**

			if (item.isDefault) {
		// In the case where active.length === 0 we need to keep these at existing values for good animations
	},
			helpers$1.canvas.unclipArea(chart.ctx);
		var i;
	for (var i = 0; i < 3; i++) {
 * since responsiveness is handled by the controller.resize() method. The config is used
	for (i = 0; i < ilen; ++i) {
	currentStep: 0, // the current animation step
function scale(num, min, max) {
	afterFit: noop$1,
var EXPANDO_KEY = '$chartjs';

		var height = tooltipSize.height;
			this.setValues('hsl', vals);
			pointStyle: options.pointStyle,
	}
 * Date adapter (current used by the time scale)

		return this.setChannel('rgb', 0, val);
			? inRange(vm, mouseX, null)
 * @namespace Chart.platform
   }

	"crimson": [220, 20, 60],

			}
			}
	return function(pt1, pt2) {
core_controller.scaleService = core_scaleService;
		? vm.x + vm.width / 2
var DEFAULT_MIN = 0;
		// first data: its size is double based on the next point or,
		var getHoverColor = helpers$1.getHoverColor;

 * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#Safely_detecting_option_support
		 * @param value the value to display
			position: 'left'
	 * @private
	},
		p1 = mapper(p0, index, view);
			}
   else {
		}
				if ((lastDrawnIndex !== (index - 1) && !spanGaps) || lastDrawnIndex === -1) {
	"lavenderblush": [255, 240, 245],
};

		if (me._reversePixels) {
	/**
				return Math.min(min, value);
	};

	while (next < 0) {
			me._labelSizes = labelSizes = computeLabelSizes(me.ctx, parseTickFontOptions(me.options.ticks), me.getTicks(), me.longestTextCache);
			val = t2;

 * @deprecated since version 2.7.0
		return items;
	hsl: [360, 100, 100],
			x: vm.x,

	"sandybrown": [244, 164, 96],
		tooltip.draw();
	},
	},
		([]).concat(plugins).forEach(function(plugin) {
	 */
		drawOnChartArea: true,
	},
	return {lo: i1, hi: null};
	/**
	 * @private
			platform.removeEventListener(me, type, listener);

	/**
	/**
			index: index
			scaleLabelX = isLeft
			var idx = plugins.indexOf(plugin);
}
convert.hsl.hsv = function (hsl) {
		core_scale.prototype._configure.call(me);
		curr = items[i];
		var display = me.options.display;
		}
				hitBox = lh[i];
	var pointLabelOpts = opts.pointLabels;
				for (j = 0, jlen = thing.length; j < jlen; j++) {
	 * @private
	this.initialize(chart, datasetIndex);
		if (type === typeof origin) {
			p++;
				x1 = alignPixel(chart, me.left, firstLineWidth) - firstLineWidth / 2;
	/**
		var next = afterPoint.skip ? middlePoint : afterPoint;
		maxPadding.top = Math.max(maxPadding.top, boxPadding.top);

			return {lo: i0, hi: i1};
 * @returns {string[]} value if newline present - Returned from String split() method
				var ControllerClass = controllers[meta.type];
			return [{
			ctx.fillText(text, 0, 0, maxWidth);
	},
	return helpers$1.getRelativePosition(e, chart);
		});
	[

		}
		}
	 * @private

convert.rgb.apple = function (rgb) {
		for (i = 0, ilen = elementOptions.length; i < ilen; ++i) {
				ctx.beginPath();
	"purple": [128, 0, 128],

		var opts = me.options;
	},
		var element = this.getMeta().dataset;
				}
		layout.width = layout.horizontal
	var bl = hwb[2] / 100;
		// This function must also respect "skipped" points
/**
	 */
	"rebeccapurple": [102, 51, 153],
				tx1: tx1,
				ctx.lineTo(previous.x, target.y);

		if (!reset || !animationOpts.animateRotate) {
	expando.reflow = !!node.offsetParent;
		model.backgroundColor = valueOrDefault(options.hoverBackgroundColor, getHoverColor(options.backgroundColor));

			chart.boxes.splice(index, 1);
				result.push(me.getDatasetMeta(i));
				source = {
   return "hsl(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%)";

 * Figures out what unit to format a set of ticks with
}
						return {
					items.push(element);
				ctx.arc(left, bottom, r, 0, PI);
				helpers$1.canvas.drawPoint(ctx, legendItem.pointStyle, radius, centerX, centerY, legendItem.rotation);
	var el = document.createElement('div');
function injectCSS(rootNode, css) {
		me.maxWidth = maxWidth;
				}
			}
			nestedTickOpts.userCallback,
			if (meta.index === last) {
 */
		// https://www.w3.org/TR/2011/WD-html5-20110525/the-canvas-element.html
   var hsl = /^hsla?\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/;
			return 0;
		convert[fromModel][toModel].raw = wrapRaw(fn);
				}
Color.prototype.maxes = {
	/**
	var ticks = [];
				meta.controller.linkScales();
	 * @private
	ctx.lineWidth = lineWidth;
      }
 * @prop {boolean} fullWidth - if true, and the item is horizontal, then push vertical boxes down
	 * @param {IEvent} event - The event to handle
function swap(orig, v1, v2) {
	setDimensions: function() {
		var newHeight = Math.max(0, Math.floor(aspectRatio ? newWidth / aspectRatio : helpers$1.getMaximumHeight(canvas)));

			scaleOptions.id = scaleOptions.id || 'scale';
	}
	// Once we have that, we can find the centre point for the chart, by taking the x text protrusion


	}
				model = points[i]._model;

		}, {});
		helpers$1.canvas.lineTo(ctx, curve0[i - 1], curve0[i]);
	var hi = (h % 1) * 6;
	}
				if (valuesForType.length > 0) {
	 * @private
			}
				if (dsMeta.type === 'line' && dsMeta.yAxisID === yScale.id) {
		if (t === 0) {
		core_scale.prototype.convertTicksToLabels.call(me);
		/**
					}

	return vm ? (Math.abs(mouseX - vm.x) < vm.radius + vm.hitRadius) : false;
	},
			if (titleBlock) {
	var i, ilen;
function wrapRounded(fn) {
}
	position: 'left',

		if (tickOpts.reverse) {
			return x > midX;
		footerFontSize: valueOrDefault$8(tooltipOpts.footerFontSize, globalDefaults.defaultFontSize),

				listItem.appendChild(document.createTextNode(datasets[i].label));

			// Hover
		case 4:
			metasets = chart._getSortedVisibleDatasetMetas();
	afterDatasetsUpdate: function(chart, options) {
 * @private
		model.borderColor = valueOrDefault$6(options.hoverBorderColor, getHoverColor(options.borderColor));
		'borderJoinStyle',

			if (opts.onLeave && hoveredItem !== me._hoveredItem) {
							continue;
	}
					intersectsItem = true;
	};
				backgroundColor: options.backgroundColor,
		if (core_plugins.notify(me, 'beforeDatasetUpdate', [args]) === false) {
	var w = 1 / 255 * Math.min(r, Math.min(g, b));
		me.handleMargins();
						hidden: !chart.isDatasetVisible(meta.index),
	return [x * 100, y * 100, z * 100];
	// Returns the maximum number of ticks based on the scale dimension
		h = (g - b) / delta;

		fn = link(conversions[graph[cur].parent][cur], fn);
	node.classList.add(CSS_RENDER_MONITOR);
	return bounds
		legendColorBackground: tooltipOpts.multiKeyBackground,
			backgroundColor: defaultColor$1,
	touchend: 'mouseup',

	var xyz = convert.rgb.xyz(rgb);
		var data = this.chart.data;
		/**
		this._cacheId++;
	addEventListener: function() {},
		var isHorizontal = me.isHorizontal();
	}
			}
			me.min = Math.pow(10, Math.floor(log10(me.max)) - 1);
	},
	updateDataset: function(index) {
var Title = core_element.extend({
		var model = point._model;
	"navajowhite": [255, 222, 173],
		values.clip = toClip(valueOrDefault$6(config.clip, defaultClip(me._xScale, me._yScale, values.borderWidth)));
 * @type Boolean
};
			}
	_resolveDataElementOptions: function(element, index) {
 * Platform fallback implementation (minimal).
	 * @private
		}
			this.drawCaret(pt, tooltipSize);
		core_plugins.notify(me, 'afterDatasetUpdate', [args]);
		me._maxLabelLines = 0;
			lines = bodyItem.lines;

					}
		this.index = datasetIndex;
}
		var majorIndices = tickOpts.major.enabled ? getMajorIndices(ticks) : [];

	var z = xyz[2] / 100;

	"slategrey": [112, 128, 144],

			}
				ctx.fillText(title[i], rtlHelper.x(pt.x), pt.y + titleFontSize / 2);
	} else {
	if (direction === 'ltr' || direction === 'rtl') {

		};
				if (helpers$1.isObject(data[0])) {

	function getConstraintDimension(domNode, maxStyle, percentageProperty) {
	 * @private
	/**
			if (stepped === 'middle') {
       a = 1,
	 */


		}
		radiusReductionBottom = numberOrZero(radiusReductionBottom);


			yOffset = Math.sin(rad) * radius;
	 */
}
	 * Draws tooltip unless a plugin returns `false` to the `beforeTooltipDraw`
			_index: index
	}
			layers[i].draw(me.chartArea);
			position: 'bottom'
	if (spacing < MIN_SPACING && isNullOrUndef$2(min) && isNullOrUndef$2(max)) {
	});
		model.borderColor = resolve([custom.hoverBorderColor, dataset.hoverBorderColor, getHoverColor(model.borderColor)], undefined, index);
		var drawLegendBox = function(x, y, legendItem) {

	},

		r = value.right;
		size: 86400000,
						lineWidth: style.borderWidth,
	z /= 108.883;
/**
		// COMPAT, we still support no return (`this.ticks` internally changed by calling
		},
	if (max === min) {


			var distance = pointRelativePosition.distance;
			startIndex = arrayToSearch.length;
	/**

	_getSortedVisibleDatasetMetas: function() {
	endOf: function(time, unit) {
	if ('conversion' in fn) {
};
				values[key] = resolve([
	h = Math.min(h * 60, 360);
	height += footerLineCount ? (footerLineCount - 1) * model.footerSpacing : 0; // Footer Line Spacing
	 * A box is simply a reference to an object that requires layout. eg. Scales, Legend, Title.
		// Calculate slopes (deltaK) and initialize tangents (mK)
		var i, hitBox, lh;
		point._index = index;
		// B1 is the bottom axis

			}
		// Compatibility: If the properties are defined with only the old name, use those values
			}
			val = t1 + (t2 - t1) * 6 * t3;
		yAlign = 'bottom';
			backgroundColor: model.backgroundColor,
	var end = 0;
		// Is tooltip too wide and goes outside left edge of canvas?
 */
		caretPadding: 2,

	 * @function Chart.Tooltip.positioners.nearest
 * @function Chart.helpers.easingEffects
	 * @private
		var canvas = chart.canvas;
	clear: function() {
				ctx.save();
	determineDataLimits: function() {
		core_plugins.notify(me, 'afterTooltipDraw', [args]);

		// Only consider points that are drawn in case the spanGaps option is used
		metadata = metasets[i].data;
		var vm = this._view;
// TODO(v3): remove 'global' from namespace.  all default are global and
		var stacked = scale.options.stacked;
				x3 = x2 + caretSize;

	// "nice number" algorithm. See https://stackoverflow.com/questions/8506881/nice-label-algorithm-for-charts-with-minimum-ticks
	}
	if (c < 1.0) {
			maxTicks = Math.min(maxTicksLimit, maxTicks);
			var maxY = contains90 ? 1 : Math.max(startY, startY * cutout, endY, endY * cutout);
		return me;
var plugin_legend = {

			me.min = tickOpts.min;
	 * IMPORTANT: `target` is not cloned and will be updated with `source` properties.
	},
		case 'line':
/**
	var vm = this._view;


 * @alias Chart.helpers.math
	if (renderWidth === null || renderWidth === '') {
		// 1 animation per chart, so we are looping charts here
/**
		'hoverBorderColor',
		if (sqrt === (sqrt | 0)) { // if value is a square number
			}
			if (this.chart.isDatasetVisible(j)) {
}
			var newSize = {width: newWidth, height: newHeight};
	 */
			return;

		var stacks = this._getStacks(datasetIndex);
		}
		var isHorizontal = me.isHorizontal();
		case 'rectRot':
			}
		// the tooltip should be the source of change
	 * @param {number} value - The minimum not zero value.
			if (!helpers.isObject(source)) {
		if (options.scale) {

	/**
 * @param {object} labelopts - the label options on the legend
		var lineCount, textSize;
		}
		}
 * @prop {number} left - Left edge of the item. Set by layout system and cannot be used in update
		}
		line.pivot();
// DEPRECATIONS
			return [v, p, q];
	var r;
		vals = colorString.getRgba(obj);


		var boundary = source.boundary;
			}
				me.paddingLeft = Math.max((paddingLeft - offsetLeft) * me.width / (me.width - offsetLeft), 0) + 3;
 * Helper function to fit a radial linear scale with point labels
		// the canvas render width and height will be casted to integers so make sure that
		return;

	 * @returns {*}
	},
		}
	 * @param {number} size - The font size (in pixels) used to resolve relative `value`.
	var count = 0;
				ctx.stroke();
	target = parseFloat(fill, 10);
	_date: _date

		me.scales = scales;
			size: size,
	}
		hoverRadius: 'pointHoverRadius',
	var min = Math.min(r, g, b);
	},
			titleY = top + ((bottom - top) / 2);
		for (i = metasets.length - 1; i >= 0; --i) {

}
		} else if (!(value instanceof moment)) {
		}
		}],
			box.update(chartArea.w, chartArea.h);
		'borderColor',
		if (extensions) {
	var fill = source.fill;
		// Variables set in _configure are needed for calculateTickRotation, and
					height += lineHeight;
		},
	/**
				var options = chart.options.legend || {};
			}
	getLabelForIndex: function(index, datasetIndex) {
		var radialDistanceFromCenter = Math.sqrt(distanceFromXCenter * distanceFromXCenter + distanceFromYCenter * distanceFromYCenter);
	}
	// is expensive when there is a large number of ticks
		'touchstart',
		var me = this;
			if (filterCallback(item)) {
	var h = convert.rgb.hsl(rgb)[0];
		var paddingBottom = helpers$1._calculatePadding(container, 'padding-bottom', clientHeight);
	isHorizontal: function() {

	ctx.arc(arc.x, arc.y, vm.outerRadius, arc.startAngle, arc.startAngle + TAU);
 */


	},
	};
	 * @see https://github.com/chartjs/Chart.js/pull/4507
	 * @private
				// events are ignored during this whole 2 resize process.
 * @todo remove at version 3

	return value;

		var max = Number.NEGATIVE_INFINITY;
	/**
	 * previously returned by the acquireContext() method.

	},
	 * in Unit as well as 'datetime' representing a detailed date/time string.
		if (context && context.canvas === item) {
				dst[key] = src[key];

		left: x1,
	update: function(maxWidth, maxHeight, margins) {
	var r = (integer >> 16) & 0xFF;
	},
	var maxes = this.maxes;
		return padding.indexOf('%') > -1 ? parentDimension * parseInt(padding, 10) / 100 : parseInt(padding, 10);
 * @private

		return helpers$1.isNumber(this._model.x) && helpers$1.isNumber(this._model.y);
						cosRotation * lastLabelSize.width + sinRotation * lastLabelSize.offset;
	}
			return 0;

			} else if (xAlign === 'right') {
}
// Pie charts are Doughnut chart with different defaults
			ctx.arc(x + yOffset, y - xOffset, cornerRadius, rad - HALF_PI, rad);

	"orange": [255, 165, 0],
		var sources = helpers.isArray(source) ? source : [source];

		me.yCenter = Math.floor(((maxTop + maxBottom) / 2) + me.top + me.paddingTop);
		// https://github.com/chartjs/Chart.js/issues/5111#issuecomment-355934167
			}

		var descriptors = this.descriptors(chart);

};
			return {
							index: i
		hwb: [0, 0, 0],
// DEPRECATIONS
			for (i = 0, ilen = (chart.data.datasets || []).length; i < ilen; ++i) {
 * Helper function to traverse all of the visible elements in the chart
	},
 * returns the associated `tkey` value. For example, interpolate(table, 'time', 42, 'pos')
		var me = this;
			id: 'x-axis-1',    // need an ID so datasets can reference the scale

			0;

				ctx.save();
			tickOpts.callback,
		case 5: r = v; g = wh; b = n; break;
		core_plugins.notify(me, 'afterDraw', [easingValue]);



			return isHorizontal ? meta.xAxisID === me.id : meta.yAxisID === me.id;

			}
	_drawTitle: function() {
	};
		// When we reset the tooltip, we need to clear it

		};
			if (helpers$1.isNullOrUndef(value)) {
		return null;
						};
		if (arr[i] - arr[i - 1] !== diff) {
			listeners.resize = listener;

	graph[fromModel].distance = 0;
	}
			var currentColWidth = 0;
	 * @return An object containing the dataset index and element index of the matching element. Also contains the rectangle that was draw
		}
		var footerFontSize, i;

 * Provided for backward compatibility, use Chart.helpers.canvas.clear instead.

	} else {


	},
	helpers$1.retinaScale = function(chart, forceRatio) {
			if (chart.isDatasetVisible(i)) {
		display: false,
		me.beforeSetDimensions();
		mode: 'index',
	if (weekday) {
		meta.bar = true;

/**
		 * @function Chart.Interaction.modes.index

/**
			start -= offset;
	var ticks = [];
 */
	},
	/**

			value: value,
	if (max === r) {
					return {options: xAxisOptions, dtype: 'category', dposition: 'bottom'};
				ctx.fillRect(
			w: width,
		}
			var endX = Math.cos(endAngle);
	var epsilon = 1e-6; // 1e-6 is margin in pixels for accumulated error.
					max = Math.max(value, max);
	},
	return base;
	}
  var hsla = getHsla(string);
	var maxNumSpaces = generationOptions.maxTicks - 1;
		var options = me.options;
		var me = this;
			if (me.max === null) {
			}
			return index <= 0 ? collection[collection.length - 1] : collection[index - 1];
 * Removes the given array event listener and cleanup extra attached properties (such as
		}
			decimal = (log10(value) - me._startValue) / me._valueRange + me._valueOffset;
				options.onResize(me, newSize);
			var r = Math.min(radius, height / 2, width / 2);
	 * Returns a unique id, sequentially generated from a global variable.
var platform_dom = "/*\r\n * DOM element rendering detection\r\n * https://davidwalsh.name/detect-node-insertion\r\n */\r\n@keyframes chartjs-render-animation {\r\n\tfrom { opacity: 0.99; }\r\n\tto { opacity: 1; }\r\n}\r\n\r\n.chartjs-render-monitor {\r\n\tanimation: chartjs-render-animation 0.001s;\r\n}\r\n\r\n/*\r\n * DOM element resizing detection\r\n * https://github.com/marcj/css-element-queries\r\n */\r\n.chartjs-size-monitor,\r\n.chartjs-size-monitor-expand,\r\n.chartjs-size-monitor-shrink {\r\n\tposition: absolute;\r\n\tdirection: ltr;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\tright: 0;\r\n\tbottom: 0;\r\n\toverflow: hidden;\r\n\tpointer-events: none;\r\n\tvisibility: hidden;\r\n\tz-index: -1;\r\n}\r\n\r\n.chartjs-size-monitor-expand > div {\r\n\tposition: absolute;\r\n\twidth: 1000000px;\r\n\theight: 1000000px;\r\n\tleft: 0;\r\n\ttop: 0;\r\n}\r\n\r\n.chartjs-size-monitor-shrink > div {\r\n\tposition: absolute;\r\n\twidth: 200%;\r\n\theight: 200%;\r\n\tleft: 0;\r\n\ttop: 0;\r\n}\r\n";
	}
		var items = [];
		var v0 = reverse ? b : a;
			// Args are: (tooltipItem, data)
			me.updateElement(arcs[i], i, reset);
	/**
			table.push({time: curr, pos: i / (ilen - 1)});
	var bdif;
		} else {
		ctx.fillRect(outer.x, outer.y, outer.w, outer.h);

	hwb: [360, 100, 100],

 * @param {object} font - A font object.
		}

			borderValue = alignBorderValue(me.right);
	return {
		}*/
		 */

		return values.hsl.concat([values.alpha]);
		'pointStyle'
		var chans = spaces[space];

	getArea: function() {
		var decimal = (pixel - this._startPixel) / this._length;
	var plFont = helpers$1.options._parseFont(scale.options.pointLabels);
	} else if (g === max) {


	 */
	"lightgrey": [211, 211, 211],
		var last = majorIndices[numMajorIndices - 1];
 * Helper function to get the items that intersect the event position
			me.start = me.max;
			value /= 100;

		},
	}
		if (titleOpts) {
	 * @param {Array} a1 - The array to compare

		/**
				scales[scale.id] = scale;

	if (arc.innerRadius > pixelMargin) {
	inRange: function(mouseX, mouseY) {

		if (numData < numMeta) {
	 * @private
			me.bottom = me.height;
						continue;
		var bodySpacing = vm.bodySpacing;
				pointCurrent.mK = pointCurrent.deltaK;
 * generates bars with different widths when data are not evenly spaced.
		} else {

		return core_scale.prototype.getRightValue.call(this, value);
	y *= 100;

		l: 0,
	 * @private

		// store height used instead of chartArea.h in fitBoxes
		top: y.end,
		return core_interaction.modes['x-axis'](this, e, {intersect: true});
	day: {
			}
		function(value) {
	},
	 * @param {number} radius - The rounded amount (in pixels) for the four corners.
			style = me._resolveDatasetElementOptions(dataset || {});

});
		case 0: r = v; g = n; b = wh; break;
}
		// actual label
					if (i > 0 && isPointInArea(points[i - 1]._model, area)) {
				model,
		maxWidth = (chartArea.right - chartArea.left - chart.borderWidth) / ratioX;

	},
		}
	return ticks;
		var reverse = !me.isHorizontal();
		canvas.style.width = newWidth + 'px';
		footerMarginTop: 6,
	var v = c + g * (1.0 - c);

		var x = eventPosition.x;
};
	}

	var min = tickOpts.min === undefined ? halfBorderWidth : 0;
					scale = source[key][i];
		}],
	var s = 0;
	// handle greyscale


// DEPRECATIONS
		ctx.save();
	return [val / 255 * 100];
			height: existingModel.height

	}
function DateAdapter(options) {
		// pick the longest format (milliseconds) for guestimation
			}
	count: function() {
//create a list of reverse color names
			chart.options.elements.point.radius
		ctx.save();
			return x;
		reverse: false,


		// If very close to our whole number, use it.

		var value = Math.round(me._startValue + me.getDecimalForPixel(pixel) * me._valueRange);
		return this;
		hoverBorderWidth: 'pointHoverBorderWidth',
	"royalblue": [65, 105, 225],
		var lineWidth = valueOrDefault$c(angleLineOpts.lineWidth, gridLineOpts.lineWidth);
	/**
		var ticks = this.ticksAsNumbers;
					chart: me
function skip(ticks, spacing, majorStart, majorEnd) {

				return '';     // doesn't make sense for scatter since data are formatted as a point
			me.height = minSize.height;
			: inRange(vm, null, mouseY);
					return {
	"darkkhaki": [189, 183, 107],
	 * @private
			meta.order = dataset.order || 0;
			helpers$1.color(colorValue).saturate(0.5).darken(0.1).rgbString();
					dataLabel[0] += value;
		}
				ty2: ty2,
				}
	draw: function() {
		});
			ctx.arc(arc.x, arc.y, arc.innerRadius, arc.endAngle, arc.startAngle, true);
		lines = pushOrConcat(lines, splitNewlines(beforeFooter));
	 * @param {Unit} unit - the unit as string
		var i, ilen, key, keys, hoverOptions, model;
};

		me.afterSetDimensions();


						object[method].apply(object, args);

			ctx.stroke();
	 * @param {IPlugin[]|IPlugin} plugins plugin instance(s).
			};
			return helpers$1.isArray(value) ? value : '' + value;
	animate: true,

	},
}
				me.getDatasetMeta(i).controller.transition(easingValue);
var route = function (fromModel) {
	"pink": [255, 192, 203],
});
convert.xyz.rgb = function (xyz) {
	return {
		borderColor: 'rgba(0,0,0,0)',
			// Data
		// Reset back to 0 for after body

	"burlywood": [222, 184, 135],
			bottom: 0
		animations.push(animation);
	}
				index = value;
	},
		me._valueRange = end - start;

	g = (x * -0.9689) + (y * 1.8758) + (z * 0.0415);
			if (labelOpts && labelOpts.usePointStyle) {
		}
		point._options = options;
			}
		text: '',
		return false;
		'hoverBackgroundColor',
		} else if (position === 'left') {
			rectangle._model.borderSkipped = null;
			injectCSS(targetNode, stylesheet);
			this.requestAnimationFrame();
		exp = Math.floor(log10(dataRange.minNotZero));
	"azure": [240, 255, 255],
			x: padding.left,
};
		var formats = options.time.displayFormats;
	"salmon": [250, 128, 114],
      a = parseFloat(match[4]);
		return this;

	},
	}
function hwbString(hwb, alpha) {
		for (i = 0, ilen = arcs.length; i < ilen; ++i) {
			default: // center
	}
			helpers$1.rtl.overrideTextDirection(ctx, vm.textDirection);

	b = (x * 0.0557) + (y * -0.2040) + (z * 1.0570);
			fill: 'start',
		'borderColor',
core_defaults._set('doughnut', {
	"slategray": [112, 128, 144],
			ctx.stroke();
		return me.getPointPositionForValue(index || 0,
		hwb[1] += hwb[1] * ratio;
	};
		if (opts.relativePoints) {

	/**
			line._model = me._resolveDatasetElementOptions(line);
	 */

		var ctx = this._chart.ctx;
   for (var i = 0; i < rgb.length; i++) {
			ctx.lineTo(pointPosition.x, pointPosition.y);
	_set: function(scope, values) {
	}

			// `quadraticCurveTo` since it generates better results when rect is

			// Check if its less, if so set as closest
	combinedBodyLength += model.beforeBody.length + model.afterBody.length;
						// new/untyped scale or type changed: let's apply the new defaults
			if (options.intersect && !intersectsItem) {
		return this.getPixelForValue(ticks[index]);
	// Any function can be extended by the legend type

		// Width

				supports = true;
		return {
		custom = custom || {};
	 */
		}


			for (i = 0, ilen = datasets[0].data.length; i < ilen; ++i) {
		return moment(time);
				}
		var minBarLength = options.minBarLength;
					points = points.slice(index).concat(points.slice(0, index));


				result.push(value / i);
	};
		ctx.textBaseline = 'middle';
	 */
	for (i = 0, ilen = metasets.length; i < ilen; ++i) {
		line._loop = true;
		rotation: 'pointRotation'
		// axis, they can manually override it



			chart: chart,
		return result;
			}
			} else {
				ctx.strokeStyle = color;
		resizer._reset();
	/**
      a = parseFloat(match[4]);
	hover: {
		_bodyFontStyle: valueOrDefault$8(tooltipOpts.bodyFontStyle, globalDefaults.defaultFontStyle),
		// Data
	setCenterPoint: function(leftMovement, rightMovement, topMovement, bottomMovement) {

	var s = hsv[1] / 100;
	});
		var vm = this._view;
			}
var scale_linearbase = core_scale.extend({
	return helpers$1.valueOrDefault(options.time.max, options.ticks.max);
		}
	 * @private
	var b = integer & 0xFF;
			}

			if (!pointBefore || pointBefore.model.skip) {
		for (i = 0, ilen = arcs.length; i < ilen; ++i) {
		var options = me.options;
				// Draw box as legend symbol
		},
	 */
   var hwb = /^hwb\(\s*([+-]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)/;
		var custom = element.custom || {};
var Point = element_point;
	},
			point.cx = center.x;
		view[key] = target;

		// but preserves monotonicity of the provided data and ensures no local extremums are added
	var b = rgb[2] / 255;
	return nearestItems;
			borderJoinStyle: 'miter',

		var i = 0;

   }
 * @todo remove at version 3
	_drawGrid: function(chartArea) {
			var width = boxWidth + (fontSize / 2) + textWidth;
		if (me.options.responsive) {
	chartArea.y = y;
	 * @since 2.7.0
	*/
			nestedTickOpts.callback,
		return item && item.getContext('2d') || null;

		var offset;
		return (colorValue instanceof CanvasPattern || colorValue instanceof CanvasGradient) ?
			e *= 10;
	}
		// Remove ticks outside the min/max range
			return method(this, e, options);


			// by default vertical scales are from bottom to top, so pixels are reversed
	calculatePointY: function(value, index, datasetIndex) {


			}
		xLinePadding = 0;
		}
		return value === null || typeof value === 'undefined';

		var i, ilen;
		}
		var label = adapter.format(time, format ? format : major ? majorFormat : minorFormat);

	display: true,
	destroy: function() {
		var width = chart.width;
		}
	 * @since 2.7.0
				y = pixel;
					y: e.y
	// If the major ticks are evenly spaced apart, place the minor ticks
			} else {
			var firstLineWidth = axisWidth;
		var config = (chart && chart.config) || {};
				scale.chart = me;

			var opts = options[id];
	each: function(loopable, fn, thisArg, reverse) {
	 * @param {Chart} chart - Chart from which to listen for event
			}

	},
					fn.call(thisArg, loopable[i], i);
		hsl: [0, 0, 0],
	},
			pure[0] = 1; pure[1] = 0; pure[2] = w;
	if (resizer && resizer.parentNode) {
		for (i = 0; i < ilen; ++i) {
	"floralwhite": [255, 250, 240],
			}
		first = interpolate$1(table, 'time', ticks[0], 'pos');

		var meta = me.getMeta();
	chart: null, // the animation associated chart instance

/**
			val = t1 + (t2 - t1) * (2 / 3 - t3) * 6;
			legendItems.reverse();
	defaultFontColor: '#666',
		return [val, val, val];
		titleSpacing: tooltipOpts.titleSpacing,
		// |    |----|-------------------------------------|----|
	position: 'chartArea',
	getPixelForValue: function(value, index, datasetIndex) {
		// Update Line
			model.controlPointPreviousX = capControlPoint(controlPoints.previous.x, area.left, area.right);
			return NaN;
	return [hsv[0], c * 100, f * 100];
	return {
	display: true,
		metasets = me._getSortedVisibleDatasetMetas();
			}
	//
	eventHandler: function(e) {
	var scale = source.el._scale;
			y: bounds.top,
			for (var i = 0; i < text.length; ++i) {
		if (!helpers$1.isFinite(value)) {
		me.height = height;

	return [
		for (i = 0, ilen = datasets.length; i < ilen; ++i) {
			if (filterCallback(currentItem)) {
			ctx.translate(item.x, item.y);
	 * @returns {object[]} [{ plugin, options }]
	var z;
		ctx.clip();

				refit = true;
		callbacks: {
			return Math.ceil(me.width / 40);

	} else if (r === max) {
   var r = Math.round(rgba[0]/255 * 100),
			me.updateHoverStyle(me.active, hoverOptions.mode, true);
		ctx.restore();

		} else if (value.min < 0 || value.max < 0) {
	},
 * store pre-computed pixels, but the scale dimensions are not guaranteed at the time we need
		 */
				++ringIndex;
	var items = [min];
	"seagreen": [46, 139, 87],


		me.yCenter = Math.floor((me.height - me.paddingTop) / 2);
function updateDims(chartArea, params, layout) {
	x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
		me.lastActive = me.active;
			y: vm.y,
		item = items[i];
		}
		_bodyAlign: tooltipOpts.bodyAlign,
                 : ""
		var i, ilen, model, controlPoints;
      hexAlpha = match[2];
	"darkgrey": [169, 169, 169],
 * uses the smallest interval (see computeMinSampleSize) that prevents bar overlapping. This

			next: {
		return 'end';
	}

var plugins = {};
		}
function wrapBoxes(boxes) {


		t: 0,

	}
			helpers$1.mergeIf(titleOpts, core_defaults.global.title);
					}
		line: {

		if (ticks[i].major) {
		me.afterBuildLabels();
}

		var hasStacks = opts.stacked;
		ctx.textAlign = 'center';
var conversions_11 = conversions.ansi16;
		me._valueRange = Math.max(ticks.length - (offset ? 0 : 1), 1);
		}
	updateBezierControlPoints: function() {
		// Scriptable options
			parent: null
		if (index >= 0) {
					break;
		footerSpacing: tooltipOpts.footerSpacing,
		return getBeforeAfterBodyLines(this._options.callbacks.afterBody.apply(this, arguments));
			t3--;
			refitBoxes.push(layout);



	};

	ticks: {
};
	 */

	/**
	rgb: function () {
	addScalesToLayout: function(chart) {
			}
			pt.y += vm.yPadding;
			me.end = me.max;
		};
		}
 */

		hoveredItem = me._getLegendItemAt(e.x, e.y);
			pure[0] = 0; pure[1] = w; pure[2] = 1; break;
			model.controlPointNextX = capControlPoint(controlPoints.next.x, area.left, area.right);
	var b;
		beginAtZero: false,
	add: function(time, amount, unit) {
   var rgba = getRgba(string);
}
		var onComplete = function(animation) {
	"deeppink": [255, 20, 147],
	if (target !== undefined && target !== null) {
}
			s = p / (2 * Math.PI) * Math.asin(1 / a);
	sl = sl || 0;

   }
	 * The coordinate (0, 0) is at the upper-left corner of the canvas
	updatePos('right');
			break;
		 * @param {Event} e - the event we are find things at
	formatters: {
			start: scale._startPixel,
					delta = tickValue - Math.floor(tickValue);
			max: nonNegativeOrDefault(tickOpts.max)
		helpers$1.each(me.options.events, function(type) {
}
	}
		}
	"fuchsia": [255, 0, 255],
					nearestElement = el;
	var value = helpers$1.getStyle(element, property);
	"firebrick": [178, 34, 34],
/**
	return [h, s * 100, l * 100];
	var g;
		alpha = vals.alpha;
			return tick.value;
			borderCapStyle: 'butt',
	 * @returns {IPlugin[]} array of plugin objects.
				curve0 = [];
			ctx.textAlign = item.textAlign;
	var i, textSize, pointPosition;
			ctx.fillStyle = tickFont.color;
	"white": [255, 255, 255],
		// To prevent canvas fingerprinting, some add-ons undefine the getContext
		var sources = [];
		};
		var paddingLeft = helpers$1._calculatePadding(container, 'padding-left', clientWidth);
 * @deprecated since version 2.6.0
	var g = hcg[2] / 100;
		if (item && item.canvas) {
			if (node.distance === -1) {
	 */

			return items;
			x += paddingAndSize;
function addListener(node, type, listener) {
	},
			if (!element._view.skip) {
			ctx.strokeStyle = valueAtIndexOrDefault(gridLines.color, 0);
				y: centerY + chart.offsetY,

		}
		point._datasetIndex = datasetIndex;
	},
	},
      var h = scale(parseInt(match[1]), 0, 360),
	var g = hcg[2] / 100;
		padding: {
			// If we have a number like 2.5 as the delta, figure out how many decimal places we need

	return {

	Object.defineProperty(array, '_chartjs', {


				if (i === 0 || lineWidths[lineWidths.length - 1] + width + 2 * labelOpts.padding > minSize.width) {

		for (var i = 0; i < count; ++i) {
 */
		/**
	} else
		y: function(chart, e, options) {
		// not the index of the scale. We need to change that.

		me._bufferedRender = false;
	spanGaps: false,
function fitBoxes(boxes, chartArea, params) {

		var ChartElement = (extensions && extensions.hasOwnProperty('constructor')) ? extensions.constructor : function() {
				x: current.x - fa * (next.x - previous.x),
	}
			backgroundPoint = getBackgroundPoint(model, tooltipSize, alignment, me._chart);
var helpers_options = {
			x = 0;
		// do nothing since that would make the chart weird. If the user really wants a weird chart
			return [p, q, v];
		'minBarLength'
				color: lineColor,
		var me = this;
	var useX = axis.indexOf('x') !== -1;
	// For 'week' unit, handle the first day of week option
		var sval = source[key];
						rotation: style.rotation,
			min > 0 && max > 0 ? min :
helpers.getValueOrDefault = helpers.valueOrDefault;
	},
function percentString(rgba, alpha) {

	 * @since 2.1.5
	var x;
			min: min,
}
			return target;
 		 * @private
	defaultFontSize: 12,
		padding: 0,
       b = Math.round(rgba[2]/255 * 100);
	// Default axis for index mode is 'x' to match old behaviour
		titleSpacing: 2,
 * Contains interaction related functions
			borderColor: defaultColor$2,
	_setDatasetHoverStyle: function() {
						model.controlPointPreviousX = capControlPoint(model.controlPointPreviousX, area.left, area.right);
	var t = 255 * v * (1 - (s * (1 - f)));
			min: tickOpts.min,

 * @param {HTMLDocument|ShadowRoot} rootNode - the node to contain the <style>.
			ctx.rect(x, y, width, height);
		rectangle._yScale = me.getScaleForId(meta.yAxisID);
};

	 * @private
}

/**
		return this._getStacks().length;
		for (i = 0, ilen = ticks.length; i < ilen; ++i) {
		}
		var canvas = chart.canvas;
		var labelRotation = minRotation;

			points[i].draw(area);

		}
		var numTicks = me.getTicks().length;
	// Tooltip
	default:
			fullCircles: Math.floor(vm.circumference / TAU)
		return {
	"mediumpurple": [147, 112, 219],
		return window.requestAnimationFrame ||
	height: function() {

	}
	"lime": [0, 255, 0],
	/**
			} else {
			this.drawBody(pt, vm, ctx);
			}

		for (i = 0; i < ilen; i++) {
		 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
		};
		var title = callbacks.title.apply(me, arguments);
	 */
			enabled: false

			me.start = me.min;
		var isHorizontal = me.isHorizontal();


	getPadding: function() {
	callback: function(fn, args, thisArg) {
			x: this._model.x,
	},
			// as this can pollute global namespaces
	 * @private
		mode: 'single'
		var tooltipSize = {

	n = wh + f * (v - wh); // linear interpolation
		return 'start';
		var ptY = tooltipPoint.y;
			lum[i] = (chan <= 0.03928) ? chan / 12.92 : Math.pow(((chan + 0.055) / 1.055), 2.4);
	return array.sort(function(a, b) {
			if (i === me.zeroLineIndex && options.offset === offsetGridLines) {
 */

		var stepped = target.steppedLine;
			ctx.restore();

	modes: {
		var filtered = [];
	var title = new Title({
	},
			? 0
		var vm = this._view;
};
	fit: function() {
		 * Formatter for linear numeric ticks
convert.hwb.rgb = function (hwb) {
 * @param {string} css - the CSS to be injected.
		var me = this;
	 * incremented and descriptors are regenerated during following API calls.
		if (animations.length === 1) {
			var top = y + r;
	hslArray: function () {

		if (hasStacks === undefined) {
	 * @param {*} value - The value to return if defined.
			// This can happen when processing mouse events, e.g. 'mousemove'
			x: vm.x,
function drawPointLabels(scale) {
	};


			x1 = chartArea.left;
	}
			y: vm.y,

		}
				endAngle += TAU;
var exports$2 = {

		} :
	 * @function Chart.Scale.mergeTicksOptions
		var radius = vm.cornerRadius;
var scales = {
      alpha = (hwb[3] !== undefined ? hwb[3] : 1);
				after: []
		bodyFontColor: '#fff',
		h += 360;
					if (i >= target[key].length) {
	scales: {
	setReductions: function(largestPossibleRadius, furthestLimits, furthestAngles) {
		// Take into account half font size + the yPadding of the top value
		return;
	}

		vals.a = values.alpha;
});

	//
	mix: function (mixinColor, weight) {
		// If all points are the same, s01 & s02 will be inf
			if (options.onResize) {
		if (target.visible) {
			ctx.lineTo(x + xOffset, y + yOffset);
		return source;
	/**
	exports$1.roundedRect.apply(exports$1, arguments);
				rects[i].draw();
		}
			return {lo: null, hi: i1};
			gridLines: {
function getRgba(string) {


function getBackgroundPoint(vm, size, alignment, chart) {
					meta = chart.getDatasetMeta(i);
			ctx.lineTo(x + Math.sin(rad) * radius, y - Math.cos(rad) * radius);

	height += titleLineCount ? model.titleMarginBottom : 0; // Title's bottom Margin
	/**

				lazy: true
						lineDash: style.borderDash,

	},
		 * @param index {number} the position of the tickValue parameter in the ticks array
		var canvas = chart.canvas;
				listItemSpan = listItem.appendChild(document.createElement('span'));
		helpers$1.callback(this.options.afterFit, [this]);
			get: function() {
	 * @private
		}
	easeInQuad: function(t) {
			y: y,
		}
		if (!chart.boxes) {
			ctx.fillText(line, rtlHelper.x(pt.x + xLinePadding), pt.y + bodyFontSize / 2);
			// lineJoin :
	 * @deprecated
		}
		var items = [];

	 * @function


			yOffset = Math.sin(rad) * radius;


		this.setValues('alpha', alpha + (alpha * ratio));
};
		if (r === v) {
		if (e.animationName === CSS_RENDER_ANIMATION) {
 * Helper to build before and after body lines
	updateElement: function(point, index, reset) {
			});
var noop$1 = helpers$1.noop;
	};
/**
			// autoskipper skipped this tick (#4635)
			// Compatibility: If the properties are defined with only the old name, use those values
		}

 */

	 * Returns the pixel for the minimum chart value
	resizer.appendChild(shrink);
	var metasets = chart._getSortedVisibleDatasetMetas();
		Object.defineProperty(convert[model], 'labels', {value: labels});
 * @function Chart.helpers.getValueAtIndexOrDefault
		var me = this;
	 * and 7 being Sunday (only needed if param *unit* is `isoWeek`).
	}
				}
			model.caretPadding = opts.caretPadding;
			// Here the boxes are fully updated and at their final positions.
		if (meta.dataset) {
	return resizer;
			// and consider it as a regular scale part of the "scales"" map only! This would
		if (Array.isArray && Array.isArray(value)) {
		if (!isFinite(fill)) {
	 */
				var maxTick = Math.max(Math.abs(ticks[0]), Math.abs(ticks[ticks.length - 1]));
	var queue = [fromModel]; // unshift -> queue -> pop
		}
		var arc = {
	 * @param {object} options - the new item options.
			values[space][i] = vals[chans[i]];
		var me = this;
		}
 * */
	},
		}
			}
			pure[0] = 0; pure[1] = 1; pure[2] = v; break;

		return null;
	id: 'title',
	if (!helpers$1.isFinite(value)) {
		 * Returns items in the same dataset. If the options.intersect parameter is true, we only return items if we intersect something
			flip ? target.controlPointNextY : target.controlPointPreviousY,
};

		}
				y1 = y2 - caretSize;
					// Touching an element
		if (item && item.canvas) {
			len0 = curve0.push(p0);
				stacks.push(meta.stack);
}
		rightAndBottom: right.concat(bottom),

		nearest: function(chart, e, options) {
		}
		chart.outerRadius = Math.max(Math.min(maxWidth, maxHeight) / 2, 0);
		 * @param {Chart} chart - the chart we are returning items from
			// false     |   x   |     x     |     x
	},
				plugin: plugin,
		yAxes: [{
			if (timestamp >= min && timestamp <= max) {


	/**
	},
						valuesPerStack[key] = [];
	height += combinedBodyLength * bodyFontSize; // Body Lines
				options: options.scale,
	return (
		// https://github.com/chartjs/Chart.js/issues/4102
		 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
		var cached = me._cachedDataOpts;

			ctx.lineTo(x2, y2);
		helpers$1.canvas.clear(this);
	}
	},

			return 0.5 * (t * t * (((s *= (1.525)) + 1) * t - s));
function getTextAlignForAngle(angle) {
		// Then fit horizontal boxes

 * @deprecated since version 2.8
};
	"mediumturquoise": [72, 209, 204],
			}
	},
	if (v > 0.0) {
		var pt = {
	onDataPop: function() {
	datasetElementType: elements.Line,

				return currentItem;
	easeInExpo: function(t) {
 */
   rgbaString: rgbaString,
		var value = dataset.data[index];


	ctx.save();
	"khaki": [240, 230, 140],
function computeLabelSizes(ctx, tickFonts, ticks, caches) {
	r = Math.min(Math.max(0, r), 1);

function drawFullCircleBorders(ctx, vm, arc, inner) {
	var elements = [];
	"limegreen": [50, 205, 50],
	},
	},

	 */

		var w = 2 * p - 1;
	var items = options.intersect ? getIntersectItems(chart, position) : getNearestItems(chart, position, false, distanceMetric);
		for (i = 0, ilen = body.length; i < ilen; ++i) {
		if (helpers$1.isArray(collection) && Array.prototype.filter) {
	}
	_datasetElementOptions: [
				dsMeta = metasets[i];
	/**
};
	return this;
			};
					stackedRightValue = +yScale.getRightValue(ds.data[index]);
		me.updateDatasets();
			var intersectsItem = false;
				target[key] = helpers$1.merge(tval, [core_scaleService.getScaleDefaults(sval.type), sval]);
		 * If the options.intersect is false, we find the nearest item and return the items in that dataset
convert.keyword.rgb = function (keyword) {
				);
	updatePos('bottom');
		var scalesOpts = chart.options.scales;
				if (chart.isDatasetVisible(i)) {
	 * @param {any} value - the value to parse (usually comes from the data)
		var meta = me.getMeta();
		model.backgroundColor = valueOrDefault$7(options.hoverBackgroundColor, getHoverColor(options.backgroundColor));

		start: pos,
		var scaleOptions = options.scale;
	});
				type = ({}).toString.call(value);

				meta = chart.getDatasetMeta(i);
		var rotation = -helpers$1.toRadians(me.labelRotation);

			this.drawCaret(pt, tooltipSize);
	case 'bottom':
		var chart = me.chart;
		helpers$1.each(vm.beforeBody, fillLineOfText);
		var parent = domNode.parentNode;
		if (me.width <= 0 || me.height <= 0) {
		var beforeTitle = callbacks.beforeTitle.apply(me, arguments);
};
	 */
	endOf: abstract,

						view[key] = c1.mix(c0, ease).rgbString();
		var angles = me._angles = [];
			});

				// percentage * size in dimension
}(this, (function (moment) { 'use strict';
			yAlign = yf(model.y);
			// Width of each line of legend boxes. Labels wrap onto multiple lines when there are too many to fit on one
	/**
			top: 0,

		};
	var vm = this._view;
	 */
	return orig === v1 ? v2 : orig === v2 ? v1 : orig;
	 * @returns {object} the tooltip position

			skip(ticks, spacing, helpers$1.isNullOrUndef(avgMajorSpacing) ? 0 : first - avgMajorSpacing, first);
		if (hLimits.end > furthestLimits.r) {
	var r = args[0];
						}
	/**
	}
		var itemHeight = fontSize + labelOpts.padding;
				}

				niceFraction = 5;
		var me = this;
	 */
	return {
		pos[i] = pos[i] || 0;
		return values;
				return boundary[i];
	 * @private
		}
			if (isHorizontal) {
		return yiq < 128;
		size: 3.154e10
		if (position === 'top') {
	/**
	var plFont = helpers$1.options._parseFont(pointLabelOpts);
	}
	var cur = graph[toModel].parent;
	 */
		if (helpers$1.isNullOrUndef(value)) {


	var routeModels = Object.keys(routes);

				meta = me.getDatasetMeta(i);
	"burlywood": [222, 184, 135],
	afterBuildTicks: function(ticks) {
	a = c * Math.cos(hr);
		var alpha = this.values.alpha;

	var yf; // function to get the y alignment if the tooltip goes outside of the left or right edges
		};
var conversions_8 = conversions.lch;

		ctx.fill();
		// the canvas display style uses the same integer values to avoid blurring effect.
	"lightslategray": [119, 136, 153],

	chart._getSortedVisibleDatasetMetas().forEach(function(meta) {
			for (i = 0; i < gcLen; i++) {
		var me = this;
	getElementsAtEvent: function(e) {
			var meta = me.getDatasetMeta(i);

		ctx.lineWidth = valueOrDefault$1(vm.borderWidth, globalOptionLineElements.borderWidth);
function fillText(ctx, text, position, lineHeight) {
			for (i = 0; i < gcLen; ++i) {
		}
		var info = {cacheable: !custom};
		chartArea.h = newHeight;
			delete dataset._meta[id];
 */



			maxTicks: maxTicks,
	}
		Chart.instances[me.id] = me;

	var delta = max - min;
function getCjsExportFromNamespace (n) {

	 */


	_updateRadius: function() {
	dataElementType: elements.Arc,
		}
			// true      |       |     x     |
		me.controller = me; // chart.chart.controller #inception
		return inRange(this._view, null, mouseY);
		// Can only reset the new controllers after the scales have been updated

			labels = me._getLabels();

				result[i] = Math.round(result[i]);
		// dataset controllers need to cleanup associated data
		// Horizontal
	if (helpers$1.isObject(value)) {
		}
		// Boolean - Whether we animate the rotation of the Doughnut
	inLabelRange: function(mouseX, mouseY) {
				value = value(context);
	 */

			tick._index = i;
	 */
	/**
	}
		var hsl = this.values.hsl;
	},
	 * @returns {number}
	resolve: function(inputs, context, index, info) {
				listItem = list.appendChild(document.createElement('li'));
		}
			top: 0,
				x: horizontal ? target : null,
		if (interval.common && Math.ceil((max - min) / (factor * interval.size)) <= capacity) {
	* Resets the chart back to it's state before the initial animation
	 */

		}
			elements.push(element);
			margin[pos] = Math.max(chartArea[pos], maxPadding[pos]);
		return labelSizes;
 * Provided for backward compatibility, use Chart.Animation#chart instead
 * @namespace Chart
		var ctx = me._chart.ctx;
	datasetElementType: null,

			};
		var context = {


			listItem = list.appendChild(document.createElement('li'));
		});
			me.left = 0;
	},

		// Because of plugin hooks (before/afterDatasetsDraw), datasets can't
		};
		return this;
	},
convert.hcg.hsv = function (hcg) {
		var dataset = this.chart.data.datasets[element._datasetIndex];
	 */
	helpers$1.splineCurve = function(firstPoint, middlePoint, afterPoint, t) {
function mergeScaleConfig(/* config objects ... */) {

		textAlign: function(align) {
		// Before body lines
	var r = args[0];
	/**

			minSize.width = getTickMarkLength(gridLineOpts) + getScaleLabelHeight(scaleLabelOpts);
			// We hid a dataset ... rerender the chart
}
 * @name Unit
		me._endPixel = endPixel;

				var labelHeight = sinRotation * widestLabelSize.width
		var method = core_interaction.modes[mode];
   if (vals) {
		}
		var data = cache.data = cache.data || {};
			if (me.isDatasetVisible(i)) {
			x: existingModel.caretX,
	rgbaArray: function () {
/** Returns a new array containing numItems from arr */
			borderWidth: options.borderWidth,
	getVisibleDatasetCount: function() {
		var tickOpts = options.ticks;
		bar: {
		merger: function(key, target, source, options) {
			if (minSign < 0 && maxSign < 0) {

   getHsla: getHsla,
		helpers$1.each(me.data.datasets, function(dataset, datasetIndex) {
		return this.getPixelForValue(ticks[index]);
		this.constructors[type] = scaleConstructor;
	}
	r = 1 - Math.min(1, c * (1 - k) + k);
				// Because we are inside `throttled`, and currently `ticking`, scroll
};
						pointStyle: style.pointStyle,
		var d12 = Math.sqrt(Math.pow(next.x - current.x, 2) + Math.pow(next.y - current.y, 2));
		var nestedTickOpts = major ? tickOpts.major : tickOpts.minor;
			range.chunk * range.ratio);
		me.paddingRight = 0;
		merge = options.merger || helpers._merger;
			lineCount = isArray(label) ? label.length : 1;
		values[space][i] = Math.round(capped);
	 * - 'series': data are spread at the same distance from each other.
	 * Reset the elements of all datasets

var core_element = Element;
			helpers.mergeIf(tval, sval);
	return elements;


});

				// use e.native for backwards compatibility
		point._model = {
});

		heights.push(height);
	 * Parses font options and returns the font object.
		}
	"lightskyblue": [135, 206, 250],
		me.max = max;
};
			hitboxes[i].top = y;
		var bodyAlignForCalculation = rtlHelper.textAlign(bodyAlign);
			if (idx !== -1) {
			return;
function getEvenSpacing(arr) {
			if (source.hasOwnProperty(prop)) {
		var me = this;
			return;

		var i, ilen;

	getMeta: function() {
		'backgroundColor',
		var deltaY = useY ? Math.abs(pt1.y - pt2.y) : 0;
});
 */
			x -= paddingAndSize;
				var i, type, scale;
	 */
				// A vertical axis is more constrained by the width. Labels are the
		var tick = ticks[index];

 * @todo remove at version 3
		ctx.fill();
			onComplete(new core_animation({numSteps: 0, chart: me}));
		if ((t /= 0.5) < 1) {
	},

				}


		return {
		var elements = meta.data || [];
	},
		item.fullWidth = item.fullWidth || false;
	};
		var vm = this._view;
		var scales = me.scales || {};
	// and so would change references to labels and datasets, preventing data updates.
		}
		me.handleDirectionalChanges();
		me._layers = [];
		var me = this;
		helpers$1.each(collection, function(item) {
	}
var scale_category = core_scale.extend({
					datasets[i] = [];
	events: [

		/**
	var options = scale.options;
			type: 'linear',
		var fontOpts = helpers$1.options._parseFont(opts);
		}
		me.fit();
		if (index !== -1) {
			end = value;
		item.position = item.position || 'top';
						}


					ctx.lineTo(item.x2, item.y2);
			me.left = 0;
	});

				}
	}
			scope = scope === undefined ? array : scope;
 * @private
			easingValue: easingValue
	var model = tooltip._model;
					if (item.label) {
	mergeIf: function(target, source) {
				if (labels[i]) {
		} else {
 * returns a deep copy of the result, thus doesn't alter inputs.
		me._yScale = me.getScaleForId(meta.yAxisID);
		chart.outerRadius = Math.max(minSize / 2, 0);
	_type: 'rectangle',


				duration: config,
};
	}

convert.rgb.cmyk = function (rgb) {
		ctx.lineCap = vm.borderCapStyle || globalOptionLineElements.borderCapStyle;

	 * The coordinate (0, 0) is at the upper-left corner of the canvas
		}
		var epsilon = 1e-6; // 1e-6 is margin in pixels for accumulated error.
	var integer = (val << 16) + (val << 8) + val;
			minSize.height = getTickMarkLength(gridLineOpts) + getScaleLabelHeight(scaleLabelOpts);
		/**
		if (helpers$1.isFinite(target)) {
		this.insertElements(this.getDataset().data.length - count, count);
}
	var y = position.y + lineHeight / 2;
			outerRadius: Math.max(vm.outerRadius - pixelMargin, 0),
	function updatePos(pos) {
	diff: abstract,

		var numMajorIndices = majorIndices.length;
		source: 'auto',
function fromNativeEvent(event, chart) {

			me.stop();
		min = Math.min(min, Math.abs(pixels[i] - pixels[i - 1]));
				duration: config,
				return '';

		return isVertical(vm)
				}
		if (loop) {
		}
	return [hcg[0], s * 100, l * 100];
			ctx.lineCap = valueOrDefault$e(legendItem.lineCap, lineDefault.borderCapStyle);
			canvas.style[key] = value;
		});
			model.footer = me.getFooter(tooltipItems, data);
var core_layouts = {
		if (element) {
				return label;
		me._drawTitle();
	}
		convert[fromModel][toModel] = wrapRounded(fn);
		}
/**

		}
		mode: 'index',

					if (!labelsAdded) {
		var cosRotation = Math.cos(angle);
		drawBorder: true,
		} else {
			// If we have lots of ticks, don't use the ones
		me.afterUpdate();
	} else {
	/**
				core_layouts.configure(chart, titleBlock, titleOpts);
	widest = widths.indexOf(widestLabelSize);
}
			nearestItems.push(element);
 */



	}
	valueAtIndexOrDefault: function(value, index, defaultValue) {
	 * @param {number} timestamp - the input timestamp
	 * @private
	/**
	handleDirectionalChanges: noop,

		 * Provided for backward compatibility, Chart and Chart.Controller have been merged,

	 * @returns {(number|null)}
			listeners: [listener]
}
	initialize: function() {

	elements: {
	var g = hcg[2] / 100;
	magenta: function (val) {
	 * hook, in which case, plugins will not be called on `afterDatasetUpdate`.
		for (i = 0, ilen = me.data.datasets.length; i < ilen; ++i) {
				var tmp = x3;
			}

		var me = this;
				continue;
	},

	return [hwb[0], c * 100, g * 100];
 */
			});
	/**
	if (box.getPadding) {
 * @namespace Chart.helpers.drawRoundedRectangle
	"skyblue": [135, 206, 235],
		 * - 'data': generates ticks from data (including labels from data {t|x|y} objects).

var core_animations = {
	var f = 0;
		var gridLines = options.gridLines;
	 * @param {string} hook - The name of the plugin method to call (e.g. 'beforeUpdate').
		helpers$1.callback(this.options.beforeFit, [this]);
		helpers$1.callback(this.options.beforeCalculateTickRotation, [this]);
		var prop;

 */
// @TODO Make possible to select another platform at build time.
	// We set the major ticks separately from the above loop because calling startOf for every tick
			me.updateDataset(i);
			width = item.width;
			pt.x = getAlignedX(vm, vm._footerAlign);
	helpers$1.each(caches, function(cache) {
	formats: abstract,

			pixels.push(scale.getPixelForValue(null, i, me.index));
	};
		chart.borderWidth = me.getMaxBorderWidth();
			for (i = 0, ilen = me.ticks.length; i < ilen; ++i) {
function link(from, to) {
	 * i.e. the number of digits after the decimal point, of the value of this Number.
 * @private
		maxLabelWidth = labelSizes.widest.width;
		ctx.restore();
		me.lastActive = me.lastActive || [];
	 * Evaluates the given `inputs` sequentially and returns the first defined value.
	var length = scale.chart.data.labels.length;
 * @todo remove at version 3
			return;
	id: 'legend',
	/**
	var s = hsl[1] / 100;
	/**
	removeEventListener: function(chart, type, listener) {
			return Math.min(
		g = (v - c) / (1 - c);

	requestAnimationFrame: function() {
		var i = 0;
	"goldenrod": [218, 165, 32],
		var margin = {left: 0, top: 0, right: 0, bottom: 0};

		return me.getPixelForDecimal((index - me._startValue) / me._valueRange);
		var items = me._labelItems || (me._labelItems = me._computeLabelItems());
				size = Math.SQRT1_2 * radius;
			? vm.width * Math.abs(vm.y - vm.base)
		var values = this.values;
	getRightValue: function(rawValue) {
		var c = (args - 232) * 10 + 8;
					// There was a gap and this is the first point after the gap
	}
	var rgb;
	niceMax = Math.round(niceMax * factor) / factor;
	},
	_merger: function(key, target, source, options) {
	},
			var y = 0;
			}
	 * @private

		// Reset padding
var platform_dom$2 = {
	year: 'YYYY'
	},
 */

		var tickWidth = 1 / Math.max(numTicks - (offset ? 0 : 1), 1);
			return false;

			rawValue = rawValue.t;

			// If we want to trigger on an intersect and we don't have any items
	"lightblue": [173, 216, 230],

});
		var max = MIN_INTEGER;

		var x = vm.x;
	}

				meta.controller.updateIndex(i);
		ticks = me.afterBuildTicks(ticks) || ticks;
	helpers$1.each(model.footer, maxLineWidth);


	}
		};
		var opts = me.options;
		var startAngle = me._starts[index];

var defaultConfig = {
				x2 = alignPixel(chart, me.right, lastLineWidth) + lastLineWidth / 2;
	gray: {channels: 1, labels: ['gray']}
			// Draw Title, Body, and Footer
		if (datasets.length) {
			continue;

			categoryPercentage: 0.8,

			window.mozRequestAnimationFrame ||
			return align === 'right' ? 'left' : 'right';
	_factorize: function(value) {
				ctx.fillStyle = tickOpts.backdropColor;
 */
	getPixelForDecimal: function(decimal) {
	},

				lineWidth = gridLines.zeroLineWidth;
		labels: {
				borderWidth: options.borderWidth,
				me.startDigest();
	/**
};
	// Reaction: https://dl.dropboxusercontent.com/u/34601363/toomuchscience.gif
		widest: valueAt(widest),
			offset: true,
	 * @param {*} defaultValue - The value to return if `value[index]` is undefined.

		}

		var data = me.getDataset().data[index];
		me.maxWidth = maxWidth;

	},
	"lightslategrey": [119, 136, 153],
	//
	}
		}
	}
	a = 500 * (x - y);
		 * Provided for backward compatibility, use `afterLayout` instead.
		var meta, i, el, view, points, mapper, color;
			animation = animations[i];
	},
		if (value !== undefined) {

	} else if (fill === 'end') {
		for (i = 0; i < count; ++i) {
		var me = this;
 * Helper to get the alignment of a tooltip given the size
/**
	}
		},
		// Number - Point label font size in pixels
				if (type === '[object Array]') {
	update: function(reset) {

		var i, ilen, tick, label, x, y, textAlign, pixel, font, lineHeight, lineCount, textOffset;
		var position = options.position;
		return 0.5 * ((t -= 2) * t * t * t * t + 2);


		var datasetIndex = me.index;
		me.determineDataLimits();
		// Scriptable options
	// Chart.js modifies some canvas values that we want to restore on destroy
      }
		// Chart event already has relative position in it
helpers$1.rtl = rtl;
	 */
	} else {
	return ansi;
		return me;
	 * @param {CanvasRenderingContext2D} context - The context2d instance
					data = datasets[datasetIndex].data;
	"lightpink": [255, 182, 193],
		backgroundColor: 'rgba(0,0,0,0.8)',
		}

			var tickString = '';

	var m = cmyk[1] / 100;
			if (!isNaN(value)) {
			this.drawCaret(pt, tooltipSize);
	"seagreen": [46, 139, 87],
			items.push({
		return Math.abs(x - y) < epsilon;
		var showLine = me._showLine = valueOrDefault$6(config.showLine, options.showLines);
		return {
		ctx.font = fontOpts.string;
	 * at `index` become the new input.
			filtered.push(item);
	touchstart: 'mousedown',
				// If the line has an open path, shift the point array
function removeListener(node, type, listener) {
		return array.reduce(function(min, value) {
				x1 = x2 - caretSize;
			tension: valueOrDefault$7(custom.tension, lineModel ? lineModel.tension : 0),
	// Title width
	getRuler: function() {
		return y <= midY ? 'top' : 'bottom';
			}

		// Only consider points that are drawn in case the spanGaps option is used

			gc = cache.garbageCollect = [];
		if (touches && touches.length > 0) {
					minDistance = d;
			if (refitBoxes.length) {
	},

		if (tickOpts.max !== undefined) {
		bl /= ratio;
		if (changed && opts.custom) {
	for (i = 0, ilen = ticks.length; i < ilen; i++) {
	},
	 * Creates a "path" for a rectangle with rounded corners at position (x, y) with a

		var ctx = this._chart.ctx;

	var prev = !range.lo ? table[0] : !range.hi ? table[table.length - 2] : range.lo;
	var ctx = tooltip._chart.ctx;
		var ilen = sources.length;
				return !pt._model.skip;

			return Math.sign(x);
 * Provided for backward compatibility, use EventTarget.addEventListener instead.
		var max = 0;
		var options = me._resolveDataElementOptions(rectangle, index);
		onClick: function(e, legendItem) {
			return;
		animateRotate: true,
		 * @see https://github.com/chartjs/Chart.js/pull/4507
	},
			labels.push(this.tickFormatFunction(ticks[i].value, i, ticks));
/**
		if (position === 'top') {
	/**
	 * @private
			loopOffset = i + 1;

	},

	} else if (vals[space.charAt(0)] !== undefined) {
		target = model[key];
	beforeBuildTicks: function() {
		}
				return title;

			throw new Error('missing channel labels property: ' + model);
		 * - 'auto': generates "optimal" ticks based on scale size and time options.

	// We assume the radius of the polygon is half the size of the canvas at first

	}
	next = start;
		var canvas = chart.canvas;
		}
		Object.defineProperty(me, 'data', {
	 * Returns a map of time formats for the supported formatting units defined

	var i, tick;
		var display = opts.display;
};
 * Get a distance metric function for two points based on the

		if (me.animations.length > 0) {
		for (i = 0, ilen = a0.length; i < ilen; ++i) {
}

		var view = document.defaultView;
Chart.types = {};
	} else {
		var context = item && item.getContext && item.getContext('2d');
 * @param dataRange the range of the data
			// Args are: (tooltipItems, data)
core_defaults._set('global', {
 * @todo remove at version 3
			// Reset position before calculating rotation
				// and add 3 px to move away from canvas edges
		if (me.isHorizontal()) {

		}
		var center = element.getCenterPoint();
 * @typedef {('millisecond'|'second'|'minute'|'hour'|'day'|'week'|'month'|'quarter'|'year')}
	"indianred": [205, 92, 92],
			elements.push(element);
	linkScales: helpers$1.noop,
	},
	getRightValue: function(rawValue) {
});
		rdif = diffc(r);
			ctx.textBaseline = 'middle';
	 * @param {IEvent} event the event to handle
/**
	if (original !== undefined) {
			pointStyle: 'circle',
	/**
   else if (match = string.match(keyword)) {

	core_layouts.addBox(chart, title);
function getTickBackdropHeight(opts) {
			// Tooltip
   return "rgb(" + r + "%, " + g + "%, " + b + "%)";
			var elements = [];
		return this.setSpace('hsl', arguments);
	return currentClosestKeyword;
			for (i = 0, ilen = chart.data.datasets.length; i < ilen; ++i) {

	// Align first ticks on unit
				return '';
		end: pos + size
		me.min = min;
		var me = this;
	},
function createNewLegendAndAttach(chart, legendOpts) {
			s = p / 4;
						strokeStyle: style.borderColor,
		}

	getTickLimit: function() {
});
			rad += TWO_THIRDS_PI;
		ctx.arc(scale.xCenter, scale.yCenter, radius, 0, Math.PI * 2);
		}

		padding: {



				// In the case of two points that appear at the same x pixel, slopeDeltaX is 0
			if (index !== undefined && helpers_core.isArray(value)) {
	 * Clears the entire canvas associated to the given `chart`.
	var index = listeners.indexOf(listener);

	}
	var right = sortByWeight(filterByPosition(layoutBoxes, 'right'));
	data.labels = data.labels || [];
	beforeUpdate: function(chart) {
			time = parse(me, value);
	},
		color = color / 10.5 * 255;
	"lightcyan": [224, 255, 255],
function nextAvailableScaleId(axesOpts, prefix, index) {
}
			return new core_controller(ctx, core_controller.helpers.merge(cfg || {}, {
	 */


	 */
		case 4:
var DatasetController = function(chart, datasetIndex) {
			return;
			t = r = b = l = +value || 0;

	var ctx = scale.ctx;
	 */
	},

	 * @private
})));
         rgb[i] = parseInt(match[i] + match[i], 16);
		}]

		if (helpers$1.isArray(elementOptions)) {
			min > 0 && max > 0 ? min :
	/**
 */
		return {
	var g = rgb[1] / 255;
				return x;
		var angleLineOpts = opts.angleLines;
	beforeSetDimensions: function() {

			});

		initial: {
			return (betweenAngles && withinRadius);
		me.width = minSize.width;

		// determineUnitForFormatting relies on the number of ticks so we don't use it when
	var b = lab[2];
	var h = hsl[0] / 360;

	 * @returns {object} The `target` object.

		ticks.push(tickVal);
		return this.canvas.toDataURL.apply(this.canvas, arguments);
			hoverRadius: 4,


			right: chartArea.left + chartArea.w,
			return me.getPixelForOffset(time);
		if (t === 0) {
					listItem.appendChild(document.createTextNode(labels[i]));
		} :
		var labels = me._getLabels();
		model.x = backgroundPoint.x;

	offset: false,
				}
};
	helpers$1.getConstraintWidth = function(domNode) {
	defaultColor: 'rgba(0,0,0,0.1)',
	chartArea.x = x;
		titleFontStyle: 'bold',
		index = map[major];
			skipMajors(ticks, majorIndices, numMajorIndices / ticksLimit);
	 * Calls `fn` with the given `args` in the scope defined by `thisArg` and returns the
	"lime": [0, 255, 0],
	/**

			return;
			}

		zeroLineWidth: 1,
		factor = factors[i];
 * @deprecated since version 2.7.0
	},
		grayscale = min / (1 - chroma);
/**
		var legendWidth = me.width;
			y: this._model.y


var valueOrDefault$4 = helpers$1.valueOrDefault;
	 * @private

	},
}
	"greenyellow": [173, 255, 47],
var mappers = {
		var me = this;
	// -- DOM methods
			for (i = 0, ilen = keys.length; i < ilen; ++i) {

	var angleMargin = pixelMargin / arc.outerRadius;
		// YIQ equation from http://24ways.org/2010/calculating-color-contrast
		return !this.dark();
		} else {
Object.defineProperty(exports$3.prototype, 'animationObject', {
		var max = me.max;
			major: false
};
		helpers$1.each(bodyItem.after, maxLineWidth);

	var h = hcg[0] / 360;
		var s12 = d12 / (d01 + d12);
				x3 = x2 + caretSize;
		var constrainedContainer = view.getComputedStyle(parentNode)[maxStyle];
	 */
				if (d1) {
				x1 = x2 - caretSize;


			}
	getPixelForValue: function(value) {
			}
var EVENT_TYPES = {
		hitRadius: 'pointHitRadius',
			// Reset position before calculating rotation
		ctx.textAlign = rtlHelper.textAlign('left');
		var dataset = me.getDataset();
			tension: 0 // no bezier in radar
		helpers$1.each(updated, function(hasUpdated, id) {
function getAlignedX(vm, align) {
	}
		if (!display) {
	initialize: function() {},
		var me = this;
				node.parent = current;
	"peachpuff": [255, 218, 185],
};



	if (plugins.hasOwnProperty(k)) {
		}
	/**
		};
	calculateBarIndexPixels: function(datasetIndex, index, ruler, options) {
			// ticks.min is set, and no datasets are visible


		}
	g = 1 - Math.min(1, m * (1 - k) + k);
	"peachpuff": [255, 218, 185],
	rgbArray: function () {
	k = Math.min(1 - r, 1 - g, 1 - b);
		return pos === 'top' || pos === 'bottom';
		} else if (2 * t3 < 1) {
	if (args >= 232) {
		var options = arc._options;
		backdropColor: 'rgba(255,255,255,0.75)',
	// Force canvas to display as block to avoid extra space caused by inline
		case 1:
	var g;
 * Detects support for options object argument in addEventListener.
	 */
		}
	"darkolivegreen": [85, 107, 47],

		style = ctx.canvas.style;
			// We want to ensure we do not copy prototypes over
			: a[l1] - b[l1];
		if (me.isHorizontal()) {
 * Linearly interpolates the given source `value` using the table items `skey` values and
		// missing formats on update
		if (tickOpts.beginAtZero) {
	/**
		bottom: y2
		map[value] = i;

			id: 'y-axis-0'


			}
	"slategray": [112, 128, 144],
				var d = helpers$1.distanceBetweenPoints(eventPosition, center);
	 * @param {object} point - The point to test
	inRange: function(chartX, chartY) {
	},

var convert = module.exports = {
		hsl[0] = hue < 0 ? 360 + hue : hue;
				if (info && !cacheable) {
			ticks[i].label = labels[i];
		x: function(x) {
		model.base = reset ? base : vpixels.base;
				meta = chart.getDatasetMeta(datasetIndex);
						value = me._parseValue(data[i]);
			textAlign = isMirrored ? 'right' : 'left';
	 */

				pt.y += titleFontSize + titleSpacing; // Line Height and spacing
			me._view = helpers$1.extend({}, model);
				cacheable = false;
		}
			index: i,
Object.defineProperty(exports$3.prototype, 'chartInstance', {
		min = min === MAX_INTEGER ? +adapter.startOf(Date.now(), unit) : min;
		ctx.translate(scaleLabelX, scaleLabelY);

	}
				var usePointStyle = options.labels && options.labels.usePointStyle;
	/**
 * @param {Chart} chart - The chart

			angles[i] = angle;
		var radiusReductionRight = Math.max(furthestLimits.r - me.width, 0) / Math.sin(furthestAngles.r);

			}
		var index = source.fill;
	/**
	var l;
	 */

/**
	var index = element._index;
			if (positionIsHorizontal(scaleOptions.position) !== positionIsHorizontal(item.dposition)) {
		// Do we have more stuff to animate?
	if (vals === undefined) {
		}

					dataLabel += value;
		if (fitBoxes(horizontalBoxes, chartArea, params)) {
		angleMargin = pixelMargin / arc.innerRadius;

	},

		max = parse(me, getMax(options)) || max;
	easeOutExpo: function(t) {
		options = options || {};
					pt.y += vm.titleMarginBottom - titleSpacing; // If Last, add margin, remove spacing
		me._ticks = null;
	initialize: function(chart, datasetIndex) {
		// we're assuming the result is an array here.
		var me = this;
	},
	 * but in some cases, this reference can be changed by the user when updating options.
				break;
		// see notice in conversions.js; don't use box types


				return '';
		if (helpers.isArray(source)) {
		 * @param {Chart} chart - the chart we are returning items from
		key = keys[i];
		helpers$1.rtl.restoreTextDirection(me.ctx, opts.textDirection);
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);
	// Add padding
	"olivedrab": [107, 142, 35],

		return {
		var textWidth = data[string];
	var y = chartArea.y;

	"lightsteelblue": [176, 196, 222],
			}
	"navajowhite": [255, 222, 173],
 * Array.prototype.indexOf compatibility: Chrome, Opera, Safari, FF1.5+, IE9+
	var wh = hwb[1] / 100;
		var globalDefaults = core_defaults.global;
	if (!stub) {
		}
			me.width = minSize.width;
		var me = this;
			return items;

			}
	var factor, niceMin, niceMax, numSpaces;

				(stacked === undefined && meta.stack === undefined)) {
		x: x,
		// In case there is no valid min/max, set limits based on unit time option

	},
			start: pos - (size / 2),

			if (typeof method === 'function') {
		case 'crossRot':
	}
		me.fit();

	getLabelForIndex: function(index, datasetIndex) {
}
	var yAlign = 'center';
		common: false,
					datasetOpts[key],
		if (me.defaults.hasOwnProperty(type)) {
}
 * (c) 2020 Chart.js Contributors

 * @alias Chart.helpers.options
		var context = {
Element.extend = helpers$1.inherits;
		}
		var borderValue, i, tick, lineValue, alignedLineValue;
					meta.data[index].hidden = !meta.data[index].hidden;

		}
	},
			return 0;
	/**
				ctx.fillRect(rtlHelper.leftForLtr(x, boxWidth), y, boxWidth, fontSize);
		delete expando.renderProxy;

				ctx.drawImage(style, -style.width / 2, -style.height / 2, style.width, style.height);
			// backward compatibility: draw has been overridden by custom scale
		var scale = me._getValueScale();

		return result;
	},
				me.pivot();

	/**
			borderColor: options.borderColor,
			model.endAngle = model.startAngle + model.circumference;
	"black": [0, 0, 0],
	return {

	return min;
			borderColor: options.borderColor,

	black: function (val) {
/**

	/**
			// Reset position before calculating rotation
 * If 'series', timestamps will be positioned at the same distance from each other. In this
		ctx.rect(outer.x, outer.y, outer.w, outer.h);
		// Rest of layers
		if (me._loop) {
		if (stepped) {

}
		return inRange(this._view, mouseX, null);
	 * @param pixel
	if (helpers$1.almostEquals(numSpaces, Math.round(numSpaces), spacing / 1000)) {
		 */
		var lazy = config.lazy;
			y: vm.y
	/**
var defaultColor$1 = core_defaults.global.defaultColor;
		// supposed to contain *all* unit/string pairs but this can't be resolved
			}
	 * this method should be overridden only by the moment adapter.

		// When bar thickness is enforced, category and bar percentages are ignored.

					nestedThing = thing[j];
	return supports;
		display: true,

		if (!meta) {
	 */

			}
	hour: {
			var textWidth = ctx.measureText(legendItem.text).width;
		var start = me.min;
			ctx.lineTo(x + xOffset, y + yOffset);
				}
			tx1 = borderValue + axisHalfWidth;
var reverseKeywords = {};
			} else {
	week: 'll',
		var cacheable = true;
	first = +adapter.startOf(first, weekday ? 'day' : minor);
		options: titleOpts,
	}

		}
	},
					fill: decodeFill(el, i, count),
var legend = plugin_legend;
 * @namespace

		var count = 0;
	if (listeners.length > 0) {
	var min = generationOptions.min;
	helpers$1.getConstraintHeight = function(domNode) {
	pointerenter: 'mouseenter',

			for (i = 0, ilen = datasets[0].data.length; i < ilen; ++i) {
						datasets[i][j] = timestamp;

				// Draw Legend-like boxes if needed
		var closePath = me._loop;
		if (me.margins) {
	if (l > 0.0 && l < 0.5) {
			return x - itemWidth;

core_defaults._set('bubble', {
 * @function Chart.helpers.addEvent
		return me;
	helpers$1._getParentNode = function(domNode) {
	}
		hsl[1] -= hsl[1] * ratio;
	}
		var cornerRadius = vm.cornerRadius;
function indexMode(chart, e, options) {
	 * @param {*} value - The value to test.
		meta.stack

		}
			ctx.lineWidth = lineWidth;
			propagate: true
	var conversion = {};
			// http://jsperf.com/1-vs-infinity
var eventListenerOptions = supportsEventListenerOptions ? {passive: true} : false;
			this.drawBackground(pt, vm, ctx, tooltipSize);

		return function() {
			me.chart.options.elements.arc.angle,
	legendCallback: function(chart) {
		if (isNaN(value.min) || isNaN(value.max) || meta.data[i].hidden) {
function removeResizeListener(node) {

			var contains0 = (startAngle <= 0 && endAngle >= 0) || endAngle >= DOUBLE_PI$1;
	},

			}
var colorName$1 = {
	position: 'bottom',
var rtl = helpers_rtl;
      return vals[3];
		var change = Math.max(maxPadding[pos] - chartArea[pos], 0);

			top: t,
			} else {
	};
					arcs = meta.data;
function buildGraph() {
			{time: min, pos: 0},
		return t * t * t * t;
			}
	 * @param {object|object[]} source - Object(s) to merge into `target`.
		me._start = {};
		me.paddingRight = 0;

		var isMirrored = optionTicks.mirror;
		if (element && !element._view.skip) {
		var angle = helpers$1.toRadians(me.isHorizontal() ? ticksOpts.maxRotation : ticksOpts.minRotation);
	},
		return this.chart.scale.id;
		var yScale = me._yScale;

		point._datasetIndex = dsIndex;
	//
		// Labels

		var i, ds, dsMeta, stackedRightValue, rightValue, metasets, ilen;
	 * @param {number} height - The rectangle's height.
		return this.values.rgb;

		}
		var index, previous, currentVM;
function getHsla(string) {
		}
		// Are we in doughnut mode which has a different data type

			if (findIndex >= 0) {
 * to create the lookup table. The table ALWAYS contains at least two items: min and max.
		var availableWidth = width - padding.width;
		}
		}
  return reverseNames[rgb.slice(0, 3)];
				}
	}

	ctx.font = plFont.string;
	beforeInit: function(chart) {
		});

			}
			merger: function(key, target, source) {
		leftForLtr: function(x, _itemWidth) { // eslint-disable-line no-unused-vars

	afterUpdate: noop$2,

		}, {
		// the graph. Make sure we always have at least 2 ticks
	var b;
	/**

	second: 'h:mm:ss a',
			ctx.lineTo(x + xOffset, y + yOffset);

				pointCurrent.mK = pointAfter.mK = 0;

	//
		var pixelMargin = (vm.borderAlign === 'inner') ? 0.33 : 0;
	helpers$1.each(ANIMATION_START_EVENTS, function(type) {
		me.beforeSetDimensions();
	 * @private
		var me = this;
	getTicks: function() {

			value = me.chart.data.datasets[datasetIndex].data[index];

		var i, ilen, meta, arc, controller, options, borderWidth, hoverWidth;
		ctx.fillStyle = vm.backgroundColor;
	return [0, 0, 0, gray[0]];
 */
	 * @param {object} options - A object that contains font options to be parsed.
				x1 = tmp;
			value = dataset.data[index];

var getRtlAdapter = function(rectX, width) {
	}
			me.top = 0;
				value = source[prop];
			box.right = x + box.width;
	}
		return helpers.merge(target, source, {merger: helpers._mergerIf});
		var legendHeight = me.height;
		ctx.fill();
		}
			offset = Math.max(lineValue - start, end - lineValue);
		}
			return label || label === 0 ? label : '';
		if (colorName.hasOwnProperty(keyword)) {
			ctx.arc(cx, cy, r, curve1[i].angle, curve1[i - 1].angle, true);


	_parseValue: function(value) {
	 * @param {number} [index] - If defined and the current value is an array, the value
 */
	var val;
var supportsEventListenerOptions = (function() {
	// Actually draw the title block on the canvas
				if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta)) {

	},
		var animationOpts = opts.animation;
	 */
		if (isHorizontal) {
			}


				Math.asin(Math.min((labelSizes.highest.height + 6) / tickWidth, 1)),
		var opts = chart.options;
				});
		return count;
		var tooltipPosition = {
			borderWidth: model.borderWidth,
		 * @param {Chart} chart - the chart we are returning items from
	contrast: function (color2) {
		}
		// Update Points

		fillText(ctx, scale.pointLabels[i], pointLabelPosition, plFont.lineHeight);
	determineDataLimits: function() {
				width: style.width
 */
	/**

			data.r,
	 */
		}
core_defaults._set('scale', {

	"gold": [255, 215, 0],
		var tickOpts = me.options.ticks;
			if (filterCallback(currentItem)) {
	var map = {};
		}
				});

	"aquamarine": [127, 255, 212],
		// Update Lifecycle - Probably don't want to ever extend or overwrite this function ;)
			tickWidth = maxWidth / (numTicks - (options.offset ? 0.5 : 1));
	// These methods are ordered by lifecyle. Utilities then follow.

				var centerY = y + fontSize / 2;
	var offset;
		// |    |    |                 B1                  |    |
	_getRingWeight: function(dataSetIndex) {
	/**
				);

		}
}
	week: {
	var b = rgb[2] / 255;
		}
		for (i = 0, ilen = inputs.length; i < ilen; ++i) {
		});
		bodyAlign: 'left',
var _defaults$3 = defaultConfig$3;
		if (vm.borderWidth) {
			var scaleOptions = item.options;
				ctx.fillText(text[i], 0, y, maxWidth);

	 * @param elements {ChartElement[]} the elements being displayed in the tooltip
			}
		var me = this;

	}
		setWidth: function(w) {
	"beige": [245, 245, 220],
   getRgb: getRgb,
			borderColor: model.borderColor,
				}

		newOptions);
	 * @param {*} defaultValue - The value to return if `value` is undefined.

		 * @param {Event} e - the event we are find things at
	// Boolean - Whether to animate scaling the chart from the centre
			resizer._reset();
		var min = MAX_INTEGER;
/**
			target = index + target;
			getMargins(layout.horizontal, chartArea)
		shrink.scrollTop = maxSize;
			// For backward compatibility, vertical category scale reverse is inverted.
	},
		if (!silent) {
			core_animations.addAnimation(me, animation, duration, lazy);
};


			me.destroyDatasetMeta(i);
	helpers$1.toRadians = function(degrees) {
		if (contrastRatio >= 7.1) {

		var i, len, keys;

		this.hidden = false;
	return [h, sv * 100, v * 100];
		? ((1.055 * Math.pow(b, 1.0 / 2.4)) - 0.055)

		},
// Register built-in scales
	},
/**

 * @function Chart.helpers.getValueOrDefault
		ctx.stroke();

		var chart = me.chart;
				x += pos.x;
			if (distance < currentClosestDistance) {
	},

var plugin_title = {
		canvas.width = width * pixelRatio;

			dataset: dataset,


// INTERNAL: static default options, registered in src/index.js
	_invalidate: function(chart) {
	// and position it in the most space efficient manner
		} else if (fraction <= 2) {
		return [c, c, c];
			return;


	var value = input;
		var newControllers = [];
		'be found or an incomplete integration was provided.'
			id: 'y-axis-0'
		var cos = Math.abs(Math.cos(rot));
			if (ctx.setLineDash) {
 */
function rgbaString(rgba, alpha) {

		} else {
				var labels = data.labels;
		'hoverBorderColor',
	var maxSize = 1000000;
		return Math.min(Math.max(value, 0), me.ticks.length - 1);

		var me = this;
	},
	];
		left: l
			minSize.height = display ? 10 : 0;
		// See https://github.com/chartjs/Chart.js/issues/2210
				} else if (type === '[object Number]') {

				ctx.arc(left, top, r, HALF_PI, PI + HALF_PI);

function computeMinSampleSize(scale, pixels) {
		var height = canvas && canvas.height;
		me._updateRadius();
			parseVisibleItems(chart, function(element) {
	},

	 * @param {string} type - The ({@link IEvent}) type to remove
	 * Provided for backward compatibility with scale.getValueForPixel().
				}
		if (!isNullOrUndef$1(index) && !isNullOrUndef$1(datasetIndex)) {
					}
			id: 'y-axis-1',
			me._active = me._chart.getElementsAtEventForMode(e, options.mode, options);
	"lemonchiffon": [255, 250, 205],
		var canvas = evt.target || evt.srcElement;
			ctx.fillStyle = vm.footerFontColor;

	var lineColor = valueAtIndexOrDefault$1(gridLineOpts.color, index - 1);
		}
	/**
};
			if (Math.abs(delta) > 1) {
			yOffset = Math.sin(rad + QUARTER_PI) * size;
		target.push(point);
		var chart = me.chart;
			end = +this.getRightValue(value[1]);

			helpers$1.canvas.drawPoint(ctx, pointStyle, radius, x, y, rotation);
		return colorString.rgbaString(this.values.rgb, this.values.alpha);
	drawBackground: function(pt, vm, ctx, tooltipSize) {
		core_defaults[chart.config.type],
		var hsl = this.values.hsl;
});
	/**
	var sv;
				if (drawColorBoxes) {
	 */
		if ((t /= 0.5) === 2) {
		return x + size.width + model.caretSize + model.caretPadding > chart.width;
		if (tooltip) {
	},
}

	/**
		}
		if (!('labels' in convert[model])) {
			afterBody: helpers$1.noop,
		return this.getScaleForId(this._getValueScaleId());
	}
	},
		};
}
};
	 * @protected
					// tickPadding is not implemented for horizontal
			}
	var caretPadding = vm.caretPadding;
 * @private
	 */

		lines = pushOrConcat(lines, splitNewlines(afterFooter));
		if (expando.resizer) {

					if (isNaN(value) || meta.data[index].hidden) {
		}
		var dataset = me.getDataset();

		list.setAttribute('class', chart.id + '-legend');
			.rgb(
		onComplete: helpers$1.noop
		var me = this;
		var findIndex;
		return numberOfLines;
		// without unexpected breaking changes. If you need to access the scale ticks,
	 * @returns {boolean}
var colorName = {

			pointStyle: options.pointStyle,
}
	var a;
				y: horizontal ? null : target
			result.push(sqrt);
 * DOM event types -> Chart.js event types.
		if (round) {
	position: 'bottom'
		} else {
// helpers
		if (me.min === me.max) {
   }
		rectangle._xScale = me.getScaleForId(meta.xAxisID);
			valueOrDefault$3(options.maxBarThickness, Infinity),

	"mediumorchid": [186, 85, 211],

 * @namespace Chart.Tooltip.positioners
		core_defaults.global,
	return {
	dataElementType: elements.Point,
			items.push(curr);

					closePath = spanGaps;
	return Math.max(spacing, 1);
	position: 'left',
		var position = options.position;
		}
			color = item.color;
					var numExponential = Math.floor(logTick) - Math.floor(logDelta);

				innerRadius: 0,
			if (!filterVisible || me.isDatasetVisible(i)) {
			hitRadius: options.hitRadius
		last = interpolate$1(table, 'time', ticks[ticks.length - 1], 'pos');
	} else
		var me = this;
			y: padding.top
			return adapter.format(toTimestamp(me, label), timeOpts.tooltipFormat);

		tick = ticks[i];
			x = me.left + (isMirrored ? 0 : tl) + tickPadding;
		var y = eventPosition.y;

	updateElement: function(point, index, reset) {
		};
// TODO(v3): change this to positiveOrDefault
	// compatibility
}
			p = 0.3;
	}
		default:
	 */
	}());
	 * @private
		if (gridLineOpts.display) {
	return [r * 255, g * 255, b * 255];
		// |----------------------------------------------------|
					totalHeight += fontSize + labelOpts.padding;
		var offsetY = 0;
	"lightyellow": [255, 255, 224],
		var data = me.getDataset().data;
	scale._pointLabelSizes = [];
	var combinedBodyLength = body.reduce(function(count, bodyItem) {
	setHoverStyle: function(arc) {
		} else {
		for (i = 0, ilen = points.length; i < ilen; ++i) {
	},
	"sandybrown": [244, 164, 96],
			center: center,
	},
		xPadding: 6,
		? ((1.055 * Math.pow(g, 1.0 / 2.4)) - 0.055)

		var optionTicks = me.options.ticks;
		leftForLtr: function(x, itemWidth) {
core_adapters._date.override(typeof moment === 'function' ? {
			var x = cursor.x;
		} else if (display) {
	});

		};
	// Get the title
			id: 'x-axis-0'
	 * @param {object} options - The chart options
			v0.index - v1.index :
		ctx.beginPath();
			}

		this.resetElements();
	/**
			return 0.5 * t * t * t * t * t;
		var me = this;
	}
		ctx.lineTo(caretPosition.x2, caretPosition.y2);
			opts.custom.call(me, model);

/**
		me.afterTickToLabelConversion();

			chart.boxes = [];
		return getConstraintDimension(domNode, 'max-height', 'clientHeight');
	"silver": [192, 192, 192],
		// Internal ticks are now stored as objects in the PRIVATE `this._ticks` member

		if (circumference < DOUBLE_PI$1) {
			// NOTE: the rounded rect implementation changed to use `arc` instead of
				return (!type || meta.type === type)
	resize: function(silent) {
			meta.index = i;
		delete Chart.instances[me.id];
		}
				if (tooltipItems.length > 0) {
function buildLayoutBoxes(boxes) {
		model.horizontal = horizontal;
}
	var value = vm.borderWidth;
}


	"thistle": [216, 191, 216],

			switch (opts.align) {
	},
		hoverBackgroundColor: 'pointHoverBackgroundColor',
			ctx.moveTo(x + yOffset, y - xOffset);
var defaultColor$2 = core_defaults.global.defaultColor;
		if (length) {
	 * @param index
		clipArc(ctx, arc);

	hsv: {channels: 3, labels: 'hsv'},
				helpers$1.nextItem(points, i, true)._model,
			// Support for any object associated to a canvas (including a context2d)
		var angle = helpers$1.toDegrees(angleRadians) % 360;
	sv = l === 0 ? (2 * smin) / (lmin + smin) : (2 * s) / (l + s);

/**

				// Draw the first index specially
	return rtl ? getRtlAdapter(rectX, width) : getLtrAdapter();
		type: 'radialLinear',
			: computeFitCategoryTraits(index, ruler, options);
	"tan": [210, 180, 140],
var log10 = helpers$1.math.log10;
}
	var skipY = y === null;
			ctx.textBaseline = 'middle';
		me.afterFit();
		}

		// the dataset.hidden value is ignored, else if null, the dataset hidden state is returned.
			for (i = 0, ilen = numMajorIndices - 1; i < ilen; i++) {
		me.min = helpers$1.min(ticks);
		me.paddingBottom = 0;
			timestamps = ilen > 1 ? arrayUnique(timestamps).sort(sorter) : timestamps.sort(sorter);
	}
		}
		if (element.inRange(position.x, position.y)) {
	var tickVal = valueOrDefault$b(generationOptions.min, Math.pow(10, Math.floor(log10(dataRange.min))));
core_defaults._set('global', {
			: adapter.parse(value);
	},
		var fontSize = labelFont.size;
	parse: function(value, format) {
		if (isHorizontal) {
	 * @todo remove at version 3
		var me = this;
					options[key]
		 */
			// Notify any plugins about the resize
		});
		chart.ctx.clearRect(0, 0, chart.width, chart.height);
		}

	},
			set: function(value) {
};
			} else {
		y: element._model.y
		var dataset = me.getDataset();
		return (rgb[0] << 16) | (rgb[1] << 8) | rgb[2];
	/**
		ctx.textBaseline = 'middle';

		}]
			return args;
		half = vm.height / 2;

			ticks[index].major = true;
		factor = Math.pow(10, helpers$1._decimalPlaces(spacing));
			tauK = 3 / Math.sqrt(squaredMagnitude);
			label: function(item, data) {
	},
		}
			}

		}
		}
		min = parse(me, getMin(options)) || min;

		}
		var angle = Math.atan2(distanceFromYCenter, distanceFromXCenter);
			ctx.closePath();
	getBasePosition: function(index) {
	} else {
		var y = reset ? scale.yCenter : pointPosition.y;
		'pointStyle',
					opts.onLeave.call(me, e.native, me._hoveredItem);
		}
	for (i = 0; i < length; ++i) {
	"gray": [128, 128, 128],
	datetime: 'MMM D, YYYY, h:mm:ss a',
	spacing = Math.ceil(spacing);
			return yScale.getPixelForValue(sumPos + rightValue);
		box = layout.box;
	valueOrDefault: function(value, defaultValue) {

		});
						longest = helpers$1.measureText(ctx, data, gc, longest, nestedThing);
			return chartjsColor(value);
var conversions_6 = conversions.xyz;

	var style = canvas.style;

		if (t < (1 / 2.75)) {
/**
		}
			meta = metasets[i].$filler;
		var adapter = me._adapter;
		(c * pure[2] + mg) * 255
					chart.draw(easingFunction(stepDecimal), stepDecimal, currentStep);
};
	 */
	var valueScale = controller._getValueScale();
		// TODO(v3): remove minSize as a public property and return value from all layout boxes. It is unused
			}
	var y = xyz[1] / 100;
			}
		};
		 * y mode returns the elements that hit-test at the current y coordinate

				// Get max width
			// _configure is called twice, once in core.scale.update and once here.
			startIndex = -1;
		// At this point, we need to update our max and min given the tick values since we have expanded the
			0);
			ticks = [];
			if (!span) {
			}
	getFooter: function() {
	// Need to override these to give a nice default
				listItemSpan.style.backgroundColor = datasets[0].backgroundColor[i];
	noop: function() {},
		var datasetOpts = me._config;

			// Load platform resources on first chart creation, to make it possible to
		var chart = me.chart;
		var expando = listener[EXPANDO_KEY] || {};
		return index >= 0 && index < ticks.length ?
		var chart = me.chart;
		return core_scale.prototype.update.apply(me, arguments);
		},
	var rmin = dataRange.min;
	"darkorange": [255, 140, 0],
	 */


		if (legend) {
function createNewTitleBlockAndAttach(chart, titleOpts) {
		meta.dataset = meta.dataset || me.createMetaDataset();
	// Where it does, we store that angle and that index.
			? adapter.parse(value, format)
	 */
		me.labelRotation = labelRotation;
			? h * cos > w * sin ? w / cos : h / sin
convert.rgb.gray = function (rgb) {
	isFullWidth: function() {
	/**
		var scale = chart.scale;
		if (chart.getDatasetMeta(datasetIndex).controller._getValueScaleId() === me.id) {
					}
			if (value !== undefined) {
		var minSize = me.minSize;
	return target;


	var i = 0;

		steps: 30


		point._index = index;

	"midnightblue": [25, 25, 112],
	hwb: {channels: 3, labels: 'hwb'},
		}

		}
			offset = me.getDistanceFromCenterForValue(me.ticksAsNumbers[index]);

	var ratio = wh + bl;
	if (yAlign === 'top') {
			this._ensureLoaded(item);
			}
		// See https://github.com/chartjs/Chart.js/issues/3575
		chart.radiusLength = (chart.outerRadius - chart.innerRadius) / (me._getVisibleDatasetWeightTotal() || 1);
		labelOffset: 0,
		me.ticks = (minIndex === 0 && maxIndex === labels.length - 1) ? labels : labels.slice(minIndex, maxIndex + 1);
		// Adjust tangents to ensure monotonic properties
	var parser = options.parser;
		// autoSkip is enabled because we don't yet know what the final number of ticks will be
/**
		ChartElement.__super__ = me.prototype;
};
		hitRadius: 'pointHitRadius',
	afterBuildLabels: noop$2,
	helpers$1.findNextWhere = function(arrayToSearch, filterCallback, startIndex) {
		}
		var gridLineOpts = opts.gridLines;

var platform_dom$1 = /*#__PURE__*/Object.freeze({
		if (helpers$1.isArray(boundary)) {
	 * @returns {boolean}
		var me = this;
		// First point moves to it's starting position no matter what
	/**
	return Math.max(maxPadding[a], chartArea[a]) + Math.max(maxPadding[b], chartArea[b]);

			}
	},
			h: (tickLabelWidth * sinRotation) + (tickFontSize * cosRotation)
	ctx.beginPath();
	"coral": [255, 127, 80],
 */

		alpha = vals.a;
			item._idx = index;

	 * @param {number} width - The rectangle's width.
	 */
				}
		// Set the unconstrained dimension before label rotation

		for (var i = 0, ilen = (me.data.datasets || []).length; i < ilen; ++i) {
	node.classList.remove(CSS_RENDER_MONITOR);
core_defaults._set('global', {
			ctx.beginPath();

		target = scale.getBasePixel();
		chartArea.y += chartArea.h;
		var options = me._resolveDataElementOptions(point, index);
					paddingLeft = firstLabelSize.width / 2;
		var me = this;
	/**
core_defaults._set('pie', {
			ctx.closePath();
			this.setValues('rgb', vals);
			left: l,
	var newWidth, newHeight;
		});
		steps: 12
		ctx.textAlign = 'center';
		}

	var paddingAndSize = caretSize + caretPadding;
			} else {

	};
			me.insertElements(numMeta, numData - numMeta);
	var minDistance = Number.POSITIVE_INFINITY;
		+ (Math.round(args[2]) & 0xFF);
		return;
	darken: function (ratio) {
		}
	/**
var ANIMATION_START_EVENTS = ['animationstart', 'webkitAnimationStart'];
		var hasTooltipContent = vm.title.length || vm.beforeBody.length || vm.body.length || vm.afterBody.length || vm.footer.length;
	 * hook, in which case, plugins will not be called on `afterLayout`.
	/**
	},
		ctx.clip();
	if (newWidth !== chartArea.w || newHeight !== chartArea.h) {
		};
			throw new Error('missing channels property: ' + model);
		if (type === 'resize') {
	 */


		var arcs = meta.data;
	unbindEvents: function() {
	tooltipPosition: function() {

	 */

		for (i = 0; i < ilen; ++i) {
		point.$previousStyle = {

					item.draw.apply(item, arguments);
	 * Recursively deep copies `source` properties into `target` *only* if not defined in target.


			return factor;
		var points = meta.data || [];
			radius: reset ? 0 : options.radius,

		var me = this;
		visited.push(fill);
		type = 'boundary';
		}
				draw: function() {
	},
		ctx.lineDashOffset = gridLineOpts.borderDashOffset || 0.0;
      }
		vals = obj;
		rectangle.pivot();
			// Determine colors for boxes
		size: 1000,
	 * @param {Chart} chart - The chart instance for which plugins should be called.
convert.ansi16.rgb = function (args) {

		lf = function(x) {
	_isPointInArea: function(point, area) {

		}
   return "hsla(" + hsla[0] + ", " + hsla[1] + "%, " + hsla[2] + "%, "
	for (i = 0, ilen = count; i < ilen; ++i) {
		me.options = config.options;
	 */
			line._scale = me._yScale;
	 */
			maxTicksLimit = maxTicksLimit || 11;
		} else {
			if (isHorizontal) {
				meta = chart.getDatasetMeta(i);
		}

	var i, ilen, layout, box;
	fit: function() {
		var me = this;
		case 5:
			} else if (key === 'scale') {

};
			extend(box, chart.chartArea);
 */
		var labelSizes = me._labelSizes;
					}
	}
// NOTE: conversions should only return primitive values (i.e. arrays, or
	var r = rgb[0] / 255;
		}
			obj[id] = false;
			t3++;

		// Point labels
		'borderDash',
	 */
		}

		me.update();
			return tickString;
core_controller.Element = core_element;
	/**
	},

			// Can have multiple items at the same distance in which case we sort by size
				y += lineHeight;
				return res;

			// Args are: (tooltipItems, data)
					: (!rotation ? 0.5 : 0) * lineHeight;
	startOf: function(time, unit, weekday) {

		} else {
}
	updateElement: function(point, index, reset) {
 * @returns {number} Size in pixels or undefined if unknown.
			val = t1;
		 * @method Chart.Ticks.formatters.values
		me.maxHeight = maxHeight;
      if (match[1] == "transparent") {

	 * @returns {number}
		grayscale = 0;

		// layers <= 0 before(default, backward compat), and the rest after
			: -1; // indexOf returns -1 if element is not present
var CSS_SIZE_MONITOR = CSS_PREFIX + 'size-monitor';
			me.max++;
   }
	if (ctx.setLineDash) {

	helpers$1.extend(this, configuration);
	destroyDatasetMeta: function(datasetIndex) {
			var currentItem = arrayToSearch[i];
		var count = (chart.data.datasets || []).length;
		if (opts.display && opts.pointLabels.display) {
	 * switch has been added to allow external stylesheet (`dist/Chart(.min)?.js`)
			style.getPropertyValue('direction'),

	}
		var numberOfLines = 1;
	percentString: function () {
	var ansi = 16
		if (opts.pointLabels.display) {
	if (helpers$1.isNullOrUndef(thickness)) {
		return adapter.format(toTimestamp(me, label), timeOpts.displayFormats.datetime);
	helpers$1.max = function(array) {



	if (value === 2) {

		// range of the scale
	return layoutBoxes;
			me.end = me.max;
		var minDistance = Number.POSITIVE_INFINITY;
	var k = cmyk[3] / 100;
	var x = xyz[0];
		});
		}
			} else if ((stepped === 'after' && !flip) || (stepped !== 'after' && flip)) {
	hover: {
	 * Note(SB): also used by mergeConfig and mergeScaleConfig as fallback.
	var scale = source.el._scale || {};
	 * - `ticks`: make sure ticks are fully visible, data outside are truncated
	update: function(chart, width, height) {
			/* falls through */
}

			h -= 1;
	orf = function(x) {
	helpers$1.splineCurveMonotone = function(points) {
	},
		var id = 0;

		}
	var y = scaleClip(yScale, halfBorderWidth);
		fontStyle: valueOrDefault$a(nestedOpts.fontStyle, options.fontStyle),
		);

	 * @private
		half = vm.width / 2;
		ctx.lineTo(caretPosition.x1, caretPosition.y1);
		return me.minSize;
			drawBorder(ctx, vm, arc);
		chart.innerRadius = Math.max(chart.outerRadius * cutout, 0);
		if (node.parent === null) {
	 */

			return alignPixel(chart, pixel, axisWidth);
		return max;
		}
		var paddingLeft = parseFloat(helpers$1.getStyle(canvas, 'padding-left'));

	render: function(config) {
	}
			}
		var rotation = 0;
	for (diff = arr[0], i = 1; i < len; ++i) {
		highestLabelSize = Math.max(height, highestLabelSize);
	],
			borderColor: model.borderColor,
			});
		};
	var supports = false;
	 * @private
	"lightcoral": [240, 128, 128],

	getIndexAngle: function(index) {
			min = Math.min(start, end);

	draw: function() {
		var element = meta.data[items[0]._index];

	},
	"brown": [165, 42, 42],

	}
		}
		ratio = options.barPercentage;
			base: center - size / 2,
		core_scale.prototype.initialize.call(this);
	// assume sRGB
		// method, for example: https://github.com/kkapsner/CanvasBlocker
		if (type === 'resize') {
	var currentClosestKeyword;
		return style;
		deprecated('bar chart', scaleOpts.categoryPercentage, 'scales.[x/y]Axes.categoryPercentage', 'dataset.categoryPercentage');

	},
		ctx.quadraticCurveTo(x, y, x + radius, y);
			generateLabels: function(chart) {
				canvas.setAttribute(prop, value);
	},
		'click',

			return true;
	if (circular) {
		i1 = table[mid];
			size = radius - cornerRadius;

						title = item.xLabel;
	//
		var index = helpers$1.findIndex(this.animations, function(animation) {
			return min;
   }
	return (font.style ? font.style + ' ' : '')

});
 * Helper function to get relative position for an event
	b = Math.min(Math.max(0, b), 1);

		for (i = 0, ilen = points.length; i < ilen; ++i) {
		}
			l = +value.left || 0;
		} else if (numData > numMeta) {
	 * is called with `context` as first argument and the result becomes the new input.
	// {r: 255, g: 255, b: 255, a: 0.4}
	height += footerLineCount * (footerFontSize); // Footer Lines
		var args = {

					numberOfLines = thing.length;
 * @namespace Chart.Legend
			}
		'mousemove',
		 * @param {Event} e - the event we are find things at

	},
		me.height = me.maxHeight;
			_datasetIndex: me.index
					});
		me.afterFit();
		}
	"brown": [165, 42, 42],
	acquireContext: function(item) {
	}
		var me = this;
	} else if (model.y > (chart.height - size.height)) {
	 * This identifier is used to invalidate the descriptors cache attached to each chart
	 */
				// If too tall, go to new column


		var indexOpts = me._getIndexScale().options;
			me._active = [];
		};
	/**
		var titleOpts = chart.options.title;
 */
		var options = me.options;
	"hotpink": [255, 105, 180],
	 * @private
		var sumNeg = 0;
		if (arc.endAngle === arc.startAngle && arc.fullCircles) {
	insertElements: function(start, count) {
			return;
 * @deprecated since version 2.7.3
		intersect: true,
		};
	var y = arc.y;
 * @deprecated since version 2.7.0
			(2 * Math.PI) / count
			if (align === 'center') {
	// Get maximum radius of the polygon. Either half the height (minus the text width) or half the width.
	scatter: controller_scatter
		var elementOptions = me._dataElementOptions;
		ctx.font = labelFont.string;

			}
		}
			}
		case 'star':

	r = r > 0.0031308
	},
	lab: {channels: 3, labels: 'lab'},
	 * @private
		var minIndex = 0;
	 * @param {HTMLCanvasElement} canvas - The Canvas element.
			s = p / (2 * Math.PI) * Math.asin(1 / a);
			if (el && el.hasValue()) {
		var tickOpts = me.options.ticks;
		var custom = point.custom || {};
	var m;
				borderWidth = options.borderWidth;
	 */
	"mediumvioletred": [199, 21, 133],

			right: me.paddingRight || 0,
		}
	},
		} else {
	return this;
		if (!isNullOrUndef$1(value)) {

		var opts = me.options;
		core_animations.cancelAnimation(this);
		var x = boundary ? boundary.x : null;
	/**
	var l = lab[0];
	var opts = scale.options;
	helpers$1.sign = Math.sign ?

	 * @return {string}
		}
	l /= 2;
	var string = integer.toString(16).toUpperCase();

	setDimensions: function() {
		// Dimensions
			} else if (minSign > 0 && maxSign > 0) {
		original = [
			box.top = y;
		fullWidth: true,
	initialize: function() {
	/**
	// `offsetParent` property will force a reflow and re-evaluate the CSS animation.
	}
		for (i = 0; i < ilen; ++i) {
	"darkslategrey": [47, 79, 79],
	 */
		for (i = 0, ilen = items.length; i < ilen; ++i) {
		var devicePixelRatio = chart.currentDevicePixelRatio;
			barPercentage: 0.9
			x: vm.x,
		var pixels = [];

		var elementOptions = me._datasetElementOptions;
}
		prev = items[i - 1];
					return {options: yAxisOptions, dtype: 'linear', dposition: 'left'};
		ctx.bezierCurveTo(
	 * @param {Chart} chart - the chart in which the item lives (or will be added to)
	var titleFontSize = model.titleFontSize;
	};
	}
	var minor = parseFontOptions(options, options.minor);

		 * @private

helpers$1.extend(Element.prototype, {

		}
	 * Data distribution along the scale:
                 (a >= 0 && a < 1)
			backgroundColor: defaultColor,
		drawTicks: true,
				fn.call(thisArg, loopable[keys[i]], keys[i]);
function readUsedSize(element, property) {
			y: bounds.top + border.t,
		var opts = chart.options;
				offsetGridLines: true
function determineUnitForFormatting(scale, numTicks, minUnit, min, max) {
		return me._getLabels()[index];
	 */
		return [rmin, rmax];
		case 3: r = wh; g = n; b = v; break;
				controller.reset();

		var titleOpts = chart.options.title;
	},
			// data points
			var labelColors = [];

	},
	 * Currently used by platform.js to select the proper implementation.
		if (h < 0) {

	/**
	var len = arr.length;
						datasetIndex: meta.index
		xLinePadding = drawColorBoxes && bodyAlignForCalculation !== 'right'
		var s01 = d01 / (d01 + d12);
		for (i = 0, ilen = arcs.length; i < ilen; ++i) {
			label = me.getRightValue(value);
			meta.data.splice(numData, numMeta - numData);
			value = moment(value);
	var x1, x2, y1, y2, half;
	var v;
					} else {
				params.push(descriptor.options);
		if (canvas) {


		var me = this;
			borderWidth: 3,

		var valueInPixels;
		model.yAlign = alignment.yAlign;
		 * @todo remove at version 3
					height: fontSize
	determineDataLimits: function() {

	getAfterBody: function() {
		'maxBarThickness',
 */

				y: current.y - fa * (next.y - previous.y)
		var total = 0;
		}
		return this._plugins.length;
	"darkgrey": [169, 169, 169],

	//
			}
	 * the {@link IEvent} interface) when an event of the specified type occurs.
		return isVertical(vm)
	},
	 * @param {object} target - The target object in which all sources are merged into.
			dataset: dataset,
		return this.options.position === 'top' || this.options.position === 'bottom';
			null;
				controller: null,
				y1 = ptY + height;
			ctx.font = tickFont.string;


	return ticks;
			x: Math.cos(thisAngle) * distanceFromCenter + me.xCenter,
	legendCallback: function(chart) {
				listItem = list.appendChild(document.createElement('li'));
		var me = this;
	},
		var gcLen = gc.length / 2;
// generators
 * Computes an "optimal" category that globally arranges bars side by side (no gap when

			}
var isNullOrUndef$2 = helpers$1.isNullOrUndef;
	return fn;

	},
	}
	var prev, curr, i, ilen;
	},
			}
	 * Returns the aligned pixel value to avoid anti-aliasing blur
			meta.type = type;

		gdif = diffc(g);
		this.getMeta().data.splice(index, 0, element);
	},
			p = 0.45;
	} else {
	"darkorange": [255, 140, 0],
		delete convert[model].channels;
			model.x = tooltipPosition.x;
   if (!string) {
			}
			x2 = chartArea.right;
		var values = helpers$1.extend({}, core_datasetController.prototype._resolveDataElementOptions.apply(me, arguments));
		point.$previousStyle = {
	},
			var scale = null;
		display: true,
					}

			: h * sin < w * cos ? h / cos : w / sin;
	var gdif;
	"blueviolet": [138, 43, 226],
		};
		}

	drawDatasets: function(easingValue) {
	 * @private
		return 'center';
	};
core_defaults._set('scatter', {
				helpers$1.canvas.unclipArea(ctx);
	return wrappedFn;
		ctx.lineJoin = vm.borderJoinStyle || globalOptionLineElements.borderJoinStyle;
		var points = meta.data || [];
	var i, value;


		chartArea.x += chartArea.w;
	return mappers[type](source);
		var me = this;
		chart.ctx.scale(pixelRatio, pixelRatio);
	bindEvents: function() {
var RAD_PER_DEG = PI / 180;
	// Any function can be extended by the scale type
		me.setDimensions();
	"crimson": [220, 20, 60],
			mouseY = e.clientY;
		ctx.arc(x, y, arc.innerRadius - pixelMargin, endAngle + angleMargin, startAngle - angleMargin, true);
	};
		// Add the chart instance to the global namespace
	if (!length) {
		}
			y: vm.y
	easeOutCirc: function(t) {
	elements: {
	beforeBuildLabels: noop$2,

		start: reverse ? max : min,
	defaults: {},
	 * @private
		// If the calculated num of spaces exceeds maxNumSpaces, recalculate it
				x = pixel;
	var first, last;
	// joining the two area curves
		if (vm.borderWidth > 0) {
		var decimal = 0;
	},
	getDatasetAtEvent: function(e) {
			}
	// Args are: (tooltipItem, data)
					}
	},

core_controller.helpers = helpers$1;
	year: {
			// Prevent the bezier going outside of the bounds of the graph
				});
			if (me.isHorizontal()) {
		var labels = chart.data.labels;
			}];
	_cacheId: 0,
		return el.currentStyle ?

		next = Math.round(start + count * spacing);
	watchForRender(node, function() {
		var globalOptionLineElements = globalDefaults.elements.line;

	},
		 * @function Chart.Interaction.modes.intersect
	var h;

		deprecated$1('time scale', time.format, 'time.format', 'time.parser');
		if (length === 1) {
		backgroundColor: tooltipOpts.backgroundColor,
	} else {
		var gc = cache.gc;
			ctx.fillStyle = tickFontColor;
	of strings, each with the steps in between the 'from' and 'to'
		label: indexMode,
	},
			y: y,

	},
		} else {

		},

		var cursor;
		var caretSize = vm.caretSize;
		var meta = me.getMeta();
	var layoutBoxes = [];
	var i, diff;
		if (isVertical(vm)) {
		var me = this;

				if (gridLines.drawOnChartArea) {
		} else {
var Rectangle = element_rectangle;

	},
	}
	 * @private

		if (value > me.min && value > 0) {



   }
var getRtlHelper = helpers$1.rtl.getRtlAdapter;
		for (i = 0, ilen = items.length; i < ilen; ++i) {
	return [l, c, h];



		var w2 = 1 - w1;
	};
		};
		for (i = 0; i < layers.length && layers[i].z <= 0; ++i) {
		var getHoverColor = helpers$1.getHoverColor;
		if (ticks.length === 1) {

					numExponential = Math.max(Math.min(numExponential, 20), 0);
		model = element._model;
	}
	_plugins: [],
			// Check if within the range of the open/close angle
		| (Math.round(g / 255) << 1)
	var titleLineCount = model.title.length;
		return res;
		}
		t3 = h + 1 / 3 * -(i - 1);
 * @return {string} The CSS font string. See https://developer.mozilla.org/en-US/docs/Web/CSS/font


	}
		value = parser(value);
		return colorString.hslaString(this.values.hsl, this.values.alpha);
	};
			} else {
		var rgb = [];

	hue %= 1;


				value = value[index];
		if (yAlign === 'center' && xAlign === 'left') {
					backgroundColor: view.backgroundColor
	 * @param {number} x - A number.
		// |    |    |----|                           |----|    |
			break;
		var tooltip = me.tooltip;
var defaultConfig$4 = {
			me.active = me.getElementsAtEventForMode(e, hoverOptions.mode, hoverOptions);
		tickMarkLength: 10,
	},
 */
		}
		me.beforeUpdate();
	],
			outerHeight: height,
		addListener(node, type, proxy);
				previous = helpers$1.previousItem(points, index);
		var ticks = me.ticks = generateTicks(numericGeneratorOptions, me);
	},
		titleAlign: 'left',
					target[prop] = value.slice(0);
		var result = [];
	var maxPadding = chartArea.maxPadding;
					x = cursor.x = me.left + alignmentOffset(legendWidth, lineWidths[cursor.line]);
			for (datasetIndex = 0; datasetIndex < datasets.length; datasetIndex++) {
			for (index = 0; index < points.length; ++index) {
		// Tick Rotation
	radar: controller_radar,
				} else {

		? marginForPositions(['left', 'right'])
		drawFullCircleBorders(ctx, vm, arc, inner);
		offsets.push(lineHeight / 2);
		index: index,

function arrayUnique(items) {
		if (info.cacheable) {

				pointCurrent.model.controlPointPreviousX = pointCurrent.model.x - deltaX;
		}
		return this.setChannel('cmyk', 2, val);
		var plugins = [];
			listeners[type] = listener;
			bottom: chartArea.top + chartArea.h
		ctx.font = scaleLabelFont.string;
		for (; i < ilen; ++i) {
			helpers.merge(tval, sval, options);
						text: datasets[meta.index].label,
	 * @returns {number} The aligned pixel value.
			helpers$1.callback(animationOptions && animationOptions.onComplete, [animation], me);
		return {
	b = 200 * (y - z);

	var scale = source.el._scale || {};
	var expando = rootNode[EXPANDO_KEY] || (rootNode[EXPANDO_KEY] = {});
					&& (isHorizontal ? meta.xAxisID === me.id : meta.yAxisID === me.id);
		};
	},
			}
	}
function sortByWeight(array, reverse) {
				ctx.beginPath();
	var furthestAngles = {};
		return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * (2 * Math.PI) / p));
		var capacity = Math.floor(me.isHorizontal() ? me.width / size.w : me.height / size.h);

		};
				me._eventPosition = {
	 * @param {number} width - the width to fit into
		var i, imeta, ivalue, base, head, size, stackLength;
	var f;
       match = string.match(abbr),
		// If the chart's circumference isn't a full circle, calculate size as a ratio of the width/height of the arc

	/**
		}
					return data.labels.map(function(label, i) {
				lineWidth = valueAtIndexOrDefault(gridLines.lineWidth, i, 1);
	}
			var maxSign = helpers$1.sign(me.max);
					datasets[i] = labels.slice(0);
	},

	drawFooter: function(pt, vm, ctx) {

			x: bounds.left + border.l,

	 * @returns {*}
	}
			me.getDatasetMeta(datasetIndex).controller.reset();
	},
			return +value;
var resolve$1 = helpers$1.options.resolve;
	if (offsetGridLines) {

		var me = this;

			// autoskipper skipped this tick (#4635)
		me.xCenter = Math.floor(me.width / 2);
				order: dataset.order || 0,
	"sienna": [160, 82, 45],
	}
		var timeOpts = options.time;
		footerSpacing: 2,
	var h;
		 * @function Chart.Interaction.modes.y
			break;
	defaultFontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
		return this.bottom;
	"royalblue": [65, 105, 225],
			plugins.push(plugin);
	// on each side, removing that from the size, halving it and adding the left x protrusion width.
				return window.setTimeout(callback, 1000 / 60);
			bottom: b,
			model.title = me.getTitle(tooltipItems, data);

			}];
	},
		major: {
		var animations = this.animations;


	 * https://github.com/sass/libsass/blob/0e6b4a2850092356aa3ece07c6b249f0221caced/functions.cpp#L209
 * @todo remove at version 3
	},


		me.minNotZero = Number.POSITIVE_INFINITY;
		},


	 */
			return rectX + rectX + width - x;
		if (core_plugins.notify(me, 'beforeLayout') === false) {
		// After init plugin notification
		if (xAlign === 'left') {
		// by following the pattern laid out by 'jerryj' in the comments of
	unclipArea: function(ctx) {
       hexAlpha = "";
	 */

	 * - `data`: make sure data are fully visible, ticks outside are removed
		var i, ilen, v0, v1;

	}
		 */
	"aqua": [0, 255, 255],
			var rtlHelper = getRtlHelper(vm.rtl, vm.x, vm.width);
			return (Math.pow(mouseX - vm.x, 2) < Math.pow(vm.radius + vm.hoverRadius, 2));
			});
function scaleClip(scale, halfBorderWidth) {


			// Titles
		var vm = this._view;
				// Undefined labels and arrays should not be measured
		cache = caches[fontString] = caches[fontString] || {data: {}, gc: []};
	var tickOpts = scale && scale.options.ticks || {};
		var afterTitle = callbacks.afterTitle.apply(me, arguments);
 * @private
		if ((t /= 0.5) < 1) {
 * index [0, 1] or [n - 1, n] are used for the interpolation.
				x: x === null ? point.x : x,


	getLabelForIndex: function(index, datasetIndex) {


	return [h, sl * 100, l * 100];
});
	var unit = stepSize || 1;

	var graph = buildGraph();
		color: helpers$1.options.resolve([nestedOpts.fontColor, options.fontColor, core_defaults.global.defaultFontColor])
	_getValueScale: function() {
};
	},
			me.height = me.maxHeight;
			me._start = null;
		core_scale.prototype._configure.call(me);
		}
					top: 0,
			ctx.moveTo(x + yOffset, y - xOffset);
		footerFontColor: '#fff',
		if (!i0) {
moment = moment && moment.hasOwnProperty('default') ? moment['default'] : moment;
		'borderJoinStyle',
	arrayEvents.forEach(function(key) {
		var datasetOpts = me._config;
	},



	var z2 = Math.pow(z, 3);
var CSS_RENDER_MONITOR = CSS_PREFIX + 'render-monitor';
		var labels = convert[model].labels;
				xAxisID: null,
/**

	"violet": [238, 130, 238],
					tickFont.size + tickOpts.backdropPaddingY * 2
		}
   }

			ctx.moveTo(x - xOffset, y - yOffset);
		me.afterCalculateTickRotation();
		var meta = me.getMeta();
		return computeCircularBoundary(source);
	var f = 0;
	 */


					borderColor: view.borderColor,
			var position = getRelativePosition(e, chart);
		var pointLabelFontColor = valueAtIndexOrDefault$1(pointLabelOpts.fontColor, i, core_defaults.global.defaultFontColor);
		if (time === null) {
				ctx.rotate(rad);
	case 'zero':
		var context = {
	} else
		};
	 * Returns true if `value` is an array (including typed arrays), else returns false.
	register: function(plugins) {
		}
			}

		},
	createMetaDataset: function() {
	 */

   var a = (a !== undefined && rgba.length === 3) ? a : rgba[3];
	 * @param {*} source - The value to clone.
		'This method is not implemented: either no adapter can ' +
			// Valid properties to return:

		var hasCNode = isConstrainedValue(constrainedNode);
		rotation: 'pointRotation'
		var config = me._config;
	},
var title = plugin_title;
		labelString: '',
		scale._pointLabelSizes[i] = textSize;
		top: y1,
	 */
};
	},
			} else if (fraction < 3) {
 * called on the 'onData*' callbacks (e.g. onDataPush, etc.) with same arguments.
	"lemonchiffon": [255, 250, 205],
var noop = helpers$1.noop;
				hitboxes[i] = {
		if (d0 && d1) {
function nonNegativeOrDefault(value, defaultValue) {
      rgb[i] = scale(rgb[i], 0, 255);
	/**
      rgb = colorName$1[match[1]];
		this.mergeTicksOptions();

	 * Dataset element option keys to be resolved in _resolveDatasetElementOptions.
			tick = ticks[i] || {};
		ctx.arc(arc.x, arc.y, arc.innerRadius, arc.endAngle, arc.startAngle, true);
 * axis mode setting
	var expando = node[EXPANDO_KEY] || {};

		var me = this;
				return !pt._model.skip;
		if (!isValidKey(key)) {
	 * @private


	center = scale.getPointPositionForValue(0, start);


		ticks.push(Math.round((niceMin + j * spacing) * factor) / factor);
		}
		return this._getRingWeightOffset(this.chart.data.datasets.length);


	"slategrey": [112, 128, 144],

		return bodyItems;
	/**
		var majorUnit = me._majorUnit;
		} else {

		// making the chart visually bigger, so let's enforce it to the "correct" values.
	 * Note: pixel values are not clamped to the scale area.
	var prev = index > 0 ? pixels[index - 1] : null;

	},
		}

function determineAlignment(tooltip, size) {
	return [l, a, b];
			if (context !== undefined && typeof value === 'function') {
		rf = function(x) {


	 * @param {number} max - the input timestamp (reference)

		hoverBackgroundColor: 'pointHoverBackgroundColor',
		values.minBarLength = valueOrDefault$3(valueOpts.minBarLength, values.minBarLength);
		var options = this.options;
	el.className = cls || '';
      for (var i = 0; i < rgb.length; i++) {
		// current position

						lineJoin: style.borderJoinStyle,
	//
var valueOrDefault$b = helpers$1.valueOrDefault;
 * @deprecated since version 2.8.0
				continue;
			ctx.fillStyle = vm.titleFontColor;
				if (index !== 0) {
	 * @param {ILayoutItem} item - the item to add to be layed out

			},
					ctx.strokeRect(rtlHelper.leftForLtr(x, boxWidth), y, boxWidth, fontSize);
		};

		}
 * `minor` unit using the given scale time `options`.

	};
			var labelSizes = me._getLabelSizes();
	"darkgoldenrod": [184, 134, 11],
	var hash = {};
		// |    |----|-------------------------------------|----|
		clipArc(ctx, arc);
		var custom = point.custom || {};
		if (!matches || matches[1] === 'normal') {
		var dataset = me.getDataset();
	},
			legendItems = legendItems.filter(function(item) {
			}
	"linen": [250, 240, 230],
	},

			if (pointBefore && !pointBefore.model.skip) {
	return [r * 255, g * 255, b * 255];

		});
				doFill(ctx, points, mapper, view, color, el._loop);
	 */

			config = {
	 * @private
		return longest;
		 * @private
	},
		// Boolean - Whether we animate scaling the Doughnut from the centre

	/**
				(options.scales.xAxes || []).map(function(xAxisOptions) {
		helpers$1.each(tooltipItems, function(tooltipItem) {
	_computeTickLimit: function() {

			// hidden : if this legend item refers to a hidden item
			// Reset position before calculating rotation
		model.borderWidth = valueOrDefault(options.hoverBorderWidth, options.borderWidth);
	/**
		// plugins options references might have change, let's invalidate the cache
	 * Note(SB) for performance sake, this method should only be used when loopable type
				var isRotated = me.labelRotation !== 0;
			bottom: 0,
	/**
			}
}
		yAxes: [{
};
	var result = [];
		var outer = rects.outer;

    var alpha = parseFloat(match[4]);

	}
	_computeTickLimit: function() {
	}
		}
	"cyan": [0, 255, 255],
   hslString: hslString,
	var i, unit;
var conversions_5 = conversions.cmyk;
						var meta = chart.getDatasetMeta(0);
	},
		};

	 * See https://github.com/chartjs/Chart.js/issues/5208
		model.x = horizontal ? reset ? base : vpixels.head : ipixels.center;

			borderWidth: 1,
		}
		if (timeOpts.tooltipFormat) {
		return me.chart._getSortedVisibleDatasetMetas()

convert.lab.xyz = function (lab) {
	 * @function Chart.helpers.aliasPixel

			weight: null,
				}
	/**


		items.ticksLength = ticksLength;
	var diffc = function (c) {
helpers$1.options = options;
		common: true,


						timestamps.push(timestamp);
	var val = (rgb[0] + rgb[1] + rgb[2]) / 3;
		end: reverse ? min : max
	var c = hcg[1] / 100;
		}
		for (i = 0, ilen = me.getMeta().data.length; i < ilen; ++i) {
 * @function Chart.helpers.indexOf

	var timeOpts = options.time;

			me.start = me.min;

		case 'triangle':
	/**

				total += Math.abs(value);
var conversions_10 = conversions.keyword;
			}
				pointCurrent.model.controlPointNextX = pointCurrent.model.x + deltaX;
			// Support for array based queries (such as jQuery)
		}
		return this.setChannel('hsl', 2, val);
	},
		var starts = me._starts = [];

		// ticks is empty for old axis implementations here

		return this.getPointPosition(index, this.getDistanceFromCenterForValue(value));
		var ilen = metasets.length;
		var points = me._children.slice(); // clone array
		thisArg = thisArg || this;
		logarithmic: function(tickValue, index, ticks) {

};
var UNITS = Object.keys(INTERVALS);
			lh = me.legendHitBoxes;
			ctx.closePath();
	mergeTicksOptions: function() {
			hitRadius: options.hitRadius,
	var c = lch[1];
	// Labels are in an incompatible format and no `parser` has been provided.
	var smin = s;
	 */
	return [gray[0], 0, 0];
			items.push({
				var data = chart.data;
		 * @return {string|string[]} the label to display
		// return true if chart area changed in layout's direction
	beforeInit: function(chart) {
	getPointPositionForValue: function(index, value) {
			return 0;
	datasets: {
function getMin(options) {
		line._datasetIndex = me.index;
	var start = scale._startPixel;
			size: size
	}
		var scaleLabelFont = helpers$1.options._parseFont(scaleLabel);
		if (sname !== space) {
	],
			// If the canvas is in a shadow DOM, then the styles must also be inserted
				// move the bottom down to 0
   var match = string.match(hsl);
	getValueForPixel: function(pixel) {
	},
		me.afterUpdate();
	// DEPRECATIONS
		var distribution = options.distribution;

	};
		return this.setChannel('cmyk', 3, val);
		// Find Active Elements for hover and tooltips
		me.paddingLeft = 0;
	this.setValues(space, vals);
	for (i = 0, ilen = boxes.length; i < ilen; ++i) {
	blackness: function (val) {
		placeBoxes(boxes.rightAndBottom, chartArea, params);
	/**
		ctx: chart.ctx,
	toJSON: function () {
		helpers$1.extend(arc, {
		me.max = helpers$1.max(ticks);
				offsetGridLines: true
   }
	if (inner) {
			},
		common: true,
function parseFontOptions(options, nestedOpts) {
	} while (exp < endExp || (exp === endExp && significand < endSignificand));
		var animationOptions = me.options.animation;
	ctx.clip();
	},
			// Make sure we draw text in the correct color and font
	},
		var xAlign = vm.xAlign;
			x = tp.x;
		value = scale._parseValue(data[i]);
	 * @param {CanvasRenderingContext2D} ctx - The canvas 2D Context.
		return svalues[index];
                 ? hexDouble(Math.round(a * 255))
		horizontal: top.concat(bottom)
	_dataElementOptions: [
		} else {
	}
				}
		var gridLineOpts = opts.gridLines;
	},
			minSize.height = me.maxHeight; // fill all the height
	/**
			tick = ticks[i];
		var vm = this._view;
		var chartArea = extend({

			return me.getRightValue(chart.data.datasets[datasetIndex].data[index]);
		for (i = 0, ilen = points.length; i < ilen; ++i) {

	afterSetDimensions: noop$2,

		} else {
		}
			mouseX = touches[0].clientX;

	// Boolean - Whether to animate the rotation of the chart
	},

				count++;
				unlistenArrayEvents(me._data, me);
			items.push({
	_configure: function() {
			maxPadding: extend({}, padding),
	_drawGrid: function() {
	if (chroma < 1) {
		}
	for (var i = scale.chart.data.labels.length - 1; i >= 0; i--) {
		// Point where the caret on the tooltip points to
	}
	return [hue * 360, chroma * 100, grayscale * 100];
   if (match) {
			me.width = minSize.width = me.height = minSize.height = 0;
	});
		} else {
var controller_bar = core_datasetController.extend({
	},

			me.render(bufferedRequest);
	},

	return [r, g, b];

		'backgroundColor',

	 * @private
			while (angle > endAngle) {
		return this.values.hsl;
	easeInOutQuad: function(t) {
	hwb: ['hue', 'whiteness', 'blackness'],
		var val = rgb[0] * 0.3 + rgb[1] * 0.59 + rgb[2] * 0.11;
core_controller._adapters = core_adapters;
		return {
		/**
		align: 'center',
		d0 = isDrawable(p0);

			len = keys.length;
	getValueForPixel: function(pixel) {
	y /= 100;

		if (!isNullOrUndef$2(min) && helpers$1.almostWhole(min / spacing, spacing / 1000)) {
		core_plugins.notify(me, 'afterDatasetsUpdate');
		var rtlHelper = getRtlHelper$1(opts.rtl, me.left, me.minSize.width);
		// Stops any current animation loop occurring
		yAlign = 'top';
	},

		var isHorizontal = me.isHorizontal();
		me.maxHeight = maxHeight;
				cursor.y += itemHeight;
		var alignBorderValue = function(pixel) {
		r: skip.right || (r < 0) ? 0 : r > maxW ? maxW : r,

					for (i = 0, ilen = data.length; i < ilen; i++) {
	level: function (color2) {


			}
			meta = dataset._meta[me.id] = {
			for (i = 0; i < arc.fullCircles; ++i) {
			me.updateElement(arcs[i], i, reset);
			// can help to figure out that the chart is not valid (e.g chart.canvas !== null);

	 * @private
	var args = [];
	scales: {
	var g = (((color >> 1) & 1) * mult) * 255;

			// Generates labels shown in the legend
	for (i = 0, ilen = items.length; i < ilen; ++i) {
				me.min = DEFAULT_MIN;
			return;
convert.hcg.rgb = function (hcg) {
		];
	if ('conversion' in fn) {
			listItemSpan.style.backgroundColor = datasets[i].backgroundColor;
	 */
				if (i + 1 === length) {
 * 'unshift') and notify the listener AFTER the array has been altered. Listeners are
function unlistenArrayEvents(array, listener) {
		common: true,
			return;
};
		var tickOpts = opts.ticks;
var colorConvert = convert;
		if (!helpers$1.isFinite(x)) {
var valueOrDefault$1 = helpers$1.valueOrDefault;

	 */
	 */

			createNewTitleBlockAndAttach(chart, titleOpts);
}

		core_plugins.notify(me, 'afterInit');
	if (ratio > 1) {



	/**
	keyword: {channels: 1, labels: ['keyword']},
	var height = bounds.bottom - bounds.top;
	/**
		}
		_footerFontFamily: valueOrDefault$8(tooltipOpts.footerFontFamily, globalDefaults.defaultFontFamily),
	calculateBarValuePixels: function(datasetIndex, index, options) {
	for (i = 1; i < len0; ++i) {
 * Provided for backward compatibility, use Array.prototype.indexOf instead.
		widths.push(width);

		return this;

var core_helpers = function() {
	} else {

	easeOutSine: function(t) {


				], context, index, info);
	 * @private
		// Make sure that max is strictly higher than min (required by the lookup table)
			type: 'category',
	/**
   getHsl: getHsl,
	time: scale_time
		model.backgroundColor = valueOrDefault$6(options.hoverBackgroundColor, getHoverColor(options.backgroundColor));
		var hLimits = determineLimits(angle, pointPosition.x, textSize.w, 0, 180);
			colorValue :

			angle = me._computeAngle(i);
var TWO_THIRDS_PI = PI * 2 / 3;
	afterSetDimensions: noop$1,
			break;
		 * @param {IInteractionOptions} options - options to use
		return Math.round((pixel - halfWidth) * devicePixelRatio) / devicePixelRatio + halfWidth;
		 * x mode returns the elements that hit-test at the current x coordinate
	}
			me.bottom = me.height;
			} else {
	style.display = style.display || 'block';

(global = global || self, global.Chart = factory(global.moment));

		// Dimensions
			ctx.lineTo(x + xOffset, y + yOffset);
	 * @param {number} timestamp - the timestamp to format
		// Add quarter circle to make degree 0 mean top of circle
		var maxTop = topMovement + me.drawingArea;
		if (index !== -1) {
				y: y === null ? point.y : y,
	getValueForPixel: function(pixel) {
	"yellow": [255, 255, 0],

			ctx.moveTo(x - xOffset, y - yOffset);
 * @private

	/**


	},
		ctx: chart.ctx,
	}

			}
	var min = scale._length;
		}
		if (canvas.style.height === '') {


		var me = this;


 * labels where offset indicates the anchor point offset from the top in pixels.
var src = core_controller;
		// Set the unconstrained dimension before label rotation
		}, Number.POSITIVE_INFINITY);
		if (lineValue < start - epsilon || lineValue > end + epsilon) {
		}
		} else {
		return me;
			ctx.closePath();
		var labels = data.labels;


};
			} else if (me.max < 1) {

		var hsl = this.values.hsl;
			count++;
		var points = meta.data || [];
	_type: 'line',
	var integer = ((Math.round(args[0]) & 0xFF) << 16)
		return effects.easeOutBounce(t * 2 - 1) * 0.5 + 0.5;
	}
			pos[i] = 100;
					visible: chart.isDatasetVisible(i),
		if (!start.hasOwnProperty(key)) {
 * @param {Event|IEvent} event - The event to get the position for
		// |----------------------------------------------------|
		});
   else if (vals = getHwb(string)) {
		'borderWidth'
	buildOrUpdateElements: function() {
			tx2 = me.left + tl;
							strokeStyle: style.borderColor,
var valueAtIndexOrDefault$1 = helpers$1.valueAtIndexOrDefault;
		helpers$1.extend(arc, {

				// if it is an array lets measure each element
	 */
		} else if (helpers.isObject(loopable)) {
			for (i = 0, ilen = points.length; i < ilen; ++i) {
		}



		}
	"springgreen": [0, 255, 127],
		var me = this;

		};
				if (!isNullOrUndef(nestedLabel) && !isArray(nestedLabel)) {
	}
	var major = options.major.enabled ? parseFontOptions(options, options.major) : minor;
	rotate: function (degrees) {
			return -0.5 * (Math.sqrt(1 - t * t) - 1);
			xAlign = 'center';
		var length = value.start === undefined ? value.end : value.max >= 0 && value.min >= 0 ? value.max - value.min : value.min - value.max;
			// micro-opt, but this is simple.

	}
core_controller.helpers.each(scales, function(scale, type) {
	pie: controller_pie,
	"olive": [128, 128, 0],


			maxLabelDiagonal = Math.sqrt(maxLabelWidth * maxLabelWidth + maxLabelHeight * maxLabelHeight);

		var area = chart.chartArea;
		var gc = cache.garbageCollect = cache.garbageCollect || [];
convert.apple.rgb = function (apple) {
		var ruler = me._ruler || me.getRuler();
	"grey": [128, 128, 128],
		var me = this;

			var box = layout.box;
		 * @method Chart.Ticks.formatters.linear
	},
      }
		hsl[1] += hsl[1] * ratio;
		var lineColor = valueOrDefault$c(angleLineOpts.color, gridLineOpts.color);
	},
	function marginForPositions(positions) {
	getPixelForTick: function(index) {

					me.max = Math.max(me.max, maxVal);
				helpers$1.previousItem(points, i, true)._model,
 * @memberof Chart._adapters._date
      alpha = (hsla[3] !== undefined ? hsla[3] : 1);
					chart: chart,
		var tickOpts = me.options.ticks;
			if (data && Object.isExtensible(data)) {
	// Do NOT use mergeConfig for the data object because this method merges arrays
	// Helper function for different modes
		: r * 12.92;

				value = core_defaults.global.defaultColor;
		var ticksLength = ticks.length + (offsetGridLines ? 1 : 0);
		// Title
convert.cmyk.rgb = function (cmyk) {
			}
		var data = dataset.data[index] || {};
              + (
		var i, len;
			rotation: options.rotation,
			var lineWidths = me.lineWidths = [0];
	 * @param elements {Chart.Element[]} the tooltip elements
	},
		var me = this;

var platform_basic = {
		} else {
		this._plugins = [];
	/**
		ctx.save();
		for (i = 0; i < ilen; ++i) {
			}
		labels: {
		return [g * 255, g * 255, g * 255];
	tooltipPosition: function() {

				me.min = Math.pow(10, Math.floor(log10(me.min)) - 1);
					return true;
		this.setValues('rgb', [val, val, val]);
	 * to be manually imported to make this library compatible with any CSP.
/**
		// clear up discarded scales
			if (!opts.onHover && !opts.onLeave) {
	return graph;
// DEPRECATIONS
			x: mouseX,

	beforeFit: noop$1,
		return this.getValues(space);
		// http://scaledinnovation.com/analytics/splines/aboutSplines.html
	return [hcg[0], f * 100, v * 100];
		var me = this;
				ticks.push({

	"lightseagreen": [32, 178, 170],
	},
		fontFamily: valueOrDefault$a(nestedOpts.fontFamily, options.fontFamily),
	});

	 */
	return str;

/**
		}

		var me = this;
function getHsl(string) {
			get: function() {
		var chart = me.chart;
		var meta = this.getMeta();

	},
		me.margins = margins;
		 */
		// Finally update boxes in chartArea (radial scale for example)
		me.ctx = context;
core_defaults._set('global', {
	var type = 'dataset';
			y: y / count
		var radius = vm.radius;
		var view = me._view;
							lineWidth: style.borderWidth,
		base = scale.getPixelForValue(start);
	}

		var fonts = parseTickFontOptions(optionTicks);
		var labelOpts = me.options.labels || {};
			me.left = 0;
		var beforeFooter = callbacks.beforeFooter.apply(me, arguments);
				top: clip.top === false ? 0 : area.top - clip.top,
			point.angle = scale.getIndexAngle(i) - Math.PI / 2;
	"deepskyblue": [0, 191, 255],
		}
	get: function() {
// Loading built-in plugins
		var paddingTop = parseFloat(helpers$1.getStyle(canvas, 'padding-top'));
		return (pixelWidth % 2 === 0) ? 0 : 0.5;

			}
 * @deprecated since version 2.6.0
		if (r < 8) {
	 * @private
		}
			points = points.filter(function(pt) {
		h = 0;
			borderWidth: options.borderWidth,
			// If the line has a close path, add the first point again
	return diff;
		// only add points that breaks the scale linearity
			me.max = me.min !== 0
		var bufferedRequest = me._bufferedRequest;
	if (yAlign === 'center') {
		};
		hoverBorderColor: 'pointHoverBorderColor',
		}
	if (stepSize || isNullOrUndef$2(precision)) {
	// wh + bl cant be > 1
		Math.pow(x[2] - y[2], 2)
		// Default includes circle

		t2 = l * (1 + s);
					}
		width = height = 0;
		// Absorb the master measurements

	var layoutBoxes = wrapBoxes(boxes);
		arc: {
		}
	restoreTextDirection: restoreTextDirection,

			rotation: options.rotation,
			// Generate labels using all non-skipped ticks
					width + tickOpts.backdropPaddingX * 2,
	 * @see https://stackoverflow.com/a/14853974
	};
		'rotation'


		if (valueCategory !== undefined || (value !== undefined && isNaN(index))) {
 * @param {string} axis - the axis mode. x|y|xy
	var reversed = reverseKeywords[rgb];

		var duration = valueOrDefault$9(config.duration, animationOptions && animationOptions.duration);
			s = p / 4;
	beforeSetDimensions: noop$2,
		var stepSize = tickOpts.stepSize;
		x -= size.width;


	},
	"lightgoldenrodyellow": [250, 250, 210],
		var xScale = me.getScaleForId(meta.xAxisID);
	var border = parseBorderWidth(vm, width / 2, height / 2);
	 * Allows data to be referenced via 't' attribute
if (typeof window !== 'undefined') {
}
function getBoxWidth(labelOpts, fontSize) {
});
		point: function(chart, e) {
	"mediumpurple": [147, 112, 219],

		// Positioning
		start: start
	clone: function(source) {
		} else {
			me.right = me.width;
function percentaString(rgba, alpha) {
	},
			y: vm.y + (Math.sin(centreAngle) * rangeFromCentre)
	},
function determineMajorUnit(unit) {
		// Auto-skip
			meta = metasets[i];

	"chocolate": [210, 105, 30],
// https://en.wikipedia.org/wiki/Breadth-first_search
			updated[id] = true;
		var chart = me.chart;
	if (max === min) {
			this.drawFooter(pt, vm, ctx);
		}
			var keys = Object.keys(source);
	config = config || Object.create(null);
		maxPadding.bottom = Math.max(maxPadding.bottom, boxPadding.bottom);
		if (timestamps.length) {
		point._xScale = xScale;
function sorter(a, b) {
	var halfBorderWidth = borderWidth / 2;


			console.error('Color.js not found!');
			var yMiddle = y + halfFontSize;
				me.min = 0;
	hsvArray: function () {
}
		}
	return {
	// Used to get data value locations.  Value can either be an index or a numerical value
	return [r * 255, g * 255, b * 255];
	 * @deprecated since version 2.8.0
	var g = rgb[1] / 255;
			core_plugins.notify(me, 'resize', [newSize]);
		ratio: ratio,
	 * @private
		var i, ilen, key, readKey;
				if (!helpers.arrayEquals(v0, v1)) {
	var midX = (chartArea.left + chartArea.right) / 2;
	for (i = 0, ilen = layouts.length; i < ilen; ++i) {
var conversions_3 = conversions.hsv;
	return point && !point.skip;
	"gray": [128, 128, 128],
};
		'borderAlign',
		var a = 1;
			me._data = data;
			);

	chart.options = chart.config.options = newOptions;
   var vals = getRgba(string);
	average: function(elements) {
		for (i = 0, ilen = ticks.length; i < ilen; ++i) {
/**



	 * The default merger when Chart.helpers.merge is called without merger option.

	 * @private
		var y = 0;

			lineHeight = font.lineHeight;
	"purple": [128, 0, 128],
						var style = meta.controller.getStyle(i);

		}
 * @deprecated since version 2.8.0
	"darkslateblue": [72, 61, 139],
	/**
		for (i = metasets.length - 1; i >= 0; --i) {
	}
		outer: {
	ctx.closePath();
	var i, ilen, layout, box, refit, changed;
	 * @param {object} arg1 - Object containing additional properties to merge in target.
	_configure: function() {
			beforeLabel: helpers$1.noop,
var element_rectangle = core_element.extend({
	determineDataLimits: function() {
	};

   if (alpha < 1 || (hsla[3] && hsla[3] < 1)) {

		ticks.push(time);
		h: lineHeight
		var tickOpts = me.options.ticks;
	z = y - b / 200;
   return rgba && rgba.slice(0, 3);
	helpers$1.distanceBetweenPoints = function(pt1, pt2) {
		return isPowerOf10 ? powerOf10 : exponent;

	this.construct(item, config);
	var ctx = scale.ctx;
	 * https://github.com/chartjs/Chart.js/pull/2640
			skip(ticks, spacing, last, helpers$1.isNullOrUndef(avgMajorSpacing) ? ticks.length : last + avgMajorSpacing);

	var hue;
				hasStacks = meta.stack !== undefined;
				helpers$1._merger(key, target, source, options);

	"lightpink": [255, 182, 193],
		var adjacents = Object.keys(conversions[current]);
			y: Math.sin(thisAngle) * distanceFromCenter + me.yCenter
	if (inner) {

		}
	return Array.prototype.indexOf.call(array, item, fromIndex);
	beforeUpdate: noop$1,
					return data.labels.map(function(label, i) {

	return [c * 100, m * 100, y * 100, k * 100];
				if (label) {
/**
   else if (match = string.match(hex)) {
			ratioX = (maxX - minX) / 2;
		for (var i = 0; i < rgb.length; i++) {
		callbacks: {
			this.setValues('hsl', vals);
		var options = me.chart.options;
		return false;
	}
		});
			count++;
	 */
		};
			index = index || 0;
		var x1, x2, x3, y1, y2, y3;

		footerFontStyle: 'bold',

	 * @method getPadding
function generate(scale, min, max, capacity) {
 * Generates a maximum of `capacity` timestamps between min and max, rounded to the

 */
	});

				var offsetLeft = me.getPixelForTick(0) - me.left;
			// Desired view properties
		displayFormat: false, // DEPRECATED
			for (i = 0; i < length; ++i) {
						helpers$1.merge(target[key][i], [core_scaleService.getScaleDefaults(type), scale]);

		cache = cache || {};
		yAxes: [{
			y2 = chartArea.bottom;

		}
	expand.appendChild(createDiv());
   getHwb: getHwb,
	 * Removes the specified listener previously registered with addEventListener.

		'hoverBorderWidth',
/**
	// -- Canvas methods
		expand.scrollLeft = maxSize;
		mouseY = Math.round((mouseY - boundingRect.top - paddingTop) / (height) * canvas.height / chart.currentDevicePixelRatio);
	"blanchedalmond": [255, 235, 205],
		}
	 * @todo Support font.* options and renamed to toFont().
			if (lineValue === undefined) {
		return Math.max(valueOrDefault$5(this.chart.data.datasets[dataSetIndex].weight, 1), 0);
			backgroundColor: options.backgroundColor,
		}
		return this;
		radiusReductionRight = numberOrZero(radiusReductionRight);

		} else {
	},
		return this;
		var updated = Object.keys(scales).reduce(function(obj, id) {
	},
	return [0, 100, gray[0]];
}
		this.getMeta().data.pop();
		} else {
	construct: function(item, config) {
		var size = valueOrDefault(options.fontSize, globalDefaults.defaultFontSize);
		if (vm) {
			return target;
 * Provided for backward compatibility, not available anymore.
		// Is tooltip too wide and goes over the right side of the chart.?
		var offsets = me._offsets;
			width: 0,

	numSpaces = Math.ceil(rmax / spacing) - Math.floor(rmin / spacing);
	"lightgrey": [211, 211, 211],
				return align;
			min = value;


	// Body width

		var gcLen = gc.length / 2;
		autoSkip: false,
	cmyk: [100, 100, 100, 100]
			y1 = chartArea.top;
		var existingModel = me._model;
	 */
	"plum": [221, 160, 221],
	tooltipPosition: function() {
		helpers$1.each(vm.afterBody, fillLineOfText);
		mode: 'label'
}

		helpers$1.canvas.lineTo(ctx, curve1[i], curve1[i - 1], true);
			ctx.font = helpers$1.fontString(footerFontSize, vm._footerFontStyle, vm._footerFontFamily);
				deltaX = (pointAfter.model.x - pointCurrent.model.x) / 3;
						lineCap: style.borderCapStyle,
	};
			if (items.length > 0) {

	].join('.');

 * @private

	var w = hwb[1] / 100;
		var chart = me.chart;
		}

		var me = this;
				if (d < minDistance) {

			height: 0

			// closer proportion to the previous impl and it is inscribed in the
		return this.setChannel('cmyk', 1, val);
	var newOptions = chart.options;
		}
}
var CSS_PREFIX = 'chartjs-';
		delete convert[model].labels;
	},
	return [(apple[0] / 65535) * 255, (apple[1] / 65535) * 255, (apple[2] / 65535) * 255];

		case 2:
		? computeMinSampleSize(ruler.scale, ruler.pixels)
	return graph;
		var titleBlock = chart.titleBlock;
	},
		// assuming that values to clone are 1 dimension arrays containing only numbers,
function createCommonjsModule(fn, module) {
		});
convert.hsl.rgb = function (hsl) {

			points[i].pivot();
	},
	setHoverStyle: function(point) {
	},
function getPixelForGridLine(scale, index, offsetGridLines) {
var element_arc = core_element.extend({
		var scaleLabelOpts = opts.scaleLabel;

		}
	 * @private
	 * @private
		borderDashOffset: 0.0
	"palevioletred": [219, 112, 147],

	 * Recursively deep copies `source` properties into `target` with the given `options`.
	},
		common: true,
				}
};
			betaK = pointAfter.mK / pointCurrent.deltaK;
		var max = me.max;
			me.width = me.maxWidth;
					target[key] = [];


		var alignPixel = helpers$1._alignPixel;
			gc.push(string);
	} else {
		var ilen = arrayOfThings.length;
	},
			if (!opts.onClick) {
	},
			return;

			ctx.closePath();
				: DEFAULT_MAX;
	}
			platform.addEventListener(me, type, listener);
	 * Unregisters the given plugin(s) only if registered.
	},
		}
	 * @function Chart.Tooltip.positioners.average
	},
	return pushOrConcat([], splitNewlines(callback));
	 */
	 * @returns {string[]} The list of stack IDs
	return n && n['default'] || n;
			var pointRelativePosition = helpers$1.getAngleFromPoint(vm, {x: chartX, y: chartY});
		// it's ok that coordinates are not correct there, only dimensions matter.
		var first = majorIndices[0];
		borderWidth: 'pointBorderWidth',
	light: function () {

	hr = Math.atan2(b, a);
	/**
	y = (1 - b - k) / (1 - k) || 0;
		 */
		var tickPadding = optionTicks.padding;
	// https://gist.github.com/paulirish/5d52fb081b3570c81e3a#box-metrics
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
		ctx.save();
	} else if (angle < min || angle > max) {
			)
		}
		b: skip.bottom || (b < 0) ? 0 : b > maxH ? maxH : b,
	"darkcyan": [0, 139, 139],
		}
	}
	} else if (val === svalues[index]) {
		enabled: true,

				// Ensure that our ticks are always inside the canvas. When rotated, ticks are right aligned
	},
		// which breaks any animations.
			}
		ctx.closePath();
	var y;


		me._updateElementGeometry(rectangle, index, reset, options);
	return wrappedFn;
		var s = 1.70158;
	 * Returns a deep copy of `source` without keeping references on objects and arrays.
			return x;

	"paleturquoise": [175, 238, 238],
			view = el._view;
	for (i = 0, ilen = scale.getTicks().length; i < ilen; ++i) {

	var c = hcg[1] / 100;
	}));
		return to(from(args));
		 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
				}
		significand = Math.floor(dataRange.minNotZero / Math.pow(10, exp));
		this._lastActive = [];
		return moment(max).diff(moment(min), unit);


		var ticks = this.tickValues;
	},
		return this;
			avgMajorSpacing = numMajorIndices > 1 ? (last - first) / (numMajorIndices - 1) : null;

		var color2 = mixinColor;
	var range = lookup(table, skey, sval);
		var optionTicks = options.ticks;
	"darkgreen": [0, 100, 0],
				}
	adapters: {},
	"aliceblue": [240, 248, 255],
	helpers$1.extend(DateAdapter.prototype, members);
		this.insertElements(0, arguments.length);

			ty2 = borderValue - axisHalfWidth;
			if (v0 instanceof Array && v1 instanceof Array) {

			v1 = a1[i];
	removeEventListener: function() {}
	},
	"dimgrey": [105, 105, 105],
	var MIN_SPACING = 1e-14;
			if (isNullOrUndef(label)) {
		zeroLineBorderDashOffset: 0.0,
			alignment = determineAlignment(this, tooltipSize);
			return false;

		return false;
				if (data.labels.length && data.datasets.length) {

			ratioY = (maxY - minY) / 2;
	 * @private
function inRange(vm, x, y) {
			// make the logic easier and remove some useless? custom code.
		var me = this;

	// Let's keep track of this added resizer and thus avoid DOM query when removing it.
		var params = Object.freeze({
					datasetOpts[key],
		xAxes: [{
core_controller.LinearScaleBase = scale_linearbase;
	ctx.beginPath();
	return align === 'center'
		helpers$1.each(chart.data.datasets, function(dataset, datasetIndex) {
			key = elementOptions[i];
	 */
		if (me.minNotZero === null) {
				return;
		var me = this;
		ctx.font = tickFont.string;
		return this._getScaleLabel(this.chart.data.datasets[datasetIndex].data[index]);

		// |    |    |                                     |    |
			// Args are: (tooltipItems, data)
	var pixelMargin = arc.pixelMargin;
		ratio = 1;


	isObject: function(value) {
			me.beginAtZero ? 0 :
	defaults: {},
				outerRadius: outerRadius,
		}
			chart: chart,

	},
		+ Math.round(b / 255 * 5);

		}
	 * @private
			model[key] = hoverOptions[key];
		}
			for (datasetIndex = 0; datasetIndex < datasets.length; datasetIndex++) {

	 * @todo remove at version 3

	"deepskyblue": [0, 191, 255],
helpers$1.scaleMerge = mergeScaleConfig;
	var horizontal;
		});
			if (animations[i].chart === chart) {

		var powerOf10 = Math.round(exponent);
		var maxRotation = tickOpts.maxRotation;
	h = hr * 360 / 2 / Math.PI;
	chart.ensureScalesHaveIDs();
		var me = this;
		var me = this;
	"navy": [0, 0, 128],
	},
		// Figure out what the max number of ticks we can support it is based on the size of
		}
			pushOrConcat(bodyItem.after, splitNewlines(callbacks.afterLabel.call(me, tooltipItem, data)));
		}
   }
			height: 0
			startAngle += startAngle >= PI$1 ? -DOUBLE_PI$1 : startAngle < -PI$1 ? DOUBLE_PI$1 : 0;
			scale.weight = scale.options.weight;
		var custom = element.custom || {};
				} else {
		}
		if (t < (2.5 / 2.75)) {
	 * An empty function that can be used, for example, for optional callback.
		return helpers_core.merge(this[scope] || (this[scope] = {}), values);
}
				label: label,
				startAngle: reset && animationOpts.animateRotate ? datasetStartAngle : startAngle,
	},

			ctx.closePath();

					+ (isRotated ? 0 : lineSpace); // padding
					y += tickFont.lineHeight;
		},
	} else if (vals[spaces[space][0]] !== undefined) {
	/**
		}
		]);
		me.linkScales();
		onHover: null,
	 * @param {object} [info] - object to return information about resolution in
		return Math.ceil(this.drawingArea / getTickBackdropHeight(this.options));
		// Boolean - if true, show point labels
 * @return new tooltip item
		displayColors: true,

		var animations = this.animations;
	ctx.closePath();
core_controller.Title = plugins.title._element;
			},
	setHoverStyle: function(arc) {
		var startAngle = opts.rotation; // non reset case handled later
			? vm.x + vm.width - vm.xPadding
		'Bar',
		// Scale mouse coordinates into canvas coordinates
      if (hexAlpha) {
 * @private
				// used in polar area & radar charts since there is only one scale
				} else {
		// At this point, we need to update our max and min given the tick values since we have expanded the
	"forestgreen": [34, 139, 34],
		var tickOpts = options.ticks;
			me.canvas = null;

		var sampleSize = tickOpts.sampleSize;
	 */
			offsetX = -(maxX + minX) / 2;
		me.aspectRatio = height ? width / height : null;

	 * @private



		}
	// Background Position
				}
		var me = this;
   rgbString: rgbString,

	/**
				params = [chart].concat(args || []);
   percentString: percentString,
	zeroLineIndex: 0,
         a = Math.round((parseInt(hexAlpha, 16) / 255) * 100) / 100;
	/**

		'fill'
		// color.red(color.red())
		ctx.stroke();
function lookup(table, key, value) {
			// given value is outside table (before first item)

		var backgroundPoint = {
		});

	},
	// returns Number or undefined if no constraint
convert.gray.rgb = function (args) {
		me.canvas = canvas;
	inYRange: function(mouseY) {
convert.hsv.hsl = function (hsv) {
		t = value.top;
};

		return 'left';
	buildLabels: function() {
		var aspectRatio = (options.maintainAspectRatio && me.aspectRatio) || null;
core_tooltip.positioners = positioners_1;
       hex =  /^#([a-fA-F0-9]{6}([a-fA-F0-9]{2})?)$/i,
		helpers$1.each(points, function(point, index) {
				ctx.arc(left, top, r, -PI, 0);
	var i, ilen, layout;
	createMetaData: function(index) {
	_create: function(time) {
		this.insertElements(start, arguments.length - 2);
	transition: function(easingValue) {
		var spanGaps = vm.spanGaps;
		var ctx = this._chart.ctx;
		// Make sure dataset controllers are updated and new controllers are reset
		var total = this.getMeta().total;
		};
	}
	 * @private

		vals[space.charAt(i)] = values[space][i];
	var reverse = tickOpts.reverse;
	/**
		if (typeof value === 'string' && typeof format === 'string') {
	var values = this.values;
/**

				container.insertBefore(resizer, container.firstChild);
		if (!box.fullWidth) { // fullWidth boxes don't need to be re-fitted in any case
			}
		// color.red()
}
var getAdapter = function(rtl, rectX, width) {
			for (i = 0, ilen = points.length; i < ilen; ++i) {
				ctx.restore();
		// tooltip._start will be null when tooltip isn't animating

	update: function(maxWidth, maxHeight, margins) {
		me.longestLabelWidth = 0;
		var items = me._gridLineItems || (me._gridLineItems = me._computeGridLineItems(chartArea));
 */
			if (me.min === null) {

	return a - b;
			}
				}


	ticks: {
 * @private
		}
	var adapter = scale._adapter;
	}
		pointLabels: {
		};
		alpha = vals[space.length];
	animation: {

		var meta = me.getMeta();
var conversions_12 = conversions.ansi256;
	var bounds = getBarBounds(vm);
	}
		var x, y;
	"darkred": [139, 0, 0],

		}
		if (this._data) {
			item = document.getElementById(item);
			alignedLineValue = alignPixel(chart, lineValue, lineWidth);
core_controller.Interaction = core_interaction;
	}
		var centerX = scale.xCenter;
				ctx.arc(right, top, r, -HALF_PI, HALF_PI);
		} else if (vals.c !== undefined || vals.cyan !== undefined) {
						cosRotation * firstLabelSize.width + sinRotation * firstLabelSize.offset :
	helpers$1.getStyle = function(el, property) {

			var adjacent = adjacents[i];
	},
			if (opts.onHover && hoveredItem) {
 * Released under the MIT License
					y = cursor.y += itemHeight;

		var method = 'onData' + key.charAt(0).toUpperCase() + key.slice(1);
		// {red: 10, green: 10, blue: 10}
			hitboxes[i].left = rtlHelper.leftForLtr(realX, hitboxes[i].width);




		var me = this;

		var me = this;
	if (color === 0 || color === 7) {
	return el;
				model.controlPointPreviousX = controlPoints.previous.x;
	/**

function getDistanceMetricForAxis(axis) {
				box._configure();
 */
		maxLabelHeight = labelSizes.highest.height - labelSizes.highest.offset;
		// Boolean - Show a backdrop to the scale label
 * @namespace Chart.helpers.scaleMerge
	var r = rgb[0];
	/**
		var current = queue.pop();
	 * Chart.Title obsolete. To avoid a breaking change, we export the Title as part of


				y = cursor.y = me.top + alignmentOffset(legendHeight, columnHeights[cursor.line]);
}
				continue;
 */
		}


					if (nestedThing !== undefined && nestedThing !== null && !helpers$1.isArray(nestedThing)) {
	var first = min;
};
			}
			} else {

		var metasets, i;
		lines = pushOrConcat(lines, splitNewlines(afterTitle));
		config.options || {});
					break;

	var style, original;
		}
	parseVisibleItems(chart, function(element) {
			: scale.getBasePosition(i);

	"limegreen": [50, 205, 50],
			break;
			yAlign: existingModel.yAlign
function garbageCollect(caches, length) {

		 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
			helpers$1.each(bodyItem.before, fillLineOfText);

function boundingRects(vm) {

	};

	return true;
	circumference: DOUBLE_PI$1,
			pointAfter = pointsWithTangents[i + 1];
}
			_index: index,

			return 7.5625 * (t -= (1.5 / 2.75)) * t + 0.75;
		var me = this;
	var s = hsl[1] / 100;
		me.ticks = null;
		backdropPaddingY: 2,
 * been performed. This method uses the computed style of `element` but returns undefined
// DEPRECATIONS
	horizontalBar: controller_horizontalBar,
	 * @private
		size = thickness * count;
					// We just make sure the multiline element is a string here..
function getAlpha(string) {
	}
				if (!target[key]) {
helpers_core.clear = exports$1.clear;
		var model = me._model = getBaseModel(opts);
				type: null,
		chart: chart,
 * @deprecated since version 2.9.0
				if (rawValue.x !== undefined) {
		onProgress: helpers$1.noop,
	var g = (integer >> 8) & 0xFF;
	};
			total = NaN;
		arc.$previousStyle = {
	"darkmagenta": [139, 0, 139],
	 * Draws dataset at index unless a plugin returns `false` to the `beforeDatasetDraw`
			for (i = 0, len = active.length; i < len; ++i) {

	}
		left: x.start

			var distanceMetric = getDistanceMetricForAxis(options.axis);
		}
			for (i = 0, ilen = (chart.data.datasets || []).length; i < ilen; ++i) {

		me._drawGrid(chartArea);
					var rtlColorX = rtlHelper.x(colorX);

	 * @param {HTMLElement} domNode - the node to check the constraint on
		var newWidth = Math.max(0, Math.floor(helpers$1.getMaximumWidth(canvas)));

var deprecated$1 = helpers$1._deprecated;
			} else {
			line._datasetIndex = me.index;
	rotation: -HALF_PI$1,
		// |    |    | C3 |                           | C4 |    |
	var endAngle = arc.endAngle;
			target[key] = helpers.clone(sval);
		// Return the scale defaults merged with the global settings so that we always use the latest ones
						if (isNaN(value.min) || isNaN(value.max) || meta.data[i].hidden || value.min < 0 || value.max < 0) {
	}
	y = y > 0.008856 ? Math.pow(y, 1 / 3) : (7.787 * y) + (16 / 116);
		var rgb = this.values.rgb;
	} else if (rf(model.x)) {
		helpers$1.each(chart.scales, function(scale) {
		this.setValues('hsl', hsl);
};
		meta.count = me.countVisibleElements();


					};
		}
	},
	 * @param {number} width - The width of the element.
			scale.position = scale.options.position;
}
});

	/**
	var b;
	b = b > 0.04045 ? Math.pow(((b + 0.055) / 1.055), 2.4) : (b / 12.92);
var helpers_rtl = {
	// #4737: Chrome might skip the CSS animation when the CSS_RENDER_MONITOR class
		ratio: options.barPercentage,
		if (t === 1) {
		maxRotation: 50,

		while (i < animations.length) {
		return !isNaN(parseFloat(n)) && isFinite(n);
		this._update(true);
		var id = this.id;
	 * @param {Chart.Animation} animation - The animation that we will animate.
		//
			var i, ilen, meta;
		var toModel = models[i];
				ctx.lineWidth = 2;
/**
function drawBorder(ctx, vm, arc) {
			// Skip if the pixel is out of the range
		fill = target.fill;
			helpers$1.each(newControllers, function(controller) {
			}
			type: 'linear',
		point._index = index;
			helpers$1.requestAnimFrame.call(window, function() {
			right: 0,
		var reversePixels = me.options.ticks.reverse;

	},
};
				var slen = source[key].length;


			parent = parent.host;
					intersectsItem = true;
		scale_linearbase.prototype.convertTicksToLabels.call(me);
			pointAfter = i < pointsLen - 1 ? pointsWithTangents[i + 1] : null;

	var l = lch[0];
				// If we assumed wrong and something else happened, we are resizing
	// optimization here; we already know the value and don't need to get
		if (t === 1) {
	// Scale registration object. Extensions can register new scale types (such as log or DB scales) and then
			top: me.paddingTop || 0,


		}
		'borderColor',
			return;
			var totalHeight = 0;
	niceMax = Math.ceil(rmax / spacing) * spacing;
			display: false
   var r = Math.round(rgba[0]/255 * 100),
			initCanvas(item, config);
		var me = this;
	for (i = 0; i < length; ++i) {
 * @prop {function} isHorizontal - returns true if the layout item is horizontal (ie. top or bottom)
			}
	var end = scale._endPixel;
	// preserve .conversion property if there is one
			});
		var dataset = me.getDataset();
		}
		var footer = callbacks.footer.apply(me, arguments);
	helpers$1.almostEquals = function(x, y, epsilon) {
		// this layout was already counted for, lets first reduce old size
			var label = helpers$1.callback(me.options.pointLabels.callback, arguments, me);
		}
	var a;

		// BACKWARD COMPAT: synchronize `_ticks` with labels (so potentially `this.ticks`)

	 */
				lineColor = valueAtIndexOrDefault(gridLines.color, i, 'rgba(0,0,0,0.1)');
		position.y -= (textSize.h / 2);
		var animationOpts = opts.animation;
				model.tension
		}
					ctx.moveTo(item.x1, item.y1);
			// https://github.com/chartjs/Chart.js/issues/5763
	 * @param {Chart} chart - The chart for which to clear the canvas.
		return 0.5 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2);
		 * @todo remove at version 3
	var out = [];
		} else {
	linear: scale_linear,

	getValueForPixel: helpers$1.noop,
			gridLines: {
		if (!canvas[EXPANDO_KEY]) {
		var i, ilen, listItem, listItemSpan;
			mouseY = touches[0].clientY;
		var format = displayFormats[timeOpts.unit] || displayFormats.millisecond;
		};
					if (!target[key][i].type || (scale.type && scale.type !== target[key][i].type)) {
					ctx.fillText('' + label[j], 0, y);
		me.tooltip = new core_tooltip({
			me.updateElement(point, index, reset);
		type = typeof target;


	if (obj instanceof Color) {
				left: clip.left === false ? 0 : area.left - clip.left,
});
	xyz: {channels: 3, labels: 'xyz'},
	 * @param {number} [weekday] - the ISO day of the week with 1 being Monday

		var datasetIndex, meta, value, data, i, ilen;
	 * @param {number} [last] - The dataset index
		for (var i = 0, ilen = this.data.datasets.length; i < ilen; ++i) {
	"darkolivegreen": [85, 107, 47],
	},

	},
		if (!chart) {
		}
		(c * pure[1] + mg) * 255,
	 * Returns true if the point is inside the rectangle
		model.borderWidth = valueOrDefault$6(options.hoverBorderWidth, options.borderWidth);
		window.addEventListener('e', null, options);
		// Common base implementation to handle ticks.min, ticks.max
				if (element.inRange(position.x, position.y)) {
		 * @param {IInteractionOptions} options - options to use during interaction

			return;
				delete data[gc[i]];


		var minSize = Math.min(chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);
	updateHoverStyle: function(elements, mode, enabled) {

		target = sources[fill];
		var opts = me.options;
		size: 2.628e9,
		var points = meta.data || [];
		var maxTicks;
};

		return helpers.merge(target, [].slice.call(arguments, 1), {
					stackLength = scale._parseValue(datasets[imeta.index].data[index]);
};
	/**

				}
		var me = this;
	widthPadding = model.displayColors ? (bodyFontSize + 2) : 0;
		// Number - The backdrop padding above & below the label in pixels
	},
		// http://en.wikipedia.org/wiki/Grayscale#Converting_color_to_grayscale
		// Draw the points

		var x = reset ? scale.xCenter : pointPosition.x;
		return false;
			radius: options.radius,
/**
		} else if (source === 'labels') {
		}
	// Shared Methods
	g = Math.min(Math.max(0, g), 1);

		if (isNaN(value.min) || isNaN(value.max) || meta.data[i].hidden) {
		return this.setChannel('hsl', 1, val);
 * @return {number} width of the color box area
		'borderColor',
		me.beforeUpdate();
			};
			var i, ilen, meta;
		}
		s = c / (2 * (1 - l));
		var previous = firstPoint.skip ? middlePoint : firstPoint;
		return list.outerHTML;
	var v = hi % 1;
	},
		switch (matches[3]) {
		return (t === 1) ? 1 : -Math.pow(2, -10 * t) + 1;
				return (dimension - blockSize + labelOpts.padding) / 2;
		right: r,
			ticking = true;
		return 1 - effects.easeOutBounce(1 - t);
		// Remove styling for last active (even if it may still be active)
};
 * @param dataRange the range of the data
		var tickOpts = me.options.ticks;
				}
		for (; i < ilen; ++i) {
	}
			me.top = 0;
			helpers.extend(ChartElement.prototype, extensions);
		items.borderValue = borderValue;
function getBarBounds(vm) {
 */
			values[sname] = colorConvert[space][sname](values[space]);
		return isNaN(ch) ? h : Math.min(h, ch);
		vals = Array.prototype.slice.call(args);
/**
	 * the [W3C Canvas 2D Context API standard]{@link https://www.w3.org/TR/2dcontext/}.
		var canvas = me.canvas;
		size = head - base;
	 */
	var i, interval, factor;
				me.request = null;
			box.left = x;
			core_layouts.removeBox(chart, legend);
		};
		}
			x = chart.width - size.width;
	 * @private
	}
			var endAngle = vm.endAngle;
		var values = {};
	var b = rgb[2] / 255;



		display: true,
		return target;
			clip = meta.dataset._model.clip;
			}
	 */
		widestLabelSize = Math.max(width, widestLabelSize);
		lines = pushOrConcat(lines, splitNewlines(footer));
			}
	},
	onDataUnshift: function() {
	 */
   if (alpha === undefined) {
		},
		var extra = (i === 0 ? tickBackdropHeight / 2 : 0);

var reverseNames = {};
				labelColors.push(opts.callbacks.labelColor.call(me, tooltipItem, me._chart));
		box = boxes[i];

	var y = vm.y;
	apple: {channels: 3, labels: ['r16', 'g16', 'b16']},
				me.scale = scale;
		var element, i, ilen;

			return false;
	// sure that `node` is attached to the DOM before injecting the resizer element.
 * See https://en.m.wikipedia.org/wiki/Euclidean_distance#Squared_Euclidean_distance
	 * Registers the specified listener on the given chart.
	delete expando.resizer;
			} else {
		if (curr > min && curr < max) {
			ctx.lineWidth = axisWidth;
			ctx.lineTo(x - yOffset, y + xOffset);

		}
	 * @since 2.7.0

}
		// Draw body lines now
 * Provided for backward compatibility, use Chart.helpers.easing.effects instead.
var element_line = core_element.extend({
	"midnightblue": [25, 25, 112],
				continue;
		}, me);
			pointPosition = scale.getPointPosition(i, radius);
				x1 = ptX;
	 */
		}
			console.warn(scope + ': "' + previous +

	initToolTip: function() {
	} else if (l <= 0.5) {
	 */
			ctx.fillText(text[i], position.x, y);
		var valueOrDefault = helpers$1.valueOrDefault;
	pivot: function() {
/**
	// assume sRGB
		if (e.type === 'mouseout') {

		return this.setChannel('hsv', 1, val);
	newOptions = mergeConfig(
		scale.max = Math.max(scale.max, value.max);

		var me = this;

		capped = Math.max(0, Math.min(maxes[space][i], values[space][i]));
		: marginForPositions(['top', 'bottom']);
	"darkgray": [169, 169, 169],
		['height', 'width'].forEach(function(prop) {
		var hsl = this.values.hsl;
		if (!ticking) {
	for (i = 0, ilen = factors.length - 1; i < ilen; i++) {
				me.paddingTop = firstLabelSize.height / 2;
				ctx.moveTo(left, y);
		var model = point._model;

	"papayawhip": [255, 239, 213],
function parseBorderSkipped(vm) {
		}
		var pointsWithTangents = (points || []).map(function(point) {

	return '000000'.substring(string.length) + string;
		var displayFormats = timeOpts.displayFormats;
		'hoverBackgroundColor',
Color.prototype.setValues = function (space, vals) {
	var shrink = createDiv(CSS_SIZE_MONITOR + '-shrink');


				hoverWidth = options.hoverBorderWidth;
	spacing = Math.ceil(spacing);
	//

			}
		}
				? me.left + halfLineHeight + scaleLabelPadding.top
		var getHoverColor = helpers$1.getHoverColor;
		var length = title.length;
		};



	var validIndex = Math.min(index, length - 1);
};
		me.innerRadius = me.outerRadius - chart.radiusLength;
var MAX_INTEGER = Number.MAX_SAFE_INTEGER || 9007199254740991;
	},
	// old browsers
	}
			return animation.chart === chart;


		return -t * (t - 2);

		var me = this;
		if (!view) {
	"mediumblue": [0, 0, 205],


	var distanceMetric = getDistanceMetricForAxis(options.axis);
				custom[readKey],
		});
		core_plugins.notify(me, 'afterDatasetsDraw', [easingValue]);
				x: centerX + chart.offsetX,
	},

		var me = this;
			starts[i] = start;
			val %= 360;
			core_plugins.notify(me, 'afterRender');
			values = helpers$1.extend({}, values);
				view[key] = origin + (target - origin) * ease;

// INTERNAL: static default options, registered in src/index.js

		return formatter ? formatter(label, index, ticks) : label;
		var options = me.options;
core_controller.PluginBase = core_controller.Element.extend({});
	beforeBuildLabels: noop$1,

				y1: y1,
				continue;
			}
		me.minSize = {
	}
	if (!match) {
	return {

			return UNITS[i];

		deprecated('bar chart', scaleOpts.barPercentage, 'scales.[x/y]Axes.barPercentage', 'dataset.barPercentage');
	beforeUpdate: noop$2,
		if (i === next) {
			rtlHelper.setWidth(me.minSize.width);
				target[key] = mergeScaleConfig(tval, sval);
	},
		animation.duration = duration;
			// The container size might have changed, let's reset the resizer state.
		var exponent = Math.log(x) * Math.LOG10E; // Math.LOG10E = 1 / Math.LN10.
 * would need to work on multiple charts?!
		return null;
	 * @private
	if (chroma <= 0) {
	return [0, 0, args[0]];
		tickWidth = options.offset ? me.maxWidth / numTicks : maxWidth / (numTicks - 1);
	if (max === g) {
		placeBoxes(boxes.leftAndTop, chartArea, params);
		var labels = me._getLabels();

 * Initializes the canvas style and render size without modifying the canvas display size,
	 */
			y1 = alignBorderValue(chartArea.top) + axisHalfWidth;
		} else if (vals = colorString.getHwb(obj)) {
	convertTicksToLabels: function() {
		radiusReductionLeft = numberOrZero(radiusReductionLeft);
 * @private
		return this.setChannel('rgb', 1, val);
				cursor.x += width + labelOpts.padding;

	case 'origin':
			Math.floor(largestPossibleRadius - (radiusReductionLeft + radiusReductionRight) / 2),
	},
		var ticks = this.getTicks();
	"sienna": [160, 82, 45],
		ctx.lineWidth = vm.borderWidth * 2;
				ctx.setLineDash(resolve$4([angleLineOpts.borderDash, gridLineOpts.borderDash, []]));
	 */
				if (!scaleClass) {
		var vm = this._view;
	routeModels.forEach(function (toModel) {
			width: widths[idx] || 0,
			if (isHorizontal) {
		// IE 9 and 10 do not support line dash
			hitRadius: 1,

			key = keys[i];
				if (chart.isDatasetVisible(datasetIndex) && IDMatches(meta)) {
	// Use this to calculate the offset + change. - Make sure L/R protrusion is at least 0 to stop issues with centre points
	"darkslateblue": [72, 61, 139],
		// Calculate space needed for 1 tick in axis direction.
		h += 360;
		var me = this;
		var footer = vm.footer;
	hsv: function () {
	}
var isPointInArea = helpers$1.canvas._isPointInArea;
			});
			if (ctx.setLineDash) {
		if (me.isHorizontal()) {
				for (j = 0, jlen = label.length; j < jlen; ++j) {
	var start = 0;
	/**
		// Default to start of the array
// DEPRECATIONS
	 */
		pointPosition = scale.getPointPosition(i, scale.drawingArea + 5);
		var minSize = me.minSize = {
};
	var a = lab[1];


		};
	getRingIndex: function(datasetIndex) {

		var vm = this._view;
	inYRange: yRange,

		if (helpers.isObject(tval) && helpers.isObject(sval)) {
			}
			backgroundColor: options.backgroundColor,
		var ctx = me.ctx;
		if (!helpers.isObject(target)) {

		me._offsets = computeOffsets(me._table, ticks, min, max, options);
			item = item.canvas;
		return colorString.hslString(this.values.hsl, this.values.alpha);
	var exp, significand;
		}
			// Note: the resize event is not supported on all browsers.
		var items = [];
core_controller.canvasHelpers = core_controller.helpers.canvas;
		index: indexMode,
		var props = ['fullWidth', 'position', 'weight'];
			return Math.max(Math.min(pt, max), min);
		helpers$1.retinaScale(me, me.options.devicePixelRatio);
		} else if (tickOpts.suggestedMax !== undefined) {
// http://dev.w3.org/csswg/css-color/#hwb-to-rgb
		label = ticks[i].label;
	 * @private
		// Fit
	ctx.save();

		var max = me.max;
				}
		'categoryPercentage',
	"palegoldenrod": [238, 232, 170],
		x1 = vm.x - half;
				continue;
		case 'rect':
		if (!opts.display) {
						// scales type are the same
		var dataset = me.getDataset();
		core_plugins.notify(me, 'destroy');
		var me = this;

			borderWidth: options.borderWidth,
					options: scaleOptions,
		// Stroke Line
		var yiq = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
 */
		me.index = datasetIndex;

	constructors: {},
				} else {
	 * https://github.com/chartjs/Chart.js/pull/2640

	 * @param {Chart} chart - The chart to animate.
		var config = me._config;
	 */

		return this.chart.scale.id;

		}

			if (pointCurrent.model.skip) {
			var xLeft = rtlHelper.xPlus(x, boxWidth + halfFontSize);


       g = Math.round(rgba[1]/255 * 100),
	_updateElementGeometry: function(rectangle, index, reset, options) {
 * effect, instead simply create/register plugins via plain JavaScript objects.
		if (chartArea === undefined || helpers$1.canvas._isPointInArea(vm, chartArea)) {
		return capacity > 0 ? capacity : 1;
			for (i = 0; i < len; i++) {
	},
}
	arrayEvents.forEach(function(key) {
			return function(callback) {
	var startAngle = arc.startAngle;
	/**
			if (findIndex >= 0) {
				me.max = Math.pow(10, Math.floor(log10(me.max)) + 1);
	 */
		// Utility
		}
	var opts = tooltip._options;

		};
		} else {
	var rmax = dataRange.max;
		tickVal = significand * Math.pow(10, exp);
			var tickPadding = tickOpts.padding;
	animation: {
		}
	var hi = Math.floor(h) % 6;
	addElements: function() {
	 * when a global plugin is registered or unregistered. In this case, the cache ID is
		var hwb = this.values.hwb;
		me.resyncElements();
	/**
				}
			}

				borderDash = gridLines.zeroLineBorderDash || [];
		me.max = Math.max(min + 1, max);

	helpers$1._alignPixel = function(chart, pixel, width) {
   }
var CSS_RENDER_ANIMATION = CSS_PREFIX + 'render-animation';
					height: fontSize
			if (helpers$1.isArray(thing)) {
				delete cache.data[gc[i]];
   getRgba: getRgba,
				// Title doesn't make sense for scatter since we format the data as a point
		ctx.fillStyle = vm.borderColor;

		if (!scaleLabel.display) {
			me._config.radius,
	fn.conversion = path;

		if (gcLen > length) {
	 * Provided for backward compatibility for scale.getValueForPixel(),
		if (fill[0] === '-' || fill[0] === '+') {
				minSize.height = Math.min(me.maxHeight, minSize.height + labelHeight + tickPadding);
		xPadding: tooltipOpts.xPadding,
	},
				}),
				ticks.push(timestamp);
 * Get the size of the tooltip
		maxPadding.right = Math.max(maxPadding.right, boxPadding.right);
	"snow": [255, 250, 250],
			continue;
			return nonSkipped(ticks);
	"turquoise": [64, 224, 208],
		ctx.lineTo(x + width, y + height - radius);
		xPlus: function(x, value) {
	],
   return "rgba(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2]
	do {
};
		var numericGeneratorOptions = {
	} else {

	/**
		me._configure();

		}
		} else {


		return (t = t - 1) * t * ((s + 1) * t + s) + 1;
	while (fill !== false && visited.indexOf(fill) === -1) {
			}
	},
		} else if (fraction <= 1.0) {
					paddingRight = isBottom ?
	window.Color = Color;
	// -- Basic js utility methods
/**
				return [];
			categoryPercentage: 0.8,
function toClip(value) {

		var me = this;
var scale_logarithmic = core_scale.extend({
		helpers$1.callback(this.options.beforeSetDimensions, [this]);
		// Draw straight lines connecting each index
function watchForRender(node, handler) {
	var key = [
	v = (l + s) / 2;
		}
	var resizer = expando.resizer;
		// IE11/Edge does not like very small opacities, so snap to 0
			cornerRadius = radius * 0.516;


		me.min = nonNegativeOrDefault(tickOpts.min, me.min);
		}
		return this.setSpace('hsv', arguments);
		var sin = Math.abs(Math.sin(rot));
				x2 = vm.caretX;
	var i, ilen, key, actual, origin, target, type, c0, c1;
			return;
			var el = elements[i];
			// Make sure that currentStep starts at 1
	negate: function () {
				ctx.arc(left, bottom, r, HALF_PI, PI);

	onClick: null,
		var dataset = this.getDataset();
var core_plugins = {
			if (controller) {
	 * @type {Chart.core.element}
	"lavender": [230, 230, 250],
		var halfLineHeight = scaleLabelFont.lineHeight / 2;
		me.addElements();
		}
		// height
	};
	var span = next[skey] - prev[skey];
	var i;
				node.distance = graph[current].distance + 1;
			element = elements[i];
			}


				nestedLabel = label[j];
			return elements.slice(0, 1);
				datasets[i] = [];
			if (this.chart.isDatasetVisible(i)) {
	helpers$1.EPSILON = Number.EPSILON || 1e-14;
	 */
		if (i === next) {
function generateTicks(generationOptions, dataRange) {
	var i, ilen, box;
	 */
	getBeforeBody: function() {
		var circumference = reset && animationOpts.animateRotate ? 0 : arc.hidden ? 0 : me.calculateCircumference(dataset.data[index]) * (opts.circumference / DOUBLE_PI$1);
	/**
	ctx.fillStyle = color;
			me.right = me.width;
					var maxVal = helpers$1.max(valuesForType);
				? tooltip.handleEvent(e)
			if (animation.currentStep >= numSteps) {
	 * @private
};
			return 16;
	"darkslategray": [47, 79, 79],
				data: [],
		var custom = point.custom || {};
	/**
		var values = core_datasetController.prototype._resolveDatasetElementOptions.apply(me, arguments);
	reset: function() {
		return values;
	 * @private

		// Last active contains items that were previously in the tooltip.
/**
 * @namespace Chart.canvasHelpers
			item = items[i];
	}
				return {
		handleMaxPadding(chartArea);
			model.controlPointPreviousY = capControlPoint(controlPoints.previous.y, area.top, area.bottom);

	var ticking = false;

			availableWidth: availableWidth,
					ctx.strokeStyle = labelColors.borderColor;
		var halfRadius = (vm.innerRadius + vm.outerRadius) / 2;
		s01 = isNaN(s01) ? 0 : s01;
		next = items[i + 1];
core_defaults._set('global', {
helpers_core.easingEffects = effects;
			borderColor: model.borderColor,
	getBaseValue: function() {
		mode: 'nearest',
		return colorString.rgbString(this.values.rgb, this.values.alpha);
var Scale = core_element.extend({

		// Desired view properties
	var ilen = data.length;
		var me = this;
		}
				++count;
			valueInPixels = parseInt(styleValue, 10);
		if (me.isHorizontal()) {
			},
			return x + value;
		+ ((Math.round(args[1]) & 0xFF) << 8)
					el: el
			this.getPixelForOffset(ticks[index].value) :
	var ilen = values.length;
		var me = this;
	}
	}
		var rgb = this.values.rgb;
	},
      return vals[3];
	}
	var left = sortByWeight(filterByPosition(layoutBoxes, 'left'), true);
		maxHeight = (chartArea.bottom - chartArea.top - chart.borderWidth) / ratioY;
		var xAlign = vm.xAlign;
		if (vLimits.end > furthestLimits.b) {
		cache.id = this._cacheId;
 */
var defaults = {
});
	},
		me._labelSizes = null;

		} else if (i0[key] > value) {

				model = points[i]._model;
		// the backend model is in unscaled coordinates. Since we are going to deal with our model coordinates, we go back here
	ctx.beginPath();
		var listeners = me._listeners = {};

	getRightValue: function(value) {
		if (!container) {

	title: {
	 * @private
			me.labelRotation = minRotation;
		if (total > 0 && !isNaN(value)) {
	 */
		var cutout = opts.cutoutPercentage / 100 || 0;
					return false;
		if (displayWidth !== undefined) {
			drawLegendBox(realX, y, legendItem);
	easeOutQuint: function(t) {
		if (helpers$1.isArray(text)) {
	 * @private
	"darkorchid": [153, 50, 204],
		return v.pos === position;


		},
		}
		var me = this;
		if (mode === 'dataset') {
			_datasetIndex: me.index,
/**
core_defaults._set('horizontalBar', {
	 * @private
function compare2Level(l1, l2) {
		return typeof value === 'undefined' ? defaultValue : value;
	],
	size = Math.abs(next - prev) / 2 * percent;
		}
	if (match[0].length === 3) {
	if (array._chartjs) {
}
	};
	initialize: function() {
	while (graph[cur].parent) {
				scaleOptions.position = item.dposition;
		var me = this;
		}, Number.NEGATIVE_INFINITY);


		item = ticksToFilter[index];
	},
		ctx.fillText(text, position.x, y);
			return t;
		var isHorizontal = me.isHorizontal();
		// around for long time and not marked as private, we can't change its structure
				duration: me.options.hover.animationDuration,

	},
		if (vLimits.start < furthestLimits.t) {
		var i, meta;
	if ((!circular && !valueCount) || !lineColor || !lineWidth) {
var valueOrDefault$9 = helpers$1.valueOrDefault;
	var x = vm.x;
				options[readKey]
		first = +adapter.startOf(first, 'isoWeek', weekday);
			val = val < 0 ? 360 + val : val;
		});
	if (c === 0.0) {


			source.mapper = createMapper(source);
			return obj;
			} else {

		// In case values were cached (and thus frozen), we need to clone the values
 * @function
	end = options.ticks.reverse ? scale.min : scale.max;
	angleLines: {
		}
	rgb: [255, 255, 255],

			}

	ctx.restore();
				lazy: arguments[1]
	var b = (rem % 6) / 5 * 255;
		var a = 1;
			niceFraction = 10;
	}
		/* if (total === 0) {
	 * The keys defined here are for backward compatibility for legend styles.
			ctx.strokeStyle = lineColor;
		}
	_getLabels: function() {
				meta = metasets[i];
};

		}
		var i, ilen, timestamp;
			yOffset = Math.sin(rad) * radius;
						// invalid, hidden and negative values are ignored
	_type: undefined,
		ctx.arc(arc.x, arc.y, arc.outerRadius, arc.startAngle, arc.endAngle);
		position: 'average',
			// backwards compatibility
			// https://github.com/chartjs/Chart.js/issues/5858
		me._bufferedRender = false;
						model.controlPointPreviousY = capControlPoint(model.controlPointPreviousY, area.top, area.bottom);
			});
		}
 */
	},
		}
 * Hooks the array methods that add or remove values ('push', pop', 'shift', 'splice',
	},
			line._children = points;
		var layoutOptions = chart.options.layout || {};

	datasetElementType: elements.Line,
		if (t < 1) {
			}
	},
				x2: x2,
	if (s === 0) {
			// undefined |       |     x     |     x
	 * correctly detect when the chart is added to the DOM and then resized. This
			}
	for (i = 0; i < valueCount; i++) {
					paddingRight = lastLabelSize.width / 2;
		x1 = Math.min(vm.x, vm.base);
		}
		var size = me._getLabelSize(exampleLabel);

	 * @since 2.7.0
			}
	scaleLabel: {

	/**
});
		var prev = {};
function createMapper(source) {
		me._startValue = log10(start);
// @todo if (fill[0] === '#')

	this.initialize.apply(this, arguments);
			platform.addEventListener(me, 'resize', listener);
		var type = me.datasetElementType;
	/**

 * @todo remove at version 3
function computeLinearBoundary(source) {
	easeInCubic: function(t) {
	var yAlign = alignment.yAlign;
			// Model
		} else {
	var controller = element._chart.getDatasetMeta(datasetIndex).controller;
			valueCategory = me.isHorizontal() ? value.x : value.y;
			};
	 * @param {number|object} value - If a number, set the value to all TRBL component,
		}
	});
		var me = this;
		helpers$1.retinaScale(me, options.devicePixelRatio);
		 */
	// Prevent browser from freezing in case user options request millions of milliseconds
}


		var source = tickOpts.source;
		t = +value.top || 0;
/**
	return result;
		};

		var ticks = me.ticks = generateTicks$1(generationOptions, me);

		s = 0;
}
		display: false,
	isDatasetVisible: function(datasetIndex) {
 * for backward compatibility. Though, it can still be useful for plugins that
		return this.chart.getDatasetMeta(this.index);
		++significand;
	var expando = node[EXPANDO_KEY] || (node[EXPANDO_KEY] = {});
	args -= 16;
		values.maxBarThickness = valueOrDefault$3(indexOpts.maxBarThickness, values.maxBarThickness);
			// and 'mouseout' events will trigger multiple renders.
	if (!len0 || !len1) {
		var count = 0;
				return '0';
		ChartElement.extend = helpers.inherits;
		helpers$1.callback(options.onHover || options.hover.onHover, [e.native, me.active], me);
	//
		return reversed;
			return 1;
				}
		var me = this;
		core_datasetController.prototype.initialize.apply(me, arguments);
		var custom = point.custom || {};
var FORMATS = {
	}
			me.update({
					} else if (labelCount > 0 && item.index < labelCount) {
		if (me.options.offset && ticks.length) {
	/**
	var fill = model.fill;
	var g = Math.floor((rem = args % 36) / 6) / 5 * 255;
				var dataLabel = data.labels[tooltipItem.index];
	} else {
}
			me.defaults[type] = helpers$1.extend(me.defaults[type], additions);
			xAlign: existingModel.xAlign,

	}
				return;

			gc.splice(0, gcLen);
		return (t = t - 1) * t * t * t * t + 1;
}
	return false;
			return max;
			color += 3.5;
		var meta = me.getMeta();
	},
		yLabel: yScale ? yScale.getLabelForIndex(index, datasetIndex) : '',

			box.right = box.fullWidth ? params.outerWidth - userPadding.right : chartArea.left + chartArea.w;
		var i, ilen;
		}
		var values = this.values;
	var t3;
	} else if (xAlign === 'right') {
	/**
		me.longestTextCache = me.longestTextCache || {};
	var max = generationOptions.max;

		var active = me._active;
	helpers$1.measureText = function(ctx, data, gc, longest, string) {
		var me = this;
				ctx.lineTo(midpoint, flip ? target.y : previous.y);
	},
		s = delta / (max + min);

		var list = document.createElement('ul');
		var dataset = me.getDataset();
 * @private
	},
/**
	"darkgoldenrod": [184, 134, 11],
		labels: {


		if (!p) {

}
			labelColors = vm.labelColors[i];
	/**
		mode: 'nearest',
			vBoxMaxWidth: availableWidth / 2 / verticalBoxes.length,
		l = +value.left || 0;
				ctx.restore();

		me._startValue = me.minIndex - (offset ? 0.5 : 0);
	 */
	cyan: function (val) {

// Integer constants are from the ES6 spec.
		var matches = ('' + value).match(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/);

		// Update Points
			}
			}
	chart.tooltip.initialize();
		// Need to call with native event here to not break backwards compatibility
		var count = this.getMeta().count;
		me.max = nonNegativeOrDefault(tickOpts.max, me.max);
		};
			tension: 0.4,
				type: klass.charAt(0).toLowerCase() + klass.slice(1)
		helpers$1.callback(this.options.beforeUpdate, [this]);
		}
	}

	//
 */
	 */
 * @todo remove at version 3
				maxIndex = findIndex;
		}
			meta.xAxisID = dataset.xAxisID || scalesOpts.xAxes[0].id;
	},
			w: availableWidth,
}
var defaultColor = core_defaults.global.defaultColor;
 * @prop {number} right - Right edge of the item. Set by layout system and cannot be used in update
	return this;
	},
			item = items[i];
	line: controller_line,
					target[prop] = value;
		me.updateBezierControlPoints();
	doughnut: controller_doughnut,

	var rem;
	// parse Color() argument
		var me = this;

			));
		var i, descriptor, plugin, params, method;
			type: 'linear',    // scatter should not use a category axis

	var metadata, i, j, ilen, jlen, element;
	}
				model.startAngle = me.getMeta().data[index - 1]._model.endAngle;



			}
	for (var i = 0; i < space.length; i++) {
	 */
	a = 500 * (x - y);

			return;

	"blue": [0, 0, 255],
			end: end
		}
		// Update Lifecycle - Probably don't want to ever extend or overwrite this function ;)
		}
	beforeCalculateTickRotation: function() {

		return value.isValid() ? value.valueOf() : null;
		};

	updateLayout: function() {
	convertTicksToLabels: function(ticks) {
			pushOrConcat(bodyItem.before, splitNewlines(callbacks.beforeLabel.call(me, tooltipItem, data)));
	for (i = 0, ilen = timestamps.length; i < ilen; ++i) {
	"silver": [192, 192, 192],
		if (helpers$1.isArray(toPush)) {

		var clip;
			me._layers.push.apply(me._layers, box._layers());
	clone: function () {

   }
 * @todo remove at version 3
	var stack = getOrCreateStack(stacks, stacked, meta);
	 * @returns {*}
			precision = exp >= 0 ? 1 : precision;
		};
		}
				// If the container size shrank during chart resize, let's assume
	 * @deprecated since version 2.8.0
		// |    |    | C1 |                           | C2 |    |
		}
		var tickFont = helpers$1.options._parseFont(tickOpts);
		var boxWidth = getBoxWidth(labelOpts, fontSize);
convert.hcg.hsl = function (hcg) {
var plugin_filler = {

// Load to register built-in adapters (as side effects)
		// range of the scale
		me.bindEvents();
					top: 0,

			tension: valueOrDefault$6(custom.tension, lineModel ? lineModel.tension : 0),
	 * @param {function} listener - Receives a notification (an object that implements
	/**
	this.values = {
core_defaults._set('global', {
		var expando = listener[EXPANDO_KEY] || (listener[EXPANDO_KEY] = {});
			scale.mergeTicksOptions();
	resizer.appendChild(expand);

		var me = this;
				}
		var result = fn(args);
	var h = hsv[0];

		}
 * @deprecated since version 2.1.5
		if (me.min === me.max) {
		model.y = horizontal ? ipixels.center : reset ? base : vpixels.head;
	},

		if (numMajorIndices > 0) {
		borderWidth: tooltipOpts.borderWidth
var arrayEvents = ['push', 'pop', 'shift', 'splice', 'unshift'];
	var percent = options.categoryPercentage;

		var me = this;
			unlistenArrayEvents(this._data, this);
		me.xCenter = Math.floor(((maxLeft + maxRight) / 2) + me.left);
		return helpers.valueOrDefault(helpers.isArray(value) ? value[index] : value, defaultValue);
	var graph = deriveBFS(fromModel);

				me._drawGrid.apply(me, arguments);
		});
				}
// The layout service is very self explanatory.  It's responsible for the layout within a chart.

			min = Math.min(min, labels[0]);
				}

	};
		this.handleTickRangeOptions();
core_controller.layoutService = core_controller.layouts;
}
		}
	},
				// IE 9 and 10 do not support line dash

	 */
	var result = [];
	// given value is outside table (after last item)


			hitRadius: options.hitRadius
	"olivedrab": [107, 142, 35],
		}


	all functions that are routed have a property `.conversion` attached
	"aquamarine": [127, 255, 212],
			ctx.lineTo(x + xOffset, y + yOffset);
		y += paddingAndSize;
				borderColor: options.borderColor,

	 * @param {Chart} chart - the chart to remove the box from
		model.width = tooltipSize.width;
		var i, ilen, listItem, listItemSpan;

				stackData(me, stacks, meta, data);
			// stacked   | meta.stack
			}
			if (container && container !== resizer.parentNode) {
	function parseMaxStyle(styleValue, node, parentProperty) {
 * @returns {object} the event position
			}
		return Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
		chart: chart
		}
	} else if (vals.length) {
	 */
	 * @private
	getMaxBorderWidth: function(arcs) {
		line._children = points;


				// Store the hitbox width and height here. Final position will be updated in `draw`
		}
			? bodyAlign === 'center' ? (bodyFontSize / 2 + 1) : (bodyFontSize + 2)
		if (angle < (-0.5 * Math.PI)) {

			me.updateHoverStyle(me.lastActive, hoverOptions.mode, false);
	var offset = (next[tkey] - prev[tkey]) * ratio;
		return values;
			title: function() {
	},
function createEvent(type, chart, x, y, nativeEvent) {
			neg[i] += value.min;
	canvas[EXPANDO_KEY] = {
});
	 */
 * @namespace Chart.layoutService
	 */
			textAlign = isMirrored ? 'left' : 'right';
	var wrappedFn = function (args) {
	yf = function(y) {
		var end = me.max;
 */


		neg[i] = neg[i] || 0;
		array._chartjs.listeners.push(listener);
/**
		f = 1 - f;
		yAlign: tooltipOpts.yAlign,
	_ensureLoaded: function(canvas) {
		return Number.POSITIVE_INFINITY;
	},
	 * Returns the scale tick objects ({label, major})
		merger: function(key, target, source, options) {
	var hi = table.length - 1;
			// We are in a vertical orientation. The top value is the highest. So reverse the array

	startDigest: function() {
			me.max = Math.max(me.max, helpers$1.max(values));
	/**
		}
	// Draw an inner border by cliping the arc and drawing a double-width border

	var r;
	if (!items.length) {
	/**

				backgroundColor: options.backgroundColor,
			view = me._view = {};
	category: scale_category,
 * @deprecated since version 2.7.0
	 * A derived controller may override this to resolve controller-specific options.
	 */
	return helpers$1.merge(Object.create(null), [].slice.call(arguments), {
			}
function drawArea(ctx, curve0, curve1, len0, len1) {
	var count = ruler.stackCount;
			var container = node.parentNode;
	saturationv: function (val) {
	log10: Math.log10 || function(x) {
		exp = Math.floor(log10(tickVal));
			label: function(item, data) {
	 * hook, in which case, plugins will not be called on `afterDatasetsDraw`.
		if (me.width === newWidth && me.height === newHeight) {
	}
		// Allow 3 pixels x2 padding either side for label readability
		for (; i < layers.length; ++i) {
		// this method and supposed to contain only string values).
		}
	_getIndexScaleId: function() {
	 * Scale boundary strategy (bypassed by min/max time options)
	},

			source.boundary = computeBoundary(source);
			var animation = new core_animation({
	 * @private
			if (!xAxisOptions.id) {
			canvas.height = canvas.width / (config.options.aspectRatio || 2);
		}
			}
	var endSignificand = Math.ceil(dataRange.max / Math.pow(10, endExp));

			return (me.max - value) * scalingFactor;
		], context, index);
		var x = 0;
		var ratioX = 1;

			scaleLabelY = position === 'bottom'
		p0 = points[index]._view;
		var min = ticksOpts.min;
		maxWidth = Math.min(me.maxWidth, me.chart.width - maxLabelWidth);
			end: pos
			merger: function(key, dst, src) {
		var legendOpts = chart.options.legend;


	var b = hwb[2] / 100;
		var exponent = Math.floor(helpers$1.log10(range));
		}
		rgb: [0, 0, 0],
		if (meta.xAxisID === null || !(meta.xAxisID in scales) || dataset.xAxisID) {
	_deprecated: function(scope, value, previous, current) {
	hsl: ['hue', 'saturation', 'lightness'],
			max: tickOpts.max,
			x: e.x,
			? null
				}
			readKey = hover ? 'hover' + key.charAt(0).toUpperCase() + key.slice(1) : key;
			style = me._resolveDataElementOptions(meta.data[index] || {}, index);
		textDirection: tooltipOpts.textDirection,

			maxTicks = Math.ceil(me.max / stepSize) - Math.floor(me.min / stepSize) + 1;
	}
 * @function Chart.helpers.callCallback
		me.stop();
			fill: true, // do we fill in the area between the line and its base axis
			// as this can pollute global namespaces
		var ilen = metasets.length;
		var startPixel, endPixel;
	},
	/**
		var i, len;
		if (!model || ease === 1) {
	},
		return false;
		if (t3 > 1) {
	return {
		curr = scale.getPixelForTick(i);
		return change;
			me.stop();
		if (args === undefined || args === null) {
		var p = weight === undefined ? 0.5 : weight;
			_index: index,

	/**
	z /= 108.883;
		// real-time charts), we need to monitor these data modifications and synchronize
			if (tickOpts.showLabelBackdrop) {
	var widthPadding = 0;
	var l = lab[0];
	dataElementType: elements.Point,
		}
			return label;

	ansi256: {channels: 1, labels: ['ansi256']},
		var me = this;
			// Desired view properties
	},
}
		var result = new Color();

/**
 * @namespace Chart.helpers.log10
	"pink": [255, 192, 203],
			radius: model.radius

			box.width = box.right - box.left;
		}
	for (var len = models.length, i = 0; i < len; i++) {
		lineCount = helpers$1.isArray(opts.text) ? opts.text.length : 1;


		// Utility

		x = xScale.getPixelForValue(typeof value === 'object' ? value : NaN, index, datasetIndex);
		w: ctx.measureText(label).width,
var helpers_core = helpers;
		'borderDashOffset',


	var endExp = Math.floor(log10(dataRange.max));
		this._cacheId++;


	blacken: function (ratio) {
		// we can't use save() and restore() to restore the initial state. So make sure that at

}

	dark: function () {
   return Math.min(Math.max(min, num), max);

		};
	elements: {
	 * Namespace to hold formatters for different types of ticks
	var yScale = element._yScale || element._scale; // handle radar || polarArea charts
	handleMargins: function() {
(function (global, factory) {
		},
		footerFontColor: tooltipOpts.footerFontColor,
		});
 * Provided for backward compatibility, use Chart.helpers.math.log10 instead.
		var yAlign = vm.yAlign;
		}
	throw new Error(
				x: x,
	var g = rgb[1] / 255;
	},
		if (!target) {
		var alphaK, betaK, tauK, squaredMagnitude;
	_getScaleLabel: function(rawValue) {
function resolveTarget(sources, index, propagate) {
			ctx.restore();
		var element = this.createMetaData(index);
	 * @param {object} target - The target object in which all objects are merged into.
	var h;
 * extremity (left + width or top + height). Note that it would be more optimized to directly
				callback();
		var options = me.options;
				helpers$1._merger(key, target, source, options);
			if (!isNaN(val.min) && !isNaN(val.max)) {
		return false;
			ctx.lineTo(x + Math.sin(rad) * radius, y - Math.cos(rad) * radius);
			chart.update();
			squaredMagnitude = Math.pow(alphaK, 2) + Math.pow(betaK, 2);
	var vals;
		var opts = me.options;
					if (typeof object[method] === 'function') {
	},
	 * @private

	 */

};
				easing: config.easing || animationOptions.easing,
				scale.options = scaleOptions;
		var offset = 0;
		var me = this;

		}
				}
});
	}
			t = +value.top || 0;
		var ticksLimit = tickOpts.maxTicksLimit || axisLength / me._tickSize() + 1;
				font: font,
			} else {
	if (distribution === 'linear' || !timestamps.length) {

			easingValue: easingValue

		};
			if (!yAxisOptions.id) {

			? stacks.length - 1
		if (helpers.isObject(source)) {
	var match = args.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
	lighten: function (ratio) {
		// Check for whole powers of 10,
	scales: {
		return {
	month: 'MMM YYYY',
		for (i = 0, ilen = me.data.datasets.length; i < ilen; i++) {
	window.Chart = core_controller;

		var me = this;
	// Footer width
					}
	clipArea: function(ctx, area) {
		return me.beginAtZero ? 0 :
	update: helpers$1.noop,

		custom: null,
			arc.endAngle += TAU;
				var data = chart.data;
			v0 = a0[i];

	},
	afterSetDimensions: function() {
	 */
	calculateTotal: function() {
		ctx.lineWidth = vm.borderWidth;
		label: indexScale ? '' + indexScale.getLabelForIndex(index, datasetIndex) : '',

							me.minNotZero = Math.min(value.min, me.minNotZero);
		if (hasCNode || hasCContainer) {

		Math.pow(x[1] - y[1], 2) +
		if (a < 1) {
			);
		var args = {
		}

	var pointPosition;
}
	},
				niceFraction = 10;
		// Adds each scale to the chart.boxes array to be sized accordingly
	var options = scale.options.time;
	helpers$1.each(chart.scales, function(scale) {

			steppedLine: lineModel ? lineModel.steppedLine : false,
		var me = this;
	if (tickVal === 0) {

				newControllers.push(meta.controller);
	"linen": [250, 240, 230],

	var vals = {};
		if (tickOpts.reverse) {
				continue;

		} else {
		'borderCapStyle',
};

		h * 360,
				me.minNotZero = Math.pow(10, Math.floor(log10(me.max)));

		}

			innerRadius: vm.innerRadius,
}
				updateMinMax(me, meta, data);
		if (maxTicksLimit) {
			tooltip: tooltip,
		var stacked = scale.options.stacked;
	getElementAtEvent: function(e) {
	update: function(reset) {
		var alignPixel = helpers$1._alignPixel;
				x: me.left + alignmentOffset(legendWidth, lineWidths[0]),
		caretSize: tooltipOpts.caretSize,
	"palevioletred": [219, 112, 147],
				z: tz,
	},
		var descriptors = [];
				deltaK: 0,

core_helpers();
				}
		return core_scale.prototype.getRightValue.call(this, rawValue);
			return indexMode(chart, e, {intersect: false});

});
var helpers_math = exports$2;
 * The plugin service singleton
			me.eventHandler.apply(me, arguments);


		var horizontal = vscale.isHorizontal();
	"whitesmoke": [245, 245, 245],
			return;
	 * @returns {Padding} the necessary padding

		// `instanceof HTMLCanvasElement/CanvasRenderingContext2D` fails when the item is
}
			if (pointAfter && !pointAfter.model.skip) {
				ctx.arc(right, bottom, r, 0, HALF_PI);
					meta.stack
			pos: [],
	},
				count++;
		core_plugins._invalidate(me);
	 * Returns an array of factors sorted from 1 to sqrt(value)
		for (var i = startIndex - 1; i >= 0; i--) {
	}
			borderColor: '#fff',




		shrink.scrollLeft = maxSize;
	*/
		animateRotate: true,
	// Implementation of the nice number algorithm used in determining where axis labels will go
		}
				for (i = 0; i < slen; ++i) {

		// If a precision is not specified, calculate factor based on spacing

           + alpha + ")";


			// lineCap : cap style for line
	return helpers$1.isNumber(param) ? param : 0;
			var displayHeight = readUsedSize(canvas, 'height');
	/**
			// if the area changed, re-fit vertical boxes
			}
 */
	var spacing = (ticks.length - 1) / ticksLimit;


			// The given item is not a compatible context2d element, let's return before finalizing
core_controller.layouts = core_layouts;
			if (closePath) {
			h = (2 / 3) + gdif - rdif;
		var meta = me.getMeta();
		 * @param tickValue {number} the value to be formatted
		return str.split('\n');
	},
		var meta = me.getMeta();
	// Data limits
			return;
					}
		return ((rounded - epsilon) <= x) && ((rounded + epsilon) >= x);
function measureLabelSize(ctx, lineHeight, label) {

		var min = Number.POSITIVE_INFINITY;
			distance: radialDistanceFromCenter
	getScaleConstructor: function(type) {
				canvas.removeAttribute(prop);
		if (showLine && line._model.tension !== 0) {
					helpers$1.nextItem(points, i)._model,
		return this.options.labels || (this.isHorizontal() ? data.xLabels : data.yLabels) || data.labels || [];
   }
			y: vm.y
		delete element.$previousStyle;
	"magenta": [255, 0, 255],
		// Compute tick rotation and fit using a sampled subset of labels
		}
	var len = arr.length;
	var b = rgb[2];
*/

	 * @private
		var chart = me.chart;
		if (helpers$1.isArray(dataset.data[index])) {
	},
		}
	var refitBoxes = [];

		case 6:


	// Scale config defaults

		var datasets = chart.data.datasets;
	}
	if (!parser && typeof format === 'function') {
			if (legend) {

		var outerRadius = reset && animationOpts.animateScale ? 0 : me.outerRadius;
	helpers$1.fontString = function(pixelSize, fontStyle, fontFamily) {
	var k;
		return me;
		ctx.strokeStyle = vm.borderColor;
		}
   var rgb = [0, 0, 0],
			var realX = rtlHelper.x(x);
	}
		var ringIndex = 0;
				if (meta.data[index]) {
		easing: 'easeOutQuart',

		point._options = options;
	 * @private
	// These methods are ordered by lifecycle. Utilities then follow.
		if (v.start !== undefined) {
		me._table = [];
/**
	 */
		} else {
		// Return undefined if the pixel is out of the range
  var str = num.toString(16).toUpperCase();
		var height = chart.height;
	 * @param {IPlugin[]|IPlugin} plugins plugin instance(s).

var core_datasetController = DatasetController;
			rotation: options.rotation,
	if (!options.display) {
	 * @param {object} [context] - If defined and the current value is a function, the value
	getBody: function(tooltipItems, data) {
	},
	r = (x * 3.2406) + (y * -1.5372) + (z * -0.4986);
		if (textWidth > longest) {
		var drawColorBoxes = vm.displayColors;
/**
	 */
	/**
			a = 1;
}
		}
		'borderWidth',
			this.constructor = ChartElement;
		if (layout.horizontal) {
	updateBezierControlPoints: function() {
				return dataLabel;
			xOffset = Math.cos(rad + QUARTER_PI) * size;
 * @param generationOptions the options used to generate the ticks
		}
var deprecated = helpers$1._deprecated;
			var startX = Math.cos(startAngle);
		this._cacheId++;
		if (arguments.length > 1) {
	return horizontal

	if (!isFinite(fill)) {
				bottom: clip.bottom === false ? canvas.height : area.bottom + clip.bottom
			var intersectsItem = false;

			this.removeHoverStyle(element);
         return;


}

}
	return [h, w * 100, b * 100];
	var length, i, tick, next;
		}
				options: opts || {}
);
	var i, ilen, prev, curr, next;
		var scaleLabelX, scaleLabelY;
	return null;
			if (me._data) {
	},

		// Invoke onHover hook
	"dimgray": [105, 105, 105],
			a = 1;
		var scaleLabelFontColor = valueOrDefault$a(scaleLabel.fontColor, core_defaults.global.defaultFontColor);
		for (index = 1; index < points.length; ++index) {
	},
	}
		}
	 */
			}
	 * The coordinate (0, 0) is at the upper-left corner of the canvas

		// Convert ticks to strings
core_controller.pluginService = core_controller.plugins;
	// returns null or '' if no explicit value has been set to the canvas attribute.
	var s;

	if (fill === 'start') {
	scales: {
				var datasetLabel = data.datasets[item.datasetIndex].label || '';
		var datasets = chart.data.datasets;

	},
	"saddlebrown": [139, 69, 19],
		var a = color1.alpha() - color2.alpha();

				me.config.data = value;
			min: nonNegativeOrDefault(tickOpts.min),
	var pixels = ruler.pixels;
			: determineMajorUnit(me._unit);
function getRgb(string) {
	_dataElementOptions: [
	"lightblue": [173, 216, 230],
var isNullOrUndef = helpers$1.isNullOrUndef;
		return colorString.hwbString(this.values.hwb, this.values.alpha);
		var dsIndex = me.index;
			backgroundColor: defaultColor$2,
	 * Globally registered plugins.
			window.msRequestAnimationFrame ||
	var matches = value && value.match(/^(\d+)(\.\d+)?px$/);
				return;
				ctx.beginPath();

				ctx.arc(right, top, r, -HALF_PI, 0);

			options.axis = options.axis || 'xy';
				x2 = ptX + width - cornerRadius - caretSize;
	return position === 'top' || position === 'bottom';
	}
		var labelSizes, maxLabelWidth, maxLabelHeight, maxWidth, tickWidth, maxHeight, maxLabelDiagonal;
	},
var controller_radar = core_datasetController.extend({
var core_tooltip = exports$4;
		var stacks = [];
	} else if (typeof obj === 'object') {
var QUARTER_PI = PI / 4;
			if (box._configure) {

		};
		if (typeof value === 'string') {
	}

		}
	ticks: {
	return convert.rgb.ansi16(convert.hsv.rgb(args), args[2]);

		var i, offset, position;

		var inner = rects.inner;
		var base = array[key];
	millisecond: 'h:mm:ss.SSS a',
		if (actual === target || key[0] === '_') {
			rad += QUARTER_PI;
		return value;
		if (!start) {
			return [t, p, v];
	},
		var lines = [];
		var meta = me.getMeta();
			y: y
		// Desired view properties
			horizontal: box.isHorizontal(),
			type: 'linear',
helpers$1.configMerge = mergeConfig;
function calculateSpacing(majorIndices, ticks, axisLength, ticksLimit) {
 * @param {Chart} chart - the chart to look at elements from
		if (style && typeof style === 'object') {


			x = +x; // convert to a number
		return this._plugins;
	v *= 255;
core_defaults._set('global', {
		if (labels.length) {
				chart.animating = false;
}
	// use the new chart options to grab the correct scale


 * Provided for backward compatibility, use Chart.helpers.canvas.roundedRect instead.


	for (var sname in spaces) {
	"plum": [221, 160, 221],
	yellow: function (val) {
			};
	}
			ctx.lineTo(target.x, target.y);
			meta = chart.getDatasetMeta(i);


		if (!optionTicks.display) {
	}


		var chart = me.chart;
 * @todo remove at version 3
		var timestamps = [];
		var ilen = elements.length;
		isoWeekday: false, // override week start day - see https://momentjs.com/docs/#/get-set/iso-weekday/
function initConfig(config) {
	}
	var chroma = (max - min);
		return colorString.percentString(this.values.rgb, this.values.alpha);
					if (valuesPerStack[key] === undefined) {
		if (yAlign === 'center') {
		hsl[2] -= hsl[2] * ratio;
		me.paddingTop = 0;
	};
				core_layouts.configure(chart, legend, legendOpts);
			var position = getRelativePosition(e, chart);
		}
		return fill;
		return obj;
core_defaults._set('radar', {

	addListener(expand, 'scroll', onScroll.bind(expand, 'expand'));
 * @param {ChartElement[]} items - elements to filter

		if (args > 50) {
	resizer._reset = function() {
	chart.tooltip._options = newOptions.tooltips;
		var availableHeight = height - padding.height;
 * Helper to get the reset model for the tooltip
	scale: {
			core_layouts.addBox(chart, scale);
       keyword = /(\w+)/;
	}
		scale.min = Math.min(scale.min, value.min);
 * @deprecated since version 2.7.0
				if (setMin) {
			if (this.isHorizontal()) {
		// This option gives lines the ability to span gaps
	// https://github.com/chartjs/Chart.js/issues/4737
	 * @param {string} [format] - the expected data format
	boundary: function(source) {

		me.min = Number.POSITIVE_INFINITY;
				return yScale.getPixelForValue(sumNeg + rightValue);
var controller_scatter = controller_line;
	elements: {
		var dataset = me.getDataset();
	}
	 * @param {*} value - The value to test.
			metaData[i] = metaData[i] || me.createMetaData(i);
	if (toPush) {
	"lawngreen": [124, 252, 0],
		if (stacked || (stacked === undefined && stack !== undefined)) {
	node.removeEventListener(type, listener, eventListenerOptions);
		if (me.options.ticks.reverse) {
			// See if we are touching one of the dataset boxes


	}

			out.push(item);
		if ((t /= 0.5) < 1) {
				if (isRotated) {
		// |    |    |                 T2                  |    |
	if (fill === false || fill === null) {
		return margin;
			el = meta.el;
		me.paddingLeft = 0;
		var me = this;
	}
		start: curr - (size / 2)
	},
			function(callback) {
};
	 * Element type used to generate a meta data (e.g. Chart.element.Point).

		});
/**
			borderDashOffset: 0.0,
		var me = this;
						fillStyle: style.backgroundColor,
		var me = this;
	var s = hsl[1] / 100;
	for (i = 1, ilen = pixels.length; i < ilen; ++i) {

	};
		var i, j, jlen, thing, nestedThing;
		xPlus: function(x, value) {
	/**
	convertTicksToLabels: function() {

			outerWidth: width,
function nonSkipped(ticksToFilter) {



		if (me.isHorizontal()) {
			start = me._getFirstTickValue(me.minNotZero);
		var yScale = me.getScaleForId(meta.yAxisID);
 */
		return time.startOf(unit).valueOf();
			config = {
				items = [];

		return this.getMeta().yAxisID;
	"snow": [255, 250, 250],
		if (loop) {
	garbageCollect(caches, length);
		}
		return (t === 0) ? 0 : Math.pow(2, 10 * (t - 1));
		values.spanGaps = valueOrDefault$7(config.spanGaps, options.spanGaps);
		return true;
			pointCurrent = pointsWithTangents[i];
			line.pivot();
}, implementation);
	 */
		var me = this;
		return this.setSpace('cmyk', arguments);
		// `resolve` sets cacheable to `false` if any option is indexed or scripted
			me.margins.top = Math.max(me.paddingTop, me.margins.top);
		};
	var c = hcg[1] / 100;
		var start = me.min;
			// eslint-disable-next-line getter-return
	 * @private
	if (inner) {


		var vscale = me._getValueScale();
		if (ticks.length === 1) {
					ctx.moveTo(item.tx1, item.ty1);
	 */
	var diff = v - Math.min(r, g, b);
	 * @todo remove at version 3

 * IMPORTANT: this class is exposed publicly as Chart.Legend, backward compatibility required!
				meta = chart.getDatasetMeta(datasetIndex);
	"powderblue": [176, 224, 230],
core_defaults._set('global', {
var controller_horizontalBar = controller_bar.extend({
		ctx.textAlign = 'center';
		if (stepSize) {
	pointermove: 'mousemove',
	/**
		// var negHalfPI = -0.5 * Math.PI;
			ticks.reverse();
				// twice in a frame (potential performance issue)
		ctx.beginPath();
			borderWidth: model.borderWidth
		var datasets = me.data.datasets;

				// scrollbar appeared. So we resize again with the scrollbar visible -
		}

		for (i = 0, len = elements.length; i < len; ++i) {
		 * @function Chart.Interaction.modes.x-axis
	for (; i < len; i += increment) {

		me._endValue = end;
		var width = tooltipSize.width;
		var me = this;
		}
			start = me._start = {};

		};
		var elements = meta.data || [];
		pt.y -= bodySpacing; // Remove last body spacing
		d1 = isDrawable(p1);
			type: 'category',
			// We need to determine alignment of the tooltip
			return;

	// Actually draw the legend on the canvas
				config.lineTension = config.tension;
			// that intersect the position, return nothing


	},
		if (bufferedRequest) {
						value = me._parseValue(data[i]);
	helpers$1.numberOfLabelLines = function(arrayOfThings) {

			hBoxMaxHeight: availableHeight / 2
	return helpers$1.valueOrDefault(options.time.min, options.ticks.min);
	/**
	return {
	tooltips: {
	if (reversed) {
	},
	node.addEventListener(type, listener, eventListenerOptions);

			start: pos - size,


		var e = 1;
			}
	"honeydew": [240, 255, 240],
	var last = ticks[ticks.length - 1].value;


		borderDashOffset: 0.0
}
	 * @returns {boolean}

			if (thing !== undefined && thing !== null && helpers$1.isArray(thing) !== true) {
	// building first area curve (normal)
			},
	var sl;
			return 1;
			var position = getRelativePosition(e, chart);
				var label = data.datasets[tooltipItem.datasetIndex].label || '';
	ctx.arc(arc.x, arc.y, arc.innerRadius, arc.endAngle, arc.startAngle, true);
		skip(ticks, spacing);
		me._configure();
		var newControllers = me.buildOrUpdateControllers();
		if (options.gridLines.circular) {
		var opts = me._options;
		steps: 24

					ctx.fillStyle = labelColors.backgroundColor;
			max = value;
		for (i = 0, ilen = points.length; i < ilen; ++i) {
	for (index = 0, len = ticksToFilter.length; index < len; ++index) {

	};

	_drawTitle: helpers$1.noop
			ctx.strokeStyle = vm.borderColor || defaultColor;
	getArea: function() {
	/**
		// continue regardless of error

		addListener(canvas, type, proxy);
	removeHoverStyle: function(element) {
		me.beforeBuildLabels();
	 */
	if (l >= 0.5 && l < 1.0) {
		}

		}]

		var tickFontSize = valueOrDefault$d(ticksOpts.fontSize, core_defaults.global.defaultFontSize);
}
	 * @function
		ctx.fillStyle = helpers$1.valueOrDefault(opts.fontColor, core_defaults.global.defaultFontColor); // render in correct colour
		return -0.5 * (Math.cos(Math.PI * t) - 1);

		}

		var p = this._plugins;
				legend.options = legendOpts;


				borderDashOffset = gridLines.borderDashOffset || 0.0;

			me.requestAnimationFrame();
		return core_interaction.modes.dataset(this, e, {intersect: true});

	},
	helpers$1.each(model.title, maxLineWidth);
					left: 0,
		// PRIVATE

		}
core_controller.Legend = plugins.legend._element;
	effects: effects
		borderColor: 'pointBorderColor',
			this.setValues('hwb', vals);
	for (i = 0, ilen = items.length; i < ilen; ++i) {
	"lightslategray": [119, 136, 153],
		keys = Object.keys(hoverOptions);
		}
		var e = evt.originalEvent || evt;
	"blanchedalmond": [255, 235, 205],
	});
	 * @param datasetIndex


		callback: function(label) {
		ansi += 60;
	 * @returns {*}



	getPixelForTick: function(index) {

};
	var ratio = span ? (sval - prev[skey]) / span : 0;
}
	var maxPadding = chartArea.maxPadding;


	/**
	 */
}

		return this.values.hsv;

			},
		offsetGridLines: false,
 */
		var container = helpers$1._getParentNode(domNode);
			var tval = target[key] || Object.create(null);
	function valueAt(idx) {
	 */
	return prev[tkey] + offset;
			yAlign = yf(model.y);
			borderColor: model.borderColor,
			if (isNaN(index)) {
		 */
				}
			neg: []

		},
 * @namespace Chart.helpers.canvas
	color models (inclusive).
		me.drawDatasets(easingValue);
	 * - 'linear': data are spread according to their time (distances can vary),
		var ticks = me.getTicks();
	dataElementType: elements.Arc,

		b = +value.bottom || 0;

		}, me);
		 * @todo remove at version 3
			backgroundColor: model.backgroundColor,
	 * @private
typeof define === 'function' && define.amd ? define(['require'], function(require) { return factory(function() { try { return require('moment'); } catch(e) { } }()); }) :
   rgb[3] = a;
	hue /= 6;

	// We average the left and right distances to get the maximum shape radius that can fit in the box
 */
			var delta = ticks.length > 3 ? ticks[2] - ticks[1] : ticks[1] - ticks[0];
	var r = rgb[0] / 255;
		var chartWeight = me._getRingWeight(me.index);
		if ((t /= 0.5) < 1) {
 * the _chartjs stub and overridden methods) if array doesn't have any more listeners.
	},
		helpers$1.each(stacks, function(stackValues) {
		return this
	drawPoint: function(ctx, style, radius, x, y, rotation) {
 * https://www.chartjs.org
/**
});
			borderColor: defaultColor,
		for (var i = startIndex + 1; i < arrayToSearch.length; i++) {
		var displayWidth = readUsedSize(canvas, 'width');
		// New implementations should return the formatted tick labels but for BACKWARD
			cursor = {
					// Line to next point
	var filtered = [];

		var stacks = {};
function getMax(options) {

	 * Returns the value of the first tick.
	return {
	},

		tickFont = ticks[i].major ? tickFonts.major : tickFonts.minor;
		}
			var lineSpace = tickFonts.minor.lineHeight * 0.4;
		if (source === 'data' || (source === 'auto' && distribution === 'series')) {
			return false;
	var routes = route(fromModel);
				// A horizontal axis is more constrained by the height.
		parser: false, // false == a pattern string from https://momentjs.com/docs/#/parsing/string-format/ or a custom callback that converts its argument to a moment

	},
				cacheable = false;
		}
		 * @param ticks {number[]} the list of ticks being converted

Chart.instances = {};
	switch (hi) {
			}
		throw min + ' and ' + max + ' are too far apart with stepSize of ' + stepSize + ' ' + minor;
	}
		value = scale._parseValue(data[i]);
			}
	},
		major: {}
		var current = middlePoint;
						};
function getTickMarkLength(options) {
		// Finally place the boxes to correct coordinates
var helpers_easing = {
			var sval = source[key];
		datasetIndex: datasetIndex,
			if (xAlign === 'left') {
      return hslaString(hsla, alpha);
		}
				tickString = '0'; // never show decimal places for 0
		// When 'auto', the scale is visible if at least one associated dataset is visible.
			return nonSkipped(ticks);
	var fill = source.fill;
		}
 * @namespace Chart.Title
					ctx.lineTo(item.tx2, item.ty2);
	"black": [0, 0, 0],
	// https://dl.dropboxusercontent.com/u/34601363/yeahscience.gif
				c0 = chartjsColor(origin);


		common: false,
 * @private
			var left = x + r;
			}
		return v0.weight === v1.weight ?
		pointStyle: 'pointStyle',
		ctx.restore();
			furthestAngles.t = angleRadians;
	_mergerIf: function(key, target, source) {
	startAngle: -0.5 * Math.PI,

			y = tp.y;
	// supported boundaries
	var g = args[1];
 * @deprecated since version 2.6.0
			me.width = me.maxWidth;
		}
		var i, ilen;
		 * @deprecated since version 2.6.0
}
	// Request animation polyfill - https://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
		}
			thing = arrayOfThings[i];
	}), {
		// if it's also the last data, we use the scale size.
			endAngle: vm.endAngle,
							text: label,

 * @memberof Chart._adapters
	rgb: ['red', 'green', 'blue'],
					for (j = 0, jlen = data.length; j < jlen; ++j) {
				if (d0) {
convert.hcg.hwb = function (hcg) {
});
			ctx.fillStyle = valueOrDefault$e(legendItem.fillStyle, defaultColor);
	beforeSetDimensions: noop$1,

			var index = legendItem.datasetIndex;
		var sizes = layout.horizontal ? [newWidth, chartArea.w] : [newHeight, chartArea.h];
		padding = helpers$1.getStyle(container, padding);
			}
		'barThickness',
var exports$3 = core_element.extend({
	var t1;
				numSteps: duration / 16.66, // 60 fps
			x: x,
	afterFit: noop$2,
  return (str.length < 2) ? "0" + str : str;
	},
	}
	 * Get radius length offset of the dataset in relation to the visible datasets weights. This allows determining the inner and outer radius correctly
		footerMarginTop: tooltipOpts.footerMarginTop,
	toBase64Image: function() {
			capacity--;

		var vm = me._view;
		return me;
		labels = me.convertTicksToLabels(ticks) || me.ticks;

		// Absorb the master measurements
		wh /= ratio;
	},
		if (hLimits.start < furthestLimits.l) {
	chartArea.y += updatePos('top');
		var deltaX;
			};
				listItemSpan.style.backgroundColor = datasets[0].backgroundColor[i];
		return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - s) * (2 * Math.PI) / p) * 0.5 + 1;
		} else {
			rad += QUARTER_PI;
	};
	 * Provided for backward compatibility, not available anymore
			me.resize(true);
function createResizer(handler) {
				handler(element);
function getOrCreateStack(stacks, stacked, meta) {

		return {
						var style = meta.controller.getStyle(i);
Color.prototype.setChannel = function (space, index, val) {

	if (stepSize) {
			ctx.lineTo(x - yOffset, y + xOffset);
 * @deprecated since version 2.8.0
			model.labelTextColors = labelTextColors;
	};
		}
			if (key === 'scales') {
	var nearestItems = [];
			items = items.concat(
	}
	};
	 */

		return {
		}
	 * @param {number} amount - the amount to add
	easeInSine: function(t) {

	for (i = len1 - 1; i > 0; --i) {
				meta = chart.getDatasetMeta(datasetIndex);
			ctx.fillStyle = vm.backgroundColor || defaultColor;
	"chartreuse": [127, 255, 0],
		'borderColor',
		var maxIndex = labels.length - 1;
	"orange": [255, 165, 0],
		var offsets = me._offsets;
			horizontal = scale.isHorizontal();

			return;
 */

		} else {
		fontStyle: 'bold',
		} else {
 */
	buildTicks: function() {

		var maxRight = me.width - rightMovement - me.drawingArea;
		var chart = me.chart;
	_enabled: typeof window !== 'undefined' && typeof document !== 'undefined',

      if (!rgb) {

		case 'rectRounded':
			arc.endAngle = arc.startAngle + TAU;
	getDataset: function() {
		lines = pushOrConcat(lines, splitNewlines(title));
		var i, ilen;
var HALF_PI$1 = PI$1 / 2;
      hexAlpha = match[3];
		return count;
		}



	var vals = args[0];
// (hwb have alpha optional & 1 is default value)
	addListener(shrink, 'scroll', onScroll.bind(shrink, 'shrink'));
	"lightgreen": [144, 238, 144],
helpers$1.extend(Chart.prototype, /** @lends Chart */ {
			tickFont = item.font;
		}
		animateScale: true
			me.updateElement(points[i], i, reset);
	switch (i) {
	if (helpers$1.isNullOrUndef(input)) {
	var count = 0;
			var currentColHeight = 0;
		// Built in hover styling
		}
		// Now pivot the point for animation
}

		} :
		'backgroundColor',
		var ptX = tooltipPoint.x;
		'backgroundColor',
				position = me.getPointPosition(i, offset);
		return inRange(this._view, mouseX, mouseY);
			footerFontSize = vm.footerFontSize;
		me.minNotZero = helpers$1.isFinite(me.minNotZero) ? me.minNotZero : null;
	},
	"saddlebrown": [139, 69, 19],

		me.setDimensions();
			me._view = helpers$1.extend({}, me._model);
	var precision = exp < 0 ? Math.pow(10, Math.abs(exp)) : 1;
	acquireContext: function() {},
	getPointPosition: function(index, distanceFromCenter) {
 * Provided for backward compatibility, use Chart.helpers.canvas instead.

				return value;
		}
		me.minSize = {

	linkScales: function() {
 * @private
		var i;
	beforeFit: function() {
	},
				options = controller._resolveDataElementOptions(arc, i);
	easeInOutBack: function(t) {
 * Provided for backward compatibility, not available anymore.
		helpers$1.canvas.unclipArea(chart.ctx);
		var offset = me.options.offset;
	},
		return colorString.keyword(this.values.rgb, this.values.alpha);
		var colorX = drawColorBoxes ? getAlignedX(vm, 'left') : 0;

	initialize: function() {
	};
		// Make sure all dataset controllers have correct meta data counts
		function(array, callback, scope) {
	},
			}));
		layout = layouts[i];
		if (helpers$1.isNullOrUndef(startIndex)) {
		return font;
		target = model.scaleBottom === undefined ? scale.bottom : model.scaleBottom;


	return helpers$1.isFinite(value) && value >= 0 ? value : defaultValue;
			if (!hasUpdated) {
		case 3:
				borderDash = gridLines.borderDash || [];

	dataElementType: elements.Point,
			args = Array.prototype.slice.call(arguments);

/**
		case 'dash':
		function(value) {
	if (typeof obj === 'string') {
var valueOrDefault$2 = helpers$1.valueOrDefault;
		}
	return conversion;
		//
		// in conversion functions.

		s = diff / v;
		ChartElement.prototype = new Surrogate();

		var opts = chart.options;
		}
	 * Get the single element that was clicked on
	},
		// Enforce limits with user min/max options
 */
	},

	return ansi;

		}
		me.legendHitBoxes = [];
	pointerup: 'mouseup',
			titleFontSize = vm.titleFontSize;
 * @todo remove at version 3
			ctx.moveTo(x - xOffset, y - yOffset);
		alpha: 1

	},
		};
		index = i % count;
				return labelOpts.filter(item, me.chart.data);
}
		return value;
		} else {


		var meta = me.getMeta();

	easeInOutExpo: function(t) {
		// Only handle target event on tooltip change
			for (i = 0; i < ilen; ++i) {
		}
		// Labels
	_computeGridLineItems: function(chartArea) {
			// We only need to render at this point. Updating will cause scales to be
	id: 'filler',
	 * Element type used to generate a meta dataset (e.g. Chart.element.Line).
		return this.setChannel('hsl', 0, val);
	/**
				y: y,
};


		var numData = data.length;
			// recomputed generating flicker & using more memory than necessary.
}
		actual = view[key];
		var max = ticksOpts.max;
		}
	var x = scaleClip(xScale, halfBorderWidth);
			animation.currentStep = Math.min(nextStep, numSteps);
		var chart = me.chart;
	var z = (r * 0.0193) + (g * 0.1192) + (b * 0.9505);
		r = Math.sqrt(Math.pow(curve1[0].x - cx, 2) + Math.pow(curve1[0].y - cy, 2));
	var start, end, center, i, point;
	unwatchForRender(node);
		var significand = Math.floor(value / Math.pow(10, exp));
			break;
	 * @private
		var ctx = me.ctx;
			valueInPixels = styleValue;
}
		var value = data.datasets[datasetIndex].data[index];
convert.rgb.lab = function (rgb) {
			if (left < right && top < bottom) {
				}
};
		callbacks: {
		return colorString.hexString(this.values.rgb);
}
		caretSize: 5,
			width: existingModel.width,

		var values = this.values;
		// Reset minSize
		// If there are too many major ticks to display them all
		me.paddingBottom = 0;


		if (meta.yAxisID === null || !(meta.yAxisID in scales) || dataset.yAxisID) {
	"slateblue": [106, 90, 205],
	request: null,
				me.update(true);
			this.setValues('rgb', vals);
	x = x2 > 0.008856 ? x2 : (x - 16 / 116) / 7.787;
			for (datasetIndex = 0; datasetIndex < datasets.length; datasetIndex++) {
	font = helpers$1.options._parseFont(options);
		}

		var ilen = props.length;

			var root = canvas.getRootNode ? canvas.getRootNode() : document;
		if (!container) {
		var canvas = context && context.canvas;
			var startAngle = opts.rotation % DOUBLE_PI$1;


function isVertical(vm) {
	day: 'MMM D',
function computeFlexCategoryTraits(index, ruler, options) {
			} else if (!pointAfter || pointAfter.model.skip) {
		// http://www.w3.org/TR/WCAG20/#contrast-ratiodef
		if (e.type === 'mouseout') {
	},
   var abbr =  /^#([a-fA-F0-9]{3,4})$/i,
elements.Arc = Arc;
		point._yScale = yScale;



});

         rgb[i] = parseInt(match[i + 1]);
	// convert to all the other color spaces
		var a = 1;
		helpers$1.each(meta.data, function(element, index) {
 * Private helper to create a tooltip item model
		linear: function(tickValue, index, ticks) {
		r = +value.right || 0;


	}

			var el = elements[i];
		core_plugins.notify(me, 'afterUpdate');

	 * @param {function} [options.merger] - The merge method (key, target, source, options)
};
		},
				var center = el.getCenterPoint();
 * @param {object} position - the point to be nearest to
		// Set to 0 instead of canvas.size because the size defaults to 300x150 if the element is collapsed
}
	 * @param {ILayoutItem} layoutItem - the item to remove from the layout
				ctx.rect(x - size, y - size, 2 * size, 2 * size);
	if (time === max || options.bounds === 'ticks') {
       b = Math.round(rgba[2]/255 * 100);


		}
		return type && new type({
	var precision = generationOptions.precision;
	/**
		pointPosition = scale.getPointPosition(0, radius);
		}
		} else {
	_layers: function() {

				tx1 = tx2 = x1 = x2 = alignedLineValue;
				if (!helpers$1.isNullOrUndef(tooltipItem.value)) {
			if (options.borderAlign !== 'inner') {
	clear: function(chart) {
	draw: function() {
			}
	x /= 95.047;
			return Math.max(Math.min(pt, max), min);
 * @param {Chart} chart - the chart
		var meta = dataset._meta[me.id];
			me.active = [];
 * @prop {number} height - Height of item. Must be valid after update()
			], context);
	 * @since 2.7
		var line = meta.dataset;
				})
				};
			pt.y += vm.footerMarginTop;
   if (match) {
 * @name IInterfaceOptions#boolean
		chartArea: filterByPosition(layoutBoxes, 'chartArea'),
 */
						labelsAdded = true;
		var ipixels = me.calculateBarIndexPixels(me.index, index, ruler, options);
}
		return this.setChannel('hsv', 2, val);
		if (!('channels' in convert[model])) {
};
		me.beforeBuildTicks();
		padding: 10,
		var s = 1.70158;

		var alignmentOffset = function(dimension, blockSize) {
			pixels: pixels,
	var v;
			flip ? previous.controlPointPreviousY : previous.controlPointNextY,
				y3 = y2 + caretSize;
};
	if (next === null) {
	var len0 = 0;
		model.backgroundColor = resolve([custom.hoverBackgroundColor, dataset.hoverBackgroundColor, getHoverColor(model.backgroundColor)], undefined, index);
		chunk: size / count,
 */
		var y = vm.y;
						// then merge source scale to correctly overwrite the defaults.
	if (isFinite(target) && Math.floor(target) === target) {
			keys = Object.keys(source);
		if (!me._isVisible() || !tickOpts.display || minRotation >= maxRotation || numTicks <= 1 || !me.isHorizontal()) {

		for (var i = 0; i < 3; i++) {
convert.ansi256.rgb = function (args) {
		return obj.id === id;


/**
			? layout.box.fullWidth && params.availableWidth
	addEventListener: function(chart, type, listener) {
				model.controlPointPreviousY = controlPoints.previous.y;
			x = vm.x;
				ctx.lineWidth = width;



	 */
	/**
		}, padding);

			niceFraction = 5;
			h: height
	},
		display: true,
		var length = points.length || 0;
		if (gcLen > arrayOfThings.length) {

		if (vm.skip) {

		me._layers.forEach(function(item, index) {
 * @param {number} fontSize - the label font size

				} else {

	],
					drawRadiusLine(me, gridLineOpts, offset, index);
	if (!evenMajorSpacing) {
	},
				}
		// Clipping for Points.
		}
	if (e.native) {


		}
			var currentItem = arrayToSearch[i];
 * @returns {number[]} array of tick values
		i0 = table[mid - 1] || null;
	if (proxy) {

	if (isFinite(fill)) {

				if (x >= hitBox.left && x <= hitBox.left + hitBox.width && y >= hitBox.top && y <= hitBox.top + hitBox.height) {
	lmin = (2 - s) * vmin;
				ringWeightOffset += this._getRingWeight(i);
	"antiquewhite": [250, 235, 215],
	var hasId = function(obj) {
		// Value is good, return it
			var contains180 = startAngle === -PI$1 || endAngle >= PI$1;
	 *  else, if and object, use defined properties and sets undefined ones to 0.
					ctx: me.ctx,
	];
				'" is deprecated. Please use "' + current + '" instead');
		var p = 0;
			borderValue = alignBorderValue(me.left);


		var start, end, min, max;
		},
		}
			position: 'left',
			options.axis = options.axis || 'xy';

				me.max = DEFAULT_MAX;
		var opts = me.options;
			ctx.save();
			break;
		if (!me.isHorizontal()) {
	var min = helpers$1.isNullOrUndef(thickness)
				tx2: tx2,
		return significand * Math.pow(10, exp);
		var clientHeight = container.clientHeight;
					if (i !== me.index) {

			return true;
		}

	 * @private

		var centerY = (chartArea.top + chartArea.bottom) / 2;
		}
		if (me._cachedDataOpts === values) {
		};
	var options = scale.options.time;
		for (j = 0, jlen = metadata.length; j < jlen; ++j) {
		} else if (tickOpts.suggestedMin !== undefined) {
		me.paddingTop = 0;
plugins.filler = filler;
		t = r = b = l = value;

		};
	var b = lab[2];
	var lastTick = valueOrDefault$b(generationOptions.max, tickVal);
		/**
function toFontString(font) {
		numSpaces = Math.ceil(numSpaces);
		}

	},

}
		if (isNaN(dataset.data[index]) || meta.data[index].hidden) {
	var highestLabelSize = 0;

				me.max = 0;
		var mouseX, mouseY;
 * @namespace Chart.pluginService
	"lightcyan": [224, 255, 255],
		var sinRotation = Math.sin(angle);
};
				if (key !== '_meta' && key !== 'data') {
	},
	green: function (val) {
 * to determine the aspect ratio to apply in case no explicit height has been specified.
 */
	//
		hue = 0;
		// types from their toString() value but let's keep things flexible and assume it's

			}
			furthestLimits.b = vLimits.end;

var helpers = {
	// returns Number or undefined if no constraint


/**
		this.setValues('hwb', hwb);
				// dominant factor here, so get that length first and account for padding
			}
	var g = rgb[1];

helpers$1.removeEvent = removeListener;
		var me = this;
		var source = this.values;
		helpers$1.each(boxes.chartArea, function(layout) {

 * @private
		}]
			pixelMargin: pixelMargin,

		var sval = source[key];
	 * hook, in which case, plugins will not be called on `afterTooltipDraw`.
 * @private
	} else {
			maxHeight = me.maxHeight - getTickMarkLength(options.gridLines)
});
	if (renderHeight === null || renderHeight === '') {
		if (vm.base > vm.x) {

	if (typeof vals === 'number') {
	var target;
		multiKeyBackground: '#fff',
			right: 0,
	},
	}
		helpers$1.each(meta.data, function(element, index) {
	 */
	},
					paddingLeft = isBottom ?
			ctx.globalAlpha = opacity;
var Legend = core_element.extend({
		+ font.family;
		], {
		me._layers = [];
	if (angle === 0 || angle === 180) {
		}
		}
	var stepSize = generationOptions.stepSize;

function stackData(scale, stacks, meta, data) {

	var curr = pixels[index];
			// circle with `radius`. For more details, see the following PRs:

	/**
      }
			chart.animating = false;
		// PRIVATE
			return 0;
		steps: 4
		};
		for (i = 0, ilen = text.length; i < ilen; ++i) {
 */
		if (meta) {

	diff: function(max, min, unit) {
	// Get the footer and beforeFooter and afterFooter lines
				controller._configure();
		me.lastActive = [];

 */
		return array.reduce(function(max, value) {
			}
		if (typeof result === 'object') {
		var axisWidth = gridLines.drawBorder ? valueAtIndexOrDefault(gridLines.lineWidth, 0, 0) : 0;
		}
		css = '/* Chart.js */\n' + css;

   else if (vals = getHsla(string)) {
		if (setMin !== setMax) {
			var value = colorName[keyword];

		helpers$1.each(ANIMATION_START_EVENTS, function(type) {
	},
			width = helpers$1.measureText(ctx, cache.data, cache.gc, width, label);
	},
	"lightgray": [211, 211, 211],
function getHwb(string) {
		// IMPORTANT: after this point, we consider that `this.ticks` will NEVER change!
		b = value.bottom;
	}
		scaleOpts = me._getIndexScale().options;

		return radians * (180 / Math.PI);
			} else if (this.sign(pointBefore.deltaK) !== this.sign(pointCurrent.deltaK)) {
		}
	}
	return [x, y, z];
		core_plugins.notify(me, 'beforeInit');
			var container = chart.options.maintainAspectRatio && node.parentNode;
});
				controlPoints = helpers$1.splineCurve(
	y = (l + 16) / 116;
	"peru": [205, 133, 63],

		return degrees * (Math.PI / 180);
		c = 2.0 * s * l;
				textOffset = position === 'top'
				tooltipItems = tooltipItems.filter(function(a) {
	 * @private
	 */
	 * Invalidates cache for the given chart: descriptors hold a reference on plugin option,
		if (type.substr(0, 7) === '[object' && type.substr(-6) === 'Array]') {
		}
	// so that they divide the major ticks into even chunks
	},
	 * @private
	toLineHeight: function(value, size) {
	 * The coordinate (0, 0) is at the upper-left corner of the canvas
return src;
			}
	tooltips: {
		return t * t * t;
			beforeBody: helpers$1.noop,
	var res = {};

		} else if (position === 'bottom') {
		var labelFont = helpers$1.options._parseFont(labelOpts);
							hidden: isNaN(data.datasets[0].data[i]) || meta.data[i].hidden,
			hi = mid - 1;
		var me = this;
 * @private
		'Doughnut',
	}
		if (numMajorIndices > ticksLimit) {
 * @private

			this.drawTitle(pt, vm, ctx);
		var i, ilen;
		'Scatter'
			flip ? previous.controlPointPreviousX : previous.controlPointNextX,
	_tickSize: function() {
			// import the library before setting platform options.
		me._ruler = me.getRuler();
				ds = chart.data.datasets[dsMeta.index];
		item._layers = item._layers || function() {

	if (!propagate) {

		}
	},
		var lineModel = meta.dataset._model;
					break;

		backdropPaddingX: 2,
			chart.animating = true;
				// Use e.native here for backwards compatibility
	},
			pointAfter = i < pointsLen - 1 ? pointsWithTangents[i + 1] : null;
		chart.radiusLength = (chart.outerRadius - chart.innerRadius) / chart.getVisibleDatasetCount();
	},


		me.min = helpers$1.isFinite(me.min) ? me.min : null;
	legend: {
		// Scriptable options
	afterDataLimits: function() {
	} else {

		}
}
	var format = parser || options.format;
	return vals;


		}
			model.labelColors = labelColors;
	},
		// Set correct angles if not resetting
	toPadding: function(value) {
			if (config.tension !== undefined && config.lineTension === undefined) {
		// Buffer any update calls so that renders do not occur

	}

	},
	},
	 * @param {object} [thisArg] - The value of `this` provided for the call to `fn`.
		var optionTicks = me.options.ticks;
				var angleRadians = helpers$1.toRadians(me.labelRotation);
		x: element._model.x,
					ctx.lineWidth = 1;
			xOffset = Math.cos(rad) * radius;

	cutoutPercentage: 50,
};
			return;

	var i, j, jlen, label, tickFont, fontString, cache, lineHeight, width, height, nestedLabel, widest, highest;
var valueOrDefault$d = helpers$1.valueOrDefault;
			var remain = tickValue / (Math.pow(10, Math.floor(helpers$1.log10(tickValue))));
				y: current.y + fb * (next.y - previous.y)
	gridLines: {
					helpers$1.canvas.lineTo(ctx, previous._view, currentVM);
			end: scale._endPixel,
			style.backgroundColor = style.borderColor;
	for (var len = models.length, i = 0; i < len; i++) {

	showLines: true,
					// show value on first line of multiline label
		if (t >= 1) {
		var meta = dataset._meta && dataset._meta[id];
	notify: function(chart, hook, args) {
	},
		var vm = this._view;
function positionIsHorizontal(position) {


	}
 */
		}
		if (pixelRatio === 1) {

		// This function calculates Bézier control points in a similar way than |splineCurve|,
core_controller.controllers = controllers;
		var tickOpts = options.ticks;



var HALF_PI = PI / 2;
      }
		return nonSkipped(ticks);
			me.width = me._length = chart.width - me.margins.left - me.margins.right;

	var valueCount = scale.chart.data.labels.length;
	 */
						timestamps = timestamps.concat(labels);
	},
					elements.push(element);
	var v = hsv[2] / 100;
		x -= radiusAndPadding;
				y3 = y1;
	"red": [255, 0, 0],
		return t * t;
			// So ensure that our range is good
	helpers$1.each(model.beforeBody.concat(model.afterBody), maxLineWidth);
			return UNITS[i];
		if (t < 0.5) {
		ctx.textAlign = bodyAlign;
	onDataPush: function() {

			return fn.apply(thisArg, args);
	helpers$1.getMaximumWidth = function(domNode) {

			// no possible conversion, or this node is the source model.
			window.oRequestAnimationFrame ||
		//
		this.setValues('alpha', alpha - (alpha * ratio));

	helpers$1.aliasPixel = function(pixelWidth) {
}
		} else if (index === 0) {
		helpers$1.each(bodyItem.lines, maxLineWidth);
			data = datasets[meta.index].data;
		ctx.textBaseline = 'middle';
	/**
	// Use a registration function so that we can move to an ES6 map when we no longer need to support
	b = b > 0.0031308
		resizer.parentNode.removeChild(resizer);
			// Inverted or 0 length range can happen when
	"firebrick": [178, 34, 34],
	 * Called at chart destruction time, releases any resources associated to the context
   else if (match = string.match(rgba)) {
function getTooltipSize(tooltip, model) {
		};
	height += footerLineCount ? model.footerMarginTop : 0; // Footer Margin
}

						title = labels[item.index];
	var increment = arr.length / numItems;
				var dataPoint = data.datasets[item.datasetIndex].data[item.index];


		if (me.min === null) {
		callback: core_ticks.formatters.linear
			} else {
	var y2 = Math.pow(y, 3);
		if (x >= me.left && x <= me.right && y >= me.top && y <= me.bottom) {

							lineWidth: style.borderWidth,

		var chart = me.chart;
					? ((!rotation ? 0.5 : 1) - lineCount) * lineHeight
	// Only parse if its not a timestamp already
	easeOutBack: function(t) {
		chartArea.w = newWidth;
	});
			rgb[i] = 255 - this.values.rgb[i];
			helpers$1.mergeIf(legendOpts, core_defaults.global.legend);

			len1 = curve1.push(p1);
				animations[i] = animation;


		var tickOpts = opts.ticks;
 * @private
				if (c0.valid) {
	},

		var scale = me.chart.scale;
	var lf, rf; // functions to determine left, right alignment
	 * value returned by `fn`. If `fn` is not a function, this method returns undefined.
			return value;
	},
		return this._ticks;
 * Recursively merge the given config objects representing the `scales` option

		'mouseout',
		}
			return [q, v, p];

	var height = model.yPadding * 2; // Tooltip Padding
		// we have a separate stack for stack=undefined datasets when the opts.stacked is undefined

		// Data min/max
	 * @private


		}
	},
		}
			} else {
	 * @private
	_update: function(reset) {
			ty2 = me.top + tl;
		return ringWeightOffset;
	"indigo": [75, 0, 130],
					currentColWidth = 0;
		for (var len = adjacents.length, i = 0; i < len; i++) {
			labelRotation = helpers$1.toDegrees(Math.min(

	 * @param {string} type - The ({@link IEvent}) type to listen for
		}
		var area = me.chart.chartArea;


		// If value is a data object, then index is the index in the data array,
		size: 3600000,
					meta.type,
	getPixelForTick: function(index) {
		delete canvas[EXPANDO_KEY];
		// doesn't contain it, so let's initialize the view to the target value.

		});
				}
__proto__: null,

function getIntersectItems(chart, position) {
	 * @function
		// Elements used to detect size change should not be injected for non responsive charts.
	 * @private
	return {
		return labels;
		var numMeta = meta.data.length;
				duration: config.duration,

		var lum2 = color2.luminosity();

		var me = this;

		for (i = 0, ilen = rects.length; i < ilen; ++i) {
					tickString = tickValue.toFixed(numDecimal);

function parseTickFontOptions(options) {
		var me = this;
	helpers$1.almostWhole = function(x, epsilon) {
		for (i = 1; i < sqrt; i++) {
	};
		ctx.save();
		if (options.bounds === 'ticks' && timestamps.length) {
		radiusReductionTop = numberOrZero(radiusReductionTop);
		var values = {};
			point.cy = center.y;
	 */
      return;
		if (t3 < 0) {
		var rtlHelper = getRtlHelper(vm.rtl, vm.x, vm.width);
		var meta = me.getMeta();
	 */

	 * Handle an event

		var chartArea = chart.chartArea;
		var endAngle = startAngle + (arc.hidden ? 0 : me._angles[index]);

		} else if (position === 'bottom') {
		titleMarginBottom: 6,
	hwbArray: function () {

	helpers$1.each(body, function(bodyItem) {
		var me = this;
 * @private
 * Provided for backward compatibility, use Chart.helpers.valueOrDefault instead.
		 * @deprecated since version 2.5.0
				// move the top up to 0
	}
   }
	"teal": [0, 128, 128],
		var major = majorUnit && majorFormat && tick && tick.major;
	},
		var radiusReductionBottom = -Math.max(furthestLimits.b - (me.height - me.paddingTop), 0) / Math.cos(furthestAngles.b);

		'Bubble',
			if (me.min >= me.max) {
		y2 = Math.max(vm.y, vm.base);
			if (element) {
		if (values.alpha !== 1) {
	var t2;
					x: e.x,

				var title = '';
			var startY = Math.sin(startAngle);
				}
		}
		me.afterSetDimensions();

		line._scale = scale;
			}
 * @todo remove at version 3

			index = idx !== -1 ? idx : index;
	},
for (var name in colorName$1) {
			{time: max, pos: 1}
				ctx.lineTo(target.x, previous.y);
	},
	 * @returns {CanvasRenderingContext2D} context2d instance
		this.setValues('hsl', hsl);
			ctx.lineJoin = valueOrDefault$e(legendItem.lineJoin, lineDefault.borderJoinStyle);
	}
	);
function splitNewlines(str) {
	/**
	"thistle": [216, 191, 216],
	}
	/**

core_controller.Animation = core_animation;
		me._hoveredItem = null;
		var me = this;
});
				var datasets = chart.data.datasets;
		// Props to Rob Spencer at scaled innovation for his post on splining between points
 * returns the position for a timestamp equal to 42. If value is out of bounds, values at

			}
	easeInOutElastic: function(t) {
		};
		rgb[i] = val * 255;
			});
			var k = 0;
		var tickFontColor = valueOrDefault$c(tickOpts.fontColor, core_defaults.global.defaultFontColor);
			if (value instanceof CanvasGradient) {
			for (var i = 0, ilen = array.length; i < ilen; ++i) {
	drawArea(ctx, curve0, curve1, len0, len1);
			ctx.setLineDash(vm.borderDash || globalOptionLineElements.borderDash);
		positions.forEach(function(pos) {
	hwb: function () {
	"darkturquoise": [0, 206, 209],
	getCaretPosition: function(tooltipPoint, size, vm) {
			borderWidth: model.borderWidth,
	descriptors: function(chart) {
	},
		'borderWidth',
		var me = this;
	hex: {channels: 1, labels: ['hex']},
			} else {
	},


		me.max = Number.NEGATIVE_INFINITY;
		}

	 * Returns true if the `a0` and `a1` arrays have the same content, else returns false.
			me.top = 0;
	responsive: true,
}
	core_controller.scaleService.registerScaleType(type, scale, scale._defaults);
	unregister: function(plugins) {
		var vm = this._view;
		borderWidth: 'pointBorderWidth',
	},
function interpolate(start, view, model, ease) {
	clear: function() {
	calculateTickRotation: function() {
		var labelFont = helpers$1.options._parseFont(labelOpts);

		// `format` could return something else than a timestamp, if so, parse it
					items.push(element);

				// This case happens when the user replaced the data array instance.
 * @returns {number[]} array of tick values
	var h = hsl[0];
			var valuesPerStack = {};
		me.afterFit();
	return [r, g, b];
		var offset = lineHeight / 2 + opts.padding;
	 * @param {Chart} chart - Chart from which to remove the listener
		_titleFontStyle: valueOrDefault$8(tooltipOpts.titleFontStyle, globalDefaults.defaultFontStyle),
		};
		ticks.push(time);
				scale = new scaleClass({
	helpers$1.nextItem = function(collection, index, loop) {
			ticks.reverse();
	},
			columnWidths.push(currentColWidth);


		'borderWidth',

	 */
			}

			/* falls through */
	/**
	};

		var hasStacks = opts.stacked;
elements.Point = Point;
var resolve$3 = helpers$1.options.resolve;
			return [{
			if (!source) {
/**
		return pos === 'top' || pos === 'bottom';
		}
	 * @returns {boolean}
			return unit;
	stop: function() {
	_element: Title,
		return yScale.getPixelForValue(value);
	return res;
	} else {
	var chartArea = tooltip._chart.chartArea;

	 * Function to format an individual tick mark
		mirror: false,
	},
	var r = Math.floor(args / 36) / 5 * 255;
			}

		}
/**
	},
	// the model (scaleTop, scaleBottom and scaleZero) because some external plugins and
				if (dsMeta.index === datasetIndex) {
/**
// INTERNAL: static default options, registered in src/index.js
		}
/**
		var isHorizontal = me.isHorizontal();

		var me = this;
		if (index < 0 || index > ticks.length - 1) {
		var values = core_datasetController.prototype._resolveDatasetElementOptions.apply(me, arguments);
function createDiv(cls) {
			var chan = rgb[i] / 255;
		if (target === index || target < 0 || target >= count) {
		displayColors: tooltipOpts.displayColors,
		var ilen = descriptors.length;
	addBox: function(chart, item) {
				}
			}
		model.radius = valueOrDefault$7(options.hoverRadius, options.radius);
 * @prop {function} getPadding -  Returns an object with padding on the edges
	var i, value;
	};

	},
function deriveBFS(fromModel) {
		var height = size.height;
						return {
						var meta = chart.getDatasetMeta(0);
helpers.indexOf = function(array, item, fromIndex) {
	ticks.push(isNullOrUndef$2(min) ? niceMin : min);
				x: current.x + fb * (next.x - previous.x),
	// The user might still use the deprecated `format` option for parsing.

			return;
			x = (vm.x + vm.base) / 2;
				} else {
					type: scaleType,
	// If min, max and stepSize is set and they make an evenly spaced scale use it.
		var options = (config.options && config.options.plugins) || {};
					offset = me.getDistanceFromCenterForValue(me.ticksAsNumbers[index]);
			furthestAngles.l = angleRadians;
	"darkslategrey": [47, 79, 79],
		if (me.max === null) {
		element.$previousStyle = {
	 * @param {function} listener - The listener function to remove from the event target.
		if (lum1 > lum2) {
		adjustPointPositionForLabelHeight(angle, scale._pointLabelSizes[i], pointLabelPosition);
		if (chart.options.elements.line.capBezierPoints) {
 * a decimal between 0 and 1: 0 being the start of the scale (left or top) and 1 the other
		}
			if (value === undefined) {
}
	opaquer: function (ratio) {
	},
	}
		return ticksFromTimestamps(me, ticks, me._majorUnit);
	},
		var args = {
	greyscale: function () {

}
				this.getDatasetMeta(element._datasetIndex).controller[prefix + 'HoverStyle'](element);

	_computeLabelItems: function() {
		var context = platform.acquireContext(item, config);

		return Math.PI * ((vm.endAngle - vm.startAngle) / (2 * Math.PI)) * (Math.pow(vm.outerRadius, 2) - Math.pow(vm.innerRadius, 2));
   if (alpha === undefined) {
		} else {
	 * @see https://github.com/chartjs/Chart.js/pull/4556
			left: 0

	}
	var keys = Object.keys(model);
		me._lastActive = me._lastActive || [];

		var xScale = me._xScale;
convert.lab.lch = function (lab) {
	}
		core_scale.prototype.convertTicksToLabels.call(this);
				before: [],
			rotation = Math.PI * (opts.position === 'left' ? -0.5 : 0.5);

		var options = me._resolveDataElementOptions(point, index);
				var cosRotation = Math.cos(angleRadians);
			next = majorIndices[count * spacing];
		var x, y;

				meta.controller = new ControllerClass(me, i);
		var isHorizontal = me.isHorizontal();
var restoreTextDirection = function(ctx) {
	},
	var value = 1 in arguments ? arguments[1] : convert.rgb.hsv(args)[2]; // hsv -> ansi16 optimization
		return (value - me.min) * scalingFactor;
	 * Returns value at the given `index` in array if defined, else returns `defaultValue`.
convert.rgb.xyz = function (rgb) {
	 * Backward compatibility: since 2.1.5, the title is registered as a plugin, making

			y: y,
	_parseFont: function(options) {
	if (typeof parser === 'function') {
		}
	"lightslategrey": [119, 136, 153],
	},
var conversions_13 = conversions.hcg;
	"yellowgreen": [154, 205, 50]
	draw: function(easingValue) {
		var dataset = this.getDataset();
					var minVal = helpers$1.min(valuesForType);
		// Start from the top instead of right, so remove a quarter of the circle
			width = w;
	},
		core_scaleService.addScalesToLayout(this);

	var stepSize = resolve$5([timeOpts.stepSize, timeOpts.unitStepSize, 1]);
		: g * 12.92;
		var cw = helpers$1.getConstraintWidth(domNode);
	// Shared Methods
		},
		}
		x: function(chart, e, options) {
				var view = activeElement._view;
			width: renderWidth,

/**
core_defaults._set('polarArea', {
		if (me._bufferedRender) {
var isNullOrUndef$1 = helpers$1.isNullOrUndef;
			ticks.reverse();
		var model = element._model;
		rootNode.appendChild(style);
	 */
		}
	var a = lab[1];
	 */

		conversion[toModel] = wrapConversion(toModel, graph);
	 */
		me._drawLabels();
		var timeOpts = me.options.time;

		}
	"tomato": [255, 99, 71],
					}
		}
		var meta = me.getMeta();
		var i, ilen;
				}
		var longest = 0;
	}
		model.radius = valueOrDefault$6(options.hoverRadius, options.radius);
			if (index === 0 && !tickOpts.reverse) {
				yAxisOptions.id = nextAvailableScaleId(scalesOptions.yAxes, 'y-axis-', index);
	_configure: function() {
			if (hasStacks) {
		}
		// Remember Last Actives
			var columnWidths = me.columnWidths = [];

var math = helpers_math;
			ctx.fillText(legendItem.text, xLeft, yMiddle);
core_defaults._set('global', {
		}
 */
	b = 200 * (y - z);
		return maxTicks;
		me.transition(easingValue);
		for (var i = 0, ilen = me.data.datasets.length; i < ilen; ++i) {
		var me = this;
});
		var hue = (hsl[0] + degrees) % 360;
	var x = (r * 0.4124) + (g * 0.3576) + (b * 0.1805);
	 * @private
	return result;
				borderDashOffset: borderDashOffset,
		return (contrastRatio >= 4.5) ? 'AA' : '';
			max: max,
		var me = this;
	startOf: abstract,
				z: 0,
	if (arc.fullCircles) {
		lineHeight: valueOrDefault$a(nestedOpts.lineHeight, options.lineHeight)
				me.max = Math.max(me.max, tickOpts.suggestedMax);
				xAxisOptions.id = nextAvailableScaleId(scalesOptions.xAxes, 'x-axis-', index);
		 * @private
				minSize.width = Math.min(me.maxWidth, minSize.width + labelWidth);
		me.paddingBottom = 0;
// INTERNAL: static default options, registered in src/index.js
		var lineOptions = options.elements.line;
	var r;
var core_scale = Scale;
	var z = xyz[2];
	//
	 * Initializes resources that depend on platform options.
		if (me.options.reverse) {

				x3 = x2 + caretSize;
		var i, ilen, angle;
			} else {

			label = tick.label;
		hwb[2] += hwb[2] * ratio;
	var renderWidth = canvas.getAttribute('width');
	value: function (val) {
});
	 */

		var options = me.options;
	},
		var w = clientWidth - paddingLeft - paddingRight;
			// instead of me.right and me.bottom because me.width and me.height
				// NOTE: two different object instances will never be equal: {x:20} != {x:20}

		var scalesOptions = options.scales || {};
	},
					// Fill a white rect so that colours merge nicely if the opacity is < 1
						if (value.min !== 0) {
				});
			return target;
	}
	 */
var PI$1 = Math.PI;
	// label settings
	/**
		ctx.beginPath();
		var area = chart.chartArea;
 */
   }
		if (me.options.animation && me.options.animation.duration) {
				lastDrawnIndex = index;
			helpers$1.splineCurveMonotone(points);
		var vm = this._view;
				if (lineWidth !== 0) {
	var factors, factor, i, ilen;
		// https://www.html5canvastutorials.com/advanced/html5-canvas-mouse-coordinates/
		var ringWeightOffset = 0;
		scatter: {
		var i, ilen, value;
		});

		var tickOpts = me.options.ticks;
				if (element.inXRange(position.x)) {
			bottom: me.paddingBottom || 0


				y: me.top + alignmentOffset(legendHeight, columnHeights[0]),

}
	/**
		return parent;

		'borderAlign',
			ctx.moveTo(x + yOffset, y - xOffset);

   return "hwb(" + hwb[0] + ", " + hwb[1] + "%, " + hwb[2] + "%"
		 */
	"oldlace": [253, 245, 230],
		helpers$1.each(initial.style || {}, function(value, key) {
				currentColWidth = Math.max(currentColWidth, itemWidth);
 * @deprecated since version 2.8.0
	}
	"olive": [128, 128, 0],
		} else if (len0 && len1) {
};
		core_layouts.update(this, this.width, this.height);
function getBaseModel(tooltipOpts) {
	},
		return -(Math.sqrt(1 - t * t) - 1);

	} else {
}
	for (i = UNITS.length - 1; i >= UNITS.indexOf(minUnit); i--) {

		for (i = 0, ilen = animations.length; i < ilen; ++i) {

					((opts.stacked === undefined && meta.stack === undefined) ? datasetIndex : ''),
					curve1.push(p1);
		var me = this;
	// label settings
	hexString: function () {
		s = c / (2 * l);
		return meta;
		me._xScale = me.getScaleForId(meta.xAxisID);
		return 'origin';
	 */
			ctx.lineTo(target.x, target.y);
			return x >= (chart.width - (size.width / 2));
}
	}
 * Converts the given font object into a CSS font string.

		if (cached && !custom) {
				lazy: arguments[1]
	});
      a = scale(a, 0, 1);
		});
	ctx.closePath();
 * Note: only events with different types are mapped.
	switch (fill) {
		if (isNullOrUndef(rawValue)) {
	},
	},
			_options: me.options.tooltips
			pointCurrent = pointsWithTangents[i];
			model.afterBody = me.getAfterBody(tooltipItems, data);

	},
		interpolate(start, view, model, ease);
	 */
	niceMin = Math.floor(rmin / spacing) * spacing;
		return niceFraction * Math.pow(10, exponent);
		var horizontalBoxes = boxes.horizontal;
	}
			startPixel = me.top;
		var labels, i, ilen;
	 */
		values.tension = valueOrDefault$6(config.lineTension, lineOptions.tension);
			// Utility
		model.borderWidth = valueOrDefault$5(options.hoverBorderWidth, options.borderWidth);
	} else if (angle < 180) {
	bounds: 'data',
	var q = 255 * v * (1 - (s * f));
				if (gridLines.drawTicks) {
	 * @param {string} format - the date/time token
 * @deprecated since version 2.6.0
};
	minute: {
				me.min = Math.min(me.min, tickOpts.suggestedMin);
		var datasets = [];
		// Here we haven't been positioned yet, but dimensions are correct.
				drawArea(ctx, curve0, curve1, len0, len1);
			}
	transition: function(easingValue) {

		var tickLabelWidth = me.ctx.measureText(label).width;
			h += 1;
		}
		// DEPRECATION, we should return time directly
	var c = s * v;
		}
}
	},
function interpolate$1(table, skey, sval, tkey) {
	},

	},

var DOUBLE_PI = PI * 2;
				isDefault: true,

	 * @private
	 * Returns start of `unit` for the given `timestamp`.
			return 1;
			points[i].pivot();

core_controller.helpers.each(

			rotation = isLeft ? -0.5 * Math.PI : 0.5 * Math.PI;
	//
		}

			var position = getRelativePosition(e, chart);
function getMargins(horizontal, chartArea) {
			x: vm.x,
}
	/**
		case '%':
	],

scale_time._defaults = _defaults$4;
		animateScale: false


		if (x + size.width > chart.width) {


		hue = 4 + (r - g) / chroma + 4;
	 * @param {number} timestamp - the input timestamp
};
	},
		if (core_plugins.notify(me, 'beforeDatasetsUpdate') === false) {
 * EventTarget.addEventListener compatibility: Chrome, Opera 7, Safari, FF1.5+, IE9+

 * @todo remove at version 3

} : {});
		edge = swap(edge, 'bottom', 'top');
	z = z > 0.008856 ? Math.pow(z, 1 / 3) : (7.787 * z) + (16 / 116);
}
	var first = +adapter.startOf(ticks[0].value, majorUnit);
function setMajorTicks(scale, ticks, map, majorUnit) {
 * Provided for backward compatibility, not available anymore.
		} else if (display) {
};
				y3 = y1;
		}
		me.innerRadius = Math.max(me.outerRadius - chart.radiusLength * chartWeight, 0);
		var me = this;
				var itemWidth = boxWidth + (fontSize / 2) + ctx.measureText(legendItem.text).width;
		return list.outerHTML;
			});
		} else {
		if (t === 1) {
	 * @private
	},
           + (alpha !== undefined && alpha !== 1 ? ", " + alpha : "") + ")";
	// we use the extended greyscale palette here, with the exception of
			: params.vBoxMaxWidth;

	buildTicks: function() {

		model.y = backgroundPoint.y;
		var meta = me.getMeta();
 * a deep copy of the result, thus doesn't alter inputs.
	_dataElementOptions: {
			target[key] = helpers.clone(sval);
		// initialize item with default values
	 * @return {number}
		return value !== null && Object.prototype.toString.call(value) === '[object Object]';
 */
	"mediumvioletred": [199, 21, 133],
	for (i = 0, ilen = (boxes || []).length; i < ilen; ++i) {
	 * Average mode places the tooltip at the average position of the elements shown
				me._drawTitle.apply(me, arguments);
});
		var ctx = chart.ctx;


					ivalue = stackLength.start === undefined ? stackLength.end : stackLength.min >= 0 && stackLength.max >= 0 ? stackLength.max : stackLength.min;
	}
 * @class Chart.Controller
	case 'top':
		expando.containsStyles = true;
			}
};
		opacity: 0,
		options: legendOpts,
	},
		var rects = boundingRects(vm);
	ctx.beginPath();
		return;
		}


	 * Get the padding needed for the scale

	 */
				// invert drawing order
			skip: custom.skip || isNaN(x) || isNaN(y),
			}

		layout = boxes[i];
	var wrappedFn = function (args) {
			textAlign = !rotation ? 'center' : 'left';
	// The resizer needs to be attached to the node parent, so we first need to be
		var i, ilen, spacing, avgMajorSpacing;
		var element = this.getMeta().dataset;

	var g = hcg[2] / 100;
	},
		if (!me._isVisible()) {

		var lastDrawnIndex = -1;
		}

		pointStyle: 'pointStyle',
		helpers$1.merge(element._model, element.$previousStyle || {});
	var renderHeight = canvas.getAttribute('height');
		// The areas L1 and L2 are the left axes. R1 is the right axis, T1 is the top axis and
	var rdif;
			skip: custom.skip || isNaN(x) || isNaN(y),

 * They add extra margins on the both sides by scaling down the original scale.

	},
var helpers$1 = helpers_core;
	draw: function() {
				niceFraction = 2;
	},
				if (meta.xAxisID === me.id || meta.yAxisID === me.id) {
		}
							// Extra data used for toggling the correct item
		me.handleTickRangeOptions();

		var me = this;
			boxWidth: 40,
	 */
		f = c / v;
		lines = pushOrConcat(lines, splitNewlines(beforeTitle));
	draw: function(chartArea) {
				var labelWidth = tickOpts.mirror ? 0 :
		chart.offsetX = offsetX * chart.outerRadius;
			});
			if (index === 0) {

	_resolveDataElementOptions: function() {

}
			ty1 = borderValue + axisHalfWidth;

	"lightcoral": [240, 128, 128],
   }
			barPercentage: 0.9
		hue = ((g - b) / chroma) % 6;
			source = sources[i];
	};
					// we have a separate stack for stack=undefined datasets when the opts.stacked is undefined
	 * @private
				Math.asin(Math.min(maxHeight / maxLabelDiagonal, 1)) - Math.asin(maxLabelHeight / maxLabelDiagonal)
		// Increase sizes here
	_resolveDataElementOptions: function(point, index) {

		], context, index);
		max = max === MIN_INTEGER ? +adapter.endOf(Date.now(), unit) + 1 : max;
		me.beforeSetDimensions();
		borderColor: 'pointBorderColor',

			} else {
	 * @returns {number} The stack index
elements.Rectangle = Rectangle;
	};

		me._gridLineItems = null;


	},

			// lineDashOffset :

	},
			listener(fromNativeEvent(event, chart));
				var width = boxWidth + (fontSize / 2) + ctx.measureText(legendItem.text).width;
	handleEvent: function(e) {

			position: 'bottom'
	 * @param {*} value  - The value to test.


		}
			lineValue = getPixelForGridLine(me, tick._index || i, offsetGridLines);
		return changed;
		var tval = target[key];
	return elements;

	afterUpdate: function() {


				ctx.fill();
	// Need to override these to give a nice default


	},

	},
var conversions = createCommonjsModule(function (module) {
			var bodyItem = {
      match = match[1];

			if (options.intersect && !intersectsItem) {
	 * @param {function} fn - The function to call for each item.
 */
	 */
	"mistyrose": [255, 228, 225],
	},

		model.caretX = tooltipPosition.x;
		'touchmove'
			handler();
			changed = true;
				tooltipItems.push(createTooltipItem(active[i]));
	},
		helpers$1.each(bodyItem.before, maxLineWidth);


			var minX = contains180 ? -1 : Math.min(startX, startX * cutout, endX, endX * cutout);
				meta = chart.getDatasetMeta(i);
		ctx.prevTextDirection = original;
						timestamp = parse(me, data[j]);
	tooltips: {
	},
				x1 = x2 - caretSize;
		if (a < 1) {

	/**
	var b = (((color >> 2) & 1) * mult) * 255;
			if (squaredMagnitude <= 9) {
	lightness: function (val) {
	var i, ilen;


			x: vm.x + Math.cos(halfAngle) * halfRadius,
			me.height = me.maxHeight;
 * Returns {width, height, offset} objects for the first, last, widest, highest tick
			me.end = me.min;
		values.steppedLine = resolve$2([custom.steppedLine, config.steppedLine, lineOptions.stepped]);

		if (me._data !== data) {
			}
			draw: function() {
	legend: {
		});
	"darkblue": [0, 0, 139],
		point.pivot();
		me.update(reset);
// the class, and so must be CamelCase in order to be correctly retrieved
      if (hexAlpha) {
	uid: (function() {
	 * @param {number} y - The y axis of the coordinate for the rectangle starting point.
		});
		helpers$1.callback(this.options.afterCalculateTickRotation, [this]);
			ctx.restore();
		return getConstraintDimension(domNode, 'max-width', 'clientWidth');
	getDatasetMeta: function(datasetIndex) {
				ctx.fillText(label, 0, y);
		if (cache.font !== font) {


					ctx.strokeRect(rtlHelper.leftForLtr(rtlColorX, bodyFontSize), pt.y, bodyFontSize, bodyFontSize);


		}
});
function computeFitCategoryTraits(index, ruler, options) {
		// No animation -> No Transition
		 * @param {Chart} chart - the chart we are returning items from
function hslString(hsla, alpha) {
	var path = [graph[toModel].parent, toModel];
		}
	 */
		ctx.rotate(startAngle);
		var chart = me.chart;
				textOffset: textOffset,
		}
				], context, index, info);
	},
		}, margins);

		me.ticks = labels;   // BACKWARD COMPATIBILITY
		}
	var midY = (chartArea.top + chartArea.bottom) / 2;
	getTitle: function() {
		var options = me.chart.options;
		if (closePath) {
		var i, ilen;
		var options = me.options;
			}
		}


		}

		// The canvas render size might have been changed (and thus the state stack discarded),
		var lineModel = meta.dataset._model;
var convert = {};
	var skipX = x === null;
			offsetY = -(maxY + minY) / 2;
		var options = me.chart.options;

	"darkseagreen": [143, 188, 143],
			borderSkipped: 'left'
 */
		}
	"papayawhip": [255, 239, 213],
	 * @param {boolean} [reverse] - If true, iterates backward on the loopable.

		textSize = lineCount * helpers$1.options._parseFont(opts).lineHeight + opts.padding * 2;

	}
	 * @private
		helpers$1.each(me.legendItems, function(legendItem, i) {
		this.getMeta().data.splice(start, count);
			head: head,
	var bodyFontSize = model.bodyFontSize;
	 * Merges source[key] in target[key] only if target[key] is undefined.
	x *= 95.047;

	var g = 0;
		return t * t * t * t * t;
			? null
function adjustPointPositionForLabelHeight(angle, textSize, position) {
 * @param tooltipOpts {object} the tooltip options
		var me = this;
	getStyle: function(index) {
				pointCurrent.mK = (pointBefore.deltaK + pointCurrent.deltaK) / 2;
		return null;
 * @param bar {Chart.Element.Rectangle} the bar
		var dataLabels = me._getLabels();
		var bodyItems = [];
	// NOTE(SB) Don't use innerHTML because it could be considered unsafe.
				// toggle visibility of index if exists
	var max = Math.max(Math.max(r, g), b);
	},
	/**
		}
		var me = this;
		first: valueAt(0),
		chart.chartArea = {
	"mediumslateblue": [123, 104, 238],
		for (i = 0, len = elements.length; i < len; ++i) {
	_dataElementOptions: [
	// Count of all lines in the body
		}
		return this;
		return this._getScaleLabel(this.chart.data.datasets[datasetIndex].data[index]);

		var opts = me.options;

	afterEvent: function(chart, e) {
		}
	 * @private
			helpers$1.each(valuesPerStack, function(valuesForType) {
	}
				key = keys[i];
				offset = me.getDistanceFromCenterForValue(opts.ticks.reverse ? me.min : me.max);
		return isNaN(cw) ? w : Math.min(w, cw);
			hover: hover
	 * @todo handle `radius` as top-left, top-right, bottom-right, bottom-left array/object?
	],
      var h = scale(parseInt(match[1]), 0, 360),
	for (i = Math.max(start, 0); i < end; i++) {
	}
			var minSign = helpers$1.sign(me.min);
		var metasets = scale._getMatchingVisibleMetas(me._type);
}
			//           | found | not found | undefined
		return moment(time).endOf(unit).valueOf();
			endPixel = me.right;
			descriptor = descriptors[i];
 * @param {object} position - the point to be nearest to
	 * Gets the tooltip position nearest of the item nearest to the event position
	},
		result.sort(function(a, b) {
		return !length ? null : function(point, i) {
		};
	// This will mean we have a shape fitted to the canvas, as large as it can be with the labels
	/**
			}
			lo = mid + 1;
		// Note(SB): we could add support for relative bar thickness (e.g. barThickness: '50%')
	 * @private
var DEFAULT_MAX = 1;
			if (x === 0 || isNaN(x)) {

	},
		// a callback that will handle


	var endAngle = arc.endAngle;

}
			// base = base.concat(toPush);
				y += pos.y;
		return fontStyle + ' ' + pixelSize + 'px ' + fontFamily;
	pointerleave: 'mouseout',
			}
		var t, r, b, l;
	 */
			}

	var x2 = Math.pow(x, 3);
					ctx.fillStyle = textColor;
		// Update Points
		changed = !helpers$1.arrayEquals(me._active, me._lastActive);
		return this._getLabelSize(label).w;
		origin = start[key];
		function capControlPoint(pt, min, max) {
			value = +this.getRightValue(value);
		 */


	 * the plugin, which one will be re-exposed in the chart.js file.

		me.chart = chart;
		arc.pivot();
	}
		// |----------------------------------------------------|
var _defaults$2 = defaultConfig$2;
		me.afterUpdate();
	if (values.alpha !== 1) {
				max = borderWidth > max ? borderWidth : max;

	},
				if (imeta.index === datasetIndex) {
			if (id in scales && scales[id].type === scaleType) {
				lines: [],
			}
	}
							// Extra data used for toggling the correct item
	tooltips: {
      for (var i = 0; i < rgb.length; i++) {
	"slateblue": [106, 90, 205],
		if (arc.fullCircles) {
	l = (2 - s) * v;

				niceFraction = 1;
			_chartInstance: me, // deprecated, backward compatibility
		var scaleLabel = options.scaleLabel;
		return (index === -1)
		// Horizontal
	 * @param {object} argN - Additional objects containing properties to merge in target.
		}

var core_animation = exports$3;
			return char + char;
			var id = scaleOptions.id;
	if (prev === null) {
							text: label,
		// We divide by the current device pixel ratio, because the canvas is scaled up by that amount in each direction. However
	}
scale_logarithmic._defaults = _defaults$2;
};
	_configure: function() {
			start[key] = actual;
			hash[item] = true;
		for (i = 0, ilen = dataLabels.length; i < ilen; ++i) {
		yPadding: 6,

					listItem.appendChild(document.createTextNode(labels[i]));
		'borderColor',

				if (me._hoveredItem) {
				rotation: rotation,

			// If the user provided a sorting function, use it to modify the tooltip items
		}
	if (r === g && g === b) {
	 * returned value can be used, for instance, to interrupt the current action.
				y1 = y2 = borderValue;
var effects = {
		}
		var getHoverColor = helpers$1.getHoverColor;
		}
		var legendItems = helpers$1.callback(labelOpts.generateLabels, [me.chart], me) || [];
			value = helpers$1.valueOrDefault(valueCategory, value);

	widthPadding = 0;
		var labels = data.labels;
		var w1 = (((w * a === -1) ? w : (w + a) / (1 + w * a)) + 1) / 2.0;
			var y = cursor.y;
			label: function(tooltipItem, data) {
		// Need to reset tooltip in case it is displayed with elements that are removed
			? a[l2] - b[l2]

		bdif = diffc(b);
			ctx.strokeStyle = valueOrDefault$e(legendItem.strokeStyle, defaultColor);
			// Initial resize before chart draws (must be silent to preserve initial animations).
	handleDirectionalChanges: function() {
		var s = 1.70158;
	 * @param {Array} value - The array to lookup for value at `index`.
				points.push(points[0]);
		return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];

	 * @returns {number} The effective line height in pixels (size * 1.2 if value is invalid).
	x /= 95.047;

	hwbString: function () {

			distance: -1,


	}
		};
	var bottom = sortByWeight(filterByPosition(layoutBoxes, 'bottom'));
	"dimgray": [105, 105, 105],

		// Truthy/falsey value for empty tooltip
			ctx.moveTo(x - xOffset, y - yOffset);

				hitboxes[i] = {
			model.dataPoints = tooltipItems;
			fillText(realX, y, legendItem, textWidth);
			me.width = me.maxWidth;
	if (convert.hasOwnProperty(model)) {
	}
			label = item.label;
	 * @param {*} item - The native item from which to acquire context (platform specific)
	// from the shape radius to move the point inwards by that x.
			};
				model.startAngle = opts.rotation;
			keys = Object.keys(elementOptions);
	},
		// label width and the number of tick intervals
		me._layers.sort(compare2Level('z', '_idx'));
		helpers$1.each(arrayOfThings, function(thing) {
		rectangle: {
		var me = this;

	_type: 'point',
	},
	 * @returns {object} tooltip position
		if (yAlign === 'bottom') {

	var onScroll = function() {
		if (angleLineOpts.display && lineWidth && lineColor) {

	},
		return me.getPixelForDecimal((+me.getRightValue(value) - me._startValue) / me._valueRange);
					custom[key],

			}
	factors = helpers$1.math._factorize(evenMajorSpacing);
			// Appearance
		callback: core_ticks.formatters.linear
	/**
			if (tickValue === 0) {
		/**
				index: datasetIndex
		return lines;
		if (core_plugins.notify(me, 'beforeDraw', [easingValue]) === false) {
	},
			tickOpts.userCallback
	second: {
		var me = this;
				var meta = chart.getDatasetMeta(datasetIndex);
	 * @deprecated since version 2.8.0
	var y;
var INTERVALS = {
		// for smooth tooltip animations issue #4989
		},
	/**
		});
							continue;
		}

			// Compute comparative distance
	}
		var canvas = me.canvas;
		for (i = 0; i < pointsLen; ++i) {
		helpers$1.callback(this.options.afterDataLimits, [this]);
	format: function(time, format) {
	"mediumspringgreen": [0, 250, 154],
			dataset._meta = {};
			}
		var gridLines = me.options.gridLines;
			return x - value;
			ctx.moveTo(x1, y1);

		wrappedFn.conversion = fn.conversion;
		return items;
	getDecimalForPixel: function(pixel) {
	return labelOpts.usePointStyle && labelOpts.boxWidth > fontSize ?
			var tooltipItems = [];
	defaultFontStyle: 'normal',
		var infinity = Number.POSITIVE_INFINITY;
	getBasePixel: function() {
				}
	var maxLineWidth = function(line) {
	var alpha = 1;
		var chart = this.chart;

		me.drawingArea = Math.min(
			afterLabel: helpers$1.noop,
				borderAlign: options.borderAlign,
		me.paddingLeft = 0;
			ctx.arc(x - xOffset, y - yOffset, cornerRadius, rad - PI, rad - HALF_PI);
         rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
			if (styleValue.indexOf('%') !== -1) {
			label: function(tooltipItem, data) {
	 */
	/**
		: -1;

			// may have been changed since me.minSize was calculated
		case 2:
	 * Crude approximation of what the label width might be

			titleSpacing = vm.titleSpacing;
/**

		var font = {
		}
				}
		'Line',

	animations: [],
		me.max = helpers$1.isFinite(me.max) ? me.max : null;
	ctx.beginPath();
		ctx.canvas.style.setProperty('direction', original[0], original[1]);
	var outerDistance = scale.getDistanceFromCenterForValue(opts.ticks.reverse ? scale.min : scale.max);
		&& (skipX || x >= bounds.left && x <= bounds.right)
	 * @private
	},
	/**
				// scale config merging is complex. Add our own function here for that
	"mediumspringgreen": [0, 250, 154],
		}
		var bodyFontSize = vm.bodyFontSize;

		if (meta.dataset._model.spanGaps) {
	var l;

		var datasets = chart.data.datasets;
	ctx.font = helpers$1.fontString(footerFontSize, model._footerFontStyle, model._footerFontFamily);
	// it converted for us.
	 * @private

function determineLimits(angle, pos, size, min, max) {
	return {
			borderColor: model.borderColor,
		if (start === 0) {


		me.ticks = ticks.map(function(tick) {
	format: abstract,
	"mediumblue": [0, 0, 205],
		var data = chart.data;
		var me = this;
	cancelAnimation: function(chart) {
	parse: abstract,
		var i, ilen, meta;
		mode: 'single'
 * @todo remove at version 3
			if (width && color) {
		if (unit === 'isoWeek') {

		}
			var klen = keys.length;

			angle += 2.0 * Math.PI; // make sure the returned angle is in the range of (-PI/2, 3PI/2]
	"lawngreen": [124, 252, 0],

      }
			} else if (rawValue.y !== undefined) {
		// If we are forcing it to begin at 0, but 0 will already be rendered on the chart,
	_removeDatasetHoverStyle: function() {
	linear: function(t) {
	var s = hsv[1] / 100;
Color.prototype = {
			// Fill the actual label
var valueAtIndexOrDefault = helpers$1.valueAtIndexOrDefault;
		var angle = helpers$1.toDegrees(angleRadians);
		ctx.lineTo(x, y + radius);


	return module = { exports: {} }, fn(module, module.exports), module.exports;
	case 'start':
		me.tooltip.initialize();
	}
		var lum1 = this.luminosity();
		// There are also 4 quadrant-like locations (left to right instead of clockwise) reserved for chart overlays
	millisecond: {
		var gz = opts.gridLines && opts.gridLines.z || 0;
		var me = this;
		if (type === 'click') {
	/**

	};
		return count + bodyItem.before.length + bodyItem.lines.length + bodyItem.after.length;

			ctx.lineTo(x - yOffset, y + xOffset);
			// Utility


		if (core_plugins.notify(me, 'beforeDatasetDraw', [args]) === false) {

		} else {
	 * @param {Unit} unit - the unit as string
	 */
	var elements = [];
       per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i,
	"yellow": [255, 255, 0],

			item = item.canvas;

		for (i = 0, ilen = arcs.length; i < ilen; ++i) {
						lineDashOffset: style.borderDashOffset,
			left: me.paddingLeft || 0,
'default': platform_dom
	},
var positioners = {

			min = Math.min(min, timestamps[0]);
function initCanvas(canvas, config) {
function ticksFromTimestamps(scale, values, majorUnit) {
		var me = this;
		}
		var dataset = me.data.datasets[datasetIndex];


						sinRotation * (firstLabelSize.height - firstLabelSize.offset);
	 * Used to get the value to display in the tooltip for the data at the given index
	initialize: function(config) {
			stackCount: me.getStackCount(),
	hr = h / 360 * 2 * Math.PI;

	}

	"bisque": [255, 228, 196],
		return false;
	// Reset back to 0
		}]
/**
		// Essentially we now have any number of boxes on each of the 4 sides.
		size: 1,
		var dataset = this.data.datasets[datasetIndex];
	}
			pointAfter.mK = betaK * tauK * pointCurrent.deltaK;
var overrideTextDirection = function(ctx, direction) {
			beforeFooter: helpers$1.noop,
		// Compute control points
	}
	}
   return "#" + hexDouble(rgba[0]) 
	}
			}
	// Backward compatibility: until v3, we still need to support boundary values set on
		var display = me._isVisible();
          s = scale(parseFloat(match[2]), 0, 100),
		var yAlign = vm.yAlign;
	defaultLineHeight: 1.2,
		return {
		return descriptors;
			var meta = ci.getDatasetMeta(index);
			scaleLabelY = me.top + me.height / 2;
			return (lum1 + 0.05) / (lum2 + 0.05);
	to the returned synthetic function. This property is an array
	"dodgerblue": [30, 144, 255],
		 * of the event
elements.Line = Line;


		var model = arc._model;
			decimal = 1 - decimal;
			y += lineHeight;
			// Set the ctx for the box
			return;
		next = curr + curr - prev;
core_defaults._set('global', {
		var scaleLabelPadding = helpers$1.options.toPadding(scaleLabel.padding);
			if (!isNaN(value)) {
		});
			++exp;
      for (var i = 0; i < rgb.length; i++) {

				var labelCount = labels ? labels.length : 0;

		h = 4 + (r - g) / delta;
var resolve$4 = helpers$1.options.resolve;
		ctx.stroke();
	"moccasin": [255, 228, 181],
			v0.weight - v1.weight;
function generateTicks$1(generationOptions, dataRange) {
core_defaults._set('line', {

		}
	var major, index;
			? scale.getPointPositionForValue(i, fill === 'start' ? start : end)
		// First fit vertical boxes

			rightValue = +yScale.getRightValue(value);
			for (i = 0; i < lh.length; ++i) {
		for (i = 0; i < space.length; i++) {
 */
		return getBeforeAfterBodyLines(this._options.callbacks.beforeBody.apply(this, arguments));
				display: style.display,


		r: scale.width,
		me.beforeTickToLabelConversion();
		}
		chunk: size / ruler.stackCount,
			center: head + size / 2
 * case, only timestamps that break the time linearity are registered, meaning that in the
		var pos = this.options.position;
		unit: false, // false == automatic or override with week, month, year, etc.
	 * Called at chart construction time, returns a context2d instance implementing
	 * @private
	/**
			: index;


		var hitboxes = me.legendHitBoxes;


	"indigo": [75, 0, 130],
		var changed = false;
		prev = curr;
			backgroundColor: options.backgroundColor,
 */

	 * @private
		l = value.left;
		var i, j, ilen, jlen, data, timestamp, labelsAdded;
	"cornsilk": [255, 248, 220],
function wrapConversion(toModel, graph) {
			showLine: false
		// We also limit the maximum number of ticks to 11 which gives a nice 10 squares on
	/**
						target[key].push({});
		values.tension = valueOrDefault$7(config.lineTension, options.elements.line.tension);

		if (6 * t3 < 1) {
}
		if (time !== null) {
				}
	};
		var distanceFromXCenter = anglePoint.x - centrePoint.x;
		var axisWidth = gridLines.drawBorder ? valueAtIndexOrDefault(gridLines.lineWidth, 0, 0) : 0;
	},
			if (value % i === 0) {
	},

		var me = this;
	},
		// |----------------------------------------------------|
	hsl: function () {
 */
		if (typeof window === 'undefined') {
			minSize.width = display ? 10 : 0;
			findIndex = labels.indexOf(max);
var controller_line = core_datasetController.extend({

				return false;
	return [r, g, b];
// Implementation based on https://github.com/marcj/css-element-queries
	},
	if (h < 0) {
		maxPadding.left = Math.max(maxPadding.left, boxPadding.left);
			min < 0 && max < 0 ? max :
		var list = document.createElement('ul');
		layout = boxes[i];
				: me.right - halfLineHeight - scaleLabelPadding.top;
		var opts = me.options;
		}
		return core_interaction.modes.single(this, e);
	},
		var start = me._start;
		} else if (vals.l !== undefined || vals.lightness !== undefined) {
	getDistanceFromCenterForValue: function(value) {
			elements[i].transition(easingValue);

		var sqrt = Math.sqrt(value);
		ctx.strokeStyle = vm.borderColor || globalDefaults.defaultColor;
 * @private
		v * 100

		return this;
		var me = this;
		}

		point._yScale = yScale;
	if (majorEnd) {

			return a - b;
		var me = this;
			textColor = vm.labelTextColors[i];
				var value = ': ' + data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
		return this.valid;
		// If there are no animations queued, manually kickstart a digest, for lack of a better word

				animations.splice(i, 1);
		}
			this.getDatasetMeta(elements[0]._datasetIndex).controller['_' + prefix + 'DatasetHoverStyle']();
var controller_bubble = core_datasetController.extend({
		'borderDashOffset',
		}


	if (angle === min || angle === max) {
		core_layouts.removeBox(chart, scale);
	},
		duration: 1000,
				continue;
		for (i = 0, ilen = timestamps.length; i < ilen; ++i) {

		native: nativeEvent || null,
		}
	nearest: function(elements, eventPosition) {
	var a;
	if (tickOpts.display && opts.display) {
			var x1, x2, y1, y2;
	update: function(reset) {
				lineColor = gridLines.zeroLineColor;
			}
			if (!meta || !meta.visible) {

		'hoverBorderWidth',
			box.height = box.bottom - box.top;

		var setMax = tickOpts.max !== undefined || tickOpts.suggestedMax !== undefined;
	};

		for (var prop in source) {

DateAdapter.override = function(members) {
/**
		height: height
		// Contains hit boxes for each dataset (in dataset order)
		xAxes: [{
	 * Returns true if `value` is a finite number, else returns false
	getPixelForOffset: function(time) {
	return helpers$1.merge(Object.create(null), [].slice.call(arguments), {
		return this;
			} else if (v0 !== v1) {
		me._startPixel = startPixel;
			x: x, // value not used in dataset scale, but we want a consistent API between scales
				}
	 * @param {number|string} value - The lineHeight to parse (eg. 1.6, '14px', '75%', '1.6em').
							hidden: isNaN(data.datasets[0].data[i]) || meta.data[i].hidden,
		top: t,
	}
	var position = getRelativePosition(e, chart);
	 */
 * @namespace Chart.helpers.configMerge
};

		var me = this;


				: changed | tooltip.handleEvent(e);

			box.top = chartArea.top;

				borderDash: borderDash,
			meta: meta,
		helpers$1.callback(this.options.beforeDataLimits, [this]);
		}
		var type = me.dataElementType;
		minor: {},
		var count = arguments.length;
		fullWidth: true,
	 * @param {number} maxWidth - the max width in pixels
	}
function defaultClip(xScale, yScale, borderWidth) {
			borderSkipped: options.borderSkipped,

			me.chart.options.datasets[me._type],
	/**
	var stub = array._chartjs;
			}
	var circular = gridLineOpts.circular;
		var me = this;
		var alpha = this.values.alpha;
		currentVM = points[0]._view;
	};
					}
		case 0:
		 * @param {Event} e - the event we are find things at


		// a sufficient condition if the item has a context2D which has item as `canvas`.


	hover: {

	ctx.stroke();


 * @todo remove at version 3


		var options = me.options;
function toTimestamp(scale, input) {
		ctx.moveTo(x + radius, y);
				if (element.inYRange(position.y)) {
		var context = {
		ctx.lineDashOffset = valueOrDefault$1(vm.borderDashOffset, globalOptionLineElements.borderDashOffset);
	var ticks = [];
	var model = source.el._model || {};
		var custom = element.custom || {};
		if (lineModel.cubicInterpolationMode === 'monotone') {
		box.update(
	 * @namespace Chart.Ticks.formatters
   return rgb;
		if (helpers.isArray(loopable)) {
	},
		var ratioY = 1;
   if (!string) {

			timestamps = generate(me, min, max, capacity);
	f = 6 * h - i;
		// Define alias to the config data: `chart.data === chart.config.data`
   if (!a && a != 0) {
	},
helpers$1.extend(DateAdapter.prototype, /** @lends DateAdapter */ {
		}
	var cornerRadius = vm.cornerRadius;
			borderDash: [],
	"cornsilk": [255, 248, 220],

		}
core_controller.Ticks = core_ticks;
					meta.stack !== undefined) {
			mouseX = e.clientX;
 * @param {string} value - The value to split by newline.


		this.getMeta().data.shift();
			angle: angle,
			// Sanitise angle range
					numDecimal = Math.max(Math.min(numDecimal, 20), 0); // toFixed has a max of 20 decimal places
		model.borderColor = valueOrDefault$7(options.hoverBorderColor, getHoverColor(options.borderColor));
	var b;
			ctx.moveTo(x + Math.sin(rad) * radius, y - Math.cos(rad) * radius);

	"rosybrown": [188, 143, 143],
		};
	var v = Math.max(r, g, b);
	 */
		size: 7.884e9,
		return function(point) {
		var legend = chart.legend;
			}
			chart = animation.chart;
	};
	// preserve .conversion property if there is one
		}
		me.max = (max === Number.NEGATIVE_INFINITY ? 0 : max);
	core_layouts.addBox(chart, legend);
						sinRotation * (lastLabelSize.height - lastLabelSize.offset) :
		// color.rgb()
			me.getDataset(),
	var expand = createDiv(CSS_SIZE_MONITOR + '-expand');
	 * Returns the max width or height of the given DOM node in a cross-browser compatible fashion
		point = fill === 'start' || fill === 'end'
	switch (Math.floor(hi)) {
			me.updateBezierControlPoints();
			}
		interval = INTERVALS[UNITS[i]];

	getPixelForValue: helpers$1.noop,
		if (!points.length) {

	},

	 * @private
		};
		ctx.font = font;
	 */

	}
		value = format(input);
		var chart = me.chart;
 * @todo remove at version 3
					return elements;
	/**
		return values;
for (var key in colorName) {
				// which means that the right padding is dominated by the font height

		([]).concat(plugins).forEach(function(plugin) {
		if (tickOpts.min !== undefined) {
			while (endAngle < startAngle) {
		values[space] = vals.slice(0, space.length);
	},
		var ctx = this._chart.ctx;
	"moccasin": [255, 228, 181],
	 */
					model,
		};
			me.setCenterPoint(0, 0, 0, 0);
			minDistance = distance;
		if (vm.opacity === 0) {
		}
	/**
var _date = DateAdapter;
		cornerRadius: tooltipOpts.cornerRadius,
				p.splice(idx, 1);
	 * @protected
			}
				easing: config.easing,
		return this.getPixelForValue(this.getBaseValue());
	ctx.closePath();

		s * 100,

		me.min = helpers$1.min(ticks);

			me.drawDataset(metasets[i], easingValue);
	chartArea[layout.pos] += layout.size;
		if (type === 'mousemove') {
		return x - size.width - model.caretSize - model.caretPadding < 0;


	 * @private

	}
		// These locations are single-box locations only, when trying to register a chartArea location that is already taken,
				meta.data[index].hidden = !meta.data[index].hidden;
/**
			if (chart.isDatasetVisible(datasetIndex)) {
convert.hsl.hcg = function (hsl) {
var getLtrAdapter = function() {
 */
			}
	// Enlarge the clipping arc by 0.33 pixels to eliminate glitches between borders
		// Appearance
		}
		return this.getScaleForId(this._getIndexScaleId());
	cmyk: function () {

	/**
			platform.releaseContext(me.ctx);

			ilen = count + loopOffset;
	var opts = scale.options;
	_getValueScaleId: function() {

		helpers$1.rtl.overrideTextDirection(me.ctx, opts.textDirection);
			me.margins.left = Math.max(me.paddingLeft, me.margins.left);
		var type, xOffset, yOffset, size, cornerRadius;
	 * @param {string} [name] - The stack name to find
		if (minBarLength !== undefined && Math.abs(size) < minBarLength) {
	}

			start = undefined;
	 */


}

	 * @param {object} [thisArg] - The value of `this` provided for the call to `fn`.


	niceMin = Math.round(niceMin * factor) / factor;

		ctx.lineTo(caretPosition.x3, caretPosition.y3);

		} else if (changed && !me.animating) {
	setDimensions: function() {
		me._reversePixels = reversePixels;
 * Provided for backward compatibility, not available anymore
		fontSize: 10,

		if (parent && parent.toString() === '[object ShadowRoot]') {
	return ticks;
		removeListener(canvas, type, proxy);
		me.min = Number.POSITIVE_INFINITY;
			// the chart initialization but after setting basic chart / controller properties that
		}
	b = 1 - 1 / 255 * Math.max(r, Math.max(g, b));
		return this.chart.scale.id;
		var startAngle = me.getIndexAngle(0);
		me.beforeFit();
		var line = meta.dataset;
					lineWidths[lineWidths.length - (i > 0 ? 0 : 1)] = 0;
	if (value === 0) {
	ctx.restore();
		axis: 'y'
	helpers$1.isNumber = function(n) {
		if (dataset && index === undefined) {

	// gets the max border or hover width to properly scale pie charts
	month: {
		var range = options.barThickness === 'flex'
	return {start: start, end: end, factor: 1 / (start + 1 + end)};
	 * Returns the number of `unit` between the given timestamps.
						// Below is extra data used for toggling the datasets
		}
			};
		return 0.5 * ((t -= 2) * t * t + 2);


		// Move to opposite side of chart

					ctx.lineDashOffset = item.borderDashOffset;
		chart: chart
	if (xAlign === 'right') {
		var paddingRight = helpers$1._calculatePadding(container, 'padding-right', clientWidth);
	 * @returns {boolean} true if the tooltip changed
			var vPadding = labelOpts.padding;
		var base = vscale.getBasePixel();
			delete chart.legend;
		var dataset = meta.dataset;
 * Computes an "ideal" category based on the absolute bar thickness or, if undefined or null,
core_defaults._set('global', {

	"deeppink": [255, 20, 147],
		var scale = me._getValueScale();
		// Find Active Elements for tooltips
		}
		me.width = me.maxWidth;
	/**
function parse(scale, input) {
		} else {

	}
		var maxBottom = (me.height - me.paddingTop) - bottomMovement - me.drawingArea;
};
	 */
		core_plugins.notify(me, 'afterLayout');
	},
	}

		fitBoxes(verticalBoxes, chartArea, params);
	"hotpink": [255, 105, 180],
			layers[i].draw(me.chartArea);

	 * @param {Array} [args] - Extra arguments to apply to the hook call.
      var alpha = parseFloat(match[4]);

			width: 0,

	}
	getLabelForIndex: helpers$1.noop,
		if (core_plugins.notify(me, 'beforeTooltipDraw', [args]) === false) {
	}
	var b = args[2];
			canvas.style.height = height + 'px';
	},
			var betweenAngles = (angle >= startAngle && angle <= endAngle);

function pushOrConcat(base, toPush) {
			me.height = me.maxHeight;

			me.height = me._length = chart.height - me.margins.top - me.margins.bottom;
			return context;
		}
			meta.dataset.draw();
	}

	_resolveDatasetElementOptions: function(element) {
	 * @return {number} The first tick value.
var exports$1 = {
	helpers$1.getAngleFromPoint = function(centrePoint, anglePoint) {
		return +this.getRightValue(rawValue);
	},

		});
 * @private
	 */
			h: availableHeight,


		var fa = t * s01; // scaling factor for triangle Ta
				return dimension - blockSize;
var core_controller = Chart;
			return;

		var w = labelSizes ? labelSizes.widest.width + padding : 0;
			height = lineHeight;
	handleTickRangeOptions: function() {
			_data: me.data,

				items = chart.getDatasetMeta(items[0]._datasetIndex).data;
		point._options = options;
	easeInOutCubic: function(t) {
/* MIT license */

	return matches ? Number(matches[1]) : undefined;
	var r = ((color & 1) * mult) * 255;
	hsv: [360, 100, 100],
		var rot = helpers$1.toRadians(me.labelRotation);
	 */
	ctx.lineTo(curve1[len1 - 1].x, curve1[len1 - 1].y);
		// Common base implementation to handle ticks.min, ticks.max, ticks.beginAtZero

					// not an integer
		ctx.font = fontString = tickFont.string;
		x -= (size.width / 2);
	_computeTickLimit: function() {
			if (key === 'xAxes' || key === 'yAxes') {
	helpers$1.color = !chartjsColor ?
		width = Math.max(width, ctx.measureText(line).width + widthPadding);
	"fuchsia": [255, 0, 255],
	initialize: function() {
	x = x > 0.008856 ? Math.pow(x, 1 / 3) : (7.787 * x) + (16 / 116);
			}
		if (helpers_core.isObject(value)) {
convert.xyz.lab = function (xyz) {
 */
		return values;
 * @todo remove at version 3

		var me = this;
				items = [];
	"lightgray": [211, 211, 211],
			return;
	beforeUpdate: function() {
				tooltipItems = tooltipItems.sort(function(a, b) {
			titleX = left + ((right - left) / 2); // midpoint of the width
			w: width - border.l - border.r,
	var i, ilen, index, p0, p1, d0, d1, loopOffset;
			}
			scaleLabelX = me.left + me.width / 2; // midpoint of the width
			ctx.save();
   reverseNames[colorName$1[name]] = name;
				if (maxTick < 1e-4) { // all ticks are small numbers; use scientific notation
		if (!ticks) {
		core_plugins.notify(me, 'afterScaleUpdate');
		mid = (lo + hi) >> 1;
		bottom: b,

		var capacity = me.getLabelCapacity(min);
			// lineDash
	_isVisible: function() {
convert.hex.rgb = function (args) {
			precision: tickOpts.precision,
	chartArea.x += updatePos('left');
	},

		}
			height: vm.height
		case 1:
				x1 = x2 = borderValue;
	ctx.arc(arc.x, arc.y, vm.outerRadius, arc.startAngle, arc.endAngle);


	getBasePixel: function() {
	releaseContext: function(context) {
		var tooltip = me.tooltip;
	// https://stackoverflow.com/q/3922139

			furthestLimits.r = hLimits.end;
			offset = valueOrDefault$b(me.options.ticks.fontSize, core_defaults.global.defaultFontSize) / me._length;
	keyword: function () {

			// https://github.com/chartjs/Chart.js/issues/6104
	 * @returns {{string: string}}
 * @see https://developer.mozilla.org/en-US/docs/Web/Events
			return value;
		var me = this;
				ctx.setLineDash(valueOrDefault$e(legendItem.lineDash, lineDefault.borderDash));
		val = l * 255;
				}
					width: width,
// https://github.com/chartjs/Chart.js/issues/4287
	},
		return;
	// elements, which would interfere with the responsive resize process.

// Scales, Legends and Plugins all rely on the layout service and can easily register to be placed anywhere they need

		 * @function Chart.Interaction.modes.label
		};
		return null;
			labelTextColor: function() {
		var y = boundary ? boundary.y : null;

			datasetIndex: me.index

			_scale: scale,
		var pointPosition = scale.getPointPositionForValue(index, dataset.data[index]);
	/**


	return font.lineHeight + padding.height;
		}

			var highestLabelSize = labelSizes.highest;
	var body = model.body;
	 * @param {*} value - The value to test.
			ctx.textAlign = 'left';
   if (match) {
		var cache = chart.$plugins || (chart.$plugins = {});
							strokeStyle: style.borderColor,
					width: itemWidth,
	 */
			}
		core_plugins.notify(me, 'afterDatasetDraw', [args]);
	_computeAngle: function(index) {
	 * Remove a layoutItem from a chart
	/**
		fill = !!model.backgroundColor;
			}
	ctx.font = helpers$1.fontString(bodyFontSize, model._bodyFontStyle, model._bodyFontFamily);
		layers = me._layers;

			ctx.moveTo(x - xOffset, y - yOffset);
	}

	}
			z: tz,
		highest: valueAt(highest)
			start = 1 - first;

			console.error("Failed to create chart: can't acquire context from the given item");
		onClick: function(e, legendItem) {
			position: 'left',
		}
	easeOutQuart: function(t) {
		var globalDefaults = core_defaults.global;
	var stacked = opts.stacked;
	helpers$1.longestText = function(ctx, font, arrayOfThings, cache) {
		}
	"lightgreen": [144, 238, 144],
		if (isHorizontal) {
		autoSkip: true,
function numberOrZero(param) {
		var datasets = data.datasets;

	} else {
}
			return false;
	 */
			backgroundColor: core_defaults.global.defaultColor,

		var time = options.time || (options.time = {});
				if (thing.length > numberOfLines) {
	/**
		// Scriptable options
 * @return {ChartElement[]} the nearest items
	showLines: true
				ticking = false;
	 * @private

 * @prop {function} update - Takes two parameters: width and height. Returns size of item

 * Provided for backward compatibility, use Chart.layouts instead.

	helpers$1.min = function(array) {
		var i, pointBefore, pointCurrent, pointAfter;
convert.rgb.hcg = function (rgb) {


		var left = me.left;
				titleBlock.options = titleOpts;
	 * @param {number} timestamp - the input timestamp
 * @deprecated since version 2.5.0
			return id++;
	padding = helpers$1.options.toPadding(options.padding);
				}
	}
	/**
		helpers$1.callback(this.options.afterSetDimensions, [this]);
		var thisAngle = me.getIndexAngle(index) - (Math.PI / 2);
	helpers$1.requestAnimFrame = (function() {
		me.buildLabels();
	setHoverStyle: function(point) {
			return;
			yOffset = Math.sin(rad) * radius;
	var b;
core_defaults._set('bar', {

	 * Data element option keys to be resolved in _resolveDataElementOptions.
		for (i = 0, ilen = datasets.length; i < ilen; i++) {

	 * Adds the specified `amount` of `unit` to the given `timestamp`.
		if (samplingEnabled) {
       rgba = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/i,
	/**
	var currentClosestDistance = Infinity;
	 * Updates dataset at index unless a plugin returns `false` to the `beforeDatasetUpdate`
			// Use (me.left + me.minSize.width) and (me.top + me.minSize.height)
	 * @deprecated since version 2.8.0
	},
		var model = me._model;
	},
 * @namespace Chart.helpers
	return [l, a, b];
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/used_value

 */
			pure[0] = w; pure[1] = 1; pure[2] = 0; break;
	"palegoldenrod": [238, 232, 170],
		me.max = labels[maxIndex];
		autoSkipPadding: 0,
		}
		var p = 0;
				pointCurrent.model.controlPointPreviousY = pointCurrent.model.y - deltaX * pointCurrent.mK;
	},

		var bottom = me.bottom;
 */
			var firstLabelSize = labelSizes.first;
		borderWidth: 0,
		var rad = (rotation || 0) * RAD_PER_DEG;
			this.ticks.reverse();
		};
	hover: {
	if (angle === 90 || angle === 270) {
	getPixelForTick: function(index) {

	}
	},

			}
 * Helper function to get the box width based on the usePointStyle option
		x2 = vm.x + half;
	var lmin;
		};

		if (active.length) {
	},
					info.cacheable = false;
		var h = clientHeight - paddingTop - paddingBottom;
		right: x2,
			return me;
			return -1;
		}
		}
					var item = tooltipItems[0];
		};
	},
		var legend = chart.legend;
			return items;
	};
						me.max = Math.max(value.max, me.max);
      for (var i = 0; i < rgb.length; i++) {
		'borderDash',

	var ilen = data.length;
			return;
			var items = options.intersect ? getIntersectItems(chart, position) : getNearestItems(chart, position, false, distanceMetric);
		var exampleLabel = me.tickFormatFunction(exampleTime, 0, ticksFromTimestamps(me, [exampleTime], me._majorUnit), format);
		var centerX = (chartArea.left + chartArea.right) / 2;

				item[prop] = options[prop];
		var canvas = context.canvas;
		var me = this;
	var fill = source.fill;
   hslaString: hslaString,
	var width = bounds.right - bounds.left;

		var options = point._options;
core_defaults._set('global', {
			backgroundColor: options.backgroundColor,
	return refit ? fitBoxes(refitBoxes, chartArea, params) || changed : changed;
 */
		var verticalBoxes = boxes.vertical;
		var lineModel = me.getMeta().dataset._model;
	 */
	var lmin = Math.max(l, 0.01);
	var footerLineCount = model.footer.length;
		 * @todo remove at version 3
	var l = hsl[2] / 100;
		dataset: function(chart, e, options) {
				scale = scales[id];
				result.push(i);


	"white": [255, 255, 255],
	_getMatchingVisibleMetas: function(type) {
}
	 */

		helpers$1.extend(me, config);
		me.max = helpers$1.max(ticks);
		var points = meta.data || [];
		if (me.isHorizontal()) {
	spanGaps: false,

			return;
	"darkseagreen": [143, 188, 143],
	 * @private
		me.chart = me;
		if (!arcs) {
				}
	},
	var offsets = [];
		// Reset
	}
	var pos = stack.pos;
		// Footer

	 */
		}
	},
		// Custom radius resolution
}
		if (showLine) {
		}
		displayFormats: {}
		}
	 * Parses the given `value` and return the associated timestamp.
}
	return UNITS[minUnit ? UNITS.indexOf(minUnit) : 0];
			return;
	},

	var next = index < pixels.length - 1 ? pixels[index + 1] : null;

		var min = me.min;
	},
		var isHorizontal = scale.isHorizontal();
 * Helper function to get the bounds of the bar regardless of the orientation
	};
});
	getCenterPoint: function() {
};
});
					if ((value.min < 0 && ivalue < 0) || (value.max >= 0 && ivalue > 0)) {
 * (`pos`) on the scale, by searching entries before and after the requested value. `pos` is

	 * Returns true if `value` is neither null nor undefined, else returns false.
	"powderblue": [176, 224, 230],
		var resetRadius = animationOpts.animateScale ? 0 : scale.getDistanceFromCenterForValue(dataset.data[index]);
					// need to clone because we are changing the value
/**
		t = r = b = l = +value || 0;
			minSize.width = me.maxWidth; // fill all the width


 * @namespace Chart.Interaction
		}
function mergeConfig(/* config objects ... */) {
		function(x) {
				w1 * color1.green() + w2 * color2.green(),
	"darkgray": [169, 169, 169],
				helpers$1.each(dataset.data, function(rawValue, index) {
	 * Returns the stacks based on groups and bar visibility.
	rgb = [0, 0, 0];
		if (distance < minDistance) {
		count++;
				var key = [
			base: base,
		me.min = (min === Number.POSITIVE_INFINITY ? 0 : min);
			pushOrConcat(bodyItem.lines, callbacks.label.call(me, tooltipItem, data));
	},

	return out;
			ctx.closePath();
			return collection.filter(filterCallback);
	var globalDefaults = core_defaults.global;
	}()),
			pointBefore = i > 0 ? pointsWithTangents[i - 1] : null;
				y1 = ptY;
			// Final Size and Position
				pointCurrent.deltaK = slopeDeltaX !== 0 ? (pointAfter.model.y - pointCurrent.model.y) / slopeDeltaX : 0;
		bodyFontColor: tooltipOpts.bodyFontColor,
		me._configure();
		// after update.
		var color1 = this;
		core_scale.prototype._configure.call(me);

	var b = args[2];
/**
	},
	onDataShift: function() {
	easeInOutSine: function(t) {
				borderColor: options.borderColor,
	 * The keys defined here are for backward compatibility for legend styles.
		var boxes = buildLayoutBoxes(chart.boxes);
			title: function() {
		common: true,
	 * @param {boolean} lazy - if true, the chart is not marked as animating to enable more responsive interactions
		value = typeof format === 'string'

		} else {
	 * Sets (or updates) options on the given `item`.
		var start = me.chart.options.startAngle || 0;
		};
	 * Backward compatibility: since 2.1.5, the legend is registered as a plugin, making
			});
			rad += QUARTER_PI;
	 */
			}
			var lineWidth = valueOrDefault$e(legendItem.lineWidth, lineDefault.borderWidth);


	},


	 * @since 2.1.5
/**
		position: 'top',
var models = Object.keys(conversions);

			// Reset position before calculating rotation
if (typeof window !== 'undefined') {
	datasets: {
			var target = Object.create(source);
			}

	ticks.push(isNullOrUndef$2(max) ? niceMax : max);
		layoutBoxes.push({
		if (arguments.length > 1) {

	if (helpers$1.isArray(text)) {
		fontSize: valueOrDefault$a(nestedOpts.fontSize, options.fontSize),
	var c;
		ticks: {
}
		}
	var mid, i0, i1;
};

	/**

				ctx.moveTo(me.xCenter, me.yCenter);
	var max = Math.max(r, g, b);
 * @private
			borderAlign: 'center'
/**
   }
		rtl: tooltipOpts.rtl,
 * @namespace Chart._adapters._date
	// label settings

		var distanceFromYCenter = anglePoint.y - centrePoint.y;
		h = s = 0;
};
helpers.getValueAtIndexOrDefault = helpers.valueAtIndexOrDefault;
function getNearestItems(chart, position, intersect, distanceMetric) {
	if (yAlign === 'center') {
	radialLinear: scale_radialLinear,
	var target;
		bodySpacing: tooltipOpts.bodySpacing,
			return;
		return this.values.cmyk;
		}
	}
		var ilen = elements.length;
		me.tooltip.transition(easingValue);
		}
			return;
		var vm = this._view;
		'backgroundColor',
			case 'end':
		}
		var chart = me.chart;
		ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
		model.backgroundColor = valueOrDefault$4(options.hoverBackgroundColor, getHoverColor(options.backgroundColor));
		var options = chart.options.elements[me.dataElementType.prototype._type] || {};
		var distance = arc.hidden ? 0 : scale.getDistanceFromCenterForValue(dataset.data[index]);

			dataIndex: index,
convert.rgb.ansi16 = function (args) {
		this.chart = value;
	i = Math.floor(6 * h);
		default:
	var useY = axis.indexOf('y') !== -1;

		var me = this;
		var s = 1.70158;


			y = (vm.y + vm.base) / 2;
		// top/bottom padding
				onAnimationProgress: animationOptions.onProgress,
		me._bufferedRender = true;
	var expando = node[EXPANDO_KEY] || (node[EXPANDO_KEY] = {});
	helpers$1._decimalPlaces = function(x) {
	getLabelForIndex: function(index, datasetIndex) {
	 * @return {object} The font object.
});
		for (i = 0, ilen = chart.data.datasets.length; i < ilen; ++i) {
		Object.defineProperty(array, key, {
			left: 0,
		helpers$1.callback(this.options.afterTickToLabelConversion, [this]);
		tickVal = Math.round(significand * Math.pow(10, exp) * precision) / precision;
		var touches = e.touches;
		animation.chart = chart;

	 * Updates all datasets unless a plugin returns `false` to the `beforeDatasetsUpdate`
		var type = e.type === 'mouseup' ? 'click' : e.type;
	getLabelCapacity: function(exampleTime) {


	"mediumslateblue": [123, 104, 238],
		var me = this;
		args = Array.prototype.slice.call(arguments);
		var i = 0;
				var sinRotation = Math.sin(angleRadians);
	var font, padding;

	},
	"seashell": [255, 245, 238],
		'borderDash',
		model.width = horizontal ? undefined : ipixels.size;
		var radiusReductionTop = -furthestLimits.t / Math.cos(furthestAngles.t);
			type: 'linear', // bubble should probably use a linear scale by default
		case 'cross':
		var adapter = me._adapter;
		};
		var i, meta, data, values;
	legend: {
		changed = !helpers$1.arrayEquals(me.active, me.lastActive);
};
	ctx.strokeStyle = lineColor;
	}
core_controller.animationService = core_animations;
var core_defaults = defaults;
	/**
var TAU = Math.PI * 2;
		position: 'top',
		var dataset = me.getDataset();
			reverse = !reverse;
					lineModel.tension
				deltaX = (pointCurrent.model.x - pointBefore.model.x) / 3;
		// Now pivot the point for animation

		if (me._showLine) {

		core_defaults.global,
function wrapRaw(fn) {
		var timestamps = me._timestamps;
		}
			// text : text to display
				}

			}
 * @see https://chartjs.gitbooks.io/proposals/content/Platform.html
		return [0, 0, 0];

		ctx.font = helpers$1.fontString(bodyFontSize, vm._bodyFontStyle, vm._bodyFontFamily);
		var min = me.min;
	},
		}
				right: clip.right === false ? canvas.width : area.right + clip.right,
		}
	if (l < 0.5) {
	hover: {
		y1 = Math.min(vm.y, vm.base);
   keyword: keyword
}
	 * @private


	return [hcg[0], (v - c) * 100, (1 - v) * 100];
	},
		// that does _view = _model if ease === 1. This causes the 2nd tooltip update to set properties in both the view and model at the same time
	blue: function (val) {
			// into the same shadow DOM.
		var me = this;
		},
				width = ctx.measureText(label).width;
		return this.getMeta().xAxisID;
	},
			}
			_model: {
		var boundingRect = canvas.getBoundingClientRect();
convert.gray.lab = function (gray) {


		var me = this;
	},
		canvas.style.height = newHeight + 'px';
	logarithmic: scale_logarithmic,
				me.min = tickOpts.suggestedMin;
	"maroon": [128, 0, 0],
 * @todo remove at version 3
		// Re-sync meta data in case the user replaced the data array or if we missed
		}
		return this.getMeta().yAxisID;
		if (tickOpts.display && display) {
			} else {
		var labels = [];
	// https://github.com/chartjs/Chart.js/issues/5902
				yAxisID: null,
		} else if (vals.w !== undefined || vals.whiteness !== undefined) {
			for (; k < klen; ++k) {
 * where each value is a relative width to the scale and ranges between 0 and 1.

			var startAngle = vm.startAngle;
			cursor = {


		var metasets = me._getMatchingVisibleMetas();

				me.minNotZero = DEFAULT_MIN;
		var me = this;
				cursor.line++;
			}
			var chart = this.chart;
	 * @param {number} index - data index
	options.axis = options.axis || 'x';
			if (fraction < 1.5) {
		var offsetGridLines = gridLines.offsetGridLines;
	},

		yPadding: tooltipOpts.yPadding,
		}
	"ivory": [255, 255, 240],
	var i;

		var changed = me.handleEvent(e);
	 */
	}
				if (helpers$1.isArray(dataLabel)) {
	 * @param {Unit} unit - the unit as string
				if (!points[index]._view.skip && previous._view.skip) {
	transition: function(ease) {
			numSteps = animation.numSteps;
			footer: helpers$1.noop,
			if (isArray(label)) {
		// Update bezier control points
		core_defaults[config.type],
			for (j = 0, jlen = label.length; j < jlen; ++j) {
				target[keys[k]] = helpers.clone(source[keys[k]]);

	/**
	render: null, // render function used by the animation service
	b = 1 - Math.min(1, y * (1 - k) + k);
	var weekday = minor === 'week' ? timeOpts.isoWeekday : false;
		var data = chart.data;
				duration: options.responsiveAnimationDuration
		var fn = routes[toModel];
	"dimgrey": [105, 105, 105],
		/**
	getScaleDefaults: function(type) {
			.alpha(color1.alpha() * p + color2.alpha() * (1 - p));
			datasetIndex: me.index,
 * @class
			offset = (lineValue - scale.getPixelForTick(validIndex - 1)) / 2;
			: determineUnitForFormatting(me, ticks.length, timeOpts.minUnit, me.min, me.max));
			var index = legendItem.index;
		var proxies = expando.proxies || {};
		xAlign: tooltipOpts.xAlign,
			} else {



	z *= 108.883;
	var resizer = createDiv(CSS_SIZE_MONITOR);
	"navy": [0, 0, 128],
		var me = this;
			point.y > area.top - epsilon && point.y < area.bottom + epsilon;
	"orangered": [255, 69, 0],
var stylesheet = getCjsExportFromNamespace(platform_dom$1);
		if (tickOpts.reverse) {
		horizontalBar: {
			style: {
		var options = point._options;
	};
		// DEPRECATIONS: output a message only one time per update

					}
		ctx.setLineDash(gridLineOpts.borderDash || []);
					major: false

 * Chart.js v2.9.4
		t2 = l + s - l * s;
		var me = this;

	time: {

		var me = this;
	buildOrUpdateControllers: function() {
	};
	);
		round: false, // none, or override with week, month, year, etc.
convert.hsv.rgb = function (hsv) {
		var chart = source.chart;
convert.rgb.hsl = function (rgb) {
		var numTicks = me._ticks.length;
		return me.minSize;
		me.handleTickRangeOptions();
 * @deprecated since version 2.6
		var visible = meta && chart.isDatasetVisible(index);
	rgb: {channels: 3, labels: 'rgb'},
		var labelSizes = me._getLabelSizes();
		return 0;
			niceMax = max;
		helpers$1.each(listeners, function(listener, type) {
	}
			borderWidth: model.borderWidth,
		var animation, chart, numSteps, nextStep;

		var data = me.chart.data;
var options = helpers_options;
      match = match[1];
				pt.y += footerFontSize + vm.footerSpacing;
	},

	 * Converts the given value into a padding object with pre-computed width/height.

	var f = 0;
		var defaultColor = globalDefaults.defaultColor; // eslint-disable-line no-shadow

	 * given size (width, height) and the same `radius` for all corners.
	},
				}
	elements: {
		var options = me.options || {};
		var opts = me.options;
							fillStyle: style.backgroundColor,

		position.y -= textSize.h;
	 * is unknown or in none intensive code (not called often and small loopable). Else
	responsiveAnimationDuration: 0
var valueOrDefault = helpers_core.valueOrDefault;
 * and max range, so basically, the table will contains only two items: {min, 0} and {max, 1}.
		var position = options.position;
		box = layout.box;
			}
		var result = [];
			offset: true,
		var data = me._data;

		reverseKeywords[colorName[key]] = key;
		if (typeof item === 'string') {
	easeOutQuad: function(t) {
	 */
			niceMin = min;
		}

scale_category._defaults = _defaults;
	 */
	draw: function(chartArea) {
	var model = el._model || {};

		if (!isHorizontal) {
var controller_doughnut = core_datasetController.extend({
		var maxLeft = leftMovement + me.drawingArea;
	 */
			me.updateElement(rects[i], i, reset);
		var me = this;
		steps: 1000
 * @prop {number} width - Width of item. Must be valid after update()
				me._hoveredItem = hoveredItem;
			arcs[i]._options = me._resolveDataElementOptions(arcs[i], i);

	easing: '', // the easing to use for this animation
				if (ctx.setLineDash) {
			pointCurrent.mK = alphaK * tauK * pointCurrent.deltaK;

	scales: {
 */
	if (helpers$1.isArray(label)) {


					}
	"mediumorchid": [186, 85, 211],
			if (el && el._model && el instanceof elements.Line) {
		result.sort(compare2Level('order', 'index'));
convert.hsv.hcg = function (hsv) {
});
	helpers$1.niceNum = function(range, round) {
		}
		var callbacks = me._options.callbacks;
			helpers$1.each(me.legendItems, function(legendItem, i) {
var helpers_canvas = exports$1;
	z = z2 > 0.008856 ? z2 : (z - 16 / 116) / 7.787;
				delete scales[id];
		};

}
DatasetController.extend = helpers$1.inherits;
		right: x.end,
				if (i > 0 && currentColHeight + fontSize + 2 * vPadding > minSize.height) {
var valueOrDefault$3 = helpers$1.valueOrDefault;

				pointCurrent.model.controlPointNextY = pointCurrent.model.y + deltaX * pointCurrent.mK;

		var metasets = chart._getSortedVisibleDatasetMetas();
	lineTo: function(ctx, previous, target, flip) {
		if (!isNullOrUndef(label) && !isArray(label)) {
		var pointsLen = pointsWithTangents.length;
			timestamp = timestamps[i];

		var ilen = points.length;
				me.paddingBottom = lastLabelSize.height / 2;
				x3 = x1;
			return source.map(helpers.clone);
	};
// Helper to push or concat based on if the 2nd parameter is an array or not
		// Keep this in loop since we may support array properties here
 * @deprecated since version 2.7.0

	}
				angle += TAU;

			// If we want to trigger on an intersect and we don't have any items
			}
		},
	 */

	if (options.round) {
			}
			ctx.moveTo(x, y);
	m = (1 - g - k) / (1 - k) || 0;
			pixel = me.getPixelForTick(tick._index || i) + optionTicks.labelOffset;
 * Provided for backward compatibility, use Chart instead.
		ctx.lineJoin = 'round';

			_model: {
});
		// New implementations should return an array of objects but for BACKWARD COMPAT,
	},
		yAxes: [{
};
		});
 * Provided for backward compatibility, inheriting from Chart.PlugingBase has no
		canvas.height = height * pixelRatio;
		ctx.lineJoin = 'bevel';
	easeInOutQuart: function(t) {
		if (INTERVALS[UNITS[i]].common) {
 * Generate a set of linear ticks
	res[edge] = true;

			// lineWidth :
	hcg: {channels: 3, labels: ['h', 'c', 'g']},
	 */
		}, me);
			end = (last - interpolate$1(table, 'time', ticks[ticks.length - 2], 'pos')) / 2;
	if (fill === false) {
	var l = hsl[2] / 100;
			previous: {
	// Any function defined here is inherited by all legend types.
		var vLimits = determineLimits(angle, pointPosition.y, textSize.h, 90, 270);
			_datasetIndex: me.index,
	_datasetElementOptions: [


		path.unshift(graph[cur].parent);
function throttled(fn, thisArg) {
	var tickOpts = opts.ticks;
	_getIndexScaleId: function() {
				skip(ticks, spacing, majorIndices[i], majorIndices[i + 1]);
			datasetIndex: me.index
				ctx.lineDashOffset = resolve$4([angleLineOpts.borderDashOffset, gridLineOpts.borderDashOffset, 0.0]);
				valueInPixels = valueInPixels / 100 * node.parentNode[parentProperty];
	linkScales: helpers$1.noop,
	var id;
			if (stacked === false || stacks.indexOf(meta.stack) === -1 ||
		},
	 * Calls enabled plugins for `chart` on the specified hook and with the given args.
	var curr = ruler.pixels[index];
		var body = vm.body;
			var totalWidth = labelOpts.padding;
	return 'right';
	}
		return ticks;
			dataIndex: index,
		}


		if (axisWidth) {
	s *= (l <= 1) ? l : 2 - l;
		var pointStyle = vm.pointStyle;
	hslString: function () {
		var chartArea = chart.chartArea;
			} else {
	},
		};
		// Need to regenerate the model because its faster than using extend and it is necessary due to the optimization in Chart.Element.transition

	"bisque": [255, 228, 196],
		// | L1 | L2 |           ChartArea (C0)            | R1 |
		hoverRadius: 'pointHoverRadius',
		if (rawValue && rawValue.t !== undefined) {
			y = item.textOffset;
		var maxWidth, maxHeight, i, ilen;
	 * @private
/**
 * Easing functions adapted from Robert Penner's easing equations.
		return [color, color, color];
			}
				onAnimationComplete: onComplete
	var g = rgb[1] / 255;
	}
		me.fit();
		chartArea[pos] += change;
 * best case, all timestamps are linear, the table contains only min and max.
	};

		var list = document.createElement('ul');
		point._datasetIndex = me.index;
			var minY = contains270 ? -1 : Math.min(startY, startY * cutout, endY, endY * cutout);
	for (i = 0; i < ilen; ++i) {
	// Shared Methods
	},

};
	},
	},

			var dataset = datasets[i];
 * Offsets are added when the `offset` option is true.
		}
}
		// an error will be thrown.
	easeOutElastic: function(t) {

				return;
		var bodyAlign = vm._bodyAlign;

			var bottom = y + height - r;
	 * @private

		return this.getMeta().xAxisID;
		var me = this;
		return me._startPixel + decimal * me._length;
			this.setValues('hsv', vals);
	pointLabels: {

		values.radius = resolve$1([
		return +value;
		 * Point mode returns all elements that hit test based on the event position
	}

 */

				break;
	return vm ? (Math.abs(mouseY - vm.y) < vm.radius + vm.hitRadius) : false;
		var chart = me.chart;
		case 2: r = wh; g = v; b = n; break;

			y: existingModel.y
	 * The coordinate (0, 0) is at the upper-left corner of the canvas
		// After body lines
	determineDataLimits: helpers$1.noop,

			var items = [];

});
			weight: box.weight
	"turquoise": [64, 224, 208],
		var globalDefaults = core_defaults.global;
		if (!me._isVisible() || tz === gz || me.draw !== me._draw) {
	},
	saturation: function (val) {
		}
		xAlign = 'left';
	// To get a "nice" value for the tick spacing, we will use the appropriately named

	 */
		});
		delete me._listeners;
		}
			niceFraction = 1;
			result.push(i);
			}


	}
		return valueInPixels;
			});
			}
}
		var vm = this._view;

			furthestAngles.r = angleRadians;

		var rgb = this.values.rgb;
	},
			layout.width || chartArea.w,
	/**
		if (isNaN(radius) || radius <= 0) {
	buildTicks: helpers$1.noop,
		bodySpacing: 2,


var _defaults$1 = defaultConfig$1;
		var ilen = metasets.length;
// Scatter charts use line controllers
			me._cachedDataOpts = Object.freeze(values);
			// Note: the resize event is not supported on all browsers.
}
		var ticks = me.ticks;
		},

		hue = 2 + (b - r) / chroma;
		'Radar',
		var meta = this.getMeta();
		var globalDefaults = core_defaults.global;
		var opts = me.options;
	var r = rgb[0] / 255;
			el = meta.dataset;
			source = null;
				len0 = len1 = 0;
			values = stackValues.pos.concat(stackValues.neg);
				x2 = x1 - caretSize;
		'hoverBorderColor',
convert.gray.hsl = convert.gray.hsv = function (args) {
	/**
	var length = scale.getTicks().length;
	var xAlign = 'center';
		model.xAlign = alignment.xAlign;
	beforeFit: noop$2,
			break;
				};

			return;
	inLabelRange: xRange,
	}
		var model = point._model;

 * @todo remove at version 3
		deprecated$1('time scale', time.max, 'time.max', 'ticks.max');
/*
	"magenta": [255, 0, 255],

			flip ? target.controlPointNextX : target.controlPointPreviousX,
				borderWidth: options.borderWidth,
	hour: 'hA',
		} else if (i1[key] < value) {
function decodeFill(el, index, count) {
		function(array, callback, scope) {
	 * @private
				}
	};
		return -Math.cos(t * (Math.PI / 2)) + 1;
	}
			canvas.style.width = width + 'px';

				width: lineWidth,
 * @return {ChartElement[]} the nearest items

		var value = scale._parseValue(datasets[datasetIndex].data[index]);
		return Math.PI * Math.pow(this._view.radius, 2);
	 */
	return filtered;
	"skyblue": [135, 206, 235],
	 * A derived controller may override this to resolve controller-specific options.
	inXRange: function(mouseX) {
	 * @return {IStyleInterface} style object
				me.destroyDatasetMeta(i);

		steps: 60
	"ghostwhite": [248, 248, 255],

		list.setAttribute('class', chart.id + '-legend');


					id: id,
	var start = valueOrDefault$a(majorStart, 0);
		}
		hoverBorderWidth: 'pointHoverBorderWidth',
			};
			data = cache.data = {};
			draw: function() {
				y2 = y1 - caretSize;
	 * @param {number} maxHeight - the max height in pixels
			alphaK = pointCurrent.mK / pointCurrent.deltaK;
		// Backward compatibility: before introducing adapter, `displayFormats` was
/**
		prev = curr - (next === null ? ruler.end - ruler.start : next - curr);

			borderColor: options.borderColor,
					return;
			var idx = p.indexOf(plugin);
			return label;
		lf = function(x) {

			chart.update();
		var options = arc._options || {};
	// Note: the lookup table ALWAYS contains at least 2 items (min and max)
				}
		}
	hasValue: function() {
					tickString = tickValue.toExponential(numExponential);
				}
					options[key]
				].join('.');
		var datasets = chart.data.datasets;

   return "rgb(" + rgba[0] + ", " + rgba[1] + ", " + rgba[2] + ")";
				// -> we have to refit those
/**
		var label = data.labels && index < data.labels.length ? data.labels[index] : '';
	}
		var me = this;

			}
}
}
	"wheat": [245, 222, 179],
var valueOrDefault$7 = helpers$1.valueOrDefault;
	 * @return {number}
					var numDecimal = -1 * Math.floor(logDelta);
		// between the dataset discrete points due to the interpolation.

			}

	*/
		var meta = me.getMeta();
		Object.defineProperty(convert[model], 'channels', {value: channels});

}

		ctx.fillStyle = vm.backgroundColor;
				}
			var isLeft = position === 'left';


		inner: {
		var fontSize = labelFont.size;


	 * @returns {number} The number of decimal places.
		style.setAttribute('type', 'text/css');
		var proxy = proxies[chart.id + '_' + type];
   percentaString: percentaString,

	helpers$1.where = function(collection, filterCallback) {
		return 7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375;

	},
		} else if (fraction <= 5) {
				hidden: null,			// See isDatasetVisible() comment
		if (expando.resizer) {
	}
};
	},
	animation: {
};
	var proxy = expando.renderProxy = function(e) {
		return t;
			// Labels
	afterUpdate: noop$1,
		if (factor > spacing) {
			bodyItem = body[i];
			createNewLegendAndAttach(chart, legendOpts);
		var isBottom = opts.position === 'bottom';
	roundedRect: function(ctx, x, y, width, height, radius) {
		var labels = [];
function hexDouble(num) {
			me._bufferedRequest = {
		var model = arc._model;

	_element: Legend,
		var opts = me.options;
}

	 */
});
	datasets: {
}
	 */

				var activeElement = meta.data[tooltipItem.index];
	"khaki": [240, 230, 140],
		var meta = me.getMeta();
		}

			var columnHeights = me.columnHeights = [];

			if (reverse) {
		model.radius = options.radius + options.hoverRadius;
	return stacks[key];
			var index = legendItem.index;

				fillLineOfText(lines[j]);

	draw: function() {

		var columnHeights = me.columnHeights;
	"beige": [245, 245, 220],
		display: true,

		ctx.moveTo(pointPosition.x, pointPosition.y);

var defaultConfig$3 = {
		var me = this;

core_controller.elements = elements;
helpers$1.addEvent = addListener;

		return 0.5 * (-Math.pow(2, -10 * --t) + 2);
	height += titleLineCount ? (titleLineCount - 1) * model.titleSpacing : 0; // Title Line Spacing
		x2 = Math.max(vm.x, vm.base);
		me.minIndex = minIndex;
			return 0.5 * Math.pow(2, 10 * (t - 1));
					me.min = me.max - 1;
	ansi16: {channels: 1, labels: ['ansi16']},
		// Reset padding

			tooltipSize = getTooltipSize(this, model);
		titleFontSize: valueOrDefault$8(tooltipOpts.titleFontSize, globalDefaults.defaultFontSize),
	_getVisibleDatasetWeightTotal: function() {
		var me = this;
	var min = Math.min(Math.min(r, g), b);
		me._startValue = start;
	var evenMajorSpacing = getEvenSpacing(majorIndices);


					} else if (item.xLabel) {
}
			if (chart.isDatasetVisible(i)) {
		if (!canvas.style.height && !canvas.style.width) {
				return chart._getSortedDatasetMetas().map(function(meta) {
		}
			ci.update();
		id = prefix + index++;
		var i, j, ilen, jlen, item, tickFont, label, y;
	"lavenderblush": [255, 240, 245],
		var distance = distanceMetric(position, center);
function getScaleLabelHeight(options) {
		me.margins = helpers$1.extend({
	ctx.moveTo(curve0[0].x, curve0[0].y);
	},
core_defaults._set('global', {
		}
		delete chart.$plugins;
		return this.options.legendCallback(this);
	// Utils
		color: 'rgba(0,0,0,0.1)',
			reversePixels = !reversePixels;
			padding: 10,
          a = scale(isNaN(alpha) ? 1 : alpha, 0, 1);
		ctx.rect(area.left, area.top, area.right - area.left, area.bottom - area.top);
		hoverOptions = this._resolveDatasetElementOptions(element, true);
	return 0;
});
		var titleFontSize, titleSpacing, i;
}

var defaultConfig$2 = {
			size: size,
				ctx.lineTo(position.x, position.y);


	chart.buildOrUpdateScales();
		}
			} else if (i > 0 && y + itemHeight > me.top + me.minSize.height) {
			start += angle;
					helpers$1._merger(key, target, source);
		}
	draw: function() {

		var datasets = data.datasets;
	 */
	};
	 * @param {string} percentageProperty - property of parent to use when calculating width as a percentage
		me._cachedDataOpts = null;
			return;

			if (!rotation) {
		me.beforeFit();
			for (i = 0; !hasStacks && i < ilen; ++i) {
					cursor.line++;


	}
	},
		}

		var target = result.values;
		var rotation = 0;
	c = Math.sqrt(a * a + b * b);
	},
	var data = config.data = config.data || {};
	 * @private
		if (labelOpts.filter) {
var isArray = helpers$1.isArray;

	 *     - thickness of scales or legends in another orientation
		point.$previousStyle = {


	x = a / 500 + y;
		var me = this;
					ctx.fillRect(rtlHelper.leftForLtr(rtlColorX, bodyFontSize), pt.y, bodyFontSize, bodyFontSize);
			helpers$1.canvas.clipArea(chart.ctx, {
 * Returns array of strings split by newline
		me._unit = timeOpts.unit || (tickOpts.autoSkip
			start = (interpolate$1(table, 'time', ticks[1], 'pos') - first) / 2;
			xAlign = 'center';
	// Beyond MIN_SPACING floating point numbers being to lose precision
		if (!this.disableCSSInjection) {
		return [];
	 * Converts the given line height `value` in pixels for a specific font `size`.
		var me = this;
				ctx.stroke();
for (var k in plugins) {
		// Number - The backdrop padding to the side of the label in pixels
			return helpers$1.callback(me.options.afterBuildTicks, [me, ticks]);
	reset: function() {
		tick = ticks[i];
		me.maxIndex = maxIndex;
				return datasetLabel + ': (' + item.xLabel + ', ' + item.yLabel + ', ' + dataPoint.r + ')';
		var pointLabelPosition = scale.getPointPosition(i, outerDistance + extra + 5);
	},
			helpers$1.callback(animation.render, [chart, animation], chart);
			x: bounds.left,
				helpers$1.each(array._chartjs.listeners, function(object) {
		}
		var me = this;
		// last data: its size is also double based on the previous point.
function listenArrayEvents(array, listener) {

			h = (1 / 3) + rdif - bdif;
 * Provided for backward compatibility, use Chart.helpers.valueAtIndexOrDefault instead.
			}
			y = me.top + tl + tickPadding;
	"palegreen": [152, 251, 152],
var implementation = platform_dom$2._enabled ? platform_dom$2 : platform_basic;
		}
		'borderWidth',
			// Skip animation frame requests until the active one is executed.
		var me = this;
/*!
					label += tooltipItem.value;
		if (changed) {
helpers$1.canvas = canvas;
		radius: 'pointRadius',
convert.gray.hwb = function (gray) {
		var clientWidth = container.clientWidth;
	 * @return {boolean} true if the chart needs to re-render
	core_layouts.configure(chart, title, titleOpts);
		ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
	}

			controlPoints = helpers$1.splineCurve(
	_getValueScaleId: function() {
		var rects = me.getMeta().data;
		}
var valueOrDefault$8 = helpers$1.valueOrDefault;
				y2: y2,
	addElementAndReset: function(index) {
	/**
			sources.push(source);
	buildLabels: noop$2,
		return {
		var axisLength = me._length;
		return index >= collection.length - 1 ? collection[collection.length - 1] : collection[index + 1];
	inherits: function(extensions) {
			target.y);
			capBezierPoints: true,
		var tl = getTickMarkLength(options.gridLines);
			for (var len = result.length, i = 0; i < len; i++) {
			listener = function() {

		 */
 * @private
	var top = sortByWeight(filterByPosition(layoutBoxes, 'top'), true);
	getElementsAtXAxis: function(e) {
	}, 0);
	// controllers might still use it (e.g. the Smith chart).
			data: timestamps,
function getRelativePosition(e, chart) {
	 * @param {Chart} chart - The chart instance.
			s = p / 4;
	helpers$1.getHoverColor = function(colorValue) {
		head = scale.getPixelForValue(start + length);
	}
			element = metadata[j];
	config.options = mergeConfig(
		return value !== undefined && value !== null && value !== 'none';
					throw new Error('"' + meta.type + '" is not a chart type.');
		return 0;
			beginAtZero: true

			custom.radius,
		var i = 0;
				if (callback.call(scope, array[i], i, array)) {
		var merge, i, keys, klen, k;



		}
			var endY = Math.sin(endAngle);
			model.opacity = 0;
		var angleMultiplier = 360 / chart.data.labels.length;
	_resolveDatasetElementOptions: function(element, hover) {

	};

	 */
 */
			bodyItems.push(bodyItem);
	} else if (b === max) {
		var minSize = me.minSize = {};
			next = Math.round(start + count * spacing);
	smin *= lmin <= 1 ? lmin : 2 - lmin;
			helpers$1.callback(animation.onAnimationProgress, [animation], chart);
		var ch = helpers$1.getConstraintHeight(domNode);
	 * @param {IEvent} event - The event to handle
	rgbNumber: function () {
		'borderColor',
	return [l, a, b];
	if (l < 0.5) {
	parseVisibleItems(chart, function(element) {
		var width = boundingRect.right - boundingRect.left - paddingLeft - paddingRight;
 */
		var formatter = resolve$5([
	},
 */
			_chart: me.chart,
		var xLinePadding = 0;
		if (display !== 'auto') {
	var fill = source.fill;
		if (me.options.responsive) {
	/**
		me._type = me.getMeta().type;
				}

		// |                  T1 (Full Width)                   |
				};
			width: 0,

	while (lo >= 0 && lo <= hi) {
	}
	/**
		return fill;


helpers$1.extend(DatasetController.prototype, {
	}

	 * @returns {object} The padding values (top, right, bottom, left, width, height)
				for (i = len - 1; i >= 0; i--) {

	}
			mapper = meta.mapper;
	},

			descriptors.push({

			me.render(config);
			model.beforeBody = me.getBeforeBody(tooltipItems, data);
	},
			if (isNullOrUndef(tick.label) && i < ticks.length) {

	},
	 * @param {number} height - the height to fit into
	/**
		var pos = me.getDecimalForPixel(pixel) / offsets.factor - offsets.end;

		}
	 */
		return {

		}

		// making the final build way to big to embed in Chart.js. So let's do it manually,

	 * @private
 */
			arc = arcs[i];
				innerRadius: innerRadius,
					console.error('unexpected color value:', value);
		me._model = model;
	},

		return [{
			// which one can be specified by the user but also by charts as default option
         rgb[i] = parseInt(match.slice(i * 2, i * 2 + 2), 16);
function getBeforeAfterBodyLines(callback) {
			min < 0 && max < 0 ? max :
		me.maxHeight = maxHeight;
		if ((t /= 0.5) < 1) {
				? me.bottom - halfLineHeight - scaleLabelPadding.bottom
				ctx.lineTo(rtlHelper.xPlus(xLeft, textWidth), yMiddle);
	} else if (model.scaleZero !== undefined) {
	get: function() {
			// If we have an update that was triggered, we need to do a normal render
		function capControlPoint(pt, min, max) {
	this.options = options || {};
		return core_interaction.modes.label(this, e, {intersect: true});
	ticks: {
	this function routes a model to all other models.
var Color = function (obj) {
		return newControllers;
	};
	var i, value;

		var size = Math.min(
	 * Register a box to a chart.
		}
		var me = this;
		/**
		me.max = helpers$1.isFinite(me.max) && !isNaN(me.max) ? me.max : DEFAULT_MAX;

		model.borderWidth = valueOrDefault$4(options.hoverBorderWidth, options.borderWidth);
	//
		var time = null;
			me.ctx = null;
		if (nearestElement) {
		return labels;
		tickFont = helpers$1.options._parseFont(me.options.ticks);

	Object.defineProperty(convert[fromModel], 'channels', {value: conversions[fromModel].channels});
			var withinRadius = (distance >= vm.innerRadius && distance <= vm.outerRadius);
		if (core_plugins.notify(me, 'beforeRender') === false) {
			// Reset position before calculating rotation
	 * @todo remove at version 3
	 */
	} catch (e) {
	},
var elements = {};
			// Notify of resize

	rgbaString: function () {

		}
		if (length) {
		var labelOpts = opts.labels;
		if (options.scales) {
}

	updateElement: function(rectangle, index, reset) {
		}
	},
	// Any function defined here is inherited by all scale types.
			pointStyle: options.pointStyle,
				endAngle: reset && animationOpts.animateRotate ? datasetStartAngle : endAngle,
	 * @param {object|object[]} source - Object(s) to merge into `target`.

/**
		ctx.strokeStyle = fontColor; // for strikethrough effect
	/**

		}
	 */
		me.width = width;
		var i, ilen, labels, ticks, samplingEnabled;
		return Math.round(((r - 8) / 247) * 24) + 232;
		me.initToolTip();
		ctx.beginPath();
	 * then running a fitting algorithm
	var maxPadding = chartArea.maxPadding;

		var ctx = me.ctx;
		var meta = me.getMeta();
						model.controlPointNextY = capControlPoint(model.controlPointNextY, area.top, area.bottom);

		}
	"darkslategray": [47, 79, 79],
		'borderWidth',
			return {
	ctx.fill();
 * @prop {number} top - Top edge of the item. Set by layout system and cannot be used in update
			}
		}


	// Called after the ticks are built. We need
}
			// Footer
	 * This method immediately returns as soon as a plugin explicitly returns false. The
		meta.type,
		// http://www.w3.org/TR/WCAG20/#relativeluminancedef
			if (tickValue !== 0) {
	"honeydew": [240, 255, 240],
			box.left = box.fullWidth ? userPadding.left : chartArea.left;
				if (method.apply(plugin, params) === false) {
	 */
		model.borderColor = valueOrDefault(options.hoverBorderColor, getHoverColor(options.borderColor));
			y: mouseY
		onHover: null,
 * Helper function to get the items nearest to the event position considering all visible items in teh chart
		: align === 'right'
		// inside an iframe or when running in a protected environment. We could guess the

}
			}
		curr = timestamps[i];
			removeListener(node, type, proxy);

			id: 'x-axis-0' // need an ID so datasets can reference the scale
		}
		'borderSkipped',
		var channels = convert[model].channels;


		helpers$1.mergeIf(time.displayFormats, adapter.formats());
 * @see http://www.robertpenner.com/easing/

		meta.stack = me.getDataset().stack;
	beforeTickToLabelConversion: function() {
		return +this.getRightValue(this.chart.data.datasets[datasetIndex].data[index]);


		helpers$1.extend(me, config);
		// which due to floating point rounding error should be corrected.
		var angle = (index * angleMultiplier + startAngle) % 360;
		for (i = 0, ilen = points.length; i < ilen; ++i) {
				return labelOpts.padding;
			} else {
/* MIT license */
			if (yAlign === 'top') {
					return opts.filter(a, data);
			}
			borderWidth: model.borderWidth,
		me.height = minSize.height = isHorizontal ? textSize : me.maxHeight;
	 * Handle margins and padding interactions
			tooltipPosition = positioners[opts.position].call(me, active, me._eventPosition);
		return this.setSpace('hwb', arguments);

	},
	 * @private
			if (!tickOpts.beginAtZero) {


 * @interface Chart.PluginBase
		// Extra pixels out for some label spacing
		};
	var caretSize = vm.caretSize;
					ctx.moveTo(currentVM.x, currentVM.y);
 */
		var callbacks = opts.callbacks;
				return data.labels[item.index] + ': ' + item.yLabel;


	/**
		if (radius) {
		}
// DEPRECATIONS
	},
	var valueCount = scale.chart.data.labels.length;
	 */
	var hr;
		var propagate = options.propagate;

		});
		var node = graph[toModel];
	if (space === 'alpha') {
	"aqua": [0, 255, 255],
		zeroLineColor: 'rgba(0,0,0,0.25)',

			: 0;

		}
		var chart = me.chart;

	/**
	// grid line settings
		}
 * @see https://github.com/chartjs/Chart.js/pull/4591#issuecomment-319575939
	},
		return sizes[0] !== sizes[1] && (!isNaN(sizes[0]) || !isNaN(sizes[1]));
		var tz = opts.ticks && opts.ticks.z || 0;
		 * @deprecated since version 2.4.0. Use index mode and intersect == true
			}
	}

	// for details.
		}
		var DEFAULT_MIN = 1;
function fitWithPointLabels(scale) {
		}

							fillStyle: style.backgroundColor,
	 * Returns a set of predefined style properties that should be used to represent the dataset
		model.borderWidth = resolve([custom.hoverBorderWidth, dataset.hoverBorderWidth, model.borderWidth], undefined, index);

			item = item[0];
	_drawLabels: function() {
	 */
			if (p.indexOf(plugin) === -1) {
	var z = xyz[2];
				me._drawLabels.apply(me, arguments);

				return;
 * mode currently always generates bars equally sized (until we introduce scriptable options?).
/**
	svalues[index] = val;
function sample(arr, numItems) {
	mg = (1.0 - c) * g;
		if (me.request === null) {
	 * Returns the merged user-supplied and default dataset-level options
};
	 * @returns {object} The `target` object.
			value: function() {
			family: valueOrDefault(options.fontFamily, globalDefaults.defaultFontFamily),



				ctx.arc(left, top, r, -PI, -HALF_PI);

	},
}
		this.setValues('hsl', hsl);
			easingValue = 1;
		point._model = {
		}
	var integer = parseInt(colorString, 16);
				canvas.height = displayHeight;
			x2 = alignBorderValue(chartArea.right) - axisHalfWidth;
		rectangle: {
	var legend = new Legend({
 * @deprecated since version 2.7.0
	// color.rgb(10, 10, 10)
				// Draw pointStyle as legend symbol
	"whitesmoke": [245, 245, 245],
};
		return true;
			meta.yAxisID = dataset.yAxisID || scalesOpts.yAxes[0].id;
					var style = meta.controller.getStyle(usePointStyle ? 0 : undefined);

		var me = this;
			points = points.filter(function(pt) {
	if (diff === 0) {
			yOffset = Math.sin(rad) * radius;
				return;

		var title = vm.title;

		animationDuration: 400
	easeOutCubic: function(t) {
	buildTicks: function() {
function isDrawable(point) {
	return [args[0] / 100 * 255, args[0] / 100 * 255, args[0] / 100 * 255];

	};
		ctx.stroke();
				// Recalculate x and y for drawPoint() because its expecting

		'PolarArea',
		return this._reversePixels ? 1 - decimal : decimal;
	gridLines: {
	};
		list.setAttribute('class', chart.id + '-legend');
		onLeave: null,
			// Draw Background
	if (layout.size) {
	t1 = 2 * l - t2;
};

 * @namespace Chart.plugins
	olf = function(x) {
	var thickness = options.barThickness;

			var borderValue = items.borderValue;
	updateScaleDefaults: function(type, additions) {
				angle -= TAU;
			// Utility
			});
		chartArea[layout.pos] -= layout.size;
}

core_defaults._set('global', {
		return me.minSize;
			return cached;
	afterTickToLabelConversion: function() {
		}
Scale.prototype._draw = Scale.prototype.draw;

		};
			this.setValues('cmyk', vals);
}
 * Injects CSS styles inline if the styles are not already present.
		var points = (visible && meta.dataset._children) || [];
					var stepDecimal = currentStep / animationObject.numSteps;
				: me.top + halfLineHeight + scaleLabelPadding.top;
	Object.defineProperty(convert[fromModel], 'labels', {value: conversions[fromModel].labels});
	 * @protected
var conversions_15 = conversions.gray;

		min = i > 0 ? Math.min(min, Math.abs(curr - prev)) : min;
		cornerRadius: 6,
	function isConstrainedValue(value) {
			ctx.moveTo(x, top);
		var decimal = me.getDecimalForPixel(pixel);

		width: width,


		 * @param {IInteractionOptions} options - options to use during interaction
		style.setProperty('direction', direction, 'important');
	},
	"gold": [255, 215, 0],
	 * Handle an event
var scale_time = core_scale.extend({

	chart.titleBlock = title;
			delete tick.label;
	"darksalmon": [233, 150, 122],

			nextStep = Math.floor((Date.now() - animation.startTime) / animation.duration * numSteps) + 1;
       g = Math.round(rgba[1]/255 * 100),
			me.request = helpers$1.requestAnimFrame.call(window, function() {
		values: function(value) {

		if (!tickOpts.display) {
		var me = this;
	//
			label: function(item) {

		return lines;
	if (helpers$1.isObject(value)) {
			throw new Error('channel and label counts mismatch: ' + model);
	};
		me.drawingArea = Math.min(me.height - me.paddingTop, me.width) / 2;
	},
	var l = hsl[2] / 100;
	/**
			maxWidth = right - left;
scale_linear._defaults = _defaults$1;
		var angleRadians = scale.getIndexAngle(i);
			display: false
	var xScale = element._xScale;
/**
		updateConfig(me);

		var bodyItem, textColor, labelColors, lines, i, j, ilen, jlen;

		me.setDimensions();

		var datasets = me.data.datasets || [];
		y -= (size.height / 2);
	whiten: function (ratio) {
	},
					hasStacks = true;
		var lineWidths = me.lineWidths;
   getAlpha: getAlpha,

	"yellowgreen": [154, 205, 50]

		Math.pow(x[0] - y[0], 2) +
			dataset: me.getDataset(),
			lastDrawnIndex = 0;
	ctx.beginPath();
		var centerY = scale.yCenter;
				if (i > 0 && x + width + labelOpts.padding > me.left + me.minSize.width) {

		y: y !== undefined ? y : null,
		var me = this;
	/**

		+ (36 * Math.round(r / 255 * 5))
		f = (l - 0.5 * c) / (1.0 - c);
	}
		me._ticksToDraw = tickOpts.display && (tickOpts.autoSkip || tickOpts.source === 'auto') ? me._autoSkip(ticks) : ticks;
		var radiusReductionLeft = furthestLimits.l / Math.sin(furthestAngles.l);
						model.controlPointNextX = capControlPoint(model.controlPointNextX, area.left, area.right);
	pointerout: 'mouseout'
	"chartreuse": [127, 255, 0],
				opts.onHover.call(me, e.native, hoveredItem);
			for (j = 0, jlen = lines.length; j < jlen; ++j) {
}
			});


			} else {
		element.$previousStyle = prev;
		return (angle < 0 ? angle + 360 : angle) * Math.PI * 2 / 360;
				createNewTitleBlockAndAttach(chart, titleOpts);
	onAnimationComplete: null, // user specified callback to fire when the animation finishes

	},
	/**

			ctx.save();
	// NOTE(SB) canvas.getAttribute('width') !== canvas.width: in the first case it

/**
				};
	// Args are: (tooltipItem, data)
}
				}
	// Right, this is really confusing and there is a lot of maths going on here
		fontSize :
/**
var Arc = element_arc;

	"mediumturquoise": [72, 209, 204],
	 * Returns end of `unit` for the given `timestamp`.
		var proxy = proxies[chart.id + '_' + type] = function(event) {
	_getRingWeightOffset: function(datasetIndex) {
models.forEach(function (fromModel) {
						controller = meta.controller;
	var indexScale = controller._getIndexScale();
			me.render({


			// Initial positioning and colors
		+ font.size + 'px '
var MIN_INTEGER = Number.MIN_SAFE_INTEGER || -9007199254740991;
			// Appearance
		var me = this;

			// if it is an array let's measure each element
	var v = hsv[2] / 100;
		var me = this;
		return (lum2 + 0.05) / (lum1 + 0.05);

	_getFirstTickValue: function(value) {
			value = adapter.parse(value);
	if (numSpaces > maxNumSpaces) {
	"chocolate": [210, 105, 30],
		me.advance();
			}
		}
	 * @private
	});
		function IDMatches(meta) {
		me.pointLabels = me.chart.data.labels.map(function() {
			var halfFontSize = fontSize / 2;
	},
	layout: {
		mouseX = Math.round((mouseX - boundingRect.left - paddingLeft) / (width) * canvas.width / chart.currentDevicePixelRatio);
			prev[key] = model[key];

	for (i = UNITS.indexOf(minUnit); i < ilen - 1; ++i) {

		case 0:
		cx = curve1[0].cx;

			tx2 = borderValue - axisHalfWidth;
		animation.startTime = Date.now();

			: vm.height * Math.abs(vm.x - vm.base);
		}
	_convertTicksToLabels: function(ticks) {
	generateLegend: function() {
		me.tooltip._data = me.data;
			borderColor: defaultColor$1,
		}

		s12 = isNaN(s12) ? 0 : s12;
			} else {
	layout.size = layout.horizontal ? box.height : box.width;
			return [p, v, t];
		// Remember Last Actives
	}
			ctx.arc(x + xOffset, y + yOffset, cornerRadius, rad, rad + HALF_PI);
		} else if (3 * t3 < 2) {
	/**
			y2 = alignBorderValue(chartArea.bottom) - axisHalfWidth;
	var box = layout.box;
	var i;
		};
		}

		if (isHorizontal) {
		var ticks = me._ticksToDraw;
		if (datasets.length) {
				var res = base.apply(this, args);
	},
		var me = this;
				for (i = 0; i < len; i++) {
		var changed = false;
		me.config = config;

 */

			}
		Surrogate.prototype = me.prototype;
			type: 'linear'
var core_adapters = {
var colorString = {
	drawCaret: function(tooltipPoint, size) {
	var string = integer.toString(16).toUpperCase();
	var hr;
	"orchid": [218, 112, 214],
		y1 = vm.y - half;
			model.controlPointNextY = capControlPoint(controlPoints.next.y, area.top, area.bottom);
		ctx.restore();
	easeOutBounce: function(t) {
	},
		var constrainedNode = view.getComputedStyle(domNode)[maxStyle];

		}
	var ticks = [];
				// Store the hitbox width and height here. Final position will be updated in `draw`
			return x > 0 ? 1 : -1;
			},
		if (lineModel.spanGaps) {

			return;
		if (t === 0) {
			points = el._children || [];
		}


		// Estimate the width of each grid based on the canvas width, the maximum
// NOTE export a map in which the key represents the controller type, not
		for (; i < ilen; ++i) {
		if (hasStacks === undefined) {
	acquireContext: function(item, config) {
	/**
}
		var minRotation = tickOpts.minRotation || 0;
		var index = (name !== undefined)
	hslaString: function () {
		'borderColor',
 * Returns the start and end offsets from edges in the form of {start, end}
		if (!isValidKey(key)) {
	var lineValue = scale.getPixelForTick(validIndex);
		var i, ilen;
scale_radialLinear._defaults = _defaults$3;
	},
	isArray: function(value) {
			width: vm.width,
		var me = this;
	getStackCount: function() {

	cutoutPercentage: 0
	 * Chart.Legend obsolete. To avoid a breaking change, we export the Legend as part of
	/**
			continue;
	quarter: {
	 * @private
	return UNITS[ilen - 1];
		var me = this;
			var value = initial[prop];
				}
	},
	}
		me._timestamps = {
	// https://jsperf.com/object-keys-vs-for-in-with-closure/3
	"oldlace": [253, 245, 230],
		// Our canvas looks like the following.
			// Tooltip
			} else {
		lineValue += validIndex < index ? offset : -offset;

			bottom: 4
 * by incorporating scale defaults in `xAxes` and `yAxes` array items, then
		// Undefined labels and arrays should not be measured

	dataElementType: null,
			ctx.fillStyle = textColor;
	inLabelRange: function(mouseX) {
	/**
	saturate: function (ratio) {
			x: existingModel.x,
		while (Math.round(x * e) / e !== x) {
		line._model = me._resolveDatasetElementOptions(line);


				helpers$1.callback(animation.onAnimationComplete, [animation], chart);
			}


			style.getPropertyPriority('direction'),
	var r = rgb[0] / 255;
	} else if (xAlign === 'left') {
	return value;
	 */
		point._scale = scale;
	start = options.ticks.reverse ? scale.max : scale.min;
		me.maxWidth = maxWidth;
		}
 * Provided for backward compatibility, use Chart.plugins instead
		return {
		var setMin = tickOpts.min !== undefined || tickOpts.suggestedMin !== undefined;
			if (options.hasOwnProperty(prop)) {
		var sumPos = 0;


		}

	getArea: function() {



			this.drawCaret(pt, tooltipSize);
		showLabelBackdrop: true,
		for (i = 0, ilen = (chart.data.datasets || []).length; i < ilen; ++i) {
			borderWidth: 0
			y = box.bottom;
		helpers$1.each(me.ticks, function(label, index) {
			head: center + size / 2,
		core_plugins.notify(me, 'afterEvent', [e]);
	 */
	 * Returns true if `value` is an object (excluding null), else returns false.
var core_ticks = {
						return;
		me.outerRadius = chart.outerRadius - chart.radiusLength * me._getRingWeightOffset(me.index);
			x1 = alignBorderValue(chartArea.left) + axisHalfWidth;
	return lineValue;
			lineHeight: helpers_core.options.toLineHeight(valueOrDefault(options.lineHeight, globalDefaults.defaultLineHeight), size),
	var y = (r * 0.2126) + (g * 0.7152) + (b * 0.0722);
		me.legendItems = legendItems;
			x: vm.x,
			return align;
		// the internal meta data accordingly.
		// Do this before render so that any plugins that need final scale updates can use it
 * @deprecated since version 2.1.5
		(c * pure[0] + mg) * 255,
		case 3:
			x = box.right;
});
	};
	"coral": [255, 127, 80],
			afterFooter: helpers$1.noop
				var radius = boxWidth * Math.SQRT2 / 2;
 * @function Chart.helpers.removeEvent
			: me.getPixelForDecimal(index * tickWidth + (offset ? tickWidth / 2 : 0));
		arc.endAngle = arc.startAngle + TAU;
 * @todo remove at version 3
			ilen = metasets.length;


// by the controller in core.controller.js (`controllers[meta.type]`).
					return i;

function createTooltipItem(element) {
		return (v - c) / 6 / diff + 1 / 2;
			} else {
		// Dimensions
				}
/**
	isFinite: function(value) {

};
			var logDelta = helpers$1.log10(Math.abs(delta));
		// Function - Used to convert point labels
		for (i = 0, ilen = dataset.data.length; i < ilen; i++) {
		// In case the entire data object changed


	var end = Math.min(valueOrDefault$a(majorEnd, ticks.length), ticks.length);
			textWidth = data[string] = ctx.measureText(string).width;
		}
			return domNode.clientWidth;
	 * Returns the number of decimal places

		}
	"blue": [0, 0, 255],
			font = tick.major ? fonts.major : fonts.minor;
		var i, ilen;
	// Solution:
		return a[l1] === b[l1]
	var len1 = 0;
	}

			max = Math.max(max, labels[labels.length - 1]);
		var chartArea = chart.chartArea;
	},
	g = g > 0.04045 ? Math.pow(((g + 0.055) / 1.055), 2.4) : (g / 12.92);
	getStackIndex: function(datasetIndex, name) {

				me.resize();
		me.afterDataLimits();

	} while (helpers$1.findIndex(axesOpts, hasId) >= 0);
		},

		var config = me._config;
	var v = c + g * (1.0 - c);
			}
}
	}
	var lo = 0;

			if (me.min !== 0 && me.min !== null) {
			var w = container ? container.clientWidth : 0;
			? stacks.indexOf(name)
	 * Ported from sass implementation in C
	touchmove: 'mousemove',

	"azure": [240, 255, 255],
	 * @private
			return 1;
		var tickOpts = opts.ticks;
		// |    |    |----|                           |----|    |
	if (fill === undefined) {
		labelSizes = me._getLabelSizes();
				return this._options.bodyFontColor;
		}

		var model = rectangle._model;
	} else if (vm.base < vm.y) {
				var midpoint = (previous.x + target.x) / 2.0;
				if (ControllerClass === undefined) {
	_getIndexScaleId: function() {
			}
	/**
	hover: {
				mK: 0
		default:
		if (!proxy) {
var valueOrDefault$5 = helpers$1.valueOrDefault;

			}
	}

	countVisibleElements: function() {
		if ((typeof rawValue === 'number' || rawValue instanceof Number) && !isFinite(rawValue)) {

		if (isHorizontal) {
	},
					}
			// https://github.com/chartjs/Chart.js/issues/2807

 * @namespace Chart.Chart
}
		}
	/**
		}
		ctx.fillText(scaleLabel.labelString, 0, 0);
	},
	var mg = 0;
			}
function skipMajors(ticks, majorIndices, spacing) {
			var maxX = contains0 ? 1 : Math.max(startX, startX * cutout, endX, endX * cutout);
			arcs[i]._options = me._resolveDataElementOptions(arcs[i], i);

			}
		ctx.fillStyle = scaleLabelFontColor; // render in correct colour
	case 'end':
	var vmin = Math.max(v, 0.01);
			if (datasets[i].label) {

		var minIndex = me.minIndex;
	var p = 255 * v * (1 - s);
			return (i < length && points[i]._view) || null;
				}
		// when loading the scale (adapters are loaded afterward), so let's populate
	if ((typeof str === 'string' || str instanceof String) && str.indexOf('\n') > -1) {
			me.margins.right = Math.max(me.paddingRight, me.margins.right);
		var getHoverColor = helpers$1.getHoverColor;
			var distanceMetric = getDistanceMetricForAxis(options.axis);
			// https://github.com/chartjs/Chart.js/issues/5597
		x: x !== undefined ? x : null,
			borderWidth: 2,
		if (yScale.options.stacked) {
});
		'borderJoinStyle',
		var ticksOpts = me.options.ticks;
			meta.hidden = meta.hidden === null ? !ci.data.datasets[index].hidden : null;
		var index = chart.boxes ? chart.boxes.indexOf(layoutItem) : -1;
		var scales = chart.scales;
core_controller.defaults = core_defaults;
		} else if (item.length) {
	var models = Object.keys(graph);
var controllers = {
			return 0.5 * t * t * t * t;
		ctx.closePath();

// @todo dispatch these helpers into appropriated helpers/helpers.* file and write unit tests!
	lch: {channels: 3, labels: 'lch'},
			style: valueOrDefault(options.fontStyle, globalDefaults.defaultFontStyle),
		model.height = horizontal ? ipixels.size : undefined;
			ty1 = me.bottom - tl;
			// Support for any object associated to a canvas (including a context2d)

	"floralwhite": [255, 250, 240],
			if (helpers$1.almostEquals(pointCurrent.deltaK, 0, this.EPSILON)) {

		// don't count items that are skipped (null data)

	/**

					helpers$1.previousItem(points, i)._model,
	 */
		} else {
	/**
		/* global CanvasPattern */
			h = bdif - gdif;
		}

		// |    |    |                                     |    |

	return {
		} else if (vals.v !== undefined || vals.value !== undefined) {
	 * @param {Array} a0 - The array to compare
		me._valueRange = (log10(me.max) - log10(start)) / (1 - offset);
	},
			if (options.reverse) {
				lineWidths[lineWidths.length - 1] += width + labelOpts.padding;


				minIndex = findIndex;
		if (!config || typeof config !== 'object') {
		if (updateDims(chartArea, params, layout)) {
	 * @param {object} target - The target object in which all sources are merged into.
				x: me.left + labelOpts.padding,
			// user specified max value
		var ctx = this._chart.ctx;
}
			var angle = pointRelativePosition.angle;
			parseVisibleItems(chart, function(element) {
		}
	"mistyrose": [255, 228, 225],
	 * @param eventPosition {object} the position of the event in canvas coordinates
		hsl[2] += hsl[2] * ratio;
		var i, ilen, model, controlPoints;
	 * @private
				}

		me.beforeFit();
		}
			}
		ctx.arc(x, y, pixelMargin, endAngle + Math.PI / 2, startAngle - Math.PI / 2);
			labelColor: function(tooltipItem, chart) {
			pointCurrent = pointsWithTangents[i];
						values[i] = values[i] || 0;
		var y = pt.y;
		var p = 0;
	if (curve1[0].angle !== undefined) {
	convertTicksToLabels: function() {
		var alignment = {
		var chart = me.chart;
	"lavender": [230, 230, 250],
	calculateCircumference: function(value) {
	// such that we can't do the math necessary to generate ticks
	},
		return {
			if (options.enabled || options.custom) {
	easeInOutBounce: function(t) {
			furthestLimits.l = hLimits.start;
			return values.hwb.concat([values.alpha]);
var resolve = helpers$1.options.resolve;

	/**

		core_controller.plugins.register(plugins[k]);
	values.alpha = Math.max(0, Math.min(1, (alpha === undefined ? values.alpha : alpha)));
			titleX = opts.position === 'left' ? left + offset : right - offset;
	"paleturquoise": [175, 238, 238],
		me.paddingTop = 0;

	minute: 'h:mm a',
		me.ticks = me.ticks.map(tickOpts.userCallback || tickOpts.callback, this);

}

		}
	_create: function(value) {
}
		if (!currentVM.skip) {

	 * Used to get the data value from a given pixel. This is the inverse of getPixelForValue
	tooltips: {
			edge = swap(edge, 'left', 'right');
	hsl: {channels: 3, labels: 'hsl'},
		if (helpers.isObject(tval) && helpers.isObject(sval)) {
		// We generally don't need to compute the size of every single label for determining scale size
	* @private
		}
	disableCSSInjection: false,
		// and must not be accessed directly from outside this class. `this.ticks` being
		ticks = me.buildTicks() || [];
			return array.findIndex(callback, scope);
	function(klass) {
	// Get the correct value. NaN bad inputs, If the value type is object get the x or y based on whether we are horizontal or not
	ctx.beginPath();
		if (convert[model].labels.length !== convert[model].channels) {
		if (cache.id === this._cacheId) {
var exports$4 = core_element.extend({
		callback: core_ticks.formatters.values,
			model = points[i]._model;
	 * Returns the stack index for the given dataset based on groups and bar visibility.
	/**

	 */
		me.buildLabels();
		values.barThickness = valueOrDefault$3(indexOpts.barThickness, values.barThickness);
			return NaN;

		helpers$1.each(me.boxes, function(box) {

		// Animation check workaround:
		return this.setChannel('cmyk', 0, val);
	},
 */
	var footerFontSize = model.footerFontSize;

		} else if (legend) {
	"darkorchid": [153, 50, 204],
			return this.values.alpha;
 * @todo remove at version 3
		x: function(x) {

 * @private
			return null;
			significand = 1;
			if (opts.filter) {

	});

		}
 */
					type = valueOrDefault$9(scale.type, key === 'xAxes' ? 'category' : 'linear');
					columnWidths.push(currentColWidth); // previous column width
		}
	}
		}
	},
		var startAngle = options.startAngle || 0;
				fn.apply(thisArg, args);
		// If we are viewing some subset of labels, slice the original array
			listItemSpan = listItem.appendChild(document.createElement('span'));
		return index < 0 || index > numTicks - 1

		color: 'rgba(0,0,0,0.1)',
		var me = this;
   if (alpha < 1 || (rgba[3] && rgba[3] < 1)) {
	var l;
			cache.font = font;
		target = model.scaleZero;

	/**
	return {
core_controller.DatasetController = core_datasetController;
	"lightsalmon": [255, 160, 122],

};
			return;
		});
			hoverBorderWidth: 1
		graph[models[i]] = {
		 * - 'labels': generates ticks from user given `data.labels` values ONLY.
			listener(createEvent('resize', chart));
	 */
				opts.onClick.call(me, e.native, hoveredItem);
 */
			.filter(function(meta) {
			ctx.fillText(label, 0, -offset);

		}
			if (opts === true) {
	},
		};
			ctx.lineTo(x + Math.cos(rad) * radius, y + Math.sin(rad) * radius);
				}



	}
		// to https://github.com/chartjs/Chart.js/issues/2435#issuecomment-216718158
			if (length >= 0 && !isHorizontal || length < 0 && isHorizontal) {
		var unit = options.time.unit || 'day';
		 * @function Chart.Interaction.modes.x
		var chart = me.chart;

	 * @returns {object} The `target` object.
 * @param {number[]} timestamps - timestamps sorted from lowest to highest.
		if (scaleOptions) {
 */
		if (style.fill === false || style.fill === null) {
		this.updateElement(element, index, true);
	},

		var min = me.min;
		titleFontColor: '#fff',

		var rounded = Math.round(x);
function unwatchForRender(node) {

		var x = reset ? xScale.getPixelForDecimal(0.5) : xScale.getPixelForValue(typeof data === 'object' ? data : NaN, index, dsIndex);
		// Body
function isValidKey(key) {
		for (i = 0; i < pointsLen - 1; ++i) {

	var source = sources[index];
	},
	var time;
		if (typeof label === 'string') {
				var boxWidth = getBoxWidth(labelOpts, fontSize);
	},
	"mediumseagreen": [60, 179, 113],
			datasetIndex: me.index
	}
		ctx.beginPath();
			pt.x = getAlignedX(vm, vm._titleAlign);
			value = moment(value, format);
	draw: function() {
	"cornflowerblue": [100, 149, 237],
	if (!font || helpers_core.isNullOrUndef(font.size) || helpers_core.isNullOrUndef(font.family)) {
	var h = lch[2];
					var currentStep = animationObject.currentStep;

					me.min = Math.min(me.min, minVal);
		y = reset ? yScale.getBasePixel() : me.calculatePointY(value, index, datasetIndex);
				labelTextColors.push(opts.callbacks.labelTextColor.call(me, tooltipItem, me._chart));
				y2 = alignPixel(chart, me.bottom, lastLineWidth) + lastLineWidth / 2;
			if (!isNaN(value) && !element.hidden) {
	"mediumseagreen": [60, 179, 113],
	if (vm.horizontal) {

	/**
			helpers$1.each(me.ticks, function(label, index) {
			return me.apply(this, arguments);
		var maxWidth, titleX, titleY;
		}

		spacing = Math.ceil(spacing * factor) / factor;
		}
					return false;
	// building opposite area curve (reverse)
		var options = me.options;
	return {minor: minor, major: major};
	},
		_titleAlign: tooltipOpts.titleAlign,

          w = scale(parseFloat(match[2]), 0, 100),

		if (config.tension !== undefined && config.lineTension === undefined) {
		values.barPercentage = valueOrDefault$3(indexOpts.barPercentage, values.barPercentage);
	 * https://github.com/chartjs/Chart.js/issues/5111#issuecomment-355934167
	_drawTooltip: function(easingValue) {
	 */
	var fn = conversions[graph[toModel].parent][toModel];
// INTERNAL: static default options, registered in src/index.js
			height: t + b,
		var ilen = rects.length;
		 * @private
			scale: scale
		if (!element) {
		// Null and undefined values first
				datasetOpts[readKey],
	scale: {
	var listeners = stub.listeners;
						sumPos += stackedRightValue || 0;
			furthestLimits.t = vLimits.start;
	afterBuildLabels: noop$1,
		} else if (distance === minDistance) {
		// least the canvas context is reset to the default state by setting the canvas width.
			}
				} else {
	convertTicksToLabels: function() {
	"lightgoldenrodyellow": [250, 250, 210],
	merge: function(target, source, options) {
		if (!this.isHorizontal()) {
 * Provided for backward compatibility, use Chart.helpers.callback instead.
		for (i = 0, ilen = data.length; i < ilen; ++i) {
		ctx.fillStyle = pointLabelFontColor;

		var style = document.createElement('style');
			return getNearestItems(chart, position, options.intersect, distanceMetric);
	 */
		 * @param {IInteractionOptions} options - options to use
		});
	}
			for (i = 0, ilen = elementOptions.length; i < ilen; ++i) {

		return index < 0 || index > ticks.length - 1
	"indianred": [205, 92, 92],
	update: function() {
		deprecated('bar chart', me._getValueScale().options.minBarLength, 'scales.[x/y]Axes.minBarLength', 'dataset.minBarLength');
// It is this service's responsibility of carrying out that layout.
			}
				var pos = el.tooltipPosition();
		 * @param {Event} e - the event we are find things at
			// We set the min or the max but not both.
		}

		var stack = me.getMeta().stack;
		me.clear();
		if (val === undefined) {
		helpers$1.callback(this.options.afterUpdate, [this]);
		});
var platform = helpers$1.extend({
		footerAlign: 'left',
		var x = pt.x;
				outerRadius: reset ? resetRadius : distance,
	var curve0 = [];

var controller_polarArea = core_datasetController.extend({
var positioners_1 = positioners;
	},

 * @param {function} distanceMetric - function to provide the distance between points
};
	var widestLabelSize = 0;
 * Returns an array of {time, pos} objects used to interpolate a specific `time` or position
	pointerdown: 'mousedown',
helpers_core.drawRoundedRectangle = function(ctx) {
	},


		if (r > 248) {

	 */
				endAngle: endAngle,

	determineDataLimits: function() {
			findIndex = labels.indexOf(min);
 * default scale options for the `scales` and `scale` properties, then returns
		 * @return {Chart.Element[]} Array of elements that are under the point. If none are found, an empty array is returned
 * NOTE(SB) We actually don't use this container anymore but we need to keep it
var defaultConfig$1 = {
			} else {
	/**

				return;
				line: 0
	}
			me.width = minSize.width = me.height = minSize.height = 0;
		}],
		ctx.textAlign = getTextAlignForAngle(angle);

			var items = [];
		var contrastRatio = this.contrast(color2);
			model.opacity = 1;
	beforeUpdate: function(chart) {
		var chart = me.chart;
		var fontColor = valueOrDefault$e(labelOpts.fontColor, globalDefaults.defaultFontColor);
		ctx.rotate(rotation);
	var adapter = scale._adapter;
		return Math.sqrt(1 - (t = t - 1) * t);
		backgroundColor: 'pointBackgroundColor',
	},
		// display property
});


	 */
		lineWidth: 1,
		}
			furthestAngles.b = angleRadians;
			h: label.length * lineHeight
			return cache.descriptors;
		if (!me._view) {
	return [(rgb[0] / 255) * 65535, (rgb[1] / 255) * 65535, (rgb[2] / 255) * 65535];
			: this.getPixelForValue(ticks[index], index + this.minIndex);

	var next = !range.lo ? table[1] : !range.hi ? table[table.length - 1] : range.hi;
var filler = plugin_filler;
		setLayoutDims(verticalBoxes.concat(horizontalBoxes), params);
	 * @param {number} [datasetIndex] - The dataset index
			});
	return {

			ctx.moveTo(x, y);
 * Provided for backward compatibility, not available anymore
		ctx.font = labelFont.string;
			},
	while (queue.length) {
		this.setValues('hsl', hsl);

	 * Returns a subset of ticks to be plotted to avoid overlapping labels.
			model.y = tooltipPosition.y;
			radius: model.radius
			helpers$1.rtl.restoreTextDirection(ctx, vm.textDirection);
		var me = this;
					-width / 2 - tickOpts.backdropPaddingX,
			} else {
	 * @since 2.7.0

	return {
		} else if (isArray(label)) {
			x: vm.x + (Math.cos(centreAngle) * rangeFromCentre),
		// |                  B2 (Full Width)                   |
		ctx.textBaseline = 'middle';
		if (core_plugins.notify(me, 'beforeDatasetsDraw', [easingValue]) === false) {


	 * @protected
	/**
				if (data.labels.length && data.datasets.length) {
					if (stackedRightValue < 0) {
	var color = args % 10;
		var afterFooter = callbacks.afterFooter.apply(me, arguments);
				return me.config.data;
			columnHeights.push(currentColHeight);
	"mediumaquamarine": [102, 205, 170],
core_controller.Scale = core_scale;

var scale_linear = scale_linearbase.extend({
		textSize = measureLabelSize(scale.ctx, plFont.lineHeight, scale.pointLabels[i]);
		var me = this;

	_getStacks: function(last) {
		// Common base implementation to handle ticks.min, ticks.max, ticks.beginAtZero
			var widestLabelSize = labelSizes.widest;
		// Draw circular arcs between the points
		var halfAngle = (vm.startAngle + vm.endAngle) / 2;
			afterTitle: helpers$1.noop,
				opts = helpers$1.clone(core_defaults.global.plugins[id]);
		}
	var t, r, b, l;

					totalWidth += currentColWidth + labelOpts.padding;
		return FORMATS;
			box: box,


		meta.controller._update();
	for (var keyword in colorName) {
		var adapter = me._adapter;

			}
		var meta = this.getMeta();

				hasCContainer ? parseMaxStyle(constrainedContainer, parentNode, percentageProperty) : infinity);
		if (legendOpts) {
}
		var value;
	"mintcream": [245, 255, 250],
	/**
			// See https://github.com/chartjs/Chart.js/issues/3781
		var lines = [];

		helpers$1.callback(this.options.beforeTickToLabelConversion, [this]);
		var p = this._plugins;

		return {
			_chart: me.chart,
	if (h < 0) {

			me.end = me.min;
			} else if (left < right) {
		rectangle._datasetIndex = me.index;
			ctx.beginPath();

			if (this.isDatasetVisible(i)) {
					label += ': ';


		var vm = this._view;
	 * @private
	},
	 */
	if (!edge) {

	setHoverStyle: function(point) {
		 * Formatter for value labels
		// except 'alpha' which is a number.
	};
		};
	return config;

	buildTicks: function() {
		// Canvas setup
		} else if (xAlign === 'right') {
	 * @private
		return 'none';
			return domNode.clientHeight;
	};
		ctx.restore();
		var options = me._options;
}
}
				x = cursor.x = x + me.columnWidths[cursor.line] + labelOpts.padding;
function getMajorIndices(ticks) {
};
		if (min !== undefined) {

	_getLegendItemAt: function(x, y) {
		}
			} else {
convert.gray.cmyk = function (gray) {
	 * When `true`, prevents the automatic injection of the stylesheet required to
			w: helpers$1.longestText(ctx, ctx.font, label),

			} else if (helpers$1.isArray(thing)) {

		ctx.translate(titleX, titleY);



	updateElement: function(arc, index, reset) {
	_getLabelSize: function(label) {

	r = r > 0.04045 ? Math.pow(((r + 0.055) / 1.055), 2.4) : (r / 12.92);
	y /= 100;
			startPixel = me.left;


	helpers$1.findIndex = Array.prototype.findIndex ?
var easing = helpers_easing;
			h: height - border.t - border.b

		_footerAlign: tooltipOpts.footerAlign,
	cmyk: ['cyan', 'magenta', 'yellow', 'black']
			if (legendItem.hidden) {

		 * @since 2.7.0
	_configure: function() {
		labelOpts.boxWidth;


		var me = this;

				dataset: null,
	},

			min = timestamps[0];
	var chart = tooltip._chart;
			var position = getRelativePosition(e, chart);
		return this.setChannel('hwb', 1, val);
		value = +matches[2];
		if (t === 0) {
	 * Returns the location of the given data point. Value can either be an index or a numerical value
	var target = null;
	},
			xOffset = Math.cos(rad) * radius;
	 * @param datasetIndex


			ctx.lineTo(x + yOffset, y - xOffset);
		me.afterBuildLabels();
	 */
		return (typeof value === 'number' || value instanceof Number) && isFinite(value);
			w: (tickLabelWidth * cosRotation) + (tickFontSize * sinRotation),
		if (yAlign === 'top') {


		me._bufferedRequest = null;
	 */

// hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
};
	add: abstract,
		me.min = Math.min(min, max);
}
		var maxIndex = me.maxIndex;
	 * @protected
	 */
			drawPointLabels(me);
	var capped;
function xRange(mouseX) {
typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(function() { try { return require('moment'); } catch(e) { } }()) :

		};
			return DOUBLE_PI$1 * (Math.abs(value) / total);
			ctx.textBaseline = 'middle';
			endPixel = me.bottom;
	 * @param {ILayoutItem} item - the item to configure with the given options

	 * Returns the sum of all visibile data set weights.  This value can be 0.
	bubble: controller_bubble,
						start += ivalue;
					if (i < points.length - 1 && isPointInArea(points[i + 1]._model, area)) {



		var scale = me._getIndexScale();
		return this.defaults.hasOwnProperty(type) ? helpers$1.merge(Object.create(null), [core_defaults.scale, this.defaults[type]]) : {};
		var i, len, nearestElement;
Color.prototype.setSpace = function (space, args) {
	var t, r, b, l;


		wrappedFn.conversion = fn.conversion;
var conversions_14 = conversions.apple;
}

				// Adjust padding taking into account changes in offsets
         a = Math.round((parseInt(hexAlpha + hexAlpha, 16) / 255) * 100) / 100;
		return a * Math.pow(2, -10 * t) * Math.sin((t - s) * (2 * Math.PI) / p) + 1;
		var keys, i, ilen, key;
	easeInOutCirc: function(t) {
		arc.pivot();
		var tval = target[key];
		}

			end += offset;
	/**
	updateIndex: function(datasetIndex) {

		configurable: true,
	},
	"forestgreen": [34, 139, 34],
		}
// https://davidwalsh.name/detect-node-insertion
		value: {
	//
	distribution: 'linear',
	var skip = parseBorderSkipped(vm);
			}
		if (me.lastActive.length) {

          b = scale(parseFloat(match[3]), 0, 100),
		});
		var valueOpts = me._getValueScale().options;
		weight: 1000,

	// Get the correct tooltip label
 * @param element - the chart element (point, arc, bar) to create the tooltip item for

	update: function(maxWidth, maxHeight, margins) {
	 * @private
			_datasetIndex: me.index,
	};
		point: {

var resolve$5 = helpers$1.options.resolve;
	};
		}
	red: function (val) {
 * Provided for backward compatibility, use Chart.Animation instead
	for (i = 0, ilen = keys.length; i < ilen; ++i) {

	},

