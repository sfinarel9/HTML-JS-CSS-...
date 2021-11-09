
(function () {
	'use strict';
	window.addEventListener('load', function () {
		// Fetch all the forms we want to apply custom Bootstrap validation styles to
		var forms = document.getElementsByClassName('needs-validation');
		// Loop over them and prevent submission
		var validation = Array.prototype.filter.call(forms, function (form) {
			form.addEventListener('submit', function (event) {
				if (form.checkValidity() === false) {
					event.preventDefault();
					event.stopPropagation();
				}
				form.classList.add('was-validated');
			}, false);
		});
	}, false);
})();
/*! jQuery spinner - v0.1.6 - 2015-03-09
* https://github.com/xixilive/jquery-spinner
* Copyright (c) 2015 xixilive; Licensed MIT */
!function (a) {
	"use strict";
	var b, c = function (b, d) {
		return d = a.extend({}, d), this.$el = b,
			this.options = a.extend({},
				c.rules.defaults, c.rules[d.rule] || {}, d),
			this.min = parseFloat(this.options.min) || 0,
			this.max = parseFloat(this.options.max) || 0,
			this.$el.on("focus.spinner", a.proxy(function (b) {
				b.preventDefault(), a(document).trigger("mouseup.spinner"),
				this.oldValue = this.value()
			}, this)).on("change.spinner",
				a.proxy(function (a) { a.preventDefault(), this.value(this.$el.val()) }, this)).on("keydown.spinner", a.proxy(function (a) { var b = { 38: "up", 40: "down" }[a.which]; b && (a.preventDefault(), this.spin(b)) }, this)), this.oldValue = this.value(), this.value(this.$el.val()), this
	}; c.rules = { defaults: { min: null, max: null, step: 1, precision: 0 }, currency: { min: 0, max: null, step: .01, precision: 2 }, quantity: { min: 1, max: 999, step: 1, precision: 0 }, percent: { min: 1, max: 100, step: 1, precision: 0 }, month: { min: 1, max: 12, step: 1, precision: 0 }, day: { min: 1, max: 31, step: 1, precision: 0 }, hour: { min: 0, max: 23, step: 1, precision: 0 }, minute: { min: 1, max: 59, step: 1, precision: 0 }, second: { min: 1, max: 59, step: 1, precision: 0 } }, c.prototype = { spin: function (b) { if ("disabled" !== this.$el.attr("disabled")) { this.oldValue = this.value(); var c = a.isFunction(this.options.step) ? this.options.step.call(this, b) : this.options.step; switch (b) { case "up": this.value(this.oldValue + Number(c, 10)); break; case "down": this.value(this.oldValue - Number(c, 10)) } } }, value: function (c) { if (null === c || void 0 === c) return this.numeric(this.$el.val()); c = this.numeric(c); var e = this.validate(c); 0 !== e && (c = -1 === e ? this.min : this.max), this.$el.val(c.toFixed(this.options.precision)), this.oldValue !== this.value() && (this.$el.trigger("changing.spinner", [this.value(), this.oldValue]), clearTimeout(b), b = setTimeout(a.proxy(function () { this.$el.trigger("changed.spinner", [this.value(), this.oldValue]) }, this), d.delay)) }, numeric: function (a) { return a = this.options.precision > 0 ? parseFloat(a, 10) : parseInt(a, 10), !isNaN(parseFloat(a)) && isFinite(a) ? a : a || this.options.min || 0 }, validate: function (a) { return null !== this.options.min && a < this.min ? -1 : null !== this.options.max && a > this.max ? 1 : 0 } }; var d = function (b, d) { d = a.extend({}, d), this.$el = b, this.$spinning = a("[data-spin='spinner']", this.$el), 0 === this.$spinning.length && (this.$spinning = a(":input[type='text']", this.$el)), this.spinning = new c(this.$spinning, a.extend(this.$spinning.data(), d)), this.$el.on("click.spinner", "[data-spin='up'],[data-spin='down']", a.proxy(this.spin, this)).on("mousedown.spinner", "[data-spin='up'],[data-spin='down']", a.proxy(this.spin, this)), a(document).on("mouseup.spinner", a.proxy(function () { clearTimeout(this.spinTimeout), clearInterval(this.spinInterval) }, this)), d.delay && this.delay(d.delay), d.changed && this.changed(d.changed), d.changing && this.changing(d.changing) }; d.delay = 500, d.prototype = { constructor: d, spin: function (b) { var c = a(b.currentTarget).data("spin"); switch (b.type) { case "click": b.preventDefault(), this.spinning.spin(c); break; case "mousedown": 1 === b.which && (this.spinTimeout = setTimeout(a.proxy(this.beginSpin, this, c), 300)) } }, delay: function (a) { var b = parseInt(a, 10); b >= 0 && (this.constructor.delay = b + 100) }, value: function () { return this.spinning.value() }, changed: function (a) { this.bindHandler("changed.spinner", a) }, changing: function (a) { this.bindHandler("changing.spinner", a) }, bindHandler: function (b, c) { a.isFunction(c) ? this.$spinning.on(b, c) : this.$spinning.off(b) }, beginSpin: function (b) { this.spinInterval = setInterval(a.proxy(this.spinning.spin, this.spinning, b), 100) } }, a.fn.spinner = function (b, c) { return this.each(function () { var e = a(this), f = e.data("spinner"); f || e.data("spinner", f = new d(e, a.extend({}, e.data(), b))), ("delay" === b || "changed" === b || "changing" === b) && f[b](c), "step" === b && c && (f.spinning.step = c), "spin" === b && c && f.spinning.spin(c) }) },

		a(function () { a('[data-trigger="spinner"]').spinner() })
}(jQuery);


