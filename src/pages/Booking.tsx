
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BookingForm from "@/components/BookingForm";
import CarDetails from "@/components/CarDetails";
import { useLanguage } from "@/contexts/LanguageContext";
import { cars, Car } from "@/lib/carsData";

const Booking = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  
  useEffect(() => {
    // Check if there's a car parameter in the URL
    const params = new URLSearchParams(location.search);
    const carId = params.get("car");
    
    if (carId) {
      const car = cars.find((c) => c.id === parseInt(carId));
      if (car) setSelectedCar(car);
    }
  }, [location]);
  
  return (
    <>
      {/* Page Header */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">{t('booking.title')}</h1>
          <p className="text-lg max-w-2xl">
            {t('booking.subtitle')}
          </p>
        </div>
      </section>
      
      {/* Car Details (if a car is selected) */}
      <section className="py-8 bg-gray-50 dark:bg-gray-900">
        <div className="container-custom max-w-3xl">
          {selectedCar && <CarDetails car={selectedCar} />}
        </div>
      </section>
      
      {/* Booking Form */}
      <section className={`${selectedCar ? 'pt-0' : 'pt-16'} pb-16 bg-gray-50 dark:bg-gray-900`}>
        <div className="container-custom max-w-3xl">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8">
            <BookingForm />
          </div>
          
          <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">{t('booking.info.title')}</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li>{t('booking.info.idRequired')}</li>
              <li>{t('booking.info.minAge')}</li>
              <li>{t('booking.info.deposit')}</li>
              <li>{t('booking.info.fuel')}</li>
              <li>{t('booking.info.insurance')}</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Booking;
