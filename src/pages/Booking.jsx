import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  Calendar,
  Clock,
  Users,
  Heart,
  Music,
  Waves,
  MapPin,
  Droplets,
  ArrowRight
} from "lucide-react";

import CalendlyEmbed from "../components/CalendlyEmbed";

const CALENDLY_URL = "https://calendly.com/cheryl-sayogasafaris";

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
        location: "📍 On Location (Office / Venue)",
        icon: Users,
        type: "enquire"
      }
    ]
  },
  {
    title: "Visitors & Mobile Sessions",
    description: "Perfect for holidaymakers from Johannesburg visiting Ballito.",
    packages: [
      {
        title: "Private Yoga Session",
        duration: "60 minutes",
        price: "R650 (+R150 per extra person)",
        people: "1–8 people",
        location: "📍 On Location (Accommodation)",
        icon: Heart,
        type: "book"
      },
      {
        title: "Group Yoga & Sound Journey",
        duration: "60 minutes",
        price: "R1999 (up to 8 people) + R150 per extra person",
        people: "Groups",
        location: "📍 On Location",
        icon: Music,
        type: "book"
      },
      {
        title: "Sound Journey",
        duration: "60 minutes",
        price: "From R800",
        people: "All Levels",
        location: "📍 On Location or In Studio (confirmed after booking)",
        icon: Music,
        type: "book"
      }
    ]
  },
  {
    title: "Studio Classes",
    description: "For local practitioners. Not heavily promoted as classes are already performing well.",
    packages: [
      {
        title: "Drop-in Class",
        duration: "60 minutes",
        price: "R130",
        people: "All Levels",
        location: "📍 In Studio (Ballito)",
        icon: Users,
        type: "book"
      }
    ]
  }
];

export default function Booking() {
  const navigate = useNavigate();
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleSelectPackage = (pkg) => {
    if (pkg.type === "enquire") {
      navigate("/contact");
    } else {
      setSelectedPackage(pkg);
      setTimeout(() => {
        document.getElementById("calendar-section")?.scrollIntoView({ 
          behavior: "smooth" 
        });
      }, 100);
    }
  };

  return (
    <div>
      {/* HERO with Ocean Wave Overlay */}
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
            transition={{ duration: 0.8 }}
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

      {/* PACKAGES SECTION */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-16">

          {sections.map((section, idx) => (
            <div key={idx}>
              {/* Section Heading with Droplets */}
              <div className="mb-6 text-center">
                <div className="flex justify-center mb-2">
                  <div className="w-12 h-px bg-ocean/30" />
                  <Droplets className="h-4 w-4 text-ocean/40 mx-2" />
                  <div className="w-12 h-px bg-ocean/30" />
                </div>
                <h2 className="font-heading text-2xl md:text-3xl text-foreground">
                  {section.title}
                </h2>
                <p className="text-sm text-muted-foreground mt-2 max-w-2xl mx-auto">
                  {section.description}
                </p>
              </div>

              {/* Packages with selected state highlight */}
              <div className="space-y-4">
                {section.packages.map((pkg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className={`bg-card border p-6 rounded-sm transition-all duration-300 flex flex-col md:flex-row justify-between gap-4 
                      ${selectedPackage?.title === pkg.title 
                        ? "border-ocean shadow-md bg-ocean/5" 
                        : "border-border hover:border-ocean/30"
                      }`}
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

                      <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
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
                        onClick={() => handleSelectPackage(pkg)}
                        className={`px-6 py-3 text-xs uppercase tracking-widest transition rounded-sm whitespace-nowrap
                          ${selectedPackage?.title === pkg.title 
                            ? "bg-ocean-dark text-white" 
                            : "bg-ocean text-white hover:bg-ocean-dark"
                          }`}
                      >
                        {pkg.type === "enquire" ? "Enquire" : "Choose Session"}
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}

        </div>

        {/* CALENDLY SECTION - Only shows after package selection with animation */}
        <div id="calendar-section" className="mt-16">
          {selectedPackage ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-ocean/5 border border-ocean/20 p-6 md:p-8 rounded-lg"
            >
              <div className="text-center mb-6">
                <h3 className="font-heading text-xl md:text-2xl text-foreground">
                  Choose Your Date & Time
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  You are booking: <span className="font-medium text-ocean">{selectedPackage.title}</span>
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  ⏱️ All sessions are 60 minutes
                </p>
              </div>

              <CalendlyEmbed url={CALENDLY_URL} />

              {/* Address requirement note */}
              <p className="text-xs text-muted-foreground text-center mt-4">
                📍 <span className="font-medium">Important:</span> You will be required to provide your address during booking for all on-location sessions.
              </p>
            </motion.div>
          ) : (
            <div className="text-center py-12 bg-muted/30 border border-border rounded-lg">
              <Calendar className="h-10 w-10 text-ocean/40 mx-auto mb-3" />
              <p className="text-muted-foreground text-sm">
                Select a package above to begin your booking
              </p>
            </div>
          )}
        </div>

        {/* Payment Info */}
        <div className="mt-12 text-center bg-ocean/5 border border-ocean/20 p-6 rounded-lg max-w-3xl mx-auto">
          <p className="text-sm text-muted-foreground">
            💳 <span className="text-ocean font-medium">Payment process:</span>{" "}
            After booking via Calendly, you will receive a confirmation email with a secure Yoco payment link.
            Your session is confirmed once payment is completed.
          </p>
        </div>

        {/* Contact */}
        <div className="mt-12 text-center">
          <Link to="/contact" className="text-ocean hover:underline text-sm inline-flex items-center gap-1">
            Need help? Contact us <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </section>

      {/* QUOTE SECTION */}
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