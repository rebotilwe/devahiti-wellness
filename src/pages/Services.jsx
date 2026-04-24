import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock,
  Users,
  Heart,
  Music,
  Briefcase,
  Award,
  Waves,
  MapPin,
  Droplets
} from "lucide-react";

import SectionHeading from "../components/SectionHeading";

// Calendly URL
const CALENDLY_URL = "https://calendly.com/cheryl-sayogasafaris";

// ✅ GROUPED SERVICES (MATCH CLIENT STRUCTURE)
const sections = [
  {
    title: "Corporate Yoga",
    description: "Wellness sessions designed for teams, offices, and corporate retreats.",
    services: [
      {
        title: "Corporate Yoga Session",
        description:
          "Reduce stress, improve focus and bring balance into the workplace through guided yoga and movement.",
        duration: "60 minutes",
        price: "Custom pricing (Enquire)",
        location: "📍 On Location (Your Office / Venue)",
        icon: Briefcase,
        type: "enquire"
      }
    ]
  },
  {
    title: "Visitors & Mobile Sessions",
    description: "Perfect for holidaymakers from Johannesburg visiting Ballito.",
    services: [
      {
        title: "Private Yoga Session",
        description:
          "Personalised sessions at your home or accommodation, tailored to your needs.",
        duration: "60 minutes",
        price: "R650 + R150 per extra person",
        location: "📍 On Location (Home / Accommodation)",
        icon: Heart,
        type: "book",
        capacity: "1–8 people"
      },
      {
        title: "Group Yoga & Sound Journey",
        description:
          "A combination of mindful movement and sound healing, ideal for groups and retreats.",
        duration: "60 minutes",
        price: "R1999 (up to 8 people) + R150 per extra person",
        location: "📍 On Location",
        icon: Users,
        type: "book",
        capacity: "Groups up to 8"
      },
      {
        title: "Sound Journey",
        description:
          "A deeply restorative sound experience using healing frequencies and vibration.",
        duration: "60 minutes",
        price: "From R800",
        location: "📍 On Location or In Studio (confirmed after booking)",
        icon: Music,
        type: "book",
        capacity: "All Levels"
      }
    ]
  },
  {
    title: "Studio Classes",
    description: "For local practitioners. Classes are currently performing well with monthly members.",
    services: [
      {
        title: "Drop-in Class",
        description:
          "Join a studio class if you're visiting or not on a membership.",
        duration: "60 minutes",
        price: "R130",
        location: "📍 In Studio (Ballito)",
        icon: Users,
        type: "book",
        capacity: "All Levels"
      }
    ]
  }
];

export default function Services() {

  const handleBookingClick = () => {
    window.open(CALENDLY_URL, "_blank");
  };

  return (
    <div>
      {/* HERO with Ocean Wave Overlay */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://media.base44.com/images/public/69d8b9a35e6ab29a2127374b/8a896dbea_generated_4254f10c.png"
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
              What We Offer
            </span>
            <Waves className="h-4 w-4 text-white/60" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-light text-white"
          >
            Our Services
          </motion.h1>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 lg:py-24 px-6">
        <div className="max-w-5xl mx-auto space-y-20">

          {sections.map((section, idx) => (
            <div key={idx}>
              {/* Section Header */}
              <div className="text-center mb-8">
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

              {/* Services List */}
              <div className="space-y-4">
                {section.services.map((service, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="bg-card border border-border hover:border-ocean/30 p-6 rounded-sm transition-all duration-300 flex flex-col md:flex-row justify-between gap-4"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <service.icon className="h-5 w-5 text-ocean" />
                        <h3 className="text-xl font-heading text-foreground">{service.title}</h3>
                      </div>

                      <p className="text-sm text-muted-foreground mb-3">
                        {service.description}
                      </p>

                      <p className="text-xs text-muted-foreground flex items-center gap-2 mb-2">
                        <MapPin className="h-3 w-3" />
                        {service.location}
                      </p>

                      <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" /> {service.duration}
                        </span>
                        {service.capacity && (
                          <span className="flex items-center gap-1">
                            <Users className="h-3 w-3" /> {service.capacity}
                          </span>
                        )}
                      </div>

                      {/* Duration reminder - shows for all services that aren't enquire */}
                      {service.type !== "enquire" && (
                        <p className="text-xs text-ocean/70 mt-2">
                          ⏱️ All private sessions are 60 minutes
                        </p>
                      )}
                    </div>

                    <div className="flex items-center gap-6">
                      <span className="text-ocean font-medium min-w-[160px] text-right">
                        {service.price}
                      </span>

                      {service.type === "enquire" ? (
                        <Link
                          to="/contact"
                          className="px-6 py-3 bg-ocean text-white text-xs uppercase tracking-widest hover:bg-ocean-dark transition rounded-sm whitespace-nowrap"
                        >
                          Enquire
                        </Link>
                      ) : (
                        <button
                          onClick={handleBookingClick}
                          className="px-6 py-3 bg-ocean text-white text-xs uppercase tracking-widest hover:bg-ocean-dark transition rounded-sm whitespace-nowrap cursor-pointer"
                        >
                          Book Now
                        </button>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}

        </div>
      </section>

      {/* SMALL FREE TRIAL NOTE (NOT PROMINENT) */}
      <section className="py-12 px-6 text-center bg-ocean/5 border-y border-ocean/10">
        <p className="text-sm text-muted-foreground">
          ✨ Curious to try? Ask us about a free trial class when you get in touch
        </p>
      </section>

      {/* QUOTE SECTION */}
      <section className="relative py-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-ocean-dark/90" />
        <div className="relative text-center text-white">
          <Waves className="h-6 w-6 mx-auto mb-3 text-white/40" />
          <p className="font-heading text-lg italic">
            "If you can breathe, you can do yoga"
          </p>
        </div>
      </section>

      {/* CTA to Booking */}
      <section className="py-12 px-6 text-center bg-background">
        <Link
          to="/booking"
          className="inline-flex items-center gap-2 px-8 py-3 bg-ocean text-white text-xs uppercase tracking-widest hover:bg-ocean-dark transition rounded-sm"
        >
          Ready to book? Choose your session <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </div>
  );
}