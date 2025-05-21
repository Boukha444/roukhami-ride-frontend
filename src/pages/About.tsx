
import React from "react";
import { Shield, Clock, Users, Award, CheckCircle, Handshake } from "lucide-react";

const About = () => {
  return (
    <>
      {/* Enhanced Page Header with Background Image and Glassmorphism */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden flex items-center justify-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2070&auto=format&fit=crop')`,
            backgroundPosition: "center 30%"
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        {/* Glassmorphism Container */}
        <div className="container-custom relative z-10 max-w-4xl mx-auto">
          <div className="backdrop-blur-md bg-black/30 rounded-xl p-8 md:p-10 border border-white/10 shadow-lg transform transition-all">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Handshake className="h-8 w-8 text-roukhami-blue" />
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-gray-100 to-blue-100 bg-clip-text text-transparent">
                À Propos
              </h1>
            </div>
            <div className="w-24 h-1 bg-roukhami-blue mx-auto mb-6 rounded-full"></div>
            <p className="text-lg max-w-2xl mx-auto text-gray-200 text-center">
              Découvrez ROUKHAMI CAR, votre partenaire de confiance pour la location de voitures au Maroc depuis plus de 10 ans.
            </p>
          </div>
        </div>
      </section>
      
      {/* Company Story */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Notre Histoire</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Fondée en 2012, ROUKHAMI CAR est née de la passion d'un entrepreneur marocain pour l'automobile et le service client d'excellence. Ce qui a commencé comme une petite entreprise avec seulement 5 véhicules s'est transformé en une entreprise reconnue avec une flotte diversifiée de plus de 50 véhicules.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Notre mission est de rendre la location de voitures accessible, transparente et agréable pour tous nos clients, qu'ils soient touristes, professionnels ou résidents locaux.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Aujourd'hui, nous sommes fiers de servir des milliers de clients chaque année, en leur offrant une expérience de location sans souci et des véhicules impeccablement entretenus.
              </p>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=800"
                alt="ROUKHAMI CAR Fleet"
                className="rounded-lg shadow-lg object-cover w-full h-[400px]"
              />
              <div className="absolute -bottom-6 -left-6 bg-roukhami-blue text-white p-4 rounded-lg shadow-lg">
                <p className="text-2xl font-bold">10+</p>
                <p className="uppercase text-sm">Années d'expérience</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Nos Valeurs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="text-roukhami-blue mr-2">01</span>
                <span>Transparence</span>
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Nous croyons en une politique de prix claire et des conditions sans surprise. Ce que vous voyez est ce que vous payez.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="text-roukhami-blue mr-2">02</span>
                <span>Qualité</span>
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Notre flotte est régulièrement renouvelée et rigoureusement entretenue pour garantir sécurité et confort.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <span className="text-roukhami-blue mr-2">03</span>
                <span>Service client</span>
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Notre équipe dévouée est disponible pour vous assister à chaque étape de votre location, 7j/7.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=800"
                alt="Customer Service"
                className="rounded-lg shadow-lg object-cover w-full h-[400px]"
              />
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Pourquoi Choisir ROUKHAMI CAR ?</h2>
              
              <ul className="space-y-4">
                <li className="flex">
                  <CheckCircle className="h-6 w-6 text-roukhami-blue mr-3 shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">Flotte diversifiée :</span> Du compact économique au SUV spacieux, nous avons le véhicule idéal pour vos besoins.
                  </p>
                </li>
                
                <li className="flex">
                  <CheckCircle className="h-6 w-6 text-roukhami-blue mr-3 shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">Prix compétitifs :</span> Des tarifs transparents sans frais cachés pour une location en toute sérénité.
                  </p>
                </li>
                
                <li className="flex">
                  <CheckCircle className="h-6 w-6 text-roukhami-blue mr-3 shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">Service personnalisé :</span> Notre équipe s'adapte à vos besoins pour une expérience sur mesure.
                  </p>
                </li>
                
                <li className="flex">
                  <CheckCircle className="h-6 w-6 text-roukhami-blue mr-3 shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">Livraison possible :</span> Nous pouvons livrer votre véhicule à l'aéroport ou à votre hôtel sans frais supplémentaires.
                  </p>
                </li>
                
                <li className="flex">
                  <CheckCircle className="h-6 w-6 text-roukhami-blue mr-3 shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">Assistance 24/7 :</span> Notre équipe reste à votre disposition à tout moment en cas de besoin.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">Notre Équipe</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm text-center">
              <div className="h-56 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400" 
                  alt="Team member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">Ahmed Roukhami</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Fondateur & Directeur</p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm text-center">
              <div className="h-56 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400" 
                  alt="Team member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">Samira Bennani</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Responsable Service Client</p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm text-center">
              <div className="h-56 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400" 
                  alt="Team member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">Karim Alaoui</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Responsable Technique</p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm text-center">
              <div className="h-56 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400" 
                  alt="Team member" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">Fatima Zahra</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Responsable Réservations</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden min-h-[500px] flex items-center">
        {/* Background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070')"
          }}
        ></div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-roukhami-blue/90 via-roukhami-blue/85 to-roukhami-blue/90 z-10"></div>
        
        {/* Content */}
        <div className="container-custom relative z-20">
          <div className="glass max-w-4xl mx-auto text-center p-12 rounded-xl">
            <h2 className="text-4xl font-bold mb-6 text-white">Prêt à découvrir la différence ROUKHAMI CAR ?</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Contactez-nous dès aujourd'hui pour en savoir plus sur nos services ou pour effectuer une réservation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="bg-white text-roukhami-blue font-semibold px-8 py-4 rounded-md hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
              >
                Contactez-nous
              </a>
              <a 
                href="/booking"
                className="bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-md hover:bg-white/10 transition-all transform hover:scale-105 shadow-lg"
              >
                Réserver maintenant
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
