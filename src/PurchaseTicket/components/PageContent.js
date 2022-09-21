import React from 'react';
import Button from '../../components/Button';
import './PageContent.css';
import PurchaseSummary from './PurchaseSummary';
import EventInfo from './../../Event/components/EventInfo';
import OrganizerDescription from '../../components/OrganizerDescription';

function PageContent() {
	return (
		<div className='page-content-container'>
			<PurchaseSummary titleState={true} />
			<div className='ticket-action-btn'>
				<div>
					<Button variation={'secondary'} title='Download ticket' />
				</div>
				<div>
					<Button variation={'primary'} title='Share Event' />
				</div>
			</div>
			<EventInfo
				eventDescription={`The play, "Pelumi," is a musical love story that revolves around Pelumi, a woman who was in a relationship with Adigun, a man with direction and purpose, but felt pressured by her mother to find love with someone else because of her mother's wealth and availability. You won’t want to miss this show on this year valentine.`}
			/>
			<OrganizerDescription />
		</div>
	);
}

export default PageContent;
