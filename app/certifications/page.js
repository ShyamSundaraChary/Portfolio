'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Award, Filter, Calendar, Building } from 'lucide-react'

export default function Certifications() {
  const [filter, setFilter] = useState('All')

  const certifications = [
    {
      id: 1,
      title: 'Python Essentials',
      issuer: 'Cisco Networking Academy',
      date: '2024',
      category: 'Programming',
      description: 'Comprehensive Python programming certification covering fundamentals, object-oriented programming, and advanced concepts.',
      skills: ['Python', 'OOP', 'Data Structures', 'File Handling'],
      credentialUrl: '#',
      badge: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=100&h=100&fit=crop&crop=center'
    },
    {
      id: 2,
      title: 'Computer Networks',
      issuer: 'Cisco Networking Academy',
      date: '2024',
      category: 'Networking',
      description: 'In-depth study of computer networking concepts, protocols, and network administration.',
      skills: ['TCP/IP', 'Routing', 'Switching', 'Network Security'],
      credentialUrl: '#',
      badge: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=100&h=100&fit=crop&crop=center'
    },
    {
      id: 3,
      title: 'DevOps Introduction',
      issuer: 'Great Learning',
      date: '2024',
      category: 'DevOps',
      description: 'Foundational DevOps certification covering CI/CD, containerization, and infrastructure automation.',
      skills: ['CI/CD', 'Docker', 'Git', 'Automation'],
      credentialUrl: '#',
      badge: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=100&h=100&fit=crop&crop=center'
    },
    {
      id: 4,
      title: 'Pearson MePro Level 10',
      issuer: 'Pearson',
      date: '2024',
      category: 'Language',
      description: 'Expert-level English language proficiency certification demonstrating advanced communication skills.',
      skills: ['English Communication', 'Business English', 'Technical Writing'],
      credentialUrl: '#',
      badge: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=100&h=100&fit=crop&crop=center'
    },
    {
      id: 5,
      title: 'SQL Basic',
      issuer: 'HackerRank',
      date: '2024',
      category: 'Database',
      description: 'Database fundamentals and SQL query skills certification.',
      skills: ['SQL', 'Database Design', 'Queries', 'Joins'],
      credentialUrl: '#',
      badge: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=100&h=100&fit=crop&crop=center'
    },
    {
      id: 6,
      title: 'SQL Intermediate',
      issuer: 'HackerRank',
      date: '2024',
      category: 'Database',
      description: 'Advanced SQL concepts including complex queries, stored procedures, and optimization.',
      skills: ['Advanced SQL', 'Stored Procedures', 'Optimization', 'Indexing'],
      credentialUrl: '#',
      badge: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=100&h=100&fit=crop&crop=center'
    },
    {
      id: 7,
      title: 'Python (Basic)',
      issuer: 'HackerRank',
      date: '2024',
      category: 'Programming',
      description: 'Python programming fundamentals and problem-solving skills.',
      skills: ['Python', 'Algorithms', 'Data Structures', 'Problem Solving'],
      credentialUrl: '#',
      badge: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=100&h=100&fit=crop&crop=center'
    },
    {
      id: 8,
      title: 'JavaScript (Basic)',
      issuer: 'HackerRank',
      date: '2024',
      category: 'Programming',
      description: 'JavaScript fundamentals covering ES6+, DOM manipulation, and asynchronous programming.',
      skills: ['JavaScript', 'ES6+', 'DOM', 'Async Programming'],
      credentialUrl: '#',
      badge: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=100&h=100&fit=crop&crop=center'
    },
    {
      id: 9,
      title: 'React (Basic)',
      issuer: 'HackerRank',
      date: '2024',
      category: 'Frontend',
      description: 'React.js fundamentals including components, state management, and hooks.',
      skills: ['React', 'Components', 'State Management', 'Hooks'],
      credentialUrl: '#',
      badge: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=100&h=100&fit=crop&crop=center'
    },
    {
      id: 10,
      title: 'Node.js (Basic)',
      issuer: 'HackerRank',
      date: '2024',
      category: 'Backend',
      description: 'Node.js server-side development and API creation fundamentals.',
      skills: ['Node.js', 'Express', 'APIs', 'Server Development'],
      credentialUrl: '#',
      badge: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=100&h=100&fit=crop&crop=center'
    },
    {
      id: 11,
      title: 'CSS',
      issuer: 'HackerRank',
      date: '2024',
      category: 'Frontend',
      description: 'CSS styling, responsive design, and modern layout techniques.',
      skills: ['CSS', 'Responsive Design', 'Flexbox', 'Grid'],
      credentialUrl: '#',
      badge: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=center'
    },
    {
      id: 12,
      title: 'Problem Solving (Basic)',
      issuer: 'HackerRank',
      date: '2024',
      category: 'Algorithms',
      description: 'Algorithmic thinking and problem-solving skills for competitive programming.',
      skills: ['Algorithms', 'Problem Solving', 'Logic', 'Data Structures'],
      credentialUrl: '#',
      badge: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=100&fit=crop&crop=center'
    }
  ]

  const categories = ['All', 'Programming', 'Frontend', 'Backend', 'Database', 'DevOps', 'Networking', 'Language', 'Algorithms']

  const filteredCertifications = filter === 'All' 
    ? certifications 
    : certifications.filter(cert => cert.category === filter)

  const getCategoryStats = () => {
    const stats = {}
    certifications.forEach(cert => {
      stats[cert.category] = (stats[cert.category] || 0) + 1
    })
    return stats
  }

  const categoryStats = getCategoryStats()

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Certifications
            </h1>
            <p className="text-xl text-muted-foreground">
              Professional certifications and skill validations
            </p>
          </div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
          >
            <Card className="text-center border-2 border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-purple-500/5">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-blue-400 mb-1">{certifications.length}</div>
                <div className="text-sm text-muted-foreground">Total Certifications</div>
              </CardContent>
            </Card>
            <Card className="text-center border-2 border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-pink-500/5">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-purple-400 mb-1">{Object.keys(categoryStats).length}</div>
                <div className="text-sm text-muted-foreground">Categories</div>
              </CardContent>
            </Card>
            <Card className="text-center border-2 border-green-500/20 bg-gradient-to-br from-green-500/5 to-blue-500/5">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-green-400 mb-1">{categoryStats.Programming || 0}</div>
                <div className="text-sm text-muted-foreground">Programming</div>
              </CardContent>
            </Card>
            <Card className="text-center border-2 border-pink-500/20 bg-gradient-to-br from-pink-500/5 to-red-500/5">
              <CardContent className="p-4">
                <div className="text-2xl font-bold text-pink-400 mb-1">{categoryStats.Frontend || 0}</div>
                <div className="text-sm text-muted-foreground">Frontend</div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-2 mb-8"
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  filter === category 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg' 
                    : 'border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white'
                }`}
              >
                <Filter className="mr-2 h-3 w-3" />
                {category}
              </Button>
            ))}
          </motion.div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCertifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, rotateY: 5 }}
                className="group"
              >
                <Card className="h-full border-2 border-transparent hover:border-purple-500/20 transition-all duration-300 overflow-hidden bg-gradient-to-br from-card to-card/50 relative">
                  {/* Flip Effect on Hover */}
                  <div className="relative w-full h-full">
                    {/* Front Side */}
                    <div className="group-hover:opacity-0 transition-opacity duration-300">
                      <div className="relative p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full">
                            <Award className="h-6 w-6 text-white" />
                          </div>
                          <Badge
                            variant="secondary"
                            className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20"
                          >
                            {cert.category}
                          </Badge>
                        </div>
                        
                        <CardTitle className="text-lg mb-2 line-clamp-2">{cert.title}</CardTitle>
                        
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                          <Building className="h-4 w-4" />
                          {cert.issuer}
                        </div>
                        
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                          <Calendar className="h-4 w-4" />
                          {cert.date}
                        </div>
                        
                        <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                          {cert.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-1 mb-4">
                          {cert.skills.slice(0, 3).map((skill) => (
                            <Badge
                              key={skill}
                              variant="outline"
                              className="text-xs px-2 py-1"
                            >
                              {skill}
                            </Badge>
                          ))}
                          {cert.skills.length > 3 && (
                            <Badge variant="outline" className="text-xs px-2 py-1">
                              +{cert.skills.length - 3} more
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    {/* Back Side */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10">
                      <div className="h-full flex flex-col justify-center items-center text-center">
                        <Award className="h-16 w-16 text-blue-400 mb-4" />
                        <h3 className="text-lg font-semibold mb-2">{cert.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4">{cert.issuer}</p>
                        
                        <div className="flex flex-wrap gap-1 mb-6 justify-center">
                          {cert.skills.map((skill) => (
                            <Badge
                              key={skill}
                              variant="outline"
                              className="text-xs px-2 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10"
                            >
                              {skill}
                            </Badge>
                          ))}
                        </div>
                        
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                          onClick={() => window.open(cert.credentialUrl, '_blank')}
                        >
                          <ExternalLink className="mr-2 h-3 w-3" />
                          View Certificate
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Certification Goals */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16"
          >
            <Card className="border-2 border-purple-500/20 bg-gradient-to-br from-purple-500/5 to-pink-500/5">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Future Certification Goals</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-400">Technical Certifications</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• AWS Certified Solutions Architect</li>
                      <li>• Google Cloud Professional Developer</li>
                      <li>• MongoDB Certified Developer</li>
                      <li>• Kubernetes Certified Application Developer</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-purple-400">Specialized Skills</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• Machine Learning Engineering</li>
                      <li>• Advanced System Design</li>
                      <li>• Microservices Architecture</li>
                      <li>• Security and Penetration Testing</li>
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