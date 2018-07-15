import React, { Component } from 'react';
import Panel from './AppItem';
import './assets/App.css';
import {panels} from './assets/mockdata';
class App extends Component {
  renderPanels (panel, index) {
    return <Panel key={index} panel={panel} />
  }
  render() {
    return (
      <div className='container-fluid main-bg'>
        <div className='panels row'>
          {panels ? panels.map(this.renderPanels) : 'there is no data'}
        </div>
      </div>
    );
  }
}

export default App;
