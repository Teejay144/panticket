import React, { useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';
import './bookticket.css';
import './TicketPayment.css';
import { useNavigate } from 'react-router-dom';

function TicketPayment({ setModal }) {
	const [paymentMethod, setpaymentMethod] = useState('Card');

	const navigate = useNavigate();

	function handleSubmit(event) {
		event.preventDefault();
		navigate('/event/1/purchase');
	}

	return (
		<div className='booking-container'>
			<div className='container-header'>
				<p className='container-title'>Make Payment</p>
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
							stroke-width='2'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
						<path
							d='M6 6L18 18'
							stroke='#666670'
							stroke-width='2'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
					</svg>
				</button>
			</div>

			<div className='payment-switch'>
				<p
					onClick={() => setpaymentMethod('Card')}
					className={`${
						paymentMethod === 'Card' && 'active-switch'
					}  inactive-switch`}>
					Card Payment
				</p>
				<p
					className={`${
						paymentMethod === 'Bank' && 'active-switch'
					}  inactive-switch`}
					onClick={() => setpaymentMethod('Bank')}>
					Bank Transfer
				</p>
			</div>
			<div className='ticket-form-container'>
				{paymentMethod === 'Card' ? (
					<form onSubmit={handleSubmit} className='ticket-form'>
						<div className='form-input'>
							<Input
								label={'Card Number'}
								type='text'
								placeholder={'Card Number'}
							/>
						</div>
						<div className='group-form-input'>
							<Input
								label={'Expiry Date'}
								type='date'
								placeholder={'MM/YYYY'}
							/>
							<Input label={'CVV'} type='password' placeholder={'XXX'} />
						</div>
						<div className='form-btn'>
							<Button variation={'secondary'} title='Make Payment' />
						</div>
					</form>
				) : (
					<TransferDetails />
				)}

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
	);
}

export default TicketPayment;

function TransferDetails() {
	return (
		<div className='details-section'>
			<p className='details-title'>Send fund to the following account</p>
			<div className='details-container'>
				<div className='detail-list'>
					<span>Bank Name</span>
					<span>GTBank</span>
				</div>
				<div className='detail-list'>
					<span>Account Number</span>
					<span>0123 4567 89</span>
				</div>
				<div className='detail-list'>
					<span>Account Name</span>
					<span>Panticket Limited</span>
				</div>
				<div className='detail-list'>
					<span>Payment Status</span>
					<span>Waiting</span>
				</div>
				<div className='form-btn'>
					<Button variation={'secondary'} title='Confirm Payment' />
				</div>
			</div>
		</div>
	);
}
