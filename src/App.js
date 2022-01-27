import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeRoot from "./Pages/Home/HomeRoot/HomeRoot";
import Navigation from "./Pages/shared/Navigation/Navigation";
import Error from "./Pages/Error/Error";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import Login from "./Pages/UserLogin/Login/Login";
import Register from "./Pages/UserLogin/Register/Register";
import ContextApiProvider from "./ContextApiProvider/ContextApiProvider";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import TravellerExpDetails from "./Pages/Home/TravelersExp/TravellerExpDetails/TravellerExpDetails";

function App() {
  return (
    <div className="App">
      <ContextApiProvider>
        <BrowserRouter>
          <Navigation></Navigation>
          <Routes>
            <Route path="/" element={<HomeRoot />} />
            <Route path="/Home" element={<HomeRoot />} />
            <Route path="/:id" element={<TravellerExpDetails />} />
            <Route path="/Contact" element={<Contact />} />

            <Route path="/About" element={<About />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/Register" element={<Register />}></Route>
            <Route path="/Dashboard" element={<Dashboard/>}>

            </Route>

            <Route path="*" element={<Error />}></Route>
          </Routes>
        </BrowserRouter>
      </ContextApiProvider>
    </div>
  );
}

export default App;
