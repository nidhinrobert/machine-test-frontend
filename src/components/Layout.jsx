import React from 'react'
import Question from './Question'
import { Routes, Route} from 'react-router-dom';


const Layout = () => {
  return (
    <div>
        
        <Routes>
        <Route path="/" element={<Question />} />
        </Routes>
    </div>
  )
}

export default Layout