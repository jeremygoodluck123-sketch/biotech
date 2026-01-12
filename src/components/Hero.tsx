import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50/30 via-white to-blue-50/30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <div className="flex items-center space-x-2 text-teal-600 font-medium text-sm tracking-wide uppercase">
                <div className="h-px w-8 bg-teal-600" />
                <span>Molecular Biology Raw Materials</span>
              </div>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
              Supplying the Critical Building Blocks Behind Molecular Diagnostics
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              We connect biotech manufacturers with high-quality enzymes, PCR reagents, and molecular biology raw materials used in diagnostics, research, and point-of-care testing.
            </p>

            <button className="group bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center space-x-2 shadow-lg shadow-teal-600/20 hover:shadow-xl hover:shadow-teal-600/30">
              <span>Request Product Details</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/10 to-blue-500/10 rounded-2xl transform rotate-3" />
            <img
              src="https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Laboratory scientist working with molecular biology equipment"
              className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                  <div className="w-3 h-3 bg-teal-600 rounded-full animate-pulse" />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Quality Assured</div>
                  <div className="text-lg font-bold text-gray-900">ISO Certified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
    </section>
  );
}
