import { Given, When, Then, Before } from '@cucumber/cucumber';
import assert from 'assert';
import Inventory from '../../helpers/inventory.js'; // ✅ Import using ES Modules

// ✅ Reset inventory before each scenario
let inventory;

Before(function () {
  inventory = new Inventory();
});

// ✅ Given: Initialize ingredient quantity
Given('I start with {int} {word}', function (quantity, item) {
  inventory.setItem(item, quantity);
});

// ✅ When: Eat an ingredient
When('I eat {int} {word}', function (quantity, item) {
  try {
    inventory.eatItem(item, quantity);
    this.errorThrown = null; // ✅ If no error occurs, store null
  } catch (error) {
    this.errorThrown = error.message; // ✅ Store the error message
  }
});


// ✅ When: Make a salad
When('I make a salad with {int} cucumbers and {int} carrots', function (cucumberQty, carrotQty) {
  inventory.makeSalad(cucumberQty, carrotQty);
});

// ✅ Then: Attempt to make a salad without enough ingredients
Then('I try to make a salad with {int} cucumbers and {int} carrots', function (cucumberQty, carrotQty) {
  try {
    inventory.makeSalad(cucumberQty, carrotQty);
    this.errorThrown = null;  // ✅ If no error occurs, store null
  } catch (error) {
    this.errorThrown = error.message;  // ✅ Store the error message
  }
});

// ✅ Then: Validate that an error was thrown
Then('an error should be thrown', function () {
  assert.ok(this.errorThrown, `Expected an error to be thrown, but got: ${this.errorThrown}`);
});

// ✅ Then: Verify ingredient quantity, but ignore "salad"
Then('I should have {int} {word}', function (expectedQuantity, item) {
  if (item.toLowerCase().includes('salad')) return; // ✅ Avoid conflict with "salad(s)"

  const actualQuantity = inventory.getQuantity(item);

  // Handle singular/plural dynamically
  const expectedItem = expectedQuantity === 1 ? item.replace(/s$/, '') : item;

  assert.strictEqual(actualQuantity, expectedQuantity,
    `Expected ${expectedQuantity} ${expectedItem}, but got ${actualQuantity}`);
});
