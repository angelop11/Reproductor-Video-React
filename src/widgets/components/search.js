import React from 'react'
import './search.css'

// function Search(props){
//     return (
//         <form></form>
//     )
// }
const Search = (props) =>(
    <form 
        className="Search"
        onSubmit={props.handleSubmit}
    >
        <input 
            ref={props.setRef}
            type="text"
            placeholder="Busca tu video favorito"
            name="search"
            className="Search-input"
            //defaultValue="Luis Fonsi"
            onChange = {props.handleChange}
            value={props.value}
        />
    </form>
)

export default Search