import React, { useState } from 'react'

const NewWine = ({postWine}) => {
    const [wineName,setWineName] = useState("");
    const [wineDrink,setWineDrink] = useState("");


    return (
        <form onSubmit={(e)=>{
            e.preventDefault();
            postWine(wineName,wineDrink);
            setWineName("");
            setWineDrink("");
        }}>
            <div>
                <label>Wine name</label>
                <input type="text" value={wineName} onChange={(e)=>setWineName(e.target.value)} />
            </div>
            <div>
                <label>Wine date to drink</label>
                <input type="date" value={wineDrink} onChange={(e)=>setWineDrink(e.target.value)} />
            </div>
            <button type='submit'>Submit</button>
        </form> 
    );
}

export default NewWine;