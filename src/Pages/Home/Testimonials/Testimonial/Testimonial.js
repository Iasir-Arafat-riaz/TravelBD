import React from 'react';
import "./Testimonial.css"

const Testimonial = (props) => {
    const { name, description, profession } = props.review;

    return (

        <article
            className='p-9 bg-white testimonialStyle '
            style={{ zIndex: 999}}
        >

            <p className='text-justify'>"{description.slice(0, 220)}"</p>

            <h6 className='mt-3'>
                <span className='italic'>- {name}</span>,
                <span className='text-orange'> {profession}</span>
            </h6>

        </article>
    );
};

export default Testimonial;