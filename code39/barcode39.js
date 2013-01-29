var Code39 = ClassCreator.Create(['char', 'code'], {
	ctor: function(char, code) {
		this.char = char;
		this.code = code;
	},
	draw: function(panel, offset) {
		for(var i = 0; i < 9; i++) {
			var width = this.code[i] & 1 ? Code39.Rate * Code39.Weight : Code39.Weight;
			panel.fillStyle = i & 1 ? Code39.White : Code39.Black;
			panel.fillRect(offset, 0, width, Code39.Height);
			offset = offset + width;
		};
		panel.fillStyle = Code39.White;
		panel.fillRect(offset, 0, Code39.Weight, Code39.Height);
		return offset + Code39.Weight;
	}
}, {
	Black: '#000',
	White: '#fff',
	Weight: 2,
	Rate: 2.5,
	Height: 200,
});