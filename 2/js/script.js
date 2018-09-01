class options {
	constructor(height, width, bg, fontSize, textAlign) {
		this.height = height;
		this.width = width;
		this.bg = bg;
		this.fontSize = fontSize;
		this.textAlign = textAlign;
	}
	createDiv(textCont) {
		let div = document.createElement('div');
		div.textContent = textCont;
		div.style.cssText = `background-color: ${this.bg}; width: ${this.width}px; height: ${this.height}px; text-align: ${this.textAlign};	font-size: ${this.fontSize}; text-align: ${this.textAlign}; `;
		return div;	
	}
}


let options1 = new options(100,100,'green','medium','center');
 let div1 = options1.createDiv('Hello World!');
  par.appendChild(div1);