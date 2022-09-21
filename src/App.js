import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Home/HomePage';
import Event from './Event';
import PurchaseTicket from './PurchaseTicket/PurchaseTicket';
import ConfirmTicket from './ConfrimTicket/ConfirmTicket';

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/event/:eventId' element={<Event />} />
					<Route path='/event/:eventId/purchase' element={<PurchaseTicket />} />
					<Route path='/ticket/:ticketId' element={<ConfirmTicket />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
