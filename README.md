# 🥒 Cucumber Math Test 

This project implements automated tests using **Node.js + Cucumber.js** following the Behavior-Driven Development (BDD) approach.

## 📌 Requirements
- **Node.js 16+**
- **npm** (comes with Node.js)

## 🚀 Setup Instructions
To set up the project, follow these steps:

1. **Clone the repository**:
```bash
git clone https://github.com/marijo-ara/cucumber-math-test.git
cd cucumber-math-test
npm install

```
2. **Navigate to the project folder:**:
```bash
cd cucumber-math-test
```
3. **Install dependencies::**:
```bash
npm install
```
## Run ESLint to ensure clean code:
```bash
npm run lint --fix
```

## 🛠️ How to Run the Tests

To execute the tests, use the following command:
```bash
npm test
```
or
```bash
npx cucumber-js
```

## 📂 Project Structure
cucumber-math-test/
│── features/
│   ├── cucumber_math.feature         # Gherkin test scenarios
│   ├── step_definitions/
│   │   ├── cucumber_steps.js         # Step definitions in JavaScript
│── helpers/
│   ├── inventory.js                   # Utility functions for inventory
│── package.json                        # Project dependencies
│── cucumber.mjs                         # Cucumber.js configuration
│── eslint.config.js
│── .gitignore  
│── README.md                           # Setup and usage instructions

## 📝 Notes
The implementation includes validations to handle cases such as consuming more items than available.
Tests are written using Cucumber.js and JavaScript step definitions.
The project follows Behavior-Driven Development (BDD) principles.

## 📜 License
This project is open-source under the MIT License.


