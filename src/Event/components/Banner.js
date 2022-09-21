import React from 'react';
import './banner.css';
function Banner({ eventDesc }) {
	return (
		<div className='banner'>
			{eventDesc ? (
				<>
					<img src={eventDesc?.image} alt='Event Banner' />
					<div className='banner-caption'>
						<div className='banner-title'>{eventDesc?.name}</div>
						<p className='banner-description'>
							{`A ${eventDesc?.category.name} by ${eventDesc?.organizer.name}`}
						</p>
					</div>
				</>
			) : (
				<h1>loading ...</h1>
			)}
		</div>
	);
}

export default Banner;
