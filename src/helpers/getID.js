//get ID function
//för att få ut id när vi kan länka vilka filmer personerna är med i  och tvärtom
// Film 1, Film 2 ....
//Character 1, Character 2 ....

export const getIdFromUrl = (url) => {
	// eslint-disable-next-line no-unused-vars
	const [_endpoint, id] = url
		.replace('https://swapi.dev/api/', '')
		.slice(0, -1)
		.split('/')

	return id
}

