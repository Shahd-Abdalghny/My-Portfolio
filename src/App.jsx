
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
function App() {

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
