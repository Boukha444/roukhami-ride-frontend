
import BookingForm from "@/components/BookingForm";
import { useLanguage } from "@/contexts/LanguageContext";

const Booking = () => {
  const { t } = useLanguage();
  
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
      
      {/* Booking Form */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
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
