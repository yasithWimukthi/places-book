import './App.css';
import React,{useState,useCallback} from "react";
import {BrowserRouter,Route,Redirect,Switch} from "react-router-dom";
import Users from "./user/pages/Users";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UserPlaces from "./places/pages/UserPlaces";
import NewPlace from "./places/pages/NewPlace";
import UpdatePlace from "./places/pages/UpdatePlace";
import Auth from "./user/pages/Auth";
import {AuthContext} from "./shared/context/auth-context";

function App() {

    const [isLoggedIn,setIsLoggedIn] = useState(false);

    const login = useCallback(() => {
        setIsLoggedIn(true);
    },[])

    const logout = useCallback(() => {
        setIsLoggedIn(false);
    },[])

    return (
        <AuthContext.Provider value={{isLoggedIn,login,logout}}>
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
                        <Route path="/places/:placeId" exact>
                            <UpdatePlace/>
                        </Route>
                        <Route path="/auth" exact>
                            <Auth/>
                        </Route>
                        <Redirect to="/"/>
                    </Switch>
                </main>
            </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default App;
