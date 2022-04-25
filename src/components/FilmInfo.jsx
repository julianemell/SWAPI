import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

import SWAPI from '../services/SWAPI'
import { getIdFromUrl } from '../helpers/getID'


const FilmInfo = () => {
	const [film, setFilm] = useState([])
	const [characters, setCharacters] = useState([])
	const { id } = useParams()
	
	console.log("id:", id)
	console.log("film:", film)

	
	const getFilm = async () => {
		const data = await SWAPI.getFilm(id)
		setFilm(data)
		setCharacters(data.characters)
	}

	useEffect(() => {
		getFilm(id)
	}, [id])

	return (
		<div>
			<h2>{film.title}</h2>
			<ul>
				<li><strong>Film in order: </strong>{film.episode_id}</li>
				<li><strong>Opening crawl: </strong>{film.opening_crawl}</li>
				<li><strong>Director: </strong>{film.director}</li>
				<li><strong>Producer: </strong>{film.producer}</li>
				<li><strong>Release date: </strong>{film.release_date}</li>
			</ul>

			<h2>Characters that appear in {film.title}:</h2>
			<ul>
				{characters.map(character => (
					<Link to={`/people/${getIdFromUrl(character)}`}>
						<li>Character {getIdFromUrl(character)}</li>
					</Link>
				))}
			</ul>
		</div>
	)
}

export default FilmInfo
