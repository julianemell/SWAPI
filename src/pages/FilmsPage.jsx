import { useEffect, useState } from 'react'
import SWAPI from '../services/SWAPI'
import FilmOverview from '../components/FilmOverview'
import Button from 'react-bootstrap/Button'
//import {getIdFromUrl} from '../helpers/getID'

const FilmsPage = () => {
	const [films, setFilms] = useState([])
	const [page, setPage] = useState(1)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	const [isError, setIsError] = useState(false)
	
	const getFilms = async () => {
		setLoading(true)
		try {
			const data = await SWAPI.getFilms()
			setFilms(data.results)

			//ta bort tidigare fel
			setIsError(false)
			setError(null)
		} catch (err) {
			setError(err)
			setIsError(true)
		} finally {
			setLoading(false)
		}
		
	}

	useEffect(() => {
		getFilms()
	}, [])


	return (
		<>
			<h2>Star wars films</h2>
			<div className="overview">
				{isError && (
					<p>Sorry could not fetch the films: {error.message}</p>
				)}

				{loading && (
					<p>Loading...</p>
				)}
				{films.map((film) => (
					<div>
						<FilmOverview film={film} key={film.episode_id}/>
					</div>
				))}
			</div>
			<div className="prev-next-btns">
				
				<Button
					disabled={films.page === null}
					onClick={()=> setPage(prevValue => prevValue - 1) }
					className="btn"
					>Previous</Button>
				
				<div className="pagenumber">{page}</div>
				
				<Button
					disabled={page + 1 >= films.nbPages}
					onClick={()=> setPage(prevValue => prevValue + 1) }
					className="btn"
					>Next</Button>
				
			</div>

		</>
	)
}

export default FilmsPage
