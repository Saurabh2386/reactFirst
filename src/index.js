import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
let name = "Mca 2 sem"
let lname = "sourabh"
const element = (
<div>
  <h1>hello world..!</h1>
  <p>My Name is {`My Name is ${name} ${lname}`}</p>
</div>
);
/**
 *jsx elements => using of html tags with a js or jsx file.
 * 
 */
root.render(element);

