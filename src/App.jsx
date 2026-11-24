import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects';
import About from './components/About/About';
import Technologies from './components/Technologies/Technologies';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header/>
      <main>
        <Hero/>
        <Projects />
        <About/>
        <Technologies/>
        <Contact/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
