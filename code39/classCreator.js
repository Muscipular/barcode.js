var ClassCreator = function(fields, prototype) {
		function getFunc() {
			return function() {
				for(var field in fields) {
					this[fields[field]] = null;
				}
				this.ctor.apply(this, arguments);
			};
		}
		var o = getFunc();
		prototype = prototype ? prototype : {};
		if(!prototype.ctor) {
			prototype.ctor = function() {};
		}
		o.prototype = prototype;
		return o;
	}

ClassCreator.Create = ClassCreator;