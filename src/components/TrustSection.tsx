import { Shield, Award, Globe, CheckCircle } from 'lucide-react';

const trustMarkers = [
  {
    icon: Shield,
    title: 'Manufactured under strict quality control',
    description: 'Every batch is tested and certified to meet the highest industry standards.',
  },
  {
    icon: Award,
    title: 'Designed for molecular diagnostics',
    description: 'Optimized formulations specifically for diagnostic applications and regulatory requirements.',
  },
  {
    icon: Globe,
    title: 'Used by biotech and diagnostics manufacturers globally',
    description: 'Trusted by leading companies across North America, Europe, and Asia-Pacific.',
  },
  {
    icon: CheckCircle,
    title: 'Consistent, reliable supply chain',
    description: 'Dependable availability and lot-to-lot consistency for your production needs.',
  },
];

export default function TrustSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-teal-400 font-semibold text-sm tracking-wide uppercase mb-4">
            <div className="h-px w-8 bg-teal-400" />
            <span>Quality & Trust</span>
            <div className="h-px w-8 bg-teal-400" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Built for Reliability
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            The foundation of successful molecular diagnostics starts with quality raw materials
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {trustMarkers.map((marker, index) => {
            const Icon = marker.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-teal-400/50 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-teal-400 to-blue-400 rounded-xl flex items-center justify-center shadow-lg shadow-teal-500/20">
                      <Icon className="w-7 h-7 text-gray-900" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3">
                      {marker.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {marker.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
            <div className="text-5xl font-bold bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent mb-2">
              ISO 9001:2015
            </div>
            <div className="text-gray-300">
              Certified Quality Management System
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
