
import { Link } from "react-router-dom";
import { ChevronRight, Car, Shield, Clock, CreditCard } from "lucide-react";
import { cars } from "@/lib/carsData";
import CarCard from "@/components/CarCard";

const Index = () => {
  // Get 3 featured cars for the homepage
  const featuredCars = cars.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center h-[90vh] flex items-center" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1592805144716-feeccccef5ac?q=80&w=1920')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="container-custom relative z-10 text-white">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Location de voitures au meilleur prix
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Découvrez notre flotte de véhicules modernes et confortables pour tous vos besoins de déplacement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/cars" className="btn-primary text-center text-lg px-8 py-3">
                Voir nos véhicules
              </Link>
              <Link to="/booking" className="btn-outline text-center text-lg px-8 py-3 bg-white/10">
                Réserver maintenant
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-12">Pourquoi choisir ROUKHAMI CAR</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                <Car className="text-roukhami-blue h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Véhicules modernes</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Notre flotte est régulièrement renouvelée pour vous offrir des véhicules récents et bien entretenus.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                <Shield className="text-roukhami-blue h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Assurance complète</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Tous nos véhicules sont couverts par une assurance tous risques pour votre tranquillité.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                <Clock className="text-roukhami-blue h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Service 24/7</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Notre équipe est disponible 24h/24 et 7j/7 pour répondre à tous vos besoins.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                <CreditCard className="text-roukhami-blue h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Prix compétitifs</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Nous vous proposons des tarifs attractifs avec des options flexibles selon vos besoins.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Cars Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">Nos véhicules populaires</h2>
            <Link 
              to="/cars" 
              className="flex items-center text-roukhami-blue font-medium hover:underline"
            >
              Voir tous
              <ChevronRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-roukhami-blue text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Prêt à prendre la route ?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Réservez dès maintenant et bénéficiez de nos offres spéciales pour votre prochaine location.
          </p>
          <Link 
            to="/booking"
            className="inline-block bg-white text-roukhami-blue font-semibold px-8 py-3 rounded-md hover:bg-gray-100 transition-colors"
          >
            Réserver maintenant
          </Link>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-12">Ce que nos clients disent</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                "Excellent service, voiture propre et en parfait état. La prise en charge à l'aéroport a été très rapide. Je recommande !"
              </p>
              <div>
                <p className="font-semibold">Mohammed A.</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Casablanca</p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                "Très satisfaite de ma location. Le personnel est professionnel et à l'écoute. Voiture récente et prix raisonnable."
              </p>
              <div>
                <p className="font-semibold">Samira L.</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Marrakech</p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <p className="mb-4 text-gray-600 dark:text-gray-300">
                "Deuxième fois que je loue chez ROUKHAMI CAR et toujours aussi satisfait. Service fiable et véhicules impeccables."
              </p>
              <div>
                <p className="font-semibold">Karim B.</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Tanger</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
