import React from 'react'
import Rat from './Rat'

const MovieCard = ({el}) => {
  return (
    <div>
        <h1>{el.Title}</h1>
        <Rat rating={el.rating}/>
        <h1> {el.Description}</h1>
       
        <img src={el.PosterURL} width={'30%'} alt=""/>
       
    </div>
  )
}

export default MovieCard