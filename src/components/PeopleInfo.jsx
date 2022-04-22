import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import SWAPI from '../services/SWAPI'

const PeopleInfo = () => {
	const [person, setPerson] = useState()
	const { id } = useParams()
	
	const getPerson = async () => {
		const data = await SWAPI.getPerson(id)
		setPerson(data.results)
		console.log(data.results)
	}

	useEffect(() => {
		getPerson(id)
	}, [id])

	return (
		<div>
			<h2>{/* {person.name} */}</h2>
			
		</div>
	)
}

export default PeopleInfo
