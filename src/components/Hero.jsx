import { Download } from 'lucide-react';
import ProfileCard from './ProfileCard';
import DarkVeil from './DarkVeil';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const handleContactClick = () => {
    scrollToSection('contact');
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative bg-black overflow-hidden pt-20 pb-20 font-poppins">
      {/* DarkVeil background */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <DarkVeil />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh] pt-8 lg:pt-0">
          {/* Text Content */}
          <div className="space-y-6 lg:space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <p className="text-lg sm:text-xl text-gray-400 font-poppins">Hello, I'm</p>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent font-oswald tracking-tight leading-[0.9]">
                Vaibhav Chaudhari
              </h1>
              <div className="text-xl sm:text-2xl lg:text-3xl text-gray-300 flex items-center gap-2 font-poppins">
                
              </div>
            </div>

            <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-2xl leading-relaxed font-poppins">
              A passionate 19-year-old Computer Engineering student from Maharashtra, India, 
              specializing in full-stack web development and AI/ML solutions. Currently pursuing 
              BTech at SVKM Institute of Technology, Dhule.
            </p>

            {/* Stats */}
            <div className="flex gap-6 sm:gap-8 lg:gap-12">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-orange-500 font-fredoka">5+</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider font-poppins">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-orange-500 font-fredoka">1</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider font-poppins">Research Paper</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => scrollToSection('projects')}
                className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 hover:-translate-y-1 font-fredoka-title"
              >
                View My Work
              </button>
              <a 
                href="https://drive.google.com/file/d/1fvH6ZyMSXUA0Ilvrh8hqf3xZPwRAhCV5/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 font-fredoka-title"
              >
                <Download size={20} />
                Download CV
              </a>
            </div>
          </div>

          {/* ProfileCard Component */}
          <div className="relative h-80 sm:h-96 lg:h-[500px] animate-fade-in-right">
            <div className="relative w-64 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[500px] mx-auto">
              <ProfileCard
                avatarUrl="/avatar.png"
                name="Vaibhav Chaudhari"
                title="MERN Stack Developer & AI/ML Enthusiast"
                handle="vaibhavchaudhari"
                status="Available for Opportunities"
                contactText="Contact Me"
                showUserInfo={true}
                enableTilt={true}
                className="w-full h-full"
                onContactClick={handleContactClick}
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        {/* Removed scroll down indicator as requested */}
      </div>
    </section>
  );
};

export default Hero;


