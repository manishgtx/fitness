import {useState} from 'react'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard';
import { Routes,Route } from 'react-router-dom';
import ProtectedRoute from './pages/ProtectedRoute'
function App() {
  const [userDetails,setUserDetails] = useState({})
  return (
    <Routes>
      <Route path='/' element={<Login setUserDetails={setUserDetails}/>}/>
      <Route path='/dashboard' element={<ProtectedRoute userDetails={userDetails}><Dashboard userDetails={userDetails}/></ProtectedRoute>}/>
    </Routes>
  );
}

export default App;
