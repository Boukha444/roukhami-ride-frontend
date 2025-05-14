
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 pt-12 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-roukhami-blue">ROUKHAMI CAR</h3>
            <p className="mb-4 dark:text-gray-300">
              Votre partenaire de confiance pour la location de voitures au Maroc. Des véhicules de qualité à des prix compétitifs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-roukhami-blue" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-roukhami-blue" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-roukhami-blue" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 dark:text-gray-300 hover:text-roukhami-blue dark:hover:text-roukhami-blue">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/cars" className="text-gray-600 dark:text-gray-300 hover:text-roukhami-blue dark:hover:text-roukhami-blue">
                  Nos Voitures
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-roukhami-blue dark:hover:text-roukhami-blue">
                  À Propos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 dark:text-gray-300 hover:text-roukhami-blue dark:hover:text-roukhami-blue">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-roukhami-blue shrink-0 mt-0.5" />
                <span className="text-gray-600 dark:text-gray-300">
                  123 Rue Mohammed V, Casablanca, Maroc
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-roukhami-blue shrink-0" />
                <span className="text-gray-600 dark:text-gray-300">+212 522 123 456</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-roukhami-blue shrink-0" />
                <span className="text-gray-600 dark:text-gray-300">info@roukhami-car.com</span>
              </li>
            </ul>
          </div>
          
          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Heures d'Ouverture</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 dark:text-gray-300">Lun - Ven: 8:00 - 19:00</li>
              <li className="text-gray-600 dark:text-gray-300">Samedi: 9:00 - 17:00</li>
              <li className="text-gray-600 dark:text-gray-300">Dimanche: 10:00 - 14:00</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 mt-10 pt-6 text-center text-gray-500 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} ROUKHAMI CAR. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
