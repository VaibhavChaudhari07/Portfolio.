import { GraduationCap, Target, Heart, Briefcase } from 'lucide-react';
import LetterGlitch from './LetterGlitch';
import ImageTrail from './ImageTrail';

const effectPhotos = [
  '/effectphotos/Screenshot%202025-07-20%20184920.png',
  '/effectphotos/Screenshot%202025-07-20%20184953.png',
  '/effectphotos/Screenshot%202025-07-20%20185014.png',
  '/effectphotos/Screenshot%202025-07-20%20185037.png',
  '/effectphotos/Screenshot%202025-07-20%20185054.png',
  '/effectphotos/Screenshot%202025-07-20%20185301.png',
  '/effectphotos/Screenshot%202025-07-20%20185326.png',
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900 relative overflow-hidden mt-20 font-poppins">
      {/* Black Luminance Background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.9) 100%)',
          opacity: 0.1,
          zIndex: 1
        }}
      />
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 2 }}>
        <LetterGlitch
          glitchColors={['#1a1a1a', '#333333', '#4a4a4a']}
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={true}
          smooth={true}
          opacity={0.5}
        />
      </div>
      {/* Additional Black Overlay for Luminance */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.5) 100%)',
          opacity: 0.1,
          zIndex: 3
        }}
      />

      {/* Image Trail Effect as overlay above overlays */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 20, pointerEvents: 'auto' }}>
        <ImageTrail
          items={effectPhotos}
          variant={1}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 font-galgo-heading">
            About My Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-400 mx-auto mb-6" />
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            From curiosity to expertise - my path in technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* My Story */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Heart className="text-orange-500" size={28} />
                My Story
              </h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I'm a 19-year-old Computer Engineering student at SVKM Institute of Technology, Dhule, 
                  currently in my 3rd year. My journey in technology began with curiosity about how things 
                  work and has evolved into a passion for creating innovative solutions using cutting-edge technologies.
                </p>
                <p>
                  Beyond coding, I'm deeply interested in business and entrepreneurship, always looking for 
                  ways to bridge technology and real-world problems. I believe in continuous learning and 
                  personal development, which drives me to explore new technologies and methodologies.
                </p>
              </div>
            </div>

            {/* Education */}
            <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                <GraduationCap className="text-orange-500" size={24} />
                Education
              </h4>
              <div className="space-y-3">
                <h5 className="text-lg font-medium text-orange-500">BTech in Computer Engineering</h5>
                <p className="text-gray-300">SVKM Institute of Technology, Dhule</p>
                <p className="text-sm text-gray-400">3rd Year (Current)</p>
              </div>
            </div>
          </div>

          {/* Goals and Interests */}
          <div className="space-y-8">
            {/* Current Focus */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Target className="text-orange-500" size={28} />
                Current Focus & Goals
              </h3>
              <div className="space-y-4">
                {[
                  'Mastering Java and Data Structures & Algorithms',
                  'Advancing Web Development and AI/ML skills',
                  'Public Speaking and Communication Skills',
                  'Building innovative projects and gaining industry experience'
                ].map((goal, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-300">{goal}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Beyond Technology */}
            <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                <Briefcase className="text-orange-500" size={24} />
                Beyond Technology
              </h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                  <span>Business & Entrepreneurship Aspirations</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                  <span>Personal Development</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                  <span>Leadership & Team Management</span>
                </div>
              </div>
            </div>

            {/* Achievement Highlights */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-orange-500/20 to-orange-400/10 rounded-xl p-4 border border-orange-500/20">
                <div className="text-2xl font-bold text-orange-500">200+</div>
                <div className="text-sm text-gray-400">Students Organized</div>
              </div>
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-400/10 rounded-xl p-4 border border-blue-500/20">
                <div className="text-2xl font-bold text-blue-400">Scopus</div>
                <div className="text-sm text-gray-400">Research Published</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

