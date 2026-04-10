import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Users, MapPin } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

const allServices = [
  {
    title: "Private Group Yoga & Sound Bath",
    description: "Covers up to 8 people and a distance of 25 km from Dunsborough town centre. A full yoga and sound bath experience.",
    duration: "1 hr 15 min",
    price: "From $340",
    image: "https://media.base44.com/images/public/69d8b9a35e6ab29a2127374b/3e26628f7_generated_7b319b32.png",
  },
  {
    title: "Private Group Yoga",
    description: "Covers up to 8 people and a distance of 25 km from Dunsborough town centre. Gentle yoga focused on stress relief.",
    duration: "1 hr 15 min",
    price: "From $280",
    image: "https://media.base44.com/images/public/69d8b9a35e6ab29a2127374b/c514b05a9_generated_8e04c8ff.png",
  },
  {
    title: "Private Group Sound Bath",
    description: "Covers up to 8 people and a distance of 25 km from Dunsborough town centre. A deeply relaxing sound bath experience.",
    duration: "1 hr 15 min",
    price: "From $340",
    image: "https://media.base44.com/images/public/69d8b9a35e6ab29a2127374b/90b6a8f9b_generated_85845fa4.png",
  },
  {
    title: "Bowen Therapy",
    description: "Reduce tension, pain, stress and fatigue so you can feel good in your body again! A gentle and non-invasive treatment.",
    duration: "45 min",
    price: "$98",
    image: "https://media.base44.com/images/public/69d8b9a35e6ab29a2127374b/95129b295_generated_0712eee4.png",
  },
  {
    title: "Bowen Therapy & Sound Bowl Massage",
    description: "A combined session of Bowen Therapy and Sound Bowl Massage for a deeply restorative and healing experience.",
    duration: "1 hr 15 min",
    price: "$145",
    image: "https://media.base44.com/images/public/69d8b9a35e6ab29a2127374b/0ce063086_generated_ab60dfbd.png",
  },
  {
    title: "Sound Bowl Massage",
    description: "A relaxing and restorative sound bowl massage session to relieve stress and tension throughout your body.",
    duration: "1 hr",
    price: "$98",
    image: "https://media.base44.com/images/public/69d8b9a35e6ab29a2127374b/0ce063086_generated_ab60dfbd.png",
  },
  {
    title: "Yoga By The Sea",
    description: "Summer holiday offering open to the public. Gentle outdoor yoga with an ocean view at the Dunsborough Foreshore!",
    duration: "Seasonal",
    price: "$25",
    image: "https://media.base44.com/images/public/69d8b9a35e6ab29a2127374b/85db9c9b2_generated_53ef1b3a.png",
  },
];

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://media.base44.com/images/public/69d8b9a35e6ab29a2127374b/8a896dbea_generated_4254f10c.png"
            alt="Group yoga session"
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
            Restorative Packages
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-light text-white"
          >
            Our Services
          </motion.h1>
        </div>
      </section>

      {/* Info Bar */}
      <section className="bg-primary py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
          <div className="flex items-center gap-2 text-primary-foreground/80">
            <Users className="h-4 w-4" />
            <span className="text-xs tracking-widest uppercase">Groups up to 8</span>
          </div>
          <div className="flex items-center gap-2 text-primary-foreground/80">
            <MapPin className="h-4 w-4" />
            <span className="text-xs tracking-widest uppercase">We come to you</span>
          </div>
          <div className="flex items-center gap-2 text-primary-foreground/80">
            <Clock className="h-4 w-4" />
            <span className="text-xs tracking-widest uppercase">All equipment provided</span>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 lg:py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading
            subtitle="Please select your package"
            title="Choose Your Experience"
            description="Every session is tailored to your needs. Whether it's a private yoga session, a sound bath, or therapeutic bodywork — we bring the experience to you."
          />
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-20 lg:pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-0">
            {allServices.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${i % 2 === 1 ? "" : ""}`}
              >
                <div className={`relative overflow-hidden aspect-[4/3] ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className={`flex flex-col justify-center p-8 lg:p-16 ${i % 2 === 0 ? "bg-card" : "bg-muted/50"}`}>
                  <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl font-light text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-6 mb-8">
                    <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {service.duration}
                    </span>
                    <span className="text-lg font-heading font-medium text-primary">
                      {service.price}
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                      to="/booking"
                      className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground text-xs font-medium tracking-[0.3em] uppercase hover:bg-primary/90 transition-all"
                    >
                      Book Now
                    </Link>
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-border text-xs font-medium tracking-[0.3em] uppercase text-foreground hover:bg-muted transition-all"
                    >
                      Enquire
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Experience */}
      <section className="py-20 lg:py-28 px-6 bg-primary">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-primary-foreground mb-4">
              Design Your Own Experience
            </h2>
            <p className="text-base text-primary-foreground/70 leading-relaxed mb-10">
              Looking for something extra special and uniquely tailored to your group?
              Work with me to create a custom yoga package just for you!
              Add a nurturing yin yoga session, extended sound relaxation,
              guided breathwork, or essential oils for the ultimate yoga spa.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-4 bg-background text-foreground text-xs font-medium tracking-[0.3em] uppercase hover:bg-background/90 transition-all"
            >
              Get in Touch <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}