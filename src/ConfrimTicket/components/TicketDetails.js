import React from 'react';
import './ticket-details.css';

function TicketDetails() {
	return (
		<div className='ticket-content-container '>
			<p className='info-title'>Ticket Details</p>
			<div className='ticket-detail-content'>
				<p className='detail-list'>
					<span>Ticket Status</span>
					<span className='badge'>Converted</span>
				</p>
				<p className='detail-list'>
					<span>Ticket Vendor</span>
					<span>Damochain</span>
				</p>
				<p className='detail-list'>
					<span>Issued By</span>
					<span>Damola Adeyinka</span>
				</p>
				<p className='detail-list'>
					<span>Issuance Date</span>
					<span>12 Jan, 2022</span>
				</p>
			</div>
		</div>
	);
}

export default TicketDetails;
