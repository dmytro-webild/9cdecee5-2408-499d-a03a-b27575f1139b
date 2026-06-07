"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureBorderGlow from '@/components/sections/feature/featureBorderGlow/FeatureBorderGlow';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import MediaAbout from '@/components/sections/about/MediaAbout';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import PricingCardNine from '@/components/sections/pricing/PricingCardNine';
import TeamCardEleven from '@/components/sections/team/TeamCardEleven';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import { Crown, Droplet, Feather, Leaf, Palette, Phone, Scissors, Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="hover-bubble"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="compact"
        sizing="large"
        background="grid"
        cardStyle="gradient-bordered"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="layered"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Home",          id: "#hero"},
        {
          name: "Chi Siamo",          id: "#about"},
        {
          name: "Servizi",          id: "#services"},
        {
          name: "Prezzi",          id: "#pricing"},
        {
          name: "Testimonianze",          id: "#testimonials"},
        {
          name: "Team",          id: "#team"},
        {
          name: "FAQ",          id: "#faq"},
        {
          name: "Contatti",          id: "#contact"},
      ]}
      button={{
        text: "Prenota Ora",        href: "#contact"}}
      logoSrc="http://img.b2bpic.net/free-photo/monochrome-beauty-product-skincare_23-2151307296.jpg"
      logoAlt="L&Z Hair Salon Logo"
      brandName="L&Z Hair Salon"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplit
      background={{
        variant: "radial-gradient"}}
      imagePosition="right"
      title="Trasforma il tuo Stile con L&Z Hair Salon"
      description="Esperienza, professionalità e passione per la bellezza dei tuoi capelli. Scopri i nostri servizi esclusivi e lasciati coccolare."
      tag="Benvenuti"
      tagIcon={Sparkles}
      buttons={[
        {
          text: "Prenota Ora",          href: "#contact"},
        {
          text: "Scopri i Servizi",          href: "#services"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/barbershop-washbasin-with-professional-chairs_23-2148298338.jpg"
      imageAlt="Donna con acconciatura elegante in un salone di bellezza"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/young-businesswoman-portrait-office_1262-1506.jpg",          alt: "Cliente soddisfatta 1"},
        {
          src: "http://img.b2bpic.net/free-photo/confident-african-american-businessman-black-classic-jacket-isolated-dark-background_613910-17885.jpg",          alt: "Cliente soddisfatto 2"},
        {
          src: "http://img.b2bpic.net/free-photo/attractive-woman-with-short-haircut_613910-13463.jpg",          alt: "Cliente con nuovo look"},
        {
          src: "http://img.b2bpic.net/free-photo/young-gardener-woman-with-short-hair-apron-hat-holding-eggplant-smiling-confident_141793-47353.jpg",          alt: "Parrucchiera esperta"},
        {
          src: "http://img.b2bpic.net/free-photo/low-angle-man-getting-haircut_23-2150665404.jpg",          alt: "Cliente contento"},
      ]}
      avatarText="Oltre 1000 clienti felici"
      marqueeItems={[
        {
          type: "text-icon",          text: "Stile impeccabile",          icon: Sparkles,
        },
        {
          type: "text-icon",          text: "Cura dei capelli",          icon: Droplet,
        },
        {
          type: "text-icon",          text: "Look personalizzato",          icon: Crown,
        },
        {
          type: "text-icon",          text: "Colori brillanti",          icon: Palette,
        },
        {
          type: "text-icon",          text: "Relax totale",          icon: Leaf,
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MediaAbout
      useInvertedBackground={false}
      title="Chi Siamo: Passione e Stile"
      description="L&Z Hair Salon nasce dalla visione di creare uno spazio dove la bellezza e il benessere dei capelli sono al centro. Con anni di esperienza, offriamo trattamenti personalizzati per esaltare la tua unicità, in un ambiente accogliente e professionale."
      tag="La Nostra Storia"
      imageSrc="http://img.b2bpic.net/free-photo/model-career-kit-still-life-top-view_23-2150217981.jpg"
      imageAlt="Interno moderno di un salone di parrucchieri"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureBorderGlow
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          icon: Scissors,
          title: "Taglio Personalizzato",          description: "Ascoltiamo le tue esigenze per creare un taglio che valorizzi la tua personalità e forma del viso."},
        {
          icon: Palette,
          title: "Colorazione Avanzata",          description: "Tecniche di colorazione innovative per risultati vibranti, duraturi e rispettosi della salute dei capelli."},
        {
          icon: Sparkles,
          title: "Acconciature per Eventi",          description: "Dalle pieghe classiche alle acconciature elaborate per matrimoni e occasioni speciali."},
        {
          icon: Droplet,
          title: "Trattamenti Specifici",          description: "Soluzioni mirate per capelli secchi, danneggiati, con prodotti professionali e naturali."},
        {
          icon: Feather,
          title: "Extension & Infoltimenti",          description: "Aggiungi volume e lunghezza con extension di alta qualità, applicate da esperti."},
        {
          icon: Droplet,
          title: "Consulenza di Stile",          description: "Un consiglio esperto per guidarti nella scelta del look più adatto a te."},
      ]}
      title="I Nostri Servizi Esclusivi"
      description="Dall'ultimo taglio di tendenza alle colorazioni più audaci, offriamo una gamma completa di servizi per ogni esigenza. La cura dei tuoi capelli è la nostra priorità."
      tag="Cosa Offriamo"
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardNine
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "cut",          title: "Taglio & Piega",          price: "€25",          period: "a partire da",          features: [
            "Consulenza personalizzata",            "Lavaggio e massaggio cute",            "Taglio base o di tendenza",            "Messa in piega professionale"],
          button: {
            text: "Prenota Taglio",            href: "#contact"},
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-young-beautiful-lady-white-dress-holding-shopping-packages_140725-17590.jpg",          imageAlt: "Illustrazione di forbici e pettine"},
        {
          id: "color",          title: "Colorazione Completa",          price: "€50",          period: "a partire da",          features: [
            "Analisi del colore",            "Colorazione monocromatica",            "Trattamento post-colore",            "Piega inclusa"],
          button: {
            text: "Prenota Colore",            href: "#contact"},
          imageSrc: "http://img.b2bpic.net/free-photo/mid-section-view-barber-s-hand-with-shaving-brush_23-2147839815.jpg",          imageAlt: "Illustrazione di ciotola per colore e pennello"},
        {
          id: "highlights",          title: "Mèches & Balayage",          price: "€70",          period: "a partire da",          features: [
            "Consulenza approfondita",            "Tecniche di schiaritura avanzate",            "Tonalizzazione e gloss",            "Trattamento ristrutturante, piega inclusa"],
          button: {
            text: "Prenota Mèches",            href: "#contact"},
          imageSrc: "http://img.b2bpic.net/free-photo/male-make-up-look-beauty-salon_23-2148784344.jpg",          imageAlt: "Illustrazione di capelli con mèches"},
      ]}
      title="Listino Prezzi"
      description="Qualità e trasparenza per tutti i nostri servizi. Trova il trattamento perfetto per le tue esigenze e il tuo budget."
      tag="Prezzi Chiari"
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          title: "Professionalità Unica",          quote: "Il tutto con una professionalità unica in un salone bellissimo e pulitissimo. Ogni volta un'esperienza al top!",          name: "Giulia Rossi",          role: "Cliente Fidata",          imageSrc: "http://img.b2bpic.net/free-photo/team-bride-celebrating-before-wedding_23-2149329119.jpg",          imageAlt: "Cliente donna sorridente"},
        {
          id: "2",          title: "Super Soddisfatta!",          quote: "Ma la ragazza si è superata🥳 Super soddisfatta. Mi hanno creato un look meraviglioso, tornerò presto!",          name: "Maria Bianchi",          role: "Nuova Cliente",          imageSrc: "http://img.b2bpic.net/free-photo/front-view-barber-shop-concept_23-2148506366.jpg",          imageAlt: "Cliente donna con nuovo taglio"},
        {
          id: "3",          title: "Lo consiglio al 100%",          quote: "Molto bravi tutti lo consiglio al 100% anche molto umili con il prezzo. ❤️ Servizio impeccabile!",          name: "Elena Raffo",          role: "Local Guide",          imageSrc: "http://img.b2bpic.net/free-photo/gorgeous-beautiful-woman-green-elegant-dress-lying-black-leather-sofa-posing-camera-seductive-sexy-brunette-girl-with-perfect-make-up-after-beauty-salon-luxury-interior_132075-12140.jpg",          imageAlt: "Elena Raffo sorridente"},
        {
          id: "4",          title: "French Crop Cut Perfetto",          quote: "Ora che abito in zona ci sono andato due volte per un french crop cut e mi sono trovato bene. Ottima esperienza.",          name: "Stefano Agnini",          role: "Cliente Regolare",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-young-female-dentist-dentistry-concept-dental-treatment_169016-66957.jpg",          imageAlt: "Stefano Agnini soddisfatto"},
        {
          id: "5",          title: "Sempre al Top!",          quote: "L&Z Hair Salon è una garanzia! Ogni volta che vado, esco con un sorriso e una pettinatura impeccabile.",          name: "Laura Verdi",          role: "Clientela Fedele",          imageSrc: "http://img.b2bpic.net/free-photo/full-body-pictures-slim-girl-dark-dress_613910-14921.jpg",          imageAlt: "Cliente donna con taglio moderno"},
        {
          id: "6",          title: "Competenza e Cordialità",          quote: "Non solo sono bravissimi nel loro lavoro, ma anche estremamente cordiali. Mi sento sempre a casa qui!",          name: "Marco Gialli",          role: "Cliente Entusiasta",          imageSrc: "http://img.b2bpic.net/free-photo/woman-getting-treatment-hairdresser-shop_23-2149230928.jpg",          imageAlt: "Cliente uomo sorridente con hairstylist"},
      ]}
      title="Dicono di Noi"
      description="La soddisfazione dei nostri clienti è la nostra più grande ricompensa. Leggi cosa pensano della loro esperienza presso L&Z Hair Salon."
      tag="Recensioni Verificate"
    />
  </div>

  <div id="team" data-section="team">
      <TeamCardEleven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      groups={[
        {
          id: "stylists",          groupTitle: "I Nostri Stilisti",          members: [
            {
              id: "lucia",              title: "Lucia",              subtitle: "Direttrice Artistica",              detail: "Con oltre 15 anni di esperienza, Lucia è la mente creativa dietro ogni acconciatura di successo.",              imageSrc: "http://img.b2bpic.net/free-photo/portrait-woman-taking-off-black-glasses-red-wall_114579-56034.jpg",              imageAlt: "Ritratto di Lucia, direttrice artistica"},
            {
              id: "zara",              title: "Zara",              subtitle: "Specialista Colore",              detail: "Esperta in tecniche di colorazione avanzate e balayage, Zara porta luce e vita ai tuoi capelli.",              imageSrc: "http://img.b2bpic.net/free-photo/haircuting-process-small-dog-sits-table-dog-with-professional_1157-48811.jpg",              imageAlt: "Ritratto di Zara, specialista colore"},
            {
              id: "alessio",              title: "Alessio",              subtitle: "Maestro del Taglio Uomo",              detail: "Alessio è il punto di riferimento per i tagli maschili moderni e le sfumature perfette.",              imageSrc: "http://img.b2bpic.net/free-photo/front-view-smiley-bride-getting-ready_23-2149722037.jpg",              imageAlt: "Ritratto di Alessio, maestro del taglio uomo"},
          ]
        },
      ]}
      title="Incontra il Nostro Team"
      description="I volti dietro L&Z Hair Salon. Professionisti dedicati con anni di esperienza, pronti a trasformare il tuo look con maestria e passione."
      tag="Esperti di Stile"
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "faq1",          title: "Come posso prenotare un appuntamento?",          content: "Puoi prenotare facilmente chiamandoci al numero 339 339 8616 o utilizzando il modulo di contatto sul nostro sito."},
        {
          id: "faq2",          title: "Quali prodotti utilizzate?",          content: "Utilizziamo solo prodotti professionali di alta qualità, selezionati per garantire i migliori risultati e la massima cura per i tuoi capelli."},
        {
          id: "faq3",          title: "Offrite consulenze personalizzate?",          content: "Sì, offriamo consulenze gratuite per discutere il look desiderato e consigliarti il trattamento più adatto alle tue esigenze."},
        {
          id: "faq4",          title: "Accettate pagamenti con carta? ",          content: "Sì, accettiamo pagamenti con le principali carte di credito e debito, oltre al contante."},
      ]}
      title="Domande Frequenti"
      description="Hai domande sui nostri servizi, prenotazioni o prodotti? Trova qui le risposte che cerchi."
      tag="Info Utili"
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={false}
      background={{
        variant: "sparkles-gradient"}}
      tag="Contattaci"
      tagIcon={Phone}
      title="Prenota il Tuo Momento di Bellezza"
      description="Non aspettare! Contattaci oggi stesso per prenotare il tuo appuntamento e lasciati trasformare dal nostro team di esperti."
      buttons={[
        {
          text: "Chiama Ora: 339 339 8616",          href: "tel:+393393398616"},
        {
          text: "Vieni a Trovarci",          href: "https://www.google.com/maps/search/L%EF%BC%86Z+Hair+Salon+V.+Struppa,+29R,+16165+Genova+GE"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/elegant-female-model-wearing-red-glamorous-dress-soft-light-colored-spotlights-side-view-sexy_7502-10225.jpg"
      imageAlt="Esterno L&Z Hair Salon di sera"
      logoSrc="http://img.b2bpic.net/free-photo/monochrome-beauty-product-skincare_23-2151307296.jpg"
      logoAlt="L&Z Hair Salon Logo"
      logoText="L&Z Hair Salon"
      columns={[
        {
          title: "Servizi",          items: [
            {
              label: "Taglio",              href: "#services"},
            {
              label: "Colore",              href: "#services"},
            {
              label: "Acconciature",              href: "#services"},
            {
              label: "Trattamenti",              href: "#services"},
          ],
        },
        {
          title: "Salone",          items: [
            {
              label: "Chi Siamo",              href: "#about"},
            {
              label: "Team",              href: "#team"},
            {
              label: "Testimonianze",              href: "#testimonials"},
            {
              label: "FAQ",              href: "#faq"},
          ],
        },
        {
          title: "Contatti",          items: [
            {
              label: "V. Struppa, 29R, Genova GE",              href: "https://www.google.com/maps/search/L%EF%BC%86Z+Hair+Salon+V.+Struppa,+29R,+16165+Genova+GE"},
            {
              label: "339 339 8616",              href: "tel:+393393398616"},
            {
              label: "Prenota un appuntamento",              href: "#contact"},
          ],
        },
      ]}
      copyrightText="© 2024 L&Z Hair Salon. Tutti i diritti riservati."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
