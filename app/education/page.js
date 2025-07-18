'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Calendar, MapPin, GraduationCap, Award, BookOpen } from 'lucide-react'

export default function Education() {
  const education = [
    {
      id: 1,
      institution: 'ACE Engineering College',
      degree: 'Bachelor of Technology (B.Tech)',
      field: 'Computer Science Engineering',
      period: 'June 2022 – June 2026',
      location: 'Hyderabad, India',
      cgpa: '8.5',
      status: 'Pursuing',
      description: 'Comprehensive computer science program focusing on software development, algorithms, data structures, and emerging technologies.',
      subjects: [
        'Data Structures & Algorithms',
        'Object-Oriented Programming',
        'Database Management Systems',
        'Computer Networks',
        'Software Engineering',
        'Web Technologies',
        'Machine Learning',
        'Artificial Intelligence'
      ],
      achievements: [
        'Consistent academic performance with 8.5 CGPA',
        'Active participation in coding competitions',
        'Completed multiple technical projects',
        'Member of Computer Science Club'
      ]
    },
    {
      id: 2,
      institution: 'Government Junior College',
      degree: 'Intermediate',
      field: 'Mathematics, Physics, Chemistry (MPC)',
      period: '2020 – 2022',
      location: 'Hyderabad, India',
      cgpa: '9.5',
      status: 'Completed',
      description: 'Pre-university education with focus on mathematics and sciences, building strong analytical and problem-solving foundations.',
      subjects: [
        'Mathematics',
        'Physics',
        'Chemistry',
        'English',
        'Critical Thinking',
        'Problem Solving'
      ],
      achievements: [
        'Achieved 9.5 CGPA with distinction',
        'Excelled in mathematics and analytical subjects',
        'Participated in science exhibitions',
        'Developed strong foundation for engineering'
      ]
    }
  ]

  const skills = [
    'Programming Languages',
    'Web Development',
    'Database Systems',
    'Software Engineering',
    'Data Structures',
    'Algorithms',
    'Machine Learning',
    'Problem Solving'
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
              Education
            </h1>
            <p className="text-xl text-muted-foreground">
              My academic journey and learning path
            </p>
          </div>

          {/* Education Timeline */}
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <Card className="border-2 border-purple-500/20 bg-gradient-to-br from-card to-card/50 hover:border-purple-500/40 transition-all duration-300 overflow-hidden">
                  <CardHeader>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
                          <GraduationCap className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-2xl text-blue-400 mb-2">
                            {edu.degree}
                          </CardTitle>
                          <h3 className="text-lg font-semibold text-foreground mb-1">
                            {edu.field}
                          </h3>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <BookOpen className="h-4 w-4" />
                            {edu.institution}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {edu.period}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          {edu.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge
                            variant="outline"
                            className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border-green-500/20 text-green-400"
                          >
                            <Award className="h-3 w-3 mr-1" />
                            CGPA: {edu.cgpa}
                          </Badge>
                          <Badge
                            variant="outline"
                            className={`${
                              edu.status === 'Pursuing' 
                                ? 'bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border-yellow-500/20 text-yellow-400'
                                : 'bg-gradient-to-r from-green-500/10 to-blue-500/10 border-green-500/20 text-green-400'
                            }`}
                          >
                            {edu.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {edu.description}
                    </p>

                    <div>
                      <h4 className="font-semibold mb-3 text-foreground">Key Subjects:</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.subjects.map((subject) => (
                          <Badge
                            key={subject}
                            variant="secondary"
                            className="px-3 py-1 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20"
                          >
                            {subject}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3 text-foreground">Achievements:</h4>
                      <ul className="space-y-2">
                        {edu.achievements.map((achievement, idx) => (
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

          {/* Skills Developed */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16"
          >
            <Card className="border-2 border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-purple-500/5">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Skills Developed Through Education</CardTitle>
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

          {/* Academic Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12"
          >
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center border-2 border-green-500/20 bg-gradient-to-br from-green-500/5 to-blue-500/5">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-green-400 mb-2">8.1</div>
                  <div className="text-sm text-muted-foreground">Current CGPA</div>
                  <div className="text-xs text-muted-foreground mt-1">B.Tech CSE</div>
                </CardContent>
              </Card>
              
              <Card className="text-center border-2 border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-purple-500/5">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-blue-400 mb-2">9.5</div>
                  <div className="text-sm text-muted-foreground">Intermediate CGPA</div>
                  <div className="text-xs text-muted-foreground mt-1">MPC Stream</div>
                </CardContent>
              </Card>
              
              <Card className="text-center border-2 border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-pink-500/5">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-purple-400 mb-2">4</div>
                  <div className="text-sm text-muted-foreground">Years of Study</div>
                  <div className="text-xs text-muted-foreground mt-1">2022-2026</div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}