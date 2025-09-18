import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
  const {userid} = useParams()
  return (
    <div className='bg-teal-600 text-3xl p-4 rounded-lg text-white'>
      User: {userid}
    </div>
  )
}

export default User
