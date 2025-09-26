
import './App.css';
import About from './components/About';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Stats from './components/Stats';
import Footer from './components/Footer';
import Skills from './components/Skills';

function App() {
  return (
   <div className="App">
    <Header />
    <Hero ></Hero>
    <About />
    <Projects />
    <Experience />
    <Skills />
    <Stats />
    <Footer />
   </div>
  );
}

export default App;
