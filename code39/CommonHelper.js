var CommonHelper = {
	Extend: function(target, source) {
		function isBoolean(b) {
			return typeof b == 'boolean' || b instanceof Boolean;
		}
		var overWrite, i, m;
		if (arguments.length == 2) {
			overWrite = true;
		} else if (arguments.length > 2) {
			overWrite = ((!isBoolean(overWrite = arguments[arguments.length - 1])) || (overWrite));
		} else {
			return target;
		}
		m = arguments.length - (overWrite && isBoolean(arguments[arguments.length - 1]) ? 2 : 1);
		for (i = 1; i <= m; i++) {
			source = arguments[i];
			if (i == m && m > 2 && isBoolean(source)) {
				break;
			}
			for (var field in source) {
				if (overWrite || !(field in target)) {
					target[field] = source[field];
				}
			}
		}
		return target;
	},
};