
import { Route, Routes } from 'react-router-dom';
import './App.css';
import PageBackground from './components/PageBackground/PageBackground';
import SignIn from './pages/SignIn/SignIn';
import HomePage from './pages/HomePage/HomePage';
import Streaming from './pages/StreamingPage/Streaming';
import Video from './components/Video/Video';



function App() {
  

  return (
    <>
      <Routes>
        <Route path='page' element={<PageBackground />}>
          <Route path='signin' element={<SignIn />} />
        </Route>

        <Route path='home' element={<HomePage />} />
        <Route path='streaming' element={<Streaming />} />
        <Route path='video' element={<Video/>} />

      </Routes>

    </>
  )
}

export default App
