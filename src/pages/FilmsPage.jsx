import { useEffect, useState } from 'react'
import SWAPI from '../services/SWAPI'

const FilmsPage = () => {
	const [films, setFilms] = useState([])
	
	const getFilms = async () => {
		const data = await SWAPI.getFilms()
		setFilms(data.results)
	}

	useEffect(() => {
		getFilms()
	}, [films])


	return (
		<>
			<h2>Films</h2>
			<ol>
				{films.map(film => (
					<li key={film.episode_id}>{film.title}</li>
				))}
			</ol>
		</>
	)
}

export default FilmsPage
