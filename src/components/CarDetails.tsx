
import { Badge } from "@/components/ui/badge";
import { Car } from "@/lib/carsData";
import { useLanguage } from "@/contexts/LanguageContext";
import { Fuel, CircleDashed, Tag, ScrollText } from "lucide-react";

interface CarDetailsProps {
  car: Car | null;
}

const CarDetails = ({ car }: CarDetailsProps) => {
  const { t } = useLanguage();
  
  if (!car) return null;
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden mb-8">
      <div className="relative">
        {/* Car Image */}
        <div className="h-48 sm:h-64 md:h-80 overflow-hidden">
          <img 
            src={car.image} 
            alt={car.name} 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Availability Badge */}
        <div className="absolute top-4 right-4">
          <Badge className={`${car.isAvailable ? 'bg-green-500' : 'bg-red-500'} text-white`}>
            {car.isAvailable ? t('booking.available') : t('booking.unavailable')}
          </Badge>
        </div>
      </div>
      
      <div className="p-6">
        {/* Car Name and Price */}
        <div className="flex flex-wrap justify-between items-start gap-2 mb-4">
          <div>
            <h2 className="text-2xl font-bold">{car.name}</h2>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {car.category}
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-roukhami-blue">
              {car.dailyRate}€
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {t('featuredCars.perDay')}
            </div>
          </div>
        </div>
        
        {/* Car Details */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {/* Transmission */}
          <div className="flex items-center gap-2">
            <CircleDashed className="h-5 w-5 text-gray-400" />
            <div>
              <div className="text-xs text-gray-500 dark:text-gray-400">{t('booking.carDetails.transmission')}</div>
              <div className="font-medium">{car.transmission}</div>
            </div>
          </div>
          
          {/* Fuel Type */}
          <div className="flex items-center gap-2">
            <Fuel className="h-5 w-5 text-gray-400" />
            <div>
              <div className="text-xs text-gray-500 dark:text-gray-400">{t('booking.carDetails.fuelType')}</div>
              <div className="font-medium">{car.fuelType}</div>
            </div>
          </div>
          
          {/* Category */}
          <div className="flex items-center gap-2">
            <Tag className="h-5 w-5 text-gray-400" />
            <div>
              <div className="text-xs text-gray-500 dark:text-gray-400">{t('booking.carDetails.category')}</div>
              <div className="font-medium">{car.category}</div>
            </div>
          </div>
          
          {/* Quantity */}
          <div className="flex items-center gap-2">
            <ScrollText className="h-5 w-5 text-gray-400" />
            <div>
              <div className="text-xs text-gray-500 dark:text-gray-400">{t('booking.carDetails.quantity')}</div>
              <div className="font-medium">
                {car.quantity} {car.quantity > 1 ? t('featuredCars.availables') : t('featuredCars.available')}
              </div>
            </div>
          </div>
        </div>
        
        {/* Description */}
        {car.description && (
          <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
            <h3 className="font-medium mb-2">{t('booking.carDetails.description')}</h3>
            <p className="text-gray-600 dark:text-gray-300">{car.description}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarDetails;
