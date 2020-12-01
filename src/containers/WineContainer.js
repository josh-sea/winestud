import React from 'react';
import WinePage from './WinePage';
import NewWine from './components/NewWine';
import QRScanner from './components/QRScanner';
import { Route, Switch } from 'react-router-dom';

const WineContainer = ({postWine, wines}) => {

    return (
        <div>
            <Route exact path='/new-wine'>
                <div>
                    <NewWine postWine={postWine} />                
                </div>
            </Route>
            <Switch>
            <Route path='/scan'>
                <div>
                    <QRScanner />
                </div>
            </Route>
            <Route path='/'>
                <div>
                    <WinePage wines={wines}/>
                </div>
            </Route>
            </Switch>


        </div>
    )
};

export default WineContainer;
