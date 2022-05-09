import React from 'react'

function NotEnoughLetters(props) {
  return (
    <div className ="btn btn-dark" style={{fontWeight: 'bold', padding: '0.7rem 1rem 0.7rem 1rem', backgroundColor: 'black'}}>{props.name}</div>
  )
}

export default NotEnoughLetters