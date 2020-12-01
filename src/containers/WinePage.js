import React from 'react'
import WineInfo from './components/WineInfo'
import { v4 as uuidv4 } from 'uuid';


const WinePage = ({wines}) => {

    const wineView = wines.map(wine=>{
        return <WineInfo key={uuidv4} wine={wine}/>
    })

    return (
        <div centered>
            {wineView}
        </div>
    );
}

export default WinePage;