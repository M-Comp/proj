import {useState} from 'react';
import {Route, Link, Switch, useRouteMatch} from 'react-router-dom';

function SignupForm(props){
    const {path, url} = useRouteMatch();
    console.log(path);
    console.log(url);
    return(
        <>
            <Link to={`${url}/1`}>
                <p>oi</p>
            </Link>
            <Switch>
                <Route
                    path={`${path}/1`}
                >
                    <input
                        type="text"
                    />
                    <Link to={`${url}/2`}>

                    </Link>
                </Route>
            </Switch>
        </>
    )
}

export default SignupForm;