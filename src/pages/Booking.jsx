import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Users, ArrowRight, Phone, Mail, Heart, Award, Music } from "lucide-react";
import CalendlyEmbed from "../components/CalendlyEmbed";

const packages = [
  { 
    title: "Group Yoga Classes", 
    duration: "1 hr 15 min", 
    price: "From $25", 
    people: "All Levels",
    description: "Community classes suitable for beginners through advanced.",
    icon: Users
  },
  { 
    title: "Sound Journey", 
    duration: "1 hr 15 min", 
    price: "From $35", 
    people: "All Levels",
    description: "Deeply immersive sound experience with Tibetan singing bowls.",
    icon: Music
  },
  { 
    title: "Private Yoga Sessions", 
    duration: "1 hr", 
    price: "From $65", 
    people: "1-on-1",
    description: "Personalized instruction tailored to your specific needs.",
    icon: Heart
  },
  { 
    title: "Corporate Yoga", 
    duration: "1 hr", 
    price: "From $150", 
    people: "Groups",
    description: "Wellness at your workplace. Boost team morale and reduce stress.",
    icon: Users
  },
  { 
    title: "Yin Yoga", 
    duration: "1 hr 15 min", 
    price: "From $25", 
    people: "All Levels",
    description: "Slow-paced practice targeting deep connective tissues.",
    icon: Heart
  },
  { 
    title: "Teacher Training", 
    duration: "Multiple sessions", 
    price: "Inquire", 
    people: "Enrolling Now",
    description: "200hr & 300hr advanced training starting May 2026.",
    icon: Award
  },
];

export default function Booking() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://media.base44.com/images/public/69d8b9a35e6ab29a2127374b/3e26628f7_generated_7b319b32.png"
            alt="Yoga class"
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
            Start Your Journey
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-light text-white"
          >
            Book a Class
          </motion.h1>
        </div>
      </section>

      {/* Booking Content */}
      <section className="py-20 lg:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-primary mb-3">
              Reserve Your Spot
            </p>
            <h2 className="font-heading text-3xl md:text-4xl font-light text-foreground mb-4">
              Choose Your Experience
            </h2>
            <p className="text-base text-muted-foreground max-w-xl mx-auto">
              Rooted in science and evidence-based movement practices, in conjunction with 
              time-honoured yogic principles. We welcome all practitioners from beginners 
              through advanced.
            </p>
          </div>

          {/* Package List */}
          <div className="space-y-4 mb-20">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group bg-card border border-border hover:border-primary/30 p-6 lg:p-8 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <pkg.icon className="h-5 w-5 text-primary" />
                      <h3 className="font-heading text-xl lg:text-2xl font-light text-foreground">
                        {pkg.title}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2 max-w-md">
                      {pkg.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-4">
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Clock className="h-3.5 w-3.5" />
                        {pkg.duration}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Users className="h-3.5 w-3.5" />
                        {pkg.people}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="font-heading text-xl text-primary">{pkg.price}</span>
                    {pkg.title === "Teacher Training" ? (
                      <Link
                        to="/contact"
                        className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-xs font-medium tracking-[0.2em] uppercase hover:bg-primary/90 transition-all"
                      >
                        Enquire <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    ) : (
                      <a
                        href="#calendly-section"
                        className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-xs font-medium tracking-[0.2em] uppercase hover:bg-primary/90 transition-all"
                      >
                        Book <ArrowRight className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Calendly Embed Section */}
          <div id="calendly-section" className="bg-muted/50 border border-border p-8 lg:p-12 text-center">
            <Calendar className="h-12 w-12 text-primary/40 mx-auto mb-6" />
            <h3 className="font-heading text-2xl md:text-3xl font-light text-foreground mb-4">
              Book Your Class Online
            </h3>
            <p className="text-sm text-muted-foreground mb-8 max-w-md mx-auto">
              Select your preferred class time below. All classes are held at our studio in Dunsborough.
              Free trial class available for first-time students.
            </p>
            
            {/* Calendly Embed */}
            <div className="mt-8">
              <CalendlyEmbed url="https://calendly.com/devahiti-yoga/60min" />
            </div>
            
            <p className="text-xs text-muted-foreground mt-6">
              Can't find a time that works? Contact us directly for alternative scheduling.
            </p>
          </div>

          {/* Important Info */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Heart className="h-6 w-6 text-primary mx-auto mb-3" />
              <h4 className="font-heading text-lg text-foreground mb-2">All Levels Welcome</h4>
              <p className="text-sm text-muted-foreground">
                From beginners to advanced practitioners. Everyone is welcome.
              </p>
            </div>
            <div className="text-center">
              <Calendar className="h-6 w-6 text-primary mx-auto mb-3" />
              <h4 className="font-heading text-lg text-foreground mb-2">Free Trial Class</h4>
              <p className="text-sm text-muted-foreground">
                New to yoga? Try your first class for free. Contact us to claim.
              </p>
            </div>
            <div className="text-center">
              <Award className="h-6 w-6 text-primary mx-auto mb-3" />
              <h4 className="font-heading text-lg text-foreground mb-2">Teacher Training</h4>
              <p className="text-sm text-muted-foreground">
                200hr & 300hr advanced training starting May 2026.
              </p>
            </div>
          </div>

          {/* Contact Options */}
          <div className="mt-16 text-center">
            <h4 className="font-heading text-xl text-foreground mb-6">Or Contact Us Directly</h4>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@devahiti.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-border text-xs font-medium tracking-[0.2em] uppercase text-foreground hover:bg-muted transition-all"
              >
                <Mail className="h-4 w-4" /> info@devahiti.com
              </a>
              <a
                href="tel:+61400000000"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-border text-xs font-medium tracking-[0.2em] uppercase text-foreground hover:bg-muted transition-all"
              >
                <Phone className="h-4 w-4" /> (04) 0000 0000
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 lg:py-28 px-6 bg-primary">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-heading text-2xl md:text-3xl lg:text-4xl italic text-primary-foreground leading-relaxed mb-6">
              "I strive to encourage those who think 'they can't do yoga', to become those who can...
            </p>
            <p className="font-heading text-xl md:text-2xl text-primary-foreground/90 italic">
              because if you can breathe, you can do yoga!"
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}