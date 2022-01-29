axios, localforage, react-error-boundary, react-icons, react-loading,
react-redux, react-router, react-router-dom, 

# **The Movie DB (ReactJS)**
A Web App to help discover the most popular movies which gets updates daily by [TMDB](https://www.themoviedb.org/). 

The app contains a hompage displaying a list of popular movies and tapping on a each movie opens a dialog displaying additional details of the movie.

Users allows to select and keep their favorite movies by clicking a heart icon on top-right side of each poster in the homepage or a heart icon appearing in the details dialog. As the app isn't integrated to any back-end source, the list will be kept locally on the client side which can be easily deleted. Once a favorite movie is added, the app stores its snapshot to track a change of its popularity score against the latest one in its details dialog.

## **Dependencies**
- [axios](https://www.npmjs.com/package/axios) : easy-to-use , automatic transforms of JSON format , wide browser support
- [localforage](https://www.npmjs.com/package/localforage) : easily manage localStorage and IndexedDB/WebSQL together, localStorage will be used in browsers without IndexedDB/WebSQL support
- [clsx](https://www.npmjs.com/package/clsx) : provides easy and fast function to construct className strings
- [react-error-boundary](https://www.npmjs.com/package/react-error-boundary) : easy to use the latest concept of "Error Boundaries"
- [react-icons](https://www.npmjs.com/package/react-icons) : consists tons of icons from variety sources, which utilize ES6 imports
- [react-loading](https://www.npmjs.com/package/react-loading) : provides neat-looking loaders which save a bit of time to build from scratch
- [redux](https://www.npmjs.com/package/redux), [react-redux](https://www.npmjs.com/package/react-redux) : essential packages for redux x reactjs integration
- [react-router](https://www.npmjs.com/package/react-router), [react-router-dom](https://www.npmjs.com/package/react-router-dom) : the most popular library for implementing routing with React apps
- [material-ui](https://www.npmjs.com/package/@mui/material) : provides neat-looking reusuable components that is fully responsive with fine web accessibility, Dialog component had been used for the app

## **Getting Started with Create App**

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### **Available Scripts**

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### **Learn More**

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
