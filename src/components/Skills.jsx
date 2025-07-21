import { useState, useEffect, useRef } from 'react';
import { Code, Brain, Wrench } from 'lucide-react';
import MagicBento from './MagicBento';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const SkillBar = ({ skill, percentage, delay = 0 }) => (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-gray-300 font-medium">{skill}</span>
        <span className="text-orange-500 font-semibold">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-orange-500 to-orange-400 rounded-full transition-all duration-1000 ease-out"
          style={{
            width: isVisible ? `${percentage}%` : '0%',
            transitionDelay: `${delay}ms`
          }}
        />
      </div>
    </div>
  );

  const skillCategories = [
    {
      icon: Code,
      title: 'Web Development',
      skills: [
        { name: 'React.js', percentage: 90 },
        { name: 'Node.js', percentage: 85 },
        { name: 'MongoDB', percentage: 80 },
        { name: 'Express.js', percentage: 85 }
      ]
    },
    {
      icon: Brain,
      title: 'AI/ML & Programming',
      skills: [
        { name: 'Python', percentage: 88 },
        { name: 'Machine Learning', percentage: 75 },
        { name: 'Computer Vision', percentage: 70 },
        { name: 'Data Structures & Algorithms', percentage: 78 }
      ]
    },
    {
      icon: Wrench,
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git & GitHub', percentage: 85 },
        { name: 'Java (Learning)', percentage: 65 },
        { name: 'App Development', percentage: 72 },
        { name: 'Gen AI Tools', percentage: 90 }
      ]
    }
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-black font-poppins">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 font-galgo-heading">
            Technical Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-400 mx-auto mb-6" />
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </div>

        {/* Skills Grid with MagicBento */}
        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <MagicBento
              key={categoryIndex}
              textAutoHide={true}
              enableStars={true}
              enableSpotlight={true}
              enableBorderGlow={true}
              enableTilt={true}
              enableMagnetism={true}
              clickEffect={true}
              spotlightRadius={400}
              particleCount={15}
              glowColor="255, 69, 0"
              className="h-full card"
            >
              <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800 hover:border-orange-500/30 transition-all duration-300 h-full">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-400 rounded-xl flex items-center justify-center">
                    <category.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar 
                      key={skillIndex}
                      skill={skill.name}
                      percentage={skill.percentage}
                      delay={categoryIndex * 200 + skillIndex * 100}
                    />
                  ))}
                </div>
              </div>
            </MagicBento>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white text-center mb-8">Additional Technologies</h3>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-4">
            {[
              'Spotify API', 'IoT', 'Hardware Integration', 
              'ChatGPT', 'REST APIs', 'Database Design',
              'Agile Methodology', 'Team Leadership', 'Project Management'
            ].map((tech, index) => (
              <span 
                key={index}
                className="px-6 py-3 min-h-[48px] bg-gray-800 text-gray-300 rounded-full border border-gray-700 hover:border-orange-500/50 hover:text-orange-500 hover:bg-gray-700/50 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25 shadow-md shadow-black/20 transition-all duration-300 text-lg font-semibold cursor-pointer flex items-center group"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

