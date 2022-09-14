import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import BreedDetailPage from './pages/BreedDetail'
import Home from './pages/Home'
import MostSearchedBreed from './pages/MostSearchedBreed'

function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/breed/:breedId" element={<BreedDetailPage />}></Route>
        <Route path="/most-searched-breeds" element={<MostSearchedBreed />}></Route>
      </Routes>
    </Layout>
  )
}

export default App
