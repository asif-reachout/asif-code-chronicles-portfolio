
import React, { useState, useEffect } from 'react';
import { Moon, Sun, Download, Mail, MapPin, ExternalLink, Github, Linkedin, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [isDark, setIsDark] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setIsVisible(true);
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const skills = [
    'Vue.js', 'Quasar', 'Tailwind CSS', 'Nuxt.js', 
    'JavaScript', 'Git', 'React'
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      tech: ["Vue.js", "Quasar", "Node.js"],
      description: "Modern e-commerce solution with advanced filtering and real-time updates",
      demo: "#",
      github: "#"
    },
    {
      title: "Task Management App",
      tech: ["Nuxt.js", "Tailwind CSS", "Firebase"],
      description: "Collaborative task management with real-time synchronization",
      demo: "#",
      github: "#"
    },
    {
      title: "Weather Dashboard",
      tech: ["React", "TypeScript", "Chart.js"],
      description: "Interactive weather dashboard with data visualization",
      demo: "#",
      github: "#"
    },
    {
      title: "Portfolio Website",
      tech: ["Vue.js", "SCSS", "Animations"],
      description: "Responsive portfolio showcasing modern web development techniques",
      demo: "#",
      github: "#"
    }
  ];

  const experiences = [
    {
      company: "Vlinq.co",
      position: "Senior Frontend Developer",
      period: "Oct 2023 – Present",
      description: "Leading frontend development initiatives and mentoring junior developers"
    },
    {
      company: "Horizam",
      position: "Frontend Developer", 
      period: "Nov 2021 – Oct 2023",
      description: "Developed responsive web applications using modern frontend frameworks"
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'dark' : ''}`}>
      <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 min-h-screen">
        
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Muhammad Asif
            </h1>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsDark(!isDark)}
              className="rounded-full"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="mb-8">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-1">
                  <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    <span className="text-4xl font-bold text-gray-600 dark:text-gray-300">MA</span>
                  </div>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                    Muhammad Asif
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-2">
                  Frontend Developer | Vue.js Specialist
                </p>
                <div className="flex items-center justify-center text-gray-500 dark:text-gray-400 mb-6">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>Lahore, Pakistan</span>
                </div>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Creative-minded Frontend Developer with a passion for sleek UI, smooth UX, and turning ideas into responsive, high-performance web experiences.


                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                   <a href="mailto:asif.reachout@gmail.com" >
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                     <Mail className="h-4 w-4 mr-2" />
                    Get In Touch
                  </Button>
                    </a>
                  <Button variant="outline" className="group">
                    <Download className="h-4 w-4 mr-2 group-hover:animate-bounce" />
                    Download Resume
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Technical Skills
              </span>
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, index) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className={`px-4 py-2 text-sm font-medium transform transition-all duration-300 hover:scale-105 ${
                    isVisible ? 'animate-fade-in' : ''
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Fiverr Freelance Section */}
        <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800/50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Freelance Success
              </span>
            </h2>
            <Card className="max-w-3xl mx-auto">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl mb-2">
                  <span className="text-green-600 dark:text-green-400">30+</span> Projects Completed on Fiverr
                </CardTitle>
                <CardDescription className="text-lg">
                  Delivering exceptional web development solutions to clients worldwide
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">30+</div>
                    <p className="text-gray-600 dark:text-gray-300">Projects Delivered</p>
                  </div>
                  <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                    <div className="flex items-center justify-center mb-2">
                      <Star className="h-6 w-6 text-yellow-500 fill-current" />
                      <Star className="h-6 w-6 text-yellow-500 fill-current" />
                      <Star className="h-6 w-6 text-yellow-500 fill-current" />
                      <Star className="h-6 w-6 text-yellow-500 fill-current" />
                      <Star className="h-6 w-6 text-yellow-500 fill-current" />
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">5-Star Rating</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700 dark:text-gray-300">
                    Specialized in creating modern, responsive web applications using Vue.js, React, and cutting-edge frontend technologies.
                  </p>
                  <Button 
                    variant="outline" 
                    className="group"
                    onClick={() => window.open('https://www.fiverr.com/webtechcod', '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2 group-hover:rotate-45 transition-transform" />
                    View Fiverr Profile (@webtechcod)
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project, index) => (
                <Card key={project.title} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <CardTitle className="group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="group/btn">
                        <ExternalLink className="h-3 w-3 mr-1 group-hover/btn:rotate-45 transition-transform" />
                        Demo
                      </Button>
                      <Button size="sm" variant="outline" className="group/btn">
                        <Github className="h-3 w-3 mr-1 group-hover/btn:scale-110 transition-transform" />
                        Code
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800/50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={exp.company} className="relative pl-8 border-l-2 border-blue-200 dark:border-blue-800">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full"></div>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">{exp.position}</CardTitle>
                      <CardDescription className="text-lg font-medium text-blue-600 dark:text-blue-400">
                        {exp.company} • {exp.period}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education & Certifications */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Education & Certifications
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Education</CardTitle>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold text-lg mb-2">BS Software Engineering</h3>
                  <p className="text-blue-600 dark:text-blue-400 mb-1">Virtual University of Pakistan</p>
                  <p className="text-gray-600 dark:text-gray-400">2021 – 2025</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Certifications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h3 className="font-semibold">Cisco Networking Essentials</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">2023</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Microsoft Exam 70-480</h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">HTML5, CSS3, JavaScript</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 bg-gray-50 dark:bg-gray-800/50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Let's Connect
              </span>
            </h2>
            <Card className="max-w-2xl mx-auto">
              <CardHeader className="text-center">
                <CardTitle>Get In Touch</CardTitle>
                <CardDescription>
                  Ready to collaborate? Let's build something amazing together!
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="mb-8">
                  <a 
                    href="mailto:asif.reachout@gmail.com" 
                    className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105"
                  >
                    <Mail className="h-5 w-5 mr-2" />
                    asif.reachout@gmail.com
                  </a>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Follow me on social media</p>
                  <div className="flex items-center justify-center space-x-6">
                    <a 
                      href="https://github.com/asif-reachout" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col items-center space-y-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <div className="p-3 rounded-full bg-gray-100 dark:bg-gray-700 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors">
                        <Github className="h-6 w-6" />
                      </div>
                      <span className="text-xs font-medium">asif-reachout</span>
                    </a>
                    <a 
                      href="https://linkedin.com/in/asif-reachout" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col items-center space-y-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <div className="p-3 rounded-full bg-gray-100 dark:bg-gray-700 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors">
                        <Linkedin className="h-6 w-6" />
                      </div>
                      <span className="text-xs font-medium">asif-reachout</span>
                    </a>
                    <a 
                      href="https://twitter.com/asif_reachout" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col items-center space-y-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <div className="p-3 rounded-full bg-gray-100 dark:bg-gray-700 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20 transition-colors">
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      </div>
                      <span className="text-xs font-medium">asif_reachout</span>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-gray-200 dark:border-gray-700">
          <div className="container mx-auto max-w-6xl text-center">
            <p className="text-gray-600 dark:text-gray-400">
              © 2024 Muhammad Asif. Passionate about frontend development and exploring the multiverse of possibilities.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
              Languages: English (C1) • Urdu • Punjabi | Interests: Sci-fi • Time Travel • Space Exploration
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
