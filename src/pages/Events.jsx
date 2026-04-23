import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  MapPin,
  Calendar,
  ArrowRight,
  Sun,
  Award,
  Clock,
  Users,
  Waves,
  Droplets
} from "lucide-react";
import SectionHeading from "../components/SectionHeading";

// Calendly URL
const CALENDLY_URL = "https://calendly.com/cheryl-sayogasafaris";

const upcomingEvents = [
  {
    title: "200 Hour Teacher Training",
    date: "May 2026",
    location: "📍 Devahiti Yoga Studio, Ballito",
    description:
      "Comprehensive foundational training rooted in science and evidence-based movement practices, combined with time-honoured yogic principles.",
    price: "Enquire for pricing",
    icon: Award,
    bookingType: "enquire"
  },
  {
    title: "300 Hour Advanced Teacher Training",
    date: "May 2026",
    location: "📍 Devahiti Yoga Studio, Ballito",
    description:
      "Deepen your practice and teaching skills with our advanced certification program.",
    price: "Enquire for pricing",
    icon: Award,
    bookingType: "enquire"
  },
  {
    title: "Sound Journey Immersion",
    date: "Monthly",
    location: "📍 Devahiti Yoga Studio, Ballito",
    description:
      "A deeply immersive sound experience using Tibetan singing bowls to reduce anxiety and promote profound rest.",
    price: "R800",
    icon: Sun,
    bookingType: "book"
  },
  {
    title: "Free Trial Class",
    date: "Weekly",
    location: "📍 Devahiti Yoga Studio, Ballito",
    description:
      "New to yoga? Try a free trial class and experience the Devahiti difference.",
    price: "Free",
    icon: Users,
    bookingType: "free"
  }
];

const classSchedule = [
  { day: "Monday", time: "7:00 AM", class: "Gentle Movement (Aging Strong)", level: "All Levels", duration: "45 min" },
  { day: "Monday", time: "8:00 AM", class: "Intermediate Hatha Yoga", level: "Intermediate", duration: "75 min" },
  { day: "Monday", time: "4:00 PM", class: "Gentle Hatha Yoga", level: "All Levels", duration: "60 min" },
  { day: "Tuesday", time: "8:15 AM", class: "Gentle Hatha Yoga", level: "All Levels", duration: "60 min" },
  { day: "Thursday", time: "7:00 AM", class: "Gentle Movement (Aging Strong)", level: "All Levels", duration: "45 min" },
  { day: "Thursday", time: "8:00 AM", class: "Intermediate Hatha Yoga", level: "Intermediate", duration: "75 min" },
  { day: "Thursday", time: "4:00 PM", class: "Gentle Hatha Yoga", level: "All Levels", duration: "60 min" },
  { day: "Friday", time: "8:15 AM", class: "Gentle Hatha Yoga", level: "All Levels", duration: "60 min" },
  { day: "Saturday", time: "7:30 AM", class: "Yin Yoga with Essential Oils", level: "All Levels", duration: "90 min" }
];

// Button text helper
const getEventButtonText = (event) => {
  if (event.bookingType === "enquire") return "Enquire";
  if (event.price === "Free") return "Book Free";
  return "Book Now";
};

export default function Events() {
  const handleBookingClick = () => {
    window.open(CALENDLY_URL, "_blank");
  };

  const handleEventClick = (bookingType) => {
    if (bookingType === "enquire") {
      window.location.href = "/contact";
    } else {
      window.open(CALENDLY_URL, "_blank");
    }
  };

  return (
    <div className="min-h-screen bg-background">

      {/* HERO */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://media.base44.com/images/public/69d8b9a35e6ab29a2127374b/8c2f17577_generated_c9d14796.png"
            alt="Yoga studio peaceful setting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute bottom-0 h-32 w-full bg-gradient-to-t from-ocean/20 to-transparent" />
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <Waves className="h-4 w-4 text-white/60" />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xs tracking-[0.4em] uppercase text-white/60"
            >
              Upcoming Programs
            </motion.span>
            <Waves className="h-4 w-4 text-white/60" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-light text-white"
          >
            Events & Training
          </motion.h1>
        </div>
      </section>

      {/* TRAINING HIGHLIGHT */}
      <section className="py-12 px-6 bg-ocean text-center">
        <Award className="h-12 w-12 text-white/80 mx-auto mb-4" />
        <h2 className="font-heading text-2xl text-white mb-3">
          200hr & 300hr Teacher Training
        </h2>
        <p className="text-white/80 mb-4">
          Starts May 2026
        </p>
        <Link
          to="/contact"
          className="px-6 py-2 bg-white text-ocean text-xs uppercase tracking-widest rounded-sm"
        >
          Enquire
        </Link>
      </section>

      {/* EVENTS */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            subtitle="Join Us"
            title="Upcoming Events"
            description="Discover our upcoming workshops and classes."
          />

          <div className="mt-8 space-y-4">
            {upcomingEvents.map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="border-b py-5"
              >
                <div className="flex justify-between gap-4">
                  <div>
                    <h3 className="text-lg">{event.title}</h3>
                    <p className="text-xs text-muted-foreground">
                      {event.date} • {event.location}
                    </p>
                  </div>

                  <button
                    onClick={() => handleEventClick(event.bookingType)}
                    className="text-ocean text-xs uppercase"
                  >
                    {getEventButtonText(event)} <ArrowRight className="inline h-3 w-3" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SCHEDULE */}
      <section className="py-12 px-6 bg-ocean/5">
        <div className="max-w-6xl mx-auto">
          <SectionHeading title="Weekly Schedule" />

          <div className="mt-6 space-y-2">
            {classSchedule.map((c, i) => (
              <div key={i} className="flex justify-between border p-3">
                <span>{c.day} - {c.time}</span>
                <button
                  onClick={handleBookingClick}
                  className="text-xs border px-3 py-1 hover:bg-ocean hover:text-white"
                >
                  Book
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 text-center bg-ocean text-white">
        <h2 className="text-2xl mb-3">Try a Class for Free</h2>
        <button
          onClick={handleBookingClick}
          className="bg-white text-ocean px-6 py-2 text-xs uppercase"
        >
          Claim Free Class
        </button>
      </section>

    </div>
  );
}