import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Community } from './pages/Community'
import { Home } from './pages/Home'

export function Router(){
  return(
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<Home />} />
        <Route path='/community' element={<Community />} />
      </Route>
    </Routes>
  )
}