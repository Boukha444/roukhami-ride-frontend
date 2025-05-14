
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Calendar, MapPin, Upload, MessageSquare } from "lucide-react";
import { cars } from "@/lib/carsData";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useLanguage } from "@/contexts/LanguageContext";

export default function BookingForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [selectedCar, setSelectedCar] = useState("");
  const [license, setLicense] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const location = useLocation();
  const { t, language } = useLanguage();

  useEffect(() => {
    // Check if there's a car parameter in the URL
    const params = new URLSearchParams(location.search);
    const carId = params.get("car");
    if (carId) {
      const car = cars.find((c) => c.id === parseInt(carId));
      if (car) setSelectedCar(car.name);
    }
  }, [location]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setLicense(e.target.files[0]);
    }
  };

  const handleWhatsAppBooking = () => {
    if (!validateForm()) return;

    // Format dates for better readability
    const formattedStartDate = new Date(startDate).toLocaleDateString(language);
    const formattedEndDate = new Date(endDate).toLocaleDateString(language);

    // Create WhatsApp message based on language
    let greeting = "";
    switch(language) {
      case 'en':
        greeting = "Hello! I would like to book a car:";
        break;
      case 'de':
        greeting = "Hallo! Ich möchte ein Auto buchen:";
        break;
      case 'es':
        greeting = "¡Hola! Me gustaría reservar un coche:";
        break;
      default:
        greeting = "Bonjour! Je souhaite réserver une voiture:";
    }

    const message = `${greeting}\n
*${t('booking.form.carModel')}:* ${selectedCar}\n
*${t('booking.form.fullName')}:* ${name}\n
*${t('booking.form.phone')}:* ${phone}\n
*${t('booking.form.startDate')}:* ${formattedStartDate}\n
*${t('booking.form.endDate')}:* ${formattedEndDate}\n
*${t('booking.form.pickupLocation')}:* ${pickupLocation}\n
${language === 'fr' ? 'Merci!' : language === 'de' ? 'Danke!' : language === 'es' ? '¡Gracias!' : 'Thank you!'}`;

    // Encode for WhatsApp URL
    const encodedMessage = encodeURIComponent(message);
    
    // Open WhatsApp web with pre-filled message
    window.open(`https://wa.me/+212522123456?text=${encodedMessage}`, '_blank');
  };

  const validateForm = () => {
    if (!name || !phone || !startDate || !endDate || !pickupLocation || !selectedCar) {
      toast.error(t('booking.validation.fillAllFields'));
      return false;
    }
    
    if (!license) {
      toast.error(t('booking.validation.uploadLicense'));
      return false;
    }
    
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    if (end <= start) {
      toast.error(t('booking.validation.endDateAfterStart'));
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      toast.success(t('booking.validation.success'));
      
      // Reset form
      setName("");
      setPhone("");
      setStartDate("");
      setEndDate("");
      setPickupLocation("");
      setLicense(null);
    } catch (error) {
      toast.error(t('booking.validation.error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Car Selection */}
        <div className="col-span-full">
          <label htmlFor="car" className="block text-sm font-medium mb-2">
            {t('booking.form.carModel')}
          </label>
          <select
            id="car"
            value={selectedCar}
            onChange={(e) => setSelectedCar(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-roukhami-blue"
            required
          >
            <option value="">{t('booking.form.selectModel')}</option>
            {cars.map((car) => (
              <option key={car.id} value={car.name}>
                {car.name} ({car.transmission})
              </option>
            ))}
          </select>
        </div>
        
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            {t('booking.form.fullName')}
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-roukhami-blue"
            required
          />
        </div>
        
        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-2">
            {t('booking.form.phone')}
          </label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-roukhami-blue"
            required
          />
        </div>
        
        {/* Start Date */}
        <div>
          <label htmlFor="startDate" className="block text-sm font-medium mb-2">
            {t('booking.form.startDate')}
          </label>
          <div className="relative">
            <input
              type="date"
              id="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-roukhami-blue"
              min={new Date().toISOString().split("T")[0]}
              required
            />
            <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" />
          </div>
        </div>
        
        {/* End Date */}
        <div>
          <label htmlFor="endDate" className="block text-sm font-medium mb-2">
            {t('booking.form.endDate')}
          </label>
          <div className="relative">
            <input
              type="date"
              id="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-roukhami-blue"
              min={startDate || new Date().toISOString().split("T")[0]}
              required
            />
            <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" />
          </div>
        </div>
        
        {/* Pickup Location */}
        <div className="col-span-full">
          <label htmlFor="location" className="block text-sm font-medium mb-2">
            {t('booking.form.pickupLocation')}
          </label>
          <div className="relative">
            <input
              type="text"
              id="location"
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
              className="w-full px-4 py-2 pl-10 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-roukhami-blue"
              required
            />
            <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>
        
        {/* License Upload */}
        <div className="col-span-full">
          <label htmlFor="license" className="block text-sm font-medium mb-2">
            {t('booking.form.license')}
          </label>
          <div className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-md p-4 text-center">
            <input
              type="file"
              id="license"
              accept=".pdf,image/*"
              onChange={handleFileChange}
              className="hidden"
              required
            />
            <label
              htmlFor="license"
              className="flex flex-col items-center cursor-pointer space-y-2"
            >
              <Upload className="h-8 w-8 text-gray-400" />
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {license ? license.name : t('booking.form.uploadLicense')}
              </span>
              <span className="text-xs text-gray-400">
                {t('booking.form.fileTypes')}
              </span>
            </label>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
        <Button
          type="button"
          className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3"
          onClick={handleWhatsAppBooking}
        >
          <MessageSquare className="h-5 w-5" />
          <span>{t('booking.form.viaWhatsApp')}</span>
        </Button>
        
        <Button
          type="submit"
          className="bg-roukhami-blue hover:bg-blue-500 text-white py-3"
          disabled={isSubmitting}
        >
          {isSubmitting ? t('booking.form.processing') : t('booking.form.bookNow')}
        </Button>
      </div>
    </form>
  );
}
