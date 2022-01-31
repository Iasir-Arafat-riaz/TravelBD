import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { useForm } from "react-hook-form";
import useAuth from '../../../Hooks/useAuth';

const PendingBlog = () => {
    const [allBlogs, setAllBlogs] = useState([]);
  const { register, handleSubmit } = useForm();
  const [status, setStatus] = useState("");
  const { user } = useAuth();
  const email = user.email;
  //find all my orders
  useEffect(() => {
    const url = `https://frozen-falls-34021.herokuapp.com/travellerExperience`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllBlogs(data));
  }, []);

  //Filter notApproved blog

  const notApprovedBlog = allBlogs.filter(naBlog=>naBlog.status=="notApproved")
 

 
  //StatusUpdate
  const statusConfirm = (orderId) => {
    setStatus("approved");
    const updateStatus = { status: status };
    console.log(status, orderId);
    fetch(`https://frozen-falls-34021.herokuapp.com/blog/${orderId}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updateStatus),
    })
      .then((res) => res.json())
      .then((result) => {
          console.log(result)
             
          Swal.fire('This Order status confirm ') 
          window.location.reload()    
        });
  };

   
    return (
        <div style={{paddingTop:"100px"}}>
      
      <div className="container">
        <h2>Total {allBlogs.length} blog waiting for approval</h2>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Traveller</th>
              {/* <th>Phone</th> */}
              <th>Status</th>
              <th>confirm</th>
             
            </tr>
          </thead>
          {notApprovedBlog?.map((order, index) => (
            <tbody key={index}>
              <tr>
                <td>{index}</td>
                <td>{order.name}</td>
                <td>{order.writer}</td>
                {/* <td>{order.image}</td> */}
                <td>
                  <b>{order.status}
                  {!order.status && "approved"}</b>
                </td>
                <td>
                  <button
                    className="status-confirm bg-success"
                    onClick={() => statusConfirm(order._id)}
                  >
                    Confirm
                  </button>
                </td>
                
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    </div>
    );
};

export default PendingBlog;