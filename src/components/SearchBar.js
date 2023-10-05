
import { useState } from "react";
import './SearchBar.css'

function Searchbar({onSubmit}){
    // passing onSubmit which is comming from app.js

    const [term, setTerm] = useState()

    const handleFormSubmit =(event)=>{
        event.preventDefault();
        //The event.preventDefault() method is used to prevent the default behavior associated with an event in JavaScript


        // to  get user input value never do this because we are using react 
        // onSubmit(document.querySelector('input').value)
        // onSubmit("shnky")
        onSubmit(term)
        // term is getting updated because of useState
    }
    //event is the event object that represents the user's interaction with the input element
        const handleChange = 
        (event)=>{
            // to get value as the user enter

// setTerm will rerender the input element again and again as the user changes the value
       setTerm(event.target.value);
    };
    



  // when user clicks on click me then handleFormSubmit will run and handleFormSubmit kai andar onSubmit run ho rha hai and onSubmit Searchbar ki property hai jo ki app.js mai use ho rhi hai
    return <div className="search-bar">
        <form onSubmit={handleFormSubmit}>
            <label>Enter Search Term</label>
        <input className="inp" value={term}onChange={handleChange}/>
        </form>
        </div>
    
}

export default Searchbar