class CalorieCalculator {
  constructor() {
    this.products = new Map();
  }

  addProduct(productName, calories) {
    this.products.set(productName, calories);
  }

  getProductCalories(productName) {
    if (!this.products.has(productName)) {
      return "Product not found";
    }

    return this.products.get(productName);
  }

  removeProduct(productName) {
    this.products.delete(productName);
  }
}

class UniqueUsernames {
  constructor() {
    this.users = new Set();
  }

  addUser(username) {
    this.users.add(username);
  }

  exists(username) {
    return this.users.has(username);
  }

  count() {
    return this.users.size;
  }
}

export { CalorieCalculator, UniqueUsernames };