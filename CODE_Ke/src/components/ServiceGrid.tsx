import React from 'react';
import { Code, ShieldAlert, Cpu, Database, Lock, Terminal } from 'lucide-react';

const services = [
  {
    title: 'Custom Software Development',
    description: 'Bespoke enterprise applications, API integrations (M-Pesa, G2P), and high-performance system architecture.',
    icon: <Code className="w-8 h-8 text-[#00A3FF]" />,
    features: ['React/Next.js', 'Node.js/Python', 'Cloud-Native Architecture']
  },
  {
    title: 'Cybersecurity Audits',
    description: 'Deep-dive vulnerability research and penetration testing to identify and patch security gaps before they are exploited.',
    icon: <ShieldAlert className="w-8 h-8 text-[#00FF41]" />,
    features: ['Penetration Testing', 'Vulnerability Assessment', 'Code Audits']
  },
  {
    title: 'System Hardening',
    description: 'Securing legacy infrastructure and modern cloud environments against advanced persistent threats.',
    icon: <Lock className="w-8 h-8 text-[#FF00E5]" />,
    features: ['Server Hardening', 'Network Security', 'Zero Trust Setup']
  },
  {
    title: 'Digital Forensics',
    description: 'Investigating security breaches, tracking digital footprints, and providing detailed incident reports.',
    icon: <Terminal className="w-8 h-8 text-[#a1a1aa]" />,
    features: ['Incident Response', 'Traceability', 'Malware Analysis']
  },
  {
    title: 'Data Protection Compliance',
    description: 'Ensuring your systems meet the strict requirements of the Kenya Data Protection Act (ODPC).',
    icon: <Database className="w-8 h-8 text-[#00A3FF]" />,
    features: ['ODPC Compliance', 'Data Encryption', 'Privacy by Design']
  },
  {
    title: 'Infrastructure Maintenance',
    description: 'Continuous monitoring and "fixes" for mission-critical software and hardware systems.',
    icon: <Cpu className="w-8 h-8 text-[#00FF41]" />,
    features: ['24/7 Monitoring', 'Patch Management', 'Performance Tuning']
  }
];

const ServiceGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, index) => (
        <div key={index} className="card group">
          <div className="mb-6 p-3 bg-[#1c1c21] w-fit rounded-lg border border-[#27272a] group-hover:border-[#00A3FF] transition-colors">
            {service.icon}
          </div>
          <h3 className="text-xl font-bold mb-4 tracking-tight group-hover:text-[#00A3FF] transition-colors">
            {service.title}
          </h3>
          <p className="text-[#a1a1aa] mb-6 text-sm leading-relaxed">
            {service.description}
          </p>
          <ul className="space-y-2">
            {service.features.map((feature, idx) => (
              <li key={idx} className="flex items-center text-xs font-mono text-[#71717a]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#27272a] mr-2"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ServiceGrid;
