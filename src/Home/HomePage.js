import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BigCard from '../components/BigCard';
import Button from '../components/Button';
import Card from '../components/Card';
import Input from '../components/Input';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './homepage.css';

function HomePage() {
	const [allEvents, setAllEvents] = useState();
	useEffect(() => {
		async function getEvents() {
			const { data } = await axios.get(
				'https://panticket-server.herokuapp.com/event'
			);
			setAllEvents(data.events);
		}
		getEvents();
	}, []);

	return (
		<>
			<Navbar />
			<header className='home-header'>
				<div className='header-text'>
					<p className='text-content'>Connect and get ticket to </p>
					<p className='text-content'>events near you based on your</p>
					<p className='text-content'>interest</p>
				</div>
			</header>
			<section className='event-section'>
				<form className='search-form'>
					<div className='search-input'>
						<Input placeholder='Search Event' />
					</div>
					<div className='category-input'>
						<Input placeholder='Categories' />
					</div>
					<div className='form-btn'>
						<Button title='Search Event' variation={'secondary'} />
					</div>
				</form>

				<div className='event-container'>
					<p className='section-title'>Events near you</p>
					<div className='events'>
						{/* {allEvents === false && <h1>Loading...</h1>} */}
						{allEvents ? (
							allEvents.map((singleEvent) => {
								return (
									<Card
										key={singleEvent._id}
										id={singleEvent._id}
										name={singleEvent.name}
										image={singleEvent.image}
										location={singleEvent.location}
										price='N2000'
										date={singleEvent.time}
									/>
								);
							})
						) : (
							<h1>Loading...</h1>
						)}
					</div>
				</div>
				<div className='event-container'>
					<p className='section-title'>Featured Events</p>
					<div className='featured-section'>
						{allEvents ? (
							allEvents.map((event) => {
								if (event.isFeatured) {
									return (
										<BigCard
											key={event._id}
											name={event.name}
											image={event.image || '/image/image.png'}
											location={event.location}
											price={'N2000'}
											discount='Get 20% off'
										/>
									);
								}
								return null;
							})
						) : (
							<h1>loading...</h1>
						)}
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}

export default HomePage;
