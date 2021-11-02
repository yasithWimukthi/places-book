import './App.css';
import React from "react";
import {BrowserRouter,Route,Redirect,Switch} from "react-router-dom";
import Users from "./user/pages/Users";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UserPlaces from "./places/pages/UserPlaces";
import NewPlace from "./places/pages/NewPlace";

function App() {
  return (
    <BrowserRouter>
        <MainNavigation/>
        <main>
            <Switch>
                <Route path="/" exact>
                    <Users/>
                </Route>
                <Route path="/:userId/places" exact>
                    <UserPlaces/>
                </Route>
                <Route path="/places/new" exact>
                    <NewPlace/>
                </Route>
                <Redirect to="/"/>
            </Switch>
        </main>
    </BrowserRouter>
  );
}

export default App;
