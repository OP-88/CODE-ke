import React from 'react';
import { ChevronRight, Terminal } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32">
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-[#151518] border border-[#27272a] rounded-full mb-8">
            <span className="flex h-2 w-2 rounded-full bg-[#00FF41] animate-pulse"></span>
            <span className="text-xs font-medium text-[#a1a1aa] uppercase tracking-wider">
              System Status: <span className="text-white">Secure & Active</span>
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight leading-[1.1]">
            WE <span className="text-[#00A3FF]">BUILD</span>. WE <span className="text-[#00FF41]">DEFEND</span>. WE FIX.
          </h1>

          <p className="text-xl md:text-2xl text-[#a1a1aa] mb-10 max-w-2xl mx-auto leading-relaxed">
            CODE Ke provides elite software engineering and cybersecurity solutions for Kenyan enterprises. From vulnerability research to custom system architecture.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="#services" className="btn btn-primary px-8 py-4 group">
              Explore Services
              <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#about" className="btn btn-secondary px-8 py-4 flex items-center">
              <Terminal className="mr-2 w-4 h-4" />
              Who We Are
            </a>
          </div>

          {/* Abstract Terminal Preview */}
          <div className="mt-20 relative max-w-3xl mx-auto hidden lg:block">
            <div className="bg-[#151518] border border-[#27272a] rounded-lg overflow-hidden shadow-2xl">
              <div className="bg-[#1c1c21] px-4 py-2 border-b border-[#27272a] flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                <span className="text-[10px] text-[#a1a1aa] ml-4 font-mono">root@code-ke:~/fixes</span>
              </div>
              <div className="p-6 font-mono text-sm text-left">
                <div className="flex space-x-2">
                  <span className="text-[#00FF41]">$</span>
                  <span>run security-audit --target=client-infrastructure</span>
                </div>
                <div className="text-[#a1a1aa] mt-2 ml-4">
                  [SCANNING] VULNERABILITIES DETECTED: 0<br />
                  [SYSTEM] INTEGRITY VERIFIED<br />
                  [DEPLOY] CUSTOM PATCH IN PROGRESS...
                </div>
                <div className="flex space-x-2 mt-4">
                  <span className="text-[#00FF41]">$</span>
                  <span className="animate-pulse">_</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
