import React from 'react';
import { Link } from 'react-router-dom';
import './card.css';

function Card({ image, location, price, date, name, id }) {
	return (
		<div className='card-container'>
			<img src={`${image}`} alt='event' />
			<div className='card-details'>
				<Link to={`/event/${id}`}>
					<p className='name'>{name}</p>
				</Link>

				<p className='date'>{date}</p>
				<p className='location'>{location}</p>
				<p className='price'>{price}</p>
			</div>
		</div>
	);
}

export default Card;
