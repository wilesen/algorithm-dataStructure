/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var multiply = function(num1, num2) {

 	if(num1=='0'||num2=='0') return '0';

 	let l1=num1.length;
 	let l2=num2.length;

 	let sumArr= new Array(l1+l2-1).fill(0),carry=0,result='';

 	for(let i=0;i<l1;i++){
 		for(let j=0;j<l2;j++){
 			sumArr[i+j]=+num1[i]*+num2[j]
 		}
 	}

 	r=sumArr.length;
 	
 	while (r--) {
 		let remain=(sumArr[r]+carry)%10;
 		carry=(sumArr[r]+carry)/10|0;
 		result+=remain;
 	}

 	return result;

 };

 multiply('9','99')
