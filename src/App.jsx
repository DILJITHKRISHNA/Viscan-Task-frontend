import { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import UserRoutes from './Routes/UserRoutes';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

  <Router>
    <Routes>
      <Route path='/*' element={<UserRoutes/>}/>
    </Routes>
  </Router>

    </>
  )
}

export default App
