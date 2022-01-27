import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import HomeRoot from './Pages/Home/HomeRoot/HomeRoot';
import Navigation from './Pages/shared/Navigation/Navigation';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path="/" element={<HomeRoot/>}></Route>
        <Route path="/home" element={<HomeRoot/>}></Route>
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
