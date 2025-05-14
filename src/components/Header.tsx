
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white dark:bg-gray-900 shadow-md py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-roukhami-blue">ROUKHAMI CAR</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4">
          <Link to="/" className="font-medium hover:text-roukhami-blue transition-colors">
            {t('header.home')}
          </Link>
          <Link to="/cars" className="font-medium hover:text-roukhami-blue transition-colors">
            {t('header.cars')}
          </Link>
          <Link to="/about" className="font-medium hover:text-roukhami-blue transition-colors">
            {t('header.about')}
          </Link>
          <Link to="/contact" className="font-medium hover:text-roukhami-blue transition-colors">
            {t('header.contact')}
          </Link>
          <Link to="/booking" className="btn-primary">
            {t('header.book')}
          </Link>
          <div className="flex items-center space-x-2">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </nav>
        
        {/* Mobile menu button */}
        <div className="flex items-center md:hidden">
          <LanguageSwitcher />
          <ThemeToggle />
          <button
            className="ml-2 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg py-4">
          <nav className="container-custom flex flex-col space-y-4">
            <Link 
              to="/" 
              className="font-medium hover:text-roukhami-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('header.home')}
            </Link>
            <Link 
              to="/cars" 
              className="font-medium hover:text-roukhami-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('header.cars')}
            </Link>
            <Link 
              to="/about" 
              className="font-medium hover:text-roukhami-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('header.about')}
            </Link>
            <Link 
              to="/contact" 
              className="font-medium hover:text-roukhami-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('header.contact')}
            </Link>
            <Link 
              to="/booking" 
              className="btn-primary text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('header.book')}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
