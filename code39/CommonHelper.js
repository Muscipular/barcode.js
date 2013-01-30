var CommonHelper = {
	CreateClass: function(fields, prototype, static) {
		var getFunc = function() {
				return function() {
					if(fields instanceof Array) {
						for(var field in fields) {
							this[fields[field]] = null;
						}
					} else {
						for(var field in fields) {
							this[field] = fields[field];
						}
					}
					this.ctor.apply(this, arguments);
				};
			}
		var Class = getFunc();
		prototype = prototype ? prototype : {};
		if(!prototype.ctor) {
			prototype.ctor = function() {};
		}
		if(static) {
			for(var field in static) {
				Class[field] = static[field];
			}
		}
		Class.prototype = prototype;
		return Class;
	},
	extend: function(target, source, overWrite) {
		if(undefined == overWrite) {
			overWrite = true;
		}
		for(var field in source) {
			if(overWrite || !(field in target)) {
				target[field] = source[field];
			}
		}
		return target;
	},
}