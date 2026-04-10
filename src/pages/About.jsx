import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import TestimonialCard from "../components/TestimonialCard";

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://media.base44.com/images/public/69d8b9a35e6ab29a2127374b/3b13d11e7_generated_fbf80261.png"
            alt="Western Australia coastline landscape"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/50" />
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xs tracking-[0.4em] uppercase text-white/60 mb-4"
          >
            Our Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading text-4xl md:text-6xl lg:text-7xl font-light text-white"
          >
            About Devahiti
          </motion.h1>
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
              "I strive to encourage those who think<br />
              'they can't do yoga'<br />
              to become those who can
            </p>
            <p className="font-heading text-xl md:text-2xl text-primary italic mt-6">
              If you can breathe, you can do yoga!"
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Mandy */}
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
                alt="Mandy Lancellas yoga instructor"
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
                Owner &amp; Founder
              </p>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-foreground">
                Mandy Lancellas
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Life is busy! This is why I would love to help you to slow down and reconnect to your body and breath.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                My passion is assisting people in reducing their stress through mindful movement, breath
                awareness, sound relaxation and nurturing bodywork so that they can assist their healing process on all
                levels — body, mind and emotions.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                I was born and raised in Cape Town, South Africa. A lover of nature and all things ocean.
                In 2014 I immigrated to Australia with my partner, so that we could embrace the incredible
                lifestyle that beautiful Western Australia has to offer!
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Yoga Journey */}
      <section className="py-20 lg:py-32 px-6 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 lg:order-1"
            >
              <p className="text-xs tracking-[0.3em] uppercase text-primary">The Journey</p>
              <h2 className="font-heading text-3xl md:text-4xl font-light text-foreground">
                My Journey Into Yoga
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                I truly discovered yoga through a surfing injury and never looked back! Other than keeping me
                both strong and flexible so that I can continue surfing, my yoga practice has also helped me
                to find more mental and emotional calm when life gets challenging.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                During the recovery process I realized that I wanted to learn how to do yoga safely on my own —
                so I embarked on a yoga teacher training back in South Africa with my mum and yoga teacher
                trainer Cheryl Lancellas. I had never intended to teach yoga to others, but as I began my
                200 hour yoga teacher training I found myself so inspired to share this amazing, healing gift with others!
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                I have since completed my 500 hour certification and two levels of yin yoga training
                with Danielle Mercer from Canada here in WA.
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
                alt="Yoga by the ocean in Western Australia"
                className="w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sound Relaxation */}
      <section className="py-20 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://media.base44.com/images/public/69d8b9a35e6ab29a2127374b/90b6a8f9b_generated_85845fa4.png"
                alt="Tibetan singing bowls for sound therapy"
                className="w-full"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-xs tracking-[0.3em] uppercase text-primary">Healing Through Sound</p>
              <h2 className="font-heading text-3xl md:text-4xl font-light text-foreground">
                Discovering Sound Relaxation
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                In 2015, during my recovery from a surfing injury, a lovely sound therapist from
                Margaret River loaned me a therapy bowl to help the bone heal and bring my body's
                healing response online.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                I will never forget my first magical experience of hearing and feeling the beautiful
                sound and vibration — so soothing and so grounding. I was hooked. I worked with it
                around the injury area and visualized the broken bone knitting back together.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                I then began my training for sound bowl massage and sound bath sessions so I could
                share this amazing experience with others in both an individual and group environment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bowen Therapy */}
      <section className="py-20 lg:py-32 px-6 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 lg:order-1"
            >
              <p className="text-xs tracking-[0.3em] uppercase text-primary">Restorative Bodywork</p>
              <h2 className="font-heading text-3xl md:text-4xl font-light text-foreground">
                Finding Bowen Therapy
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                Before I left South Africa I had embarked on learning a fascinating and restorative
                bodywork modality which releases tension, assists with reducing pain and helps to
                realign the body on all levels — but in a gentle and non-invasive way without any
                forceful manipulations.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                In 2021 I came across Bowen Therapy and was amazed at how my body felt after a
                treatment. In 2023 I completed my Fascial Kinetics Bowen Therapy training and
                I am now a certified Bowen Practitioner!
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
                src="https://media.base44.com/images/public/69d8b9a35e6ab29a2127374b/95129b295_generated_0712eee4.png"
                alt="Bowen therapy healing session"
                className="w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 lg:py-32 px-6">
        <div className="max-w-3xl mx-auto">
          <TestimonialCard
            quote="I had the AMAZING experience of taking class with Mandy while staying on Namotu island in Fiji and I can't say enough good things about it! One of Mandy's strengths is curating a full experience within her classes by using relaxing sounds and smells. After each practice I felt fully relaxed and calm."
            author="Eva Peterson"
            location="International Client"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 px-6 bg-primary">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-primary-foreground mb-6">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-base text-primary-foreground/70 mb-10">
            Every session is a nurturing blend of slow, mindful movement, rest and therapeutic sound.
          </p>
          <Link
            to="/booking"
            className="inline-flex items-center gap-3 px-10 py-4 bg-background text-foreground text-xs font-medium tracking-[0.3em] uppercase hover:bg-background/90 transition-all duration-300"
          >
            Book Your Experience <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}