
import React, { useState, useEffect } from 'react';
import { Moon, Sun, Download, Mail, MapPin, ExternalLink, Github, Linkedin, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [isDark, setIsDark] = useState(true); // Changed to true for default dark mode
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
      <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 min-h-screen">
        
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 glass-effect border-b border-white/20 dark:border-white/10 shadow-lg">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                Muhammad Asif
              </span>
            </h1>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsDark(!isDark)}
              className="rounded-full hover:bg-white/10 dark:hover:bg-white/5 transition-all duration-300 hover:scale-110"
            >
              {isDark ? (
                <Sun className="h-5 w-5 text-yellow-500" />
              ) : (
                <Moon className="h-5 w-5 text-slate-700" />
              )}
            </Button>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative pt-24 pb-20 px-4 overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 -z-10">
            <div className="floating-orb"></div>
            <div className="floating-orb"></div>
            <div className="floating-orb"></div>
            <div className="floating-orb"></div>
          </div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 -z-5 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 dark:from-blue-950/20 dark:via-transparent dark:to-purple-950/20"></div>
          
          <div className="container mx-auto max-w-6xl relative">
            <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="mb-8">
                {/* Enhanced Avatar */}
                <div className="relative w-40 h-40 mx-auto mb-8 group">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-400 animate-gradient p-1">
                    <div className="w-full h-full rounded-full bg-white dark:bg-slate-800 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 animate-pulse-slow"></div>
                      <span className="text-5xl font-bold text-slate-700 dark:text-slate-300 relative z-10">MA</span>
                    </div>
                  </div>
                  <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-xl animate-pulse-slow"></div>
                </div>

                {/* Enhanced Name */}
                <h1 className="text-5xl md:text-8xl font-bold mb-6 animate-scale-in">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-cyan-400 bg-clip-text text-transparent animate-gradient text-shadow">
                    Muhammad Asif
                  </span>
                </h1>

                {/* Enhanced Subtitle */}
                <div className="mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                  <p className="text-2xl md:text-3xl font-semibold text-slate-700 dark:text-slate-200 mb-3">
                    Frontend Developer
                  </p>
                  <div className="flex items-center justify-center gap-2 text-lg text-blue-600 dark:text-blue-400">
                    <span className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400"></span>
                    <span className="font-medium">Vue.js Specialist</span>
                    <span className="w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500"></span>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center justify-center text-slate-500 dark:text-slate-400 mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                  <div className="flex items-center bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-full px-4 py-2 border border-slate-200/50 dark:border-slate-700/50">
                    <MapPin className="h-4 w-4 mr-2 text-blue-500" />
                    <span>Lahore, Pakistan</span>
                  </div>
                </div>

                {/* Enhanced Description */}
                <p className="text-xl text-slate-700 dark:text-slate-300 mb-10 max-w-4xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.6s' }}>
                  <span className="font-semibold text-slate-900 dark:text-slate-100">Creative-minded Frontend Developer</span> with a passion for 
                  <span className="text-blue-600 dark:text-blue-400"> sleek UI</span>, 
                  <span className="text-purple-600 dark:text-purple-400"> smooth UX</span>, and turning ideas into 
                  <span className="font-semibold text-slate-900 dark:text-slate-100"> responsive, high-performance web experiences</span>.
                </p>

                {/* Enhanced CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
                  <a href="mailto:asif.reachout@gmail.com">
                    <Button className="button-magnetic button-glow bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 px-8 py-4 text-lg font-semibold rounded-full shadow-lg shadow-blue-500/25">
                      <Mail className="h-5 w-5 mr-3" />
                      Get In Touch
                    </Button>
                  </a>
                  <Button variant="outline" className="button-magnetic glass-effect border-slate-300/50 dark:border-slate-600/50 hover:bg-slate-100/50 dark:hover:bg-slate-800/50 px-8 py-4 text-lg font-semibold rounded-full group">
                    <Download className="h-5 w-5 mr-3 group-hover:animate-bounce" />
                    Download Resume
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 section-gradient"></div>
          <div className="container mx-auto max-w-6xl relative">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
              <span className="gradient-text-ocean text-shadow">
                Technical Skills
              </span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 max-w-5xl mx-auto">
              {skills.map((skill, index) => (
                <div
                  key={skill}
                  className={`group relative transform transition-all duration-500 hover:scale-110 ${
                    isVisible ? 'animate-fade-in' : ''
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                  <Badge
                    variant="secondary"
                    className="relative w-full px-6 py-3 text-sm font-semibold bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50 hover:bg-white/90 dark:hover:bg-slate-800/90 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                  >
                    {skill}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fiverr Freelance Section */}
        <section className="py-20 px-4 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-blue-50 dark:from-emerald-950/20 dark:via-slate-900 dark:to-blue-950/20"></div>
          <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-emerald-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
          
          <div className="container mx-auto max-w-6xl relative">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
              <span className="bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 bg-clip-text text-transparent text-shadow">
                Freelance Success
              </span>
            </h2>
            <Card className="max-w-4xl mx-auto glass-effect border-emerald-200/50 dark:border-emerald-700/50 shadow-2xl shadow-emerald-500/10 card-hover overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-blue-500/5"></div>
              <CardHeader className="text-center relative z-10 pb-8">
                <CardTitle className="text-3xl md:text-4xl mb-4 animate-scale-in">
                  <span className="text-emerald-500 dark:text-emerald-400 font-bold text-5xl">30+</span> 
                  <span className="text-slate-800 dark:text-slate-200"> Projects Completed on </span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">Fiverr</span>
                </CardTitle>
                <CardDescription className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  Delivering exceptional web development solutions to clients worldwide with outstanding results
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                  <div className="p-8 glass-effect rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <div className="text-5xl font-bold text-emerald-500 dark:text-emerald-400 mb-4 group-hover:scale-110 transition-transform">30+</div>
                    <p className="text-slate-600 dark:text-slate-300 font-semibold text-lg">Projects Delivered</p>
                    <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto mt-3 rounded-full"></div>
                  </div>
                  <div className="p-8 glass-effect rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                    <div className="flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-8 w-8 text-yellow-400 fill-current animate-pulse-slow" style={{ animationDelay: `${i * 0.1}s` }} />
                      ))}
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 font-semibold text-lg">Perfect 5-Star Rating</p>
                    <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mt-3 rounded-full"></div>
                  </div>
                </div>
                <div className="space-y-6">
                  <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed max-w-3xl mx-auto">
                    Specialized in creating <span className="font-semibold text-blue-600 dark:text-blue-400">modern, responsive web applications</span> using 
                    <span className="font-semibold text-emerald-600 dark:text-emerald-400"> Vue.js</span>, 
                    <span className="font-semibold text-purple-600 dark:text-purple-400"> React</span>, and 
                    <span className="font-semibold text-cyan-600 dark:text-cyan-400"> cutting-edge frontend technologies</span>.
                  </p>
                  <Button 
                    variant="outline" 
                    className="button-magnetic glass-effect border-emerald-300/50 dark:border-emerald-600/50 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20 px-8 py-4 text-lg font-semibold rounded-full group"
                    onClick={() => window.open('https://www.fiverr.com/webtechcod', '_blank')}
                  >
                    <ExternalLink className="h-5 w-5 mr-3 group-hover:rotate-12 transition-transform" />
                    View Fiverr Profile (@webtechcod)
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 dark:from-slate-950 dark:via-blue-950/20 dark:to-purple-950/20"></div>
          <div className="container mx-auto max-w-6xl relative">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
              <span className="gradient-text-purple text-shadow">
                Featured Projects
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card key={project.title} className="group card-hover-purple glass-effect border-slate-200/50 dark:border-slate-700/50 shadow-xl overflow-hidden relative animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Animated border effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10"></div>
                  
                  <CardHeader className="relative z-10">
                    <CardTitle className="group-hover:gradient-text-purple transition-all duration-300 text-slate-900 dark:text-slate-100 text-xl font-bold mb-2">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600 dark:text-slate-400 leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs border-slate-300/50 dark:border-slate-600/50 text-slate-600 dark:text-slate-400 bg-white/50 dark:bg-slate-800/50 hover:bg-purple-50 dark:hover:bg-purple-950/20 transition-colors duration-300">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <Button size="sm" variant="outline" className="button-magnetic glass-effect border-slate-300/50 dark:border-slate-600/50 hover:bg-slate-100/50 dark:hover:bg-slate-700/50 group/btn flex-1">
                        <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                        Demo
                      </Button>
                      <Button size="sm" variant="outline" className="button-magnetic glass-effect border-slate-300/50 dark:border-slate-600/50 hover:bg-slate-100/50 dark:hover:bg-slate-700/50 group/btn flex-1">
                        <Github className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
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
        <section className="py-20 px-4 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-blue-950/20 dark:via-slate-900 dark:to-indigo-950/20"></div>
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl animate-float"></div>
          
          <div className="container mx-auto max-w-5xl relative">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 bg-clip-text text-transparent text-shadow">
                Professional Experience
              </span>
            </h2>
            <div className="relative">
              {/* Enhanced Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 rounded-full opacity-30"></div>
              
              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <div key={exp.company} className={`relative pl-20 animate-slide-in-${index % 2 === 0 ? 'right' : 'left'}`} style={{ animationDelay: `${index * 0.2}s` }}>
                    {/* Enhanced Timeline Dot */}
                    <div className="absolute left-6 top-6 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg shadow-blue-500/50 flex items-center justify-center group">
                      <div className="w-3 h-3 bg-white rounded-full animate-pulse-slow"></div>
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 animate-ping opacity-20"></div>
                    </div>
                    
                    <Card className="glass-effect border-blue-200/50 dark:border-blue-700/50 shadow-xl card-hover overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <CardHeader className="relative z-10">
                        <CardTitle className="text-2xl text-slate-900 dark:text-slate-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                          {exp.position}
                        </CardTitle>
                        <CardDescription className="text-xl font-semibold">
                          <span className="text-blue-600 dark:text-blue-400">{exp.company}</span>
                          <span className="text-slate-500 dark:text-slate-400 mx-2">•</span>
                          <span className="text-slate-600 dark:text-slate-300">{exp.period}</span>
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="relative z-10">
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-lg">{exp.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Education & Certifications */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 section-gradient"></div>
          <div className="container mx-auto max-w-6xl relative">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-rose-500 bg-clip-text text-transparent text-shadow">
                Education & Certifications
              </span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="glass-effect border-purple-200/50 dark:border-purple-700/50 shadow-xl card-hover-purple overflow-hidden group animate-slide-in-left">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10 pb-6">
                  <CardTitle className="text-2xl text-slate-900 dark:text-slate-100 flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.84L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.84l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                      </svg>
                    </div>
                    Education
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10 space-y-4">
                  <div className="p-6 glass-effect rounded-xl">
                    <h3 className="font-bold text-xl mb-3 text-slate-900 dark:text-slate-100">BS Software Engineering</h3>
                    <p className="text-purple-600 dark:text-purple-400 font-semibold text-lg mb-2">Virtual University of Pakistan</p>
                    <p className="text-slate-600 dark:text-slate-400 font-medium">2021 – 2025</p>
                    <div className="mt-4 w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Currently pursuing (80% completed)</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="glass-effect border-rose-200/50 dark:border-rose-700/50 shadow-xl card-hover-purple overflow-hidden group animate-slide-in-right">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 via-transparent to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <CardHeader className="relative z-10 pb-6">
                  <CardTitle className="text-2xl text-slate-900 dark:text-slate-100 flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    Certifications
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative z-10 space-y-4">
                  <div className="p-6 glass-effect rounded-xl group/cert hover:shadow-lg transition-all duration-300">
                    <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100 mb-2">Cisco Networking Essentials</h3>
                    <p className="text-rose-600 dark:text-rose-400 font-semibold mb-1">Cisco Systems</p>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">2023</p>
                  </div>
                  <div className="p-6 glass-effect rounded-xl group/cert hover:shadow-lg transition-all duration-300">
                    <h3 className="font-bold text-lg text-slate-900 dark:text-slate-100 mb-2">Microsoft Exam 70-480</h3>
                    <p className="text-orange-600 dark:text-orange-400 font-semibold mb-1">Microsoft Corporation</p>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">HTML5, CSS3, JavaScript</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-indigo-950/20 dark:via-slate-900 dark:to-cyan-950/20"></div>
          <div className="absolute top-10 right-10 w-80 h-80 bg-gradient-to-br from-indigo-400/15 to-cyan-400/15 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-gradient-to-br from-cyan-400/15 to-blue-400/15 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
          
          <div className="container mx-auto max-w-5xl relative">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
              <span className="bg-gradient-to-r from-indigo-600 via-cyan-500 to-blue-500 bg-clip-text text-transparent text-shadow">
                Let's Connect
              </span>
            </h2>
            <Card className="max-w-3xl mx-auto glass-effect border-indigo-200/50 dark:border-indigo-700/50 shadow-2xl card-hover overflow-hidden animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-cyan-500/5"></div>
              <CardHeader className="text-center relative z-10 pb-8">
                <CardTitle className="text-3xl text-slate-900 dark:text-slate-100 mb-4">Get In Touch</CardTitle>
                <CardDescription className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                  Ready to collaborate? Let's build something <span className="font-semibold text-indigo-600 dark:text-indigo-400">amazing</span> together!
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center relative z-10">
                <div className="mb-10">
                  <a 
                    href="mailto:asif.reachout@gmail.com" 
                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700 text-white rounded-2xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-indigo-500/25 button-glow text-lg"
                  >
                    <Mail className="h-6 w-6 mr-3" />
                    asif.reachout@gmail.com
                  </a>
                </div>
                <div className="border-t border-slate-200/50 dark:border-slate-700/50 pt-8">
                  <p className="text-slate-600 dark:text-slate-400 mb-6 font-medium">Follow me on social media</p>
                  <div className="flex items-center justify-center space-x-8">
                    <a 
                      href="https://github.com/asif-reachout" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col items-center space-y-3 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300"
                    >
                      <div className="p-4 rounded-2xl bg-slate-100/80 dark:bg-slate-700/80 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-950/20 transition-all duration-300 group-hover:scale-110 shadow-lg group-hover:shadow-indigo-500/20">
                        <Github className="h-7 w-7" />
                      </div>
                      <span className="text-sm font-semibold">asif-reachout</span>
                    </a>
                    <a 
                      href="https://linkedin.com/in/asif-reachout" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col items-center space-y-3 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                    >
                      <div className="p-4 rounded-2xl bg-slate-100/80 dark:bg-slate-700/80 group-hover:bg-blue-50 dark:group-hover:bg-blue-950/20 transition-all duration-300 group-hover:scale-110 shadow-lg group-hover:shadow-blue-500/20">
                        <Linkedin className="h-7 w-7" />
                      </div>
                      <span className="text-sm font-semibold">asif-reachout</span>
                    </a>
                    <a 
                      href="https://twitter.com/asif_reachout" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col items-center space-y-3 text-slate-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-300"
                    >
                      <div className="p-4 rounded-2xl bg-slate-100/80 dark:bg-slate-700/80 group-hover:bg-purple-50 dark:group-hover:bg-purple-950/20 transition-all duration-300 group-hover:scale-110 shadow-lg group-hover:shadow-purple-500/20">
                        <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      </div>
                      <span className="text-sm font-semibold">asif_reachout</span>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 border-t border-slate-200/50 dark:border-slate-700/50 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-50/50 to-transparent dark:from-slate-900/50 dark:to-transparent"></div>
          <div className="container mx-auto max-w-6xl text-center relative z-10">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">
                <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-cyan-400 bg-clip-text text-transparent">
                  Muhammad Asif
                </span>
              </h3>
              <p className="text-slate-600 dark:text-slate-400 font-medium">
                Frontend Developer • Vue.js Specialist • Creative Innovator
              </p>
            </div>
            <div className="space-y-3">
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                © 2024 Muhammad Asif. Passionate about frontend development and exploring the 
                <span className="font-semibold text-purple-600 dark:text-purple-400"> multiverse of possibilities</span>.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500 dark:text-slate-500">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span>Languages: English (C1) • Urdu • Punjabi</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></span>
                  <span>Interests: Sci-fi • Time Travel • Space Exploration</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
