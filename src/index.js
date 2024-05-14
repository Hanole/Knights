import React from 'react';
import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'tachyons';
import App from './containers/App';


const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

// ReactDOM.render(
//           <div>
//             <Card id={knights[0].id} name={knights[0].name} email={knights[0].email} />
//             <Card id={knights[1].id} name={knights[1].name} email={knights[1].email}/>
//             <Card id={knights[2].id} name={knights[2].name} email={knights[2].email}/>
//           </div>
//   , document.getElementById('root'));


reportWebVitals();
