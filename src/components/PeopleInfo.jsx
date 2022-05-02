import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

import SWAPI from '../services/SWAPI'
import { getIdFromUrl } from '../helpers/getID'


const PeopleInfo = () => {
	const [person, setPerson] = useState([])
	const [films, setFilms] = useState([])
	const { id } = useParams()

	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	const [isError, setIsError] = useState(false)

	
	useEffect(() => {
		const getPerson = async () => {
			setLoading(true)
			try {
				const data = await SWAPI.getPerson(id)
				setPerson(data)
				setFilms(data.films)
				setIsError(false)
				setError(null)
			} catch (err) {
				setError(err)
				setIsError(true)
			} finally {
				setLoading(false)
			}
		}
		getPerson(id)
	}, [id])

	return (
		<>
			{isError && (
				<p>Sorry could not fetch the person: {error.message}</p>
			)}

			{loading && (
				<p>Loading...</p>
			)}

			{person && (
				<div>
					<h2>{person.name}</h2>
					<ul>
						<li><strong>Height: </strong>{person.height} cm</li>
						<li><strong>Weight: </strong>{person.mass} kg</li>
						<li><strong>Hair colour: </strong>{person.hair_color}</li>
						<li><strong>Skin colour: </strong>{person.skin_color}</li>
						<li><strong>Eye colour: </strong>{person.eye_color}</li>
						<li><strong>Born in: </strong>year {person.birth_year}</li>
						<li><strong>Gender: </strong>{person.gender}</li>
					</ul>
					<h2>Films {person.name} is in:</h2>
					<ul>
						{films.map(film => (
							<Link to={`/films/${getIdFromUrl(film)}`} key={getIdFromUrl(film)}>
								<li>Film {getIdFromUrl(film)}</li>
							</Link>
						))}
					</ul>
				</div>
			)}			
		</>
	)
}

export default PeopleInfo
