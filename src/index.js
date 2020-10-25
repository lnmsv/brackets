module.exports = function check(str, bracketsConfig, bracketsState = {}) {
  let checkStr = (closeBracketToLookFor) => {
    let currentChar = str[0];
    str = str.slice(1);
    if (closeBracketToLookFor !== undefined && currentChar === closeBracketToLookFor){
      return true;
    }
    else{
      let currentBrackets = bracketsConfig.find(x => x[0] === currentChar);
      if (currentBrackets === undefined) return false;
      let ret = (checkStr(currentBrackets[1]) && (closeBracketToLookFor === undefined || checkStr(closeBracketToLookFor)));
      return ret;
    }
  };
  let retValue = true;
  while (str && str.length > 0 && retValue){
    retValue = (retValue && checkStr());
  }
  return retValue;
}
