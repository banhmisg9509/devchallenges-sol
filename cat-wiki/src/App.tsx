import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'

function App() {
  return (
    <Layout>
      <Routes>
        <Route index element={<Home />}></Route>
      </Routes>
    </Layout>
  )
}

export default App
