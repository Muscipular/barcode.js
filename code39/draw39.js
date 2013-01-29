window.addEventListener("load", function() {
	var c1 = document.getElementById('c1');
	var panel = c1.getContext('2d');

	var Code39List = [
		new Code39('0', '000110100'),
		new Code39('1', '100100001'),
		new Code39('2', '001100001'),
		new Code39('3', '101100000'),
		new Code39('4', '000110001'),
		new Code39('5', '100110000'),
		new Code39('6', '001110000'),
		new Code39('7', '000100101'),
		new Code39('8', '100100100'),
		new Code39('9', '001100100'),
		new Code39('A', '100001001'),
		new Code39('B', '001001001'),
		new Code39('C', '101001000'),
		new Code39('D', '000011001'),
		new Code39('E', '100011000'),
		new Code39('F', '001011000'),
		new Code39('G', '000001101'),
		new Code39('H', '100001100'),
		new Code39('I', '001001101'),
		new Code39('J', '000011100'),
		new Code39('K', '100000011'),
		new Code39('L', '001000011'),
		new Code39('M', '101000010'),
		new Code39('N', '000010011'),
		new Code39('O', '100010010'),
		new Code39('P', '001010010'),
		new Code39('Q', '000000111'),
		new Code39('R', '100000110'),
		new Code39('S', '001000110'),
		new Code39('T', '000010110'),
		new Code39('U', '110000001'),
		new Code39('V', '011000001'),
		new Code39('W', '111000000'),
		new Code39('X', '010010001'),
		new Code39('Y', '110010000'),
		new Code39('Z', '011010000'),
		new Code39('-', '010000101'),
		new Code39('%', '000101010'),
		new Code39('$', '010101000'),
		new Code39('*', '010010100'),
		];

	window.Code39Genner = {
		GenCode: function(s) {
			this.Clear();
			if(!s) {
				return;
			}
			s = ["*", s.toUpperCase(), "*"].join('');
			var line = 0;
			for(var i = 0, max = s.length; i < max; i++) {
				var ch = s[i];
				for(var x = Code39List.length - 1; x >= 0; x--) {
					var code39 = Code39List[x];
					if(code39.char == ch) {
						line = code39.draw(panel, line);
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
		},
	}
}, false);