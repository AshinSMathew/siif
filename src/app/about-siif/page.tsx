"use client";

import { motion } from "framer-motion";
import {
  Rocket,
  GraduationCap,
  Users,
  Handshake,
  Target,
  ArrowRight
} from "lucide-react";

const whySIIF = [
  "To bridge the gap between academia and the startup ecosystem",
  "To instil a culture of innovation, problem-solving, and self-reliance",
  "To provide a platform for incubation, acceleration, and market access",
  "To contribute to local, regional, and national development through entrepreneurship"
];

const offerings = [
  {
    icon: <Rocket className="w-6 h-6 text-primary" />,
    title: "Pre-incubation & ideation support"
  },
  {
    icon: <GraduationCap className="w-6 h-6 text-primary" />,
    title: "Dedicated co-working & prototyping space"
  },
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: "Mentoring & domain expert guidance"
  },
  {
    icon: <Handshake className="w-6 h-6 text-primary" />,
    title: "Access to funding, grants & CSR support"
  },
  {
    icon: <Target className="w-6 h-6 text-primary" />,
    title: "Linkages with Kerala Startup Mission, AICTE, MSME, and startup investors"
  }
];

export default function AboutSIIF() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 z-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(#000 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}>
        </div>

        {/* Decorative Blocks (matching screenshot) */}
        <div className="absolute right-10 top-20 hidden lg:grid grid-cols-4 gap-1 z-0">
          {[...Array(16)].map((_, i) => (
            <div key={i} className={`w-8 h-8 rounded-sm ${i === 5 ? 'bg-primary' :
              i === 9 ? 'bg-primary/80' :
                i === 10 ? 'bg-black' :
                  i === 11 ? 'bg-primary/20' :
                    i === 12 ? 'bg-primary/60' :
                      'bg-gray-50'
              }`} />
          ))}
        </div>

        <div className="max-w-[1400px] mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="text-[clamp(40px,8vw,100px)] font-black leading-[0.9] tracking-tighter text-black mb-4 font-hanken">
              About SIIF<span className="text-primary">.</span>
            </h1>
            <p className="text-[clamp(18px,2vw,24px)] font-semibold text-black/60 font-hanken mb-12">
              SJCET Innovation and Incubation Foundation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6 text-lg leading-relaxed text-black/80 font-hanken lg:text-justify"
              >
                <p>
                  St. Joseph&apos;s College of Engineering and Technology (SJCET), Palai, has always been at the forefront of fostering innovation, entrepreneurship, and excellence in engineering education. As part of its continued commitment to nation-building and Atmanirbhar Bharat, SJCET proudly announces the formation of the <span className="font-bold text-black font-hanken">SJCET Innovation and Incubation Foundation (SIIF)</span>—a dedicated Section 8 Company aimed at nurturing startups and empowering innovators.
                </p>
                <p>
                  SIIF is established to function as a formal, professional incubation center within the SJCET campus, supporting both internal innovators (students, faculty, alumni) and external entrepreneurs. It serves as a launchpad for turning creative ideas into viable startups through structured programs, mentoring, access to funding, prototyping support, and strategic partnerships.
                </p>
                <p>
                  Backed by a visionary management, experienced faculty, a strong alumni network, and collaborations with government and industry bodies, SIIF aims to become a leading regional hub for innovation, entrepreneurship, and technology-driven transformation.
                </p>
              </motion.div>

              {/* Why SIIF Section */}
              <div className="pt-12">
                <h2 className="text-3xl font-black mb-8 font-hanken flex items-center gap-3 text-black">
                  Why SIIF?
                  <div className="h-px flex-grow bg-black/5 ml-4"></div>
                </h2>
                <ul className="space-y-6">
                  {whySIIF.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="flex items-start gap-4 group"
                    >
                      <div className="w-2.5 h-2.5 rounded-full bg-primary mt-2 flex-shrink-0 group-hover:scale-125 transition-transform" />
                      <p className="text-xl font-medium text-black/80 font-hanken leading-snug">
                        {item}
                      </p>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 bg-gray-50/50">
        <div className="max-w-[1400px] mx-auto px-6">
          <h2 className="text-3xl font-black mb-12 font-hanken flex items-center gap-3 text-black">
            What We Offer
            <div className="h-px flex-grow bg-black/5 ml-4"></div>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offerings.map((offering, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-8 rounded-[20px] border border-black/5 hover:border-primary/20 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors">
                  {offering.icon}
                </div>
                <h3 className="text-xl font-bold text-black leading-tight font-hanken">
                  {offering.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="py-20 mb-20">
        <div className="max-w-[1400px] mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-[#F9F9F9] p-10 lg:p-16 rounded-[25px] overflow-hidden border border-black/5"
          >
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-primary"></div>
            <div className="max-w-4xl relative z-10">
              <h2 className="text-4xl font-black mb-8 text-black font-hanken">Our Vision</h2>
              <p className="text-2xl font-semibold leading-relaxed text-black/70 font-hanken lg:text-justify">
                SJCET Innovation and Incubation Foundation envisions becoming a change-maker in Kerala&apos;s innovation landscape, fuelling the dreams of aspiring entrepreneurs and solving real-world challenges with technology and creativity.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
