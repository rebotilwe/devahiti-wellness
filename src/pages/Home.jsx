import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Star } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import TestimonialCard from "../components/TestimonialCard";

const services = [
  {
    title: "Group Yoga Classes",
    description: "Join our community classes suitable for all levels. Experience the benefits of traditional yoga in a supportive group environment.",
    duration: "1 hr 15 min",
    price: "From $25",
    image: "https://media.base44.com/images/public/69d8b9a35e6ab29a2127374b/c514b05a9_generated_8e04c8ff.png",
  },
  {
    title: "Sound Journey",
    description: "A deeply immersive sound experience using Tibetan singing bowls and resonant instruments to reduce anxiety and promote profound rest.",
    duration: "1 hr 15 min",
    price: "From $35",
    image: "https://media.base44.com/images/public/69d8b9a35e6ab29a2127374b/90b6a8f9b_generated_85845fa4.png",
  },
  {
    title: "Private Yoga Sessions",
    description: "One-on-one personalized instruction tailored to your specific needs, goals, and body. Perfect for beginners or advanced practitioners.",
    duration: "1 hr",
    price: "From $65",
    image: "https://media.base44.com/images/public/69d8b9a35e6ab29a2127374b/0ce063086_generated_ab60dfbd.png",
  },
  {
    title: "Corporate Yoga",
    description: "Bring wellness to your workplace. Group sessions designed to reduce stress, improve focus, and boost team morale.",
    duration: "1 hr",
    price: "From $150",
    image: "https://media.base44.com/images/public/69d8b9a35e6ab29a2127374b/8a896dbea_generated_4254f10c.png",
  },
  {
    title: "Yin Yoga",
    description: "A slow-paced style of yoga with postures held for longer periods to target deep connective tissues and increase circulation.",
    duration: "1 hr 15 min",
    price: "From $25",
    image: "https://media.base44.com/images/public/69d8b9a35e6ab29a2127374b/85db9c9b2_generated_53ef1b3a.png",
  },
  {
    title: "Teacher Training",
    description: "200 hour and 300 hour advanced teacher training programs. Start your journey to becoming a certified yoga instructor.",
    duration: "Multiple sessions",
    price: "Inquire for pricing",
    image: "https://media.base44.com/images/public/69d8b9a35e6ab29a2127374b/b9d7d7c6d_generated_c5fd17b8.png",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://media.base44.com/images/public/69d8b9a35e6ab29a2127374b/8a896dbea_generated_4254f10c.png"
            alt="Yoga practice session"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xs tracking-[0.4em] uppercase text-white/70 mb-6"
          >
            Welcome To Devahiti
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-light text-white leading-tight mb-4"
          >
            Educational Yoga Studio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/80 font-light mb-10 max-w-2xl mx-auto"
          >
            Aligning Mind, Body and Spirit through Asana, Pranayama, Mantra, Sound and Meditation
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/booking"
              className="px-10 py-4 bg-primary text-primary-foreground text-xs font-medium tracking-[0.3em] uppercase hover:bg-primary/90 transition-all duration-300"
            >
              Free Trial Class
            </Link>
            <Link
              to="/services"
              className="px-10 py-4 border border-white/30 text-white text-xs font-medium tracking-[0.3em] uppercase hover:bg-white/10 transition-all duration-300"
            >
              View Services
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-px h-16 bg-gradient-to-b from-transparent to-white/50" />
        </motion.div>
      </section>

      {/* Devahiti Meaning Section */}
      <section className="py-20 lg:py-28 px-6 bg-muted/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-heading text-2xl md:text-3xl lg:text-4xl text-foreground leading-relaxed mb-6">
              Devahiti is a Sanskrit word meaning <span className="text-primary">Divine</span> or <span className="text-primary">Natural Order</span>.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Our educational Yoga Studio specialises in Somatic psychology to align Mind, Body and Spirit, 
              holistically, with Asana, Pranayama, Mantra, Sound and Meditation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <img
                  src="https://media.base44.com/images/public/69d8b9a35e6ab29a2127374b/b9d7d7c6d_generated_c5fd17b8.png"
                  alt="Yoga practice"
                  className="w-full max-w-md mx-auto lg:mx-0 object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <p className="text-xs tracking-[0.3em] uppercase text-primary">
                Rooted in Science & Tradition
              </p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-foreground leading-tight">
                An All-Encompassing Yogic System
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Rooted in science and evidence-based movement practices, in conjunction with time-honoured 
                yogic principles, Devahiti Yoga is designed to facilitate alignment and harmony.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Using traditional methods of Yoga, eclectic movement practices, sound, and methods of deep 
                relaxation to increase mindfulness and improve cognitive processes.
              </p>
              <p className="text-sm text-primary font-medium italic font-heading text-lg">
                "If you can breathe, you can do yoga!"
              </p>

              <div className="flex items-center gap-2 pt-2">
                <MapPin className="h-4 w-4 text-primary" />
                <p className="text-sm text-muted-foreground">
                  Welcoming all practitioners from beginners through advanced and special needs
                </p>
              </div>

              <Link
                to="/about"
                className="inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-primary hover:gap-4 transition-all duration-300 pt-4"
              >
                Learn More About Us <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 lg:py-32 px-6 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            subtitle="What We Offer"
            title="Our Yoga Classes"
            description="We offer a variety of classes suitable for all levels, from beginners to advanced practitioners."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mt-16">
            {services.map((service, i) => (
              <ServiceCard key={service.title} {...service} index={i} />
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/services"
              className="inline-flex items-center gap-3 px-10 py-4 border border-foreground/20 text-xs font-medium tracking-[0.3em] uppercase text-foreground hover:bg-foreground hover:text-background transition-all duration-500"
            >
              View All Classes <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://media.base44.com/images/public/69d8b9a35e6ab29a2127374b/8c2f17577_generated_c9d14796.png"
            alt="Peaceful yoga setting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-heading text-2xl md:text-3xl lg:text-4xl italic text-white leading-relaxed mb-6">
              "I strive to encourage those who think 'they can't do yoga', to become those who can...
            </p>
            <p className="font-heading text-xl md:text-2xl text-primary-foreground/90 italic">
              because if you can breathe, you can do yoga!"
            </p>
            <p className="text-sm text-white/60 mt-6">
              We welcome all practitioners from beginners through advanced and special needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Teacher Training CTA */}
      <section className="py-20 lg:py-28 px-6 bg-primary">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-primary-foreground/30 text-primary-foreground/30" />
              ))}
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-primary-foreground mb-4">
              200 hour and 300 hour Advanced Teacher Training
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-4">
              Starts in May 2026
            </p>
            <p className="text-base text-primary-foreground/70 leading-relaxed mb-8 max-w-2xl mx-auto">
              Join our comprehensive teacher training program and deepen your practice. 
              Become a certified yoga instructor and share this ancient art and science with others.
            </p>
            <Link
              to="/booking"
              className="inline-flex px-10 py-4 bg-background text-foreground text-xs font-medium tracking-[0.3em] uppercase hover:bg-background/90 transition-all duration-300"
            >
              Enquire Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Free Trial CTA */}
      <section className="py-20 lg:py-28 px-6 bg-background">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-light text-foreground mb-4">
            Try a Class for Free
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-8">
            We invite you to take a free trial class with us whenever you are ready to dip 
            your toes into this beautiful practice that is yoga.
          </p>
          <Link
            to="/booking"
            className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-primary-foreground text-xs font-medium tracking-[0.3em] uppercase hover:bg-primary/90 transition-all duration-300"
          >
            Claim Your Free Class <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}