// This time no story, no theory. The examples below show you what do you need, write a function to accomplich that
// Examples:
// accum("abcd");    // "A-Bb-Ccc-Dddd"
// accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt");    // "C-Ww-Aaa-Tttt"

    function accum(input){
    	var arr2=[]
        var arr1=input.splice();
        for(var i=0;i<arr1.length;i++){
            
        	arr2[0]=arr1[0].toUpperCase();
        	for(var j=1;j<arr1.length;j++)
        	arr2[j]=arr2[i]+arr2[j].toLowerCase()


        	

        }
    }