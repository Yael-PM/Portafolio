import './App.css';
import HeroSection from './components/HeroSection';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Experiencia from './components/Experiencia';
import ContactMe from './components/ContacMe';

function App() {
  return (
    <div className="App">
      <HeroSection></HeroSection>
      <AboutMe></AboutMe>
      <Projects></Projects>
      <Experiencia></Experiencia>
      <ContactMe></ContactMe>
    </div>
  );
}

export default App;
