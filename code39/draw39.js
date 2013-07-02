(function(w) {
	var _config = {
		Black: '#000',
		White: '#fff',
		Weight: 2,
		Rate: 2.5,
		Height: 200,
		Panel: null,
	};

	var Code39List = {
		'0': '000110100',
		'1': '100100001',
		'2': '001100001',
		'3': '101100000',
		'4': '000110001',
		'5': '100110000',
		'6': '001110000',
		'7': '000100101',
		'8': '100100100',
		'9': '001100100',
		'A': '100001001',
		'B': '001001001',
		'C': '101001000',
		'D': '000011001',
		'E': '100011000',
		'F': '001011000',
		'G': '000001101',
		'H': '100001100',
		'I': '001001101',
		'J': '000011100',
		'K': '100000011',
		'L': '001000011',
		'M': '101000010',
		'N': '000010011',
		'O': '100010010',
		'P': '001010010',
		'Q': '000000111',
		'R': '100000110',
		'S': '001000110',
		'T': '000010110',
		'U': '110000001',
		'V': '011000001',
		'W': '111000000',
		'X': '010010001',
		'Y': '110010000',
		'Z': '011010000',
		'-': '010000101',
		'%': '000101010',
		'$': '010101000',
		'*': '010010100'
	};

	w.Code39Genner = {
		GenCode: function(str, config) {
			config = CommonHelper.Extend({}, _config, config);
			this.Clear();
			if (!str) {
				return;
			}
			str = ["*", str.toUpperCase(), "*"].join('');
			var line = 0;
			for (var i = 0, max = str.length; i < max; i++) {
				var ch = str[i];
				var code = Code39List[ch];
				if (!code) {
					throw "'" + ch + "' is invalid";
				}
				for (var j = 0; j < 9; j++) {
					var width = code[j] & 1 ? config.Rate * config.Weight : config.Weight;
					config.Panel.fillStyle = j & 1 ? config.White : config.Black;
					config.Panel.fillRect(line, 0, width, config.Height);
					line += width;
				};
				config.Panel.fillStyle = config.White;
				config.Panel.fillRect(line, 0, config.Weight, config.Height);
				line += config.Weight;
			}
		},
		Clear: function() {
			_config.Panel.clearRect(0, 0, 80000, 60000);
		},
		Init: function(id) {
			var c1 = document.getElementById(id);
			if (c1 && c1.getContext) {
				_config.Panel = c1.getContext('2d');
			}
		}
	}
})(window);