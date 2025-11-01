import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Heart, 
  Shield, 
  MessageCircle, 
  Video, 
  Phone, 
  Brain, 
  Clock, 
  Users,
  CheckCircle,
  ArrowRight,
  Star
} from 'lucide-react'
import HeroSection from '../components/sections/HeroSection'
import FeaturesSection from '../components/sections/FeaturesSection'
import StatsSection from '../components/sections/StatsSection'
import TestimonialsSection from '../components/sections/TestimonialsSection'
import CTASection from '../components/sections/CTASection'

export default function LandingPage() {
  return (
    <>
      <Helmet>
        <title>MentWel - Your Journey to Mental Wellness Starts Here</title>
        <meta name="description" content="Connect with licensed therapists across Nigeria for anonymous, secure, and flexible therapy sessions. Start your mental wellness journey today." />
      </Helmet>

      <div className="pt-16 lg:pt-20">
        {/* Hero Section */}
        <HeroSection />

        {/* Features Section */}
        <FeaturesSection />

        {/* Stats Section */}
        <StatsSection />

        {/* How It Works */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4"
              >
                How MentWel Works
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg text-neutral-600 max-w-2xl mx-auto"
              >
                Your path to mental wellness is just three simple steps away
              </motion.p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
              {[
                {
                  step: '01',
                  title: 'Choose Your Plan',
                  description: 'Select from our flexible therapy plans that fit your needs and budget.',
                  icon: CheckCircle,
                  color: 'primary'
                },
                {
                  step: '02',
                  title: 'Connect with Therapists',
                  description: 'Browse verified therapists and book sessions that work with your schedule.',
                  icon: Users,
                  color: 'secondary'
                },
                {
                  step: '03',
                  title: 'Begin Your Journey',
                  description: 'Start your therapy sessions and track your progress towards mental wellness.',
                  icon: Heart,
                  color: 'accent'
                }
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-${item.color}-100 flex items-center justify-center`}>
                    <item.icon className={`w-8 h-8 text-${item.color}-600`} />
                  </div>
                  <div className="text-4xl font-bold text-neutral-300 mb-4">{item.step}</div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-3">{item.title}</h3>
                  <p className="text-neutral-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose MentWel */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-neutral-50 to-neutral-100">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4"
              >
                Why Choose MentWel?
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-lg text-neutral-600 max-w-2xl mx-auto"
              >
                We're committed to making mental health support accessible, secure, and effective
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Shield,
                  title: '100% Anonymous',
                  description: 'Your privacy is our priority. All sessions are completely confidential.'
                },
                {
                  icon: CheckCircle,
                  title: 'Licensed Therapists',
                  description: 'All our therapists are verified professionals with proper credentials.'
                },
                {
                  icon: Clock,
                  title: '24/7 Availability',
                  description: 'Access support whenever you need it, day or night.'
                },
                {
                  icon: Brain,
                  title: 'AI-Powered Insights',
                  description: 'Track your mood and progress with intelligent analytics.'
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 bg-white rounded-lg shadow-soft hover:shadow-medium transition-shadow"
                >
                  <div className="w-12 h-12 mx-auto mb-4 bg-primary-100 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">{feature.title}</h3>
                  <p className="text-neutral-600 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <TestimonialsSection />

        {/* CTA Section */}
        <CTASection />
      </div>
    </>
  )
}
