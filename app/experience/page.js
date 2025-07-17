'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, MapPin, Building2 } from 'lucide-react'

export default function Experience() {
  const experiences = [
    {
      id: 1,
      company: 'Gradious',
      role: 'Full Stack Trainee',
      period: 'Feb 2025 – Present',
      location: 'Hyderabad, India',
      type: 'Trainee',
      description: 'Intensive full-stack development training program focusing on modern web technologies, system design, and software development best practices.',
      responsibilities: [
        'Training in Data Structures & Algorithms fundamentals',
        'Building full-stack projects using MERN stack',
        'Learning system design and architecture patterns',
        'Collaborating on team projects with version control',
        'Participating in code reviews and technical discussions'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'JavaScript', 'Git'],
      achievements: [
        'Completed multiple full-stack projects',
        'Improved problem-solving skills through DSA training',
        'Gained hands-on experience with modern development tools'
      ]
    }
  ]

  const skills = [
    'Full-Stack Development',
    'MERN Stack',
    'Data Structures & Algorithms',
    'System Design',
    'Problem Solving',
    'Team Collaboration',
    'Version Control',
    'Code Review',
    'Agile Methodology'
  ]

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Experience
            </h1>
            <p className="text-xl text-muted-foreground">
              My professional journey and growth
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative mb-12 ml-16"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-10 top-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-lg">
                  <div className="absolute inset-0 rounded-full animate-pulse bg-gradient-to-r from-blue-500 to-purple-500 opacity-30"></div>
                </div>

                <Card className="border-2 border-purple-500/20 bg-gradient-to-br from-card to-card/50 hover:border-purple-500/40 transition-all duration-300">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <CardTitle className="text-2xl text-blue-400 mb-2">
                          {exp.role}
                        </CardTitle>
                        <div className="flex items-center gap-2 text-lg font-semibold text-foreground mb-2">
                          <Building2 className="h-5 w-5 text-purple-400" />
                          {exp.company}
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </div>
                        <Badge
                          variant="outline"
                          className="w-fit bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/20"
                        >
                          {exp.type}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>

                    <div>
                      <h4 className="font-semibold mb-3 text-foreground">Key Responsibilities:</h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                            <span className="text-blue-400 mt-2">•</span>
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-foreground">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="px-3 py-1 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-foreground">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                            <span className="text-purple-400 mt-2">✓</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Skills Summary */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16"
          >
            <Card className="border-2 border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-purple-500/5">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Skills Developed</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3 justify-center">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Badge
                        variant="outline"
                        className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/20 hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Career Goals */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12"
          >
            <Card className="border-2 border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-pink-500/5">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Career Goals</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-400">Short-term Goals</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Master advanced React patterns and performance optimization</li>
                      <li>• Contribute to open-source projects</li>
                      <li>• Build scalable full-stack applications</li>
                      <li>• Enhance system design knowledge</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-purple-400">Long-term Goals</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Become a senior full-stack developer</li>
                      <li>• Lead development teams</li>
                      <li>• Specialize in AI/ML integration</li>
                      <li>• Build innovative tech solutions</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}