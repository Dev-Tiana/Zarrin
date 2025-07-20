import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Blog from './pages/Blog'
import About from './pages/About'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import Footer from './components/Footer'
import RootLayout from './layout/RootLayout'
import NoteFound from './components/NoteFound'
import Contact from './pages/Contact'
import Singlepage from './components/Singlepage' 
import BlogLayout from './layout/BlogLayout'


const App = () => {

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path='blog' element={<BlogLayout />}>
        <Route index element={<Blog />} />
        <Route path=':id' element={<Singlepage/>} />
      </Route>
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
       <Route path='*' element={<NoteFound/>}/>
    </Route>
   
    )
)

  return (
    <div>
      <RouterProvider router={router} />
      
      
     
    </div>
  )
}

export default App