import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import RootStore from "./examples/principals and concepts/how to structure our stores/stores/root-store";

// current working file
// import './fundamentals';

// examples - use this after each lecture
// import './examples/observable';
// import './examples/actions';
// import './examples/reactions';
// import './examples/computed';

// const rootStore = new RootStore();
// console.log(rootStore);


// exercise -1
// import './exercises/ex-1.txt/exercise-1';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
