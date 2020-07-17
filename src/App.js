import React from 'react';
import './App.css';
import TeamPage from './pages/team-page/team-page.component'
import {Route,Switch} from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component'
import RecentCauses from './pages/recent-cause/recent-cause.component'
import AllCauses from './pages/allcauses/allcauses.component'

function App() {
  return (
      <Switch>

         <Route exact path='/team' component={TeamPage} />
         <Route exact path='/' component={HomePage} />
         <Route exact path='/recentcauses' component={RecentCauses} />
         <Route  path='/allCauses' component={AllCauses} />

      </Switch>
      
     


  );
}

export default App;
