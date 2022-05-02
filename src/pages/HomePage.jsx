import { Link } from 'react-router-dom'


const HomePage = () => {
	return (
		<div>
			<h1>Star Wars information...</h1>
			<div className="home-container">
				<Link to="/films">
					Go to all Star Wars films
				</Link>
				<Link to="/people">
					Check out all characters
				</Link>
			</div>
		</div>
	)
}

export default HomePage
