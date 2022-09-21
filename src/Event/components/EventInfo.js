import moment from 'moment';
import React from 'react';
import './event-info.css';

function EventInfo({ eventDescription, dateTime, eventVenue, time }) {
	const date = moment(dateTime);

	return (
		<div className='event-content-container'>
			{eventDescription ? (
				<div className='event-info'>
					<p className='info-title'>Event Description</p>
					<p className='info-description'>{eventDescription}</p>
				</div>
			) : null}
			{dateTime ? (
				<div className='event-info'>
					<p className='info-title'>Date and Time</p>
					<div className='info-description'>
						<p className='date'>{moment(date).format(' Do MMMM YYYY')}</p>
						<p className='time'>{time}</p>
					</div>
				</div>
			) : null}
			{eventVenue ? (
				<div className='event-info'>
					<p className='info-title'>Venue</p>
					<p className='info-description'>{eventVenue}</p>
				</div>
			) : null}
		</div>
	);
}

export default EventInfo;
