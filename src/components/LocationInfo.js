import "../style.css"
const LocationInfo = ({ name, type, dimension, residents }) => {
    return (<div className="location-box">   
             <h3>{name}</h3>
             <p>Type: {type}</p>
             <p>Dimension: {dimension}</p>
             <p>Residents: {residents}</p>
           </div>)
}

export default LocationInfo