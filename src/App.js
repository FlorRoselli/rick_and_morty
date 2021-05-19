import './App.css';
import './style.css';
import { useEffect, useState } from 'react';
import LocationContainer from './components/LocationContainer';
import SearchBox from './components/SearchBox';
import LocationInfo from './components/LocationInfo';
import ResidentInfo from './components/ResidentInfo';

function App() {
  const [locationName, setLocationName] = useState('')
  const [locationType, setLocationType] = useState('')
  const [locationDimension, setLocationDimension] = useState('')
  const [locationNumOfResidents, setLocationNumOfResidents] = useState('')
  const [locationResidents, setLocationResidents] = useState('')
  const [queryTerm, setQueryTerm] = useState('')

  useEffect(() => {
    if (queryTerm) {
     LocationContainer(queryTerm).then((data) =>{
        console.log(data)
        setLocationName(data.results[0].name)
        setLocationType(data.results[0].type)
        setLocationDimension(data.results[0].dimension)
        setLocationNumOfResidents(data.results[0].residents.length)
        setLocationResidents(data.results[0].residents)
        
      })
    }
  }, [queryTerm])

  useEffect(() => {
    const getLocationById = async (id) => {
      const baseUrl = 'https://rickandmortyapi.com/api/'

      const promise = fetch(`${baseUrl}location/${id}`)
  
   
    const res = await promise
    return await res.json()
  }
  getLocationById(Math.floor(Math.random() * 108) + 1).then(data => {
    setLocationName(data.name)
    setLocationType(data.type)
    setLocationDimension(data.dimension)
    setLocationNumOfResidents(data.residents.length)
    setLocationResidents(data.residents)
  })

  },[])
  
  return (
    <div className="App">
      <header className="App-header">
      <div className="container">
        <div className="title-container">
          <h1 className="title">Rick and Morty</h1>
        </div>
        <SearchBox  handleSearch={setQueryTerm}/>
        <div >
           {<LocationInfo 
             name={locationName} 
             type={locationType} 
             dimension={locationDimension} 
             residents={locationNumOfResidents}
        />}
           { 
             locationResidents ? (
             locationResidents.map((url) => (
              <ResidentInfo url={url} />
            ))
            ): (<p></p>)
          }
        </div>
      </div>
        
      </header>
    </div>
  );
}

export default App;
