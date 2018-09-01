function calc() {
			  let persons = document.getElementsByClassName('counter-block-input')[0],
		   restDays = document.getElementsByClassName('counter-block-input')[1],
		   totalValue = document.getElementById('total'),
		   place = document.getElementById('select'),
		   personsSumm = 0,
		   daysSum = 0,
		   total = 0;


		   totalValue.innerHTML = 0;
		   persons.addEventListener('input', function() {
		   		let inp = parseInt(persons.value, 10);
		   		personsSumm =+ inp;
		   		let regExp = new RegExp(/\d+/g);
		    		
		    	
		    		if((inp+"").indexOf('e') || !!((persons.value+"").match(regExp))) {
		    			totalValue.innerHTML = 0;	
		   }
		   		total = (daysSum + personsSumm)* 4000;
		   		if(persons.value == "" || restDays.value == "") {
		   			totalValue.innerHTML = 0;
		   		} else {
		   			totalValue.innerHTML = total;
		   		}
		   		
		
		});
		    restDays.addEventListener('input', function() {
		    	(restDays.value == NaN)? total = 0:total = total;
		    	let regExp = new RegExp(/\d+/g),
		    		inp = parseInt(restDays.value, 10);
		    		if((inp+"").indexOf('e') || !!((restDays.value+"").match(regExp))) {
		    			totalValue.innerHTML = 0;	
		    			// console.log(restDays.value);
		    		}
		    		console.log((restDays.value+"").match(regExp))
		    	daysSum =+ inp; //this.value
		   		total = (daysSum + personsSumm)* 4000;
		   		if(persons.value == "" || restDays.value == "") {
		   			totalValue.innerHTML = 0;
		   		} else {
		   		totalValue.innerHTML = total;
		   		}

		   });
		    place.addEventListener('change', function() {
		    	(place.value == NaN)? total = 0:total = total;
		    		if(persons.value == "" || restDays.value == "") {
		    			totalValue.innerHTML = 0;
		    		} else {
		    			let a = total;
		    			totalValue.innerHTML = a * this.options[this.selectedIndex].value;
		    		}
		    		let regExp = new RegExp("/\+|\d{1,}|\.|\,|\e|/",g);
		    		console.log((restDays.value).match(regExp));
		    });
		    if(persons.value == "" || restDays.value == "") {
		    			totalValue.innerHTML = 0;
		    		}

}
module.exports = calc;