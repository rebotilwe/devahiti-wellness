import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowRight, Waves, Droplets, MapPin, Star } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";

const services = [
  {
    id: "group",
    title: "Group Yoga Classes",
    description:
      "Suitable for all levels, including beginners. Move, breathe, and unwind in a calm and supportive space.",
    duration: "45 – 90 min",
    price: "R130 drop-in",
    image:
      "https://media.base44.com/images/public/69d8b9a35e6ab29a2127374b/c514b05a9_generated_8e04c8ff.png",
    bookingType: "group",
  },
  {
    id: "sound",
    title: "Sound Journey",
    description:
      "A deeply immersive sound experience to reduce stress and promote deep rest through healing frequencies and vibration.",
    duration: "60 – 75 min",
    price: "From R800",
    image:
      "https://media.base44.com/images/public/69d8b9a35e6ab29a2127374b/90b6a8f9b_generated_85845fa4.png",
    bookingType: "sound",
  },
  {
    id: "private",
    title: "Private Yoga Sessions",
    description:
      "Personalised one-on-one sessions at your home or accommodation. Tailored to your needs and goals.",
    duration: "60 min",
    price: "R650 (R150 per extra person)",
    image:
      "https://media.base44.com/images/public/69d8b9a35e6ab29a2127374b/0ce063086_generated_ab60dfbd.png",
    bookingType: "private",
  },
  {
    id: "corporate",
    title: "Corporate & Group Sessions",
    description:
      "Wellness experiences for teams, retreats, or private groups. Reduce stress and reconnect through guided sessions.",
    duration: "75 min",
    price: "R1999 (up to 8 people)",
    image:
      "https://media.base44.com/images/public/69d8b9a35e6ab29a2127374b/8a896dbea_generated_4254f10c.png",
    bookingType: "corporate",
  },
  {
    id: "yin",
    title: "Yin Yoga",
    description:
      "Slow-paced yoga focused on deep tissue release, relaxation, and mindfulness.",
    duration: "90 min",
    price: "Included in group classes",
    image:
      "https://media.base44.com/images/public/69d8b9a35e6ab29a2127374b/85db9c9b2_generated_53ef1b3a.png",
    bookingType: "yin",
  },
  {
    id: "training",
    title: "Teacher Training",
    description:
      "200-hour and 300-hour advanced yoga teacher training programs starting May 2026.",
    duration: "Multi-month program",
    price: "Enquire for pricing",
    image:
      "https://media.base44.com/images/public/69d8b9a35e6ab29a2127374b/b9d7d7c6d_generated_c5fd17b8.png",
    bookingType: "enquire",
  },
];

const animatedWords = ["Breathe", "Center", "Align", "Flow", "Release", "Restore"];

const breathingSteps = [
  { label: "Inhale", duration: 4000, scale: 1.6 },
  { label: "Hold", duration: 3000, scale: 1.6 },
  { label: "Exhale", duration: 5000, scale: 1 },
];

// Calendly URL
const CALENDLY_URL = "https://calendly.com/cheryl-sayogasafaris";

