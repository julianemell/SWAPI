import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Routes, Route } from 'react-router-dom'


import Navigation from './components/Navigation';
import Container from 'react-bootstrap/Container'


const App = () => {
	return (
		<div id="App">
			
			<Navigation />

			<Container>
				<Routes>
					<Route path="/" element={<HomePage />} />
				</Routes>
			</Container>

		</div>
	);
}

export default App;
