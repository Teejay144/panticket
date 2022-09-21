import React, { useState } from 'react';
import './bookticket.css';
import Input from '../../components/Input';
import Button from '../../components/Button';
import TicketPayment from './TicketPayment';

function BookTicket({ setModal }) {
	const [swapModal, setSwapModal] = useState(true);
	function handleSubmit(event) {
		event.preventDefault();
		setSwapModal((prevState) => !prevState);
		// console.log('Submitted');
	}
	return (
		<>
			{swapModal ? (
				<div className='booking-container'>
					<div className='container-header'>
						<p className='container-title'>Book Ticket</p>
						<button
							onClick={() => setModal((prevState) => !prevState)}
							className='close-icon'>
							<svg
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M18 6L6 18'
									stroke='#666670'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
								<path
									d='M6 6L18 18'
									stroke='#666670'
									strokeWidth='2'
									strokeLinecap='round'
									strokeLinejoin='round'
								/>
							</svg>
						</button>
					</div>
					<div className='ticket-form-container'>
						<form onSubmit={handleSubmit} className='ticket-form'>
							<div className='form-input'>
								<Input label={'Name'} type='text' placeholder={'Enter Name'} />
							</div>
							<div className='form-input'>
								<Input
									label={'Email'}
									type='email'
									placeholder={'Enter Email'}
								/>
							</div>
							<div className='form-input'>
								<Input
									label={'Phone Number'}
									type='text'
									placeholder={'Enter Phone Number'}
								/>
							</div>
							<div className='form-btn'>
								<Button variation={'secondary'} title='Make Payment' />
							</div>
						</form>
						<div className='ticket-summary'>
							<div className='ticket-type-group'>
								<p className='type-group'>
									<span>Regular Ticket</span>
									<span>(N1,000)</span>
								</p>
								<p className='price-group'>
									<span>Qty x 2</span>
									<span>N2,000</span>
								</p>
							</div>
							<div className='ticket-price-group'>
								<p className='price-group'>
									<span>Sub-total</span>
									<span>(N2,000)</span>
								</p>
								<p className='price-group'>
									<span>VAT7.5%</span>
									<span>(N150)</span>
								</p>
								<p className='total-group'>
									<span>Total</span>
									<span>(N2,150)</span>
								</p>
							</div>
						</div>
					</div>
				</div>
			) : (
				<TicketPayment setModal={setModal} />
			)}
		</>
	);
}

export default BookTicket;
