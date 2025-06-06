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
import CreatePost from './components/create-post';
import PriceMarquee from './components/PriceMarquee';
import Projects from './components/projects';

function App() {
  return (
    <Router>
      <div className="flex flex-col h-full overflow-y-auto">
      <PriceMarquee />
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/gallery" element={<Gallery />} /> */}
            <Route path="/blogs/:id" element={<Blog />} />
            <Route path="/contact-us" element={<GetInTouch />} />
            <Route path="/swags" element={<Swags />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/projects" element={<Projects />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
