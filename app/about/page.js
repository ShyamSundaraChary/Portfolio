'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Code, Database, Palette, Wrench } from 'lucide-react'

export default function About() {
  const skills = {
    Frontend: [
      'HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Next.js', 'Framer Motion'
    ],
    Backend: [
      'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'REST APIs', 'JWT', 'Socket.io'
    ],
    Languages: [
      'Python', 'Java', 'C++', 'C', 'JavaScript', 'SQL', 'NoSQL'
    ],
    Tools: [
      'Git', 'GitHub', 'Postman', 'VS Code', 'Firebase', 'Vercel'
    ]
  }

  const skillIcons = {
    Frontend: <Palette className="h-5 w-5" />,
    Backend: <Database className="h-5 w-5" />,
    Languages: <Code className="h-5 w-5" />,
    Tools: <Wrench className="h-5 w-5" />
  }

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
              About Me
            </h1>
            <p className="text-xl text-muted-foreground">
              Passionate developer building the future with code
            </p>
          </div>

          {/* Profile Section */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2Mzl8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBzZXR1cHxlbnwwfHx8fDE3NTI2NTM5MTd8MA&ixlib=rb-4.1.0&q=85"
                  alt="Shyam Sundara Chary"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <Card className="border-2 border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-purple-500/5">
                <CardHeader>
                  <CardTitle className="text-2xl">My Journey</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    I'm a passionate Full Stack Developer with strong skills in
                    Python, JavaScript, and the MERN stack. I enjoy solving
                    complex problems through Data Structures & Algorithms and
                    building smart, AI-powered web applications.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    I'm always eager to learn, explore new technologies, and
                    create meaningful digital solutions that make a real impact.
                    Whether it's building scalable web applications or
                    experimenting with the latest AI frameworks, I'm driven by
                    curiosity and innovation.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Currently pursuing my B.Tech in Computer Science Engineering
                    at ACE Engineering College, I'm constantly working on
                    projects that challenge me to grow as a developer and
                    problem solver.
                  </p>
                </CardContent>
              </Card>

              <div className="grid grid-cols-2 gap-4">
                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-blue-400 mb-2">
                      10+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Projects Completed
                    </div>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-purple-400 mb-2">
                      8+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Technologies
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Card className="border-2 border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-pink-500/5">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="Frontend" className="w-full">
                  <TabsList className="grid w-full grid-cols-4">
                    {Object.keys(skills).map((category) => (
                      <TabsTrigger
                        key={category}
                        value={category}
                        className="flex items-center gap-2"
                      >
                        {skillIcons[category]}
                        <span className="hidden sm:inline">{category}</span>
                      </TabsTrigger>
                    ))}
                  </TabsList>

                  {Object.entries(skills).map(([category, skillList]) => (
                    <TabsContent
                      key={category}
                      value={category}
                      className="mt-6"
                    >
                      <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                        {skillList.map((skill, index) => (
                          <motion.div
                            key={skill}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                          >
                            <Badge
                              variant="secondary"
                              className="px-4 py-2 text-sm font-medium bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300"
                            >
                              {skill}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
            </Card>
          </motion.div>

          {/* Interests Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12"
          >
            <Card className="border-2 border-pink-500/20 bg-gradient-to-br from-pink-500/5 to-blue-500/5">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  Interests & Hobbies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-blue-400">
                      Professional Interests
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Artificial Intelligence & Machine Learning</li>
                      <li>• Data Structures & Algorithms</li>
                      <li>• Web Development & UI/UX Design</li>
                      <li>• Open Source Contributions</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-purple-400">
                      Personal Interests
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Competitive Programming</li>
                      <li>• Exploring Emerging Technologies</li>
                      <li>• Logical and Analytical Problem Solving</li>
                      <li>• Continuous Learning</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}