import js from '@eslint/js';
import globals from 'globals';

export default [
  {
    languageOptions: {
      ecmaVersion: 'latest',  // ✅ Use the latest ECMAScript version
      sourceType: 'module',   // ✅ Ensure ES Modules compatibility
      globals: globals.node   // ✅ Enable global variables for Node.js
    },
    ignores: [ // ✅ Define ignored files (replaces .eslintignore)
      'node_modules/',
      'dist/',
      'coverage/',
      'package-lock.json',
      'test-report/'
    ],
    rules: {
      'no-undef': 'off',        // ✅ Prevent false positives for global variables
      'no-unused-vars': 'warn', // ✅ Show warnings but do not block execution
      'indent': ['error', 2],   // ✅ Enforce consistent indentation
      'quotes': ['error', 'single'], // ✅ Force single quotes
      'semi': ['error', 'always'] // ✅ Enforce semicolons
    }
  },
  js.configs.recommended // ✅ Extend recommended ESLint rules
];
