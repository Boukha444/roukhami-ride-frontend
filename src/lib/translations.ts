
export type Language = 'fr' | 'en' | 'de' | 'es';

// French translations (original language)
const fr = {
  header: {
    home: 'Accueil',
    cars: 'Voitures',
    about: 'À Propos',
    contact: 'Contact',
    book: 'Réservez'
  },
  hero: {
    title: 'Location de voitures au meilleur prix',
    subtitle: 'Découvrez notre flotte de véhicules modernes et confortables pour tous vos besoins de déplacement.',
    viewCars: 'Voir nos véhicules',
    bookNow: 'Réserver maintenant'
  },
  features: {
    title: 'Pourquoi choisir ROUKHAMI CAR',
    modernVehicles: {
      title: 'Véhicules modernes',
      description: 'Notre flotte est régulièrement renouvelée pour vous offrir des véhicules récents et bien entretenus.'
    },
    insurance: {
      title: 'Assurance complète',
      description: 'Tous nos véhicules sont couverts par une assurance tous risques pour votre tranquillité.'
    },
    service: {
      title: 'Service 24/7',
      description: 'Notre équipe est disponible 24h/24 et 7j/7 pour répondre à tous vos besoins.'
    },
    prices: {
      title: 'Prix compétitifs',
      description: 'Nous vous proposons des tarifs attractifs avec des options flexibles selon vos besoins.'
    }
  },
  featuredCars: {
    title: 'Nos véhicules populaires',
    viewAll: 'Voir tous',
    available: 'disponible',
    availables: 'disponibles',
    perDay: '/jour'
  },
  cta: {
    title: 'Prêt à prendre la route ?',
    subtitle: 'Réservez dès maintenant et bénéficiez de nos offres spéciales pour votre prochaine location.',
    bookNow: 'Réserver maintenant'
  },
  testimonials: {
    title: 'Ce que nos clients disent'
  },
  cars: {
    title: 'Nos Véhicules',
    subtitle: 'Découvrez notre gamme diversifiée de véhicules pour répondre à tous vos besoins, des petites citadines économiques aux SUV spacieux.',
    search: 'Rechercher un modèle...',
    allTransmissions: 'Toutes les transmissions',
    manual: 'Manuelle',
    automatic: 'Automatique',
    found: 'véhicule trouvé',
    found_plural: 'véhicules trouvés',
    noResult: 'Aucun véhicule trouvé',
    modifySearch: 'Veuillez modifier vos critères de recherche.'
  },
  booking: {
    title: 'Réservation',
    subtitle: 'Remplissez le formulaire ci-dessous pour réserver votre véhicule. Notre équipe vous contactera rapidement pour confirmer votre demande.',
    form: {
      carModel: 'Modèle de voiture',
      selectModel: 'Sélectionnez un modèle',
      fullName: 'Nom complet',
      phone: 'Numéro de téléphone',
      startDate: 'Date de début',
      endDate: 'Date de fin',
      pickupLocation: 'Lieu de prise en charge',
      license: 'Permis de conduire (PDF ou image)',
      uploadLicense: 'Cliquez pour télécharger',
      fileTypes: 'PDF, JPG, PNG (Max 5MB)',
      viaWhatsApp: 'Réserver via WhatsApp',
      bookNow: 'Réserver Maintenant',
      processing: 'Traitement en cours...'
    },
    info: {
      title: 'Informations importantes',
      idRequired: 'Une pièce d\'identité et un permis de conduire valides sont requis pour toute location.',
      minAge: 'L\'âge minimum pour louer un véhicule est de 21 ans.',
      deposit: 'Une caution sera demandée lors de la prise en charge du véhicule.',
      fuel: 'Le carburant n\'est pas inclus dans le prix de la location.',
      insurance: 'Les tarifs incluent une assurance tous risques.'
    },
    validation: {
      fillAllFields: 'Veuillez remplir tous les champs',
      uploadLicense: 'Veuillez télécharger une copie de votre permis de conduire',
      endDateAfterStart: 'La date de fin doit être postérieure à la date de début',
      success: 'Réservation envoyée avec succès! Nous vous contacterons bientôt.',
      error: 'Une erreur s\'est produite. Veuillez réessayer.'
    }
  },
  about: {
    title: 'À Propos',
    subtitle: 'Découvrez ROUKHAMI CAR, votre partenaire de confiance pour la location de voitures au Maroc depuis plus de 10 ans.',
    ourStory: {
      title: 'Notre Histoire',
      p1: 'Fondée en 2012, ROUKHAMI CAR est née de la passion d\'un entrepreneur marocain pour l\'automobile et le service client d\'excellence. Ce qui a commencé comme une petite entreprise avec seulement 5 véhicules s\'est transformé en une entreprise reconnue avec une flotte diversifiée de plus de 50 véhicules.',
      p2: 'Notre mission est de rendre la location de voitures accessible, transparente et agréable pour tous nos clients, qu\'ils soient touristes, professionnels ou résidents locaux.',
      p3: 'Aujourd\'hui, nous sommes fiers de servir des milliers de clients chaque année, en leur offrant une expérience de location sans souci et des véhicules impeccablement entretenus.'
    },
    values: {
      title: 'Nos Valeurs',
      transparency: {
        title: 'Transparence',
        description: 'Nous croyons en une politique de prix claire et des conditions sans surprise. Ce que vous voyez est ce que vous payez.'
      },
      quality: {
        title: 'Qualité',
        description: 'Notre flotte est régulièrement renouvelée et rigoureusement entretenue pour garantir sécurité et confort.'
      },
      service: {
        title: 'Service client',
        description: 'Notre équipe dévouée est disponible pour vous assister à chaque étape de votre location, 7j/7.'
      }
    },
    whyUs: {
      title: 'Pourquoi Choisir ROUKHAMI CAR ?',
      fleet: 'Flotte diversifiée',
      fleetDesc: 'Du compact économique au SUV spacieux, nous avons le véhicule idéal pour vos besoins.',
      prices: 'Prix compétitifs',
      pricesDesc: 'Des tarifs transparents sans frais cachés pour une location en toute sérénité.',
      service: 'Service personnalisé',
      serviceDesc: 'Notre équipe s\'adapte à vos besoins pour une expérience sur mesure.',
      delivery: 'Livraison possible',
      deliveryDesc: 'Nous pouvons livrer votre véhicule à l\'aéroport ou à votre hôtel sans frais supplémentaires.',
      assistance: 'Assistance 24/7',
      assistanceDesc: 'Notre équipe reste à votre disposition à tout moment en cas de besoin.'
    },
    team: {
      title: 'Notre Équipe',
      founder: 'Fondateur & Directeur',
      customerService: 'Responsable Service Client',
      technical: 'Responsable Technique',
      reservations: 'Responsable Réservations'
    },
    cta: {
      title: 'Prêt à découvrir la différence ROUKHAMI CAR ?',
      subtitle: 'Contactez-nous dès aujourd\'hui pour en savoir plus sur nos services ou pour effectuer une réservation.',
      contact: 'Contactez-nous',
      book: 'Réserver maintenant'
    }
  },
  contact: {
    title: 'Contact',
    subtitle: 'Besoin d\'aide ou d\'informations ? Nous sommes là pour vous. Contactez-nous par téléphone, e-mail ou en utilisant notre formulaire.',
    info: {
      title: 'Informations de contact',
      address: {
        title: 'Adresse',
        line1: '123 Rue Mohammed V',
        line2: 'Casablanca, 20000',
        line3: 'Maroc'
      },
      phone: {
        title: 'Téléphone'
      },
      email: {
        title: 'Email'
      },
      hours: {
        title: 'Heures d\'ouverture',
        weekdays: 'Lun - Ven: 8:00 - 19:00',
        saturday: 'Samedi: 9:00 - 17:00',
        sunday: 'Dimanche: 10:00 - 14:00'
      }
    },
    whatsapp: 'Contacter sur WhatsApp',
    findUs: 'Trouvez-nous',
    form: {
      title: 'Envoyez-nous un message',
      name: 'Nom complet',
      email: 'Email',
      message: 'Message',
      sending: 'Envoi en cours...',
      send: 'Envoyer le message',
      success: 'Message envoyé avec succès! Nous vous répondrons bientôt.',
      error: 'Une erreur s\'est produite. Veuillez réessayer.'
    },
    urgent: {
      title: 'Besoin d\'une assistance immédiate ?',
      message: 'Notre service client est disponible par téléphone tous les jours de 8h à 20h. N\'hésitez pas à nous appeler au +212 522 123 456 pour toute question ou demande de réservation urgente.'
    }
  },
  footer: {
    description: 'Votre partenaire de confiance pour la location de voitures au Maroc. Des véhicules de qualité à des prix compétitifs.',
    quickLinks: 'Liens Rapides',
    contact: 'Contact',
    hours: 'Heures d\'Ouverture',
    rights: 'Tous droits réservés.'
  }
};

