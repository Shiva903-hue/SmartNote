// import { useState } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import SignUp from './Components/SignUp';
import TempNote from './Components/Notes/TempNote';
import Main from './Components/DashBoards/Main';
import SignIn from './Components/SignIn';
import PreviewFile from './Components/Notes/PreviewFile';

// import Wnav from './Components/DashBoards/Wnav';
import Workspaces from './Components/DashBoards/Workspaces';

function App() {
  // const [wopen, setWopen] = useState(false);

  return (
    <BrowserRouter>
      {/* <Wnav setWopen={setWopen} /> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/editor" element={<TempNote />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/create" element={<SignUp />} />
        <Route path="/main" element={<Main />} />
        <Route path="/preview" element={<PreviewFile />} />
        <Route path="/workspaces" element={<Workspaces />} />
      </Routes>
      {/* Optionally render Workspaces always, or only on certain routes */}
      {/* <Workspaces wopen={wopen} setWopen={setWopen} /> */}
    </BrowserRouter>
  );
}

export default App;