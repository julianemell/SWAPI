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
const getPeople = async (page) => {
	const res = await axios.get(`${BASE_URL}/people/?page=${page}`)
	return res.data
}

//GET a single person
const getPerson = async (id) => {
	const res = await axios.get(`${BASE_URL}/people/${id}`)
	return res.data
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
	getFilms,
	getPeople,
	getFilm,
	getPerson,
}