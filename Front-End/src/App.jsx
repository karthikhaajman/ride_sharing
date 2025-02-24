
import './App.css'
import RiderEntry from './components/Ridee/RiderEntry'
import RideDetails from './components/Ridee/RideDetails'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {
  
  return (
    <>
    <BrowserRouter>
     <Routes>
     <Route path='/' element={<RiderEntry />}></Route>
     <Route path='/rides' element={<RideDetails />}></Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
