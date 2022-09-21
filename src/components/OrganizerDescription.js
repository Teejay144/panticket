import React from 'react';
import './organizer-description.css';

function OrganizerDescription({ organizerDesc }) {
	return (
		<div className='event-content-container organizer-container'>
			<div className='organizer-info'>
				<p className='info-title'>{organizerDesc.name}</p>
				<p className='info-description'>{organizerDesc.description}</p>
			</div>

			<div className='organizer-socials'>
				<List listTitle='Phone Number' listBody={organizerDesc.phone} />
				<List listTitle='Email' listBody={organizerDesc.email} />
				<List listTitle='Twitter' listBody={organizerDesc.twitter} />
				<List listTitle='Instagram' listBody={organizerDesc.instagram} />
				<List listTitle='Facebook' listBody={organizerDesc.facebook} />
			</div>
		</div>
	);
}

export default OrganizerDescription;

function List({ listTitle, listBody }) {
	return (
		<div className='list-container'>
			<p>{listTitle}</p>
			<p> {listBody}</p>
		</div>
	);
}
