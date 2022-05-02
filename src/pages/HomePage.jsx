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
			<div className="gif-holder">
				<img src="https://2.bp.blogspot.com/-538XtgiAmKI/WQqCpEKLtUI/AAAAAAAHWNY/qwP86AejsaYvq8DQz8zxthWTwIyBTdI4wCLcB/s1600/AS002591_02.gif" alt=""/>
			</div>
		</div>
	)
}

export default HomePage
