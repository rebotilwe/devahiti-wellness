import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowRight, Waves, Droplets, MapPin, Star } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import FreeTrialPopup from "../components/FreeTrialPopup";

// Import client images (place them in src/assets/images/)
import philosophyImg from "../assets/img2.jpg";  // Yoga/massage action shot
import quoteBgImg from "../assets/img3.jpg";    // Peaceful setting
import trainingImg from "../assets/img4.JPG";   // Teacher training / studio shot

const services = [
  {
    id: "group",
    title: "Studio Drop-in Class",
    description:
      "Join an existing class at the studio. Suitable for all levels. Monthly memberships also available.",
    duration: "60 min",
    price: "R130 drop-in",
    location: "📍 In Studio",
    image:
      "https://media.base44.com/images/public/69d8b9a35e6ab29a2127374b/c514b05a9_generated_8e04c8ff.png",
    bookingType: "group",
  },
  {
    id: "private",
    title: "Private Yoga Session",
    description:
      "Personalised session at your home or accommodation. Perfect for holidaymakers.",
    duration: "60 min",
    price: "R650 (+R150 per extra person)",
    location: "📍 On Location",
    image:
      "https://media.base44.com/images/public/69d8b9a35e6ab29a2127374b/0ce063086_generated_ab60dfbd.png",
    bookingType: "private",
  },
  {
    id: "sound",
    title: "Sound Journey",
    description:
      "A restorative sound healing experience for deep relaxation at your accommodation.",
    duration: "60 min",
    price: "From R800",
    location: "📍 On Location",
    image:
      "https://media.base44.com/images/public/69d8b9a35e6ab29a2127374b/90b6a8f9b_generated_85845fa4.png",
    bookingType: "sound",
  },
  {
    id: "corporate",
    title: "Corporate Yoga",
    description:
      "Wellness sessions for teams and events at your location. Great for team building.",
    duration: "60 min",
    price: "R1999 (up to 8 people)",
    location: "📍 On Location",
    image:
      "https://media.base44.com/images/public/69d8b9a35e6ab29a2127374b/8a896dbea_generated_4254f10c.png",
    bookingType: "corporate",
  },
  {
    id: "training",
    title: "Teacher Training",
    description:
      "200hr & 300hr advanced yoga teacher training programs starting May 2026.",
    duration: "Multi-month",
    price: "Enquire for pricing",
    location: "📍 In Studio",
    image:
      "https://media.base44.com/images/public/69d8b9a35e6ab29a2127374b/b9d7d7c6d_generated_c5fd17b8.png",
    bookingType: "enquire",
  },
];

const animatedWords = ["Breathe", "Center", "Align", "Flow", "Release", "Restore"];

