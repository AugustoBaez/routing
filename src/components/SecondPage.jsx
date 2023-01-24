import React from 'react'
import { useParams } from 'react-router-dom'

const SecondPage = () => {

    const {id} = useParams()

  return (
    <div>The number is: {id}</div>
  )
}

export default SecondPage