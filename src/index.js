import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App data={{title:"React", status:"active"}}/>
    <App data={{title:'Angular'}}/>
  </React.StrictMode>
);




/* ReactDOM.render(<h1>Salom dunyo</h1>, document.getElementById('root')); */
