import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Users, Heart, Music, Briefcase, Sun, Award, Waves, Droplets } from "lucide-react";
import SectionHeading from "../components/SectionHeading";

// Calendly URL
const CALENDLY_URL = "https://calendly.com/cheryl-sayogasafaris";

const allServices = [
  {
    id: "group",
    title: "Group Yoga Classes",
    description:
      "Join our weekly classes designed for all levels. Experience mindful movement, pranayama and relaxation in a calm and supportive environment. Beginners are always welcome.",
    duration: "45 – 90 minutes",
    price: "R130 drop-in",
    image: "https://media.base44.com/images/public/69d8b9a35e6ab29a2127374b/c514b05a9_generated_8e04c8ff.png",
    icon: Users,
    bookingType: "group",
  },
  {
    id: "private",
    title: "Private Yoga Sessions",
    description:
      "Personalised one-on-one or small group sessions tailored to your body and goals. Enjoy yoga in the comfort of your home or accommodation.",
    duration: "60 minutes",
    price: "R650 individual + R150 per extra person",
    image: "https://media.base44.com/images/public/69d8b9a35e6ab29a2127374b/b9d7d7c6d_generated_c5fd17b8.png",
    icon: Heart,
    bookingType: "private",
  },
  {
    id: "sound",
    title: "Sound Journey",
    description:
      "A deeply restorative sound experience designed to reduce stress and bring the body into a state of relaxation and balance.",
    duration: "60 minutes",
    price: "R800 individual + R150 per extra person",
    image: "https://media.base44.com/images/public/69d8b9a35e6ab29a2127374b/90b6a8f9b_generated_85845fa4.png",
    icon: Music,
    bookingType: "sound",
  },
  {
    id: "group-private",
    title: "Private Group Yoga & Sound Journey",
    description:
      "Unwind with family and friends through mindful movement followed by a nurturing sound journey. Perfect for retreats, holidays or special gatherings.",
    duration: "75 minutes",
    price: "R1999 (up to 8 people) + R150 per extra person",
    image: "https://media.base44.com/images/public/69d8b9a35e6ab29a2127374b/8a896dbea_generated_4254f10c.png",
    icon: Users,
    bookingType: "corporate",
  },
  {
    id: "corporate",
    title: "Corporate Yoga & Wellness",
    description:
      "Bring balance into the workplace. Sessions designed to reduce stress, improve focus and enhance team wellbeing.",
    duration: "Custom",
    price: "Custom pricing",
    image: "https://media.base44.com/images/public/69d8b9a35e6ab29a2127374b/8a896dbea_generated_4254f10c.png",
    icon: Briefcase,
    bookingType: "corporate",
  },
  {
    id: "yin",
    title: "Yin Yoga",
    description:
      "A slow, meditative practice with longer-held postures to target deep connective tissues and promote deep relaxation.",
    duration: "90 minutes",
    price: "Included in group classes",
    image: "https://media.base44.com/images/public/69d8b9a35e6ab29a2127374b/85db9c9b2_generated_53ef1b3a.png",
    icon: Sun,
    bookingType: "yin",
  },
  {
    id: "fascial",
    title: "Fascial Release Therapy",
    description:
      "Devahiti's signature hands-on fascial release session to relieve tension, improve mobility and restore balance in the body.",
    duration: "45 – 75 minutes",
    price: "R450 – R650",
    image: "https://media.base44.com/images/public/69d8b9a35e6ab29a2127374b/8c2f17577_generated_c9d14796.png",
    icon: Heart,
    bookingType: "private",
  },
  {
    id: "training",
    title: "Teacher Training",
    description:
      "200-hour and 300-hour advanced yoga teacher training programs. Deepen your practice and become a certified instructor.",
    duration: "Multi-month program",
    price: "Enquire for pricing",
    image: "https://media.base44.com/images/public/69d8b9a35e6ab29a2127374b/8c2f17577_generated_c9d14796.png",
    icon: Award,
    bookingType: "enquire",
  },
];

