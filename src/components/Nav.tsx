import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'About', href: '#snapshot' },
  { label: 'Experience', href: '#experience' },
  { label: "Building", href: '#building' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const handleClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#181818]/95 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <button
          onClick={() => handleClick('#hero')}
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 bg-yellow-400 rounded flex items-center justify-center">
            <span className="font-display font-800 text-[#181818] text-sm font-bold tracking-tight">RK</span>
          </div>
          <span className="text-white font-semibold text-sm hidden sm:block tracking-wide">
            Rhea Kalifa
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="text-gray-400 hover:text-white text-sm px-4 py-2 rounded-md transition-colors duration-200 hover:bg-white/5"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleClick('#contact')}
            className="ml-3 bg-yellow-400 text-[#181818] text-sm font-semibold px-5 py-2 rounded-md hover:bg-yellow-300 transition-colors duration-200"
          >
            Say Hello
          </button>
        </nav>

        <button
          className="md:hidden text-gray-400 hover:text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#1e1e1e] border-t border-white/5 px-6 py-4 flex flex-col gap-2">
          {links.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="text-gray-300 hover:text-yellow-400 text-sm py-3 text-left border-b border-white/5 last:border-0 transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleClick('#contact')}
            className="mt-2 bg-yellow-400 text-[#181818] text-sm font-semibold px-5 py-3 rounded-md hover:bg-yellow-300 transition-colors duration-200"
          >
            Say Hello
          </button>
        </div>
      )}
    </header>
  );
}
