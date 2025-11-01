# Hermouch Pizza Menu 🍕

A beautiful, responsive pizza menu website built with React, showcasing authentic Moroccan cuisine pizzas.

## Features

- 🎨 Modern and clean UI design
- 📱 Fully responsive design (mobile, tablet, and desktop)
- ⏰ Real-time restaurant hours indicator
- 🏷️ Menu items with pricing and ingredients
- 🚫 Sold-out status tracking
- 🌟 Hover effects and smooth transitions

## 🛠️ Technologies Used

- **React** 19.2.0
- **CSS3** with Flexbox and Grid
- **Google Fonts** (Roboto Mono)


### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd pizza-menu
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## 🏗️ Project Structure

pizza-menu/
├── public/
│   ├── index.html
│   └── pizzas/          # Pizza images
├── src/
│   ├── Components/
│   │   ├── Header.js    # Restaurant header
│   │   ├── Main.js      # Menu display
│   │   └── Footer.js    # Hours and order button
│   ├── App.js           # Main app component
│   ├── data.js          # Pizza data
│   ├── index.css        # Styles with responsive design
│   └── index.js         # Entry point
└── package.json

## 📱 Responsive Design
The website is fully responsive with breakpoints for:
    **Mobile**: ≤ 480px - Single column layout, stacked pizza cards
    **Tablet**: ≤ 768px - Single column layout, optimized spacing
    **Desktop**: > 768px - Two-column grid layout

## ⏰ Restaurant Hours
Open: 11:00 AM - 11:00 PM
The footer displays current time and availability status

## 👤 Author

Hermouch Abdelmajid

---

Made with ❤️ using React
