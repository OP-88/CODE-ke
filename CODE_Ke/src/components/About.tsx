import React from 'react';
import { Target, Landmark } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="space-y-16">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2">
          <h3 className="text-3xl font-bold mb-6 tracking-tight">
            Elite Technical Intelligence for the <span className="text-[#00A3FF]">254</span>
          </h3>
          <p className="text-[#a1a1aa] mb-6 leading-relaxed">
            Founded in Nairobi, **CODE Ke** was built to address the critical need for localized, high-end technical expertise. We bridge the gap between complex software engineering and impenetrable cybersecurity defense.
          </p>
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="mt-1 p-2 bg-[#151518] border border-[#27272a] rounded">
                <Target className="w-5 h-5 text-[#00FF41]" />
              </div>
              <div>
                <h4 className="font-bold">Our Mission</h4>
                <p className="text-sm text-[#71717a]">To secure and build Kenya's digital future through rigorous engineering standards.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="mt-1 p-2 bg-[#151518] border border-[#27272a] rounded">
                <Landmark className="w-5 h-5 text-[#00A3FF]" />
              </div>
              <div>
                <h4 className="font-bold">ODPC Compliance</h4>
                <p className="text-sm text-[#71717a]">Every line of code and every security patch adheres to Kenya's Data Protection Act.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 grid grid-cols-2 gap-4">
          <div className="p-8 bg-[#151518] border border-[#27272a] rounded-lg text-center">
            <div className="text-4xl font-black text-[#00FF41] mb-2">99.9%</div>
            <div className="text-xs uppercase tracking-widest text-[#a1a1aa]">Uptime Guaranteed</div>
          </div>
          <div className="p-8 bg-[#151518] border border-[#27272a] rounded-lg text-center">
            <div className="text-4xl font-black text-[#00A3FF] mb-2">24/7</div>
            <div className="text-xs uppercase tracking-widest text-[#a1a1aa]">Threat Response</div>
          </div>
          <div className="p-8 bg-[#151518] border border-[#27272a] rounded-lg text-center">
            <div className="text-4xl font-black text-white mb-2">254</div>
            <div className="text-xs uppercase tracking-widest text-[#a1a1aa]">Local Expertise</div>
          </div>
          <div className="p-8 bg-[#151518] border border-[#27272a] rounded-lg text-center">
            <div className="text-4xl font-black text-[#FF00E5] mb-2">0</div>
            <div className="text-xs uppercase tracking-widest text-[#a1a1aa]">Compromises</div>
          </div>
        </div>
      </div>

      <div className="bg-[#151518] border border-[#27272a] p-8 md:p-12 rounded-xl text-center">
        <h3 className="text-2xl font-bold mb-8">The CODE Framework</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="text-5xl font-black text-[#00A3FF] mb-4 opacity-20 group-hover:opacity-100 transition-opacity">C</div>
            <h4 className="font-bold mb-2">Cyber</h4>
            <p className="text-xs text-[#a1a1aa]">Operations & Security Intelligence</p>
          </div>
          <div>
            <div className="text-5xl font-black text-[#00FF41] mb-4 opacity-20">O</div>
            <h4 className="font-bold mb-2">Operations</h4>
            <p className="text-xs text-[#a1a1aa]">Continuous Delivery & System Fixes</p>
          </div>
          <div>
            <div className="text-5xl font-black text-[#FF00E5] mb-4 opacity-20">D</div>
            <h4 className="font-bold mb-2">Development</h4>
            <p className="text-xs text-[#a1a1aa]">Custom Software & Architecture</p>
          </div>
          <div>
            <div className="text-5xl font-black text-white mb-4 opacity-20">E</div>
            <h4 className="font-bold mb-2">Experts</h4>
            <p className="text-xs text-[#a1a1aa]">Senior Technical Leadership</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
