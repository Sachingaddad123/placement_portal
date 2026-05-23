import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Students from './pages/Students'
import Companies from './pages/Companies'
import Jobs from './pages/Jobs'
import Applications from "./pages/Applications";
import Profile from './pages/Profile'
import Resume from './pages/Resume'
import Notifications from './pages/Notifications'
import News from "./pages/News";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path='/' element={<Login />} />

        <Route path='/dashboard' element={<Dashboard />} />

        <Route path='/students' element={<Students />} />

        <Route path='/companies' element={<Companies />} />

        <Route path='/jobs' element={<Jobs />} />

        <Route path='/profile' element={<Profile />} />

        <Route path='/notifications' element={<Notifications />} />

        <Route path='/resume' element={<Resume />} />

        <Route path="/applications" element={<Applications />} />

        <Route path="/news" element={<News />} />

      </Routes>

    </BrowserRouter>
  )
}

export default App