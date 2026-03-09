# 2nd CSITE Research Colloquium Website

A professional React-based website for the College of Science and Information Technology and Engineering Research Colloquium, featuring a warm orange theme.

## Project Structure

```
├── index.html              # Main HTML entry point
├── vite.config.js          # Vite configuration (JavaScript)
├── package.json            # Dependencies
└── src/
    ├── main.jsx           # React entry point
    ├── app/
    │   ├── App.jsx        # Main App component
    │   ├── routes.jsx     # React Router configuration
    │   └── components/
    │       ├── Layout.jsx              # Main layout with navigation
    │       ├── About.jsx               # About the colloquium
    │       ├── Programme.jsx           # Event schedule
    │       ├── BookOfAbstract.jsx      # Abstracts listing
    │       ├── Presenters.jsx          # Presenters (Plenary/Oral/Poster)
    │       ├── OrganizingCommittee.jsx # Committee members
    │       └── EvaluationForm.jsx      # Feedback form
    └── styles/
        ├── index.css      # Main CSS entry
        ├── fonts.css      # Font imports
        ├── tailwind.css   # Tailwind directives
        └── theme.css      # Custom theme (orange color scheme)
```

## For Laravel Integration

### Option 1: Use as Standalone Vite React App

1. **Copy all files** to your Laravel project's resources directory:
   ```
   your-laravel-project/
   └── resources/
       └── react/           # Create this folder
           ├── index.html
           ├── vite.config.js
           ├── package.json
           └── src/
               ├── main.jsx
               ├── app/
               └── styles/
   ```

2. **Install dependencies:**
   ```bash
   cd resources/react
   npm install
   ```

3. **Run development server:**
   ```bash
   npm run dev
   ```

### Option 2: Integrate with Laravel Vite

1. **Copy files to Laravel structure:**
   ```
   your-laravel-project/
   ├── resources/
   │   ├── js/
   │   │   ├── app.jsx      # Rename src/main.jsx to this
   │   │   ├── App.jsx      # Copy from src/app/App.jsx
   │   │   ├── routes.jsx   # Copy from src/app/routes.jsx
   │   │   └── components/  # Copy from src/app/components/
   │   └── css/
   │       └── app.css      # Copy from src/styles/index.css
   ```

2. **Update Laravel's vite.config.js:**
   ```javascript
   import { defineConfig } from 'vite';
   import laravel from 'laravel-vite-plugin';
   import react from '@vitejs/plugin-react';
   import tailwindcss from '@tailwindcss/vite';

   export default defineConfig({
       plugins: [
           laravel({
               input: ['resources/css/app.css', 'resources/js/app.jsx'],
               refresh: true,
           }),
           react(),
           tailwindcss(),
       ],
   });
   ```

3. **Update your Blade template:**
   ```blade
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>2nd CSITE Research Colloquium</title>
       @vite(['resources/css/app.css', 'resources/js/app.jsx'])
   </head>
   <body>
       <div id="root"></div>
   </body>
   </html>
   ```

4. **Update resources/js/app.jsx:**
   ```javascript
   import React from 'react';
   import ReactDOM from 'react-dom/client';
   import App from './App.jsx';
   import '../css/app.css';

   ReactDOM.createRoot(document.getElementById('root')).render(
     <React.StrictMode>
       <App />
     </React.StrictMode>
   );
   ```

## Required Dependencies

All dependencies are listed in `package.json`. Key packages:

- **react** & **react-dom**: Core React libraries
- **react-router**: Routing (v7.13.0)
- **tailwindcss**: Styling (v4.1.12)
- **@tailwindcss/vite**: Tailwind Vite plugin
- **lucide-react**: Icon library
- **motion**: Animations

## Features

✅ 6 main pages with React Router navigation
✅ Responsive design
✅ Warm orange theme (#e8682a primary color)
✅ Animated navigation and transitions
✅ Interactive components (Accordion, Tabs, Forms)
✅ Evaluation form with validation
✅ Professional academic look

## Color Scheme

- Primary Orange: `#e8682a`
- Secondary Orange: `#ff8c42`
- Dark Orange: `#b8531f`
- Light backgrounds and neutral tones

## Routes

- `/` - About the Colloquium
- `/programme` - Event Schedule
- `/book-of-abstract` - Research Abstracts
- `/presenters` - List of Presenters (Plenary, Oral, Poster)
- `/organizing-committee` - Committee Members
- `/evaluation` - Feedback Form

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Notes

- All files are in **JavaScript (.jsx)**, not TypeScript
- Uses **react-router** (not react-router-dom)
- Fully compatible with Vite + Laravel
- No TypeScript configuration needed
- Ready to paste and use in your Laravel project

## Customization

To modify colors, edit `/src/styles/theme.css`:
```css
:root {
  --primary: #e8682a;  /* Main orange color */
  --secondary: #ff8c42; /* Secondary orange */
  /* ... other theme colors */
}
```

To add/modify routes, edit `/src/app/routes.jsx`
