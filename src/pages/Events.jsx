import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Calendar, ArrowRight, Sun, Award, Clock, Users } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

const upcomingEvents = [
  {
    title: "200 Hour Teacher Training",
    date: "May 2026",
    location: "Devahiti Yoga Studio",
    description: "Comprehensive foundational training rooted in science and evidence-based movement practices, in conjunction with time-honoured yogic principles.",
    price: "Inquire for pricing",
    status: "upcoming",
    icon: Award,
  },
  {
    title: "300 Hour Advanced Teacher Training",
    date: "May 2026",
    location: "Devahiti Yoga Studio",
    description: "Deepen your practice and teaching skills with our advanced certification program. For experienced practitioners ready to take the next step.",
    price: "Inquire for pricing",
    status: "upcoming",
    icon: Award,
  },
  {
    title: "Sound Journey Immersion",
    date: "Monthly",
    location: "Devahiti Yoga Studio",
    description: "A deeply immersive sound experience using Tibetan singing bowls and resonant instruments to reduce anxiety and promote profound rest.",
    price: "$35",
    status: "ongoing",
    icon: Sun,
  },
  {
    title: "Free Trial Class",
    date: "Weekly",
    location: "Devahiti Yoga Studio",
    description: "New to yoga? We invite you to take a free trial class with us whenever you are ready to dip your toes into this beautiful practice.",
    price: "Free",
    status: "ongoing",
    icon: Users,
  },
];

const classSchedule = [
  {
    day: "Mondays",
    time: "9:30 AM - 10:45 AM",
    class: "Morning Hatha Yoga",
    level: "All Levels",
  },
  {
    day: "Wednesdays",
    time: "5:30 PM - 6:45 PM",
    class: "Evening Yin Yoga",
    level: "All Levels",
  },
  {
    day: "Fridays",
    time: "9:30 AM - 10:45 AM",
    class: "Gentle Flow & Sound",
    level: "All Levels",
  },
  {
    day: "Saturdays",
    time: "8:00 AM - 9:15 AM",
    class: "Weekend Yoga & Meditation",
    level: "All Levels",
  },
];

export default function Events() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://media.base44.com/images/public/69d8b9a35e6ab29a2127374b/8c2f17577_generated_c9d14796.png"
            alt="Yoga studio peaceful setting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs tracking-[0.4em] uppercase text-white/60 mb-4"
          >
            Upcoming Programs
          </motion.p>
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
      <section className="py-20 lg:py-28 px-6 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Award className="h-16 w-16 text-primary-foreground mx-auto mb-6" />
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-primary-foreground mb-4">
              200 hour & 300 hour Advanced Teacher Training
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-4">
              Starts in May 2026
            </p>
            <p className="text-base text-primary-foreground/70 leading-relaxed mb-8 max-w-2xl mx-auto">
              For over four decades movement, dance and yoga have been our profession. 
              We would love to share our passion for this ancient art and science with you.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-4 bg-background text-foreground text-xs font-medium tracking-[0.3em] uppercase hover:bg-background/90 transition-all"
            >
              Enquire About Training <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 lg:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            subtitle="Join Us"
            title="Upcoming Events"
            description="Discover our upcoming workshops, training programs, and regular classes."
          />

          <div className="mt-16 space-y-0">
            {upcomingEvents.map((event, i) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group border-b border-border py-8 lg:py-10"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <event.icon className="h-5 w-5 text-primary" />
                      <h3 className="font-heading text-2xl lg:text-3xl font-light text-foreground">
                        {event.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 mb-3 pl-8">
                      <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <Calendar className="h-3.5 w-3.5" />
                        {event.date}
                      </span>
                      <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <MapPin className="h-3.5 w-3.5" />
                        {event.location}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-lg pl-8">
                      {event.description}
                    </p>
                  </div>
                  <div className="flex flex-col items-start lg:items-end gap-3 pl-8 lg:pl-0">
                    <span className="font-heading text-xl text-primary">
                      {event.price}
                    </span>
                    <Link
                      to={event.price === "Free" ? "/booking" : "/contact"}
                      className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-primary hover:gap-3 transition-all duration-300"
                    >
                      {event.price === "Free" ? "Book Your Free Class" : "Enquire"} <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Class Schedule */}
      <section className="py-20 lg:py-32 px-6 bg-muted/50">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            subtitle="Regular Classes"
            title="Weekly Schedule"
            description="Join us for our regular weekly classes. All levels welcome, from beginners to advanced practitioners."
          />

          <div className="mt-16 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-heading text-lg font-light text-foreground">Day</th>
                  <th className="text-left py-4 px-4 font-heading text-lg font-light text-foreground">Time</th>
                  <th className="text-left py-4 px-4 font-heading text-lg font-light text-foreground">Class</th>
                  <th className="text-left py-4 px-4 font-heading text-lg font-light text-foreground">Level</th>
                  <th className="text-left py-4 px-4 font-heading text-lg font-light text-foreground"></th>
                </tr>
              </thead>
              <tbody>
                {classSchedule.map((schedule, i) => (
                  <motion.tr
                    key={schedule.day}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="border-b border-border/50 hover:bg-muted/30 transition-colors"
                  >
                    <td className="py-4 px-4 font-medium text-foreground">{schedule.day}</td>
                    <td className="py-4 px-4 text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" />
                        {schedule.time}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-muted-foreground">{schedule.class}</td>
                    <td className="py-4 px-4">
                      <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs rounded-sm">
                        {schedule.level}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <Link
                        to="/booking"
                        className="text-xs tracking-widest uppercase text-primary hover:underline"
                      >
                        Book
                      </Link>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center mt-12">
            <p className="text-sm text-muted-foreground mb-6">
              Can't find a time that works for you? Private sessions available by appointment.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 border border-foreground/20 text-xs font-medium tracking-[0.3em] uppercase text-foreground hover:bg-foreground hover:text-background transition-all"
            >
              Request Private Session
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 lg:py-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-heading text-2xl md:text-3xl lg:text-4xl italic text-foreground leading-relaxed mb-6">
              "I strive to encourage those who think 'they can't do yoga', to become those who can...
            </p>
            <p className="font-heading text-xl md:text-2xl text-primary italic">
              because if you can breathe, you can do yoga!"
            </p>
            <p className="text-sm text-muted-foreground mt-6">
              We welcome all practitioners from beginners through advanced and special needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Free Trial CTA */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://media.base44.com/images/public/69d8b9a35e6ab29a2127374b/85db9c9b2_generated_53ef1b3a.png"
            alt="Peaceful yoga practice"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-5xl font-light text-white mb-6">
              Try a Class for Free
            </h2>
            <p className="text-base text-white/70 mb-10 max-w-2xl mx-auto">
              We invite you to take a free trial class with us whenever you are ready to dip 
              your toes into this beautiful practice that is yoga.
            </p>
            <Link
              to="/booking"
              className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-primary-foreground text-xs font-medium tracking-[0.3em] uppercase hover:bg-primary/90 transition-all"
            >
              Claim Your Free Class <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}