import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const students = [
  {id:1, name:'Sardor', group:'econom'},
  {id:2, name:'Sadriddin', group:'management'},
  {id:3, name:'Dilyoraxon', group:'econom'},
  {id:4, name:'HojiAkbar', group:'Informatika'},
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    {students.map((value) =>{
     return(
      <App key={value.id} data={value}/>
     )
    })}
    
  </React.StrictMode>
);




/* ReactDOM.render(<h1>Salom dunyo</h1>, document.getElementById('root')); */
