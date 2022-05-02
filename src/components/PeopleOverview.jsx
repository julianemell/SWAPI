import { Link } from 'react-router-dom'
import {getIdFromUrl} from '../helpers/getID'

const PeopleOverview = ({ person }) => {
	const id = getIdFromUrl(person.url)

	return (
		<>
			<h2>{person.name}</h2>
			<ul>
				<li>...Appears in {person.films.length} Star Wars movies</li>
				<li>...Has beautiful {person.eye_color} eyes and {person.skin_color} skin</li>
			</ul>
			<Link 
				className="link" 
				person={person} 
				to={`/people/${id}`}
			>Read more about {person.name}</Link>
		</>
	)
}

export default PeopleOverview