export default function Home() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % animatedWords.length);
        setIsVisible(true);
      }, 300);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }}>
      
      {/* HERO - KEEP EXISTING IMAGE */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://media.base44.com/images/public/69d8b9a35e6ab29a2127374b/8a896dbea_generated_4254f10c.png"
            className="w-full h-full object-cover"
            alt="Yoga Practice"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-ocean/30 to-transparent" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <Waves className="h-4 w-4 text-ocean-light/60" />
            <span className="text-[10px] tracking-[0.5em] uppercase text-white/70">
              Welcome to Devahiti
            </span>
            <Waves className="h-4 w-4 text-ocean-light/60" />
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-light text-white leading-[1.2]"
          >
            Yoga & <br /> Movement Studio
          </motion.h1>

          {/* Clean Message - Client's original wording */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-white/80 text-base md:text-lg max-w-xl mx-auto mt-6 leading-relaxed"
          >
            Feeling overwhelmed, rushed, burned out? Through gentle postures, breathwork and mindful movement, we regulate your nervous system back into balance and harmony.
          </motion.p>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center justify-center gap-2 mt-5 text-white/60 text-sm"
          >
            <MapPin className="h-4 w-4" />
            Ballito • In Studio & On Location
          </motion.div>

          {/* Animated words */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-5"
          >
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <span className="text-white/60 text-sm tracking-wide">Find your flow —</span>
              <div className="relative inline-block min-w-[130px] text-center">
                <motion.span
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
                  transition={{ duration: 0.3 }}
                  className="text-white text-lg md:text-2xl font-heading font-semibold inline-block drop-shadow-lg"
                  style={{ color: '#8fc9d1', textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
                >
                  {animatedWords[currentWordIndex]}
                </motion.span>
              </div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-5 justify-center mt-10"
          >
            <Link
              to="/booking"
              className="px-12 py-4 bg-ocean text-white text-[11px] font-medium uppercase tracking-[0.3em] hover:bg-ocean-dark transition-all rounded-sm shadow-xl shadow-ocean/10"
            >
              Book a Session
            </Link>
            <Link
              to="/services"
              className="px-12 py-4 border border-white/20 text-white text-[11px] font-medium uppercase tracking-[0.3em] hover:bg-white/10 transition-all rounded-sm backdrop-blur-sm"
            >
              View Services
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-white/30 text-[8px] tracking-[0.3em] uppercase">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-transparent to-white/30" />
          </div>
        </motion.div>
      </section>

      {/* Choose Your Experience Section */}
      <section className="py-20 lg:py-28 px-6 bg-ocean/5 border-y border-ocean/10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Droplets className="h-10 w-10 text-ocean/40 mx-auto mb-6" />
            <h2 className="font-heading text-3xl md:text-4xl font-light text-foreground mb-4">
              Choose Your Experience
            </h2>
            <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
              Whether you're a local, a corporate team, or visiting Ballito — we have the perfect wellness experience for you.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Corporate Yoga Card */}
              <div className="bg-white border border-ocean/20 p-8 rounded-sm hover:shadow-lg transition-shadow">
                <h3 className="font-heading text-2xl text-foreground mb-2">Corporate Yoga</h3>
                <p className="text-muted-foreground mb-3">Sessions at your location for teams & events</p>
                <p className="text-xs text-ocean mb-4">📍 On Location • 60 min</p>
                <p className="text-sm font-medium text-foreground mb-4">R1999 (up to 8 people)</p>
                <Link to="/booking" className="inline-block bg-ocean text-white px-6 py-2 text-sm uppercase tracking-wider hover:bg-ocean-dark transition rounded-sm">
                  View Packages
                </Link>
              </div>

              {/* Visiting Ballito Card */}
              <div className="bg-white border border-ocean/20 p-8 rounded-sm hover:shadow-lg transition-shadow">
                <h3 className="font-heading text-2xl text-foreground mb-2">Visiting Ballito</h3>
                <p className="text-muted-foreground mb-3">Private yoga & sound sessions for holiday guests</p>
                <p className="text-xs text-ocean mb-4">📍 At your accommodation • 60 min</p>
                <p className="text-sm font-medium text-foreground mb-4">From R650</p>
                <Link to="/booking" className="inline-block bg-ocean text-white px-6 py-2 text-sm uppercase tracking-wider hover:bg-ocean-dark transition rounded-sm">
                  View Packages
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            subtitle="What We Offer"
            title="Our Classes & Experiences"
            description="Whether you are just beginning or deepening your journey, our offerings are designed to support your mind, body and spirit."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mt-20">
            {services.map((service, i) => (
              <ServiceCard key={i} {...service} index={i} />
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/services"
              className="inline-flex items-center gap-3 px-10 py-4 border border-ocean/30 text-ocean text-xs font-medium tracking-[0.3em] uppercase hover:bg-ocean hover:text-white transition-all duration-500 rounded-sm"
            >
              View All Classes <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Devahiti Meaning Section */}
      <section className="py-20 lg:py-28 px-6 bg-gradient-to-b from-white to-ocean/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-12 h-px bg-ocean/30" />
              <span className="mx-3 text-ocean/50 text-xs">✦</span>
              <div className="w-12 h-px bg-ocean/30" />
            </div>
            <p className="font-heading text-2xl md:text-3xl lg:text-4xl text-foreground leading-relaxed mb-6">
              Devahiti is a Sanskrit word meaning <span className="text-ocean">Divine</span> or{" "}
              <span className="text-ocean">Natural Order</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section - REPLACED IMAGE */}
      <section className="py-20 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-ocean/30 rounded-tl-2xl" />
                <img
                  src={philosophyImg}
                  alt="Yoga practice with Cheryl"
                  className="w-full max-w-md mx-auto lg:mx-0 object-cover relative z-10"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-ocean/30 rounded-br-2xl" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <p className="text-xs tracking-[0.3em] uppercase text-ocean">
                Rooted in Science & Tradition
              </p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-foreground leading-tight">
                An All-Encompassing Yogic System
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Rooted in science and evidence-based movement practices, in conjunction with time-honoured 
                yogic principles, Devahiti Yoga is designed to facilitate alignment and harmony.
              </p>

              <div className="bg-ocean/5 p-4 rounded-lg border-l-4 border-ocean">
                <p className="text-ocean font-heading text-lg italic">
                  "If you can breathe, you can do yoga!"
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quote Banner - REPLACED IMAGE */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={quoteBgImg}
            alt="Peaceful yoga setting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-ocean-dark/70" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Waves className="h-8 w-8 text-white/40 mx-auto mb-4" />
            <p className="font-heading text-2xl md:text-3xl lg:text-4xl italic text-white leading-relaxed mb-6">
              "I strive to encourage those who think 'they can't do yoga', to become those who can...
            </p>
            <p className="font-heading text-xl md:text-2xl text-white/90 italic">
              because if you can breathe, you can do yoga!"
            </p>
            <p className="text-sm text-white/60 mt-6">
              We welcome all practitioners from beginners through advanced and special needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Teacher Training CTA - ADDED BACKGROUND IMAGE */}
      <section className="relative py-20 lg:py-28 px-6 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={trainingImg}
            alt="Yoga teacher training"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-ocean/80" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-white/30 text-white/30" />
              ))}
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4">
              200 hour & 300 hour Advanced Teacher Training
            </h2>
            <p className="text-xl text-white/80 mb-4">
              200hr: Starts May 16-17, 2026 | 300hr: Starts May 2-3, 2026
            </p>
            <p className="text-base text-white/70 leading-relaxed mb-8 max-w-2xl mx-auto">
              Deepen your practice and become a certified instructor. Our comprehensive training programs 
              are rooted in science and time-honoured yogic principles.
            </p>
            <Link
              to="/contact"
              className="inline-flex px-10 py-4 bg-white text-ocean text-xs font-medium tracking-[0.3em] uppercase hover:bg-white/90 transition-all duration-300 rounded-sm"
            >
              Enquire About Training
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Free Trial Popup */}
      <FreeTrialPopup />
    </motion.div>
  );
}