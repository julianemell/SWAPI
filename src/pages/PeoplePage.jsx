import { useCallback, useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'

import SWAPI from '../services/SWAPI'
import {getIdFromUrl} from '../helpers/getID'
import PeopleOverview from '../components/PeopleOverview'
//import { useSearchParams } from 'react-router-dom'

const PeoplePage = () => {
	const [people, setPeople] = useState([])
	const [page, setPage] = useState(1)
	const [nextPage, setNextPage] = useState()
	const [previousPage, setPreviousPage] = useState()
	/* const [pageParams, setPageParams] = useSearchParams() */

	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	const [isError, setIsError] = useState(false)
	
	/* pageParams.get('page') */
	
	const getPeople = useCallback(async (page = 1) => {
		setLoading(true)
		try {
			const data = await SWAPI.getPeople(page)
			setPeople(data.results)
			setNextPage(data.next)
			setPreviousPage(data.previous)
			setPage(page)
			/* setPageParams({ page: page }) */

			setIsError(false)
			setError(null)
		} catch (err) {
			setError(err)
			setIsError(true)
		} finally {
			setLoading(false)
		}
	}, [])

	useEffect (() => {
		getPeople(page)
		
	}, [page, getPeople])

	return (
		<>
			<h2>Star Wars characters</h2>
			<div className="overview">
				{isError && (
					<p>Sorry could not fetch the people: {error.message}</p>
				)}

				{loading && (
					<p>Loading...</p>
				)}

				{people && !loading && (
					people.map((person) => (
						<div>
							<PeopleOverview person={person} key={getIdFromUrl(person.url)}/>
						</div>
					))
				)}
			</div>
			<div className="prev-next-btns">
				<Button
					disabled={previousPage === null}
					onClick={()=> setPage(prevValue => prevValue - 1) }
					className="btn"
				>Previous</Button>
				
				<div className="pagenumber">{page}</div>
				
				<Button
					disabled={nextPage === null}
					onClick={()=> setPage(prevValue => prevValue + 1) }
					className="btn"
				>Next</Button>
				
			</div>
		</>
	)
}

export default PeoplePage
