import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Header from "./components/Header";
import UserPage from "./pages/UserPage";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Header />
        <Switch>
					<Route exact path='/'>
						<Redirect to='/user/12' />
					</Route>
				  <Route path='/user/:id' component={UserPage} />
					<Route component={ErrorPage} />
				  </Switch>
      </BrowserRouter>
    </div>
	);
}

export default App;