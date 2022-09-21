import React, { useState } from 'react';
import ConfirmModal from '../ConfrimTicket/components/ConfirmModal';
import Button from './Button';
import './navbar.css';
import Overlay from './Overlay';
import logo from './Pantiket.svg';

function Navbar() {
	const [modal, setModal] = useState(false);
	return (
		<>
			{modal ? (
				<Overlay>
					<ConfirmModal setModal={setModal} />
				</Overlay>
			) : null}
			<nav className='navbar'>
				<div className='nav-logo'>
					<img src={logo} alt='nav-logo' />
				</div>
				<div className='cta-container'>
					<Button
						onclick={() => setModal(!modal)}
						variation='primary'
						title={'Confirm Ticket'}
					/>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
