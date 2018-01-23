import React, { Component } from 'react';
import {Segment} from 'semantic-ui-react';
import './CSS/App.css';

//Import Components


class App extends Component {

  constructor(props){
    super(props);
    this.state={

    }
  }

   
   render() {
     window.onresize =() => this.setState({h: window.innerHeight - 200});
    return (
      <div className='App-body' >
        <div className='App-WorkArea' >
         
        </div>
        <div className='App-MenuArea' >

        </div>
      </div>
    );
  }
}

export default App;
