
import { Route, Routes } from 'react-router-dom';
import './App.css';
import PageBackground from './components/PageBackground/PageBackground';
import SignIn from './pages/SignIn/SignIn';
import HomePage from './pages/HomePage/HomePage';
import Streaming from './pages/StreamingPage/Streaming';
import Video from './components/Video/Video';
import Play from './components/Play/Play';



function App() {
  

  return (
    <>
      <Routes>
        <Route path='page' element={<PageBackground />}>
          <Route path='signin' element={<SignIn />} />
        </Route>

        <Route path='/' element={<HomePage />} />
        <Route path='streaming' element={<Streaming />} />
        <Route path='/video/:id' element={<Video/>} />
        <Route path='/play' element={<Play/>} />
      </Routes>

    </>
  )
}

export default App
