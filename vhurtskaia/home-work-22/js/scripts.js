console.log("#5. JavaScript homework example file");

const counter = (() => {
  let count = -1;

  return function (n) {
    if (typeof n === "number") {
      count = n;
      return count;
    }

    count++;
    return count;
  };
})();

const counterFactory = (() => {
  let value = 0;

  return {
    value(n) {
      if (typeof n === "number") {
        value = n;
      }

      return value;
    },

    increment() {
      value++;
    },

    decrement() {
      value--;
    },
  };
})();

const myPow = (a, b, callback) => {
  function power(base, exp) {
    if (exp === 0) return 1;
    if (exp < 0) return 1 / power(base, -exp);

    return base * power(base, exp - 1);
  }

  const result = power(a, b);

  return callback(a, b, result);
};

const myMax = (arr) => Math.max.apply(null, arr);

const myMul = (a, b) => a * b;

const myDouble = myMul.bind(null, 2);

const myTriple = myMul.bind(null, 3);

export {
  counter,
  counterFactory,
  myPow,
  myMax,
  myMul,
  myDouble,
  myTriple,
};