export default function Services() {
  const handleBookingClick = () => {
    window.open(CALENDLY_URL, "_blank");
  };

  const getButtonText = (bookingType) => {
    if (bookingType === "enquire") return "Enquire";
    return "Book Now";
  };

  return (
    <div>
      {/* Hero with Ocean Wave Overlay */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://media.base44.com/images/public/69d8b9a35e6ab29a2127374b/8a896dbea_generated_4254f10c.png"
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
              What We Offer
            </span>
            <Waves className="h-4 w-4 text-white/60" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-light text-white"
          >
            Our Services
          </motion.h1>
        </div>
      </section>

      {/* Info Bar */}
      <section className="bg-ocean py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12">
          <div className="flex items-center gap-2 text-white/80">
            <Users className="h-4 w-4" />
            <span className="text-xs tracking-widest uppercase">All Levels Welcome</span>
          </div>
          <div className="flex items-center gap-2 text-white/80">
            <Heart className="h-4 w-4" />
            <span className="text-xs tracking-widest uppercase">Evidence-Based Practice</span>
          </div>
          <div className="flex items-center gap-2 text-white/80">
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
            description="Whether you are just beginning or deepening your journey, our offerings are designed to support your mind, body and spirit."
          />
        </div>
      </section>

      {/* Services Grid with Alternating Layout */}
      <section className="pb-20 lg:pb-32 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          {allServices.map((service, i) => (
            <motion.div
              key={service.id || i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${
                i % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              <div className={`flex flex-col justify-center p-8 lg:p-12 ${
                i % 2 === 0 ? "bg-card" : "bg-muted/50"
              }`}>
                <div className="flex items-center gap-3 mb-4">
                  <service.icon className="h-7 w-7 text-ocean" />
                  <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl font-light text-foreground">
                    {service.title}
                  </h3>
                </div>

                <p className="text-base text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="flex flex-wrap items-center gap-6 mb-8">
                  <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {service.duration}
                  </span>
                  <span className="text-lg font-heading font-medium text-ocean">
                    {service.price}
                  </span>
                </div>

                {service.bookingType === "enquire" ? (
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-ocean text-white text-xs font-medium tracking-[0.3em] uppercase hover:bg-ocean-dark transition-all rounded-sm w-full sm:w-auto"
                  >
                    Enquire
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                ) : (
                  <button
                    onClick={handleBookingClick}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-ocean text-white text-xs font-medium tracking-[0.3em] uppercase hover:bg-ocean-dark transition-all rounded-sm w-full sm:w-auto cursor-pointer"
                  >
                    {getButtonText(service.bookingType)}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 lg:py-28 px-6 bg-ocean/5 border-y border-ocean/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Droplets className="h-10 w-10 text-ocean/40 mx-auto mb-6" />
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-6">
              Rooted in <span className="text-ocean">Science</span> & <span className="text-ocean">Tradition</span>
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              Using traditional methods of Yoga, eclectic movement practices, sound, and methods of deep 
              relaxation to increase mindfulness and improve cognitive processes.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              The significant benefits of Yoga for children, athletes, men, women and seniors are well proven, 
              as Yoga addresses both physical and mental aspects of health, and well-being.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quote Section */}
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
            <p className="font-heading text-2xl md:text-3xl lg:text-4xl italic text-white leading-relaxed mb-6">
              "I strive to encourage those who think 'they can't do yoga', to become those who can...
            </p>
            <p className="font-heading text-xl md:text-2xl text-white/90 italic">
              because if you can breathe, you can do yoga!"
            </p>
          </motion.div>
        </div>
      </section>

      {/* Teacher Training CTA */}
      <section className="py-20 lg:py-28 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Award className="h-12 w-12 text-ocean mx-auto mb-6" />
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-foreground mb-4">
              200 hour & 300 hour Advanced Teacher Training
            </h2>
            <p className="text-xl text-ocean mb-4">
              Starts in May 2026
            </p>
            <p className="text-base text-muted-foreground leading-relaxed mb-10 max-w-2xl mx-auto">
              For over four decades movement, dance and yoga have been our profession. 
              We would love to share our passion for this ancient art and science with you.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-10 py-4 bg-ocean text-white text-xs font-medium tracking-[0.3em] uppercase hover:bg-ocean-dark transition-all rounded-sm"
            >
              Enquire About Training <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Free Trial CTA */}
      <section className="py-20 lg:py-28 px-6 bg-ocean/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-light text-foreground mb-4">
            Try a Class for Free
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed mb-8">
            We invite you to take a free trial class with us whenever you are ready to dip 
            your toes into this beautiful practice that is yoga.
          </p>
          <button
            onClick={() => window.open(CALENDLY_URL, "_blank")}
            className="inline-flex items-center gap-3 px-10 py-4 bg-ocean text-white text-xs font-medium tracking-[0.3em] uppercase hover:bg-ocean-dark transition-all duration-300 rounded-sm cursor-pointer"
          >
            Claim Your Free Class <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>
    </div>
  );
}