import Button from 'react-bootstrap/Button'
import { Link, useParams } from 'react-router-dom'


const FilmOverview = ({ film }) => {
	const { id } = useParams()
	
	console.log("id?",id)

	return (
		<>
			<h2>{film.title}{film.episode_id}</h2>
			<ul>
				<li>This film involves {film.planets.length} planets</li>
			</ul>
			<Button className="btn-brown" as={Link} to={`/films/${id}`} key={id}>Read more</Button>
		</>
	)
}

export default FilmOverview
