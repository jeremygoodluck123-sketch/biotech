import { ChevronRight } from 'lucide-react';

const categories = [
  'Raw Materials for MDx',
  'PCR Enzymes for MDx',
  'Molecular Diagnostics Enzymes',
  'DNA-RNA Amplification',
  'RT-PCR & Real-Time PCR',
  'Isothermal Amplification',
  'DNA & RNA Purification',
  'Detection Kits (Human, Animal, Plant)',
];

export default function ProductCategories() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-teal-600 font-semibold text-sm tracking-wide uppercase mb-4">
            <div className="h-px w-8 bg-teal-600" />
            <span>Full Catalog</span>
            <div className="h-px w-8 bg-teal-600" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Product Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Complete range of molecular biology solutions across key application areas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-xl border border-gray-200 hover:border-teal-400 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <span className="text-gray-900 font-semibold leading-snug group-hover:text-teal-600 transition-colors">
                  {category}
                </span>
                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-teal-600 group-hover:translate-x-1 transition-all flex-shrink-0 ml-2" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center space-x-2 text-teal-600 font-semibold hover:text-teal-700 transition-colors">
            <span>View Complete Product Catalog</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
