import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { BarChart3, Gift, HeartHandshake, Megaphone, Target, Users } from 'lucide-react'

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    {
      icon: BarChart3,
      title: 'Strategic Services',
      description: 'Comprehensive consulting to help organizations define their vision, navigate challenges, and maximize their social impact.',
      features: ['Theory of Change', 'System Mapping', 'Policy Analysis', 'Stakeholder Engagement'],
    },
    {
      icon: Gift,
      title: 'Pro Bono Support',
      description: 'We dedicate our time to supporting grassroots organizations and emerging movements with strategic guidance, free of charge.',
      features: ['Capacity Building', 'Campaign Strategy', 'Grant Writing Support', 'Leadership Coaching'],
    },
    {
      icon: HeartHandshake,
      title: 'Partnership Brokering',
      description: 'We identify and cultivate strategic alliances between non-profits, corporations, and public sector entities to achieve shared goals.',
      features: ['Coalition Building', 'Cross-Sector Collaboration', 'MOU Development', 'Shared Value Initiatives'],
    },
    {
      icon: Megaphone,
      title: 'Activism & Advocacy',
      description: 'We design and execute powerful advocacy campaigns that shift narratives, influence policy, and mobilize communities for action.',
      features: ['Campaign Design', 'Public Narrative', 'Digital Advocacy', 'Movement Building'],
    },
    {
      icon: Target,
      title: 'Impact Measurement',
      description: 'Defining and measuring what matters. We help you track progress, learn from outcomes, and communicate your impact effectively.',
      features: ['M&E Frameworks', 'Qualitative Analysis', 'Data Storytelling', 'Learning Agendas'],
    },
    {
      icon: Users,
      title: 'Leadership Advisory',
      description: 'Confidential counsel and strategic support for leaders navigating organizational change and complex external environments.',
      features: ['Executive Coaching', 'Board Development', 'Change Management', 'Crisis Communication'],
    },
  ]

  return (
    <section id="services" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-900/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 gradient-text">
            Our Strategic Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We offer a range of consultancy services designed to empower organizations and drive societal transformation. From long-term strategy to pro bono support, our work is tailored to your unique mission.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="glass-effect p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 group hover:scale-105"
            >
              <div className="mb-6">
                <service.icon className="w-12 h-12 text-primary-400 group-hover:text-primary-300 transition-colors duration-300" />
              </div>
              
              <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-primary-300 transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-400 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-gray-500 flex items-center">
                    <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
