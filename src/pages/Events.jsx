import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Calendar, ArrowRight, Sun } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

const upcomingAreas = [
  {
    town: "Dunsborough",
    dates: "Available year-round",
    description: "Our home base. Private group yoga and sound relaxation sessions available at your accommodation.",
    status: "active",
  },
  {
    town: "Yallingup",
    dates: "Available year-round",
    description: "Beautiful coastal sessions in the heart of Yallingup. All equipment provided.",
    status: "active",
  },
  {
    town: "Margaret River",
    dates: "Available year-round",
    description: "Bringing wellness and relaxation to the Margaret River region and surrounding areas.",
    status: "active",
  },
  {
    town: "South West Region",
    dates: "By arrangement",
    description: "We travel within a 25km radius of Dunsborough town centre. Contact us for locations further afield.",
    status: "enquire",
  },
];

const specialEvents = [
  {
    title: "Yoga By The Sea",
    location: "Dunsborough Foreshore",
    description: "Summer holiday offering open to the public. Gentle outdoor yoga with an ocean view!",
    price: "$25",
    season: "Summer",
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
            alt="House call yoga setup"
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
            Nomadic Wellness
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-light text-white"
          >
            Events &amp; Areas
          </motion.h1>
        </div>
      </section>

      {/* Areas */}
      <section className="py-20 lg:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            subtitle="We Come to You"
            title="Service Areas"
            description="We bring private yoga and sound relaxation to your accommodation across the South West of Western Australia."
          />

          <div className="mt-16 space-y-0">
            {upcomingAreas.map((area, i) => (
              <motion.div
                key={area.town}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group border-b border-border py-8 lg:py-10"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <MapPin className="h-5 w-5 text-primary" />
                      <h3 className="font-heading text-2xl lg:text-3xl font-light text-foreground">
                        {area.town}
                      </h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-lg pl-8">
                      {area.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-6 pl-8 lg:pl-0">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{area.dates}</span>
                    </div>
                    <Link
                      to={area.status === "enquire" ? "/contact" : "/booking"}
                      className="flex items-center gap-2 text-xs tracking-widest uppercase text-primary hover:gap-3 transition-all duration-300"
                    >
                      {area.status === "enquire" ? "Enquire" : "Book"} <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Events */}
      <section className="py-20 lg:py-32 px-6 bg-muted/50">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            subtitle="Special Offerings"
            title="Seasonal Events"
            description="Join us for special seasonal yoga events open to the public."
          />

          <div className="mt-16 space-y-8">
            {specialEvents.map((event, i) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-card border border-border p-8 lg:p-12"
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <Sun className="h-5 w-5 text-primary" />
                      <span className="text-xs tracking-widest uppercase text-primary">{event.season}</span>
                    </div>
                    <h3 className="font-heading text-3xl lg:text-4xl font-light text-foreground mb-3">
                      {event.title}
                    </h3>
                    <div className="flex items-center gap-2 mb-4">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">{event.location}</span>
                    </div>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                  <div className="flex flex-col items-start lg:items-end gap-4">
                    <span className="font-heading text-3xl text-primary">{event.price}</span>
                    <Link
                      to="/booking"
                      className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground text-xs font-medium tracking-[0.3em] uppercase hover:bg-primary/90 transition-all"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* House Call CTA */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://media.base44.com/images/public/69d8b9a35e6ab29a2127374b/85db9c9b2_generated_53ef1b3a.png"
            alt="Yoga by the ocean"
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
              Want Us in Your Area?
            </h2>
            <p className="text-base text-white/70 mb-10">
              We're always exploring new locations to bring our wellness experiences.
              If you're outside our regular service area, get in touch — we'd love to hear from you.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-primary-foreground text-xs font-medium tracking-[0.3em] uppercase hover:bg-primary/90 transition-all"
            >
              Contact Us <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}