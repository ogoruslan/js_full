function originalFunction(num) {
  return num * num;
}

function modifyFunction(originalFunc, multiplier) {
  return function (num) {
    return originalFunc(num) * multiplier;
  };
}

export { originalFunction, modifyFunction };