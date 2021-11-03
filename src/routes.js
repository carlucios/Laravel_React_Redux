import React, {Suspense, lazy, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import CircProgress from './components/progress/CircProgress';

const Login = lazy(() => import ('./views/login/Login'));

const token = localStorage.getItem('acess_token');

const PrivateRoute = ({
    component: Component,
    ...rest
}) => (
    <Route
        {...rest}
        render={props => (token
        ? (<Component {...props}/>)
        : (<Redirect
            to={{
            pathname: '/login',
            state: {
                from: props.location
            }
        }}/>))}/>

)

const Routes = () => (
    <Router>
        <Suspense fallback={<div className="mt-5 pt-5"><CircProgress  /></div>}>
            <Switch>
                <Route path="/login" component={Login}/>
                <Route exact path="/" component={Login}/>
                <Route path='/app' component={() => <h1>Você está logado!</h1>} />
            </Switch>
        </Suspense>
    </Router>
)

export default Routes;