React Hooks & Routing Project
🚀 Overview
This project implements React Router for navigation and refactors components from class-based to functional using hooks.

📦 Features
✅ Search functionality
✅ Routing with react-router-dom
✅ Detailed Pokemon view
✅ Pagination support
✅ Error handling with ErrorBoundary
✅ Jest/Vitest testing with 70%+ coverage

🛠 Technologies Used
React
TypeScript
React Router
Vitest / Testing Library
ESLint & Prettier
📦 Installation
(https://github.com/python1911/rs-react-app/tree/hooks-and-routing)
cd rs-react-app
npm install
npm run devs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react';

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
});
```
