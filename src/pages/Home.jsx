import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Star } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import TestimonialCard from "../components/TestimonialCard";

const services = [
  {
    title: "Private Group Yoga",
    description: "Relax and unwind in the convenience of your own accommodation. Sessions suitable for groups, couples or individuals.",
    duration: "1 hr 15 min",
    price: "From $280",
    image: "https://media.base44.com/images/public/69d8b9a35e6ab29a2127374b/c514b05a9_generated_8e04c8ff.png",
  },
  {
    title: "Sound Relaxation",
    description: "A nurturing sound bath experience leaving you feeling deeply relaxed, rebalanced and restored.",
    duration: "1 hr 15 min",
    price: "From $340",
    image: "https://media.base44.com/images/public/69d8b9a35e6ab29a2127374b/90b6a8f9b_generated_85845fa4.png",
  },
  {
    title: "Sound Bowl Massage",
    description: "Relieve stress and tension with a relaxing and restorative sound bowl massage therapy session.",
    duration: "1 hr",
    price: "$98",
    image: "https://media.base44.com/images/public/69d8b9a35e6ab29a2127374b/0ce063086_generated_ab60dfbd.png",
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
            alt="Group yoga session outdoors at golden hour"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/40" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xs tracking-[0.4em] uppercase text-white/70 mb-6"
          >
            Devahiti Yoga WA
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-light text-white leading-tight mb-4"
          >
            Private Group Yoga
            <br />
            <span className="italic font-light">&amp; Sound Relaxation</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/80 font-light mb-10"
          >
            In the comfort of your own accommodation
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
              Book Online
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

      {/* Intro / Mandy Section */}
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
                  alt="Mandy Lancellas - Yoga Instructor"
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
                Meet Your Guide
              </p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-foreground leading-tight">
                Hi, I'm Mandy!
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                I specialise in private group yoga and sound bath experiences
                in the comfort of your own accommodation, all equipment provided.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Unwind with family and friends as you reduce stress and tension through gentle,
                mindful movement, followed by a nurturing sound bath — leaving you feeling relaxed and restored.
              </p>
              <p className="text-sm text-primary font-medium italic font-heading text-lg">
                Sessions are suitable for everyBODY, beginners welcome!
              </p>

              <div className="flex items-center gap-2 pt-2">
                <MapPin className="h-4 w-4 text-primary" />
                <p className="text-sm text-muted-foreground">
                  Servicing Dunsborough, Yallingup, Margaret River &amp; the South West
                </p>
              </div>

              <Link
                to="/about"
                className="inline-flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-primary hover:gap-4 transition-all duration-300 pt-4"
              >
                More About Me <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 lg:py-32 px-6 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            subtitle="Restorative Packages"
            title="Our Experiences"
            description="Every session is a nurturing blend of slow, mindful movement, rest and therapeutic sound."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mt-16">
            {services.map((service, i) => (
              <ServiceCard key={service.title} {...service} index={i} />
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/services"
              className="inline-flex items-center gap-3 px-10 py-4 border border-foreground/20 text-xs font-medium tracking-[0.3em] uppercase text-foreground hover:bg-foreground hover:text-background transition-all duration-500"
            >
              View All Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* House Call Banner */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://media.base44.com/images/public/69d8b9a35e6ab29a2127374b/8c2f17577_generated_c9d14796.png"
            alt="House call yoga session setup"
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
            <p className="text-xs tracking-[0.4em] uppercase text-white/60 mb-6">
              Nomadic Wellness
            </p>
            <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-light text-white leading-tight mb-6">
              We Come to You
            </h2>
            <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto mb-10">
              Look out for us visiting your town! We travel to Dunsborough, Yallingup,
              Margaret River and the surrounding areas of the South West to bring
              yoga and sound relaxation directly to your accommodation.
            </p>
            <Link
              to="/events"
              className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-primary-foreground text-xs font-medium tracking-[0.3em] uppercase hover:bg-primary/90 transition-all duration-300"
            >
              Upcoming Events &amp; Areas <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            subtitle="Client Gratitude"
            title="Kind Words"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            <TestimonialCard
              quote="I received a truly nurturing and nourishing treatment from Mandy. She was able to tune into my body and what it needed, tapping intuitively into some powerful and helpful messages. Mandy's experience and confidence made me feel truly safe and in good hands."
              author="Stacey Smart"
              location="Stacey's Astrology & Rhythm — Dunsborough, WA"
            />
            <TestimonialCard
              quote="Mandy taught a yoga class to myself and 9 friends to start off the weekend of my 40th. Mandy has a beautiful, calm energy and led the class with just the right amount of guidance. It was such a special experience and was a highlight of everyone's weekend!"
              author="Katie Barry"
              location="Perth, Western Australia"
            />
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
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
              Free Yoga Audio Download
            </h2>
            <p className="text-base text-primary-foreground/70 leading-relaxed mb-8">
              A slow and gentle practice for stress and tension relief.
              Listen and feel as you reconnect to your body and breath.
            </p>
            <a
              href="https://mailchi.mp/118c4e1002a8/devahitiyogawa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex px-10 py-4 bg-background text-foreground text-xs font-medium tracking-[0.3em] uppercase hover:bg-background/90 transition-all duration-300"
            >
              Subscribe Now
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}