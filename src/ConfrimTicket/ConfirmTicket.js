import React, { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Overlay from '../components/Overlay';
import Banner from '../Event/components/Banner';
import PageContent from './components/PageContent';

function ConfirmTicket() {
	const [modal, setModal] = useState(false);

	return (
		<>
			{modal ? (
				<Overlay>
					<h1>Genrating Recipt</h1>
				</Overlay>
			) : null}
			<Navbar />
			<Banner />
			<PageContent setModal={setModal} />
			<Footer />
		</>
	);
}

export default ConfirmTicket;
