import { useEffect, useState } from 'react'
/* import SWAPI from '../services/SWAPI' */

const FilmsPage = () => {
	const [films, setFilms] = useState()

	const arrayoffilms = films.results
	// Get films from api

	// Get films from api when component is first mounted
	useEffect(() => {
		fetch('https://swapi.dev/api/films')
			.then(response => response.json())
			.then(json => setFilms(json))
		console.log(films)
	}, [films])
	/* console.log(films[3]['results']) */

	return (
		<>
			<h2>Films</h2>
			<ol>
				{arrayoffilms.map(film => (
					<li key={film.episode_id}>{film.title}</li>
				))}
			</ol>
		</>
	)
}

export default FilmsPage
