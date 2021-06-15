import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import { User } from '../components/User';
import { Profile } from '../components/Profile';
import { Settings } from '../components/Settings';

export const HomePage = () => {
    return <Switch>
        <Route path="/user">
            <User/>
        </Route>
        <Route path="/profile">
            <Profile/>
        </Route>
        <Route path="/settings">
            <Settings/>
        </Route>
        <Redirect to ="/"/>
    </Switch>
}