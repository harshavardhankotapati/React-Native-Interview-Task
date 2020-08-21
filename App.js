import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Login from './assign/login/index'
import DashBoardList from "./assign/dashboardlist/index"
import Details from './assign/component/detailsPage'

export default class App extends Component {

  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene
            key="login"
            component={Login}
            title="Login"
            type="replace"
            hideNavBar
            initial={true}
          />
          <Scene
            key="dashBoardList"
            component={DashBoardList}
            title="DashBoardList"
            type="replace"
            hideNavBar
          />
           <Scene
            key="details"
            component={Details}
            title="Details"
            type="replace"
            hideNavBar
          />
        </Scene>
      </Router>
    );
  }
}
