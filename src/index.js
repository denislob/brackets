module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const bracketsMap = {};
  for (let i = 0; i < bracketsConfig.length; i += 1) {
    const openBracket = bracketsConfig[i][0];
    const closeBracket = bracketsConfig[i][1];
    bracketsMap[openBracket] = closeBracket;
  }

  for (let el = 0; el < str.length; el += 1) {
    const sym = str[el];
    const lastSymInStack = stack[stack.length - 1];
    if (lastSymInStack && sym === bracketsMap[lastSymInStack]) {
      stack.pop();
    } else if (bracketsMap[sym] !== undefined) {
      stack.push(sym);
    } else {
      return false;
    }
  }

  return stack.length === 0;
};
