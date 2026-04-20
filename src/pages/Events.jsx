import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Calendar, ArrowRight, Sun, Award, Clock, Users, Waves, Droplets } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

// Calendly URL - using the one Thato provided
const CALENDLY_URL = "https://calendly.com/cheryl-sayogasafaris";

const upcomingEvents = [
  {
    title: "200 Hour Teacher Training",
    date: "May 2026",
    location: "Devahiti Yoga Studio",
    description: "Comprehensive foundational training rooted in science and evidence-based movement practices, in conjunction with time-honoured yogic principles.",
    price: "Inquire for pricing",
    icon: Award,
    bookingType: "enquire",
  },
  {
    title: "300 Hour Advanced Teacher Training",
    date: "May 2026",
    location: "Devahiti Yoga Studio",
    description: "Deepen your practice and teaching skills with our advanced certification program.",
    price: "Inquire for pricing",
    icon: Award,
    bookingType: "enquire",
  },
  {
    title: "Sound Journey Immersion",
    date: "Monthly",
    location: "Devahiti Yoga Studio",
    description: "A deeply immersive sound experience using Tibetan singing bowls to reduce anxiety and promote profound rest.",
    price: "R800",
    icon: Sun,
    bookingType: "book",
  },
  {
    title: "Free Trial Class",
    date: "Weekly",
    location: "Devahiti Yoga Studio",
    description: "New to yoga? Try a free trial class and experience the Devahiti difference.",
    price: "Free",
    icon: Users,
    bookingType: "free",
  },
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
  { day: "Saturday", time: "7:30 AM", class: "Yin Yoga with Essential Oils", level: "All Levels", duration: "90 min" },
];

