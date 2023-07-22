
import React from "react";
import "./Filter.css";
import TuneSharpIcon from '@mui/icons-material/TuneSharp';
// import { Tune } from "@material-ui/icons";



function Filter(){
    return (
        <div className="Filter">
            
            <TuneSharpIcon className="Filter__logo" />
            <h4 className="Filter__text">FILTER</h4>
        </div>
    )
}

export default Filter;
