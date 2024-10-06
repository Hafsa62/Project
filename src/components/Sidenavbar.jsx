import React from 'react'
import { Link, useLocation } from 'react-router-dom'







function Sidenavbar() {

  const location = useLocation();
  return (
    <div id='sidenavbar'>
      <h1 className='text-white text-3xl font-bold text-center'>
        Navigation
      </h1>
      <ul>
        <li className={`'text-white text-center my-10 p-5 text-xl hover:bg-red-300 bg-blue-300' ${
          location.pathname == "/" ? "bg-red-500 hover:bg-red-300" : ""} `}>
          <Link to="/">Home</Link>
                  </li>
         
      </ul>
    </div>
  )
}

export default Sidenavbar
