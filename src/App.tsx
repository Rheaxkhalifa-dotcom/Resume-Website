import Nav from './components/Nav';
import Hero from './components/Hero';
import Snapshot from './components/Snapshot';
import Timeline from './components/Timeline';
import Building from './components/Building';
import Skills from './components/Skills';
import Direction from './components/Direction';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-[#181818] text-white">
      <Nav />
      <Hero />
      <Snapshot />
      <Timeline />
      <Building />
      <Skills />
      <Direction />
      <Contact />
    </div>
  );
}
