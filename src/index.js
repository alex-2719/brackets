module.exports = function check(str, bracketsConfig) {
  let result = "";
  if (str.length % 2 === 0){
    let brackets = bracketsConfig.reduce(function(prev, item, index){
      let bracket = (!isNaN(Number(item[0])) || !isNaN(Number(item[1])) ) ? (item[0] + item[1]) : ("\\" + item[0] + "\\" + item[1]);
       return prev + "(" + bracket + ")" + (index != (bracketsConfig.length - 1) ? "|" : "");
    }, "");
      let strCut = str.replace(new RegExp(brackets,'g'),"");
      if (strCut === ""){
        result = result || true;
      }else if (strCut === str){
          result = result || false;
      }else{
        result = result || check(strCut, bracketsConfig);
      }
    return result;
    }else {
      return false;
    }
}

function check2(str, bracketsConfig, level = 0) {
  String.prototype.replaceAll = function(search, replace){
    return this.split(search).join(replace);
  }

  level = level + 1;
  console.log("level is " + (level));
  console.log("strCut before " + str + " lenght is " +  str.length);
  let result = "";
  if (str.length % 2 === 0){
    bracketsConfig.forEach(function(bracket){
      let brackets =  bracket[0] + bracket[1];
      console.log("bracket is " + brackets);
      console.log("strCut after bracket " + str);
          console.log("strCut before replace " + str);
          let strCut = str.replaceAll(brackets,"");
          console.log("strCut after replace " + strCut + " lenght is " +  strCut.length);
          if (strCut === ""){
           result = result || true;
          }else if (strCut === str){
             result = result || false;
          }else{
            result = result || check(strCut, bracketsConfig, level);
            // console.log("strCut check return " + strCut);
            // console.log("level after check return is " + (level));
          }
    });
    return result;
    }else {
      console.log("strCut else % 2 " + strCut);
      return false;
    }
}
function check(str, bracketsConfig, level = 0) {
  level = level + 1;
  // console.log("level is " + (level));
  // console.log("strCut before " + str + " lenght is " +  str.length);
  let result = "";
  if (str.length % 2 === 0){
    let brackets = bracketsConfig.reduce(function(prev, item, index){
      console.log("number func is " + Number(item[0]));
      let bracket = (!isNaN(Number(item[0])) || !isNaN(Number(item[1])) ) ? (item[0] + item[1]) : ("\\" + item[0] + "\\" + item[1]);
      // console.log("bracket is " + bracket);
       return prev + "(" + bracket + ")" + (index != (bracketsConfig.length - 1) ? "|" : "");
    }, "");
    //let brackets = "(\\\{\\\})|(\\\|\\\|)"
    //"(12)|(34)|(56)|(77)|(88)";
          console.log("bracket is " + brackets);
          console.log("strCut before replace " + str);
          let strCut = str.replace(new RegExp(brackets,'g'),"");
          console.log("strCut after replace " + strCut + " lenght is " +  strCut.length);
          if (strCut === ""){
           result = result || true;
          }else if (strCut === str){
             result = result || false;
          }else{
            result = result || check(strCut, bracketsConfig, level);
             console.log("strCut check return " + strCut);
             console.log("level after check return is " + (level));
          }
    return result;
    }else {
     //console.log("strCut else % 2 " + strCut);
      return false;
    }
}

//console.log(check('111115611111111222288888822225577877778775555666677777777776622222', [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']]));
// console.log(check('5555512575557777777555566667888888667661133833448441111222233333444442266666', [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']]));
// console.log(check('[]', [['[', ']']]));
// console.log(check('()', [['(', ')']]));
// console.log(check('|{}|', [['{', '}'],['|','|']]));
// console.log(check('([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]])((([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]])))', [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']]));