import React from 'react';
import { BrowserRouter, Switch, Route, Link, HashRouter, NavLink } from 'react-router-dom';
import { CampFilterAppContainer } from './MapFilterApp';
import WeatherReport from './WeatherReport';

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={CampFilterAppContainer}/>
        <Route path="/weather" component={WeatherReport}/>
      </Switch>
    </BrowserRouter>
  )
}
