# Yoga & Wellness Website - HTML/CSS Version

This is the pure HTML/CSS with vanilla JavaScript implementation of the Yoga & Wellness website based on the provided Figma design.

## Features

- Fully responsive design with mobile-first approach
- Interactive elements using vanilla JavaScript
- Smooth animations and transitions
- Form validation
- Responsive navigation

## Pages Implemented

1. **Home Page** (`index.html`)
   - Main landing page with primary content

2. **About Page** (`about.html`)
   - Information about the yoga center and services

3. **Exercises/Programs Page** (`exercises.html`)
   - Details about various yoga exercises and programs offered

4. **Blogs Page** (`blogs.html`)
   - Articles and blog posts related to yoga and wellness

5. **Contact Page** (`contact.html`)
   - Contact form and information

## Technologies Used

- HTML5
- CSS3 (using separate stylesheets: `styles.css` and `style_page.css`)
- Vanilla JavaScript (`script.js` and `script_page.js`)

## File Structure

```
yoga-wellness-html/
├── assets/
│   ├── Green-leaves-logo-design.png
│   ├── lotus-large.svg
│   ├── lotus.svg
│   ├── peace.jpg
│   ├── yoga.png
│   └── yogalogo.png
├── .vscode/
├── index.html
├── about.html
├── blogs.html
├── contact.html
├── exercises.html
├── script.js
├── script_page.js
├── styles.css
└── style_page.css
```

Setup Instructions

1. Clone the repository
   ```bash
   https://github.com/KalyaniWaghchaure/YogaZen-HTML.git
   cd yoga-wellness-html
   ```

2. Open in a browser
   - Simply open the `index.html` file in your preferred web browser
   - For the best experience, use a modern browser like Chrome, Firefox, or Edge

3. **Using a local development server (recommended)**
   
   If you have Node.js installed:
   ```bash
   npx serve
   ```
   
   Or using Python:
   ```bash
   # Python 3
   python -m http.server
   
   # Python 2
   python -m SimpleHTTPServer
   ```

## Implementation Details

- The website features a consistent footer across all pages with:
  - Social media links (Facebook, Twitter, Discord)
  - Community updates section
  - App download button
  - Multiple navigation columns for different content categories
  - Links to important pages

- CSS is organized into:
  - `styles.css`: Main stylesheet for common elements
  - `style_page.css`: Additional styles for specific pages

- JavaScript functionality:
  - `script.js`: Core JavaScript functions
  - `script_page.js`: Page-specific JavaScript functionality

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Future Improvements

- Add dark mode toggle
- Implement lazy loading for images
- Add more animations and transitions
- Enhance mobile responsiveness

---

Developed as part of the Growthzi Frontend Developer Assessment
