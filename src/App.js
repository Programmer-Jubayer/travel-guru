import './App.css';
import Header from './Component/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import DetailsPlace from './Component/DetailsPlace/DetailsPlace';
import { createContext, useState } from 'react';
import HotelBooking from './Component/HotelBooking/HotelBooking';
import Login from './Component/Login/Login';

export const HappyTravel = createContext();
function App() {
  const [travelInfo, setTravelInfo] = useState({
    isSignedIn: false,
    displayName: ""
  });
  console.log(travelInfo)
  return (
    <HappyTravel.Provider value={[travelInfo, setTravelInfo]}>
      <Router>
      <Switch>
          <Route path="/viewDetail/:id">
              <DetailsPlace></DetailsPlace>
          </Route>
          <Route path="/booking">
              <HotelBooking></HotelBooking>
          </Route>
          <Route path="/login">
              <Login></Login>
          </Route>
          <Route path="/">
              <Header></Header>
          </Route>
        </Switch>
        </Router>
    </HappyTravel.Provider>
  );
}

export default App;
