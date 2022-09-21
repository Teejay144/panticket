import './content.css';
import React from 'react';
import TicketCategory from './TicketCategory';
import EventInfo from './EventInfo';
import OrganizerDescription from '../../components/OrganizerDescription';

function Content({ setModal, eventDesc }) {
	return (
		<section className='main-container'>
			{eventDesc ? (
				<EventInfo
					eventDescription={eventDesc?.description}
					dateTime={eventDesc?.date}
					time={eventDesc?.time}
					eventVenue={eventDesc?.location}
				/>
			) : (
				<h1>Loading...</h1>
			)}

			<div className='ticket-container'>
				<p className='ticket-title'>Get your Ticket</p>
				<div className='ticket-category'>
					{eventDesc ? (
						eventDesc.ticketTypes.map((tickettype) => {
							return (
								<TicketCategory
									key={tickettype._id}
									name={tickettype.name}
									price={tickettype.price}
									availableTicket='10'
									setModal={setModal}
								/>
							);
						})
					) : (
						<h1>Loading...</h1>
					)}
				</div>
			</div>
			{eventDesc ? (
				<OrganizerDescription organizerDesc={eventDesc?.organizer} />
			) : (
				<h1>Loading...</h1>
			)}
		</section>
	);
}

export default Content;
