import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, BookOpen } from 'lucide-react'

const Impact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [activeFilter, setActiveFilter] = useState('all')

  const caseStudies = [
    {
      id: 1,
      title: 'Advancing Climate Justice',
      category: 'policy',
      description: 'Partnered with a national coalition to secure landmark environmental legislation through strategic advocacy and community mobilization.',
      image: 'https://images.unsplash.com/photo-1583322418313-3d5f1a369333?w=600&h=400&fit=crop',
      tags: ['Policy Change', 'Advocacy', 'Environment'],
      link: '#',
    },
    {
      id: 2,
      title: 'Youth Empowerment Initiative',
      category: 'community',
      description: 'Developed and scaled a grassroots program that engaged over 10,000 young activists in civic action across five cities.',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop',
      tags: ['Community', 'Youth', 'Activism'],
      link: '#',
    },
    {
      id: 3,
      title: 'Ethical Supply Chain Reform',
      category: 'corporate',
      description: 'Advised a Fortune 500 company on implementing a transparent and equitable supply chain, impacting over 50,000 workers.',
      image: 'https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?w=600&h=400&fit=crop',
      tags: ['Corporate Responsibility', 'Ethics', 'Labor'],
      link: '#',
    },
    {
      id: 4,
      title: 'Public Health Equity Campaign',
      category: 'policy',
      description: 'Launched a successful narrative change campaign that led to increased public funding for health services in underserved communities.',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba9996a?w=600&h=400&fit=crop',
      tags: ['Health Equity', 'Policy Change', 'Narrative'],
      link: '#',
    },
    {
      id: 5,
      title: 'Digital Access for All',
      category: 'community',
      description: 'Brokered a cross-sector partnership to provide free internet access and digital literacy training to 2,500 low-income families.',
      image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=600&h=400&fit=crop',
      tags: ['Digital Divide', 'Partnership', 'Community'],
      link: '#',
    },
    {
      id: 6,
      title: 'Sustainable Investment Strategy',
      category: 'corporate',
      description: 'Guided an investment fund in developing a robust ESG framework for a $500M portfolio, aligning profit with purpose.',
      image: 'https://images.unsplash.com/photo-1579621970795-87facc2f976d?w=600&h=400&fit=crop',
      tags: ['ESG', 'Finance', 'Corporate Responsibility'],
      link: '#',
    },
  ]

  const filters = [
    { id: 'all', label: 'All Case Studies' },
    { id: 'policy', label: 'Policy Change' },
    { id: 'community', label: 'Community Mobilization' },
    { id: 'corporate', label: 'Corporate Responsibility' },
  ]

  const filteredStudies = activeFilter === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === activeFilter)

  return (
    <section id="impact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 gradient-text">
            Our Impact in Action
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our partnerships have led to tangible outcomes and systemic shifts. Explore a selection of our case studies to see how we help turn vision into reality.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'glass-effect text-gray-300 hover:bg-white/10'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="glass-effect rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <div className="flex space-x-3">
                    <a
                      href={study.link}
                      className="p-2 bg-primary-600 rounded-full hover:bg-primary-500 transition-colors duration-300"
                    >
                      <BookOpen className="w-4 h-4 text-white" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-primary-300 transition-colors duration-300">
                  {study.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {study.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary-900/30 text-primary-300 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Impact
