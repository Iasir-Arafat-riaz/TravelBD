import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIcons,faWarning, faAdd, faDashboard,faUser} from '@fortawesome/free-solid-svg-icons'

import './Dashboard.css';

const Dashboard = () => {

    const { admin,logOut } = useAuth();
    //console.log(admin.admin);

    return (
      <div className="MotherDashboard container-fluid">
      <div style={{ positon: "relative"}} className="row ">
        <div className="col-md-2 dashboardItems bg-danger">
          <div id="wrapper">
            <div  id="sidebar-wrapper">
              <div class="list-group list-group-flush my-3">
                {!admin && (
                  <Link
                    to="/Dashboard/AddReview"
                    class="list-group-item list-group-item-action bg-transparent second-text fw-bold"
                  >
                    <i class="fas fa-project-diagram me-2"></i>Add Review
                  </Link>
                )}
                {!admin&& (
                  <Link
                    to="/Dashboard/AddBlog"
                    class="list-group-item list-group-item-action bg-transparent second-text fw-bold"
                  >
                    <i class="fas fa-chart-line me-2"></i>Add Blog
                  </Link>
                )}
                {admin&& (
                  <Link
                    to="/Dashboard/AdminAddBlog"
                    class="list-group-item list-group-item-action bg-transparent second-text fw-bold"
                  >
                    {/* <i class="fas fa-chart-line me-2"></i>Add Blog */}
                    <FontAwesomeIcon  icon={faAdd} />  Add Blog
                  </Link>
                )}
                {admin && (
                  <Link
                    to="/Dashboard/pendingPost"
                    class="list-group-item list-group-item-action bg-transparent second-text fw-bold"
                  >
                   <FontAwesomeIcon  icon={faWarning} /> Pending Post
                  </Link>
                )}

                {admin && (
                  <Link
                    to="/Dashboard/MakeAdmin"
                    class="list-group-item list-group-item-action bg-transparent second-text fw-bold"
                  >
                    <FontAwesomeIcon  icon={faDashboard} /> MakeAdmin
                  </Link>
                )}
                {admin && (
                  <Link
                    to="/Dashboard/ManageBlogs"
                    class="list-group-item list-group-item-action bg-transparent second-text fw-bold"
                  >
                    {/* <i class="fas fa-gift me-2"></i>Manage Blogs */}
                    <FontAwesomeIcon  icon={faIcons} /> Manage Blogs
                  </Link>
                )}
                

                <Link
                  onClick={logOut}
                  to="/Home"
                  class="list-group-item list-group-item-action bg-transparent text-danger fw-bold"
                >
                  {/* <i class="fas fa-power-off me-2"></i>Logout */}
                  <FontAwesomeIcon  icon={faUser} /> Logout
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-10 dashboardOrigin">
          
          <Outlet />
        </div>
      </div>
    </div>
    );
};
export default Dashboard;