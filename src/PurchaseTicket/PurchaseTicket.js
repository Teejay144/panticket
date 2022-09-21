import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Banner from '../Event/components/Banner';
import PageContent from './components/PageContent';

function PurchaseTicket() {
	return (
		<>
			<Navbar />
			<Banner />
			<PageContent />
			<Footer />
		</>
	);
}

export default PurchaseTicket;
