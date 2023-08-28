import React from 'react';
import ReactDOM from 'react-dom';
import TextApp from './TextApp'; // Import your root component

ReactDOM.render(
  <React.StrictMode>
    <TextApp />
  </React.StrictMode>,
  document.getElementById('root') // Make sure you have an element with id "root" in your HTML
);
