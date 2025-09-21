import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/appContext'

const Footer = () => {

    const {phone} = useContext(AppContext)

  return (
    <div>
        <h2>Footer</h2>
        <h2>Phone: {phone}</h2>
    </div>
  )
}

export default Footer