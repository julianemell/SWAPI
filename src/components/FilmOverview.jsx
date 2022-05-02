import { Link } from 'react-router-dom'
import { getIdFromUrl } from '../helpers/getID'


const FilmOverview = ({ film }) => {
	const id = getIdFromUrl(film.url)

	return (
		<>
			<h2>{film.title}</h2>
			<ul>
				<li>...This film involves {film.planets.length} planets and {film.starships.length} starships</li>
			</ul>
			
			<Link className="link" film={film} to={`/films/${id}`}>Find out more</Link>

		</>
	)
}

export default FilmOverview
