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
      <div>
        
        {data.id} {data.name} {data.group} 
        </div>
    )
  }
}

export default App;
