import { Dna, FlaskConical, Droplet, Package, TestTube, Microscope, Atom, Activity } from 'lucide-react';

const products = [
  { icon: Dna, name: 'PCR & RT-PCR Enzymes', color: 'teal' },
  { icon: Activity, name: 'Real-Time PCR Premixes', color: 'blue' },
  { icon: Atom, name: 'Isothermal Amplification Reagents', color: 'teal' },
  { icon: Package, name: 'Lyophilized & LyoReady Premixes', color: 'blue' },
  { icon: TestTube, name: 'DNA & RNA Purification', color: 'teal' },
  { icon: Droplet, name: 'Sample Preparation for POC Testing', color: 'blue' },
  { icon: Microscope, name: 'Molecular Detection Kits', color: 'teal' },
  { icon: FlaskConical, name: 'Custom Formulations', color: 'blue' },
];

export default function WhatWeProvide() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-teal-600 font-semibold text-sm tracking-wide uppercase mb-4">
            <div className="h-px w-8 bg-teal-600" />
            <span>Our Portfolio</span>
            <div className="h-px w-8 bg-teal-600" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What We Provide
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive molecular biology solutions for diagnostic and research applications
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => {
            const Icon = product.icon;
            const colorClasses = product.color === 'teal'
              ? 'bg-teal-50 text-teal-600 group-hover:bg-teal-600 group-hover:text-white'
              : 'bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white';

            return (
              <div
                key={index}
                className="group bg-white p-6 rounded-xl border border-gray-200 hover:border-teal-300 hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-14 h-14 ${colorClasses} rounded-lg flex items-center justify-center mb-4 transition-all duration-300`}>
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 leading-snug">
                  {product.name}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
