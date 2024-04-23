
import { Route, Routes } from 'react-router-dom';
import './App.css';
import PageBackground from './components/PageBackground/PageBackground';
import SignIn from './pages/SignIn/SignIn';
import HomePage from './pages/HomePage/HomePage';

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<PageBackground />}>
          <Route path='signin' element={<SignIn />} />
        </Route>

        <Route path='home' element={<HomePage />} />


      </Routes>

    </>
  )
}

export default App
