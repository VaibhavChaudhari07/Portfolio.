import { Users, Trophy, TrendingUp, Heart } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'National Yoga Player',
      subtitle: 'Sportsmanship & Discipline',
      icon: Heart,
      description: 'Represented at national-level yoga competitions, showcasing excellence in flexibility, strength, and mindfulness. Demonstrated sportsmanship, discipline, and consistent practice. Participated in national championships and contributed to promoting yoga among youth.',
      skills: ['Discipline', 'Sportsmanship', 'Flexibility', 'Mindfulness'],
      period: '2024'
    },
    {
      id: 2,
      title: 'Technical Skills Development',
      subtitle: 'Continuous Learning & Growth',
      icon: TrendingUp,
      description: 'Committed to continuous learning with focus on mastering Java, Data Structures & Algorithms, and advanced AI/ML concepts. Preparing for GATE 2026 while building practical projects and gaining industry-relevant experience.',
      timeline: [
        { period: 'Next 6 Months', goal: 'Java & DSA Mastery' },
        { period: 'Next 1 Year', goal: 'Advanced AI/ML Projects' },
        { period: '1.5 Years', goal: 'GATE 2026 & Placements' }
      ],
      period: 'Ongoing'
    }
  ];

  const ExperienceCard = ({ experience, index }) => (
    <div className="relative bg-gray-800/50 rounded-2xl p-8 border border-gray-700 hover:border-orange-500/30 transition-all duration-300">
      {/* Left Border Accent */}
      <div className="absolute left-0 top-8 bottom-8 w-1 bg-gradient-to-b from-orange-500 to-orange-400 rounded-full" />

      <div className="flex items-start gap-6">
        {/* Icon */}
        <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-400 rounded-2xl flex items-center justify-center flex-shrink-0">
          <experience.icon size={28} className="text-white" />
        </div>

        {/* Content */}
        <div className="flex-1 space-y-6">
          {/* Header */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">{experience.title}</h3>
            <p className="text-orange-500 font-semibold mb-1">{experience.subtitle}</p>
            <p className="text-sm text-gray-400">{experience.period}</p>
          </div>

          {/* Description */}
          <p className="text-gray-300 leading-relaxed">{experience.description}</p>

          {/* Achievements (for hackathon organizer) */}
          {experience.achievements && (
            <div className="grid grid-cols-3 gap-4">
              {experience.achievements.map((achievement, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-2xl font-bold text-orange-500">{achievement.value}</div>
                  <div className="text-sm text-gray-400 uppercase tracking-wider">{achievement.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Timeline (for technical development) */}
          {experience.timeline && (
            <div className="space-y-4">
              {experience.timeline.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-1 h-8 bg-orange-500/60 rounded-full flex-shrink-0" />
                  <div className="flex-1 flex justify-between items-center">
                    <span className="text-gray-400">{item.period}</span>
                    <span className="text-white font-medium">{item.goal}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Skills */}
          {experience.skills && (
            <div className="flex flex-wrap gap-2">
              {experience.skills.map((skill, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1 bg-orange-500 text-white rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section id="experience" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Leadership & Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-400 mx-auto mb-6" />
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Building communities and leading initiatives
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <ExperienceCard 
              key={experience.id} 
              experience={experience} 
              index={index}
            />
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-gray-900/50 rounded-2xl p-8 border border-gray-800">
            <h3 className="text-2xl font-bold text-white mb-4">Looking Forward</h3>
            <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
              I'm actively seeking internship opportunities and collaborative projects where I can apply my 
              technical skills, leadership experience, and passion for innovation. My goal is to contribute 
              to meaningful projects while continuing to learn and grow in the tech industry.
            </p>
            <div className="mt-6">
              <button className="bg-gradient-to-r from-orange-500 to-orange-400 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 hover:-translate-y-1">
                Let's Connect
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

