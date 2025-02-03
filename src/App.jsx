import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './components/home'
import Header from './components/header';
import Footer from './components/footer';
import GetInTouch from './components/get-in-touch';
import About from './components/about';
import Blog from './components/blog';
import Gallery from './components/gallery';
import NotFound from './components/not-found';
import Swags from './components/swags';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/bitnboard" element={<Home />} />
            <Route path="/bitnboard/about" element={<About />} />
            {/* <Route path="/gallery" element={<Gallery />} /> */}
            <Route path="/bitnboard/blogs/:id" element={<Blog />} />
            <Route path="/bitnboard/contact-us" element={<GetInTouch />} />
            <Route path="/bitnboard/swags" element={<Swags />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
