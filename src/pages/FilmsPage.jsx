import { useEffect, useState } from 'react'
import SWAPI from '../services/SWAPI'
import FilmOverview from '../components/FilmOverview'

const FilmsPage = () => {
	const [films, setFilms] = useState([])
	const [page, setPage] = useState(1)
	
	const getFilms = async () => {
		const data = await SWAPI.getFilms()
		setFilms(data.results)
	}

	useEffect(() => {
		getFilms()
	}, [])


	return (
		<>
			<h2>Films</h2>
			<div className="overview">
				{films.map(film => (
					<div>
						<FilmOverview film={film}/>
					</div>
				))}
			</div>
			<div>
				<div>
					<Button
					disabled={films.page === null}
					onClick={()=> setPage(prevValue => prevValue - 1) }
					>Previous</Button>
				</div>
				<div>{page}</div>
				<div>
				<Button
				disabled={page + 1 >= films.nbPages}
					onClick={()=> setPage(prevValue => prevValue + 1) }
					>Previous</Button>
				</div>
			</div>

		</>
	)
}

export default FilmsPage
