import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { selectAllPost } from './features/postSlice';
import NavBar from './components/Navbar';
import Main from './pages/Main';


const App = () => {
  const postAll = useSelector(selectAllPost);
  return (
    <>
      <NavBar
        postAll={postAll}
      />
      <Routes>

        <Route path='/' element={
          <Main
            postAll={postAll}
          />
        } />



      </Routes>

    </>

  )
}

export default App;