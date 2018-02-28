	// Given a string, swap the case for each of the letters.
	// IbrAHiM --> iBRahIm
	// ToYPRoblEm --> tOyprOBLeM
	function swap(input){
		var arr2=[input];
		var arr1=""
		for(var i=0;i<input.length;i++){
			if(input[i]===input[i].toLowerCase()){
				arr1+=input[i].toUpperCase()
			}
			else{
				arr1+=input[i].toLowerCase();

			}

}
	 return arr1;	
		
	}