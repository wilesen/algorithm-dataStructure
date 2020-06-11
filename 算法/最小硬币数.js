
function getNum(n){
	var num=0;
	num+=Math.floor(n/5);
	if(n%5==0){
		return num
	}
	n=n%5;
	num+=Math.floor(n/4);
	if(n%4==0){
		return num
	}
	n=n-4*(Math.floor(n/4));
	return num+n;
}