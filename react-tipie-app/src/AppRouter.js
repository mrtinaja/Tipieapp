import { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { Auth } from './views/Auth';
import { Home } from './views/Home';
import { auth } from './firebase';
import { useState } from "react";


function AppRouter() {

    const [user,setUser] = useState();

    useEffect(() => {
        auth.onAuthStateChanged(async(userData) => {
          if (userData) {
             setUser(userData);
          } else {
            setUser(null);
          }
        });
      }, []);

    return (
            <Router>
                <Switch>
                    <Route exact path="/auth">
                        <Auth/>
                    </Route>
                    <Route exact path="/">
                    {user ? <Home/> : <Redirect to="/auth" />}
                    </Route>
                </Switch>
            </Router>
        );

}

export default AppRouter;
