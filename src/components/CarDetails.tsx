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
  
  const carDetails = [
    {
      icon: <CircleDashed className="h-5 w-5 text-roukhami-blue" />,
      label: t('transmission'),
      value: car.transmission
    },
    {
      icon: <Fuel className="h-5 w-5 text-roukhami-blue" />,
      label: t('fuelType'),
      value: car.fuelType
    },
    {
      icon: <Tag className="h-5 w-5 text-roukhami-blue" />,
      label: t('category'),
      value: car.category
    },
    {
      icon: <ScrollText className="h-5 w-5 text-roukhami-blue" />,
      label: t('quantity'),
      value: `${car.quantity} ${car.quantity > 1 ? t('available.plural') : t('available.singular')}`
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden mb-8">
      <div className="relative">
        <div className="h-48 sm:h-64 md:h-80 overflow-hidden">
          <img 
            src={car.image} 
            alt={car.name} 
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        
        <div className="absolute top-4 right-4">
          <Badge 
            className={`px-3 py-1 text-sm font-medium ${
              car.isAvailable 
                ? 'bg-green-500 hover:bg-green-600' 
                : 'bg-red-500 hover:bg-red-600'
            } text-white transition-colors`}
          >
            {car.isAvailable ? t('available') : t('unavailable')}
          </Badge>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{car.name}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {car.category}
            </p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-roukhami-blue">
              {car.dailyRate}€
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {t('perDay')}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {carDetails.map((detail, index) => (
            <div key={index} className="flex items-center gap-3 group">
              <div className="transition-transform duration-200 group-hover:scale-110">
                {detail.icon}
              </div>
              <div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {detail.label}
                </div>
                <div className="font-medium text-gray-900 dark:text-white">
                  {detail.value}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {car.description && (
          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            <h3 className="font-medium text-gray-900 dark:text-white mb-2">
              {t('description')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {car.description}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarDetails;
