import React, {Component, Fragment} from 'react';

class App extends Component {
   
  state = {number: this.props.number}

  handleIncrement = () => {
    this.setState({
      number: this.state.number + 1
    })
  }

  handleDecrement = () => {
    this.setState({
      number: this.state.number - 1
    })
  }

  handleReset = () => {
    this.setState({
      number: 0
    })
  }


  render() {
    
    return (
      <Fragment>
        <h1> Number: {this.state.number} </h1>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
        <button onClick={this.handleReset}>Reset</button>
      </Fragment>
    );
  }
}

App.defaultProps = {
  number: 0
}

export default App;


/*
Forma de proteger que el componente no falle.
Si necesita que le pase unas props y por el motivo que fuera esas props no llegan le damos un valor por default para inicializarlas.

defaultProps debe ir despues de la clase porque ya debe estar inicializado.

App.defaultProps = {
  number: 0
}


*/