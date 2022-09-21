import React from 'react';
import './purchase-summary.css';

function PurchaseSummary({ titleState }) {
	return (
		<div className='summary-container'>
			{titleState ? (
				<p className='summary-header'>
					<svg
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M9 12L11 14L15 10M21 12C21 13.1819 20.7672 14.3522 20.3149 15.4442C19.8626 16.5361 19.1997 17.5282 18.364 18.364C17.5282 19.1997 16.5361 19.8626 15.4442 20.3149C14.3522 20.7672 13.1819 21 12 21C10.8181 21 9.64778 20.7672 8.55585 20.3149C7.46392 19.8626 6.47177 19.1997 5.63604 18.364C4.80031 17.5282 4.13738 16.5361 3.68508 15.4442C3.23279 14.3522 3 13.1819 3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12Z'
							stroke='#24B561'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>

					<span>Thanks for your purchase</span>
				</p>
			) : null}

			<div className='summary-content'>
				<div className='summary-content-title'>
					<p>You are set for</p>
					<p>
						<span>Pelumi</span> (The musical play by Muyiwa Adigun)
					</p>
				</div>
				<div className='summary-content-body'>
					<p>Your VIP ticket numbert is #12345687</p>
					<p className='ticket-email-container'>
						1 Ticket has been sent to {'dotun@example.com'}. Please use this
						number to get a physical pass at the event.
					</p>
					<p>N.B: One ticket is valid for just one person</p>
				</div>

				<div className='summary-content-time'>
					<div>
						<p>Date & Time</p>
						<p>
							<span>On 14th February, 2022</span> <span>5PM WAT</span>
						</p>
					</div>
					<div>
						<p>Venue</p>
						<p>Oduduwa Hall, OAU, Ile-Ife, Osun State</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PurchaseSummary;
