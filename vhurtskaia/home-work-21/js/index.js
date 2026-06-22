import {curriedAdd} from "./curriedAdd.js";
import {curriedDomain} from "./curriedDomain.js";
import {modifyFunction, originalFunction} from "./modifyFunction.js";

const addFirst = curriedAdd(1);
const addSecond = addFirst(2);
const result = addSecond(3);

console.log("result - ", result);
console.log(curriedAdd(1)(2)(3));

const protocol = curriedDomain("https");
const domain = protocol("example");
const fullPath = domain("com");

console.log("domain:", fullPath); // https://example.com
console.log(curriedDomain("https")("example")("com"));

const modifiedFunc = modifyFunction(originalFunction, 3);

console.log("originalFunction:", originalFunction(4)); // 16
console.log("modifiedFunc:", modifiedFunc(4)); // 48