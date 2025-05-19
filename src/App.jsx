// import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import SignUp from './Components/SignUp';
import TempNote from './Components/Notes/TempNote';
import Main from './Components/DashBoards/Main';
import SignIn from './Components/SignIn';
import PreviewFile from './Components/Notes/PreviewFile';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/editor" element={<TempNote />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/create" element={<SignUp />} />
          <Route path="/main" element={<Main />} />
          <Route path='/preview' element={<PreviewFile/>}/>
          {/* <Route path="/:id" element={<TempNote />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App