export default function Home() {
  const [showHero, setShowHero] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const currentStep = breathingSteps[stepIndex];

  useEffect(() => {
    if (!showHero) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showHero]);

  useEffect(() => {
    if (!isRunning || showHero) return;

    const timer = setTimeout(() => {
      if (stepIndex < breathingSteps.length - 1) {
        setStepIndex((prev) => prev + 1);
      } else {
        setIsRunning(false);
        setTimeout(() => setShowHero(true), 1000);
      }
    }, currentStep.duration);

    return () => clearTimeout(timer);
  }, [stepIndex, isRunning, showHero, currentStep.duration]);

  useEffect(() => {
    if (!showHero) return;
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % animatedWords.length);
        setIsVisible(true);
      }, 300);
    }, 2500);
    return () => clearInterval(interval);
  }, [showHero]);

  if (!showHero) {
    return (
      <section className="fixed inset-0 z-[100] flex items-center justify-center bg-black overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-br from-ocean/20 via-black to-ocean/10"
        />

        <div className="relative z-10 flex flex-col items-center text-center px-6">
          <motion.div
            animate={{ scale: currentStep.scale }}
            transition={{
              duration: currentStep.duration / 1000,
              ease: "easeInOut",
            }}
            className="w-48 h-48 rounded-full bg-ocean/20 border border-ocean/30 flex items-center justify-center backdrop-blur-sm"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={currentStep.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                className="text-white text-sm tracking-[0.3em] uppercase font-light"
              >
                {currentStep.label}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            className="text-white mt-10 text-xs tracking-[0.4em] uppercase font-light"
          >
            Breathe with awareness
          </motion.p>

          <button
            onClick={() => setShowHero(true)}
            className="mt-12 text-[10px] text-white/40 tracking-[0.2em] uppercase underline underline-offset-8 hover:text-ocean-light transition-colors"
          >
            Skip Intro
          </button>
        </div>
      </section>
    );
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2 }}>
      {/* HERO SECTION with Animated Text */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://media.base44.com/images/public/69d8b9a35e6ab29a2127374b/8a896dbea_generated_4254f10c.png"
            className="w-full h-full object-cover"
            alt="Yoga Practice"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-ocean/30 to-transparent" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          {/* Welcome Badge with Wave */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <Waves className="h-4 w-4 text-ocean-light/60" />
            <span className="text-[10px] tracking-[0.5em] uppercase text-white/70">
              Welcome to Devahiti
            </span>
            <Waves className="h-4 w-4 text-ocean-light/60" />
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-light text-white leading-[1.1]"
          >
            Yoga & <br /> <span className="italic font-serif">Movement Studio</span>
          </motion.h1>

          {/* Slogan + Animated Rotating Words */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-6"
          >
            <p className="text-white/80 text-base md:text-lg font-light mb-2">
              "If you can breathe, you can do yoga"
            </p>
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <span className="text-white/60 text-sm tracking-wide">Find your flow —</span>
              <div className="relative inline-block min-w-[130px] text-center">
                <motion.span
                  animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 10 }}
                  transition={{ duration: 0.3 }}
                  className="text-white text-lg md:text-2xl font-heading font-semibold inline-block drop-shadow-lg"
                  style={{ color: '#8fc9d1', textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}
                >
                  {animatedWords[currentWordIndex]}
                </motion.span>
              </div>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="text-white/60 mt-6 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed"
          >
            Open-air yoga and movement studio in Ballito. Private sessions, group classes, 
            sound journeys, and wellness experiences — all equipment provided.
          </motion.p>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex items-center justify-center gap-2 mt-4 text-white/60 text-sm"
          >
            <MapPin className="h-4 w-4" />
            Ballito, South Africa
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-5 justify-center mt-12"
          >
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-4 bg-ocean text-white text-[11px] font-medium uppercase tracking-[0.3em] hover:bg-ocean-dark transition-all rounded-sm shadow-xl shadow-ocean/10"
            >
              Free Trial Class
            </a>
            <Link
              to="/services"
              className="px-12 py-4 border border-white/20 text-white text-[11px] font-medium uppercase tracking-[0.3em] hover:bg-white/10 transition-all rounded-sm backdrop-blur-sm"
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
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-white/30 text-[8px] tracking-[0.3em] uppercase">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-transparent to-white/30" />
          </div>
        </motion.div>
      </section>

      {/* Client Message Section */}
      <section className="py-20 lg:py-28 px-6 bg-ocean/5 border-y border-ocean/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Droplets className="h-10 w-10 text-ocean/40 mx-auto mb-6" />
            <p className="font-heading text-2xl md:text-3xl lg:text-4xl text-ocean italic mb-4 leading-relaxed">
              "Unwind with family and friends as you reduce stress through mindful movement, 
              followed by a nurturing sound journey — leaving you feeling relaxed and restored."
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Sessions suitable for everybody. Beginners are always welcome ✨
            </p>
          </motion.div>
        </div>
      </section>

      {/* Devahiti Meaning Section */}
      <section className="py-20 lg:py-28 px-6 bg-gradient-to-b from-white to-ocean/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-12 h-px bg-ocean/30" />
              <span className="mx-3 text-ocean/50 text-xs">✦</span>
              <div className="w-12 h-px bg-ocean/30" />
            </div>
            <p className="font-heading text-2xl md:text-3xl lg:text-4xl text-foreground leading-relaxed mb-6">
              Devahiti is a Sanskrit word meaning <span className="text-ocean">Divine</span> or{" "}
              <span className="text-ocean">Natural Order</span>.
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
                <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-ocean/30 rounded-tl-2xl" />
                <img
                  src="https://media.base44.com/images/public/69d8b9a35e6ab29a2127374b/b9d7d7c6d_generated_c5fd17b8.png"
                  alt="Yoga practice"
                  className="w-full max-w-md mx-auto lg:mx-0 object-cover relative z-10"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-ocean/30 rounded-br-2xl" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <p className="text-xs tracking-[0.3em] uppercase text-ocean">
                Rooted in Science & Tradition
              </p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-foreground leading-tight">
                An All-Encompassing Yogic System
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Rooted in science and evidence-based movement practices, in conjunction with time-honoured 
                yogic principles, Devahiti Yoga is designed to facilitate alignment and harmony.
              </p>

              <div className="bg-ocean/5 p-4 rounded-lg border-l-4 border-ocean">
                <p className="text-ocean font-heading text-lg italic">
                  "If you can breathe, you can do yoga!"
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            subtitle="What We Offer"
            title="Our Classes & Experiences"
            description="Whether you are just beginning or deepening your journey, our offerings are designed to support your mind, body and spirit."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mt-20">
            {services.map((service, i) => (
              <ServiceCard key={i} {...service} index={i} />
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/services"
              className="inline-flex items-center gap-3 px-10 py-4 border border-ocean/30 text-ocean text-xs font-medium tracking-[0.3em] uppercase hover:bg-ocean hover:text-white transition-all duration-500 rounded-sm"
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
          <div className="absolute inset-0 bg-ocean-dark/70" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Waves className="h-8 w-8 text-white/40 mx-auto mb-4" />
            <p className="font-heading text-2xl md:text-3xl lg:text-4xl italic text-white leading-relaxed mb-6">
              "I strive to encourage those who think 'they can't do yoga', to become those who can...
            </p>
            <p className="font-heading text-xl md:text-2xl text-white/90 italic">
              because if you can breathe, you can do yoga!"
            </p>
            <p className="text-sm text-white/60 mt-6">
              We welcome all practitioners from beginners through advanced and special needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Teacher Training CTA */}
      <section className="py-20 lg:py-28 px-6 bg-ocean">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-white/30 text-white/30" />
              ))}
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4">
              200 hour & 300 hour Advanced Teacher Training
            </h2>
            <p className="text-xl text-white/80 mb-4">
              200hr: Starts May 16-17, 2026 | 300hr: Starts May 2-3, 2026
            </p>
            <p className="text-base text-white/70 leading-relaxed mb-8 max-w-2xl mx-auto">
              Deepen your practice and become a certified instructor. Our comprehensive training programs 
              are rooted in science and time-honoured yogic principles.
            </p>
            <Link
              to="/contact"
              className="inline-flex px-10 py-4 bg-white text-ocean text-xs font-medium tracking-[0.3em] uppercase hover:bg-white/90 transition-all duration-300 rounded-sm"
            >
              Enquire About Training
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
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 bg-ocean text-white text-xs font-medium tracking-[0.3em] uppercase hover:bg-ocean-dark transition-all duration-300 rounded-sm"
          >
            Claim Your Free Class <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </motion.div>
  );
}