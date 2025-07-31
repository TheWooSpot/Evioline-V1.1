import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Target, Brain, HeartHandshake, Megaphone } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      icon: Target,
      title: 'Strategic Insight',
      description: 'We provide deep analysis and actionable strategies to address complex societal challenges.',
    },
    {
      icon: Brain,
      title: 'Systemic Thinking',
      description: 'We understand the interconnectedness of systems and design interventions for lasting change.',
    },
    {
      icon: HeartHandshake,
      title: 'Collaborative Partnerships',
      description: 'We build powerful coalitions to amplify impact and foster collective action.',
    },
    {
      icon: Megaphone,
      title: 'Principled Activism',
      description: 'We advocate for justice and equity, using our platform to champion transformative ideas.',
    },
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 gradient-text">
            Our Mission
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Evioline was founded on the principle that strategic thinking can be a powerful force for good. We bridge the gap between ambitious vision and tangible societal impact, working with leaders who dare to challenge the status quo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass-effect p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="mb-4">
                <feature.icon className="w-12 h-12 text-primary-400 group-hover:text-primary-300 transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-primary-300 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: '20+', label: 'Years of Collective Experience' },
            { number: '50+', label: 'Impactful Partnerships' },
            { number: '15+', label: 'Successful Campaigns' },
            { number: '100%', label: 'Commitment to Change' },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
