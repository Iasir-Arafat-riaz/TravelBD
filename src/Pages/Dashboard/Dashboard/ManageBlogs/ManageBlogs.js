import React, { useEffect, useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';

const ManageBlogs = () => {
    
    const [tours, setTours] = useState([]);
    useEffect(() => {
        fetch('https://frozen-falls-34021.herokuapp.com/travellerExperience')
            .then(res => res.json())
            .then(data => setTours(data))
    }, [tours])

    const handleDeletePlace = id => {
        const uri = `https://frozen-falls-34021.herokuapp.com/deleteblog/${id}`;
        const exist = window.confirm("Are You sure want to delete ??");
        if (exist) {
            fetch(uri, {
                method: "DELETE",
            })
                .then()
                .then(data => {
                    if (data.deleteCount > 0) {
                        const remainingCar = tours.filter(order => order._id !== id);
                        setTours(remainingCar);
                    }
                })
        }
    }
    return (
        <div>
            <h1>ManageBlogs</h1>
            <table style={{marginTop:"60px"}} className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Tour Name</th>
                    <th scope="col">Tour Price</th>
                    <th scope="col">Writer/Traveller</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {tours.map((item, index) => {
                    return (
                        <tr key={item._id}>
                            <th scope="row">{index + 1}</th>
                            <td className='fw-bold'>{item.name}</td>
                            <td className='fw-bold'>{item.price}</td>
                            <td className='fw-bold'>{item.writer}</td>
                            <td>
                                <button
                                    className="btn"
                                    disabled={item.isPaid}
                                // onClick={() => openModalSetId(item._id)}
                                >
                                    <AiFillDelete
                                        onClick={() => handleDeletePlace(item._id)}
                                        className="text-danger"
                                        style={{ fontSize: "25px" }}
                                    />
                                </button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
        </div>
    );
};

export default ManageBlogs;