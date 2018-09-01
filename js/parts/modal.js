function modal() {
	let more = document.querySelector('.more'),
	    overlay = document.querySelector('.overlay'),
	    close = document.querySelector('.popup-close'),
	    btnDesc = document.querySelectorAll('.description-btn');
	 

	    more.addEventListener('click', () => {
	    	console.log(more);
	    	more.classList.add('more-splash');
	    	overlay.style.display = 'block';
	    	document.body.style.overflow = 'hidden';
	    });
	    for(let i = 0; i < btnDesc.length; i++) {
	    btnDesc[i].addEventListener('click', () => {
	    	btnDesc[i].classList.add('more-splash');
	    	overlay.style.display = 'block';
	    	document.body.style.overflow = 'hidden';
	      });
	}
	   close.addEventListener('click', () => {
	   		overlay.style.display = 'none';
	   		more.classList.remove('more-splash');
	   		document.body.style.overflow = '';
	   });
}

module.exports = modal;