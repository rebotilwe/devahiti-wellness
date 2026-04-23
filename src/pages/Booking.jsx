import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  Users,
  Heart,
  Award,
  Music,
  Waves,
  Droplets
} from "lucide-react";

import CalendlyEmbed from "../components/CalendlyEmbed";

// Calendly base URL
const CALENDLY_URL = "https://calendly.com/cheryl-sayogasafaris";

const packages = [
  {
    title: "Free Trial Class",
    duration: "60 minutes",
    price: "FREE",
    people: "All Levels",
    description:
      "New to yoga? Try your first class for free and experience the Devahiti difference.",
    icon: Heart,
    bookingType: "free"
  },
  {
    title: "Group Yoga Classes",
    duration: "45 – 90 minutes",
    price: "R130 drop-in",
    people: "All Levels",
    description:
      "Weekly classes focused on mindful movement, breathwork and relaxation. Beginners welcome!",
    icon: Users,
    bookingType: "group"
  },
  {
    title: "Sound Journey",
    duration: "60 minutes",
    price: "From R800",
    people: "All Levels",
    description:
      "A deeply restorative sound experience using healing frequencies and vibration to reduce stress.",
    icon: Music,
    bookingType: "sound"
  },
  {
    title: "Private Yoga Sessions",
    duration: "60 minutes",
    price: "R650 (+R150 per extra person)",
    people: "1-on-1 / Small Groups",
    description:
      "Personalised sessions tailored to your body and goals, in the comfort of your own space.",
    icon: Heart,
    bookingType: "private"
  },
  {
    title: "Private Group Yoga & Sound Journey",
    duration: "75 minutes",
    price: "R1999 (up to 8 people)",
    people: "Groups / Retreats",
    description:
      "Perfect for retreats, holidays or special gatherings. Includes both yoga and sound healing.",
    icon: Users,
    bookingType: "group-sound"
  },
  {
    title: "Corporate Yoga & Wellness",
    duration: "Custom",
    price: "Custom pricing",
    people: "Teams",
    description:
      "Wellness sessions designed to reduce stress, improve focus and boost team morale.",
    icon: Users,
    bookingType: "corporate"
  },
  {
    title: "Fascial Release Therapy",
    duration: "45 – 75 minutes",
    price: "R450 – R650",
    people: "Individual",
    description:
      "Devahiti's signature hands-on fascial release session to relieve tension and restore balance.",
    icon: Heart,
    bookingType: "private"
  },
  {
    title: "Teacher Training",
    duration: "Multi-month program",
    price: "Enquire",
    people: "Enrolling Now",
    description:
      "200hr starts May 16-17, 2026 | 300hr starts May 2-3, 2026",
    icon: Award,
    bookingType: "enquire"
  }
];

export default function Booking() {
  const getButtonText = (pkg) => {
    if (pkg.bookingType === "enquire") return "Enquire";
    if (pkg.bookingType === "free") return "Claim Free Class";
    return "Book Now";
  };

  const handleBookingClick = (pkg) => {
    if (pkg.bookingType === "enquire") {
      window.location.href = "/contact";
      return;
    }

    // All bookings go to Calendly
    window.open(CALENDLY_URL, "_blank");
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
            className="flex items-center justify-center gap-2 mb-4"
          >
            <Waves className="h-4 w-4 text-white/60" />
            <span className="text-xs tracking-[0.4em] uppercase text-white/60">
              Start Your Journey
            </span>
            <Waves className="h-4 w-4 text-white/60" />
          </motion.div>

          <h1 className="font-heading text-4xl md:text-6xl font-light text-white">
            Book a Class
          </h1>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-4">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-card border p-6 flex flex-col md:flex-row justify-between gap-4"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <pkg.icon className="h-5 w-5 text-ocean" />
                  <h3 className="text-xl font-heading">{pkg.title}</h3>
                </div>

                <p className="text-sm text-muted-foreground mb-2">
                  {pkg.description}
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
                <span className="text-ocean font-medium min-w-[120px] text-right">
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

        {/* PAYMENT INFO */}
        <div className="mt-12 text-center bg-ocean/5 border border-ocean/20 p-6 rounded-lg">
          <p className="text-sm text-muted-foreground">
            💳 <span className="text-ocean font-medium">Payment process:</span>{" "}
            After booking via Calendly, you will receive a confirmation email
            with a secure Yoco payment link to complete your payment and secure
            your spot.
          </p>
        </div>

        {/* CALENDLY SECTION */}
        <div className="mt-16">
          <div className="text-center mb-6">
            <Calendar className="h-8 w-8 text-ocean/40 mx-auto mb-2" />
            <h3 className="font-heading text-xl md:text-2xl font-light text-foreground">
              Select Your Date & Time
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              Choose your preferred class time below
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