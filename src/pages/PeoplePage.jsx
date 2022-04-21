import { useState, useEffect } from 'react'
import SWAPI from '../services/SWAPI'


const PeoplePage = () => {
	const [people, setPeople] = useState([])
	
	const getPeople = async () => {
		const data = await SWAPI.getPeople()
		setPeople(data.results)
	}

	useEffect(() => {
		getPeople()
	}, [people])


	return (
		<>
			<h2>People</h2>
			<ol>
				{people.map((person, index) => (
					<li key={index}>{person.name}</li>
				))}
			</ol>
		</>
	)
}

export default PeoplePage
