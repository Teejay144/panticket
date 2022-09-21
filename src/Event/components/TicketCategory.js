import './ticket-category.css';
import React from 'react';
import Button from '../../components/Button';

function TicketCategory({ name, price, availableTicket, setModal }) {
	return (
		<div className='ticket-wrapper'>
			<div className='ticket-type'>
				<div className='ticket-color'></div>
				<p className='ticket-type-title'>{name}</p>
			</div>
			<p className='ticket-price'>{price}</p>
			<div className='quantity-container'>
				<p className='quantity'>Quantity</p>
				<div className='quantity-counter'>
					<p className='available-ticket'>{availableTicket}</p>
					<p className='ticket-input'></p>
				</div>
			</div>
			<div className='get-ticket'>
				<Button
					onclick={() => setModal((prevState) => !prevState)}
					title={'Get Ticket'}
					variation='secondary'
				/>
			</div>
		</div>
	);
}

export default TicketCategory;
