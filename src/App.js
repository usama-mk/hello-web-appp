import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import 'antd/dist/antd.css';
import './assets/scss/index.scss';
import CHeader from './components/CHeader/CHeader';
import CSidebar from './components/CSidebar/CSidebar';
import { DashboardRoutes } from './routes';



function App() {

  return (
    <div className="layout-container">
      <Router>
        <Switch>
          <>
            <CHeader />


            <CSidebar />

            <div className="content">
              {Object.values(DashboardRoutes).map((route, index) => (
                <Route
                  key={index}
                  exact={route.exact}
                  path={route.path}
                  component={route.component}
                />
              ))}

              <Redirect from="*" to="/" />
            </div>
          </>

        </Switch>
      </Router>
    </div >

  );
}
export default App;