// English translations
const en = {
  header: {
    home: 'Home',
    cars: 'Cars',
    about: 'About',
    contact: 'Contact',
    book: 'Book Now'
  },
  hero: {
    title: 'Car rental at the best price',
    subtitle: 'Discover our fleet of modern and comfortable vehicles for all your travel needs.',
    viewCars: 'View our vehicles',
    bookNow: 'Book now'
  },
  features: {
    title: 'Why choose ROUKHAMI CAR',
    modernVehicles: {
      title: 'Modern vehicles',
      description: 'Our fleet is regularly renewed to offer you recent and well-maintained vehicles.'
    },
    insurance: {
      title: 'Full insurance',
      description: 'All our vehicles are covered by comprehensive insurance for your peace of mind.'
    },
    service: {
      title: '24/7 service',
      description: 'Our team is available 24/7 to meet all your needs.'
    },
    prices: {
      title: 'Competitive prices',
      description: 'We offer attractive rates with flexible options according to your needs.'
    }
  },
  featuredCars: {
    title: 'Our popular vehicles',
    viewAll: 'View all',
    available: 'available',
    availables: 'available',
    perDay: '/day'
  },
  cta: {
    title: 'Ready to hit the road?',
    subtitle: 'Book now and benefit from our special offers for your next rental.',
    bookNow: 'Book now'
  },
  testimonials: {
    title: 'What our customers say'
  },
  cars: {
    title: 'Our Vehicles',
    subtitle: 'Discover our diverse range of vehicles to meet all your needs, from economical small cars to spacious SUVs.',
    search: 'Search for a model...',
    allTransmissions: 'All transmissions',
    manual: 'Manual',
    automatic: 'Automatic',
    found: 'vehicle found',
    found_plural: 'vehicles found',
    noResult: 'No vehicle found',
    modifySearch: 'Please modify your search criteria.'
  },
  booking: {
    title: 'Booking',
    subtitle: 'Fill out the form below to book your vehicle. Our team will contact you shortly to confirm your request.',
    form: {
      carModel: 'Car model',
      selectModel: 'Select a model',
      fullName: 'Full name',
      phone: 'Phone number',
      startDate: 'Start date',
      endDate: 'End date',
      pickupLocation: 'Pickup location',
      license: 'Driver\'s license (PDF or image)',
      uploadLicense: 'Click to upload',
      fileTypes: 'PDF, JPG, PNG (Max 5MB)',
      viaWhatsApp: 'Book via WhatsApp',
      bookNow: 'Book Now',
      processing: 'Processing...'
    },
    info: {
      title: 'Important information',
      idRequired: 'A valid ID and driver\'s license are required for any rental.',
      minAge: 'The minimum age to rent a vehicle is 21 years.',
      deposit: 'A deposit will be required when picking up the vehicle.',
      fuel: 'Fuel is not included in the rental price.',
      insurance: 'Rates include comprehensive insurance.'
    },
    validation: {
      fillAllFields: 'Please fill in all fields',
      uploadLicense: 'Please upload a copy of your driver\'s license',
      endDateAfterStart: 'The end date must be after the start date',
      success: 'Booking successfully sent! We will contact you soon.',
      error: 'An error occurred. Please try again.'
    }
  },
  about: {
    title: 'About',
    subtitle: 'Discover ROUKHAMI CAR, your trusted partner for car rental in Morocco for over 10 years.',
    ourStory: {
      title: 'Our Story',
      p1: 'Founded in 2012, ROUKHAMI CAR was born from a Moroccan entrepreneur\'s passion for automobiles and excellence in customer service. What began as a small business with only 5 vehicles has grown into a recognized company with a diverse fleet of more than 50 vehicles.',
      p2: 'Our mission is to make car rental accessible, transparent, and enjoyable for all our customers, whether they are tourists, professionals, or local residents.',
      p3: 'Today, we are proud to serve thousands of customers each year, offering them a hassle-free rental experience and impeccably maintained vehicles.'
    },
    values: {
      title: 'Our Values',
      transparency: {
        title: 'Transparency',
        description: 'We believe in clear pricing and straightforward terms. What you see is what you pay.'
      },
      quality: {
        title: 'Quality',
        description: 'Our fleet is regularly renewed and rigorously maintained to ensure safety and comfort.'
      },
      service: {
        title: 'Customer service',
        description: 'Our dedicated team is available to assist you at every step of your rental, 7 days a week.'
      }
    },
    whyUs: {
      title: 'Why Choose ROUKHAMI CAR?',
      fleet: 'Diverse fleet',
      fleetDesc: 'From economical compacts to spacious SUVs, we have the ideal vehicle for your needs.',
      prices: 'Competitive prices',
      pricesDesc: 'Transparent rates with no hidden fees for worry-free rental.',
      service: 'Personalized service',
      serviceDesc: 'Our team adapts to your needs for a tailored experience.',
      delivery: 'Delivery available',
      deliveryDesc: 'We can deliver your vehicle to the airport or your hotel at no additional cost.',
      assistance: '24/7 Assistance',
      assistanceDesc: 'Our team remains at your disposal at all times in case of need.'
    },
    team: {
      title: 'Our Team',
      founder: 'Founder & Director',
      customerService: 'Customer Service Manager',
      technical: 'Technical Manager',
      reservations: 'Reservations Manager'
    },
    cta: {
      title: 'Ready to experience the ROUKHAMI CAR difference?',
      subtitle: 'Contact us today to learn more about our services or to make a reservation.',
      contact: 'Contact us',
      book: 'Book now'
    }
  },
  contact: {
    title: 'Contact',
    subtitle: 'Need help or information? We are here for you. Contact us by phone, email, or using our form.',
    info: {
      title: 'Contact information',
      address: {
        title: 'Address',
        line1: '123 Mohammed V Street',
        line2: 'Casablanca, 20000',
        line3: 'Morocco'
      },
      phone: {
        title: 'Phone'
      },
      email: {
        title: 'Email'
      },
      hours: {
        title: 'Opening hours',
        weekdays: 'Mon - Fri: 8:00 AM - 7:00 PM',
        saturday: 'Saturday: 9:00 AM - 5:00 PM',
        sunday: 'Sunday: 10:00 AM - 2:00 PM'
      }
    },
    whatsapp: 'Contact on WhatsApp',
    findUs: 'Find us',
    form: {
      title: 'Send us a message',
      name: 'Full name',
      email: 'Email',
      message: 'Message',
      sending: 'Sending...',
      send: 'Send message',
      success: 'Message sent successfully! We will respond soon.',
      error: 'An error occurred. Please try again.'
    },
    urgent: {
      title: 'Need immediate assistance?',
      message: 'Our customer service is available by phone every day from 8 AM to 8 PM. Don\'t hesitate to call us at +212 522 123 456 for any questions or urgent booking requests.'
    }
  },
  footer: {
    description: 'Your trusted partner for car rental in Morocco. Quality vehicles at competitive prices.',
    quickLinks: 'Quick Links',
    contact: 'Contact',
    hours: 'Opening Hours',
    rights: 'All rights reserved.'
  }
};

