
const baseUrl = 'https://rickandmortyapi.com/api/'

const LocationContainer = async (name) => {
    const promise = fetch(`${baseUrl}location/?name=${name}`)

 
  const res = await promise
  return await res.json()
}

export default LocationContainer