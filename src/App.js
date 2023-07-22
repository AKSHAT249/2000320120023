
import './App.css';
import Header from "./Header";
import Recommended from "./Recommended";
import Filter from "./Filter";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
        

        <BrowserRouter>

        <Header source="Farrukhabad Junction" destination="Kanpur Central" />

        <Filter />
          
        <Routes>
          <Route path="/" element={
            <div>

        <Recommended  
          trainNumber="14153"
          arrivalTime="3.00PM"
          reachingTime="6.20PM"
          trainName="Kanpur Central Express"
        />

        <Recommended  
            trainNumber="22532"
            arrivalTime="3.10 AM"
            reachingTime="6.25 AM"
            trainName="Chappra SF Express"
          />

        <Recommended  
          trainNumber="22921"
          arrivalTime="10:00 PM"
          reachingTime="11:30 PM"
          trainName="Tejas Superfast"
        />

        <Recommended  
          trainNumber="14724"
          arrivalTime="7:45 PM"
          reachingTime="9:00  PM"
          trainName="kalindri  Express"
        />

        <Recommended  
          trainNumber="14153"
          arrivalTime="3.00PM"
          reachingTime="6.20PM"
          trainName="Kanpur Central Express"
        />

        <Recommended  
            trainNumber="22532"
            arrivalTime="3.10 AM"
            reachingTime="6.25 AM"
            trainName="Chappra SF Express"
          />

        <Recommended  
          trainNumber="22921"
          arrivalTime="10:00 PM"
          reachingTime="11:30 PM"
          trainName="Tejas Superfast"
        />

        <Recommended  
          trainNumber="14724"
          arrivalTime="7:45 PM"
          reachingTime="9:00  PM"
          trainName="kalindri  Express"
        />

        <Recommended  
          trainNumber="14153"
          arrivalTime="3.00PM"
          reachingTime="6.20PM"
          trainName="Kanpur Central Express"
        />

        <Recommended  
            trainNumber="22532"
            arrivalTime="3.10 AM"
            reachingTime="6.25 AM"
            trainName="Chappra SF Express"
          />

        <Recommended  
          trainNumber="22921"
          arrivalTime="10:00 PM"
          reachingTime="11:30 PM"
          trainName="Tejas Superfast"
        />

        <Recommended  
          trainNumber="14724"
          arrivalTime="7:45 PM"
          reachingTime="9:00  PM"
          trainName="kalindri  Express"
        />


            </div>
          } />

          <Route path="/:searchTerm"  element={
            <div>
              <Recommended  
          trainNumber="22921"
          arrivalTime="10:00 PM"
          reachingTime="11:30 PM"
          trainName="Tejas Superfast"
        />

        <Recommended  
          trainNumber="14724"
          arrivalTime="7:45 PM"
          reachingTime="9:00  PM"
          trainName="kalindri  Express"
        />

        <Recommended  
          trainNumber="14153"
          arrivalTime="3.00PM"
          reachingTime="6.20PM"
          trainName="Kanpur Central Express"
        />

        <Recommended  
            trainNumber="22532"
            arrivalTime="3.10 AM"
            reachingTime="6.25 AM"
            trainName="Chappra SF Express"
          />

        <Recommended  
          trainNumber="22921"
          arrivalTime="10:00 PM"
          reachingTime="11:30 PM"
          trainName="Tejas Superfast"
        />

               
            </div>
          } />
          
         


        </Routes>

        </BrowserRouter>

        





        
          
        
    </div>
  );
}

export default App;
