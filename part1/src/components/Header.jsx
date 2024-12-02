import React from 'react'

const Header = ({course, textToDisplay}) => {
  return (
    <>
      <h1>{course}</h1>
      <p>{textToDisplay}</p>
    </>
  )
}

export default Header