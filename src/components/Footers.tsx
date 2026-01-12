import { Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-blue-500 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-white rounded" />
              </div>
              <span className="text-xl font-bold text-gray-900">BioRaw Materials</span>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Premium molecular biology raw materials for diagnostic and research applications.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">
              Product Lines
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">PCR Enzymes</a></li>
              <li><a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">Amplification Reagents</a></li>
              <li><a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">Purification Kits</a></li>
              <li><a href="#" className="text-gray-600 hover:text-teal-600 transition-colors">Detection Solutions</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">
              Contact
            </h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-600">
                <Mail className="w-5 h-5 text-teal-600" />
                <span>info@biorawmaterials.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-600">
                <Phone className="w-5 h-5 text-teal-600" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
            <button className="mt-6 w-full bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Request Information
            </button>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 text-center text-gray-500 text-sm">
          <p>&copy; 2026 BioRaw Materials. All rights reserved. | ISO 9001:2015 Certified</p>
        </div>
      </div>
    </footer>
  );
}
