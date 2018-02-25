// Write a function called characPosit, when provided with a letter, return its position in the alphabet.
// 	Input :: "a"
// 	Ouput :: "Position of alphabet: 1"
	function characPosit(character){
		var alphapet=[a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z]
		 var pos=alphapet.indexOf(character.lowercase);
		
	
	return "position of alphapet:"+pos;
}

// Write a function called repeatStr which repeats the given
// string string exactly n times.
// repeatStr("hello",4) ==> 'hellohellohellohello'
	
	function repeatStr (s, n) {
		var string1=""
		for(var i=1;i<=n;i++){
			string1=string1+s
		}
	
		return string1;
	}