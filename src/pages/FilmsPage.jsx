import { useEffect, useState } from 'react'
import SWAPI from '../services/SWAPI'
import FilmOverview from '../components/FilmOverview'
import Button from 'react-bootstrap/Button'


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
			<h2>Star wars films</h2>
			<div className="overview">
				{films.map(film => (
					<div>
						<FilmOverview film={film}/>
					</div>
				))}
			</div>
			<div className="prev-next-btns">
				
				<Button
					disabled={films.page === null}
					onClick={()=> setPage(prevValue => prevValue - 1) }
					className="btn-brown"
					>Previous</Button>
				
				<div className="pagenumber">{page}</div>
				
				<Button
					disabled={page + 1 >= films.nbPages}
					onClick={()=> setPage(prevValue => prevValue + 1) }
					className="btn-brown"
					>Next</Button>
				
			</div>

		</>
	)
}

export default FilmsPage
