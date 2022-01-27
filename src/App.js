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
import DashBoardDefault from "./Pages/Dashboard/DashBoardDefault/DashBoardDefault";
import PrivateRoute from "./Private/PrivateRoute/PrivateRoute";

function App() {
  return (
    <div className="App">
      <ContextApiProvider>
        <BrowserRouter>
          <Navigation></Navigation>
          <Routes>
            <Route path="/" element={<HomeRoot />} />
            <Route path="/Home" element={<HomeRoot />} />
            <Route path="/:id" element={<PrivateRoute><TravellerExpDetails /></PrivateRoute>} />
            <Route path="/Contact" element={<Contact />} />

            <Route path="/About" element={<About />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/Register" element={<Register />}></Route>
            <Route path="/Dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}>
              <Route path="/Dashboard" element={<DashBoardDefault />}></Route>

              <Route path="ServiceReview" element={<AddReview />}></Route>

              <Route path="AddBlog" element={<AddBlog />}></Route>

              <Route
                path="pendingPost"
                element={
                  <AdminRoute>
                    <PendingBlog />
                  </AdminRoute>
                }
              ></Route>

              <Route
                path="MakeAdmin"
                element={
                  <AdminRoute>
                    <MakeAdmin />
                  </AdminRoute>
                }
              ></Route>

              <Route
                path="ManageBlogs"
                element={
                  <AdminRoute>
                    <ManageBlogs />
                  </AdminRoute>
                }
              ></Route>
            </Route>

            <Route path="*" element={<Error />}></Route>
          </Routes>
        </BrowserRouter>
      </ContextApiProvider>
    </div>
  );
}

export default App;
