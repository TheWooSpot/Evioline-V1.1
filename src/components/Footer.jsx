import React from 'react'
import { motion } from 'framer-motion'
import { Eye, Github, Twitter, Linkedin, Mail } from 'lucide-react'

const Footer = () => {
  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:connect@evioline.com', label: 'Email' },
  ]

  const footerLinks = [
    {
      title: 'Navigate',
      links: [
        { name: 'About Us', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Our Impact', href: '#impact' },
        { name: 'Contact', href: '#contact' },
      ],
    },
    {
      title: 'Focus Areas',
      links: [
        { name: 'Strategic Services', href: '#services' },
        { name: 'Partnerships', href: '#services' },
        { name: 'Activism', href: '#services' },
        { name: 'Pro Bono', href: '#services' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
      ],
    },
  ]

  return (
    <footer className="relative py-20 bg-gradient-to-t from-dark-900 to-dark-800">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-900/5 to-primary-900/10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-2 mb-6"
            >
              <Eye className="w-8 h-8 text-primary-400" />
              <span className="text-2xl font-display font-bold gradient-text">
                Evioline
              </span>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-gray-400 leading-relaxed mb-6"
            >
              A strategic consultancy dedicated to societal transformation.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex space-x-4"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 glass-effect rounded-lg hover:bg-white/10 transition-colors duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-primary-400 transition-colors duration-300" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section, index) => (
            <div key={section.title}>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-lg font-semibold text-white mb-6"
              >
                {section.title}
              </motion.h3>
              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.1 }}
                className="space-y-3"
              >
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </motion.ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm">
            © 2024 Evioline. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-4 md:mt-0">
            "The future is not something we enter. The future is something we create."
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
