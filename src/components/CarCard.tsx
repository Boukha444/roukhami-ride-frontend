
import { Link } from "react-router-dom";
import { Car } from "@/lib/carsData";
import { useLanguage } from "@/contexts/LanguageContext";

interface CarCardProps {
  car: Car;
}

export default function CarCard({ car }: CarCardProps) {
  const { t } = useLanguage();
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
      <div className="h-48 overflow-hidden relative">
        <img 
          src={car.image} 
          alt={car.name} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-2 right-2 bg-roukhami-blue text-white text-xs px-2 py-1 rounded-full">
          {car.transmission}
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1">{car.name}</h3>
        
        <div className="flex justify-between items-center mt-2 mb-3">
          <div className="text-sm text-gray-600 dark:text-gray-300">
            {car.quantity} {car.quantity > 1 ? t('featuredCars.availables') : t('featuredCars.available')}
          </div>
          {car.dailyRate && (
            <div className="font-medium text-roukhami-blue">
              {car.dailyRate}€<span className="text-xs text-gray-500 dark:text-gray-400">{t('featuredCars.perDay')}</span>
            </div>
          )}
        </div>
        
        <div className="mt-4 space-x-2 flex">
          <Link 
            to={`/booking?car=${car.id}`} 
            className="btn-primary text-center w-full"
          >
            {t('header.book')}
          </Link>
        </div>
      </div>
    </div>
  );
}
