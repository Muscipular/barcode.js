window.addEventListener("load", function() {
	var c1 = document.getElementById('c1');
	var panel = c1.getContext('2d');

	window.Code39Genner = {
		GenCode: function(s) {
			this.Clear();
			s = ["*", s, "*"].join('');
			var line = 0;
			for(var i = 0, max = s.length; i < max; i++) {
				var ch = s[i];
				for(var x = Code39List.length - 1; x >= 0; x--) {
					var code39 = Code39List[x];
					if(code39.char == ch) {
						line = code39.draw(panel, line, true);
						break;
					}
					if(x == 0) {
						this.Clear();
						return;
					}
				};
			}
		},
		Clear: function() {
			panel.clearRect(0, 0, 800, 600);
		}
	}
}, false);