import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  Users,
  Heart,
  Music,
  Waves,
  MapPin,
  Droplets
} from "lucide-react";

import CalendlyEmbed from "../components/CalendlyEmbed";

// Calendly URL
const CALENDLY_URL = "https://calendly.com/cheryl-sayogasafaris";

// ✅ STRUCTURED SECTIONS
const sections = [
  {
    title: "Corporate Yoga",
    description: "Wellness sessions for teams, offices, and retreats.",
    packages: [
      {
        title: "Corporate Yoga Session",
        duration: "60 minutes",
        price: "Custom pricing",
        people: "Up to 8 people (additional per person)",
        location: "On Location (Office / Venue)",
        icon: Users,
        type: "enquire"
      }
    ]
  },
  {
    title: "Visitors & Mobile Sessions",
    description: "Perfect for holidaymakers visiting Ballito.",
    packages: [
      {
        title: "Private Yoga Session",
        duration: "60 minutes",
        price: "R650 (+R150 per extra person)",
        people: "1–8 people",
        location: "On Location (Home / Accommodation)",
        icon: Heart,
        type: "book"
      },
      {
        title: "Group Yoga & Sound Journey",
        duration: "60 minutes",
        price: "R1999 (up to 8 people, additional per person)",
        people: "Groups",
        location: "On Location",
        icon: Music,
        type: "book"
      },
      {
        title: "Sound Journey",
        duration: "60 minutes",
        price: "From R800",
        people: "All Levels",
        location: "On Location or In Studio",
        icon: Music,
        type: "book"
      }
    ]
  },
  {
    title: "Studio Classes",
    description: "Ongoing classes at the studio for local practitioners.",
    packages: [
      {
        title: "Drop-in Class",
        duration: "60 minutes",
        price: "R130",
        people: "All Levels",
        location: "In Studio (Ballito)",
        icon: Users,
        type: "book"
      }
    ]
  }
];

export default function Booking() {

  const handleBookingClick = (pkg) => {
    if (pkg.type === "enquire") {
      window.location.href = "/contact";
    } else {
      window.open(CALENDLY_URL, "_blank");
    }
  };

  const getButtonText = (pkg) => {
    return pkg.type === "enquire" ? "Enquire" : "Book";
  };

  return (
    <div>
      {/* HERO */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://media.base44.com/images/public/69d8b9a35e6ab29a2127374b/3e26628f7_generated_7b319b32.png"
            className="w-full h-full object-cover"
            alt="Yoga class"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ocean/20 to-transparent" />
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <Waves className="h-4 w-4 text-white/60" />
            <span className="text-xs tracking-[0.4em] uppercase text-white/60">
              Start Your Journey
            </span>
            <Waves className="h-4 w-4 text-white/60" />
          </motion.div>

          <h1 className="font-heading text-4xl md:text-6xl font-light text-white">
            Book Your Session
          </h1>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-16">

          {sections.map((section, idx) => (
            <div key={idx}>
              {/* Section Heading */}
              <div className="mb-6 text-center">
                <div className="flex justify-center mb-2">
                  <div className="w-12 h-px bg-ocean/30" />
                  <Droplets className="h-4 w-4 text-ocean/40 mx-2" />
                  <div className="w-12 h-px bg-ocean/30" />
                </div>
                <h2 className="font-heading text-2xl md:text-3xl text-foreground">
                  {section.title}
                </h2>
                <p className="text-sm text-muted-foreground mt-2">
                  {section.description}
                </p>
              </div>

              {/* Packages */}
              <div className="space-y-4">
                {section.packages.map((pkg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-card border border-border hover:border-ocean/30 p-6 rounded-sm transition-all duration-300 flex flex-col md:flex-row justify-between gap-4"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <pkg.icon className="h-5 w-5 text-ocean" />
                        <h3 className="text-xl font-heading text-foreground">
                          {pkg.title}
                        </h3>
                      </div>

                      <p className="text-xs text-muted-foreground mb-2 flex items-center gap-2">
                        <MapPin className="h-3 w-3" /> {pkg.location}
                      </p>

                      <div className="flex gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" /> {pkg.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="h-3 w-3" /> {pkg.people}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-6">
                      <span className="text-ocean font-medium min-w-[140px] text-right">
                        {pkg.price}
                      </span>

                      <button
                        onClick={() => handleBookingClick(pkg)}
                        className="px-6 py-3 bg-ocean text-white text-xs uppercase tracking-widest hover:bg-ocean-dark transition rounded-sm"
                      >
                        {getButtonText(pkg)}
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}

        </div>

        {/* PAYMENT INFO */}
        <div className="mt-16 text-center bg-ocean/5 border border-ocean/20 p-6 rounded-lg max-w-3xl mx-auto">
          <p className="text-sm text-muted-foreground">
            💳 <span className="text-ocean font-medium">Payment process:</span>{" "}
            After booking, you will receive a confirmation email with a secure payment link.
            Your session is confirmed once payment is completed.
          </p>
        </div>

        {/* CALENDLY */}
        <div className="mt-20">
          <div className="text-center mb-6">
            <Calendar className="h-8 w-8 text-ocean/40 mx-auto mb-2" />
            <h3 className="font-heading text-xl md:text-2xl text-foreground">
              Select Your Date & Time
            </h3>
            <p className="text-sm text-muted-foreground">
              Choose your preferred time after selecting a package above
            </p>
          </div>

          <CalendlyEmbed url={CALENDLY_URL} />
        </div>

        {/* CONTACT */}
        <div className="mt-12 text-center">
          <Link to="/contact" className="text-ocean hover:underline text-sm">
            Need help? Contact us
          </Link>
        </div>
      </section>

      {/* QUOTE */}
      <section className="relative py-12 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-ocean-dark/90" />
        <div className="relative text-center text-white">
          <Waves className="h-6 w-6 mx-auto mb-3 text-white/40" />
          <p className="font-heading text-lg italic">
            "If you can breathe, you can do yoga"
          </p>
        </div>
      </section>
    </div>
  );
}