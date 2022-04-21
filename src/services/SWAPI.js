import axios from 'axios'

const BASE_URL = 'https://swapi.dev/api'

//GET all films
const getFilms = async () => {
	const res = await axios.get(`${BASE_URL}/films`)
	return res.data
}

//GET a single film
const getFilm = async (id) => {
	const res = await axios.get(`${BASE_URL}/films/${id}`)
	return res.data
}

//GET all people
const getPeople = async () => {
	const res = await axios.get('https://swapi.dev/api/people')
	return res.data
}

//GET a single person
const getPerson = async (id) => {
	const res = await axios.get(`${BASE_URL}/people/${id}`)
	return res.data
}

// eslint-disable-next-line
export default {
	getFilms,
	getPeople,
	getFilm,
	getPerson,
}