function curriedDomain(protocol) {
  return function (domainName) {
    return function (tld) {
      return `${protocol}://${domainName}.${tld}`;
    };
  };
}
export { curriedDomain };