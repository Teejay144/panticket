import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Overlay from '../components/Overlay';
import Banner from './components/Banner';
import BookTicket from './components/BookTicket';
import Content from './components/Content';

function Event() {
	const [modal, setModal] = useState(false);
	const [eventDesc, setEventDesc] = useState();

	const params = useParams();

	useEffect(() => {
		async function getEventDetails() {
			const { data } = await axios.get(
				`https://panticket-server.herokuapp.com/event/${params.eventId}`
			);
			// console.log(data.event);
			setEventDesc(data.event);
		}
		getEventDetails();
	}, [params.eventId]);
	return (
		<>
			{modal ? (
				<Overlay>
					<BookTicket setModal={setModal} />
				</Overlay>
			) : null}

			<Navbar />
			<Banner eventDesc={eventDesc} />
			<Content setModal={setModal} eventDesc={eventDesc} />
			<Footer />
		</>
	);
}

export default Event;
