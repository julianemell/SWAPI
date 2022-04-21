import { useState, useEffect } from 'react'
import SWAPI from '../services/SWAPI'
import PeopleOverview from '../components/PeopleOverview'

const PeoplePage = () => {
	const [people, setPeople] = useState([])
	
	const getPeople = async () => {
		const data = await SWAPI.getPeople()
		setPeople(data.results)
	}

	useEffect(() => {
		getPeople()
	}, [])


	return (
		<>
			<h2>People</h2>
			<div className="peopleoverview">
				{people.map((person) => (
					<div>
						<PeopleOverview person={person}/>
						{/* <li key={index}>{person.name}</li> */}
					</div>
				))}
			</div>
		</>
	)
}

export default PeoplePage
