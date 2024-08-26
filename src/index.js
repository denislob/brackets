module.exports = function check(str, bracketsConfig) {
  let pile = [];
  let bracketsList = [];
		
  for(let sym = 0; sym < bracketsConfig.length; sym++) {
		bracketsList[bracketsConfig[sym][0]] = bracketsConfig[sym][1];
	}

  for(let el = 0; el < str.length; el++) {
		if(str[el] == pile[pile.length - 1]) {
			pile.pop();
		} else {
			if(bracketsList[str[el]] != undefined) {
                pile.push(bracketsList[str[el]]);
      }     else {
                return false;
      }
		}
	}
    return pile.length == 0;
}
