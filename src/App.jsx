// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Hero from './components/hero-section';
import About from './components/About';
import Whatwe from './components/whatwe';
import Service from './components/service';
import TestimonialsSection from './components/Testimonial';
import Team from './components/team';
import Ctx from './components/footer';

function App() {
  return (
   
      <main className='relative font-[eudoxus sans]'>
      <Navbar />
      <Hero />
      <About/>
      <Whatwe />
      <Service />
      <TestimonialsSection />
      <Team/>
        
        {/* <Routes>
          <Route path="/" element={<Hero />} /> {/* Home or Hero Section 
          {/* <Route path="/about" element={<About />} />
          <Route path="/what-we-do" element={<Whatwe />} />
          <Route path="/services" element={<Service />} />
          <Route path="/testimonials" element={<TestimonialsSection />} />
          <Route path="/team" element={<Team />} />
        </Routes> */}
        
        <Ctx />
      </main>
    // </Router>
  );
}

export default App;