// German translations
const de = {
  header: {
    home: 'Startseite',
    cars: 'Fahrzeuge',
    about: 'Über uns',
    contact: 'Kontakt',
    book: 'Jetzt buchen'
  },
  hero: {
    title: 'Autovermietung zum besten Preis',
    subtitle: 'Entdecken Sie unsere Flotte moderner und komfortabler Fahrzeuge für all Ihre Reisebedürfnisse.',
    viewCars: 'Unsere Fahrzeuge ansehen',
    bookNow: 'Jetzt buchen'
  },
  features: {
    title: 'Warum ROUKHAMI CAR wählen',
    modernVehicles: {
      title: 'Moderne Fahrzeuge',
      description: 'Unsere Flotte wird regelmäßig erneuert, um Ihnen aktuelle und gut gewartete Fahrzeuge anzubieten.'
    },
    insurance: {
      title: 'Vollständige Versicherung',
      description: 'Alle unsere Fahrzeuge sind durch eine Vollkaskoversicherung für Ihre Sicherheit abgedeckt.'
    },
    service: {
      title: '24/7 Service',
      description: 'Unser Team steht Ihnen rund um die Uhr zur Verfügung, um alle Ihre Bedürfnisse zu erfüllen.'
    },
    prices: {
      title: 'Wettbewerbsfähige Preise',
      description: 'Wir bieten attraktive Tarife mit flexiblen Optionen nach Ihren Bedürfnissen.'
    }
  },
  featuredCars: {
    title: 'Unsere beliebten Fahrzeuge',
    viewAll: 'Alle anzeigen',
    available: 'verfügbar',
    availables: 'verfügbar',
    perDay: '/Tag'
  },
  cta: {
    title: 'Bereit für die Straße?',
    subtitle: 'Buchen Sie jetzt und profitieren Sie von unseren Sonderangeboten für Ihre nächste Anmietung.',
    bookNow: 'Jetzt buchen'
  },
  testimonials: {
    title: 'Was unsere Kunden sagen'
  },
  cars: {
    title: 'Unsere Fahrzeuge',
    subtitle: 'Entdecken Sie unsere vielfältige Auswahl an Fahrzeugen für alle Ihre Bedürfnisse, von wirtschaftlichen Kleinwagen bis hin zu geräumigen SUVs.',
    search: 'Nach einem Modell suchen...',
    allTransmissions: 'Alle Getriebe',
    manual: 'Manuell',
    automatic: 'Automatik',
    found: 'Fahrzeug gefunden',
    found_plural: 'Fahrzeuge gefunden',
    noResult: 'Kein Fahrzeug gefunden',
    modifySearch: 'Bitte ändern Sie Ihre Suchkriterien.'
  },
  booking: {
    title: 'Buchung',
    subtitle: 'Füllen Sie das untenstehende Formular aus, um Ihr Fahrzeug zu buchen. Unser Team wird sich in Kürze bei Ihnen melden, um Ihre Anfrage zu bestätigen.',
    form: {
      carModel: 'Fahrzeugmodell',
      selectModel: 'Wählen Sie ein Modell',
      fullName: 'Vollständiger Name',
      phone: 'Telefonnummer',
      startDate: 'Startdatum',
      endDate: 'Enddatum',
      pickupLocation: 'Abholungsort',
      license: 'Führerschein (PDF oder Bild)',
      uploadLicense: 'Klicken zum Hochladen',
      fileTypes: 'PDF, JPG, PNG (Max 5MB)',
      viaWhatsApp: 'Via WhatsApp buchen',
      bookNow: 'Jetzt buchen',
      processing: 'Verarbeitung...'
    },
    info: {
      title: 'Wichtige Informationen',
      idRequired: 'Ein gültiger Ausweis und Führerschein sind für jede Anmietung erforderlich.',
      minAge: 'Das Mindestalter für die Anmietung eines Fahrzeugs beträgt 21 Jahre.',
      deposit: 'Bei Abholung des Fahrzeugs ist eine Kaution erforderlich.',
      fuel: 'Kraftstoff ist nicht im Mietpreis enthalten.',
      insurance: 'Die Tarife beinhalten eine Vollkaskoversicherung.'
    },
    validation: {
      fillAllFields: 'Bitte füllen Sie alle Felder aus',
      uploadLicense: 'Bitte laden Sie eine Kopie Ihres Führerscheins hoch',
      endDateAfterStart: 'Das Enddatum muss nach dem Startdatum liegen',
      success: 'Buchung erfolgreich gesendet! Wir werden uns bald bei Ihnen melden.',
      error: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.'
    }
  },
  about: {
    title: 'Über uns',
    subtitle: 'Entdecken Sie ROUKHAMI CAR, Ihren vertrauenswürdigen Partner für Autovermietung in Marokko seit über 10 Jahren.',
    ourStory: {
      title: 'Unsere Geschichte',
      p1: 'Gegründet im Jahr 2012, entstand ROUKHAMI CAR aus der Leidenschaft eines marokkanischen Unternehmers für Automobile und exzellenten Kundenservice. Was als kleines Unternehmen mit nur 5 Fahrzeugen begann, hat sich zu einem anerkannten Unternehmen mit einer vielfältigen Flotte von mehr als 50 Fahrzeugen entwickelt.',
      p2: 'Unsere Mission ist es, die Autovermietung für alle unsere Kunden zugänglich, transparent und angenehm zu gestalten, ob sie Touristen, Geschäftsleute oder Einheimische sind.',
      p3: 'Heute sind wir stolz darauf, jedes Jahr Tausende von Kunden zu bedienen und ihnen ein problemloses Mieterlebnis und tadellos gewartete Fahrzeuge zu bieten.'
    },
    values: {
      title: 'Unsere Werte',
      transparency: {
        title: 'Transparenz',
        description: 'Wir glauben an klare Preisgestaltung und unkomplizierte Bedingungen. Was Sie sehen, ist was Sie zahlen.'
      },
      quality: {
        title: 'Qualität',
        description: 'Unsere Flotte wird regelmäßig erneuert und streng gewartet, um Sicherheit und Komfort zu gewährleisten.'
      },
      service: {
        title: 'Kundenservice',
        description: 'Unser engagiertes Team steht Ihnen bei jedem Schritt Ihrer Miete zur Verfügung, 7 Tage die Woche.'
      }
    },
    whyUs: {
      title: 'Warum ROUKHAMI CAR wählen?',
      fleet: 'Vielfältige Flotte',
      fleetDesc: 'Von wirtschaftlichen Kleinwagen bis hin zu geräumigen SUVs, wir haben das ideale Fahrzeug für Ihre Bedürfnisse.',
      prices: 'Wettbewerbsfähige Preise',
      pricesDesc: 'Transparente Tarife ohne versteckte Gebühren für eine sorgenfreie Miete.',
      service: 'Persönlicher Service',
      serviceDesc: 'Unser Team passt sich Ihren Bedürfnissen für ein maßgeschneidertes Erlebnis an.',
      delivery: 'Lieferung verfügbar',
      deliveryDesc: 'Wir können Ihr Fahrzeug ohne zusätzliche Kosten zum Flughafen oder zu Ihrem Hotel liefern.',
      assistance: '24/7 Unterstützung',
      assistanceDesc: 'Unser Team steht Ihnen bei Bedarf jederzeit zur Verfügung.'
    },
    team: {
      title: 'Unser Team',
      founder: 'Gründer & Direktor',
      customerService: 'Kundendienstleiter',
      technical: 'Technischer Leiter',
      reservations: 'Reservierungsleiter'
    },
    cta: {
      title: 'Bereit, den ROUKHAMI CAR Unterschied zu erleben?',
      subtitle: 'Kontaktieren Sie uns noch heute, um mehr über unsere Dienstleistungen zu erfahren oder eine Reservierung vorzunehmen.',
      contact: 'Kontaktieren Sie uns',
      book: 'Jetzt buchen'
    }
  },
  contact: {
    title: 'Kontakt',
    subtitle: 'Brauchen Sie Hilfe oder Informationen? Wir sind für Sie da. Kontaktieren Sie uns telefonisch, per E-Mail oder über unser Formular.',
    info: {
      title: 'Kontaktinformationen',
      address: {
        title: 'Adresse',
        line1: '123 Mohammed V Straße',
        line2: 'Casablanca, 20000',
        line3: 'Marokko'
      },
      phone: {
        title: 'Telefon'
      },
      email: {
        title: 'E-Mail'
      },
      hours: {
        title: 'Öffnungszeiten',
        weekdays: 'Mo - Fr: 8:00 - 19:00 Uhr',
        saturday: 'Samstag: 9:00 - 17:00 Uhr',
        sunday: 'Sonntag: 10:00 - 14:00 Uhr'
      }
    },
    whatsapp: 'Kontakt über WhatsApp',
    findUs: 'Finden Sie uns',
    form: {
      title: 'Senden Sie uns eine Nachricht',
      name: 'Vollständiger Name',
      email: 'E-Mail',
      message: 'Nachricht',
      sending: 'Senden...',
      send: 'Nachricht senden',
      success: 'Nachricht erfolgreich gesendet! Wir werden uns bald bei Ihnen melden.',
      error: 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.'
    },
    urgent: {
      title: 'Brauchen Sie sofortige Unterstützung?',
      message: 'Unser Kundenservice ist täglich von 8 bis 20 Uhr telefonisch erreichbar. Zögern Sie nicht, uns unter +212 522 123 456 anzurufen, wenn Sie Fragen haben oder dringende Buchungsanfragen stellen möchten.'
    }
  },
  footer: {
    description: 'Ihr vertrauenswürdiger Partner für Autovermietung in Marokko. Qualitätsfahrzeuge zu wettbewerbsfähigen Preisen.',
    quickLinks: 'Schnelllinks',
    contact: 'Kontakt',
    hours: 'Öffnungszeiten',
    rights: 'Alle Rechte vorbehalten.'
  }
};

