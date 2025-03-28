class Inventory {
  constructor() {
    this.carrotQty = 0;
    this.cucumberQty = 0;
    this.saladQty = 0;
  }
  
  setItem(item, quantity) {
    if (this.isCarrot(item)) {
      this.carrotQty = quantity;
    } else if (this.isCucumber(item)) {
      this.cucumberQty = quantity;
    }
  }
  
  eatItem(item, quantity) {
    if (this.isCarrot(item)) {
      if (this.carrotQty < quantity) {
        throw new Error(`Not enough ${item} available. You have ${this.getQuantity(item)}, but you tried to use ${quantity}.`);
      }
      this.carrotQty -= quantity;
    } else if (this.isCucumber(item)) {
      if (this.cucumberQty < quantity) {
        throw new Error(`Not enough ingredients for a salad! You have ${this.getQuantity('cucumber')} cucumbers, but you need ${quantity} cucumbers.`);
      }
      this.cucumberQty -= quantity;
    }
  }
  
  makeSalad(cucumberQty, carrotQty) {
    if (this.cucumberQty < cucumberQty || this.carrotQty < carrotQty) {
      throw new Error(`Not enough ingredients for a salad! You have ${this.getQuantity('carrot')} carrots, but you need ${carrotQty} carrots.`);
    }
    this.cucumberQty -= cucumberQty;
    this.carrotQty -= carrotQty;
    this.saladQty += 1; // ✅ Correctly increments the salad count
  }
  
  getQuantity(item) {
    const singularItem = item.replace(/s$/, ''); // Converts "salads" → "salad"
  
    if (this.isCarrot(singularItem)) {
      return this.carrotQty;
    } else if (this.isCucumber(singularItem)) {
      return this.cucumberQty;
    } else if (singularItem === 'salad') {
      return this.saladQty;
    }
    return 0;
  }
  
  isCarrot(item) {
    return item === 'carrot' || item === 'carrots';
  }
  
  isCucumber(item) {
    return item === 'cucumber' || item === 'cucumbers';
  }
}
  
export default Inventory; 
  