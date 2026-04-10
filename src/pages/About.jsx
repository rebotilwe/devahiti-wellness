import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://media.base44.com/images/public/69d8b9a35e6ab29a2127374b/3b13d11e7_generated_fbf80261.png"
            alt="Yoga studio peaceful setting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xs tracking-[0.4em] uppercase text-white/60 mb-4"
          >
            Welcome To Devahiti
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-light text-white"
          >
            Educational Yoga Studio
          </motion.h1>
        </div>
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
            <p className="text-base text-muted-foreground leading-relaxed mt-6">
              Our educational Yoga Studio specialises in Somatic psychology to align Mind, Body and Spirit, 
              holistically, with Asana, Pranayama, Mantra, Sound and Meditation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://media.base44.com/images/public/69d8b9a35e6ab29a2127374b/b9d7d7c6d_generated_c5fd17b8.png"
                alt="Yoga practice"
                className="w-full max-w-lg mx-auto"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <p className="text-xs tracking-[0.3em] uppercase text-primary">
                Our Philosophy
              </p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-foreground">
                Rooted in Science & Tradition
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Rooted in science and evidence-based movement practices, in conjunction with time-honoured 
                yogic principles, Devahiti Yoga is an all-encompassing Yogic system, designed to facilitate 
                alignment and harmony.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
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
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 lg:py-28 px-6 bg-muted/50">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-heading text-2xl md:text-3xl lg:text-4xl italic text-foreground leading-relaxed">
              "I strive to encourage those who think 'they can't do yoga', to become those who can...
            </p>
            <p className="font-heading text-xl md:text-2xl text-primary italic mt-6">
              because if you can breathe, you can do yoga!"
            </p>
            <p className="text-sm text-muted-foreground mt-8">
              We welcome all practitioners from beginners through advanced and special needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 lg:order-1"
            >
              <p className="text-xs tracking-[0.3em] uppercase text-primary">Our Founder</p>
              <h2 className="font-heading text-3xl md:text-4xl font-light text-foreground">
                Over Four Decades of Passion
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                For over four decades movement, dance and yoga have been my profession.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                I would like to inspire as many people as possible to keep moving, dancing with life to 
                maintain their mental and physical well-being, thereby slowing down the ageing process.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Myself and my teachers would love to share our passion for this ancient art and science 
                with you. We invite you to take a free trial class with us whenever you are ready to dip 
                your toes into this beautiful practice that is yoga.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:order-2"
            >
              <img
                src="https://media.base44.com/images/public/69d8b9a35e6ab29a2127374b/85db9c9b2_generated_53ef1b3a.png"
                alt="Yoga founder teaching"
                className="w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Teacher Training CTA */}
      <section className="py-20 lg:py-28 px-6 bg-primary">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-primary-foreground mb-6">
            200 hour and 300 hour Advanced Teacher Training
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-4">
            Starts in May 2026
          </p>
          <p className="text-base text-primary-foreground/70 mb-10">
            Join our comprehensive teacher training program and deepen your practice.
          </p>
          <Link
            to="/booking"
            className="inline-flex items-center gap-3 px-10 py-4 bg-background text-foreground text-xs font-medium tracking-[0.3em] uppercase hover:bg-background/90 transition-all duration-300"
          >
            Enquire Now <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}