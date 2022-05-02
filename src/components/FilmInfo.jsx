import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

import SWAPI from '../services/SWAPI'
import { getIdFromUrl } from '../helpers/getID'

const FilmInfo = () => {
	const [film, setFilm] = useState([])
	const [characters, setCharacters] = useState([])
	const { id } = useParams()

	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	const [isError, setIsError] = useState(false)

	useEffect(() => {
		const getFilm = async () => {
			setLoading(true)
			try {
				const data = await SWAPI.getFilm(id)
				setFilm(data)
				setCharacters(data.characters)
				setIsError(false)
				setError(null)
			} catch (err) {
				setError(err)
				setIsError(true)
			} finally {
				setLoading(false)
			}
		}
		getFilm()
	}, [id])

	return (
		<>
			{isError && (
				<p>Sorry could not fetch the person: {error.message}</p>
			)}

			{loading && (
				<p>Loading...</p>
			)}

			{film && (
				<div>
				<h1>{film.title}</h1>
				<ul>
					<li><strong>Film in order: </strong>{film.episode_id}</li>
					<li><strong>Opening crawl: </strong>{film.opening_crawl}</li>
					<li><strong>Director: </strong>{film.director}</li>
					<li><strong>Producer: </strong>{film.producer}</li>
					<li><strong>Release date: </strong>{film.release_date}</li>
				</ul>

				<h2>Characters that appear in {film.title}:</h2>
				<ul>
					{characters.map((character, index) => (
						<Link to={`/people/${getIdFromUrl(character)}`} key={index}>
							<li className="link">Character {getIdFromUrl(character)}</li>
						</Link>
					))}
				</ul>
				</div>
			)}
		</>
	)
}

export default FilmInfo
