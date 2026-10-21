import { Route, Routes } from 'react-router-dom'
import './App.css'
import SiteLayout from './components/SiteLayout.jsx'
import HomePage from './pages/HomePage.jsx'

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  )
}

export default App
