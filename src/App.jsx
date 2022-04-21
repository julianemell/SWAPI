import { Routes, Route } from 'react-router-dom'

import Navigation from './components/Navigation';
import Container from 'react-bootstrap/Container'
import FilmsPage from './pages/FilmsPage'
import HomePage from './pages/HomePage'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';

const App = () => {
	return (
		<div id="App">
			
			<Navigation />

			<Container>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/films" element={<FilmsPage />} />

				</Routes>
			</Container>

		</div>
	);
}

export default App;
