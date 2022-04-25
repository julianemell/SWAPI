import { useState, useEffect } from 'react'
import SWAPI from '../services/SWAPI'
import PeopleOverview from '../components/PeopleOverview'
import Button from 'react-bootstrap/Button'
import { useSearchParams } from 'react-router-dom'

const PeoplePage = () => {
	const [people, setPeople] = useState([])
	const [page, setPage] = useState(1)
	const [nextPage, setNextPage] = useState()
	const [previousPage, setPreviousPage] = useState()
	const [pageParams, setPageParams] = useSearchParams()

	const queryPage = pageParams.get('page')
	
	const getPeople = async (page = 1) => {
		const data = await SWAPI.getPeople(page)
		setPeople(data.results)
		setNextPage(data.next)
		setPreviousPage(data.previous)
		setPage(page)
		setPageParams({ page: page })
	}

	useEffect(() => {
		getPeople()
	}, [])

	useEffect (() => {
		getPeople(page)
	}, [page])


	return (
		<>
			<h2>People</h2>
			<div className="overview">
				{people.map((person) => (
					<div>
						<PeopleOverview person={person}/>
						{/* <li key={index}>{person.name}</li> */}
					</div>
				))}
			</div>
			<div className="prev-next-btns">
				<Button
					disabled={previousPage === null}
					onClick={()=> setPage(prevValue => prevValue - 1) }
					className="btn-brown"
					>Previous</Button>
				
				<div className="pagenumber">{page}</div>
				
				<Button
					disabled={nextPage === null}
					onClick={()=> setPage(prevValue => prevValue + 1) }
					className="btn-brown"
					>Next</Button>
				
			</div>
		</>
	)
}

export default PeoplePage
