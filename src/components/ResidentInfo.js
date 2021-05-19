import "../style.css"
import axios from "axios"
 import { useEffect, useState } from "react"

 const ResidentInfo = ({url}) => {
     const [resident, setResident] = useState('')

     useEffect(() => {
         const getResidents = async () => {
             const data = await axios(url);
             setResident(data.data)
             console.log(data)
         };
         getResidents()
     }, [url]);
    
     if(!resident) return null;
     return( 
         <div className="container-resident">
         <div className="row">
             <div className="col-md-4">
             <img className="img-card" src={resident.image} alt="rick and morty" />
             </div>
             <div className="card-body">
             <p>{resident.name}</p>
             <p>{resident.status}</p>
             <p>{resident.origin.name}</p>
             <p>Number of episodes: {resident.episode.length}</p>
             </div>
         </div>
         </div>
     ) }

 export default ResidentInfo