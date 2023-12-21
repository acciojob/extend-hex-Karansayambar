const extendHex = (shortHex) => {
  // write your code here
	let n = shortHex.length - 3;
	let output = "#";
	let iscapital = false;
	while(n < shortHex.length){
	let ascii = shortHex.charCodeAt(0);
	if(ascii >= 65 && ascii <=90){
		iscapital = true;
	}
	output += shortHex[n] + shortHex[n];
	n++;
	}
	return iscapital ? output.toUpperCase() : output;
};

// Do not change the code below.
const shortHex = prompt("Enter Short Hex.");
alert(extendHex(shortHex));
