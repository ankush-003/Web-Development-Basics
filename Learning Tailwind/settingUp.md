## Setting Up Tailwind For Production
---
- init npm
```bash
  npm init -y
```

- Install required packages

```bash
  npm install -D tailwindcss postcss autoprefixer vite
  npx tailwind init -p
```
- Add this to global css

```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
```

- Modify tailwind.config.js

```javascript
  content: ["*"],
```

- Add this to package.json

```json
  "scripts": {
    "dev": "vite",
    "build": "vite build"
  },
```

- Run the dev server

```bash
  npm run dev
```
