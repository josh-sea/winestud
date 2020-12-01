import React from 'react'

const WineInfo = ({wine}) => {

    return (
        <div>
            <img src='https://react.semantic-ui.com/images/avatar/large/matthew.png' />
            <div>
                <h3>{wine.name}</h3>
                <div>
                    Drink On: <span>{wine.drink_date}</span>
                </div>
                <div>
                    Vintage: {wine.vintages.length && wine.vintages[0].year}
                </div>
                <div>
                    Type: {wine.types.length && wine.types[0].name}
                </div>
            </div>
            <div>
            </div>
        </div>
    );
}

export default WineInfo;