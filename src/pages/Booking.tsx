
import BookingForm from "@/components/BookingForm";

const Booking = () => {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">Réservation</h1>
          <p className="text-lg max-w-2xl">
            Remplissez le formulaire ci-dessous pour réserver votre véhicule. Notre équipe vous contactera rapidement pour confirmer votre demande.
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
            <h3 className="text-lg font-semibold mb-2">Informations importantes</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Une pièce d'identité et un permis de conduire valides sont requis pour toute location.</li>
              <li>L'âge minimum pour louer un véhicule est de 21 ans.</li>
              <li>Une caution sera demandée lors de la prise en charge du véhicule.</li>
              <li>Le carburant n'est pas inclus dans le prix de la location.</li>
              <li>Les tarifs incluent une assurance tous risques.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Booking;
