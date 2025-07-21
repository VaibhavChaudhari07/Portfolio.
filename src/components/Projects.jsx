import { Shield, Music, Car, MapPin, FileText, ExternalLink, Github, BookOpen, Building2 } from 'lucide-react';
import MagicBento from './MagicBento';
import TiltedCard from './TiltedCard';
import Particles from './Particles';

const Projects = () => {
  
  const projects = [
    {
      id: 1,
      title: 'Library Management System',
      category: 'WEB APP',
      description: 'A comprehensive web application to manage books, users, and borrowing operations in libraries. Features include book inventory management, user accounts & role management, and borrow/return tracking.',
      icon: BookOpen,
      technologies: ['React', 'Node.js', 'MongoDB', 'REST API'],
      gradient: 'from-orange-500 to-orange-400',
      link: 'https://arif-library-management.netlify.app/',
      github: 'https://github.com/AI-Research-and-Innovation-Forum/arif-library-system'
    },
    {
      id: 2,
      title: 'Government Complaint Management System',
      category: 'AI/WEB APP',
      description: 'A platform for citizens to file and track government complaints. Main features include online complaint registration, status tracking and notifications, and complaint routing to relevant departments.',
      icon: Building2,
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB'],
      gradient: 'from-orange-500 to-orange-400',
      link: 'https://vwsrhylr.manus.space/',
      github: 'https://github.com/VaibhavChaudhari07/Unnat-Bharat'
    }
  ];

  const ProjectCard = ({ project }) => (
    <TiltedCard
      imageSrc={project.id === 1 ? "/library-grand.jpg" : "/jpg.jpg"}
      altText={project.title}
      containerHeight="100%"
      containerWidth="100%"
      imageHeight="100%"
      imageWidth="100%"
      scaleOnHover={1.02}
      rotateAmplitude={6}
      showMobileWarning={false}
      showTooltip={false}
      displayOverlayContent={true}
      overlayContent={
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <a 
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <ExternalLink size={20} className="text-white" />
          </a>
          <a 
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <Github size={20} className="text-white" />
          </a>
        </div>
      }
    >
      <div className={`group relative bg-gray-900/50 rounded-2xl overflow-hidden border border-gray-800 hover:border-orange-500/30 transition-all duration-300 h-full flex flex-col shadow-2xl shadow-black/40 hover:shadow-2xl hover:shadow-orange-500/20 ${project.isResearch ? 'border-orange-500/50' : ''}`}>
        {/* Project Image/Icon Area */}
        <div className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden flex-shrink-0 group-hover:brightness-110 transition-all duration-300`}>
          {project.id === 1 ? (
            // Library Management System - Show grand library image
            <div className="absolute inset-0">
              <img 
                src="/library-grand.jpg" 
                alt="Grand circular library" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ) : null}
          {project.id === 2 ? (
            // Government Complaint Management System - Show jpg image
            <div className="absolute inset-0">
              <img 
                src="/jpg.jpg" 
                alt="Government Complaint Management System" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ) : null}

          {/* Geometric decorations */}
          <div className="absolute top-4 left-4 w-1 h-16 bg-white/30 rotate-45" />
          <div className="absolute bottom-4 right-4 w-1 h-12 bg-white/20 -rotate-30" />

          {/* Link Icons Overlay */}
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all duration-300"
            >
              <ExternalLink size={20} className="text-white" />
            </a>
            <a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all duration-300"
            >
              <Github size={20} className="text-white" />
            </a>
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6 space-y-4 flex-1 flex flex-col">
          {/* Category */}
          <div className="text-sm font-semibold text-orange-500 uppercase tracking-wider">
            {project.category}
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold text-white">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-gray-400 leading-relaxed flex-1">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.technologies.map((tech, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700 hover:border-orange-500/50 hover:text-orange-500 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </TiltedCard>
  );

  return (
    <section id="projects" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Particles Background */}
      <div className="absolute inset-0 z-0" style={{ minHeight: '100vh' }}>
        <Particles />
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 font-galgo-heading">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-400 mx-auto mb-6" />
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Innovative solutions I've built
          </p>
        </div>

        {/* Projects Grid with MagicBento */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">
            Want to see more of my work or collaborate on a project?
          </p>
          <a 
            href="https://github.com/VaibhavChaudhari07"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-orange-500 to-orange-400 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 hover:-translate-y-1 hover:scale-105 font-galgo-title"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