export default function Events() {
  // Handle booking click - opens Calendly in new tab
  const handleBookingClick = () => {
    window.open(CALENDLY_URL, "_blank");
  };

  // Handle event button click
  const handleEventClick = (bookingType) => {
    if (bookingType === "enquire") {
      window.location.href = "/contact";
    } else {
      window.open(CALENDLY_URL, "_blank");
    }
  };

  return (
    <div className="min-h-screen bg-background">

      {/* Hero with Ocean Wave Overlay */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://media.base44.com/images/public/69d8b9a35e6ab29a2127374b/8c2f17577_generated_c9d14796.png"
            alt="Yoga studio peaceful setting"
            className="w-full h-full object-cover"
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
              Upcoming Programs
            </span>
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

      {/* Teacher Training Highlight */}
      <section className="py-12 lg:py-16 px-6 bg-ocean">
        <div className="max-w-4xl mx-auto text-center">
          <Award className="h-12 w-12 text-white/80 mx-auto mb-4" />
          <h2 className="font-heading text-2xl md:text-3xl font-light text-white mb-3">
            200 hour & 300 hour Advanced Teacher Training
          </h2>
          <p className="text-white/80 mb-4">
            200hr: Starts May 16-17, 2026 | 300hr: Starts May 2-3, 2026
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-2 bg-white text-ocean text-xs uppercase tracking-widest hover:bg-white/90 transition-all rounded-sm"
          >
            Enquire About Training <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-12 lg:py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            subtitle="Join Us"
            title="Upcoming Events"
            description="Discover our upcoming workshops, training programs, and regular classes."
          />

          <div className="mt-8 space-y-4">
            {upcomingEvents.map((event, i) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="border-b border-border py-5"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <event.icon className="h-4 w-4 text-ocean" />
                      <h3 className="font-heading text-lg md:text-xl font-light text-foreground">
                        {event.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {event.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {event.location}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2 max-w-lg">
                      {event.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between md:justify-end gap-4">
                    <span className="font-heading text-base text-ocean min-w-[80px]">
                      {event.price}
                    </span>
                    <button
                      onClick={() => handleEventClick(event.bookingType)}
                      className="inline-flex items-center gap-1 text-xs tracking-widest uppercase text-ocean hover:gap-2 transition-all cursor-pointer"
                    >
                      {event.bookingType === "enquire" ? "Enquire" : event.price === "Free" ? "Book Free" : "Book Now"} 
                      <ArrowRight className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Class Schedule */}
      <section className="py-12 lg:py-16 px-6 bg-ocean/5">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            subtitle="Regular Classes"
            title="Weekly Schedule"
            description="Join us for our regular weekly classes. All levels welcome."
          />

          {/* Desktop Table */}
          <div className="hidden md:block mt-8 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-ocean/20">
                  <th className="text-left py-3 px-3 font-heading text-base font-light">Day</th>
                  <th className="text-left py-3 px-3 font-heading text-base font-light">Time</th>
                  <th className="text-left py-3 px-3 font-heading text-base font-light">Class</th>
                  <th className="text-left py-3 px-3 font-heading text-base font-light">Duration</th>
                  <th className="text-left py-3 px-3 font-heading text-base font-light">Level</th>
                  <th className="text-left py-3 px-3"></th>
                </tr>
              </thead>
              <tbody>
                {classSchedule.map((schedule, i) => (
                  <tr key={i} className="border-b border-ocean/10 hover:bg-ocean/5 transition-colors">
                    <td className="py-3 px-3 text-sm font-medium">{schedule.day}</td>
                    <td className="py-3 px-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3 text-ocean" />
                        {schedule.time}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-sm text-muted-foreground">{schedule.class}</td>
                    <td className="py-3 px-3 text-sm text-muted-foreground">{schedule.duration}</td>
                    <td className="py-3 px-3">
                      <span className="px-2 py-0.5 bg-ocean/10 text-ocean text-xs rounded-sm">
                        {schedule.level}
                      </span>
                    </td>
                    <td className="py-3 px-3">
                      <button 
                        onClick={handleBookingClick}
                        className="text-xs tracking-widest uppercase text-ocean hover:underline cursor-pointer"
                      >
                        Book
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="block md:hidden mt-8 space-y-3">
            {classSchedule.map((schedule, i) => (
              <div key={i} className="bg-white border border-ocean/10 rounded-lg p-3 shadow-sm">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-heading text-base font-medium">{schedule.day}</h4>
                  <span className="px-2 py-0.5 bg-ocean/10 text-ocean text-xs rounded-sm">{schedule.level}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                  <Clock className="h-3 w-3 text-ocean" />
                  <span>{schedule.time}</span>
                  <span className="text-muted-foreground/60">({schedule.duration})</span>
                </div>
                <p className="text-sm text-foreground mb-2">{schedule.class}</p>
                <button 
                  onClick={handleBookingClick}
                  className="text-xs tracking-widest uppercase text-ocean hover:underline inline-flex items-center gap-1 cursor-pointer"
                >
                  Book <ArrowRight className="h-3 w-3" />
                </button>
              </div>
            ))}
          </div>

          {/* Request Private Session Button */}
          <div className="text-center mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-ocean/30 text-ocean text-xs uppercase tracking-wider hover:bg-ocean hover:text-white transition-all rounded-sm"
            >
              Request Private Session
            </Link>
          </div>
        </div>
      </section>

      {/* Quote Section - Minimal spacing */}
      <section className="relative py-8 lg:py-10 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-ocean-dark/90" />
        <div className="relative z-10 text-center">
          <Waves className="h-6 w-6 text-white/40 mx-auto mb-3" />
          <p className="font-heading text-lg md:text-xl italic text-white">
            "If you can breathe, you can do yoga!"
          </p>
        </div>
      </section>

      {/* Free Trial CTA - UPDATED to use Calendly link */}
      <section className="relative py-12 lg:py-16 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-ocean/80" />
        <div className="relative z-10 text-center">
          <Droplets className="h-8 w-8 text-white/40 mx-auto mb-3" />
          <h2 className="font-heading text-2xl md:text-3xl font-light text-white mb-3">
            Try a Class for Free
          </h2>
          <p className="text-sm text-white/70 mb-5 max-w-md mx-auto">
            Experience the Devahiti difference with a complimentary first class.
          </p>
          <button
            onClick={handleBookingClick}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-ocean text-xs uppercase tracking-wider hover:bg-white/90 transition-all rounded-sm cursor-pointer"
          >
            Claim Your Free Class <ArrowRight className="h-3 w-3" />
          </button>
        </div>
      </section>

    </div>
  );
}