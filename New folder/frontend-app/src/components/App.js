import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Register from './Register';

const App = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/" exact>
                        <h1>Welcome to the Secure Backend App</h1>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;