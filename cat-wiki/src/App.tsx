import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import BreedDetailPage from './pages/BreedDetail'
import Home from './pages/Home'

function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="/breed/:breedId" element={<BreedDetailPage />}></Route>
      </Routes>
    </Layout>
  )
}

export default App
