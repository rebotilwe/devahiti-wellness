import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Users, ArrowRight, Phone, Mail } from "lucide-react";

const packages = [
  { title: "Private Group Yoga & Sound Bath", duration: "1 hr 15 min", price: "From $340", people: "Up to 8" },
  { title: "Private Group Yoga", duration: "1 hr 15 min", price: "From $280", people: "Up to 8" },
  { title: "Private Group Sound Bath", duration: "1 hr 15 min", price: "From $340", people: "Up to 8" },
  { title: "Bowen Therapy", duration: "45 min", price: "$98", people: "Individual" },
  { title: "Bowen Therapy & Sound Bowl Massage", duration: "1 hr 15 min", price: "$145", people: "Individual" },
  { title: "Sound Bowl Massage", duration: "1 hr", price: "$98", people: "Individual" },
  { title: "Yoga By The Sea", duration: "Seasonal", price: "$25", people: "Open" },
];

export default function Booking() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://media.base44.com/images/public/69d8b9a35e6ab29a2127374b/3e26628f7_generated_7b319b32.png"
            alt="Group sound bath session"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/50" />
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs tracking-[0.4em] uppercase text-white/60 mb-4"
          >
            Reserve Your Experience
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-light text-white"
          >
            Book Online
          </motion.h1>
        </div>
      </section>

      {/* Booking Content */}
      <section className="py-20 lg:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-light text-foreground mb-4">
              Select Your Package
            </h2>
            <p className="text-base text-muted-foreground max-w-xl mx-auto">
              Choose from our range of yoga, sound relaxation, and therapy experiences.
              All private sessions come to your accommodation with equipment provided.
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
                    <h3 className="font-heading text-xl lg:text-2xl font-light text-foreground mb-2">
                      {pkg.title}
                    </h3>
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
                    <a
                      href="https://www.devahitiyogawa.com.au/book-online"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-xs font-medium tracking-[0.2em] uppercase hover:bg-primary/90 transition-all"
                    >
                      Book <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Calendly Embed Placeholder */}
          <div className="bg-muted/50 border border-border p-12 lg:p-16 text-center">
            <Calendar className="h-12 w-12 text-primary/40 mx-auto mb-6" />
            <h3 className="font-heading text-2xl md:text-3xl font-light text-foreground mb-4">
              Online Booking Calendar
            </h3>
            <p className="text-sm text-muted-foreground mb-6 max-w-md mx-auto">
              Our booking calendar will be integrated here once your Calendly or scheduling tool
              is connected. For now, you can book through the buttons above or contact us directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@devahitiyoga.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-border text-xs font-medium tracking-[0.2em] uppercase text-foreground hover:bg-muted transition-all"
              >
                <Mail className="h-4 w-4" /> Email Us
              </a>
              <a
                href="tel:+61000000000"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-border text-xs font-medium tracking-[0.2em] uppercase text-foreground hover:bg-muted transition-all"
              >
                <Phone className="h-4 w-4" /> Call Us
              </a>
            </div>
          </div>

          {/* Important Info */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <MapPin className="h-6 w-6 text-primary mx-auto mb-3" />
              <h4 className="font-heading text-lg text-foreground mb-2">We Come to You</h4>
              <p className="text-sm text-muted-foreground">
                Sessions held at your accommodation. All equipment provided.
              </p>
            </div>
            <div className="text-center">
              <Users className="h-6 w-6 text-primary mx-auto mb-3" />
              <h4 className="font-heading text-lg text-foreground mb-2">Groups Welcome</h4>
              <p className="text-sm text-muted-foreground">
                Group packages cover up to 8 people. Perfect for families and friends.
              </p>
            </div>
            <div className="text-center">
              <Calendar className="h-6 w-6 text-primary mx-auto mb-3" />
              <h4 className="font-heading text-lg text-foreground mb-2">Flexible Scheduling</h4>
              <p className="text-sm text-muted-foreground">
                Available 7 days a week by appointment. Contact us for availability.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}