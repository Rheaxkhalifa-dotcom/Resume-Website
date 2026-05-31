import { Mail, Linkedin, MapPin, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-[#161616]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-yellow-400 text-xs font-semibold tracking-widest uppercase mb-3">
            Let's Connect
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-500 text-base max-w-md mx-auto">
            Open to conversations about financial crime, crypto compliance, AI governance, and senior roles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          <a
            href="mailto:rihabkalifa@gmail.com"
            className="card-hover group bg-[#1e1e1e] border border-white/8 rounded-xl p-6 flex flex-col gap-3 cursor-pointer"
          >
            <div className="w-10 h-10 bg-yellow-400/8 rounded-lg flex items-center justify-center group-hover:bg-yellow-400/18 transition-colors duration-200">
              <Mail size={18} className="text-yellow-400" />
            </div>
            <div>
              <p className="text-gray-500 text-xs uppercase tracking-widest mb-1 font-medium">Email</p>
              <p className="text-white text-sm font-medium break-all">rihabkalifa@gmail.com</p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/rhea-kalifa"
            target="_blank"
            rel="noopener noreferrer"
            className="card-hover group bg-[#1e1e1e] border border-white/8 rounded-xl p-6 flex flex-col gap-3 cursor-pointer"
          >
            <div className="w-10 h-10 bg-yellow-400/8 rounded-lg flex items-center justify-center group-hover:bg-yellow-400/18 transition-colors duration-200">
              <Linkedin size={18} className="text-yellow-400" />
            </div>
            <div>
              <p className="text-gray-500 text-xs uppercase tracking-widest mb-1 font-medium">LinkedIn</p>
              <p className="text-white text-sm font-medium">linkedin.com/in/rhea-kalifa</p>
            </div>
          </a>

          <div className="card-hover group bg-[#1e1e1e] border border-white/8 rounded-xl p-6 flex flex-col gap-3 cursor-default">
            <div className="w-10 h-10 bg-yellow-400/8 rounded-lg flex items-center justify-center group-hover:bg-yellow-400/18 transition-colors duration-200">
              <MapPin size={18} className="text-yellow-400" />
            </div>
            <div>
              <p className="text-gray-500 text-xs uppercase tracking-widest mb-1 font-medium">Location</p>
              <p className="text-white text-sm font-medium">Belfast</p>
              <p className="text-gray-500 text-xs mt-0.5">Open to London & UK opportunities</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a
            href="mailto:rihabkalifa@gmail.com"
            className="inline-flex items-center gap-2 bg-yellow-400 text-[#181818] font-semibold px-8 py-4 rounded-md hover:bg-yellow-300 transition-all duration-200 text-base"
          >
            Send a Message
            <ArrowRight size={16} />
          </a>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-white/6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-yellow-400 rounded flex items-center justify-center">
              <span className="font-bold text-[#181818] text-xs">RK</span>
            </div>
            <span className="text-gray-600 text-sm">Rhea Kalifa</span>
          </div>
          <p className="text-gray-700 text-xs text-center sm:text-right">
            Senior Associate, Forensics · EY Belfast · Open to new opportunities
          </p>
        </div>
      </div>
    </section>
  );
}
