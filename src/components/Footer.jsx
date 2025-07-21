import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-black border-t border-gray-800 relative">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-gray-400">
              © 2025 Vaibhav Chaudhari. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Built with passion and dedication to innovation.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-6">
            <a 
              href="#" 
              className="text-gray-400 hover:text-orange-500 transition-colors text-sm"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-orange-500 transition-colors text-sm"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-400 text-white rounded-full flex items-center justify-center hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 hover:-translate-y-1 z-40"
        aria-label="Back to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;

