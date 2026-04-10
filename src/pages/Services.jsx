import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Users, MapPin, Heart, Music, BookOpen, Briefcase, Sun, Award } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

const allServices = [
  {
    title: "Group Yoga Classes",
    description: "Join our community classes suitable for all levels. Experience the benefits of traditional yoga in a supportive group environment. We welcome all practitioners from beginners through advanced.",
    duration: "1 hr 15 min",
    price: "From $25",
    image: "https://media.base44.com/images/public/69d8b9a35e6ab29a2127374b/c514b05a9_generated_8e04c8ff.png",
    icon: Users,
  },
  {
    title: "Sound Journey",
    description: "A deeply immersive sound experience using Tibetan singing bowls and resonant instruments. Reduces anxiety, promotes profound rest, and brings your body's healing response online.",
    duration: "1 hr 15 min",
    price: "From $35",
    image: "https://media.base44.com/images/public/69d8b9a35e6ab29a2127374b/90b6a8f9b_generated_85845fa4.png",
    icon: Music,
  },
  {
    title: "Private Yoga Sessions",
    description: "One-on-one personalized instruction tailored to your specific needs, goals, and body. Perfect for beginners who want individual attention or advanced practitioners looking to deepen their practice.",
    duration: "1 hr",
    price: "From $65",
    image: "https://media.base44.com/images/public/69d8b9a35e6ab29a2127374b/b9d7d7c6d_generated_c5fd17b8.png",
    icon: Heart,
  },
  {
    title: "Corporate Yoga",
    description: "Bring wellness to your workplace. Group sessions designed to reduce stress, improve focus, boost team morale, and increase productivity. Perfect for team building and employee wellness programs.",
    duration: "1 hr",
    price: "From $150",
    image: "https://media.base44.com/images/public/69d8b9a35e6ab29a2127374b/8a896dbea_generated_4254f10c.png",
    icon: Briefcase,
  },
  {
    title: "Yin Yoga",
    description: "A slow-paced style of yoga with postures held for longer periods (3-5 minutes) to target deep connective tissues, increase circulation, and improve flexibility. A deeply meditative practice.",
    duration: "1 hr 15 min",
    price: "From $25",
    image: "https://media.base44.com/images/public/69d8b9a35e6ab29a2127374b/85db9c9b2_generated_53ef1b3a.png",
    icon: Sun,
  },
  {
    title: "Teacher Training",
    description: "200 hour and 300 hour advanced teacher training programs. Rooted in science and evidence-based movement practices, in conjunction with time-honoured yogic principles. Start in May 2026.",
    duration: "Multiple sessions",
    price: "Inquire for pricing",
    image: "https://media.base44.com/images/public/69d8b9a35e6ab29a2127374b/8c2f17577_generated_c9d14796.png",
    icon: Award,
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
            What We Offer
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-light text-white"
          >
            Our Yoga Classes
          </motion.h1>
        </div>
      </section>

      {/* Info Bar */}
      <section className="bg-primary py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
          <div className="flex items-center gap-2 text-primary-foreground/80">
            <Users className="h-4 w-4" />
            <span className="text-xs tracking-widest uppercase">All Levels Welcome</span>
          </div>
          <div className="flex items-center gap-2 text-primary-foreground/80">
            <Heart className="h-4 w-4" />
            <span className="text-xs tracking-widest uppercase">Evidence-Based Practice</span>
          </div>
          <div className="flex items-center gap-2 text-primary-foreground/80">
            <Clock className="h-4 w-4" />
            <span className="text-xs tracking-widest uppercase">Traditional & Modern Methods</span>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 lg:py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeading
            subtitle="Find Your Path"
            title="Choose Your Practice"
            description="Rooted in science and evidence-based movement practices, in conjunction with time-honoured yogic principles. Our classes are designed to facilitate alignment and harmony."
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
                className={`grid grid-cols-1 lg:grid-cols-2 gap-0`}
              >
                <div className={`relative overflow-hidden aspect-[4/3] ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className={`flex flex-col justify-center p-8 lg:p-16 ${i % 2 === 0 ? "bg-card" : "bg-muted/50"}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                    <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl font-light text-foreground">
                      {service.title}
                    </h3>
                  </div>
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

      {/* Philosophy Section */}
      <section className="py-20 lg:py-28 px-6 bg-muted/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-6">
              Rooted in <span className="text-primary">Science</span> & <span className="text-primary">Tradition</span>
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              Using traditional methods of Yoga, eclectic movement practices, sound, and methods of deep 
              relaxation to increase mindfulness and improve cognitive processes.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              The significant benefits of Yoga for children, athletes, men, women and seniors are well proven, 
              as Yoga addresses both physical and mental aspects of health, and well-being. It is after all 
              only when we start connecting with these two that we begin to see the first Spark of Spirit.
            </p>
          </motion.div>
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

      {/* Teacher Training CTA */}
      <section className="py-20 lg:py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Award className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-4">
              200 hour & 300 hour Advanced Teacher Training
            </h2>
            <p className="text-xl text-primary mb-4">
              Starts in May 2026
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
              For over four decades movement, dance and yoga have been our profession. 
              We would love to share our passion for this ancient art and science with you.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-primary-foreground text-xs font-medium tracking-[0.3em] uppercase hover:bg-primary/90 transition-all"
            >
              Enquire About Training <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}