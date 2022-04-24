import Button from 'react-bootstrap/Button'
import { Link/* , useParams */ } from 'react-router-dom'
import {getIdFromUrl} from '../helpers/getID'


const PeopleOverview = ({ person }) => {
	//const { id } = useParams()
	const id = getIdFromUrl(person.url)


	return (
		<>
			<h2>{person.name}</h2>
			<ul>
				<li>Belongs to {person.starships.length} starships</li>
				<li>Has beautiful {person.eye_color} eyes and {person.skin_color} skin</li>
			</ul>
			<Button className="btn-brown" person={person} as={Link} to={`/people/${id}`}>Read more about {person.name}</Button>
		</>
	)
}

export default PeopleOverview
