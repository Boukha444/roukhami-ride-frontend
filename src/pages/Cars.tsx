
import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import { cars, Car } from "@/lib/carsData";
import CarCard from "@/components/CarCard";

const Cars = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [transmissionFilter, setTransmissionFilter] = useState<string>("all");
  const [filteredCars, setFilteredCars] = useState<Car[]>(cars);

  useEffect(() => {
    let result = cars;
    
    // Filter by search term
    if (searchTerm) {
      result = result.filter(car => 
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Filter by transmission
    if (transmissionFilter !== "all") {
      result = result.filter(car => 
        car.transmission.toLowerCase() === transmissionFilter.toLowerCase()
      );
    }
    
    setFilteredCars(result);
  }, [searchTerm, transmissionFilter]);

  return (
    <>
      {/* Page Header */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">Nos Véhicules</h1>
          <p className="text-lg max-w-2xl">
            Découvrez notre gamme diversifiée de véhicules pour répondre à tous vos besoins, des petites citadines économiques aux SUV spacieux.
          </p>
        </div>
      </section>
      
      {/* Filters */}
      <section className="bg-white dark:bg-gray-800 py-6 shadow-md">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            {/* Search */}
            <div className="w-full md:w-auto relative">
              <input
                type="text"
                placeholder="Rechercher un modèle..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full md:w-64 pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-roukhami-blue"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            
            {/* Transmission Filter */}
            <div className="w-full md:w-auto">
              <select
                value={transmissionFilter}
                onChange={(e) => setTransmissionFilter(e.target.value)}
                className="w-full md:w-auto px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-roukhami-blue"
              >
                <option value="all">Toutes les transmissions</option>
                <option value="manual">Manuelle</option>
                <option value="automatic">Automatique</option>
              </select>
            </div>
          </div>
        </div>
      </section>
      
      {/* Cars Grid */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          {filteredCars.length > 0 ? (
            <>
              <p className="mb-8 text-gray-600 dark:text-gray-300">
                {filteredCars.length} véhicule{filteredCars.length !== 1 ? 's' : ''} trouvé{filteredCars.length !== 1 ? 's' : ''}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCars.map((car) => (
                  <CarCard key={car.id} car={car} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold mb-2">Aucun véhicule trouvé</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Veuillez modifier vos critères de recherche.
              </p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Cars;
