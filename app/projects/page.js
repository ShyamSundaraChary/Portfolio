'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Github, ExternalLink, Filter } from 'lucide-react'

export default function Projects() {
  const [filter, setFilter] = useState('All')

  const projects = [
    {
      id: 1,
      title: 'Skill-Nexus',
      description: 'AI-powered job recommender system that matches resumes with scraped job listings from LinkedIn and Naukri using advanced NLP techniques and machine learning algorithms.',
      longDescription: 'A comprehensive AI-powered job recommendation system that analyzes resume content and matches it with real-time job postings. The system uses web scraping to gather job data from multiple platforms, applies NLP for text analysis, and employs machine learning algorithms to provide personalized job recommendations.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop',
      technologies: ['Python', 'Flask', 'MySQL', 'Selenium', 'NLP', 'Machine Learning'],
      category: 'AI',
      github: 'https://github.com/ShyamSundaraChary/skill-nexus',
      demo: '#',
      features: [
        'Resume parsing and analysis',
        'Real-time job scraping',
        'AI-powered matching algorithm',
        'Personalized recommendations'
      ]
    },
    {
      id: 2,
      title: 'Blood Bank Management System',
      description: 'Full-stack application for managing blood donor registrations, inventory tracking, and blood requests with real-time updates and notifications.',
      longDescription: 'A comprehensive blood bank management system that streamlines the entire process from donor registration to blood distribution. Features include inventory management, emergency notifications, and donor scheduling.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'JWT', 'Socket.io'],
      category: 'Web',
      github: 'https://github.com/ShyamSundaraChary/blood-bank-system',
      demo: '#',
      features: [
        'Donor registration and management',
        'Blood inventory tracking',
        'Emergency request system',
        'Real-time notifications'
      ]
    },
    {
      id: 3,
      title: 'Sketch to Image Generator',
      description: 'AI-powered application that converts user sketches into realistic images using deep learning models trained with computer vision techniques.',
      longDescription: 'An innovative AI project that transforms simple sketches into photorealistic images using state-of-the-art generative models. The system processes hand-drawn sketches and generates corresponding realistic images.',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&h=400&fit=crop',
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'Keras', 'PIL', 'NumPy'],
      category: 'AI',
      github: 'https://github.com/ShyamSundaraChary/sketch-to-image',
      demo: '#',
      features: [
        'Sketch preprocessing',
        'Deep learning model',
        'Image generation',
        'Real-time processing'
      ]
    },
    {
      id: 4,
      title: 'Twitter (X) Clone',
      description: 'Full-featured social media clone with post threading, real-time updates, likes, comments, and user authentication.',
      longDescription: 'A comprehensive Twitter clone built with modern web technologies, featuring real-time updates, user authentication, post interactions, and a responsive design that closely mimics the original platform.',
      image: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'JWT', 'Tailwind CSS'],
      category: 'Web',
      github: 'https://github.com/ShyamSundaraChary/twitter-clone',
      demo: '#',
      features: [
        'Post threading system',
        'Real-time updates',
        'User authentication',
        'Like and comment system'
      ]
    },
    {
      id: 5,
      title: 'Dynamic Weather App using JS',
      description: 'Responsive weather application with live location support, detailed forecasts, and animated weather visualizations using vanilla JavaScript.',
      longDescription: 'A feature-rich weather application that provides comprehensive weather information with beautiful animations and intuitive user interface. Includes location-based weather, extended forecasts, and interactive weather maps.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Weather API', 'Geolocation', 'Local Storage'],
      category: 'Web',
      github: 'https://github.com/ShyamSundaraChary/weather-app',
      demo: '#',
      features: [
        'Live location detection',
        'Animated weather icons',
        'Extended forecasts',
        'Interactive maps'
      ]
    },
    {
      id: 6,
      title: 'DSA Visualizer',
      description: 'Interactive tool for visualizing data structures and algorithms with step-by-step animations and explanations.',
      longDescription: 'An educational tool that helps students understand complex data structures and algorithms through interactive visualizations and step-by-step explanations.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      technologies: ['JavaScript', 'HTML5', 'CSS3', 'Canvas API', 'Animation'],
      category: 'Tools',
      github: 'https://github.com/ShyamSundaraChary/dsa-visualizer',
      demo: '#',
      features: [
        'Algorithm visualization',
        'Interactive animations',
        'Step-by-step explanations',
        'Multiple data structures'
      ]
    }
  ]

  const categories = ['All', 'AI', 'Web', 'Tools']

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter)

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
              My Projects
            </h1>
            <p className="text-xl text-muted-foreground">
              A showcase of my technical skills and creative solutions
            </p>
          </div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  filter === category 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg' 
                    : 'border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white'
                }`}
              >
                <Filter className="mr-2 h-4 w-4" />
                {category}
              </Button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full border-2 border-transparent hover:border-purple-500/20 transition-all duration-300 overflow-hidden bg-gradient-to-br from-card to-card/50">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 right-4">
                      <Badge
                        variant="secondary"
                        className="bg-black/50 text-white border-0"
                      >
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="text-xs px-2 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-3 pt-4">
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                      <Button
                        size="sm"
                        className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                        onClick={() => window.open(project.demo, '_blank')}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}