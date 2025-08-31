
import { useEffect, useState } from 'react'
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import ScrollToTop from './components/ScrollToTop'
import Services from './components/Services'
import Skills from './components/Skills'
import Loading from './components/Loading'
function App() {
   const[loading,setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <Loading/>
    );
  }
  return (
    <>
    <NavBar/>
    <ScrollToTop/>
  <Header/>
  <About/>
  <Services/>
  <Projects/>
  <Skills/> 
  <Contact/>

  
  <Footer/>

    </>
  )
}

export default App
