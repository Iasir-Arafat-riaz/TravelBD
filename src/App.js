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
import AddReview from "./Pages/Dashboard/AddReview/AddReview";
import AddBlog from "./Pages/Dashboard/AddBlog/AddBlog";
import PendingBlog from "./Pages/Dashboard/PendingBlog/PendingBlog";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin/MakeAdmin";
import ManageBlogs from "./Pages/Dashboard/Dashboard/ManageBlogs/ManageBlogs";
import Footer from "./Pages/shared/Footer/Footer";
import AdminAddBlog from "./Pages/Dashboard/Dashboard/AdminAddBlog/AdminAddBlog";
import AdminRoute from "./Private/PrivateRoute/AdminRoute";
import Loading from "./Pages/shared/Loading/Loading";
import useFirebase from "./Hooks/useFirebase";
import EmailVarification from "./Private/PrivateRoute/EmailVarification";
import EamailVarifyRedirect from "./Private/PrivateRoute/EamailVarifyRedirect";

function App() {
  const { isLoading } = useFirebase();
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="App">
      <ContextApiProvider>
        <BrowserRouter>
          <Navigation></Navigation>
          <Routes>
            <Route path="/" element={<HomeRoot />} />
            <Route path="/Home" element={<HomeRoot />} />
            <Route path="/EmailVerify" element={<EmailVarification />} />

            <Route path="/Contact" element={<Contact />} />

            <Route path="/About" element={<About />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/Register" element={<Register />}></Route>

            <Route
              path="/Spot/:id"
              element={
                <PrivateRoute>
                  <TravellerExpDetails />
                </PrivateRoute>
              }
            />
            <Route
              path="/Dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            >
              <Route path="/Dashboard" element={<DashBoardDefault />}></Route>

              <Route path="AddReview" element={<AddReview />}></Route>

              <Route path="AddBlog" element={<AddBlog />}></Route>
              <Route
                path="AdminAddBlog"
                element={
                  <AdminRoute>
                    <AdminAddBlog />
                  </AdminRoute>
                }
              ></Route>

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
          <Footer />
        </BrowserRouter>
      </ContextApiProvider>
    </div>
  );
}

export default App;
