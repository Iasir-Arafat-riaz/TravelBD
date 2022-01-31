import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import "../Dashboard/AdminAddBlog/AdminAddBlog.css"

const AddBlog = () => {
    

    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');
    const [writerName, setWriterName] = useState('');
    const [writerImage, setWriterImage] = useState('');
    const [description, setDescription] = useState('');
    const [facility, setFacility] = useState('');
    const [date, setDate] = useState('');
    const [day, setDays] = useState('');
    const [rating, setRating] = useState(0);
    const { user } = useAuth();
    const [price, setPrice] = useState('');
    const [location, setLoaction] = useState('');
    const [accommodation, setAccommodation] = useState('');

    const handlePostBlog = e => {

        // const status = user.email ? 'approved'
        e.preventDefault();
        const data = { name, loaction: location, day, writer: writerName, writerImg: writerImage, desc1: description, facility, accommodation, date, price, category, status: 'notApproved', blogImg: image, rating };

        fetch('https://frozen-falls-34021.herokuapp.com/blog', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json(data))
            .then(data => {
                alert("Your post is pending")
            })
    };

    return (
        <form onSubmit={handlePostBlog}>
            <div className='add-blog container shadow row mt-5'>

                <div className="col-lg-6 col-12">
                    <input required onChange={e => setName(e.target.value)} type="text" placeholder='Blog Name' />
                    <input required onChange={e => setImage(e.target.value)} type="text" placeholder='Blog Image' />
                    <input required onChange={e => setCategory(e.target.value)} type="text" placeholder='Blog Category' />
                    <input required onChange={e => setWriterName(e.target.value)} type="text" placeholder='Writer Name' />
                    <input onChange={e => setWriterImage(e.target.value)} type="text" placeholder='Writer image' />
                    <input onChange={e => setLoaction(e.target.value)} type="text" placeholder='Location' />
                    <input onChange={e => setDate(e.target.value)} type="date" />
                    <select required onChange={e => setRating(e.target.value)}>
                        <option >choose rating*</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>

                <div className="col-lg-6">
                    <input required onChange={e => setDays(e.target.value)} type="text" placeholder='How many days' />
                    <input onChange={e => setPrice(e.target.value)} type="number" placeholder='Cost for this place' />
                    <textarea required onChange={e => setDescription(e.target.value)} placeholder='Blog Description' rows="4"></textarea>
                    <textarea onChange={e => setFacility(e.target.value)} placeholder='Why shoul go' rows="4"></textarea>
                    <textarea onChange={e => setAccommodation(e.target.value)} placeholder='Acc' rows="4"></textarea>
                    <input className='bg-danger' type="submit" value="SUBMIT" />
                </div>
            </div>
        </form>
    );
};

export default AddBlog;