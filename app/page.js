'use client'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowDown, Download, Mail, Github, Linkedin, Code, Brain, Zap ,Smartphone} from 'lucide-react'
import { TypewriterEffect } from '@/components/typewriter-effect'
import { ParticleBackground } from '@/components/particle-background'

export default function Home() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden">
      <ParticleBackground />
      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Hero Content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-4">
                  Shyam Sundara Chary
                </h1>
                <div className="text-xl md:text-2xl text-muted-foreground mb-6">
                  <TypewriterEffect
                    words={[
                      "Full-Stack Developer",
                      "AI Enthusiast",
                      "DSA Lover",
                    ]}
                    className="text-xl md:text-2xl"
                  />
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg md:text-xl text-muted-foreground leading-relaxed"
              >
                Building scalable solutions with{" "}
                <span className="text-blue-400 font-semibold">AI</span>,{" "}
                <span className="text-purple-400 font-semibold">DSA</span>, and
                the{" "}
                <span className="text-pink-400 font-semibold">MERN Stack</span>.
                Passionate about creating meaningful digital experiences.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() =>
                    window.open("/resume.pdf", "_blank", "noopener,noreferrer")
                  }
                >
                  <Download className="mr-2 h-5 w-5" />
                  View Resume
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-purple-400 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-6 rounded-lg transition-all duration-300"
                  onClick={scrollToContact}
                >
                  <Mail className="mr-2 h-6 w-6" />
                  Contact Me
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex items-center gap-6"
              >
                <a
                  href="https://github.com/ShyamSundaraChary"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-blue-400 transition-colors duration-300"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a
                  href="https://linkedin.com/in/shyam-sundara-chary"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-blue-400 transition-colors duration-300"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </motion.div>
            </motion.div>

            {/* Right Column - Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1566915896913-549d796d2166?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzR8MHwxfHNlYXJjaHwyfHxkZXZlbG9wZXIlMjB3b3Jrc3BhY2V8ZW58MHx8fHwxNzUyNjUzOTEwfDA&ixlib=rb-4.1.0&q=85"
                  alt="Developer workspace"
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Floating Icons */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-6 -right-6 bg-blue-500 p-4 rounded-full shadow-lg"
              >
                <Code className="h-8 w-8 text-white" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-6 -left-6 bg-purple-500 p-4 rounded-full shadow-lg"
              >
                <Brain className="h-8 w-8 text-white" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 2 }}
                className="absolute top-1/2 -right-6 bg-pink-500 p-4 rounded-full shadow-lg"
              >
                <Zap className="h-8 w-8 text-white" />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative z-10 py-20 bg-card/50 backdrop-blur-sm"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Let's Connect
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Ready to build something amazing together? Let's discuss your next
              project.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-card border rounded-lg shadow-lg"
              >
                <Mail className="h-8 w-8 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground">
                  shyamsundarachary22@gmail.com
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-card border rounded-lg shadow-lg"
              >
                <Smartphone className="h-8 w-8 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <p className="text-muted-foreground">+91 9030503722</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 bg-background/80 backdrop-blur-sm border-t">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            Built with ❤️ using Next.js + Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}