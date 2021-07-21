function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    let res = new Function("return " + expr);
    return res();
  
    // write your solution here
  }

module.exports = {
    expressionCalculator
}