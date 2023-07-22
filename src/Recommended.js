import React from "react";
import "./Recommended.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Recommended({trainNumber, arrivalTime, reachingTime, trainName}){
    return (
        <div className="Recommended">
            <div className="Recommended__info">
                <h2>{trainNumber}</h2>
                <h3>{arrivalTime}</h3>
                <ArrowForwardIcon />
                <h3>{reachingTime}</h3>

            </div>
            <div className="Recommended__text">
                <h4>{trainName}</h4>
            </div>
            <hr />



        </div>
    )
}

export default Recommended;