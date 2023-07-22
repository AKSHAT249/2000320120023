import React from "react";
import "./Header.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SearchIcon from '@mui/icons-material/Search';
import {Link} from "react-router-dom";

function Header({source, destination}){
    const [startingStation , setStartingStation] = React.useState("");
    const [destinationStation , setDestinationStation] = React.useState("");

    function start(event){
        setStartingStation(event.target.value)
    }

    function finish(event){
        setDestinationStation(event.target.value);
    }


    return (
        <div className="Header">
            
            <input onChange={start} className="Header__input"  type="text" placeholder='From Station' />
            <ArrowForwardIcon />
            <input onChange={finish} className="Header__input" type="text" placeholder="To Station" />
            <Link to={`/${startingStation}${destinationStation}`}>
                <SearchIcon className="Header__searchIcon" />
            </Link>
            
            
        </div>
        
    )
}

export default Header;
