module.exports = {
  env: {
    node: true, // ✅ Habilita soporte para Node.js
    es2021: true // ✅ Habilita características modernas de JavaScript
  },
  extends: [
    'eslint:recommended'
  ],
  rules: {
    'no-undef': 'off', // ✅ Evita errores en "require" y "module.exports"
    'no-unused-vars': 'warn' // ⚠ Solo advertencia si hay variables no usadas
  }
};
