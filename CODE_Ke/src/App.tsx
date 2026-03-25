import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServiceGrid from './components/ServiceGrid';
import About from './components/About';

function App() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <Hero />
      
      <section id="services" className="py-24 bg-[#151518]/30">
        <div className="container">
          <div className="mb-16 text-center lg:text-left">
            <h2 className="text-sm font-mono text-[#00A3FF] uppercase tracking-[0.3em] mb-4">Technical Catalog</h2>
            <h3 className="text-4xl md:text-5xl font-black tracking-tight">Expertise & Services</h3>
          </div>
          <ServiceGrid />
        </div>
      </section>

      <section id="about" className="py-24">
        <div className="container">
          <div className="mb-16 text-center lg:text-left">
            <h2 className="text-sm font-mono text-[#00FF41] uppercase tracking-[0.3em] mb-4">Mission Report</h2>
            <h3 className="text-4xl md:text-5xl font-black tracking-tight">About CODE KE</h3>
          </div>
          <About />
        </div>
      </section>

      <section id="contact" className="py-24 bg-[#151518]/30 border-t border-[#27272a]">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-sm font-mono text-[#FF00E5] uppercase tracking-[0.3em] mb-4">Lead Generation</h2>
            <h3 className="text-4xl font-black mb-6 tracking-tight">Initialize Your Fix</h3>
            <p className="text-[#a1a1aa]">Secure your infrastructure or build your next platform with CODE Ke.</p>
          </div>
          
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input 
                type="text" 
                placeholder="Name" 
                className="bg-[#151518] border border-[#27272a] p-4 rounded-lg focus:outline-none focus:border-[#00A3FF] transition-colors"
              />
              <input 
                type="email" 
                placeholder="Work Email" 
                className="bg-[#151518] border border-[#27272a] p-4 rounded-lg focus:outline-none focus:border-[#00A3FF] transition-colors"
              />
            </div>
            <select className="w-full bg-[#151518] border border-[#27272a] p-4 rounded-lg focus:outline-none focus:border-[#00A3FF] transition-colors appearance-none">
              <option>Service Required</option>
              <option>Software Development</option>
              <option>Cybersecurity Audit</option>
              <option>System Hardening</option>
              <option>Compliance Audit</option>
            </select>
            <textarea 
              rows={4} 
              placeholder="Tell us about the project or vulnerability..." 
              className="w-full bg-[#151518] border border-[#27272a] p-4 rounded-lg focus:outline-none focus:border-[#00A3FF] transition-colors"
            ></textarea>
            <button type="submit" className="btn btn-primary w-full py-4 text-lg">
              Transmit Request
            </button>
          </form>
        </div>
      </section>

      <footer className="py-12 border-t border-[#27272a]">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold tracking-tighter">
                CODE <span className="text-[#00A3FF]">KE</span>
              </span>
            </div>
            <div className="text-center text-[#a1a1aa] text-xs font-mono uppercase tracking-widest">
              &copy; {new Date().getFullYear()} All systems operational. Encrypted by CODE KE.
            </div>
            <div className="flex space-x-6 text-[#a1a1aa] text-sm">
              <a href="#" className="hover:text-white">GitHub</a>
              <a href="#" className="hover:text-white">LinkedIn</a>
              <a href="#" className="hover:text-white">X / Twitter</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default App;
