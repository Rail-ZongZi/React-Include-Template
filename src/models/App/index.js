import React, {Component} from 'react';
import './index.scss';

class App extends Component {
  render() {
    let pTile = {
      color: 'red',
      fontSize: '30px'
    }
    return (
    <p style={pTile}>
      React.js 組件{this.props.name}
    </p>
    )
  }
}

export default App;
