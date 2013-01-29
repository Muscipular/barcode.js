var ClassCreator = function(fields, prototype, static) {
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
}

ClassCreator.Create = ClassCreator;