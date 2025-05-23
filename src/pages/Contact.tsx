
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, MessageSquare, MessageSquareText } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      toast.success("Message envoyé avec succès! Nous vous répondrons bientôt.");
      
      // Reset form
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      toast.error("Une erreur s'est produite. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Enhanced Page Header with Background Image and Glassmorphism */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden flex items-center justify-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2070&auto=format&fit=crop')`,
            backgroundPosition: "center 40%"
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        {/* Glassmorphism Container */}
        <div className="container-custom relative z-10 max-w-4xl mx-auto">
          <div className="backdrop-blur-md bg-black/30 rounded-xl p-8 md:p-10 border border-white/10 shadow-lg transform transition-all">
            <div className="flex items-center justify-center gap-3 mb-4">
              <MessageSquareText className="h-8 w-8 text-roukhami-blue" />
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-gray-100 to-blue-100 bg-clip-text text-transparent">
                Contact
              </h1>
            </div>
            <div className="w-24 h-1 bg-roukhami-blue mx-auto mb-6 rounded-full"></div>
            <p className="text-lg max-w-2xl mx-auto text-gray-200 text-center">
              Besoin d'aide ou d'informations ? Nous sommes là pour vous. Contactez-nous par téléphone, e-mail ou en utilisant notre formulaire.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Info & Form */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Informations de contact</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-roukhami-blue mr-3 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Adresse</h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      123 Rue Mohammed V<br />
                      Agadir, 80000<br />
                      Maroc
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-roukhami-blue mr-3 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Téléphone</h3>
                    <p className="text-gray-700 dark:text-gray-300">+212 522 123 456</p>
                    <p className="text-gray-700 dark:text-gray-300">+212 661 789 012</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-roukhami-blue mr-3 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-700 dark:text-gray-300">info@roukhami-car.com</p>
                    <p className="text-gray-700 dark:text-gray-300">reservation@roukhami-car.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-roukhami-blue mr-3 shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Heures d'ouverture</h3>
                    <p className="text-gray-700 dark:text-gray-300">Lun - Ven: 8:00 - 19:00</p>
                    <p className="text-gray-700 dark:text-gray-300">Samedi: 9:00 - 17:00</p>
                    <p className="text-gray-700 dark:text-gray-300">Dimanche: 10:00 - 14:00</p>
                  </div>
                </div>
              </div>
              
              <a
                href="https://wa.me/+212522123456"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-md w-full md:w-auto"
              >
                <MessageSquare className="h-5 w-5" />
                <span>Contacter sur WhatsApp</span>
              </a>
              
              <div className="mt-8">
                <h3 className="font-semibold mb-4">Trouvez-nous</h3>
                <div className="h-[300px] rounded-lg overflow-hidden">
                  <iframe
                    title="ROUKHAMI CAR Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111011.84218855066!2d-9.648641522949226!3d30.42206176947624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3b6e9daef5d97%3A0x88c10e129a4c511f!2sAgadir%2C%20Morocco!5e0!3m2!1sen!2sus!4v1716989592890!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Envoyez-nous un message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nom complet
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-roukhami-blue bg-white dark:bg-gray-800"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-roukhami-blue bg-white dark:bg-gray-800"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-roukhami-blue bg-white dark:bg-gray-800"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="bg-roukhami-blue hover:bg-blue-500 text-white py-3 px-6 rounded-md transition-colors w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                </button>
              </form>
              
              <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  Besoin d'une assistance immédiate ?
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Notre service client est disponible par téléphone tous les jours de 8h à 20h. N'hésitez pas à nous appeler au +212 522 123 456 pour toute question ou demande de réservation urgente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
