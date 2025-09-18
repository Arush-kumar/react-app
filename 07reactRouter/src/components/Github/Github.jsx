import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
      const data = useLoaderData()
//   const [data, setData] = useState([]) 
//   useEffect(() => {
//     fetch('https://api.github.com/users/Arush-kumar')
//     .then(response => response.json())
//     .then(data => {
//       console.log(data); 
//       setData(data)
//     })
// })

  return (
    <div className='bg-green-500 text-center text-3xl m-4 p-4 rounded-lg text-white'>
      Github Followers: {data.followers}
      <img src={data.avatar_url} alt="Git picture" width={300} className='rounded-lg'/>
      </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/Arush-kumar')
  return response.json()
}
