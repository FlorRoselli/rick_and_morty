import "../style.css"
import { useState } from "react"

const SearchBox = ({ handleSearch }) => {

    const [value, setValue] = useState('')


    return (
    <>
      <div className="search-container">
        <div className="search-box">
        <input value={value} placeholder=" Search location" onChange={(e) => setValue(e.target.value)} />
        <button className="button" 
           onClick={() => {
            handleSearch(value)
           }}
        >
           Search
        </button>
      </div>
      </div>
    </>
    )
}

export default SearchBox