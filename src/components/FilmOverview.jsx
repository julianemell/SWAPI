import { Link } from 'react-router-dom'
import { getIdFromUrl } from '../helpers/getID'


const FilmOverview = ({ film }) => {
	const id = getIdFromUrl(film.url)

	return (
		<>
			<h2>{film.title}{film.episode_id}</h2>
			<ul>
				<li>This film involves {film.planets.length} planets</li>
			</ul>
			
			<Link className="btn-brown" film={film} to={`/films/${id}`}>Read more</Link>

		</>
	)
}

export default FilmOverview
