const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

let num1, num2, result;

Given('I have two numbers {int} and {int}', function (a, b) {
    num1 = a;
    num2 = b;
});

When('I add them', function () {
    result = num1 + num2;
});

Then('the result should be {int}', function (expectedResult) {
    assert.strictEqual(result, expectedResult);
});
