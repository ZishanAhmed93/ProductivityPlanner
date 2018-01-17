import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from '../containers/Home'


const App = () => (
  <div className="wrapper-wide">
    <Navigation />

    <main>
      <Switch>
      
        <Route path="/" exact component={Home} />

      </Switch>
    </main>

    <Footer />

  </div>
)

module.exports = App