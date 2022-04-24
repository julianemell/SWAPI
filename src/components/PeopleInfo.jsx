import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import SWAPI from '../services/SWAPI'
import {getIdFromUrl} from '../helpers/getID'


const PeopleInfo = ({person}) => {
	const [personn, setPersonn] = useState()
	//const { id } = useParams()
	const id = getIdFromUrl(person.url)
	
	const getPerson = async () => {
		const data = await SWAPI.getPerson(id)
		setPersonn(data.results)
		console.log(data.results)
	}

	useEffect(() => {
		getPerson(id)
	}, [id])

	return (
		<div>
			<h2>{id}</h2>
			
		</div>
	)
}

export default PeopleInfo
