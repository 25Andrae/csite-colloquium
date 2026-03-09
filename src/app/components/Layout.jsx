import { Link, Outlet, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import headerLogo from '../../images/AdZU_CSITE-Logo.svg';
import textLogo from '../../images/NavText.svg';

export function Layout() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "About" },
    { to: "/programme", label: "Programme" },
    { to: "/book-of-abstract", label: "Book of Abstract" },
    { to: "/presenters", label: "Presenters" },
    { to: "/organizing-committee", label: "Organizing Committee" },
    { to: "/evaluation", label: "Evaluation" },
  ];

  const isActive = (path) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#e8682a] to-[#ff9856] text-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">

            <Link to="/" className="flex items-center gap-4 hover:opacity-90 transition-opacity">
  
                {/* Logos Container */}
                <div className="flex items-center">
                  <img 
                    src={headerLogo} 
                    alt="ADZU and CSITE Logo" 
                    className="h-14 w-auto object-contain" 
                  />
                    <img 
                    src={textLogo} 
                    alt="Research Text Logo" 
                    className="h-14 w-auto object-contain" 
                  />
                </div>

                {/* Text Container
                <div className="flex flex-col">
                  <span className="text-2xl font-bold">2nd CSITE Research Colloquium</span>
                  <span className="text-sm opacity-90">College of Science and Information Technology and Engineering</span>
                </div> */}
              </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    isActive(link.to)
                      ? "bg-white text-[#e8682a]"
                      : "hover:bg-white/20"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-white/20 rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav className="lg:hidden pb-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2 rounded-lg transition-all ${
                    isActive(link.to)
                      ? "bg-white text-[#e8682a]"
                      : "hover:bg-white/20"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-[#2d1810] text-white py-8 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">© 2026 CSITE Research Colloquium</p>
          <p className="text-sm opacity-80">
            College of Science and Information Technology and Engineering
          </p>
        </div>
      </footer>
    </div>
  );
}
