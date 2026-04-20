import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, Users, ArrowRight, Phone, Mail, Heart, Award, Music, Waves, Droplets } from "lucide-react";
import CalendlyEmbed from "../components/CalendlyEmbed";

// Calendly URL - VERIFIED working URL
const CALENDLY_URL = "https://calendly.com/cheryl-sayogasafaris";

const packages = [
  { 
    title: "Free Trial Class", 
    duration: "60 minutes", 
    price: "FREE", 
    people: "All Levels",
    description: "New to yoga? Try your first class for free and experience the Devahiti difference.",
    icon: Heart,
    bookingType: "free"
  },
  { 
    title: "Group Yoga Classes", 
    duration: "45 – 90 minutes", 
    price: "R130 drop-in", 
    people: "All Levels",
    description: "Weekly classes focused on mindful movement, breathwork and relaxation. Beginners welcome!",
    icon: Users,
    bookingType: "group"
  },
  { 
    title: "Sound Journey", 
    duration: "60 minutes", 
    price: "R800 individual (+R150 per extra person)", 
    people: "All Levels",
    description: "A deeply restorative sound experience using healing frequencies and vibration to reduce stress.",
    icon: Music,
    bookingType: "sound"
  },
  { 
    title: "Private Yoga Sessions", 
    duration: "60 minutes", 
    price: "R650 (+R150 per extra person)", 
    people: "1-on-1 / Small Groups",
    description: "Personalised sessions tailored to your body and goals, in the comfort of your own space.",
    icon: Heart,
    bookingType: "private"
  },
  { 
    title: "Private Group Yoga & Sound Journey", 
    duration: "75 minutes", 
    price: "R1999 (up to 8 people)", 
    people: "Groups / Retreats",
    description: "Perfect for retreats, holidays or special gatherings. Includes both yoga and sound healing.",
    icon: Users,
    bookingType: "group-sound"
  },
  { 
    title: "Corporate Yoga & Wellness", 
    duration: "Custom", 
    price: "Custom pricing", 
    people: "Teams",
    description: "Wellness sessions designed to reduce stress, improve focus and boost team morale.",
    icon: Users,
    bookingType: "corporate"
  },
  { 
    title: "Fascial Release Therapy", 
    duration: "45 – 75 minutes", 
    price: "R450 – R650", 
    people: "Individual",
    description: "Devahiti's signature hands-on fascial release session to relieve tension and restore balance.",
    icon: Heart,
    bookingType: "private"
  },
  { 
    title: "Teacher Training", 
    duration: "Multi-month program", 
    price: "Enquire", 
    people: "Enrolling Now",
    description: "200hr starts May 16-17, 2026 | 300hr starts May 2-3, 2026",
    icon: Award,
    bookingType: "enquire"
  },
];

