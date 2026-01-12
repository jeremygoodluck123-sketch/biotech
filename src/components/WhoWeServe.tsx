import { Building2, GraduationCap, FlaskRound, Stethoscope } from 'lucide-react';

const audiences = [
  {
    icon: Building2,
    title: 'Molecular Diagnostics Companies',
    description: 'Supporting IVD manufacturers with reliable, scalable raw materials for diagnostic test development and production.',
  },
  {
    icon: Stethoscope,
    title: 'Clinical Testing Laboratories',
    description: 'Providing high-quality reagents for accurate molecular testing in clinical diagnostic settings.',
  },
  {
    icon: GraduationCap,
    title: 'Research Institutions',
    description: 'Enabling cutting-edge molecular biology research with premium enzymes and reagents.',
  },
  {
    icon: FlaskRound,
    title: 'Point-of-Care & IVD Manufacturers',
    description: 'Specialized solutions for POC testing platforms and in vitro diagnostic device development.',
  },
];

export default function WhoWeServe() {
  return (
    <section className="py-24 bg-white relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-blue-600 font-semibold text-sm tracking-wide uppercase mb-4">
            <div className="h-px w-8 bg-blue-600" />
            <span>Our Partners</span>
            <div className="h-px w-8 bg-blue-600" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Who We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trusted by leading organizations in molecular diagnostics and life sciences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {audience.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {audience.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
