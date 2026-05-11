function curriedAdd(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(curriedAdd(1)(2)(3));

function curriedDomain(protocol) {
  return function (domainName) {
    return function (tld) {
      return protocol + "://" + domainName + "." + tld;
    };
  };
}

console.log(curriedDomain("https")("google")("com"));

function originalFunction(num) {
  return num * num;
}

function modifyFunction(originalFunc, multiplier) {
  return function (num) {
    return originalFunc(num) * multiplier;
  };
}

const modifiedFunc = modifyFunction(originalFunction, 3);

console.log(originalFunction(4));
console.log(modifiedFunc(4));

function outerFunction(arg1) {
  function innerFunction(arg2) {
    function deepInnerFunction(arg3) {
      return arg1 * arg2 * arg3;
    }

    return deepInnerFunction;
  }

  return innerFunction;
}

console.log(outerFunction(2)(3)(4));
