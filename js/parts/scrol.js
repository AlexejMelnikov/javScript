function scrol() {
	
    let ul = document.querySelectorAll('nav > ul')[0];


	ul.addEventListener('click', (e) => {
	let id = e.target.hash.slice(1);
		
	function elmYPosition(eID) {
    let elm = document.getElementById(eID);
    let y = elm.offsetTop;
    let node = elm;
    while (node.offsetParent && node.offsetParent != document.body) {
        node = node.offsetParent;
        y += node.offsetTop;
        }
     return y;
    }
} 

function smoothScroll(id) {
    let startY = self.pageYOffset;
    let stopY = elmYPosition(id);
    let distance = (stopY > startY) ? stopY - startY : startY - stopY;
    
    let speed = Math.round(distance / 200);
    let step = Math.round(distance / 200);
    let leapY = (stopY > startY) ? startY + step : startY - step;
    let timer = 0;
    if (stopY > startY) {
        for ( let i = startY; i < stopY; i += step ) {
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
            leapY += step; if (leapY > stopY) leapY = stopY; timer++;
        } return;
    }
    for ( let i = startY; i > stopY; i -= step ) {
        setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
        leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
    }
}

                 
module.exports = scrol;