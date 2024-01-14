function add() {
    // we'll fill this in shortly
  }
  function subtract() {
    // we'll fill this in shortly
  }
  function multiply() {
    // we'll fill this in shortly
  }
  function divide() {
    // we'll fill this in shortly
  }
  function add(a, b) {
    return a + b;
  }
  function subtract(a, b) {
    return a - b;
  }
  function multiply(a, b) {
    return a * b;
  }
  function divide(a, b) {
    return a / b;
  }
  function increment(n) {
    return n + 1;
  }
  function decrement(n) {
    return n - 1;
  }
  function makeInt(n) {
    // Parse n as an integer in base 10
    let parsedInt = parseInt(n, 10);

    // Check if the result is NaN and return NaN appropriately
    if (isNaN(parsedInt)) {
        return NaN;
    }

    // Return the parsed integer
    return parsedInt;
}
function preserveDecimal(n) {
    let parsedFloat = parseFloat(n);

    if (isNaN(parsedFloat)) {
        return NaN;
    }

    return parsedFloat;
}