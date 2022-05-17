import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Profile from '../Profile';
import Organization from '../Organization';

import * as routes from '../constants/routes';

import './style.css';

class App extends Component {
  state = {
    organizationName: 'the-road-to-learn-react',
  };

  onOrganizationSearch = value => {
    this.setState({ organizationName: value });
  };

  render() {
    return (
      < Router >
        < div className="App" >
          <Navigation
            organizationName={this.state.organizationName}
            onOrganizationSearch={this.onOrganizationSearch}
          />
          < div className="App-main" >
            < Route
              exact
              path={routes.ORGANIZATION}
              component={() => (
                < div className="App-content_large-header" >
                  < Organization organizationName={this.state.organizationName} />
                </div >
              )}
            />
            < Route
              exact
              path={routes.PROFILE}
              component={() => (
                < div className="App-content_small-header" >
                  < Profile />
                </div >
              )}
            />
          </div >
        </div >
      </Router >
    );
  }
}

export default App;