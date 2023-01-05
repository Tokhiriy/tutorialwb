import './App.css';
import React from 'react';
/* function App(props) {
 
  return (
    
    <div className="App">
     <h1>Hi {this.props.data.title}</h1>
    </div>
  );
}

export default App; */

class App extends React.Component{
  render(){
    const {data} = this.props
   
    return(
      <div className="App">
        <h1>Hi {data?.title || 'Framework'}</h1>
        <h3>{data?.title} is {data?.status || 'unknown'}</h3>
        <h4>Salom dunyo</h4>
        </div>
    )
  }
}

export default App;
