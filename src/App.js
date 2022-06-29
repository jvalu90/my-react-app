import React, {Component} from 'react';
import './App.css';
//import Title from './Title.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Jimmy Valencia Urbano',
      terms: false,
    }
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <input type='text' value={this.state.name} onChange={this.updateName.bind(this)}/>
        <div>
          <label>
            <input type='checkbox' checked={this.state.terms} onClick={this.updateTerms.bind(this)} /> Accept terms and conditions
          </label>
        </div>
        <button onClick={this.sayHi.bind(this)}>Say Hi!</button>
      </div>
    );
  }

  updateName(event) {
    this.setState({
      name: event.target.value
    });
  }

  updateTerms(event) {
    this.setState({
      terms: event.target.checked
    });
  }

  sayHi() {
    if (this.state.terms) {
      alert('Hello ' + this.state.name);
    } else {
      alert('Please acept terms and conditions');
    }    
  }

}

export default App;