// Spanish translations
const es = {
  header: {
    home: 'Inicio',
    cars: 'Coches',
    about: 'Nosotros',
    contact: 'Contacto',
    book: 'Reservar'
  },
  hero: {
    title: 'Alquiler de coches al mejor precio',
    subtitle: 'Descubra nuestra flota de vehículos modernos y cómodos para todas sus necesidades de viaje.',
    viewCars: 'Ver nuestros vehículos',
    bookNow: 'Reservar ahora'
  },
  features: {
    title: 'Por qué elegir ROUKHAMI CAR',
    modernVehicles: {
      title: 'Vehículos modernos',
      description: 'Nuestra flota se renueva regularmente para ofrecerle vehículos recientes y bien mantenidos.'
    },
    insurance: {
      title: 'Seguro completo',
      description: 'Todos nuestros vehículos están cubiertos por un seguro a todo riesgo para su tranquilidad.'
    },
    service: {
      title: 'Servicio 24/7',
      description: 'Nuestro equipo está disponible las 24 horas del día, los 7 días de la semana para atender todas sus necesidades.'
    },
    prices: {
      title: 'Precios competitivos',
      description: 'Ofrecemos tarifas atractivas con opciones flexibles según sus necesidades.'
    }
  },
  featuredCars: {
    title: 'Nuestros vehículos populares',
    viewAll: 'Ver todos',
    available: 'disponible',
    availables: 'disponibles',
    perDay: '/día'
  },
  cta: {
    title: '¿Listo para tomar la carretera?',
    subtitle: 'Reserve ahora y benefíciese de nuestras ofertas especiales para su próximo alquiler.',
    bookNow: 'Reservar ahora'
  },
  testimonials: {
    title: 'Lo que dicen nuestros clientes'
  },
  cars: {
    title: 'Nuestros Vehículos',
    subtitle: 'Descubra nuestra variada gama de vehículos para satisfacer todas sus necesidades, desde pequeños coches económicos hasta SUV espaciosos.',
    search: 'Buscar un modelo...',
    allTransmissions: 'Todas las transmisiones',
    manual: 'Manual',
    automatic: 'Automático',
    found: 'vehículo encontrado',
    found_plural: 'vehículos encontrados',
    noResult: 'No se encontró ningún vehículo',
    modifySearch: 'Por favor, modifique sus criterios de búsqueda.'
  },
  booking: {
    title: 'Reserva',
    subtitle: 'Complete el formulario a continuación para reservar su vehículo. Nuestro equipo se pondrá en contacto con usted en breve para confirmar su solicitud.',
    form: {
      carModel: 'Modelo de coche',
      selectModel: 'Seleccione un modelo',
      fullName: 'Nombre completo',
      phone: 'Número de teléfono',
      startDate: 'Fecha de inicio',
      endDate: 'Fecha de fin',
      pickupLocation: 'Lugar de recogida',
      license: 'Permiso de conducir (PDF o imagen)',
      uploadLicense: 'Haga clic para subir',
      fileTypes: 'PDF, JPG, PNG (Max 5MB)',
      viaWhatsApp: 'Reservar vía WhatsApp',
      bookNow: 'Reservar Ahora',
      processing: 'Procesando...'
    },
    info: {
      title: 'Información importante',
      idRequired: 'Se requiere un documento de identidad válido y un permiso de conducir para cualquier alquiler.',
      minAge: 'La edad mínima para alquilar un vehículo es de 21 años.',
      deposit: 'Se requerirá un depósito al recoger el vehículo.',
      fuel: 'El combustible no está incluido en el precio del alquiler.',
      insurance: 'Las tarifas incluyen un seguro a todo riesgo.'
    },
    validation: {
      fillAllFields: 'Por favor, complete todos los campos',
      uploadLicense: 'Por favor, suba una copia de su permiso de conducir',
      endDateAfterStart: 'La fecha de finalización debe ser posterior a la fecha de inicio',
      success: '¡Reserva enviada con éxito! Nos pondremos en contacto con usted pronto.',
      error: 'Se ha producido un error. Por favor, inténtelo de nuevo.'
    }
  },
  about: {
    title: 'Nosotros',
    subtitle: 'Descubra ROUKHAMI CAR, su socio de confianza para el alquiler de coches en Marruecos desde hace más de 10 años.',
    ourStory: {
      title: 'Nuestra Historia',
      p1: 'Fundada en 2012, ROUKHAMI CAR nació de la pasión de un empresario marroquí por los automóviles y la excelencia en el servicio al cliente. Lo que comenzó como una pequeña empresa con solo 5 vehículos se ha convertido en una empresa reconocida con una flota diversa de más de 50 vehículos.',
      p2: 'Nuestra misión es hacer que el alquiler de coches sea accesible, transparente y agradable para todos nuestros clientes, ya sean turistas, profesionales o residentes locales.',
      p3: 'Hoy, estamos orgullosos de servir a miles de clientes cada año, ofreciéndoles una experiencia de alquiler sin problemas y vehículos impecablemente mantenidos.'
    },
    values: {
      title: 'Nuestros Valores',
      transparency: {
        title: 'Transparencia',
        description: 'Creemos en precios claros y condiciones sencillas. Lo que ve es lo que paga.'
      },
      quality: {
        title: 'Calidad',
        description: 'Nuestra flota se renueva regularmente y se mantiene rigurosamente para garantizar la seguridad y el confort.'
      },
      service: {
        title: 'Servicio al cliente',
        description: 'Nuestro equipo dedicado está disponible para ayudarle en cada paso de su alquiler, los 7 días de la semana.'
      }
    },
    whyUs: {
      title: '¿Por qué elegir ROUKHAMI CAR?',
      fleet: 'Flota diversa',
      fleetDesc: 'Desde compactos económicos hasta SUV espaciosos, tenemos el vehículo ideal para sus necesidades.',
      prices: 'Precios competitivos',
      pricesDesc: 'Tarifas transparentes sin cargos ocultos para un alquiler sin preocupaciones.',
      service: 'Servicio personalizado',
      serviceDesc: 'Nuestro equipo se adapta a sus necesidades para una experiencia a medida.',
      delivery: 'Entrega disponible',
      deliveryDesc: 'Podemos entregar su vehículo en el aeropuerto o en su hotel sin coste adicional.',
      assistance: 'Asistencia 24/7',
      assistanceDesc: 'Nuestro equipo permanece a su disposición en todo momento en caso de necesidad.'
    },
    team: {
      title: 'Nuestro Equipo',
      founder: 'Fundador y Director',
      customerService: 'Gerente de Servicio al Cliente',
      technical: 'Gerente Técnico',
      reservations: 'Gerente de Reservas'
    },
    cta: {
      title: '¿Listo para experimentar la diferencia ROUKHAMI CAR?',
      subtitle: 'Contáctenos hoy para obtener más información sobre nuestros servicios o para hacer una reserva.',
      contact: 'Contáctenos',
      book: 'Reservar ahora'
    }
  },
  contact: {
    title: 'Contacto',
    subtitle: '¿Necesita ayuda o información? Estamos aquí para usted. Contáctenos por teléfono, correo electrónico o utilizando nuestro formulario.',
    info: {
      title: 'Información de contacto',
      address: {
        title: 'Dirección',
        line1: '123 Calle Mohammed V',
        line2: 'Casablanca, 20000',
        line3: 'Marruecos'
      },
      phone: {
        title: 'Teléfono'
      },
      email: {
        title: 'Correo electrónico'
      },
      hours: {
        title: 'Horario de apertura',
        weekdays: 'Lun - Vie: 8:00 - 19:00',
        saturday: 'Sábado: 9:00 - 17:00',
        sunday: 'Domingo: 10:00 - 14:00'
      }
    },
    whatsapp: 'Contactar en WhatsApp',
    findUs: 'Encuéntrenos',
    form: {
      title: 'Envíenos un mensaje',
      name: 'Nombre completo',
      email: 'Correo electrónico',
      message: 'Mensaje',
      sending: 'Enviando...',
      send: 'Enviar mensaje',
      success: '¡Mensaje enviado con éxito! Le responderemos pronto.',
      error: 'Se ha producido un error. Por favor, inténtelo de nuevo.'
    },
    urgent: {
      title: '¿Necesita asistencia inmediata?',
      message: 'Nuestro servicio al cliente está disponible por teléfono todos los días de 8:00 a 20:00. No dude en llamarnos al +212 522 123 456 para cualquier pregunta o solicitud de reserva urgente.'
    }
  },
  footer: {
    description: 'Su socio de confianza para el alquiler de coches en Marruecos. Vehículos de calidad a precios competitivos.',
    quickLinks: 'Enlaces Rápidos',
    contact: 'Contacto',
    hours: 'Horario de Apertura',
    rights: 'Todos los derechos reservados.'
  }
};

export const translations = {
  fr,
  en,
  de,
  es
};