export default function Booking() {
  // Helper function to get button text
  const getButtonText = (bookingType, title) => {
    if (bookingType === "enquire") return "Enquire";
    if (title === "Free Trial Class") return "Claim Free Class";
    return "Book Now";
  };

  // Handle booking click - opens Calendly in new tab
  const handleBookingClick = (bookingType) => {
    if (bookingType === "enquire") {
      // Navigate to contact page for enquiries
      window.location.href = "/contact";
    } else {
      // Open Calendly in new tab
      window.open(CALENDLY_URL, "_blank");
    }
  };

  return (
    <div>
      {/* Hero with Ocean Wave Overlay */}
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

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-light text-white"
          >
            Book a Class
          </motion.h1>
        </div>
      </section>

      {/* Booking Content */}
      <section className="py-20 lg:py-32 px-6">
        <div className="max-w-5xl mx-auto">

          {/* Intro */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-px bg-ocean/30" />
              <Droplets className="h-4 w-4 text-ocean/40 mx-2" />
              <div className="w-12 h-px bg-ocean/30" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-light text-foreground mb-4">
              Choose Your Experience
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Sessions are suitable for everybody — beginners most welcome. 
              All equipment provided for in-studio sessions.
            </p>
          </div>

          {/* Packages */}
          <div className="space-y-4 mb-20">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-card border border-border hover:border-ocean/30 p-6 rounded-sm transition-all duration-300 flex flex-col lg:flex-row justify-between gap-4"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <pkg.icon className="h-5 w-5 text-ocean" />
                    <h3 className="text-xl font-heading text-foreground">{pkg.title}</h3>
                  </div>

                  <p className="text-sm text-muted-foreground mb-3 max-w-md">
                    {pkg.description}
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
                  <span className="text-lg font-heading font-medium text-ocean min-w-[120px] text-right">
                    {pkg.price}
                  </span>

                  {pkg.bookingType === "enquire" ? (
                    <Link
                      to="/contact"
                      className="px-6 py-3 bg-ocean text-white text-xs font-medium uppercase tracking-widest hover:bg-ocean-dark transition-all rounded-sm whitespace-nowrap"
                    >
                      Enquire
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleBookingClick(pkg.bookingType)}
                      className="px-6 py-3 bg-ocean text-white text-xs font-medium uppercase tracking-widest hover:bg-ocean-dark transition-all rounded-sm whitespace-nowrap cursor-pointer"
                    >
                      {getButtonText(pkg.bookingType, pkg.title)}
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Payment Explanation Box - Updated for Yoco */}
          <div className="bg-ocean/5 border border-ocean/20 p-6 rounded-lg mb-12 text-center">
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-ocean">💳 How payments work:</span> After you select your time in Calendly, 
              you will receive a confirmation email. Payment for <span className="font-medium">in-studio classes (R130)</span> is made via 
              <span className="font-medium text-ocean"> Yoco</span> at the studio or through a secure payment link. 
              Free trial classes and private sessions have separate payment arrangements.
            </p>
          </div>

          {/* Calendly Section */}
          <div id="calendly-section" className="bg-muted/30 border border-border p-8 lg:p-12 text-center rounded-sm">
            <Calendar className="h-12 w-12 text-ocean/40 mx-auto mb-6" />

            <h3 className="font-heading text-2xl md:text-3xl font-light text-foreground mb-4">
              Select Your Date & Time
            </h3>

            <p className="text-sm text-muted-foreground mb-8 max-w-md mx-auto">
              Choose your preferred class time below. You will receive a confirmation email 
              with payment instructions.
            </p>

            <CalendlyEmbed url={CALENDLY_URL} />

            <p className="text-xs text-muted-foreground mt-6">
              📧 A confirmation email will be sent to you immediately after booking.
              {" "}Payment for paid classes is handled via Yoco.
            </p>
          </div>

          {/* Direct Contact Options */}
          <div className="mt-16 text-center">
            <h4 className="font-heading text-xl text-foreground mb-6">Or Contact Us Directly</h4>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:cheryl@devahiti.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-ocean/30 text-ocean text-xs font-medium uppercase tracking-widest hover:bg-ocean hover:text-white transition-all rounded-sm"
              >
                <Mail className="h-4 w-4" />
                cheryl@devahiti.com
              </a>

              <a
                href="tel:+27840902083"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-ocean/30 text-ocean text-xs font-medium uppercase tracking-widest hover:bg-ocean hover:text-white transition-all rounded-sm"
              >
                <Phone className="h-4 w-4" />
                +27 84 090 2083
              </a>
            </div>

            <p className="text-xs text-muted-foreground mt-4">
              Based in Ballito, South Africa. Travel fee may apply outside the greater Ballito area.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Section - Ocean themed */}
      <section className="relative py-20 lg:py-28 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-ocean-dark/90" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Waves className="h-8 w-8 text-white/40 mx-auto mb-4" />
            <p className="font-heading text-2xl md:text-3xl lg:text-4xl italic text-white leading-relaxed">
              "If you can breathe, you can do yoga"
            </p>
            <p className="text-sm text-white/60 mt-6">
              Beginners are always welcome at Devahiti
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}