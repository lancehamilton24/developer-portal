import React, { Component } from 'react';
import connection from '../helpers/data/connections';

import Auth from '../components/Auth/Auth';
import Blogs from '../components/Blogs/Blogs';
import './App.scss';

class App extends Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    connection();
  }

  isAuthenticated = () => {
    this.setState({ authed: true });
  }

  render() {
    if (!this.state.authed) {
      return (
        <div className="App">
          <Auth isAuthenticated={this.isAuthenticated}/>
        </div>
      );
    }
    return (
      <div className="App">
        <Blogs />
      </div>
    );
  }
}

export default App;