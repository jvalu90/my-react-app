import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import './App.css';
//import Title from './Title.js'

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Jimmy Valencia Urbano',
      terms: false,
      names: []
    }

    axios.get('http://localhost:3001/names')
      .then(response => {
        this.setState({
          names: response.data
        })
      }).catch(error=>{
        console.log(error);
      })
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
        <Button variant='primary' onClick={this.sayHi.bind(this)}>Say Hi!</Button>

        <ul>
          {this.state.names.map(name=>
            <li key={name}>{name}</li>
            )}
        </ul>
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
